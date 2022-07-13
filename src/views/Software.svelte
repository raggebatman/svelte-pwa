<script lang="ts">
	import axios from "axios";
	import base64 from "base-64";
	import { each } from "svelte/internal";

	let content = [];

	async function fetch_and_decode_content() {
		let content_encoded = await axios.get(
			"https://git.lgjt.xyz/api/v1/repos/Johannes/lgjt-xyz-software-metadata/contents/software.json"
		);
		let content_decoded = JSON.parse(
			base64.decode(content_encoded.data.content)
		);
		content = content_decoded.software;
	}
</script>

<main>
	<div class="paper">
		<h1>Software</h1>
		<p>
			This page contains all software that i have made that is avalible for
			download.
		</p>
		<div class="list">
			<div class="list-item-header">
				<span> Software name </span>
				<span> Software Description </span>
				<span> Software download </span>
			</div>
			{#await fetch_and_decode_content()}
				<p>loading ...</p>
			{:then}
				{#if content.length > 1}
					{#each content as item}
						<div class="list-item">
							<span class="name">
								{item.name}
							</span>
							<span class="desc">
								{item.desc}
							</span>
							<a class="url" href={item.download_url}>download</a>
						</div>
					{/each}
				{:else}
					<p>No software is avalible yet</p>
				{/if}
			{/await}
		</div>
	</div>
</main>

<style>
	.paper {
		width: 55vw;
		margin-inline: auto;
	}

	.list {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}

	.list-item-header {
		border-bottom: 1px solid var(--text-color);
		display: grid;
		grid-template-columns: 0.5fr 1.5fr 0.5fr;
		font-weight: 800;
	}
	.list-item {
		display: grid;
		justify-content: center;
		grid-template-columns: 0.5fr 1.5fr 0.5fr;
	}

	.list-item .url {
		text-align: center;
	}

	@media screen and (max-width: 1000px) {
		.paper {
			width: 90vw;
		}

		.list-item, .list-item-header {
			font-size: .8em;
		}
	}
</style>
