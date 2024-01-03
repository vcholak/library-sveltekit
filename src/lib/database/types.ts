import type { Session } from "@auth/core/types"

export type HomeDataType = {
  session?: Session | null
  authors: number
  genres: number
  books: number
  bookCopies: number
  availableCopies: number
}

export type GenreType = {
  id?: string
  title: string
}

export type AuthorType = {
  id?: string
  firstName: string
  familyName: string
  birthDate: Date
  deathDate?: Date | null
  lifeSpan: string
}

export type BookType = {
  id?: string
  title: string
  summary: string
  isbn: string
  authorId: string
  genreId: string
}

export type BookCopyType = {
  id?: string
  bookId: string
  imprint: string
  status: number
  dueBack?: Date | null
  book?: {
    title: string
  }
}

export function getBookCopyStatuses() {
  return [
    "NotAvailable", // 0
    "OnOrder",      // 1
    "InTransit",    // 2
    "OnHold",       // 3
    "OnLoan",       // 4
    "InLibrary"     // 5
  ]
}

