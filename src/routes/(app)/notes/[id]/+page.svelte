<script lang="ts">
	type Props = {
		data: {
			id: string;
		};
	};

	let { data } = $$props as Props;
	let noteId = data.id;
</script>

<div class="container">
	<h1>Note Id: {noteId}</h1>
</div>
