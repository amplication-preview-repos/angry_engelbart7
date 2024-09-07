import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderItemModuleService } from "./orderitemmodule.service";
import { OrderItemCreateInputDto } from "../orderItemModule/OrderItemCreateInputDto";

@swagger.ApiTags("orderItemModules")
@common.Controller("orderItemModules")
export class OrderItemModuleController {
  constructor(protected readonly service: OrderItemModuleService) {}

  @common.Post("/orderitems")
  @swagger.ApiOkResponse({
    type: OrderItemCreateInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOrderItem(
    @common.Body()
    body: OrderItemCreateInputDto
  ): Promise<OrderItemCreateInputDto> {
        return this.service.CreateOrderItem(body);
      }
}
