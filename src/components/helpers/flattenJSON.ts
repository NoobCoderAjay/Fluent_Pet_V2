export function flattenJSON(
  obj: Record<string, any> = {},
  separator: string = '_',
  res: Record<string, any> = {},
  extraKey: string = '',
) {
  let key: string = '';
  for (key in obj) {
    if (typeof obj[key] !== 'object') {
      res[`${extraKey}${key}`] = obj[key];
    } else {
      flattenJSON(obj[key], separator, res, `${extraKey}${key}${separator}`);
    }
  }
  return res;
}
