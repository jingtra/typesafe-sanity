import { SanityQuery } from "./types/SanityQuery";

export default function getSanityKey<P, R>(
  query: SanityQuery<P, R>,
  params: P
): string {
  return (
    query.query +
    ":" +
    Object.keys(params || {})
      .sort()
      .map(key => params[key])
      .join(",")
  );
}
