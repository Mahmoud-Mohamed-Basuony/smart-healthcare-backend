const Doctor = require("../models/doctorModel")

exports.createDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                doctor
            }
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }

}


exports.deletDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            data: null
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }

}
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                doctor
            }
        })
    }
    catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }

}
exports.getAllDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.find();
        res.status(200).json({
            status: 'success',
            length: doctor.length,
            data: {
                doctor
            }
        })
    }
    catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        });
    }

}


exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                doctor
            }
        })
    }
    catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error
        });
    }

}