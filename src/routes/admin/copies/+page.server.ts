import * as db from '$lib/database/operations';

export async function load() {
  const bookCopies = await db.getBookCopies(0, 10);
  // console.dir(bookCopies, { depth: null});

  return {
    bookCopies
  }
}
