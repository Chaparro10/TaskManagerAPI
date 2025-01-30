import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

const userTable = mysqlTable("User", {
  id: int().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  user: varchar({ length: 255 }).notNull(),
  status: int().notNull(),
  createdAt: timestamp("CreatedAt", { withTimezone: true }).defaultNow(), // Fecha con zona horaria
  updatedAt: timestamp("UpdatedAt").defaultNow().onUpdateNow(), // Se actualiza automáticamente
});

export default userTable;
