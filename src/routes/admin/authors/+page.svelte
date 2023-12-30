<script lang="ts">
	import type { AuthorType } from '$lib/database/types'
	let authors: AuthorType[];

	async function getAuthors() {
		const resp = await fetch('/api/authors');
		authors = await resp.json();
	}
</script>

<svelte:head>
	<title>Authors</title>
</svelte:head>

<div class="flex justify-between pt-2">
	<h1 class="ml-2">Author List</h1>
	<a href="/new-author" class="rounded-md bg-cyan-500 text-white hover:bg-blue-500 mr-2 p-2">New Author</a>
</div>
<div class="grid justify-items-center">
	<ul>
		{#each authors as author, ind}
			<li>
				<a href={`/api/authors/${author.id}`} class="hover:text-blue-500">
					<span>{author.firstName}{' '}{author.familyName}</span>
				</a>
			</li>
		{/each}
	</ul>
</div>
