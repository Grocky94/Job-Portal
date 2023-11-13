import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add"


export default function CardElement({ jobTitle, description, category, location, id }) {
    const { palette } = useTheme()
    return (
        <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
            <CardContent>
                <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
                    <IconButton><LocationOnIcon sx={{ color: palette.primary.dark, fontSize: 18 }} ></LocationOnIcon></IconButton>{location}
                </Typography>
                <Typography variant="h5" component="div">
                    {jobTitle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="body2">
                    Description : {description.split(" ").slice(0, 15).join(" ") + "..."}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation variant='contined' size="small" sx={{
                    background: palette.primary.main, color: "white", "&:hover": { backgroundColor: palette.secondary.dark, color: "white" },
                }} startIcon={<AddIcon />}><Link style={{
                    textDecoration: "none", color: "white", boxShadow: 0, "&:hover": {
                        color: "white"
                    },
                }} to={`/job/${id}`}>More Details</Link></Button>
        </CardActions>
        </Card >
    );
}