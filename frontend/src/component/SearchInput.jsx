import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    search: yup
        .string('Enter your search query')
        .required('this field can not be empty'),
});

const SearchInput = () => {

    const navigate = useNavigate();

    const onSubmit = (values, actions) => {
        const { search } = values;
        if (search.trim()) {
            navigate(`/search/${search}`)
        } else {
            navigate('/')
        }
        actions.resetForm()
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            search: ""
        },
        validationSchema: validationSchema,
        onSubmit
    });
    return (
        <form onSubmit={handleSubmit} style={{ width: "50%" }}>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <InputBase sx={{ bgcolor: "white", p: "10px" }}
                    fullWidth={true}
                    id='search'
                    name='search'
                    label="search"
                    placeholder='ex: frontend, devops'
                    value={values.search}
                    onChange={handleChange}
                    error={touched.search && Boolean(errors.search)}>
                </InputBase>
                <Button color="primary" variant='contained' type='submit' disabled={isSubmitting}>Search</Button>
            </Box>
            <Box component="span" sx={{ color: "orange" }}>{touched.search && Boolean(errors.search)}</Box>
        </form >
    )
}

export default SearchInput
