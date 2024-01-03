<script lang='ts'>
  export let data;
  $: genre = data.genre;
</script>

<div class="container mx-auto">
	<div class="py-8">
		<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight md:pr-0 text-white">Genre Details</h2>
			<div>
				<a href="/admin/genres/[id]/edit" class="px-4 py-2 text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-purple-700">Edit</a>
			</div>
		</div>
		<div class="py-4">
			<div class="max-w-full overflow-x-auto shadow rounded-lg">
				{#if genre}
          <div class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span>
              {genre.title}
            </span>
          </div>
      {/if}
			</div>
		</div>
	</div>
</div>
