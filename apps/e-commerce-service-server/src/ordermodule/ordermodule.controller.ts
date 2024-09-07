import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderModuleService } from "./ordermodule.service";
import { OrderCreateInputDto } from "../orderModule/OrderCreateInputDto";

@swagger.ApiTags("orderModules")
@common.Controller("orderModules")
export class OrderModuleController {
  constructor(protected readonly service: OrderModuleService) {}

  @common.Post("/orders")
  @swagger.ApiOkResponse({
    type: OrderCreateInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOrder(
    @common.Body()
    body: OrderCreateInputDto
  ): Promise<OrderCreateInputDto> {
        return this.service.CreateOrder(body);
      }
}
