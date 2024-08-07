import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  failed?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  success?: SortOrder;
  template?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
