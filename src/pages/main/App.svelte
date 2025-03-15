<script>
	import Word from "./Word.svelte"
	import Keyboard from "./Keyboard.svelte"
	import {setContext} from "svelte"
	let current = $state(0);
	let dialog = $state();
	let message = $state("");
	let click = $state(() => {});
	let open = $state(false);
	setContext("open", () => open)
	function alert(text, next = () => {}) {
		message = text;
		dialog.showModal();
		open = true;
		setTimeout(() => {
			click = () => {
				dialog.close();
				open = false;
				next();
				click = () => {}
			}
		}, 100)
	}
	setContext("alert", alert);
	function random(arr) {
		const i = Math.floor(Math.random() * arr.length);
		return arr[i]
	}
	let letters = $state({
		A: 0, 
		B: 0, 
		C: 0, 
		D: 0,
		E: 0,
		F: 0,
		G: 0, 
		H: 0, 
		I: 0, 
		J: 0, 
		K: 0, 
		L: 0, 
		M: 0, 
		N: 0, 
		O: 0, 
		P: 0, 
		Q: 0, 
		R: 0, 
		S: 0, 
		T: 0, 
		U: 0, 
		V: 0, 
		W: 0, 
		X: 0, 
		Y: 0, 
		Z: 0,
	})	
	function reset() {
		r = {};
		current = 0;
		word = random(possible);
		for(const letter of Object.keys(letters)) {
			letters[letter] = 0;
		}
	}
	function setKeys(keys) {
		for(const key of keys) {
			if(letters[key[0]] < key[1]) {
				letters[key[0]] = key[1];
			}
		}
	}
	function win(keys) {
		setKeys(keys);
		alert("you win", reset);
	}
	function lose(keys) {
		setKeys(keys)
		if(current===6) {
			alert(`you lose, the word was ${word}`, reset);
		}	
	}
	let url = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words"
	let possible = $state([])
	setContext("words", () => possible)
	fetch(url).then(v => {
		v.text().then(v => {
			possible.push(...v.split("\n"));
			word=random(possible);
			hidden = false;
		})
	})
	let word = $state("")
	let hidden = $state(true);
	let r = $state({});
</script>
<style>
	:global(html, body) {
		background: #302c2c;
	}
	dialog {
		background: #302c2c;
		border-color: #000000;
		border-width: 1px;
		border-radius: 10px;
	}
	dialog>div, dialog>h2 {
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content:center;
	}
	dialog button {
		background: #777777;
		color: #ffffff;
		border-radius: 5px;
		border: none;
	}
	dialog button:hover {
		filter: brightness(120%);
	}
    .bottom {
        position: absolute;
        width: 99vw;
        bottom: 10px;
    }
</style>
<dialog bind:this={dialog}>
	<h2>{message}</h2>
	<div>
		<button onclick={click}>Ok</button>
	</div>
</dialog>
<div {hidden}>
	{#key r}
		<Word bind:num={current} self={0} onwin={win} onlose={lose}>{word}</Word>
		<Word bind:num={current} self={1} onwin={win} onlose={lose}>{word}</Word>
		<Word bind:num={current} self={2} onwin={win} onlose={lose}>{word}</Word>
		<Word bind:num={current} self={3} onwin={win} onlose={lose}>{word}</Word>
		<Word bind:num={current} self={4} onwin={win} onlose={lose}>{word}</Word>
		<Word bind:num={current} self={5} onwin={win} onlose={lose}>{word}</Word>
	{/key}
    <div class="bottom">
	    <Keyboard {letters}/>
    </div>
</div>
