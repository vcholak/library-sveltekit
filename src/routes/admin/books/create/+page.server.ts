import * as db from '$lib/database/operations';
import type { BookType } from '$lib/database/types';
import { redirect } from '@sveltejs/kit';

export async function load() {
  const authors = await db.allAuthors();
  const genres = await db.allGenres();

  return {
    authors,
    genres
  }
}


export const actions = {
  default: async({ request }) => {
    const data = await request.formData();

    const book: BookType = {
      title: data.get('title') as string,
      summary: data.get('summary') as string,
      isbn: data.get('isbn') as string,
      authorId: data.get('authorId') as string,
      genreId: data.get('genreId') as string
    }
    
    db.createBook(book);

    throw redirect(303, '/admin/books');
    //TODO refresh the  page
  }
}