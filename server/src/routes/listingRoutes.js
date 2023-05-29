const express = require('express');
const router = express.Router();
const {createListing, getAllListing, getListingByCategory, getListingById, editListingById, updateListing, deleteListing} = require('../Controller/listingController');
const multer = require('multer');
// const upload = multer({dest:'data/uploads'}).single('coverImage');
// const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'data/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

const upload = multer({ storage: storage });


const cpUpload = upload.fields([{ name: 'coverImage', maxCount: 1 }, { name: 'images', maxCount: 8 }])

router.post('/create',  cpUpload, createListing);
router.get('/all', getAllListing);
router.get('/:category', getListingByCategory);
router.get('/:category/:listingId', getListingById);
router.get('/edit/:category/:listingId', editListingById);
router.post('/update', cpUpload, updateListing);
router.get('/delete/:listingId', deleteListing);

module.exports = router;