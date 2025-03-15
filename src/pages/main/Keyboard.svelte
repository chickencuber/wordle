<script>
	import Tile from "../../Tile.svelte";
	const {
		letters
	} = $props();
	function getClass(letter) {
		if(letters[letter] === 0) return "";
		if(letters[letter] === 1) return "used";
		if(letters[letter] === 2) return "exists";
		if(letters[letter] === 3) return "correct";
	}
	function trigger(key) {
		const event = new KeyboardEvent('keydown', {
      key
    });
		document.dispatchEvent(event);
	}
	const a = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
	const b = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
	const c = ["Z", "X", "C", "V", "B", "N", "M"]
</script>
<style>
	.top {
		margin-top: 10px;
	}
	div {
		display: flex;
		align-items: center;
		justify-content:center;
	}
</style>
<div class="top">
	{#each a as i}
		<Tile class={getClass(i)} onclick={() => trigger(i)} button>{i}</Tile>
	{/each}
</div>
<div>
	{#each b as i}
		<Tile class={getClass(i)} onclick={() => trigger(i)} button>{i}</Tile>
	{/each}
</div>
<div>
	<Tile button onclick={()=>trigger("Enter")} class="sp">↵</Tile>
	{#each c as i}
		<Tile class={getClass(i)} onclick={() => trigger(i)} button>{i}</Tile>
	{/each}
	<Tile button class="sp" onclick={()=>trigger("Backspace")}>⌫</Tile>
</div>
