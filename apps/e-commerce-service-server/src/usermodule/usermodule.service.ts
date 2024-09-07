import { Injectable } from "@nestjs/common";
import { UserCreateInputDto } from "../userModule/UserCreateInputDto";

@Injectable()
export class UserModuleService {
  constructor() {}
  async CreateUser(args: UserCreateInputDto): Promise<UserCreateInputDto> {
    throw new Error("Not implemented");
  }
}
