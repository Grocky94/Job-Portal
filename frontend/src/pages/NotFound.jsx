import React from 'react'
import { Box } from '@mui/material';
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
const NotFound = () => {
    return (
        <>
            <NavBar />
            <Box sx={{ height: "81vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1>Page not found</h1>
            </Box>
            <Footer />
        </>
    )
}

export default NotFound
