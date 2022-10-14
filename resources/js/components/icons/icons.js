import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faCodepen, faStackOverflow} from "@fortawesome/free-brands-svg-icons";

    /** NAVBAR ICONS **/

export const MenuHome = ()=> {
    return(
        <FontAwesomeIcon icon={faHome} size="2x"/>
    );
}

    /** CONTACT ICONS **/

export const GithubIcon = ()=> {
    return(
        <FontAwesomeIcon icon={faGithub} size="2x"/>
    );
}

export const CodepenIcon = ()=> {
    return(
        <FontAwesomeIcon icon={faCodepen} size="2x"/>
    );
}

export const StackOverflowIcon = ()=> {
    return(
        <FontAwesomeIcon icon={faStackOverflow} size="2x"/>
    );
}
