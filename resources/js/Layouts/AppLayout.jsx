import React from "react";
import { Container } from "@mui/material";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    );
};

export default AppLayout;
