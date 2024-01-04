<script lang="ts">
	export let data;
	$: genre = data.genre;
</script>

<div>
	<div class="container mx-auto">
		<div class="py-8">
			<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
				<h2 class="text-2xl leading-tight md:pr-0 text-white">Update Genre</h2>
				<div class="text-end">
					<form method="POST" class="flex w-full space-x-3">
						<div class=" relative ">
							<input
								type="text"
                name='title' required bind:value={genre.title}
								id="form-subscribe-Filter"
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