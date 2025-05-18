<script lang="ts">
	import { IconSun, IconMoon } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let currentTheme = $state('dark');

	function changeTheme() {
		if (currentTheme === 'dark') {
			currentTheme = 'light';
		} else {
			currentTheme = 'dark';
		}
		const body = document.body;
		body.setAttribute('data-bs-theme', currentTheme);
	}

	onMount(() => {
		const body = document.body;
		const bodyTheme = body.getAttribute('data-bs-theme');
		if (bodyTheme) {
			currentTheme = bodyTheme;
		} else {
			currentTheme = 'dark';
		}
	});
</script>

<button onclick={changeTheme} class="btn btn-icon border border-0 ms-2">
	{#if currentTheme === 'dark'}
		<IconSun />
	{:else}
		<IconMoon />
	{/if}
</button>
