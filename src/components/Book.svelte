<script lang="ts">
  import type { BookType } from '$lib/database/types';
  export let books: BookType[];
</script>

<div>
<label class='sm:text-end'>Book:
  <select name='bookId' required>
    <option>----- select -----</option>
    {#each books as book}
      <option value={book.id}>
        {book.title}
      </option>
    {/each}
  </select>
</label>
</div>