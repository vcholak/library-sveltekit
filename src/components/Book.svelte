<script lang="ts">
  import type { Book } from '@prisma/client';
  export let books: Book[];
  export let selectedId: string = '';
</script>

<div>
<label class='sm:text-end'>Book:
  <select name='bookId' required bind:value={selectedId}>
    <option value="">----- select -----</option>
    {#each books as book}
      <option value={book.id}>
        {book.title}
      </option>
    {/each}
  </select>
</label>
</div>