<script lang="ts">
  import type { AuthorType } from '$lib/database/types';
  export let authors: AuthorType[];
  export let selectedId: string = '';
</script>

<div>
<label class='sm:text-end'>Author:
  <select name='authorId' required bind:value={selectedId}>
    <option>----- select -----</option>
    {#each authors as author}
      <option value={author.id}>
        {author.firstName} {author.familyName}
      </option>
    {/each}
  </select>
</label>
</div>