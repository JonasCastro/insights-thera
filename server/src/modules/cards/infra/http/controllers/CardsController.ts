import TagService from '../../../../tags/services/TagService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CardService from '../../../services/CardService';
import Tag from '@modules/tags/infra/typeorm/entities/Tag';
import ICreateCardDTO from '@modules/cards/dtos/ICreateCardDTO';

interface IOptions {
  take: number,
  offset: number,
  termOrCategory: string
}

function findTags(tags: string[]){
  if(!Array.isArray(tags) || !tags.length) return []
  const tagService = container.resolve(TagService);

  return tagService.findByIds(tags)
}

function findOrCreateTags(tags: string[]){
  if(!Array.isArray(tags) || !tags.length) return []
  const tagService = container.resolve(TagService);

  return Promise.all(tags.filter(tag=> !!tag).map(name => tagService.create({ name })))
}
export default class TagsController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const cardService = container.resolve(CardService);
    const { take = 4, offset = 0, termOrCategory = '' } = request.query;

    const result = await cardService.getAll({ take, offset, termOrCategory } as IOptions);
    if(Array.isArray(result) && result.length) return response.json({ cards: result[0], total: result[1]});
    return response.json({ cards: [], total: 0});
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { text, tags } = request.body;
    const tagsFound = await findTags(tags)
    const cardService = container.resolve(CardService);
    const card = await cardService.create({ text, tags: tagsFound });

    return response.json(card);
  }

  public async createCardsAndTags(request: Request, response: Response): Promise<Response> {
    const { cards } = request.body;
    if(!Array.isArray(cards) || !cards.length) return response.json([]);

    const cardService = container.resolve(CardService);
    const cardsToCreate = await Promise.all(cards.flatMap(async (card) => {
      if(!card?.text) return []
      const tagsFound = await findOrCreateTags(card.tags)
      return { text: card.text, tags:tagsFound }
    }))

    if(!Array.isArray(cardsToCreate) || !cardsToCreate.length) return response.json([]);
    const cardsCreated = await cardService.createMany(cardsToCreate as ICreateCardDTO[]);
    return response.json(cardsCreated);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { text, tags } = request.body;

    const cardService = container.resolve(CardService);
    const tagsFound = await findTags(tags)
    const card = await cardService.update({ id, text, tags: tagsFound });

    return response.json(card);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const cardService = container.resolve(CardService);

    const result = await cardService.delete({ id });

    return response.json(result);
  }
}
