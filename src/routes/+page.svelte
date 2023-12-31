<script lang="ts">
	import Content from '../components/Content.svelte';
  import type { HomeDataType } from '$lib/database/types';
  export let data: HomeDataType;
</script>

<svelte:head>
  <title>Library</title>
</svelte:head>

<Content title="Home" {data}/>
