import * as db from '$lib/database/operations';
import { redirect } from '@sveltejs/kit';

export async function load({params}) {

  const id = params.id;
  const genre = await db.getGenre(id);

  return {
    genre
  }
}

export const actions = {
  default: async({ params, request }) => {
    const id = params.id;
    const data = await request.formData();
    const title = data.get('title') as string;
    db.updateGenre(id, title);

    throw redirect(303, '/admin/genres');
    //TODO refresh the  page
  }
}