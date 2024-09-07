import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProductModuleService } from "./productmodule.service";
import { ProductCreateInputDto } from "../productModule/ProductCreateInputDto";

@swagger.ApiTags("productModules")
@common.Controller("productModules")
export class ProductModuleController {
  constructor(protected readonly service: ProductModuleService) {}

  @common.Post("/products")
  @swagger.ApiOkResponse({
    type: ProductCreateInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateProduct(
    @common.Body()
    body: ProductCreateInputDto
  ): Promise<ProductCreateInputDto> {
        return this.service.CreateProduct(body);
      }
}
