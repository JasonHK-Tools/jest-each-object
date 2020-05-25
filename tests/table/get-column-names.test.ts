import { getColumnNames } from "src/table/get-column-names";
import type { ITable } from "src/table/interfaces/table";

describe("getColumnNames(table)", () =>
{
    const EMPTY_NAMES = ["#"];

    describe("Returns only \"#\" when the table was empty", () =>
    {
        test.each<ITestCase>([
            [
                [],
                EMPTY_NAMES,
            ],
        ])("%O", (table, names) =>
        {
            expect(getColumnNames(table)).toEqual(names);
        });
    });

    describe("Returns only \"#\" when all rows of the table were empty", () =>
    {
        test.each<ITestCase>([
            [
                [{}],
                EMPTY_NAMES,
            ],
            [
                [{}, {}],
                EMPTY_NAMES,
            ],
        ])("%O", (table, names) =>
        {
            expect(getColumnNames(table)).toEqual(names);
        });
    });

    describe("Returns only \"#\" when all keys of the table's rows were invalid", () =>
    {
        test.each<ITestCase>([
            [
                [
                    {
                        " ": "Contains whitespace characters",
                        "|": "Contains the pipe character",
                        [Symbol.toStringTag]: "Symbol key",
                    },
                ],
                EMPTY_NAMES,
            ],
        ])("%O", (table, names) =>
        {
            expect(getColumnNames(table)).toEqual(names);
        });
    });

    describe("Returns only \"#\" and all keys of each row of the table", () =>
    {
        test.each<ITestCase>([
            [
                [
                    {
                        foo: "foo",
                        bar: "bar",
                    },
                ],
                [...EMPTY_NAMES, "foo", "bar"],
            ],
            [
                [
                    {
                        foo: "foo",
                        baz: "baz",
                    },
                    {
                        bar: "bar",
                        baz: "baz",
                    },
                ],
                [...EMPTY_NAMES, "foo", "baz", "bar"],
            ],
        ])("%O", (table, names) =>
        {
            expect(getColumnNames(table)).toEqual(names);
        });
    });

    type ITestCase = [ITable, string[]];
});
