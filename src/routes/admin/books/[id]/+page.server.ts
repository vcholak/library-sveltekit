import * as db from '$lib/database/operations';

export async function load({params}) {

  const id = params.id;
  const book = await db.getBook(id);

  return {
    book
  }
}