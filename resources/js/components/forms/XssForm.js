import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

export class XssForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            blob: null,
            redirect: false,
        }

        this.takeUrl = this.takeUrl.bind(this);
        this.redirectToPage = this.redirectToPage.bind(this);
        this.setBlob = this.setBlob.bind(this);
    }

    redirectToPage() {
        this.setState({redirect: true})
    }

    setBlob(data) {
        this.setState({blob: data})
    }

    takeUrl = (event) => {
        this.setState({url: event.target.value})
    }

    handleForm = (e) => {
        e.preventDefault();
        let packet = {
            url: this.state.url
        };
        const csfr = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN=')).split('=')[1];

        axios({
            method: 'post',
            url: '/formxss',
            data: packet,
            headers: {
                "X-CSRFToken": csfr
            }
        }).then(res => {
            this.setBlob(res.data[0].pdf);
            this.redirectToPage();
        }).catch(error => {
            if (error.response && error.response.data) {
                console.log("ERROR:: ", error.response.data);
            }
        });
    }

    render() {
        const {blob} = this.state;
        return (
            <>
                {this.state.redirect && (
                    <Redirect to={{
                        pathname: '/Report',
                        blob: blob
                    }}/>
                )}

                <form onSubmit={this.handleForm}>
                    <div className="col-12 form-group">
                        <label className="w-100 text-left">Url to test:
                            <input type="url" className="form-control" onChange={this.takeUrl}/>
                        </label>
                    </div>

                    <div className="d-flex mb-3 justify-content-center">
                        <input type="submit" name="Submit" className="btn btn-primary" onClick={this.handleForm}
                               value="Submit"/>
                    </div>
                </form>
            </>
        );
    }
}
