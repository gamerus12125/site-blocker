import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { BlockListService } from 'src/block-list/block-list.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private accountService: AccountService,
    private blockListService: BlockListService
  ) {}

  findByEmail(email: string) {
    const user = this.db.user.findFirst({ where: { email: email } });
    return user;
  }
  async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({ data: { email, hash, salt } });
    await this.accountService.createAccount(user.id);
    await this.blockListService.create(user.id)
    return user;
  }
}
