export const load = async (event) => {
	const session = await event.locals.getSession();
	console.log('in login/+page.server.js session:', session)

	return {
		session
	};
};
