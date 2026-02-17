/**
 * Prepend Vite's base URL to a public asset path.
 * In dev: base is "/", so "/images/foo.png" stays as-is.
 * In prod: base is "/RepoName/", so it becomes "/RepoName/images/foo.png".
 */
const BASE = import.meta.env.BASE_URL;

export function assetUrl(path) {
  if (!path || !path.startsWith('/')) return path;
  // Avoid double prefix
  if (path.startsWith(BASE)) return path;
  return BASE + path.slice(1);
}
