function validateInput(input) {
    if(input !== "" && input !== null && input !== undefined){
        return true
    }
    return false
}

module.exports = validateInput;