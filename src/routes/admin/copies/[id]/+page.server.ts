import * as db from '$lib/database/operations';

export async function load({params}) {

  const id = params.id;
  const bookCopy = await db.getBookCopy(id);

  return {
    bookCopy
  }
}