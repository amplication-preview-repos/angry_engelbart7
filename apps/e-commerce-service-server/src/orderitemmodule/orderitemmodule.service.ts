import { Injectable } from "@nestjs/common";
import { OrderItemCreateInputDto } from "../orderItemModule/OrderItemCreateInputDto";

@Injectable()
export class OrderItemModuleService {
  constructor() {}
  async CreateOrderItem(args: OrderItemCreateInputDto): Promise<OrderItemCreateInputDto> {
    throw new Error("Not implemented");
  }
}
