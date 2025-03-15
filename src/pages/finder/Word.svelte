<script>
import Tile from "../../Tile.svelte"
let {
    type,
        selected = $bindable(""),
        text = $bindable(""),
} = $props();
const txt = $state([" ", " ", " ", " ", " "]);
let current = $state(0);
const id = crypto.randomUUID();
function set(c) {
    selected = id; 
    current = c;
}
function keypress({key}) {
    function r() {
        if(id !== selected) return;
        const char = key.toUpperCase();
        if(char.length === 1) {
            if(!/[A-Z]/.test(char)) return;
            if(current === 5) return;
            txt[current] = char;
            current++;
        } else if(char === "BACKSPACE") {
            txt[current] = " ";
            if(current === 0) return;
            current--;
        }
    }
    r();
    text = txt.join("");
}
</script>

<svelte:document onkeydown={keypress}/>

<style>
div{
display: flex;
         justify-content: center;
         align-items: center;
}
</style>

<div>
<Tile class={txt[0] !== " "? type: ""} button onclick={() => set(0)}>{txt[0]}</Tile>
<Tile class={txt[1] !== " "? type: ""} button onclick={() => set(1)}>{txt[1]}</Tile>
<Tile class={txt[2] !== " "? type: ""} button onclick={() => set(2)}>{txt[2]}</Tile>
<Tile class={txt[3] !== " "? type: ""} button onclick={() => set(3)}>{txt[3]}</Tile>
<Tile class={txt[4] !== " "? type: ""} button onclick={() => set(4)}>{txt[4]}</Tile>
</div>
