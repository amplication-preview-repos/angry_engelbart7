import * as graphql from "@nestjs/graphql";
import { CrmResolverBase } from "./base/crm.resolver.base";
import { Crm } from "./base/Crm";
import { CrmService } from "./crm.service";

@graphql.Resolver(() => Crm)
export class CrmResolver extends CrmResolverBase {
  constructor(protected readonly service: CrmService) {
    super(service);
  }
}
