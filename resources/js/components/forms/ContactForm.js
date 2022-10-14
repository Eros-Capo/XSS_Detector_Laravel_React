import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            surname : '',
            phone : '',
            email : '',
            message : '',
            redirect: false
        }

        this.takeName = this.takeName.bind(this);
        this.takeSurname = this.takeSurname.bind(this);
        this.takePhone = this.takePhone.bind(this);
        this.takeEmail = this.takeEmail.bind(this);
        this.takeMessage = this.takeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.redirectToPage = this.redirectToPage.bind(this);

    }

    redirectToPage() { this.setState({redirect: true})}

    takeName(event){
        this.setState({name : event.target.value})
    }
    takeSurname(event){
        this.setState({surname : event.target.value})
    }
    takePhone(event){
        this.setState({phone : event.target.value})
    }
    takeEmail(event){
        this.setState({email : event.target.value})
    }
    takeMessage(event){
        this.setState({message : event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const packets = {
            name:  this.state.name,
            surname: this.state.surname,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.message,
        };

        axios.post('/formrequest', packets)
            .then(
                this.redirectToPage
            )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
            });
    }

    render() {
        return (
            <>
                {this.state.redirect &&(
                 <Redirect to='/ThankYou'/>
                )}
                <form onSubmit={this.handleSubmit}>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="col-12 col-sm-6 form-group">
                            <label className="w-100 text-left">Name:
                                <input type="text" className="form-control" onChange={this.takeName}/>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label className="w-100 text-left">Surname:
                                <input type="text" className="form-control" onChange={this.takeSurname}/>
                            </label>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="col-12 col-sm-6 form-group">
                            <label className="w-100 text-left">E-mail:
                                <input type="email" className="form-control" onChange={this.takePhone}/>
                            </label>
                        </div>
                        <div className="col-12 col-sm-6 form-group">
                            <label className="w-100 text-left">Phone:
                                <input type="tel" className="form-control" onChange={this.takeEmail}/>
                            </label>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-12 form-group">
                            <label className="w-100 text-left">Message:
                                <textarea className="form-control" rows="4" onChange={this.takeMessage}/>
                            </label>
                        </div>
                    </div>
                    <div className="d-flex mb-3 justify-content-center">
                        <input type="submit" name="Submit" className="btn btn-primary" value="Submit"/>
                    </div>
                </form>
            </>
        )
    }
}
