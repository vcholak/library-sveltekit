import * as db from '$lib/database/operations';

export async function load() {
  const books = await db.allBooks();

  return {
    books
  }
}
