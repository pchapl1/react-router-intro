import React from "react";
// import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ContactPage = (props) => {
    const navigate = useNavigate()

    return (
        <div className="ContactPage">
            {/* <NavBar /> */}
            <Container>
            <h1>Contact Page</h1>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="first name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last name" placeholder="last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button onClick={()=> {navigate('/')}}>Submit</Button>

                </Form>
            {/* <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="" />
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="" />
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="" />
            {/* <button onClick={()=>{navigate('/')}}>submit</button> */}

        

            </Container>
        </div>
    )
}

export default ContactPage;