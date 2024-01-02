import * as db from '$lib/database/operations';

export async function load() {
  const genres = await db.getGenres(0, 10);

  return {
    genres
  }
}
