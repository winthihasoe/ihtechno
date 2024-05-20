// src/components/DesigningBackend.js
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";

const DesigningBackend = () => {
    return (
        <Box bgcolor="#f5f5f5" py={3}>
            <Container maxWidth="xl">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                        <Box
                            component="img"
                            src="/images/backend.webp" // Adjust the path as necessary
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
                                py: 5,
                                px: 3,
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                            >
                                Seamless Backend Development
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                Our backend development services ensure that
                                your website or application runs smoothly and
                                efficiently. At IHTechno, we focus on building
                                robust, scalable, and secure backends that
                                support your business needs.
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                By leveraging the latest technologies and best
                                practices, we create powerful server-side
                                solutions that handle data processing, storage,
                                and integration seamlessly. Our expertise
                                ensures that your digital infrastructure is
                                reliable, flexible, and capable of growing with
                                your business.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DesigningBackend;
