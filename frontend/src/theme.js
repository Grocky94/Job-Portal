import { createTheme } from "@mui/material/styles";
// import { amber, orange } from "@mui/material/colors"

export const theme = createTheme({
    palette: {
        primary: {
            light: '#b28704',
            main: '#ffc107',
            dark: '#ffcd38',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b26500',
            main: '#ff9100',
            dark: '#ffa733',
            contrastText: '#000',
        },
    },
});