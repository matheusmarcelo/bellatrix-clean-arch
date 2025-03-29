import { Module } from "@nestjs/common";
import { UseCasesModule } from "src/use-cases/use-cases.module";

@Module({
    imports: [UseCasesModule]
})
export class InfraModule {}