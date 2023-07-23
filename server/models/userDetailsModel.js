const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'please enter your first name'],
  },
  lastName: {
    type: String,
    required: [true, 'please enter your last name'],
  },
  email: {
    type: String,
    required: [true, 'please enter your email'],
  },
  resumeTemplates: [Number],
  userPlan: String,
});

module.exports = mongoose.model('UserDetails', userDetailsSchema);
