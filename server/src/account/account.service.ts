import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private dbService: DbService) {}

  async getAccount(userId: number) {
    return this.dbService.account.findUniqueOrThrow({
      where: { ownerId: userId },
    });
  }

  async patchAccount(userId: number, patch: PatchAccountDto) {
    return this.dbService.account.update({
      where: { ownerId: userId },
      data: { ...patch },
    });
  }

  async createAccount(userId: number) {
    return this.dbService.account.create({data: {ownerId: userId, isBlockingEnabled: false}})
  }
}
