<script lang="ts">
	import '@tabler/core/dist/css/tabler.css';
	import '$lib/style/main.css';
	import { onMount, type Snippet } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	type Props = {
		children: Snippet;
	};

	let { children } = $props();
</script>

{@render children()}
