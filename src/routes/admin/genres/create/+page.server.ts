import * as db from '$lib/database/operations';

export const actions = {
  default: async({ request }) => {
    const data = await request.formData();
    const title = data.get('title') as string;
    db.createGenre(title);
  }
}