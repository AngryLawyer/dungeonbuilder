export function repeat<T>(limit:number, item: T): T[] {
  const data = [];
  let index = 0;
  while (index < limit) {
    data.push(item);
    ++index;
  }
  return data;
}

export function range(start: number, end: number): number[] {
  const data = [];
  let index = start;
  while (index < end) {
    data.push(index);
    ++index;
  }
  return data;
}
