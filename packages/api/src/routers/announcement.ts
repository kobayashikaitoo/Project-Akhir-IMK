import { router, publicProcedure } from "../index";
import { getConfigRaw } from "../lib/credit";

export const announcementRouter = router({
  getActive: publicProcedure.query(async () => {
    const raw = await getConfigRaw("active_announcement");
    if (!raw) return null;
    try {
      const data = JSON.parse(raw) as {
        message: string;
        severity: "info" | "warning" | "error";
        active: boolean;
        expiresAt: string | null;
      };
      if (!data.active) return null;
      if (data.expiresAt && new Date(data.expiresAt) < new Date()) return null;
      return { message: data.message, severity: data.severity };
    } catch {
      return null;
    }
  }),
});
