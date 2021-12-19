import { injectable, inject } from 'tsyringe';
import Tag from '../infra/typeorm/entities/Tag';
import AppError from '../../../shared/errors/AppErros';

import ICreateTagDTO from '../dtos/ICreateTagDTO';
import IUpdateTagDTO from '../dtos/IUpdateTagDTO';

import ITagsRepository from '../infra/repositories/ITagsRepository';

@injectable()
class TagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async getAll(): Promise<Tag[]> {
    return this.tagsRepository.find();
  }

  async create({name}: ICreateTagDTO): Promise<Tag> {
    const checkTagExists = await this.tagsRepository.findByName(name);
    if (checkTagExists) { throw new AppError('Tag já existe.'); }

    return this.tagsRepository.create({ name });
  }

  async update({id, name}: IUpdateTagDTO): Promise<Tag> {
    const checkTagExists = await this.tagsRepository.findById(id);
    if (!checkTagExists) {
      throw new AppError('Tag não encontrado.');
    }

    checkTagExists.name = name;

    return this.tagsRepository.save(checkTagExists);
  }

  async delete({ id }: { id: string; }): Promise<boolean> {
    return this.tagsRepository.delete(id);
  }
}
export default TagService;
