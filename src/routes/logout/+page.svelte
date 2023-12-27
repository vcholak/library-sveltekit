<script>
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';

	const handleSignOut = () => {
		signOut({ callbackUrl: '/' });
	};
</script>

<div class="container">

	{#if $page.data.session}
		<div class="signout-container">
			<img src={logo} alt="auth.js logo" class="logo" />

			<button on:click={handleSignOut}>Sign out</button>
		</div>
	{/if}
</div>

<style>
	.container {
		background-color: aquamarine;
		padding: 1rem;
		margin: 0 auto;
		border-radius: 0.375rem;
		width: 22rem;
		height: 30rem;
		box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.25);
	}

	.logo {
		display: block;
		width: 3.5rem;
		margin: 0 auto;
	}

	button {
		background: none;
		margin-top: 1.5rem;
		display: flex;
		width: 100%;
		padding: 0.75rem;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		border: 1px solid seagreen;
		border-radius: 0.125rem;
		transition-timing-function: all 225ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.signout-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	.signout-container img {
		flex: 1;
		object-fit: contain;
		width: 75%;
		justify-self: center;
	}
</style>
