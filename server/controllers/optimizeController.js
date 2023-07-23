const OpenAI = require('openai');
const asyncHandler = require('express-async-handler');
const ResumeDetails = require('../models/resumeDetailsModel');
const dotenv = require('dotenv').config();
const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
  organization: process.env.OPEN_AI_ORG,
  apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getResume = asyncHandler(async (req, res) => {
  const getResumeDetails = await ResumeDetails.findById(req.params.id);
  if (!getResumeDetails) {
    res.status(404);
    throw new Error('resume not found');
  }
  res.status(200).json(getResumeDetails);
});
console.log(process.env.OPEN_AI_ORG);
console.log(process.env.OPEN_AI_API_KEY);
const createResume = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    basicDetails,
    summary,
    skills,
    totalWorkExperience,
    careerObjective,
    companyDetails,
    projectDetails,
    educationDetails,
    certificationDetails,
  } = req.body;
  const resume = await ResumeDetails.create({
    basicDetails: basicDetails,
    summary,
    skills,
    totalWorkExperience,
    careerObjective,
    companyDetails: companyDetails,
    projectDetails: projectDetails,
    educationDetails: educationDetails,
    certificationDetails: certificationDetails,
  });

  res.status(201).json(resume);
});

const updateResume = asyncHandler(async (req, res) => {
  const updateResumeDetails = await ResumeDetails.findById(req.params.id);

  if (!updateResumeDetails) {
    res.status(404);
    throw new Error('resume not found');
  }

  const updatedResume = await ResumeDetails.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(202).json(updatedResume);
});

// @desc Post all optimizers to Ai model
// @route Post /api/optimizers
// @access public

const summaryOptimizers = asyncHandler(async (req, res) => {
  const updateOptimizedSummaryDetails = await ResumeDetails.findById(
    req.params.id
  );
  if (!updateOptimizedSummaryDetails) {
    res.status(404);
    throw new Error('resume not found');
  }
  const { summary } = req.body;

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',

    messages: [
      {
        role: 'user',
        content: `create a professional summary for the given description  " ${summary}  "`,
      },
    ],
    // prompt: `${message}`,
    // max_tokens: 7,
    // temperature: 0,
  });
  console.log(response.data.choices[0].message.content);
  if (response.data.choices[0].message) {
    const optimizedSummary = await ResumeDetails.findByIdAndUpdate(
      req.params.id,
      { summary: `${response.data.choices[0].message.content}` }
    );

    res.status(201).json(optimizedSummary);
  }
});
const workExperienceWriter = asyncHandler(async (req, res) => {
  const resumeId = req.params.id;
  const updateworkExperienceWriter = await ResumeDetails.findById(resumeId);

  if (!updateworkExperienceWriter) {
    res.status(404);
    throw new Error('resume not found');
  }

  const { workSummary, title, companyId } = req.body;
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',

    messages: [
      {
        role: 'user',
        content: `create 3 bullet points for resume  for the given job role of " ${title}"  and work experience description is  "${workSummary}  "`,
      },
    ],
    //   // prompt: `${message}`,
    //   // max_tokens: 7,
    //   // temperature: 0,
  });

  const optimizedSummary = await ResumeDetails.updateOne(
    { _id: resumeId, 'companyDetails._id': companyId },
    {
      $set: {
        'companyDetails.$.workSummary':
          response.data.choices[0].message.content,
      },
    }
  );

  console.log(optimizedSummary);
  res.status(201).json(optimizedSummary);
});

const projectOptimizer = asyncHandler(async (req, res) => {
  const optimizeProject = await ResumeDetails.findById(req.params.id);
  if (!optimizeProject) {
    res.status(404);
    throw new Error('resume not found');
  }

  const { projectSummary } = req.body;
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',

    messages: [
      {
        role: 'user',
        content: `optimize this description " ${projectSummary} " for resume `,
      },
    ],
    // prompt: `${message}`,
    // max_tokens: 7,
    // temperature: 0,
  });
  console.log(response.data.choices[0].message.content);
  if (response.data.choices[0].message) {
    const optimizedProjectSummary = await ResumeDetails.findByIdAndUpdate(
      req.params.id,
      { projectSummary: `${response.data.choices[0].message.content}` }
    );

    res.status(201).json(optimizedProjectSummary);
  }
});
module.exports = {
  createResume,
  updateResume,
  getResume,
  summaryOptimizers,
  workExperienceWriter,
  projectOptimizer,
};
