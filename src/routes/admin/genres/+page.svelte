<script>
	export let data;

	
</script>

<svelte:head>
	<title>Genres</title>
</svelte:head>

<div class="flex justify-between pt-2">
	<h1 class="ml-2">Genre List</h1>
	<a href="/admin/genres/create" class="rounded-md bg-cyan-500 text-white hover:bg-blue-500 mr-2 p-2">New Genre</a>
</div>
<div class="grid justify-items-center">
	<ul>
		{#each data?.genres as genre, ind}
			<li>
				<a href={`/api/genres/${genre.id}`} class="hover:text-blue-500">
					<span>{genre.title}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
