import Tag from '../../tags/infra/typeorm/entities/Tag';
export default interface ICreateCardDTO {
  text: string;
  tags: Tag[];
}
