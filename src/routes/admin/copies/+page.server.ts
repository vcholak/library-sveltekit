import * as db from '$lib/database/operations';

export async function load() {
  const bookCopies = await db.allBookCopies();
  console.dir(bookCopies, { depth: null});

  return {
    bookCopies
  }
}
