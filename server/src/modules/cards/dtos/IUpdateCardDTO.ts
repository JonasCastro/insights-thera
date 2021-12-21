import Tag from '../../tags/infra/typeorm/entities/Tag';

export default interface IUpdateTagDTO {
  id: string;
  text: string;
  tags: Tag[];
}
