import * as db from '$lib/database/operations';
import type { AuthorType } from '$lib/database/types';
import { redirect } from '@sveltejs/kit';

export async function load({params}) {

  const id = params.id;
  const author = await db.getAuthor(id);

  return {
    author
  }
}

export const actions = {
  default: async({ params, request }) => {
    const id = params.id;
    const data = await request.formData();
    const deathDateStr = data.get('deathDate') as string;
    const deathDate = deathDateStr ? new Date(deathDateStr) : undefined;

    const author: AuthorType = {
      firstName: data.get('firstName') as string,
      familyName: data.get('familyName') as string,
      birthDate: new Date(data.get('birthDate') as string),
      deathDate,
      lifeSpan: data.get('lifeSpan') as string,
    }
    
    db.updateAuthor(id, author);

    throw redirect(303, '/admin/authors');
    //TODO refresh the  page
  }
}