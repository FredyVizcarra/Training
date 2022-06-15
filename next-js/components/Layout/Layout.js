import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import { Container } from "semantic-ui-react";

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Navbar />
            <Container >
                {children}
            </Container>
            <Footer />

        </div>
    )
}

export default Layout;