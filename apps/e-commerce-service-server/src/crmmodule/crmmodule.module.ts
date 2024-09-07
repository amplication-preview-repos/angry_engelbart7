import { Module } from "@nestjs/common";
import { CrmModuleService } from "./crmmodule.service";
import { CrmModuleController } from "./crmmodule.controller";
import { CrmModuleResolver } from "./crmmodule.resolver";

@Module({
  controllers: [CrmModuleController],
  providers: [CrmModuleService, CrmModuleResolver],
  exports: [CrmModuleService],
})
export class CrmModuleModule {}
