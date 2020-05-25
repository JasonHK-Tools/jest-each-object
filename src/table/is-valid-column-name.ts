const VALID_NAME_PATTERN = /^[^|\s]*$/;

export function isValidColumnName(name: string): boolean
{
    return VALID_NAME_PATTERN.test(name);
}
