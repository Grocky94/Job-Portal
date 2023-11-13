import React from 'react'
import { Box } from "@mui/material"
import SidebarAdm from "./Sidebar"
import HeaderTop from './HeaderTop'
const Layout = (Component) => ({ ...props }) => {
    return (
        <>
            <div style={{ display: "flex", minHeight: "100vh" }}>
                <SidebarAdm />
                <Box sx={{ width: "100%", bgcolor: "#b28704" }}>
                    <HeaderTop />
                    <Box sx={{ p: 3 }}>
                        <Component {...props} />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Layout
