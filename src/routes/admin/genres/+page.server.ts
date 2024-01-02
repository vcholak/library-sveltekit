import * as db from '$lib/database/operations';

export async function load() {
  const total = await db.countGernes();
  const genres = await db.getGenres(0, 10);

  return {
    total,
    genres
  }
}
