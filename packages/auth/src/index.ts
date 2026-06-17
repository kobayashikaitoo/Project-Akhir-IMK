import { createDb } from "@labas/db";
import * as schema from "@labas/db/schema/auth";
import { env } from "@labas/env/server";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export function createAuth() {
  const db = createDb();

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",

      schema: schema,
    }),
    trustedOrigins: env.CORS_ORIGIN.split(",").map((o) => o.trim()),
    emailAndPassword: {
      enabled: true,
      autoSignIn: true,
    },
    user: {
      changeEmail: {
        enabled: true,
      },
    },
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    advanced: {
      defaultCookieAttributes: {
        sameSite: "lax",
        secure: false,
        httpOnly: true,
      },
    },
    databaseHooks: {
      user: {
        create: {
          before: async (user) => {
            console.log("Better Auth Database Hook - Creating User:", user.email);
            return {
              data: {
                ...user,
                emailVerified: true,
              },
            };
          },
        },
      },
    },
    plugins: [],
  });
}

export const auth = createAuth();
