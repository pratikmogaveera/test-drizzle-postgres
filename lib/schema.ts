import { sql } from "@vercel/postgres";
import { pgTable, serial, text, timestamp, uniqueIndex, } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const usersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);

export const getExampleTable = async () => {
  const selectResult = await db.select().from(usersTable);
  console.log('Results', selectResult);
};