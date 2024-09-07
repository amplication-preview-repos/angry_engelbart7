import { Module } from "@nestjs/common";
import { CrmModuleBase } from "./base/crm.module.base";
import { CrmService } from "./crm.service";
import { CrmController } from "./crm.controller";
import { CrmResolver } from "./crm.resolver";

@Module({
  imports: [CrmModuleBase],
  controllers: [CrmController],
  providers: [CrmService, CrmResolver],
  exports: [CrmService],
})
export class CrmModule {}
