import { ActionType, getType } from "typesafe-actions";
import * as actions from "./SanityActions";
import { SanityResult } from "./types/SanityResult";
import { SanityReduxState } from "./types/SanityReduxState";
import { SanityResultStatus } from "./SanityResultStatus";
type AllActions = ActionType<typeof actions>;

export default function SanityReducer(
  state: SanityReduxState = new Map(),
  action: AllActions
) {
  switch (action.type) {
    case getType(actions.fetchSanityAction.request):
      return {
        ...state,
        [action.payload.key]: {
          status: SanityResultStatus.FETCHING,
          body: null,
        } as SanityResult<any>,
      };
    case getType(actions.fetchSanityAction.success):
      return {
        ...state,
        [action.payload.key]: {
          status: SanityResultStatus.SUCCESS,
          body: action.payload.body,
        } as SanityResult<any>,
      };
  }
  return state;
}
