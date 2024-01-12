export function objectToOptions<T extends string>(obj: Record<T, string>) {
  return Object.entries(obj).map((result) => ({
    value: result[0],
    label: result[1] as string,
  }));
}
