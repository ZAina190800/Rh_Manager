const CreateError = (status, message, detail = null) => {

    const error = new Error(message)
    error.status = status,
    error.detail = detail
    return error
}

module.exports = CreateError;