import { Module } from "@nestjs/common/decorators";
import { UserWalks } from "./user-walks/user-walks.use-case";

@Module({
  imports: [UserWalks],
  exports: [UserWalks]
})
export class UseCasesModule {}
