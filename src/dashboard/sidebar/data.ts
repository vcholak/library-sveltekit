import HomeIcon from './icons/HomeIcon.svelte';
import MediasIcon from './icons/MediasIcon.svelte';
import ContactIcon from './icons/ContactIcon.svelte';
import ServersIcon from './icons/ServersIcon.svelte';
import TerminalIcon from './icons/TerminalIcon.svelte';
import RecycleBinIcon from './icons/RecycleBin.svelte';
import DocumentationIcon from './icons/DocumentationIcon.svelte';

const loginUrl = import.meta.env.VITE_AWS_LOGIN_URL;

const signupUrl = import.meta.env.VITE_AWS_SIGNUP_URL

const resetPasswordUrl = import.meta.env.VITE_AWS_RESET_PASSWORD_URL;

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
				icon: DocumentationIcon,
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
	},
	{
		section: 'AUTHENTICATION',
		content: [
			{
				title: 'Sign In',
				icon: TerminalIcon,
				link: loginUrl
			},
			{
				title: 'Sign Up',
				icon: RecycleBinIcon,
				link: signupUrl
			},
			{
				title: 'Reset Password',
				icon: ServersIcon,
				link: resetPasswordUrl
			}
		]
	}
];
