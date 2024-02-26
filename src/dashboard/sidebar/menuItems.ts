import AuthorsIcon from './icons/AuthorsIcon.svelte';
import InventoryIcon from './icons/InventoryIcon.svelte';
import BookCopyIcon from './icons/BookCopyIcon.svelte';
import GenresIcon from './icons/GenresIcon.svelte';
import BookIcon from './icons/BookIcon.svelte';

export const menuItems = [
	{
		section: 'ITEMS',
		content: [
			{
				title: 'Inventory',
				icon: InventoryIcon,
				link: '/'
			},
			{
				title: 'Authors',
				icon: AuthorsIcon,
				link: '/admin/authors'
			},
			{
				title: 'Genres',
				icon: GenresIcon,
				link: '/admin/genres'
			},
			{
				title: 'Books',
				icon: BookIcon,
				link: '/admin/books'
			},
			{
				title: 'Book Copies',
				icon: BookCopyIcon,
				link: '/admin/copies'
			}
		]
	}
];
