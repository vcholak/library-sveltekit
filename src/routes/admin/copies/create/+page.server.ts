import * as db from '$lib/database/operations';
import type { BookCopyType } from '$lib/database/types';
import { redirect } from '@sveltejs/kit';

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
    const dueBack = dueDateStr ? new Date(dueDateStr) : undefined;

    const bookCopy: BookCopyType = {
      bookId: data.get('bookId') as string,
      imprint: data.get('imprint') as string,
      status: Number(data.get('status') as string),
      dueBack
    };
    
    db.createBookCopy(bookCopy);

    throw redirect(303, '/admin/copies');
    //TODO refresh the  page
  }
}