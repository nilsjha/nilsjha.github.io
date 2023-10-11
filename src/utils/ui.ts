export function returnOnCondition(
  condition: boolean,
  trueValue: string,
  falseValue: string,
  always?: string,
): string {
  if (condition) {
    return trueValue + " " + always;
  } else {
    return falseValue + " " + always;
  }
}
