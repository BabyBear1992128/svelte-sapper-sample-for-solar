<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`tickets/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export const post = null;
</script>

<style>
	.history-page>.title{padding: 40px 0;}
</style>

<svelte:head>
	<title>Tickets | ProfitFlow</title>
</svelte:head>

<div class="container history-page">
	<div class="title">
		<h2>Tickets For Converter 1</h2>
	</div>

	<div class="container history-list">
		<table class="table">
			<thead>
			<tr>
				<th></th>
				<th>Date</th>
				<th>Problem</th>
				<th>Level</th>
			</tr>
			</thead>

			<tbody>
			<tr>
				<td>Ticket209</td>
				<td>01-12-2022</td>
				<td>Lorem imsum</td>
				<td>Warning</td>
			</tr>
			<tr>
				<td>Ticket209</td>
				<td>01-12-2022</td>
				<td>Lorem imsum</td>
				<td>Information</td>
			</tr>
			<tr>
				<td>Ticket209</td>
				<td>01-12-2022</td>
				<td>Lorem imsum</td>
				<td>Information</td>
			</tr>
			</tbody>
		</table>
	</div>
</div>
