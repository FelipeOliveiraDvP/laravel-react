export function arrayToOptions(array: string[]) {
  return array.map((label, index) => ({
    value: String(index),
    label,
  }));
}
