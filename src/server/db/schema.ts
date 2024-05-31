import { sql } from "drizzle-orm";
import { index, pgTableCreator, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator(name => `test-gallery-${name}`);

export const images = createTable(
  "images",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    url: varchar("url", { length: 1023 }).notNull(),
    created_at: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp("updated_at"),
  },
  example => ({
    nameIndex: index("name_idx").on(example.title),
  }),
);
