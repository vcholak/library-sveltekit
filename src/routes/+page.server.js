import * as db from '$lib/database/operations';

export const load = async (event) => {
	const session = await event.locals.getSession();

	const authors = await db.countAuthors();
	const genres = await db.countGernes();
	const books = await db.countBooks();
	const bookCopies = await db.countBookCopies();
	const availableCopies = await db.countAvailableBookCopies();


	return {
		session,
		authors,
		genres,
		books,
		bookCopies,
		availableCopies
	};
};
