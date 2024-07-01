import express from "express"
import {createCollaboration} from "../controllers/sponsor.js"
const ojaswasponser = express.Router();

// POST /api/collaborations
ojaswasponser.post('/Collaboration', createCollaboration);

export default ojaswasponser ;
