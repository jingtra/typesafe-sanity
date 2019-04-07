import { SanityQuery } from "./types/SanityQuery";
import { SanityClientApi } from "./types/SanityClientApi";

export default function createSanityQuery<Params, RetVal>(
  sanityQuery: string
): SanityQuery<Params, RetVal> {
  return {
    query: sanityQuery,
    execute: (params: Params, sanityClient: SanityClientApi): Promise<RetVal> =>
      sanityClient.fetch(sanityQuery, params || {}),
  };
}
