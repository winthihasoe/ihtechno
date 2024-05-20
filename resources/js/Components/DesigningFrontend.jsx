// src/components/DesigningFrontend.js
import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";

const DesigningFrontend = () => {
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
                                Designing Frontend
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                At IHTechno, we believe in designing frontends
                                that are not only visually appealing but also
                                simple and intuitive. Our approach focuses on
                                creating clean, user-friendly interfaces that
                                enhance the user experience. By eliminating
                                unnecessary complexity and emphasizing essential
                                elements, we ensure that our websites and
                                applications are easy to navigate and use.
                            </Typography>
                            <Typography fontSize={12} paragraph>
                                This simplicity not only improves usability but
                                also makes maintenance and updates more
                                efficient. Our goal is to make sophisticated
                                technology accessible and straightforward for
                                everyone.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ height: "100%" }}>
                        <Box
                            component="img"
                            src="/images/frontend.webp" // Adjust the path as necessary
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

export default DesigningFrontend;
