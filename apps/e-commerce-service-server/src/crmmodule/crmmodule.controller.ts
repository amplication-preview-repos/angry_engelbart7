import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CrmModuleService } from "./crmmodule.service";
import { CrmCreateInputDto } from "../crmModule/CrmCreateInputDto";

@swagger.ApiTags("crmModules")
@common.Controller("crmModules")
export class CrmModuleController {
  constructor(protected readonly service: CrmModuleService) {}

  @common.Post("/crms")
  @swagger.ApiOkResponse({
    type: CrmCreateInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCrm(
    @common.Body()
    body: CrmCreateInputDto
  ): Promise<CrmCreateInputDto> {
        return this.service.CreateCrm(body);
      }
}
