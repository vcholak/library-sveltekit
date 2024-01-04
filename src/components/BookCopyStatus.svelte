<script lang="ts">
	import { getBookCopyStatuses } from "$lib/database/types";
  export let selectedId: number = 0;
  const statuses = getBookCopyStatuses();
</script>

<div>
<label class='sm:text-end'>Status:
  <select name='status' required bind:value={selectedId}>
    <option>----- select -----</option>
    {#each statuses as status, index}
      <option value={index}>
        {status}
      </option>
    {/each}
  </select>
</label>
</div>