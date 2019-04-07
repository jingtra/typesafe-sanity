import { SanityQuery } from "./types/SanityQuery";
import { SanityClientApi } from "./types/SanityClientApi";
import { SanityReduxState } from "./types/SanityReduxState";
import getSanityKey from "./getSanityKey";
import { fetchSanityAction } from "./SanityActions";

export default function fetchSanityQuery<Params, RetVal>(
  query: SanityQuery<Params, RetVal>,
  params: Params,
  config: {
    sanityClient: SanityClientApi;
    getState: (state) => SanityReduxState;
  }
): (ReduxThunk, any) => Promise<RetVal> {
  return (dispatch, getState) => {
    const key = getSanityKey(query, params);
    if (config.getState(getState())[key]) {
      return Promise.resolve(config.getState(getState())[key].body);
    }
    dispatch(fetchSanityAction.request({ key: key }));
    return query.execute(params, config.sanityClient).then(res => {
      dispatch(fetchSanityAction.success({ key: key, body: res }));
      return res;
    });
  };
}
