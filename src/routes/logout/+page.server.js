export const load = async (event) => {
	const session = await event.locals.getSession();
	console.log(' in logout/+page.server.js session:', session)

	return {
		session
	};
};
