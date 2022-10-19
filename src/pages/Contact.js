import React from "react";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";


const ContactPage = (props) => {
    const navigate = useNavigate()

    return (
        <div className="ContactPage">
            <NavBar />
            <h1>Contact Page</h1>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="" />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="" />
            <button onClick={()=>{navigate('/')}}>submit</button>
        </div>
    )
}

export default ContactPage;