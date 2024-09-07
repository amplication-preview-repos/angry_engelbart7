import { Injectable } from "@nestjs/common";
import { ProductCreateInputDto } from "../productModule/ProductCreateInputDto";

@Injectable()
export class ProductModuleService {
  constructor() {}
  async CreateProduct(args: ProductCreateInputDto): Promise<ProductCreateInputDto> {
    throw new Error("Not implemented");
  }
}
