<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<main>
	<form class="card" method="POST" action="?/login" use:enhance>
		<div class="card-body d-flex flex-column gap-3">
			<div class="form-group">
				<label class="form-label" for="email">Email</label>
				<input type="text" id="email" class="form-control" name="email" />
				<div class="invalid-feedback">That's no good.</div>
			</div>
			<div class="form-group">
				<label class="form-label" for="password">Password</label>
				<input type="password" id="password" class="form-control" name="password" />
				<div class="invalid-feedback">Nope.</div>
			</div>
			<button type="submit" class="btn btn-outline-muted w-100">Go on then</button>
		</div>
	</form>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.card {
		width: 30rem;
		margin: 0 auto;
	}
</style>
