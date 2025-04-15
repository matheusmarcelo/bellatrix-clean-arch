import IMonsterRepository from 'src/contracts/i-monster-repository.contract';
import IUserCase from 'src/contracts/i-user-case.contract';
import Monster from 'src/entities/monster.model';

export class FindBattleMonster implements IUserCase {
  private readonly monsterRepository: IMonsterRepository;
  constructor(monsterRepository: IMonsterRepository) {
    this.monsterRepository = monsterRepository;
  }

  async execute(): Promise<Monster | null> {
    // Retorna todos os monstros do repository
    const monsters = await this.monsterRepository.getAll();

    // Calcular a chance de spawn
    let spawnChance = Math.random();

    let monsterFound: Monster | null = null;

    monsters.forEach((monster) => {
      spawnChance -= monster.spawnChange;
      if(spawnChance <= 0) {
        monsterFound = monster;
        return;
      }
    });

    return monsterFound;
  }
}
