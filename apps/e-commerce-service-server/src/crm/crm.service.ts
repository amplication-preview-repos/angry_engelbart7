import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrmServiceBase } from "./base/crm.service.base";

@Injectable()
export class CrmService extends CrmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
