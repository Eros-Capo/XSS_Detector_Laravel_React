import React from 'react';
import ReactDOM from 'react-dom';
import {CustomNavbar} from "./navbar/Navbars";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import {XSSDetector} from "./pages/XSSDetector";
import {Documentation} from "./pages/Documentation";
import {AboutMe} from "./pages/AboutMe";
import {Contacts} from "./pages/Contacts";
import {ThankYouPage} from "./pages/ThankYou";
import {Report} from "./pages/Report";

function App() {
    return (
        <>
            <Router>
                <CustomNavbar/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/XSSDetector" component={XSSDetector}/>
                    <Route path="/Documentation" component={Documentation}/>
                    <Route path="/AboutMe" component={AboutMe}/>
                    <Route path="/Contacts" component={Contacts}/>
                    <Route path="/ThankYou" component={ThankYouPage}/>
                    <Route path="/Report" component={Report}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
