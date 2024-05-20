// src/components/Hero.js
import React from "react";
import {
    Container,
    Box,
    Typography,
    Button,
    Card,
    CardContent,
} from "@mui/material";

const Hero = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: "100vh",
                backgroundImage: "url(/images/hero.png)", // Adjust the path as necessary
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
        >
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                >
                    <Card
                        sx={{
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "20px",
                            padding: 3,
                            minWidth: 300,
                            maxWidth: 300,
                        }}
                    >
                        <CardContent>
                            <Typography
                                fontSize={16}
                                component="h1"
                                gutterBottom
                            >
                                At our core, we believe in simplifying the
                                complexities of the digital world. Our goal is
                                to design and develop user-friendly web
                                solutions that make life easier for our clients.
                                By focusing on intuitive interfaces and seamless
                                functionality, we ensure that users can navigate
                                and use our products effortlessly.
                            </Typography>
                            <Box textAlign="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3 }}
                                    href="#services"
                                >
                                    Get Started
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
