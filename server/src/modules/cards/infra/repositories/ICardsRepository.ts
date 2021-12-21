import Card from '../typeorm/entities/Card';
import ICreateCardDTO from '../../dtos/ICreateCardDTO';
import IUpdateCardDTO from '../../dtos/IUpdateCardDTO';

export default interface ICardsRepository {
  create(data: ICreateCardDTO): Promise<Card>;
  findById(id: string): Promise<Card | undefined>;
  find(): Promise<Card[]>;
  delete(id: string): Promise<boolean>;
  save(tag: IUpdateCardDTO): Promise<Card>;
}
