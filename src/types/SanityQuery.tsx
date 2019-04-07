import { SanityClientApi } from "./SanityClientApi";

export interface SanityQuery<Params, RetVal> {
  query: string;
  execute: (p: Params, sanityClient: SanityClientApi) => Promise<RetVal>;
}
