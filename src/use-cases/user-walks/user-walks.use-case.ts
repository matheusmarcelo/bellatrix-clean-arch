import { Injectable } from '@nestjs/common';
import IUserCase from 'src/contracts/i-user-case.contract';
import IUserRepository from 'src/contracts/i-user-repository.contract';
import User from 'src/entities/user.model';
import { FindBattleMonster } from '../find-battle-monster/find-batltle-monster.use-case';
import IMonsterRepository from 'src/contracts/i-monster-repository.contract';
import Monster from 'src/entities/monster.model';

@Injectable()
export class UserWalks implements IUserCase {
  private readonly userRepository: IUserRepository;
  private readonly monsterRepository: IMonsterRepository;

  constructor(userRepository: IUserRepository, monsterRepository: IMonsterRepository) {
    this.userRepository = userRepository;
    this.monsterRepository = monsterRepository;
  }

  async execute(user: User, posX: number, posY: number): Promise<Monster | null> {
    // Change position
    user.posX = posX;
    user.posY = posY;

    // Save new position
    await this.userRepository.createOrUpdate(user);

    // Find monster or nothing
    const findBattleMonster = new FindBattleMonster(this.monsterRepository);
    const monsterOrNull = await findBattleMonster.execute();

    return monsterOrNull;
  }
}
