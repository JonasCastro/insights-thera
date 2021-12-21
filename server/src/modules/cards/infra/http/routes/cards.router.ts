import { Router } from 'express';

import CardsController from '../controllers/CardsController';

const cardsRouter = Router();

const cardsController = new CardsController();

cardsRouter.get('/', cardsController.getAll);
cardsRouter.post('/', cardsController.create);
cardsRouter.patch('/:id', cardsController.update);
cardsRouter.delete('/:id', cardsController.delete);

export default cardsRouter;
