let cloudinary = require("cloudinary").v2;
let {unlink} = require('fs')
require('dotenv').config()
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// })
cloudinary.config({ 
    cloud_name: 'drnl75uiy', 
    api_key: '829615786583426', 
    api_secret: 'cbqoM5y23Y_zpkBcCy8lHBU74Js' 
  });

let upLoadCloudinary = (filename) => {

  return new Promise((resolve, reject) => {

    cloudinary.uploader.upload(filename,{folder: 'cloud'}, function (error, result) {
      
      if (result) {
        resolve(result);
        unlink(filename, (err) => {
          if (err) throw err;
          console.log('path/file.txt was deleted');
        });
      } else {
        reject(error);
      }
    }
    );
  });

};
let deleteImageCloudinary = (public_url) => {
  return new Promise((resolve, reject) => {

    cloudinary.uploader.destroy(public_url, function (error, result) {
      
      // console.log(result, error)
      if (err) {
        reject(error);
       
      } else {
        resolve(`Delete succesfully`,result);
      }
    });
  });

}
module.exports = Object.assign({}, { upLoadCloudinary,deleteImageCloudinary })