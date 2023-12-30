<script lang="ts">
  import type { GenreType } from '$lib/database/types';
  export let genres: GenreType[];
</script>

<div>
<label class='sm:text-end'>Author:
  <select name='genreId' required>
    <option>----- select -----</option>
    {#each genres as genre}
      <option value={genre.id}>
        {genre.title}
      </option>
    {/each}
  </select>
</label>
</div>