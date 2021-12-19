import Tag from '../typeorm/entities/Tag';
import ICreateTagDTO from '../../dtos/ICreateTagDTO';
import IUpdateTagDTO from '../../dtos/IUpdateTagDTO';

export default interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<Tag>;
  findById(id: string): Promise<Tag | undefined>;
  findByName(name: string): Promise<Tag | undefined>;
  find(): Promise<Tag[]>;
  delete(id: string): Promise<boolean>;
  save(tag: IUpdateTagDTO): Promise<Tag>;
}
