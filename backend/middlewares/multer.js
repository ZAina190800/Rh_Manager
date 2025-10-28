const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'public/images/') // Chemin du dossier
        
    },

    filename: (req, file, cd) => {
        cd(null, Date.now() + path.extname(file.originalname))
    }

})

const upload = multer ({storage})

module.exports = upload;