import * as db from '$lib/database/operations';
import type { BookCopy } from '@prisma/client';
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

    const dueDateStr = data.get('dueBack') as string; // string in ISO format
    const dueBackVal = dueDateStr ? new Date(dueDateStr) : null;

    const bookCopy: BookCopy = {
      id: '',
      bookId: data.get('bookId') as string,
      imprint: data.get('imprint') as string,
      isbn: data.get('isbn') as string,
      status: Number(data.get('status') as string),
      dueBack: dueBackVal
    };
    
    db.createBookCopy(bookCopy);

    throw redirect(303, '/admin/copies');
    //TODO refresh the  page
  }
}