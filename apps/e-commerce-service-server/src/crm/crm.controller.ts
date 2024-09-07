import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrmService } from "./crm.service";
import { CrmControllerBase } from "./base/crm.controller.base";

@swagger.ApiTags("crms")
@common.Controller("crms")
export class CrmController extends CrmControllerBase {
  constructor(protected readonly service: CrmService) {
    super(service);
  }
}
