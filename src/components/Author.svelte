<script lang="ts">
  import type { Author } from '@prisma/client';
  export let authors: Author[];
  export let selectedId: string = '';
</script>

<div>
<label class='sm:text-end'>Author:
  <select name='authorId' required bind:value={selectedId}>
    <option value="">----- select -----</option>
    {#each authors as author}
      <option value={author.id}>
        {author.firstName} {author.familyName}
      </option>
    {/each}
  </select>
</label>
</div>