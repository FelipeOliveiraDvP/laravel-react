export function enumToArray(e: any) {
  return Object.values(e).filter((n) => !isNaN(Number(n)));
}
