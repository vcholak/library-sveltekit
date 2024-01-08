<script lang="ts">
  import type { Genre } from '@prisma/client';
  export let genres: Genre[];
  export let selectedId: string = '';
</script>

<div>
<label class='sm:text-end'>Genre:
  <select name='genreId' required bind:value={selectedId}>
    <option value=''>----- select -----</option>
    {#each genres as genre}
      <option value={genre.id}>
        {genre.title}
      </option>
    {/each}
  </select>
</label>
</div>