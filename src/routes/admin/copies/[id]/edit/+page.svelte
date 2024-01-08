<script>
	import { DateTime } from "luxon";
	import Book from "../../../../../components/Book.svelte";
	import BookCopyStatus from "../../../../../components/BookCopyStatus.svelte";
	export let data;
	$: books = data.books;
	$: bookCopy = data.bookCopy;
	$: dueBack = bookCopy?.dueBack ? DateTime.fromJSDate(bookCopy.dueBack, {zone: 'utc'}).toISODate() : '';
	$: book = bookCopy?.book;
</script>

{#if bookCopy && book}
<div>
	<div class="container mx-auto">
		<div class="py-8">
			<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
				<h2 class="text-2xl leading-tight md:pr-0 text-white">Update Book Copy</h2>
				<div>
					<form method="POST" class="w-full space-x-3">
						<Book bind:selectedId={book.id} {books} />
						<div>
							<input
								type="text"
                name='imprint' required bind:value={bookCopy.imprint}
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
							/>
						</div>
						<div>
							<input
								type="text"
                name='isbn' required bind:value={bookCopy.isbn}
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
								placeholder="isbn"
							/>
						</div>
						<BookCopyStatus bind:selectedId={bookCopy.status} />
						<div>
							<input
								type="date"
                name='dueBack' bind:value={dueBack}
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
							/>
						</div>
						<button
							class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
							type="submit"
						>
							Update
						</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
{/if}