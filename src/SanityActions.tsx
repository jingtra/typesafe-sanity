import { createAsyncAction } from "typesafe-actions";

export const fetchSanityAction = createAsyncAction(
  "fetchSanity",
  "fetchSanitySuccess",
  "fetchSanityFailed"
)<{ key: string }, { key: string; body: any }, Error>();
