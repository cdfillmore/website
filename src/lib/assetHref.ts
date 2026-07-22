function stripBase(pathname: string, base: string) {
  if (base === "/") return pathname;

  const withSlash = base.endsWith("/") ? base : `${base}/`;
  if (pathname.startsWith(withSlash)) return `/${pathname.slice(withSlash.length)}`;

  const withoutSlash = withSlash.slice(0, -1);
  if (pathname === withoutSlash) return "/";
  if (pathname.startsWith(`${withoutSlash}/`)) return pathname.slice(withoutSlash.length);

  return pathname;
}

/** Site-root paths like `/CV.pdf` → links that respect Astro `base` and stay relative to the current page. */
export function assetHref(pathname: string, value: string) {
  if (URL.canParse(value)) return value;
  if (!value.startsWith("/")) return value;

  const pagePath = stripBase(pathname, import.meta.env.BASE_URL);
  const fromParts = pagePath.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const toParts = value.slice(1).split("/").filter(Boolean);
  let shared = 0;

  while (shared < fromParts.length && shared < toParts.length && fromParts[shared] === toParts[shared]) {
    shared += 1;
  }

  const relative = `${"../".repeat(fromParts.length - shared)}${toParts.slice(shared).join("/")}`;
  return relative || "./";
}
