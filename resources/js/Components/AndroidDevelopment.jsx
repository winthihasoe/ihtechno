// src/components/AndroidDevelopment.js
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";

const AndroidDevelopment = () => {
    return (
        <Box bgcolor="#f5f5f5" py={3}>
            <Container maxWidth="xl">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item xs={12} md={6} sx={{ pb: 2, height: "100%" }}>
                        <Box
                            component="img"
                            src="/images/androidDev.webp" // Adjust the path as necessary
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
                                Android App Development
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                Our Android app development services are
                                designed to bring your ideas to life on the
                                world's most popular mobile platform. At
                                IHTechno, we specialize in creating
                                high-performance, feature-rich Android
                                applications that deliver exceptional user
                                experiences.
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                Our expert team leverages the latest
                                technologies and best practices to ensure your
                                app is not only visually stunning but also
                                robust and scalable. Trust us to transform your
                                vision into a top-tier Android application that
                                stands out in the market.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AndroidDevelopment;
