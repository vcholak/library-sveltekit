import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.getSession();
	const url = event.url;

	if (!session) {
		throw redirect(307, `/login?returnTo=${url.pathname}`);
	}

	return {
		session
	};
};
