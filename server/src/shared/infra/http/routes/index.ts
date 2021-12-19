import { Router } from 'express';
import tagsRouter from '../../../../modules/tags/infra/http/routes/tags.router';

const routes = Router();
routes.use('/tags', tagsRouter);

export default routes;
