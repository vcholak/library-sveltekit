<script lang="ts">
	import { getBookCopyStatuses } from "$lib/database/types";

  const statuses = getBookCopyStatuses();
</script>

<div>
<label class='sm:text-end'>Status:
  <select name='status' required>
    <option>----- select -----</option>
    {#each statuses as status, index}
      <option value={index}>
        {status}
      </option>
    {/each}
  </select>
</label>
</div>