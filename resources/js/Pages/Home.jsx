// resources/js/Pages/Home.js
import React from "react";
import {
    Container,
    Box,
    Typography,
    Button,
    Grid,
    Paper,
    Avatar,
    Divider,
} from "@mui/material";
import { MedicalServices, Favorite, People } from "@mui/icons-material";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Components/Hero";
import "../../css/home.css";
import Services from "@/Components/Services";
import About from "@/Components/About";
import DesigningFrontend from "@/Components/DesigningFrontend";
import DesigningBackend from "@/Components/DesigningBackend";
import IOSDevelopment from "@/Components/IOSDevelopment";
import AndroidDevelopment from "@/Components/AndroidDevelopment";
import SEO from "@/Components/SEO";

const Home = () => {
    return (
        <AppLayout>
            <SEO
                title="Home | IHTechno"
                description="At IHTechno, we specialize in crafting high-quality websites, Android apps, and iOS apps."
                keywords="web development, Android apps, iOS apps, IHTechno"
            />

            <Head title="Web solution" />
            <Hero />
            <Container maxWidth="lg">
                <Services />
            </Container>
            <About />

            <DesigningFrontend />
            <DesigningBackend />
            <Divider />
            <IOSDevelopment />
            <AndroidDevelopment />
        </AppLayout>
    );
};

export default Home;
