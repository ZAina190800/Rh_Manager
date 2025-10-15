function validateInput(input) {
    if(input !== "" && input !== undefined){
        return true
    }
    return false
}

module.exports = validateInput;