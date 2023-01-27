<script context="module">
	export async function preload(page, session) {
		const { token } = session;

		if (token) {
			return {isLogin: true};
		}else{
			return {isLogin: false};
		}
	}
</script>

<script>
	import Nav from '../components/Nav.svelte';

	export let isLogin = false;
	export let segment;
</script>

<style>
	main{height: calc(100vh - 116px);}
</style>

<Nav {segment} {isLogin} />

<main>
	<slot></slot>
</main>
