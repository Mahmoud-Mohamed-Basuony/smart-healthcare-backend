const mongoose = require('mongoose');
const validator = require('validator'); 

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Doctor full name is required'],
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
      validate: [validator.isEmail, 'Please provide a valid email address'], 
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
      validate: {
        validator: function (val) {
          return validator.isMobilePhone(val, 'ar-EG');
        },
        message: 'Please provide a valid 11-digit Egyptian mobile number',
      },
    },
    image: {
      type: String,
      default: 'https://res.cloudinary.com/demo/image/upload/v1/default-avatar.png',
    },
    speciality: {
      type: String,
      required: [true, 'Medical speciality is required'],
      trim: true,
    },
    degree: {
      type: String,
      required: [true, 'Academic degree is required'],
      trim: true,
    },
    experience: {
      type: Number,
      required: [true, 'Years of experience is required'],
      min: [0, 'Experience cannot be negative'],
    },
    about: {
      type: String,
      required: [true, 'About section is required'],
      trim: true,
    },
    fees: {
      type: Number,
      required: [true, 'Consultation fees are required'],
      min: [0, 'Fees cannot be negative'],
    },
    clinicAddress: {
      governorate: {
        type: String,
        required: [true, 'Governorate is required'],
        trim: true,
      },
      area: {
        type: String,
        required: [true, 'Area / District is required'],
        trim: true,
      },
      streetDetails: {
        type: String,
        required: [true, 'Detailed clinic address is required'],
        trim: true,
        minlength: [5, 'Address details must be at least 5 characters long'],
      },
    },
    approvalStatus: {
      type: String,
      enum: {
        values: ['pending', 'approved', 'rejected'],
        message: 'Approval status must be pending, approved, or rejected',
      },
      default: 'pending',
    },
    available: {
      type: Boolean,
      default: true,
    },
    workingSchedule: {
      workingDays: {
        type: [String],
        required: [true, 'Working days are required'],
        enum: {
          values: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          message: 'Invalid day name',
        },
      },
      startTime: {
        type: String,
        required: [true, 'Start time is required (e.g., 09:00)'],
      },
      endTime: {
        type: String,
        required: [true, 'End time is required (e.g., 17:00)'],
      },
      slotDuration: {
        type: Number,
        required: [true, 'Slot duration in minutes is required'],
        default: 20,
      },
    },
    slots_booked: {
      type: Object,
      default: {},
    },
    averageRating: {
      type: Number,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
  },
);

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;