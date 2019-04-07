import { SanityResultStatus } from "../SanityResultStatus";

export interface SanityResult<V> {
  status: SanityResultStatus;
  body: V;
}
