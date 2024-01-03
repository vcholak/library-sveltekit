<script lang='ts'>
  export let data;
  $: author = data.author;
  $: birthDate = author?.birthDate.toISOString().split('T')[0];
  $: deathDate = author?.deathDate?.toISOString().split('T')[0];
</script>

<div class="container mx-auto">
	<div class="py-8">
		<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight md:pr-0 text-white">Author Details</h2>
		</div>
		<div class="py-4">
			<div class="max-w-full overflow-x-auto shadow rounded-lg">
				{#if author}
          <form method="POST" class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div class="grid grid-cols-2 gap-3">
              <label for='firstName' class='sm:text-end'>First Name:</label>
              <input id='firstName' type="text" name="firstName" required bind:value={author.firstName} />
              
              <label for='familyName' class='sm:text-end'>Family Name:</label>
              <input type="text" name="familyName" id='familyName' required bind:value={author.familyName} />
              
              <label for='birthDate' class='sm:text-end'>Birth Date:</label>
              <input type="date" name="birthDate" id='birthDate' required bind:value={birthDate} />
              
              <label for="deathDate" class='sm:text-end'>Death Date:</label>
              <input type="date" name="deathDate" id='deathDate' bind:value={deathDate} />
              
              <label for="lifeSpan" class='sm:text-end'>Life Span:</label>
              <textarea id='lifeSpan' name='lifeSpan' rows={20} cols={50} required bind:value={author.lifeSpan} />
            </div>
            <div class='text-center'>
              <button type="submit" 
                class='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-gray-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200'>
                Update
              </button>
            </div>
          </form>
      {/if}
			</div>
		</div>
	</div>
</div>
