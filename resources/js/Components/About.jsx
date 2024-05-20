// src/components/About.js
import React from "react";
import { Container, Box, Typography } from "@mui/material";

const About = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#333",
                color: "white",
                py: 8,
            }}
            id="about"
        >
            <Container maxWidth="md">
                <Typography variant="h4" component="h2" align="center" mb={5}>
                    About IHTechno
                </Typography>
                <Typography fontSize={16} align="center" paragraph>
                    At IHTechno, we specialize in crafting high-quality
                    websites, Android apps, and iOS apps that meet the unique
                    needs of our clients. With a dedicated team of experienced
                    developers and designers, we are committed to delivering
                    innovative and user-friendly solutions.
                </Typography>
                <Typography fontSize={16} align="center" paragraph>
                    Our mission is to help businesses thrive in the digital age
                    by providing top-notch development services that ensure
                    seamless user experiences and drive growth. Whether you need
                    a cutting-edge website or a robust mobile application,
                    IHTechno is here to transform your vision into reality.
                </Typography>
            </Container>
        </Box>
    );
};

export default About;
