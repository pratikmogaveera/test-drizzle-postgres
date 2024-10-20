import "./config"
import { drizzle } from "drizzle-orm/vercel-postgres"
import { sql } from "@vercel/postgres"
import { usersTable } from "./schema"
import * as schema from "./schema"

export type NewUser = typeof usersTable.$inferInsert

export const db = drizzle(sql, { schema })

export const getAllUsers = async () => {
  const result = await db.select().from(usersTable)
  setTimeout(() => { }, 2000)
  return result
}

export const insertUser = async (user: NewUser) => {
  return db.insert(usersTable).values(user).returning()
}