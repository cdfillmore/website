export function assetHref(value: string) {
  if (URL.canParse(value)) return value;
  if (!value.startsWith("/")) return value;

  return `${import.meta.env.BASE_URL}${value.slice(1)}`;
}
