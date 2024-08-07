export type Job = {
  createdAt: Date;
  failed: number | null;
  id: string;
  status?: "Option1" | null;
  subject: string | null;
  success: number | null;
  template: string | null;
  total: number | null;
  updatedAt: Date;
};
