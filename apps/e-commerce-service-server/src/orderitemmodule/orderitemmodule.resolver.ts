import * as graphql from "@nestjs/graphql";
import { OrderItemCreateInputDto } from "../orderItemModule/OrderItemCreateInputDto";
import { OrderItemModuleService } from "./orderitemmodule.service";

export class OrderItemModuleResolver {
  constructor(protected readonly service: OrderItemModuleService) {}

  @graphql.Mutation(() => OrderItemCreateInputDto)
  async CreateOrderItem(
    @graphql.Args()
    args: OrderItemCreateInputDto
  ): Promise<OrderItemCreateInputDto> {
    return this.service.CreateOrderItem(args);
  }
}
