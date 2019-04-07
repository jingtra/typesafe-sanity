import { SanityResult } from "./SanityResult";
import { SanityQuery } from "./SanityQuery";

export type SanityResultFromQuery<X> = X extends SanityQuery<
  infer Params,
  infer R
>
  ? SanityResult<R>
  : never;
