import { PrismaClient, Prisma } from '@prisma/client'

export class DatabaseManager {
  public static PrismaSingleton: PrismaClient

  static getPrisma() {
    this.PrismaSingleton ||= new PrismaClient()
    return this.PrismaSingleton
  }
}

export const db = DatabaseManager.getPrisma()
export { Prisma }
