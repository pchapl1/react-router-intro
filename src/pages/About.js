import React from "react";
// import NavBar from "../Components/NavBar";
import Container from 'react-bootstrap/Container';



const AboutPage = (props) => {


    return (
        <div className="AboutPage">
            {/* <NavBar /> */}
            <Container>

            <h1>About Page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, sed assumenda tempore asperiores fugit quisquam non nulla sit et earum! Iusto temporibus quia ducimus aliquid, nam mollitia ipsum ipsa nisi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aspernatur dignissimos itaque officia neque velit ipsum tenetur est molestiae, officiis odio. Quaerat a error nihil aliquam soluta unde saepe quae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti excepturi dolorum vero necessitatibus animi esse quia, soluta dolores ab delectus nihil ipsa, sapiente fugit doloremque reprehenderit enim accusamus cumque cupiditate!</p>
        
            </Container>
        </div>
    )
}

export default AboutPage;