import * as db from '$lib/database/operations';
import type { AuthorType } from '$lib/database/types';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async({ request }) => {
    const data = await request.formData();
    console.log('form data=', data)
    const deathDateStr = data.get('deathDate') as string;
    const deathDate = deathDateStr ? new Date(deathDateStr) : undefined;

    const author: AuthorType = {
      firstName: data.get('firstName') as string,
      familyName: data.get('familyName') as string,
      birthDate: new Date(data.get('birthDate') as string),
      deathDate,
      lifeSpan: data.get('lifeSpan') as string,
    }
    
    db.createAuthor(author);

    throw redirect(303, '/admin/authors');
    //TODO refresh the  page
  }
}