import * as db from '$lib/database/operations';

export async function load() {
  const genres = await db.allGenres();

  return {
    genres
  }
}
