import * as db from '$lib/database/operations';

export async function load({params}) {

  const id = params.id;
  const author = await db.getAuthor(id);

  return {
    author
  }
}