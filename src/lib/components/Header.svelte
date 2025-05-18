<script lang="ts">
	import ThemeButton from './ThemeButton.svelte';
</script>

<header class="navbar navbar-expand-lg d-flex align-items-center justify-content-between p-3">
	<div class="container">
		<a class="navbar-brand" href="/">JC</a>
		<div class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/">Home</a>
			</li>
			<!-- <li class="nav-item">
				<a class="nav-link" href="/about">About</a>
			</li> -->
			<li class="nav-item">
				<a class="nav-link" href="/español">Español</a>
			</li>
			<li class="nav-item">
				<ThemeButton />
			</li>
		</div>
	</div>
</header>
