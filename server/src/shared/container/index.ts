import { container } from 'tsyringe';

import ITagsRepository from '../../modules/tags/infra/repositories/ITagsRepository';
import TagsRepository from '../../modules/tags/infra/typeorm/repositories/TagsRepository';
import ICardsRepository from '../../modules/cards/infra/repositories/ICardsRepository';
import CardsRepository from '../../modules/cards/infra/typeorm/repositories/CardsRepository';

container.registerSingleton<ITagsRepository>(
  'TagsRepository',
  TagsRepository,
);

container.registerSingleton<ICardsRepository>(
  'CardsRepository',
  CardsRepository,
);
