import { Job as TJob } from "../api/job/Job";

export const JOB_TITLE_FIELD = "subject";

export const JobTitle = (record: TJob): string => {
  return record.subject?.toString() || String(record.id);
};
