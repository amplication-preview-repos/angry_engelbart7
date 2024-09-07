import { Module } from "@nestjs/common";
import { UserModuleService } from "./usermodule.service";
import { UserModuleController } from "./usermodule.controller";
import { UserModuleResolver } from "./usermodule.resolver";

@Module({
  controllers: [UserModuleController],
  providers: [UserModuleService, UserModuleResolver],
  exports: [UserModuleService],
})
export class UserModuleModule {}
