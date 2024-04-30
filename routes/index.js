import express from 'express';

import author from './author.js';
import book from './book.js';

const router = new express.Router();

router.use('/author', author);
router.use('/book', book);

export default router;
