const express = require("express")
const patientController = require("../conterollers/patientConteroller")

const router = express.Router()

router
    .route("/")
    .get(patientController.getAllPatients)
    .post(patientController.createPatient)

router
    .route("/:id")
    .patch(patientController.updatePatient)
    .delete(patientController.deletPatient)

module.exports = router