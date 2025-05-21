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

<h1>Welcome back, {user.name.split(' ')[0]}!</h1>
