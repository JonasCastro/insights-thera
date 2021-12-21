import TagService from '../../../../tags/services/TagService';
import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CardService from '../../../services/CardService';
function findOrCreateTags(tags: string[]){
  if(!Array.isArray(tags) || !tags.length) return []
  const tagService = container.resolve(TagService);
  return Promise.all(tags.map(tag => tagService.create({ name: tag })));
}

export default class TagsController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const cardService = container.resolve(CardService);

    const tag = await cardService.getAll();
    return response.json(tag);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { text, tags } = request.body;
    const tagsFound = await findOrCreateTags(tags)
    const cardService = container.resolve(CardService);
    const tag = await cardService.create({ text, tags: tagsFound });

    return response.json(tag);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { text, tags } = request.body;

    const cardService = container.resolve(CardService);
    const tagsFound = await findOrCreateTags(tags)
    const tag = await cardService.update({ id, text, tags: tagsFound });

    return response.json(tag);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const cardService = container.resolve(CardService);

    const tag = await cardService.delete({ id });

    return response.json(tag);
  }


}
