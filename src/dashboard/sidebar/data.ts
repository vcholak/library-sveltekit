import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';
import BarsIcon from './icons/BarsIcon.svelte';

export const data = [
	{
		section: 'ENTRIES',
		content: [
			{
				title: 'Dashboard',
				icon: MediasIcon,
				link: '/'
			},
			{
				title: 'Authors',
				icon: HomeIcon,
				link: '/admin/medias'
			},
			{
				title: 'Genres',
				icon: BarsIcon,
				link: '/admin/contacts'
			},
			{
				title: 'Books',
				icon: DocumentationIcon,
				link: '/admin/contacts'
			},
			{
				title: 'Book Copies',
				icon: DocumentationIcon,
				link: '/admin/contacts'
			}
		]
	}
];
