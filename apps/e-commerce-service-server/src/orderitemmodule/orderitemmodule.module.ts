import { Module } from "@nestjs/common";
import { OrderItemModuleService } from "./orderitemmodule.service";
import { OrderItemModuleController } from "./orderitemmodule.controller";
import { OrderItemModuleResolver } from "./orderitemmodule.resolver";

@Module({
  controllers: [OrderItemModuleController],
  providers: [OrderItemModuleService, OrderItemModuleResolver],
  exports: [OrderItemModuleService],
})
export class OrderItemModuleModule {}
