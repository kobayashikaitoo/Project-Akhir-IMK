import { TRPCError } from "@trpc/server";
import { env } from "@labas/env/server";
import { logger } from "@labas/api/logger";

export async function validateTurnstileToken(token: string | undefined): Promise<void> {
  const secretKey = env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  const isDev = env.NODE_ENV !== "production";

  if (isDev && !secretKey) return;

  if (!secretKey) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "CAPTCHA is not configured. Set CLOUDFLARE_TURNSTILE_SECRET_KEY.",
    });
  }

  if (!token) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "CAPTCHA verification is required." });
  }

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v1/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: secretKey, response: token }),
    });
    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (!data.success) {
      logger.warn("[TURNSTILE] Token verification failed", { errorCodes: data["error-codes"] });
      throw new TRPCError({ code: "BAD_REQUEST", message: "CAPTCHA verification failed. Please try again." });
    }
  } catch (err) {
    if (err instanceof TRPCError) throw err;
    if (isDev) {
      logger.warn("[TURNSTILE] Siteverify request failed, allowing in dev", { error: (err as Error).message });
      return;
    }
    logger.error("[TURNSTILE] Siteverify request failed, rejecting request", { error: (err as Error).message });
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "CAPTCHA verification service temporarily unavailable.",
    });
  }
}
