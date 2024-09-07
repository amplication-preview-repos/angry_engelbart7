import { SortOrder } from "../../util/SortOrder";

export type CrmOrderByInput = {
  complaint?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  resolutionStatus?: SortOrder;
  updatedAt?: SortOrder;
};
