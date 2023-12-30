import { SvelteKitAuth } from '@auth/sveltekit';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GoogleProvider from '@auth/core/providers/google';
import GitHub from "@auth/sveltekit/providers/github"
import EmailProvider from '@auth/core/providers/email';
import type { Handle } from '@sveltejs/kit';

import {
	AUTH_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	NODE_ENV,
	SMTP_HOST,
	SMTP_PORT,
	SMTP_USER,
	SMTP_PASSWORD,
	EMAIL_FROM
} from '$env/static/private';

import clientPromise from '$lib/database/clientPromise';

export const handle = SvelteKitAuth({
	// debug: !(NODE_ENV === 'production'),

	secret: AUTH_SECRET,

	providers: [
		EmailProvider({
			server: {
				host: SMTP_HOST,
				port: Number(SMTP_PORT),
				auth: {
					user: SMTP_USER,
					pass: SMTP_PASSWORD
				}
			},
			from: EMAIL_FROM
		}),
		GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
		GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })
	],
	
	// Using an adapter means that user sessions will be saved in a database
	adapter: MongoDBAdapter(clientPromise, { databaseName: 'library' }),
	
	session: {
		strategy: 'database'
	},

	callbacks: {
		async session({ session, user }) {
			return session;
		}
	},
	
	pages: {
	 	signIn: '/login',
	 	signOut: '/logout'
	}
}) satisfies Handle;
