import { router } from "react-query-kit";
import { getUser, login, signup } from "..";

export const authRouter = router("auth", {
  login: router.mutation({
    mutationFn: login,
  }),
  signup: router.mutation({
    mutationFn: signup,
  }),
  user: router.query({
    fetcher: getUser,
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
