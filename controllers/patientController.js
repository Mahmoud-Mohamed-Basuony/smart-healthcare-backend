const Patient = require("../models/patientModel")

exports.createPatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                patient
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


exports.deletPatient = async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
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
exports.updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                patient
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
exports.getAllPatients = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).json({
            status: 'success',
            length: patient.length,
            data: {
                patient
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

exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                patient
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