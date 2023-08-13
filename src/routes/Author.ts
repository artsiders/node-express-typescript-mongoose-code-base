import express from 'express';
import controller from '../controllers/Author';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.author.create), controller.createAuthor);

router.get('/:authorId', controller.readAuthor);

router.get('/', controller.readAll);

router.patch('/:authorId', ValidateJoi(Schemas.author.update), controller.updateAuthor);

router.delete('/:authorId', controller.deleteAuthor);

export = router;
