import sanityClient from "@sanity/client";
import { SanityClientApi } from "./types/SanityClientApi";
interface CreateSanityClientParams {
  projectId: string;
  dataset: string;
  useCdn?: boolean;
  withCredentials?: boolean;
}
export function createSanityClient(
  params: CreateSanityClientParams
): SanityClientApi {
  return sanityClient({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: params.projectId,
    dataset: params.dataset,
    useCdn: !params.useCdn,
    withCredentials: params.withCredentials,
  });
}
