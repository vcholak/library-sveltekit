import type { Session } from "@auth/core/types";

export type HomeDataType = {
  session?: Session | null
  authors: number
  genres: number
  books: number
  bookCopies: number
  availableCopies: number
}

export function getBookCopyStatuses() {
  return [
    "NotAvailable", // 1
    "OnOrder",      // 2
    "InTransit",    // 3
    "OnHold",       // 4
    "OnLoan",       // 5
    "InLibrary"     // 6
  ]
}

