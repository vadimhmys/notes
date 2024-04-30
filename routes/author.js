import express from 'express';
import AuthorController from '../controllers/Author.js';

const router = new express.Router();

router.get('/getall', AuthorController.getAll);
router.get('/getone/:id([0-9]+)', AuthorController.getOne);
router.post('/create', AuthorController.create);
router.put('/update/:id([0-9]+)', AuthorController.update);
router.delete('/delete/:id([0-9]+)', AuthorController.delete);

export default router;
