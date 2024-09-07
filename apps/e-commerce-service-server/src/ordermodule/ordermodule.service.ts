import { Injectable } from "@nestjs/common";
import { OrderCreateInputDto } from "../orderModule/OrderCreateInputDto";

@Injectable()
export class OrderModuleService {
  constructor() {}
  async CreateOrder(args: OrderCreateInputDto): Promise<OrderCreateInputDto> {
    throw new Error("Not implemented");
  }
}
