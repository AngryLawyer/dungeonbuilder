export function repeat<T>(limit:number, item: T): T[] {
  const data = [];
  let index = 0;
  while (index < limit) {
    data.push(item);
    ++index;
  }
  return data;
}
