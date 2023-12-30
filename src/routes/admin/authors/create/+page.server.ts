import * as db from '$lib/database/operations';
import type { AuthorType } from '$lib/database/types';

export const actions = {
  default: async({ request }) => {
    const data = await request.formData();
    console.log('form data=', data)
    const deathDateStr = data.get('deathDate') as string;
    const deathDate = deathDateStr ? new Date(deathDateStr) : null;

    const author: AuthorType = {
      firstName: data.get('firstName') as string,
      familyName: data.get('familyName') as string,
      birthDate: new Date(data.get('birthDate') as string),
      deathDate,
      lifeSpan: data.get('lifeSpan') as string,
      id: null
    }
    
    db.createAuthor(author);
  }
}