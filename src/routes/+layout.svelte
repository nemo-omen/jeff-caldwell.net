<script lang="ts">
	import '@picocss/pico';
	import '$lib/css/main.css';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<header>
	<nav class="container">
		<ul>
			<li>
				<strong>Jeff Caldwell</strong>
			</li>
		</ul>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
<main>
	{@render children()}
</main>
<footer>
	<section class="container">
		<p>
			<a href="/privacy">Privacy Policy</a>
		</p>
	</section>
</footer>
