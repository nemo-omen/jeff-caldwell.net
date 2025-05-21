<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header />

<div class="container">
	{@render children()}

	<aside class="sidebar border-end border-secondary-subtle">
		<!-- Sidebar content goes here -->
		<p>Sidebar</p>
	</aside>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		display: grid;
		gap: 2rem;
		height: 100vh;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header'
			'container'
			'footer';
	}

	:global(header) {
		grid-area: header;
	}
	:global(footer) {
		grid-area: footer;
	}

	:global(.container) {
		grid-area: container;
		display: grid;
		gap: 2rem;
		grid-template-columns: 13rem 1fr;
		grid-template-areas: 'sidebar main';
	}
	:global(main) {
		grid-area: main;
	}
	:global(.sidebar) {
		grid-area: sidebar;
	}
</style>
