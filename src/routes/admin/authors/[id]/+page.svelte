<script lang='ts'>
	import { DateTime } from 'luxon';
  export let data;
  $: author = data.author;
  $: fullName = author?.firstName + ' ' + author?.familyName;
  $: birthDate = author ? DateTime.fromJSDate(author.birthDate, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL) : null;
  $: deathDate = author?.deathDate ? DateTime.fromJSDate(author.deathDate, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL) : null;
</script>

<div class="container mx-auto">
	<div class="py-8">
		<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight md:pr-0 text-white">Author Details</h2>
			<div>
				<a href="/admin/authors/{author?.id}/edit" class="px-4 py-2 text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-purple-700">Edit</a>
			</div>
		</div>
		<div class="py-4">
			<div class="max-w-full overflow-x-auto shadow rounded-lg">
				{#if author}
          <div class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p class="mb-2">
              <span class="underline">
                {fullName}
              </span>
              <span> ( </span>
              {birthDate}
              <span> - </span>
              {#if deathDate}
                {deathDate}
              {:else}
                Alive
              {/if}
              <span> ) </span>
            </p>
            <p>
              {author.lifeSpan}
            </p>
          </div>
      {/if}
			</div>
		</div>
	</div>
</div>
