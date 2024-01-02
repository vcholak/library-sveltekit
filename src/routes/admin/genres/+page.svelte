<script lang="ts">
	import type { GenreType } from '$lib/database/types';
	import Pagination from '../../../components/Pagination.svelte';

	export let data;
	let genres: GenreType[];
</script>

<div>
	<div class="container mx-auto">
		<div class="py-8">
			<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
				<h2 class="text-2xl leading-tight md:pr-0 text-white">Genres</h2>
				<div>
					<a href="/admin/genres/create" class="px-4 py-2 text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-purple-700">New Genre</a>
				</div>
				<div class="text-end">
					<form class="flex w-full space-x-3">
						<div class=" relative ">
							<input
								type="text"
								id="form-subscribe-Filter"
								class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
								placeholder="name"
							/>
						</div>
						<button
							class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
							type="submit"
						>
							Filter
						</button>
					</form>
				</div>
			</div>
			<div class="py-4">
				<div class="max-w-full overflow-x-auto shadow rounded-lg">
					<table class="w-full leading-normal">
					{#if genres}
						{#each genres as genre}
							<tr>
								<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p class="text-gray-900 whitespace-no-wrap">
										<a href={`/admin/genres/${genre.id}`} class="hover:text-blue-500">
											<span>{genre.title}</span>
										</a>
									</p>
								</td>
							</tr>
						{/each}
					{/if}
					</table>
					<Pagination items={data.genres} bind:trimmedItems={genres} />
				</div>
			</div>
		</div>
	</div>
</div>