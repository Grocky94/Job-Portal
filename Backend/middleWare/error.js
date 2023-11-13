import { ErrorResponse } from "../Utils/ErrorResponse.js";


export const errorHandler = (err, req, res, next) => {

    let error = { ...err }
    error.message = err.message

    if (err.message === 'CastError') {
        const message = `Resourse not found ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    // mongoose duplicate value
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400)
    }

    // mongoose Validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => ' ' + val.message);
        error = new ErrorResponse(message, 400)
    }

    res.status(error.codeStatus || 500).json({ success: false, error: error.message || 'server error' })
}