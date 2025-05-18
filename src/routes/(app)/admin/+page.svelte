<script lang="ts">
	import type { AuthModel } from 'pocketbase';

	type Props = {
		data: {
			user: AuthModel;
		};
	};

	let { data } = $props();
	let { user } = data;
	$inspect(user);
</script>

<div class="container">
	<h1>Welcome back, {user.name.split(' ')[0]}!</h1>
</div>
