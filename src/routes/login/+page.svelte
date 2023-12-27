<script>
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.png';
	import Google from '$lib/components/icon/Google.svelte';
	import Github from '$lib/components/icon/Github.svelte';

	let email = '';

	const handleEmailSignIn = () => {
		signIn('email', { email, callbackUrl: '/' });
	};

	const handleGoogleSignIn = () => {
		signIn('google', { callbackUrl: '/' });
	};

	const handleGithubSignIn = () => {
		signIn('github', { callbackUrl: '/' });
	};
</script>

<div class="container">
	{#if !$page.data.session}
		<img src={logo} alt="auth.js logo" class="logo" />
		<h1 class="welcome">Welcome</h1>
		<p class="text">Log in to continue to Library</p>

		<form on:submit={handleEmailSignIn}>
			<input type="email" placeholder="example@gmail.com" bind:value={email} />
			<button>Continue</button>
		</form>

		<div class="divider-container">
			<div />
			<span>OR</span>
			<div />
		</div>

		<button on:click={handleGoogleSignIn}>
			<Google /> Continue with Google
		</button>
		
		<button on:click={handleGithubSignIn}>
			<Github /> Continue with Github
		</button>
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

	.welcome {
		margin-top: 1.25rem;
		font-size: 1.5rem;
		line-height: 2rem;
		text-align: center;
	}

	.text {
		margin-top: 1rem;
		text-align: center;
	}

	form {
		margin-top: 1rem;
	}

	input {
		box-sizing: border-box;
		width: 100%;
		padding: 0.75rem;
		border: 1px solid seagreen;
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

	form button {
		margin-top: 1rem;
		background-color: seagreen;
		color: white;
	}

	.divider-container {
		display: flex;
		margin-top: 1.5rem;
		gap: 0.5rem;
		align-items: center;
	}

	.divider-container div {
		flex: 1 1 0%;
		height: 1px;
		background-color: black;
	}

	.divider-container span {
		font-size: 0.75rem;
		line-height: 1rem;
	}
</style>
