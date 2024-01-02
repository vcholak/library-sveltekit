<script>
  // @ts-ignore
  export let items; // all items
  export let trimmedItems; // items on the current page
  const perPage = 10; // items per page

  $: totalRows = items.length;
  $: currentPage = 0;
  $: totalPages = Math.ceil(totalRows / perPage);
  $: start =  currentPage * perPage;
  $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1;
  // @ts-ignore
  $: trimmedItems = items.slice(start, end + 1);

  // @ts-ignore
  $: totalRows, currentPage = 0;
  // @ts-ignore
  $: currentPage, start, end;

  let active = 'first'; // active button

  function firstPage() {
    active = 'first';
    currentPage = 0;
  }

  function previousPage() {
    active = 'previous';
    currentPage -= 1;
  }

  function nextPage() {
    active = 'next';
    currentPage += 1;
  }

  function lastPage() {
    active = 'last';
    currentPage = totalPages -1;
  }
</script>

{#if totalRows && totalRows > perPage}
<div class="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
  <div class="flex items-center">
      <button on:click={firstPage}
        type="button"
        disabled={currentPage === 0 ? true : false}
        class="px-4 py-2 border text-base rounded-l-xl {active==='first' ? 'text-indigo-500' : 'text-gray-600'}  bg-white hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
      </button>
      <button on:click={previousPage}
        type="button"
        disabled={currentPage === 0 ? true : false}
        class="px-4 py-2 border-t border-b text-base {active==='previous' ? 'text-indigo-500' : 'text-gray-600'} bg-white hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button on:click={nextPage}
        type="button"
        disabled={currentPage === totalPages - 1 ? true : false}
        class="px-4 py-2 border text-base {active==='next' ? 'text-indigo-500' : 'text-gray-600'} bg-white hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button on:click={lastPage}
        type="button"
        disabled={currentPage === totalPages - 1 ? true : false}
        class="px-4 py-2 border-t border-b border-r text-base  rounded-r-xl {active==='last' ? 'text-indigo-500' : 'text-gray-600'} bg-white hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
  </div>
</div>
{/if}