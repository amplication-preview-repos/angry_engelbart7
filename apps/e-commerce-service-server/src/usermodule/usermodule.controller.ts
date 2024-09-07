import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserModuleService } from "./usermodule.service";
import { UserCreateInputDto } from "../userModule/UserCreateInputDto";

@swagger.ApiTags("userModules")
@common.Controller("userModules")
export class UserModuleController {
  constructor(protected readonly service: UserModuleService) {}

  @common.Post("/users")
  @swagger.ApiOkResponse({
    type: UserCreateInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUser(
    @common.Body()
    body: UserCreateInputDto
  ): Promise<UserCreateInputDto> {
        return this.service.CreateUser(body);
      }
}
