import Monster from 'src/entities/monster.model';

interface IMonsterRepository {
  getAll(): Promise<Monster[]>;
}

export default IMonsterRepository;
