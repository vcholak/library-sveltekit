<script lang='ts'>
	import { getBookCopyStatuses } from '$lib/database/types';
	import { DateTime } from 'luxon';
  
  export let data;
  const statuses = getBookCopyStatuses();
  $: bookCopy = data.bookCopy;
  $: dueBack = bookCopy?.dueBack ? DateTime.fromJSDate(bookCopy.dueBack, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL) : null;
  $: book = bookCopy?.book;
  $: author = book?.author;
</script>

{#if bookCopy}
<div class="container mx-auto">
	<div class="py-8">
		<div class="flex flex-wrap flex-row mb-1 sm:mb-0 justify-between w-full">
			<h2 class="text-2xl leading-tight md:pr-0 text-white">Book Copy Details</h2>
			<div>
				<a href="/admin/copies/{bookCopy.id}/edit" class="px-4 py-2 text-base font-semibold rounded-lg bg-gray-600 text-white hover:bg-purple-700">Edit</a>
			</div>
		</div>
		<div class="py-4">
			<div class="max-w-full overflow-x-auto shadow rounded-lg">
				{#if bookCopy}
        <table class="w-full leading-normal bg-white text-sm">
          <tr>
            <td class="px-5 py-5 border-b border-gray-200">
              Title:
            </td>
            <td class="px-5 py-5 border-b border-gray-200">
              {book?.title}
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200">
              Author:
            </td>
            <td class="px-5 py-5 border-b border-gray-200">
              {author?.firstName} {author?.familyName}
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200">
              Imprint: 
            </td>
            <td class="px-5 py-5 border-b border-gray-200">
              {bookCopy.imprint}
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200">
              ISBN:
            </td>
            <td class="px-5 py-5 border-b border-gray-200">
              <span class='text-red-600'>TBD</span>
            </td>
          </tr>
          <tr>
            <td class="px-5 py-5 border-b border-gray-200">
              Status:
            </td>
            <td class="px-5 py-5 border-b border-gray-200">
              {statuses[bookCopy.status]}
            </td>
          </tr>
          {#if dueBack}
            <tr>
              <td class="px-5 py-5 border-b border-gray-200">
                Due Date:
              </td>
              <td class="px-5 py-5 border-b border-gray-200">
                {dueBack}
              </td>
            </tr>
          {/if}
        </table>
      {/if}
			</div>
		</div>
	</div>
</div>
{/if}