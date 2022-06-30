import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export default function NavbarItem(props) {
    return (
        <Link to={props.link} className="text-white mx-2">{props.text}</Link>
    );
}