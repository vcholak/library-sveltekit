import * as db from '$lib/database/operations';

export const actions = {
  default: async({ request }) => {
    const data = await request.formData();
    const title = data.get('title') as string;
    console.log('title=', title)
    db.createGenre(title);
  }
}