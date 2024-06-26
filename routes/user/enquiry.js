const express = require('express');
const { newEnquiry, getEnquiry } = require('../../controllers/user/enquiryController');
const router = express.Router();

router.route('/enquiry/new').post(newEnquiry);
router.route('/enquiry').get(getEnquiry);

module.exports = router;