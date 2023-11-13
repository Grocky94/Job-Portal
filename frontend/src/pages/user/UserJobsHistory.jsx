import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userProfileAction } from '../../redux/actions/userAction'
import CardElement from "../../component/CardElement"

const UserJobsHistory = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.userProfile)
    useEffect(() => {
        dispatch(userProfileAction())
    }, [])
    return (
        <>
            <Box>
                <Typography variant='h4' sx={{ color: "#afafaf" }}> Jobs History</Typography>
            </Box>
            <Box>
                {
                    user && user.jobsHistory.map((history, i) => (
                        <CardElement
                            key={i}
                            id={history._id}
                            jobTitle={history.title}
                            description={history.description}
                            category=""
                            location={history.location} />
                    ))
                }
            </Box>
        </>

    )
}

export default UserJobsHistory
