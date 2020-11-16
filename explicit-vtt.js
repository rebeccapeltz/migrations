require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.api
.update("UnderwritersLaboratoryPsa_kzaepe", {
  type: 'upload',
  resource_type: 'video',
  raw_convert: 'google_speech:vtt'
})
.then(result => {
  console.log(JSON.stringify(result, null, 1))
})
.catch(error => console.error(error))






