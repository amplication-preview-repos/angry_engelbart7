import { Module } from "@nestjs/common";
import { ProductModuleService } from "./productmodule.service";
import { ProductModuleController } from "./productmodule.controller";
import { ProductModuleResolver } from "./productmodule.resolver";

@Module({
  controllers: [ProductModuleController],
  providers: [ProductModuleService, ProductModuleResolver],
  exports: [ProductModuleService],
})
export class ProductModuleModule {}
