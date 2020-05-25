import { isValidColumnName } from "src/table/is-valid-column-name";

describe("isValidColumnName(name)", () =>
{
    describe("Returns `true` when the name was valid", () =>
    {
        test.each<ITestCase>([
            // Empty
            [""],
            // Properties' name
            ["0"],
            ["foobar"],
            ["_private"],
        ])("%j", (name) =>
        {
            expect(isValidColumnName(name)).toBeTrue();
        });
    });

    describe("Returns `false` when the name was invalid", () =>
    {
        test.each<ITestCase>([
            // Contains the pipe character
            ["|"],
            // Contains whitespace characters
            [" "],
            ["\t"],
            ["\r"],
            ["\n"],
            ["\r\n"],
        ])("%j", (name) =>
        {
            expect(isValidColumnName(name)).toBeFalse();
        });
    });

    type ITestCase = [string];
});
