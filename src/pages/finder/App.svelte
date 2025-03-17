<script>
import Word from "./Word.svelte"
let url = "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";
let possible = $state([]);
let current = $state("");
let correct = $state("");
let exists = $state("");
let not = $state("");
let possibles = $state("")
fetch(url).then(v => {
    v.text().then(v => {
        possible.push(...v.split("\n"));
    })
});
function wordincludesany(str, arr) {
    const s = str.split("");
    for(const i of arr) {
        if(s.includes(i)) return true;
    }
    return false;
}
function wordincludesall(str, arr) {
    const s = str.split("");
    for(const i of arr) {
        if(!s.includes(i)) return false;
    }
    return true;
}
$effect(() => {
    not = not.toUpperCase().split("").filter(v => /[A-Z]/.test(v)).join("");
    const pos = [];
    for(const v of correct.split("")) {
       if(v === " ") {
           pos.push(false);
           continue;
       }
       pos.push(v);
    }
    const includes = [];
    for(const v of exists.split("")) {
        if(v !== " ") {
            includes.push(v);
        }
    }
    const excludes = [];
    for(const v of not.split("")) {
        excludes.push(v);
    }
    let str = "";
    f: for(const w of possible) {
        const n = w.toUpperCase();
        if(wordincludesany(n, excludes)) continue;
        if(!wordincludesall(n, includes)) continue;
        for(let i = 0; i < 5; i++) {
            if(pos[i] === false) continue;
            if(pos[i] !== n[i]) {
                continue f;
            }
        }
        str += n + "\n";
    }
    possibles = str; 
});
</script>

<style>
:global(html, body) {
    background: #302c2c;
}
div:not(#top){
display: flex;
         justify-content: right;
         align-items: center;
         margin-right: 10px;
         margin-top: 10px;
}
input{
    color: #ffffff;
    background: #777777;
    border: none;
    font-family: Arial;
    font-size: 35px;
}
#top {
    position: absolute;
    left: 20px;
    white-space: pre-wrap;
    color: white;
    font-family: Arial;
    font-size: 30px;
    width: 400px;
    height: 99vh;
    overflow: scroll;
}
</style>
<div id="top">
    {possibles}
</div>
<div>
<Word type="correct" bind:selected={current} bind:text={correct}/>
</div>
<div>
<Word type="exists" bind:selected={current} bind:text={exists}/>
</div>
<div>
<input type="text" bind:value={not} onfocus={() => {current = "0"}}/>
</div>
