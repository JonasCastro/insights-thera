import { getRepository, Repository } from 'typeorm';
import ITagsRepository from '../../repositories/ITagsRepository';
import ICreateTagDTO from '../../../dtos/ICreateTagDTO';
import IUpdateTagDTO from '../../../dtos/IUpdateTagDTO';
import Tag from '../entities/Tag';

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  async findByIds(ids: string[]): Promise<Tag[]> {
    return this.ormRepository.findByIds(ids)
  }

  async findById(id: string): Promise<Tag | undefined> {
    return this.ormRepository.findOne({ id });
  }

  async findByName(name: string): Promise<Tag | undefined> {
    return this.ormRepository.findOne({ name });
  }

  async create(tagData: ICreateTagDTO): Promise<Tag> {
    const tag = this.ormRepository.create(tagData);

    return this.ormRepository.save(tag);
  }

  async find(): Promise<Tag[]> {
    return this.ormRepository.find();
  }

  async save(tag: Tag): Promise<Tag> {
    return this.ormRepository.save(tag);
  }

  async delete(id: string): Promise<boolean> {
    return !!await this.ormRepository.delete({id});
  }
}

export default TagsRepository;
