import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type JobWhereInput = {
  failed?: IntNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  success?: IntNullableFilter;
  template?: StringNullableFilter;
  total?: IntNullableFilter;
};
