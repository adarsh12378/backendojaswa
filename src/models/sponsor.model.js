import mongoose from "mongoose";

const CollaborationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  sponsorshipType: {
    type: String,
    required: true,
  },
  sponsorshipLevel: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  Feedback: {
    type: String,
    required: true,
  },
});

export const Collaboration= mongoose.model('Collaboration', CollaborationSchema);
