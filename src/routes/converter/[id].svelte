<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`converter/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	.converter-page{padding: 40px 100px;}
	.converter-page .photo img{width: 100%;}
	.converter-page .description{padding-left: 40px;}
</style>

<svelte:head>
	<title>{post.title} | Converter | ProfitFlow</title>
</svelte:head>

<div class="container converter-page">
	<div class="row">
		<div class="photo col-xs-4">
			<img src="/converter.png" alt="Converter Image">
		</div>
		<div class="description col-xs-8">
			<h1>{post.title}</h1>

			<div>
				{@html post.html}
			</div>
		</div>
	</div>
</div>
