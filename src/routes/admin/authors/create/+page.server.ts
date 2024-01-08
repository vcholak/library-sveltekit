import * as db from '$lib/database/operations';
import type { Author } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async({ request }) => {
    const data = await request.formData();
    const deathDateStr = data.get('deathDate') as string;
    const deathDateVal = deathDateStr ? new Date(deathDateStr) : null;

    const author: Author = {
      id: '',
      firstName: data.get('firstName') as string,
      familyName: data.get('familyName') as string,
      birthDate: new Date(data.get('birthDate') as string),
      deathDate: deathDateVal,
      lifeSpan: data.get('lifeSpan') as string,
    }
    
    db.createAuthor(author);

    throw redirect(303, '/admin/authors');
    //TODO refresh the  page
  }
}