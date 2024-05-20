// src/components/IOSDevelopment.js
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";

const IOSDevelopment = () => {
    return (
        <Box bgcolor="#f5f5f5" py={3}>
            <Container maxWidth="xl">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                py: 8,
                                px: 3,
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                            >
                                iOS App Development
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                At IHTechno, we specialize in crafting
                                high-quality iOS applications that provide
                                seamless and engaging user experiences. Our team
                                of expert developers is dedicated to designing
                                and building apps that are not only visually
                                stunning but also highly functional and
                                intuitive.
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                By utilizing the latest iOS technologies and
                                adhering to best practices, we ensure that your
                                app performs flawlessly on all Apple devices.
                                Let us help you bring your vision to life with
                                our exceptional iOS development services.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                        <Box
                            component="img"
                            src="/images/apple.webp" // Adjust the path as necessary
                            alt="Designing Frontend"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default IOSDevelopment;
