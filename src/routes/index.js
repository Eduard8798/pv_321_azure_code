import express from "express";
const router = express.Router();

import {uploadFileController} from "../controllers/uploadFile.controller.js";
import {uploadFileLocalController} from "../controllers/uploadFileLocal.controller.js";
import {uploadFileAzureController} from "../controllers/uploadFileAzure.controller.js";

router.post('/upload',uploadFileController);
router.post('/upload-azure',uploadFileAzureController);
router.post('/upload-local',uploadFileLocalController);

export default router;