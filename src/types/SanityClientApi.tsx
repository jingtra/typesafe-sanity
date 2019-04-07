export interface SanityClientApi {
  clientConfig: any;
  fetch<Params, RetVal>(string, Params): RetVal;
  listen<Params, RetVal>(string, Params): RetVal;
}
