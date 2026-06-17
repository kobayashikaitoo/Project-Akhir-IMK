import { z } from "zod";
import { eq } from "drizzle-orm";
import { router, protectedProcedure } from "../index";
import { db } from "@labas/db";
import { user } from "@labas/db";
import { throwBadRequest } from "../lib/errors";

export const profileRouter = router({
  update: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1).max(100).optional(),
        image: z
          .string()
          .url()
          .max(500)
          .refine(
            (url) => url.startsWith("https://api.dicebear.com/") || url.startsWith("https://avatars.githubusercontent.com/"),
            { message: "Only DiceBear or GitHub avatar URLs are allowed" },
          )
          .optional()
          .nullable(),
        grade: z.string().min(1).max(20).optional().nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      // Only allow explicitly whitelisted fields
      const updates: Record<string, string | null> = {};
      if (input.name !== undefined) updates.name = input.name;
      if (input.image !== undefined) updates.image = input.image;
      if (input.grade !== undefined) updates.grade = input.grade;

      const [updated] = await db
        .update(user)
        .set(updates)
        .where(eq(user.id, userId))
        .returning({
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          grade: user.grade,
        });

      if (!updated) throwBadRequest("Failed to update profile");
      return updated;
    }),
});
