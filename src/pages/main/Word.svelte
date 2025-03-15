<script>
import {getContext} from "svelte";
import Tile from "../../Tile.svelte";
let {
    onwin=()=>{},
        onlose=()=>{},
        self = 0,
        children,	
        num=$bindable(0),
} = $props();
const alert = getContext("alert");
const text = $state([[' ', ''], [' ', ''], [' ', ''], [' ', ''], [' ', '']])
let current = 0;
let words = getContext("words")();
let open = getContext("open")
function keypress(e) {
    if(open()) return;
    if(self !== num) return;
    const char = e.key
        if(char.length === 1) {
            if(char === ' ') return;
            if(!(/[A-Z]/).test(char.toUpperCase())) return;
            if(current === 5) return;
            text[current][0] = char.toUpperCase()
                current++;
        } else if(char.toLowerCase() === "backspace") {
            if(current <= 0) return;
            current--;
            text[current][0] = ' ';
        } else if(char.toLowerCase() === "enter") {
            if(current !== 5) {
                if(current !== 0) alert("word not long enough")
                    return;
            }
            let inp = text.map(v => v[0]).join("").toLowerCase();
            if(!words.includes(inp)) {
                alert("not a valid word");	
                return;
            }	
            const word = obj.textContent.toUpperCase().split("");
            let m = 0;
            let set = [];
            for(let i = 0; i < 5; i++) {
                if(word[i-m] === text[i][0]) {
                    word.splice(i-m, 1);
                    text[i][1] = "correct";
                    set.push([text[i][0], 3]);
                    m++;
                } 
            }
            for(let i = 0; i < 5; i++) {
                if(text[i][1] === "correct") continue;
                if(word.includes(text[i][0])) {
                    let e = word.indexOf(text[i][0]);
                    word.splice(e, 1);
                    text[i][1] = "exists";
                    set.push([text[i][0], 2]);
                } else {
                    text[i][1] = "used";
                    set.push([text[i][0], 1]);
                }
            }

            num++;
            if(m === 5) {
                onwin(set);		
            } else {
                onlose(set);
            }
        }
}
let obj = $state();
</script>
<svelte:document onkeydown={keypress}/>
<div bind:this={obj} hidden>{@render children?.()}</div>
<style>
div:not([hidden]) {
display: flex;
         justify-content: center;
         align-items: center;
}

</style>
<div>
<Tile class={text[0][1]}>{text[0][0]}</Tile>
<Tile class={text[1][1]}>{text[1][0]}</Tile>
<Tile class={text[2][1]}>{text[2][0]}</Tile>
<Tile class={text[3][1]}>{text[3][0]}</Tile>
<Tile class={text[4][1]}>{text[4][0]}</Tile>
</div>
