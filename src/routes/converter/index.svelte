<script context="module">
	export function preload() {
		return this.fetch(`converter.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Converter | ProfitFLow</title>
</svelte:head>

<div class="home-page">
	<div class="search-bar container">
		<div>
			<label>
				<img src="/user-search.svg" alt="search user svg" id="svg-user-search">
			</label>

			<input class="form-control" type="text">
		</div>
	</div>

	<div class="container page">
		<div class="row">
			<div class="col-md-12 converter-list">
				<table class="table">
					<thead>
						<tr>
							<th>Name</th>
							<th class="center">Status</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{#each posts as item}
							<tr>
								<td><a href="/converter/{item.id}" target="_blank">{item.title}</a></td>
								<td class="status center"><i class="fas fa-circle"></i></td>
								<td class="center"><a href="/tickets/{item.id}">View Tickets</a></td>
								<td class="center"><a href="/history/{item.id}">View History</a></td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
	#svg-user-search{
		height: 28px;
		margin-right: 10px;
	}

	div.home-page>div.container{
		margin-top: 40px;
	}

	div.search-bar{
		padding: 20px 0 10px 0;
		border-bottom: 1px #e5e5e5 solid;
	}
	div.search-bar>div{display: flex;justify-content: flex-end;}
	div.search-bar label{
		margin-bottom: 0;
		display: flex;
		align-items: center;
	}
	div.search-bar input{width: 300px;}

	/**/
	.converter-list .item>.title>a{color: #333;}
	td.status>i{color: #17d632;}
	th.center, td.center{text-align: center;}
</style>
