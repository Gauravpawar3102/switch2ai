
const express = require('express');
const router = express.Router();
const {
  createResume,
  getResume,
  updateResume,
  summaryOptimizers,
  workExperienceWriter,
  projectOptimizer,
} = require('../controllers/optimizeController');

router.route('/summaryoptimizer/:id').post(summaryOptimizers);
router.route('/workexperiencewriter/:id').post(workExperienceWriter);
router.route('/projectoptimizer/:id').post(projectOptimizer);
// router.route('/skilloptimizers/:id').post(skillOptimizers);
router.route('/createresume').post(createResume);
router.route('/updateresume/:id').post(updateResume);
router.route('/getresume/:id').get(getResume);
// router.route('/career').post(careerOptimizers);

module.exports = router;

