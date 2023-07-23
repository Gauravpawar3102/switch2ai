const mongoose = require('mongoose');

const basicDetailsSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'please enter your email'],
  },
  //skype ,dribble ,linkedin ,github,website

  location: String,
  phone: Number,
  urls: [
    {
      urlName: String,
      url: String,
    },
  ],
});

const companyDetailsSchema = new mongoose.Schema({
  title: String,
  companyName: String,
  startDate: Date,
  endDate: Date,
  location: {
    city: String,
    country: String,
  },
  workSummary: String,
});
const projectDetailsSchema = new mongoose.Schema({
  title: String,
  projectSummary: String,
  projectDate: Date,
  projectUrl: String,
});

const educationDetailsSchema = new mongoose.Schema({
  degree: String,
  branch: String,
  instituteName: String,
  startDate: Date,
  endDate: Date,
  location: String,
  gpa: Number,
});

const certificationDetailsSchema = new mongoose.Schema({
  certificateName: String,
  certificateProvider: String,
  certificateDate: Date,
  description: String,
});

const resumeDetailsSchema = mongoose.Schema({
  basicDetails: basicDetailsSchema,
  totalWorkExperience: Number,
  summary: String,
  skills: [String],
  careerObjective: String,
  companyDetails: [companyDetailsSchema],
  projectDetails: [projectDetailsSchema],
  educationDetails: [educationDetailsSchema],
  certificationDetails: [certificationDetailsSchema],
});

module.exports = mongoose.model('ResumeDetails', resumeDetailsSchema);
// module.exports = mongoose.model('CompanyDetails', companyDetailsSchema);
