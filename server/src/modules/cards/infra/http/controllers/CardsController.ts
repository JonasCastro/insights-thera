import TagService from '../../../../tags/services/TagService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CardService from '../../../services/CardService';
import Tag from '@modules/tags/infra/typeorm/entities/Tag';

function findTags(tags: string[]){
  if(!Array.isArray(tags) || !tags.length) return []
  const tagService = container.resolve(TagService);

  const tagIds = tags.map(tag => tag)
  return tagService.findByIds(tagIds)
}
interface IOptions {
  take: number,
  offset: number,
}
export default class TagsController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const cardService = container.resolve(CardService);
    const { take = 4, offset = 0 } = request.query;

    const result = await cardService.getAll({ take, offset } as IOptions);
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
