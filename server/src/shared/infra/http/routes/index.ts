import { Router } from 'express';
import tagsRouter from '../../../../modules/tags/infra/http/routes/tags.router';
import cardsRouter from '../../../../modules/cards/infra/http/routes/cards.router';

const routes = Router();
routes.use('/tags', tagsRouter);
routes.use('/cards', cardsRouter);

export default routes;
