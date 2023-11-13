import React from 'react'
import { Sidebar, Menu, MenuItem, menuClasses, useProSidebar } from "react-pro-sidebar";
import { Box, Button, IconButton, useTheme, Avatar, colors } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import CategoryIcon from '@mui/icons-material/Category';
import WorkIcon from '@mui/icons-material/Work';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Person4Icon from '@mui/icons-material/Person4';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../../redux/actions/userAction";
import { useNavigate } from 'react-router-dom';
import dashboardlogo from "../../images/dashboard-logo.jpeg";
import groupPic from "../../images/group-image.png";

const SidebarAdm = () => {
    const { userInfo } = useSelector(state => state.signIn)
    const { palette } = useTheme();
    const { collapsed } = useProSidebar()
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const logOut = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/login')
        }, 500)
    }

    return (
        <>
            <Sidebar backgroundColor='#ffcd38' style={{ borderRightStyle: "none" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100vh" }}>
                    <Box>
                        <Box sx={{ pt: 3, pd: 5, display: "flex", justifyContent: "center" }}>
                            {
                                collapsed ?
                                    <Avatar alt='logo dashboard' src={dashboardlogo} /> :
                                    <Box sx={{ display: "flex", justifyContent: "center", }}>
                                        <img style={{ width: "100px", height: "100px", textAlign: "center", backgroundColor: "rgba(178, 135, 4,0.9)", borderRadius: "50%" }} src={groupPic} />

                                    </Box>
                            }
                        </Box>
                        <Menu
                            menuItemstyle={{
                                Button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "#fafafa"
                                    },
                                    [`&.${menuClasses.disabled}`]: {
                                        color: "green"
                                    },
                                    '&.hover': {
                                        // backgroundColor: "rgba(23,105,170,1)",
                                        color: "#fafafa",

                                    },
                                },
                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: palette.primary.main
                                    }
                                },

                            }}>

                            {
                                userInfo && userInfo.role === 1 ?
                                    <>
                                        <MenuItem component={<Link to='/admin/dashboard' />} icon={<DashboardIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Dashboard </MenuItem>
                                        <MenuItem component={<Link to='/admin/users' />} icon={<GroupAddIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Users</MenuItem>
                                        <MenuItem component={<Link to='/admin/jobs' />} icon={<WorkIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Jobs</MenuItem>
                                        <MenuItem component={<Link to='/admin/category' />} icon={<CategoryIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Jobs</MenuItem> </>
                                    :
                                    <>
                                        <MenuItem component={<Link to='/user/dashboard' />} icon={<DashboardIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Dashboard </MenuItem>
                                        <MenuItem component={<Link to='/user/jobs' />} icon={<WorkHistoryIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Applied Jobs</MenuItem>
                                        <MenuItem component={<Link to='/user/info' />} icon={<Person4Icon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Personal Info</MenuItem>
                                    </>
                            }

                        </Menu>
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Menu
                            menuItemstyle={{

                                button: {
                                    [`&.${menuClasses.button}`]: {
                                        color: "white"
                                    },
                                    '&.hover': {
                                        backgroundColor: "white",
                                        color: "black"
                                    }
                                },

                                icon: {
                                    [`&.${menuClasses.icon}`]: {
                                        color: palette.primary.main
                                    }
                                }
                            }}>
                            <MenuItem onClick={logOut} icon={<LoginIcon sx={{ color: "#ffa733" }} />} style={{ color: "#b28704" }}>Log Out</MenuItem>

                        </Menu>
                    </Box>
                </Box>

            </Sidebar >
        </>
    )
}

export default SidebarAdm
