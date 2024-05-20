import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Inter, sans-serif",
    },
    palette: {
        primary: {
            main: "#1F9DA1", // Custom primary color
        },
        secondary: {
            main: "#4caf50", // Custom secondary color
        },
        simple: {
            main: "#ffffff",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none", // Disable uppercase transformation
                    borderRadius: "20px",
                },
            },
        },
    },
});

export default theme;
