import React from 'react'
import { styled, AppBar, Box, Toolbar, IconButton, Typography, InputBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import { useProSidebar } from "react-pro-sidebar";
import { alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
    // border: "1px solid black",
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    Height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid black",
    marginLeft: "0%",
    marginTop: "2%"
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    '&.MuiInputBase-input': {
        padding: theme.spacing(2, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:hover': {
                width: "20ch"
            }
        }
    },
    // border: "1px solid black",
    marginLeft: "15%"
}))

const HeaderTop = () => {
    const { collapseSidebar } = useProSidebar();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ boxShadow: 0 }}>
                <Toolbar>
                    <IconButton onClick={() => collapseSidebar()}
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='open-drawer'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                        HR APP
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder='Search...'
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default HeaderTop
