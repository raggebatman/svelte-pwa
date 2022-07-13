<main>
	<div class="paper">
		<h1>About</h1>
		<p>
			My name is Johannes Thorén. I am a Hobbyist Web- and Software develovper,
			I've been programming since I was about 12 years old and I have been
			developing in all sorts of laguages. I started out writing simple scripts
			that prompted you to insert som text or number and did thing accordingly.
			Today I mostly develop web stuff and occasionally use Rust for software
			development.
		</p>

		<h2>My Goals</h2>
		<p>
			This goals is very important for me, my career and my filosophy. I use the
			as guidelines every time I develop software for other people or companies.
			For more information or if you have any questions feel free to contact me
			via the methods listed under "Contact".
		</p>
		<div class="goals">
			<div>
				<h3>Ease of use</h3>
				<p>
					When I develop software I try to make it as access able for everyone
					using it. The key to that is to listen to the people who is using it
					and trying to come up with ideas that fit thiere requests
				</p>
			</div>
			<div>
				<h3>Uderstandable</h3>
				<p>
					Other developers should be able to fix bugs and implement custom
					features, The key to that is understandable code and descriptive
					comments where comments are neccesary.
				</p>
			</div>
			<div>
				<h3>Open Source Software</h3>
				<p>
					Open Source Software is somthing I think is good for all developers
					and companies, it provides a simple way for companies to cooperate and
					improve the software they are using. That is just one of many other
					reasons I try to keep everything I develop Open Source.
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	.goals {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.goals div {
		width: 15vw;
	}

	.goals div p {
		text-align: center;
	}

	h1,
	h2,
	h3 {
		text-align: center;
	}

	.paper {
		margin-top: 10rem;
		width: 55vw;
		margin-inline: auto;
	}

	@media screen and (max-width: 1000px) {
		.paper {
			margin-top: 2rem;
            width: 90vw;
		}

        .goals div {width: 100%}
	}
</style>
