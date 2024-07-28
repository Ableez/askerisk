import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  dialect: "sqlite",
  driver: "expo",
  tablesFilter: ["asterisk_mapp_*"],
} satisfies Config;
