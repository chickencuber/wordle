<script>
	const {
		class: classList = "",
		children,
		button = false,
		onclick = ()=>{},
	} = $props();
</script>
<style>
	span, button{
		border:none;
		font-family: Arial;
		display: inline-block;
		width: 75px;
		height: 75px;
		border-radius: 10px;
		background: #777777;
		font-size: 65px;
		text-align: center;
		margin-left: 5px;
		margin-top: 5px;
		-webkit-text-stroke: 1px black;
		color: #ffffff;
		font-weight: bold;
	}
	.exists {
		background: #e9e900;
	}
	.correct {
		background: #00cc00;
	}
	.used {
		background: #535353;
	}
	.sp {
		font-size: 30px;
	}
	button:hover{
		filter: brightness(120%);
	}
</style>
{#if !button}
	<span class={classList}>{@render children?.()}</span>
{:else}
	<button class={classList} onclick={() => onclick()}>{@render children?.()}</button>
{/if}
