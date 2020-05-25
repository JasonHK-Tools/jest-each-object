import { ITableRow } from "./table-row";

export type ITable<T extends ITableRow = ITableRow> = T[];
