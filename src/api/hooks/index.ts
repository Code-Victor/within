import { router } from "react-query-kit";
import { sampleRequest } from "..";

export const sampleRouter = router("sample", {
  sample: router.query({
    fetcher: sampleRequest,
  }),
});

/**
 * Usage:
 * import { sampleRouter } from "@/api/hooks";
 *
 * function sampleComponent(){
 * const { data, isLoading, isError } = sampleRouter.sample.useQuery();
 * return(
 * ...
 * )
 * }
 */
