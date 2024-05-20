// resources/js/Components/Footer.js
import React from "react";
import { Container, Box, Typography, Link, Grid } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                pt: 5,
                pb: 2,
                px: 2,
                mt: "auto",
                backgroundColor: "#333",
                color: "white",
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Quick Links */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" mb={2}>
                            Quick Links
                        </Typography>
                        <Link
                            href="/"
                            color="inherit"
                            variant="body1"
                            display="block"
                            sx={{ mb: 2 }}
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            color="inherit"
                            variant="body1"
                            display="block"
                            sx={{ mb: 2 }}
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            color="inherit"
                            variant="body1"
                            display="block"
                            sx={{ mb: 2 }}
                        >
                            About Us
                        </Link>
                    </Grid>
                    {/* Contact Information */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" mb={2}>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" mb={2}>
                            <Email sx={{ mr: 1 }} />
                            ihtechno.web@gmail.com
                        </Typography>
                        <Typography
                            variant="body1"
                            display="flex"
                            alignItems="center"
                            mb={2}
                        >
                            <Phone sx={{ mr: 1 }} /> +959954837940
                        </Typography>
                        <Typography
                            variant="body1"
                            display="flex"
                            alignItems="center"
                            mb={3}
                        >
                            Myanmar
                        </Typography>
                    </Grid>
                </Grid>
                <Typography textAlign="center" fontSize={16} mt={5}>
                    Copyright IHTechno Co.,Ltd 2024
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
