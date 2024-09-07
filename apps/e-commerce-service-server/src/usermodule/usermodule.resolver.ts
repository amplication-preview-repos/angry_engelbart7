import * as graphql from "@nestjs/graphql";
import { UserCreateInputDto } from "../userModule/UserCreateInputDto";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Mutation(() => UserCreateInputDto)
  async CreateUser(
    @graphql.Args()
    args: UserCreateInputDto
  ): Promise<UserCreateInputDto> {
    return this.service.CreateUser(args);
  }
}
