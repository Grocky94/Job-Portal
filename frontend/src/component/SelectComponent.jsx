import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';


const SelectComponent = ({ handleChangeCategory, cat }) => {
    const { jobType } = useSelector((state) => state.jobTypeAll)

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Category</InputLabel>
                <Select
                    labelId='select-label'
                    id='select'
                    value={cat}
                    label= "Category"
                    onChange={handleChangeCategory}
                >
                    <MenuItem value="">ALL</MenuItem>
                    {
                        jobType && jobType.map((jt) => (
                            <MenuItem key={jt._id} value={jt._id}>{jt.jobTypeName}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </Box >
    )
}

export default SelectComponent
