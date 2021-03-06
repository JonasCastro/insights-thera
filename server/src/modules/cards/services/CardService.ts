import { injectable, inject } from 'tsyringe';
import Card from '../infra/typeorm/entities/Card';
import AppError from '../../../shared/errors/AppErros';

import ICreateCardDTO from '../dtos/ICreateCardDTO';
import IUpdateCardDTO from '../dtos/IUpdateCardDTO';

import ICardsRepository from '../infra/repositories/ICardsRepository';
import TagService from '../../tags/services/TagService';
import { container } from 'tsyringe';

interface IOptions {
  take: number,
  offset: number,
  termOrCategory: string
}
@injectable()
class CardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository,
  ) {}

  async getAll({ take, offset, termOrCategory }: IOptions): Promise<[Card[], number]> {
    return this.cardsRepository.find({ take, offset, termOrCategory });
  }

  async create({text, tags}: ICreateCardDTO): Promise<Card> {
    return this.cardsRepository.create({ text, tags });
  }

  async createMany(cards: ICreateCardDTO[]): Promise<Card[]> {
    return this.cardsRepository.createMany(cards);
  }

  async update({id, text, tags}: IUpdateCardDTO): Promise<Card> {
    const checkCardExists = await this.cardsRepository.findById(id);
    if (!checkCardExists) throw new AppError('Card não encontrado.');

    checkCardExists.text = text;
    checkCardExists.tags = tags;

    return this.cardsRepository.save(checkCardExists);
  }

  async delete({ id }: { id: string; }): Promise<boolean> {
    return this.cardsRepository.delete(id);
  }
}
export default CardService;
