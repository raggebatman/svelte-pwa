<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./views/Home.svelte";
	import Software from "./views/Software.svelte";
	import About from "./views/About.svelte";
	import Contact from "./views/Contact.svelte";
	import "./style/index.css"
	export let url = "";
</script>

<Router {url}>
	<nav class="nav">
		<Link to="/">Home</Link>
		<Link to="software">Software</Link>
		<Link to="about">About</Link>
		<Link to="contact">Contact</Link>
	</nav>
	<div>
		<Route path="/" component={Home} />
		<Route path="/software" component={Software} />
		<Route path="/contact" component={Contact} />
		<Route path="/about" component={About} />
	</div>
</Router>

<style>

</style>