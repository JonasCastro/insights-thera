import { getRepository, Repository } from 'typeorm';
import ICardsRepository from '../../repositories/ICardsRepository';
import ICreateCardDTO from '../../../dtos/ICreateCardDTO';
import IUpdateCardDTO from '../../../dtos/IUpdateCardDTO';
import Card from '../entities/Card';

interface IOptions {
  take: number,
  offset: number,
}
class CardsRepository implements ICardsRepository {
  private ormRepository: Repository<Card>;

  constructor() {
    this.ormRepository = getRepository(Card);
  }

  async findById(id: string): Promise<Card | undefined> {
    return this.ormRepository.findOne({ id });
  }

  async create(cardData: ICreateCardDTO): Promise<Card> {
    const card = this.ormRepository.create(cardData);

    return this.ormRepository.save(card);
  }

  async find({ take, offset }: IOptions): Promise<[Card[], number]> {

    return this.ormRepository.findAndCount({ relations: ["tags"], skip: offset, take });
  }

  async save(card: Card): Promise<Card> {
    return this.ormRepository.save(card);
  }

  async delete(id: string): Promise<boolean> {
    return !!await this.ormRepository.delete({id});
  }
}

export default CardsRepository;
