import express from 'express';

import { dummyResponse } from '../controller/ImageControler.js';
import { generateImage } from '../controller/ImageControler.js';

const ImageRouter = express.Router();

ImageRouter
    .route('/')
    .get(dummyResponse)
    .post(generateImage);

export default ImageRouter;