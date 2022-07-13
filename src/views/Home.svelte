<main>
	<div class="wrapper">
		<div class="paper">
			<h1>Welcome to LGJT.XYZ</h1>
			<p>
				Welcome to lgjt.xyz, A page that contains software made by me Johannes,
				some information about me and contact information.
			</p>
		</div>

		<div class="paper">
			<h1>Feel free to follow me on my social medias</h1>
			<div class="social-media-list">
				<a href="https://twitter.com/JT030309" class="list-item"
					><i class="fa-brands fa-twitter" /></a
				>
				<a href="https://www.reddit.com/user/Krabban03" class="list-item"
					><i class="fa-brands fa-reddit" /></a
				>
				<a href="https://www.instagram.com/johannes.thoren/" class="list-item"
					><i class="fa-brands fa-instagram" /></a
				>
				<a href="https://github.com/JohannesThoren" class="list-item"
					><i class="fa-brands fa-github" /></a
				>
			</div>
		</div>
	</div>
</main>

<style>
	.wrapper {
		margin-top: 10rem;
	}

	.paper {
		text-align: center;
	}

	.social-media-list {
		margin-inline: auto;
		width: 40vw;
		display: flex;
		justify-content: space-evenly;
	}

	.social-media-list a:visited,
	.social-media-list a {
		color: var(--accent-1);
		font-size: 3em;
	}

	@media screen and (max-width: 1000px) {
		.wrapper {
			margin-top: 2rem;
		}

		.social-media-list {
			width: 100%;
		}
	}
</style>
