import { Injectable } from "@nestjs/common";
import { CrmCreateInputDto } from "../crmModule/CrmCreateInputDto";

@Injectable()
export class CrmModuleService {
  constructor() {}
  async CreateCrm(args: CrmCreateInputDto): Promise<CrmCreateInputDto> {
    throw new Error("Not implemented");
  }
}
