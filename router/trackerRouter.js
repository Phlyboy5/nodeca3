const express = require('express');
const trackerController = require('../controllers/trackerController');


const router = express.Router();

router
    .route('/')
    .get(trackerController.getAllTrack)
    .post(trackerController.createTrack);
    
router
    .route('/:id')
    .get(trackerController.getTrack)
    .patch(trackerController.updateTrack)
    .delete(trackerController.deleteTrack);

module.exports = router;