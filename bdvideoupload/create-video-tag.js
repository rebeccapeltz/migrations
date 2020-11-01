require('dotenv').config()
const cloudinary = require('cloudinary').v2

console.log(cloudinary.video('runner-woman01', { controls: 'true' }))
