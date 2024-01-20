import { router } from "react-query-kit";
import {
  createAnnoucement,
  createPayment,
  createSpace,
  getAllSpaces,
  getAnnouncements,
  getPayment,
  getSpace,
  getUser,
  joinSpace,
  leaveSpaces as leaveSpace,
  login,
  makePayment,
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

export const announcementRouter = router("annoucements", {
  create: router.mutation({
    mutationFn: createAnnoucement,
  }),
  get: router.query({
    fetcher: getAnnouncements,
  }),
});
export const paymentRouter = router("payment", {
  create: router.mutation({
    mutationFn: createPayment,
  }),
  get: router.query({
    fetcher: getPayment,
  }),
  makePayment: router.mutation({
    mutationFn: makePayment,
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
