import * as graphql from "@nestjs/graphql";
import { ProductCreateInputDto } from "../productModule/ProductCreateInputDto";
import { ProductModuleService } from "./productmodule.service";

export class ProductModuleResolver {
  constructor(protected readonly service: ProductModuleService) {}

  @graphql.Mutation(() => ProductCreateInputDto)
  async CreateProduct(
    @graphql.Args()
    args: ProductCreateInputDto
  ): Promise<ProductCreateInputDto> {
    return this.service.CreateProduct(args);
  }
}
