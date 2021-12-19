import { Request, Response } from 'express';

import { container } from 'tsyringe';

import TagService from '../../../services/TagService';

export default class TagsController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const tagService = container.resolve(TagService);

    const tag = await tagService.getAll();
    return response.json(tag);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const tagService = container.resolve(TagService);

    const tag = await tagService.create({ name });

    return response.json(tag);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name } = request.body;

    const tagService = container.resolve(TagService);

    const tag = await tagService.update({ id, name });

    return response.json(tag);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const tagService = container.resolve(TagService);

    const tag = await tagService.delete({ id });

    return response.json(tag);
  }
}
