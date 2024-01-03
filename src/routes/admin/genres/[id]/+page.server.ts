import * as db from '$lib/database/operations';

export async function load({params}) {

  const id = params.id;
  const genre = await db.getGenre(id);

  return {
    genre
  }
}