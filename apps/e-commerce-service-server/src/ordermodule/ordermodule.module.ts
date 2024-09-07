import { Module } from "@nestjs/common";
import { OrderModuleService } from "./ordermodule.service";
import { OrderModuleController } from "./ordermodule.controller";
import { OrderModuleResolver } from "./ordermodule.resolver";

@Module({
  controllers: [OrderModuleController],
  providers: [OrderModuleService, OrderModuleResolver],
  exports: [OrderModuleService],
})
export class OrderModuleModule {}
