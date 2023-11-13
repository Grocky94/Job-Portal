import { Box, styled } from '@mui/material'
import React from 'react';
import headerImage from '../images/working-people.jpg'
import SearchInput from './SearchInput';


const Header = () => {

    const StyleHeader = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        minHeight: 400,
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.secondary.dark,
        alignItems: "center"
    }))
    return (
        <>
            <StyleHeader>
                <SearchInput />
            </StyleHeader>
        </>
    )
}

export default Header
