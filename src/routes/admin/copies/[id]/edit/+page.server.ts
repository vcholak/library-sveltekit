import * as db from '$lib/database/operations';
import type { BookCopyType } from '$lib/database/types';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const id = params.id;
  const bookCopy = await db.getBookCopy(id);
  const books = await db.allBooks();

  return {
    bookCopy,
    books
  }
}

export const actions = {
  default: async({ params, request }) => {
    const id = params.id;
    const data = await request.formData();

    const dueDateStr = data.get('dueBack') as string;
    const dueBack = dueDateStr ? new Date(dueDateStr.split('T')[0]) : undefined;

    const bookCopy: BookCopyType = {
      bookId: data.get('bookId') as string,
      imprint: data.get('imprint') as string,
      status: Number(data.get('status') as string),
      dueBack
    };
    console.log('bookCopy', bookCopy)
    
    db.updateBookCopy(id, bookCopy);

    throw redirect(303, '/admin/copies');
    //TODO refresh the  page
  }
}