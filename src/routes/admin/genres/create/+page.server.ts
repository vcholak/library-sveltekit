import * as db from '$lib/database/operations';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async({ request }) => {
    const data = await request.formData();
    const title = data.get('title') as string;
    db.createGenre(title);

    throw redirect(303, '/admin/genres');
    //TODO refresh the  page
  }
}