import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CrmWhereInput = {
  complaint?: StringNullableFilter;
  customerId?: IntNullableFilter;
  id?: StringFilter;
  resolutionStatus?: StringNullableFilter;
};
