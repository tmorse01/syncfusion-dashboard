export interface ReportFile {
  name: string;
  isFile: boolean;
  dateModified: Date;
  dateCreated: Date;
  hasChild: boolean;
  size: number;
  type: string;
  id?: string;
  filterPath?: string;
  children?: ReportFile[];
}

export interface ReportData {
  name: string;
  isFile: boolean;
  dateModified: Date;
  dateCreated: Date;
  hasChild: boolean;
  size: number;
  type: string;
  filterPath: string;
  children: ReportFile[];
}

export interface ReportDetails {
  title: string;
  path: string;
  description: string;
}
