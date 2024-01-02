import * as db from '$lib/database/operations';

export async function load() {

  const authors = await db.allAuthors();

  return {
    authors
  }
}
