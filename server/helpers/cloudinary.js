const cloudinary = require('cloudinary').v2;
const multer = require('multer');


cloudinary.config({
    cloud_name : 'ddabzimk5',
    api_key : '117724241729663',
    api_secret: 'NRUhzolgqEueIDwOtQGC_AsE1Jk',
});

const storage = multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file,{
        resource_type : 'auto'
    });

    return result;
}

const upload =multer({storage});

module.exports = {upload, imageUploadUtil}; 