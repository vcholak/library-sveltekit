import * as db from '$lib/database/operations';

export async function load() {
  const total = await db.countBooks();
  const books = await db.getBooks(0, 10);

  return {
    total,
    books
  }
}
