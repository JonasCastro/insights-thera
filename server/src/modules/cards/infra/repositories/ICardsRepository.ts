import Card from '../typeorm/entities/Card';
import ICreateCardDTO from '../../dtos/ICreateCardDTO';
import IUpdateCardDTO from '../../dtos/IUpdateCardDTO';

interface IOptions {
  take: number,
  offset: number,
  termOrCategory: string
}
export default interface ICardsRepository {
  create(data: ICreateCardDTO): Promise<Card>;
  findById(id: string): Promise<Card | undefined>;
  find({ take, offset }: IOptions): Promise<[Card[], number]>;
  delete(id: string): Promise<boolean>;
  save(tag: IUpdateCardDTO): Promise<Card>;
}
