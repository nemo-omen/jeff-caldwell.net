<script lang="ts">
	import '@picocss/pico';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<header></header>
<main>
	{@render children()}
</main>
<footer></footer>
