import { CrmWhereInput } from "./CrmWhereInput";
import { CrmOrderByInput } from "./CrmOrderByInput";

export type CrmFindManyArgs = {
  where?: CrmWhereInput;
  orderBy?: Array<CrmOrderByInput>;
  skip?: number;
  take?: number;
};
