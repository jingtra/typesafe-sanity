import { SanityQuery } from "./types/SanityQuery";
import { SanityReduxState } from "./types/SanityReduxState";
import { SanityResultFromQuery } from "./types/SanityResultFromQuery";
import getSanityKey from "./getSanityKey";
import { SanityResultStatus } from "./SanityResultStatus";

export default function getResultFromSanityStore<Params, RetVal>(
  query: SanityQuery<Params, RetVal>,
  params: Params,
  state: SanityReduxState
): SanityResultFromQuery<SanityQuery<Params, RetVal>> {
  const key = getSanityKey(query, params);
  return state[key]
    ? state[key]
    : { status: SanityResultStatus.NONE, body: undefined };
}
