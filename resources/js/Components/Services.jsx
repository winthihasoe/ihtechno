// src/components/Services.jsx
import React from "react";
import {
    Container,
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";

const services = [
    {
        title: "Web Development",
        image: "/images/web.webp", // Adjust the path as necessary
        description: "We build responsive and scalable web applications.",
    },
    {
        title: "iOS App Development",
        image: "/images/ios.webp", // Adjust the path as necessary
        description: "We develop high-quality iOS applications.",
    },
    {
        title: "Android Development",
        image: "/images/android.webp", // Adjust the path as necessary
        description: "We create robust Android applications.",
    },
];

const Services = () => {
    return (
        <Container sx={{ py: 10 }} id="services">
            <Typography variant="h4" component="h2" align="center" mb={5}>
                Services
            </Typography>
            <Grid
                container
                spacing={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {services.map((service, index) => (
                    <Grid item key={index} xs={10} sm={4} md={4}>
                        <Card
                            sx={{
                                height: "100%",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "20px",
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={service.image}
                                alt={service.title}
                                sx={{ height: 300 }}
                            />
                            <CardContent>
                                <Typography
                                    fontSize={22}
                                    fontWeight={400}
                                    component="h3"
                                    align="center"
                                >
                                    {service.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button variant="contained" color="primary" href="#quotation">
                    Get Quotation
                </Button>
            </Box> */}
        </Container>
    );
};

export default Services;
