import { SanityResult } from "./types/SanityResult";
import localizeSanityResultBody from "./localizeSanityResultBody";
import { SanityResultStatus } from "./SanityResultStatus";

export default function localizeSanityResult<V>(
  result: SanityResult<V>,
  languages
) {
  if (result.status == SanityResultStatus.SUCCESS) {
    return {
      status: SanityResultStatus.SUCCESS,
      body: localizeSanityResultBody(result.body, languages),
    };
  }
  return {
    status: result.status,
    body: null,
  };
}
