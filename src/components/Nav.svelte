<script>
	export let segment;
	export let isLogin;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		height: 60px;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	nav a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		color: #333;
	}

	nav a:hover{
		color: #5cb85c;
	}

	nav div.container-fluid{
		display: flex;
		justify-content: space-between;
	}
	nav div.container-fluid div.logo{display: flex;align-items: center;}
	nav div.container-fluid div.logo>a{margin: 0;padding: 0;}
</style>

<nav class="navbar navbar-light">
	<div class="container-fluid">
		<div class="logo">
			<a class="navbar-brand" href="/">ProfitFlow</a>
		</div>

		<ul class="nav navbar-nav pull-xs-right">
			<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
			<li><a aria-current="{segment === 'converter' ? 'page' : undefined}" href="/converter">converter</a></li>

			{#if isLogin}
				<li><a rel=prefetch aria-current="{segment === 'profile' ? 'page' : undefined}" href="/profile">profile</a></li>
				<li><a rel=prefetch aria-current="{segment === 'settings' ? 'page' : undefined}" href="/settings">settings</a></li>
				<li><a rel=prefetch href="/logout">logout</a></li>
			{:else }
				<li><a rel=prefetch aria-current="{segment === 'login' ? 'page' : undefined}" href="login">login</a></li>
			{/if}

		</ul>
	</div>

</nav>
