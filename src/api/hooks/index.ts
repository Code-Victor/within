import { router } from "react-query-kit";
import {
  createSpace,
  getAllSpaces,
  getSpace,
  getUser,
  joinSpace,
  leaveSpaces as leaveSpace,
  login,
  signup,
} from "..";

export const authRouter = router("auth", {
  login: router.mutation({
    mutationFn: login,
  }),
  signup: router.mutation({
    mutationFn: signup,
  }),
  user: router.query({
    fetcher: getUser,
    gcTime: Infinity,
  }),
});

export const spaceRouter = router("space", {
  create: router.mutation({
    mutationFn: createSpace,
  }),
  join: router.mutation({
    mutationFn: joinSpace,
  }),
  leaveSpace: router.mutation({
    mutationFn: leaveSpace,
  }),
  getAllSpaces: router.query({
    fetcher: getAllSpaces,
  }),
  get: router.query({
    fetcher: getSpace,
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
