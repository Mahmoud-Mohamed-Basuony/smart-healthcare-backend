const express = require("express")
const patientController = require("../controllers/patientController");

const router = express.Router()

router
    .route("/")
    .get(patientController.getAllPatients)
    .post(patientController.createPatient)

router
    .route("/:id")
    .get(patientController.getPatientById)
    .patch(patientController.updatePatient)
    .delete(patientController.deletPatient)

module.exports = router