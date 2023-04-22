
const Tracker = require('../models/trackerModel');
// const APIFeatures = require('../utils/apiFeatures');


exports.getAllTrack = async (req, res) => {
    try {

        const track = await Tracker.find();

        //SEND RESPONSE
        res.status(200).json({
            tracks: [...track]
        });

    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        });
    }
}

exports.getTrack = async (req, res) => {
    try {
        // const track = await Tracker.findById(req.params.id)
        const track = await Tracker.findOne({ name: req.params.id })

        res.status(200).json({
            status: 'success',
            data: {
                track
            }
        })

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}



exports.createTrack = async (req, res) => {
    try {
        const track = await Tracker.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                track: track
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Invalid Data send..'
        })
    }
}

exports.updateTrack = async (req, res) => {
    try {
        const filter = { name: req.params.id };
        const update = req.body ;
        const track = await Tracker.findOneAndUpdate(filter , update , {
            new: true,
            runValidators: true
        })
        res.status(204).json({
            status: "successfully updated",
            data: {
                track
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.deleteTrack = async (req, res) => {

    try {
        // await Tracker.findByIdAndDelete(req.params.id);

        Tracker.findOneAndDelete({name: req.params.id }, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Deleted User : ", docs);
            }
        });
        
        res.status(200).json({
            status: "success",
            data: null
        });

    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}