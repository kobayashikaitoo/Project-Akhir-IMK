import { protectedProcedure, publicProcedure, router } from "../index";
import { announcementRouter } from "./announcement";
import { profileRouter } from "./profile";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),
  privateData: protectedProcedure.query(({ ctx }) => {
    return {
      message: "This is private",
      user: ctx.session.user,
    };
  }),
  announcement: announcementRouter,
  profile: profileRouter,
});

export type AppRouter = typeof appRouter;
