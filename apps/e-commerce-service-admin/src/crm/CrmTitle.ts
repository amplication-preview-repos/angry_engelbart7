import { Crm as TCrm } from "../api/crm/Crm";

export const CRM_TITLE_FIELD = "resolutionStatus";

export const CrmTitle = (record: TCrm): string => {
  return record.resolutionStatus?.toString() || String(record.id);
};
