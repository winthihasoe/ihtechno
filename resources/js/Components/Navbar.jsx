// resources/js/Components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@inertiajs/react";
import logo from "../../../public/images/ihtechnoLogo.png";

const Navbar = () => {
    return (
        <AppBar position="static" color="simple">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
                >
                    <Link
                        href="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <img
                            src={logo}
                            alt="Top Faith Logo"
                            style={{ marginRight: "10px", height: "80px" }}
                        />
                    </Link>
                </Typography>

                <Button color="inherit" component={Link} href="#services">
                    Services
                </Button>
                <Button color="inherit" component={Link} href="#about">
                    About Us
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
