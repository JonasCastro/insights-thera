import { Router } from 'express';

import TagsController from '../controllers/TagsController';

const tagsRouter = Router();

const tagsController = new TagsController();

tagsRouter.get('/', tagsController.getAll);
tagsRouter.post('/', tagsController.create);
tagsRouter.patch('/:id', tagsController.update);
tagsRouter.delete('/:id', tagsController.delete);

export default tagsRouter;
