var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = require('../middleware/uploadHost')
const {upLoadCloudinary} = require('../middleware/uploadCloudinary');
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',upload.array('images',5),async function(req, res, next) {
  console.log("????")
  console.log(req.files)
  var imageUrls = [];
  if(!req.files) {
    res.status(404).send(json({message:'Bad reuest'}))
  }else {
    for(let i =0 ;i <req.files.length; i++) {
      await upLoadCloudinary(req.files[i].path)
      .then(result=>{
        imageUrls.push( result.secure_url)
      })
      .catch(err=>{
        console.log(err)
        return res.send(json({message:'Server Error'}))
      })
    }
    console.log(imageUrls)
    return res.render('../views/return.ejs',{imageUrls:imageUrls}); 
  }

});




module.exports = router;
