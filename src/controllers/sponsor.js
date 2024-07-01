import {Collaboration} from "../models/sponsor.model.js"

const createCollaboration = async (req, res) => {
  const { name, email, company, sponsorshipType, sponsorshipLevel, contactNumber, Feedback } = req.body;
  try {
    const newCollaboration = new Collaboration({
      name,
      email,
      company,
      sponsorshipType,
      sponsorshipLevel,
      contactNumber,
      Feedback,
    });

    await newCollaboration.save();
    res.status(201).json(newCollaboration);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create collaboration' });
  }
};

export {createCollaboration}
