import * as graphql from "@nestjs/graphql";
import { OrderCreateInputDto } from "../orderModule/OrderCreateInputDto";
import { OrderModuleService } from "./ordermodule.service";

export class OrderModuleResolver {
  constructor(protected readonly service: OrderModuleService) {}

  @graphql.Mutation(() => OrderCreateInputDto)
  async CreateOrder(
    @graphql.Args()
    args: OrderCreateInputDto
  ): Promise<OrderCreateInputDto> {
    return this.service.CreateOrder(args);
  }
}
