import { getRepository, Like, Repository } from 'typeorm';
import ICardsRepository from '../../repositories/ICardsRepository';
import ICreateCardDTO from '../../../dtos/ICreateCardDTO';
import IUpdateCardDTO from '../../../dtos/IUpdateCardDTO';
import Card from '../entities/Card';

interface IOptions {
  take: number,
  offset: number,
  termOrCategory: string,
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

  async createMany(cards: ICreateCardDTO[]): Promise<Card[]> {
    const newCards = this.ormRepository.create(cards);
    return this.ormRepository.save(newCards);
  }

  async find({ take, offset, termOrCategory }: IOptions): Promise<[Card[], number]> {
    const query = termOrCategory ? { where: [ {  text: Like(`%${termOrCategory}%`) } ] } : {}

    return this.ormRepository.findAndCount({
      relations: ["tags"],
      skip: offset,
      take,
      ...query
    });
  }

  async save(card: Card): Promise<Card> {
    return this.ormRepository.save(card);
  }

  async delete(id: string): Promise<boolean> {
    return !!await this.ormRepository.delete({id});
  }
}

export default CardsRepository;
