
const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Patient full name is required'],
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [60, 'Name must not exceed 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        select: false,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true,
        match: [
            /^01[0125][0-9]{8}$/,
            'Please provide a valid 11-digit Egyptian mobile number',
        ],
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/demo/image/upload/v1/default-avatar.png',
    },

    dob: {
        type: Date,
        required: [true, 'Date of birth is required'],
        validate: {
            validator: function (val) {
                return val < new Date();
            },
            message: 'Date of birth must be in the past',
        },
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['male', 'female'],
            message: 'Gender must be either male or female',
        },
    },
    bloodType: {
        type: String,
        required: [true, 'Blood type is required'],
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'unknown'],
            message: 'Invalid blood type. Allowed values: A+, A-, B+, B-, AB+, AB-, O+, O-, unknown',
        },
        default: 'unknown',
    },
    allergies: {
        type: [String],
        default: [],
    },
    chronicDiseases: {
        type: [String],
        default: [],
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

const Patient = mongoose.model("Patient", patientSchema)
module.exports = Patient