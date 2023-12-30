import * as db from '$lib/database/operations';
import type { BookCopyType } from '$lib/database/types';

export async function load() {
  const books = await db.allBooks();

  return {
    books
  }
}


export const actions = {
  default: async({ request }) => {
    const data = await request.formData();

    const dueDateStr = data.get('dueDate') as string;
    const dueDate = dueDateStr ? new Date(dueDateStr) : null;

    const bookCopy: BookCopyType = {
      bookId: data.get('bookId') as string,
      imprint: data.get('imprint') as string,
      status: Number(data.get('status') as string),
      dueDate
    };
    
    db.createBookCopy(bookCopy);
  }
}