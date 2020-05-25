import { isValidColumnName } from "./is-valid-column-name";

import type { ITable } from "./interfaces/table";

export function getColumnNames(table: Readonly<ITable>): string[]
{
    return Array.from(
        new Set(
            [
                "#",
                ...table.reduce<string[]>(
                    (merged, row) =>
                    {
                        return [...merged, ...Object.keys(row)];
                    },
                    []),
            ]))
        .filter(isValidColumnName);
}
