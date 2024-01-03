<script>
	import Author from "../../../../../components/Author.svelte";
	import Genre from '../../../../../components/Genre.svelte';
	export let data;
	$: book = data.book;
	$: author = book.author;
	$: authors = data.authors;
	$: genres = data.genres;

</script>
<div>
	<div class="container mx-auto">
		<div class="py-8">
			<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
				<h2 class="text-2xl leading-tight md:pr-0 text-white">Update Book</h2>
				<div>
					<form method="POST" class="w-full space-x-3">
						<div>
							<input
								type="text"
                name='title' required bind:value={book.title}
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
							/>
						</div>
						<Author bind:selectedId={author.id} {authors} />
						<Genre bind:selectedId={book.genreId} {genres} />
						<div>
							<textarea rows="20" cols="50"
                name='summary' required bind:value={book.summary}
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
							/>
						</div>
						<div>
							<input
								type="text"
                name='isbn' required bind:value={book.isbn}
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