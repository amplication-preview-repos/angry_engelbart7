import * as graphql from "@nestjs/graphql";
import { CrmCreateInputDto } from "../crmModule/CrmCreateInputDto";
import { CrmModuleService } from "./crmmodule.service";

export class CrmModuleResolver {
  constructor(protected readonly service: CrmModuleService) {}

  @graphql.Mutation(() => CrmCreateInputDto)
  async CreateCrm(
    @graphql.Args()
    args: CrmCreateInputDto
  ): Promise<CrmCreateInputDto> {
    return this.service.CreateCrm(args);
  }
}
