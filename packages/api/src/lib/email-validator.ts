import { isDisposableEmail } from "./disposable-emails";

export { isDisposableEmail };

export function getEmailDomain(email: string): string {
  return email.split("@")[1]?.toLowerCase() ?? "";
}

// ── MX Record Validation ───────────────────────────────────

interface MxCacheEntry {
  valid: boolean;
  expiresAt: number;
}

const mxCache = new Map<string, MxCacheEntry>();
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

export async function hasValidMxRecord(domain: string): Promise<boolean> {
  const cached = mxCache.get(domain);
  if (cached && cached.expiresAt > Date.now()) return cached.valid;

  try {
    const { default: dns } = await import("node:dns/promises");
    const records = await dns.resolveMx(domain);
    const valid = records.length > 0;
    mxCache.set(domain, { valid, expiresAt: Date.now() + CACHE_TTL_MS });
    return valid;
  } catch {
    mxCache.set(domain, { valid: false, expiresAt: Date.now() + CACHE_TTL_MS });
    return false;
  }
}
