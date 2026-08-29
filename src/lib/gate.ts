/** Soft site gate — password unlocks an httpOnly cookie. */

export const GATE_COOKIE = "drok_gate";

/** Cookie value set after a correct password. */
export const GATE_TOKEN = process.env.SITE_GATE_TOKEN ?? "drok-access-granted";

/** Shared password (override with SITE_PASSWORD in env). */
export const GATE_PASSWORD = process.env.SITE_PASSWORD ?? "2032";

export const GATE_PATH = "/gate";
