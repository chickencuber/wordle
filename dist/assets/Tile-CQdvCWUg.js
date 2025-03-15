(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const s of u.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();const Ft=!1;var Jt=Array.isArray,Ne=Array.prototype.indexOf,Oe=Array.from,Ie=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,Pe=Object.prototype,Se=Array.prototype,Ce=Object.getPrototypeOf;const Tt=()=>{};function Le(t){for(var e=0;e<t.length;e++)t[e]()}const P=2,Qt=4,pt=8,It=16,M=32,X=64,it=128,A=256,st=512,x=1024,q=2048,J=4096,z=8192,gt=16384,Re=32768,wt=65536,De=1<<19,$t=1<<20,lt=Symbol("$state"),ke=Symbol("legacy props");function te(t){return t===this.v}function Fe(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ur(t,e){return t!==e}function Pt(t){return!Fe(t,this.v)}function Me(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function qe(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Be(t){throw new Error("https://svelte.dev/e/effect_orphan")}function je(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ve(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function He(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ue(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ye(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Ke(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let We=!1;const Yr=1,Kr=2,Wr=4,Gr=8,Zr=16,Ge=1,Ze=4,ze=8,Xe=16,Je=1,Qe=2,y=Symbol();function $e(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let g=null;function Mt(t){g=t}function zr(t){return le().get(t)}function Xr(t,e){return le().set(t,e),e}function ee(t,e=!1,r){var n=g={p:g,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};ce(()=>{n.d=!0})}function re(t){const e=g;if(e!==null){const s=e.e;if(s!==null){var r=h,n=d;e.e=null;try{for(var l=0;l<s.length;l++){var u=s[l];H(u.effect),V(u.reaction),_e(u.fn)}}finally{H(r),V(n)}}g=e.p,e.m=!0}return{}}function ne(){return!0}function le(t){return g===null&&$e(),g.c??(g.c=new Map(tr(g)||void 0))}function tr(t){let e=t.p;for(;e!==null;){const r=e.c;if(r!==null)return r;e=e.p}return null}const tt=new Map;function C(t,e){var r={f:0,v:t,reactions:null,equals:te,rv:0,wv:0};return r}function Jr(t){return rr(C(t))}function er(t,e=!1){const r=C(t);return e||(r.equals=Pt),r}function rr(t){return d!==null&&!O&&(d.f&P)!==0&&(R===null?pr([t]):R.push(t)),t}function L(t,e){return d!==null&&!O&&ne()&&(d.f&(P|It))!==0&&(R===null||!R.includes(t))&&Ke(),nr(t,e)}function nr(t,e){if(!t.equals(e)){var r=t.v;et?tt.set(t,e):tt.set(t,r),t.v=e,t.wv=me(),ue(t,q),h!==null&&(h.f&x)!==0&&(h.f&(M|X))===0&&(F===null?gr([t]):F.push(t))}return e}function Qr(t,e=1){var r=I(t),n=e===1?r++:r--;return L(t,r),n}function ue(t,e){var r=t.reactions;if(r!==null)for(var n=r.length,l=0;l<n;l++){var u=r[l],s=u.f;(s&q)===0&&(D(u,e),(s&(x|A))!==0&&((s&P)!==0?ue(u,J):Et(u)))}}function G(t,e=null,r){if(typeof t!="object"||t===null||lt in t)return t;const n=Ce(t);if(n!==Pe&&n!==Se)return t;var l=new Map,u=Jt(t),s=C(0);u&&l.set("length",C(t.length));var v;return new Proxy(t,{defineProperty(c,a,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&He();var f=l.get(a);return f===void 0?(f=C(o.value),l.set(a,f)):L(f,G(o.value,v)),!0},deleteProperty(c,a){var o=l.get(a);if(o===void 0)a in c&&l.set(a,C(y));else{if(u&&typeof a=="string"){var f=l.get("length"),i=Number(a);Number.isInteger(i)&&i<f.v&&L(f,i)}L(o,y),qt(s)}return!0},get(c,a,o){var p;if(a===lt)return t;var f=l.get(a),i=a in c;if(f===void 0&&(!i||(p=Z(c,a))!=null&&p.writable)&&(f=C(G(i?c[a]:y,v)),l.set(a,f)),f!==void 0){var _=I(f);return _===y?void 0:_}return Reflect.get(c,a,o)},getOwnPropertyDescriptor(c,a){var o=Reflect.getOwnPropertyDescriptor(c,a);if(o&&"value"in o){var f=l.get(a);f&&(o.value=I(f))}else if(o===void 0){var i=l.get(a),_=i==null?void 0:i.v;if(i!==void 0&&_!==y)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return o},has(c,a){var _;if(a===lt)return!0;var o=l.get(a),f=o!==void 0&&o.v!==y||Reflect.has(c,a);if(o!==void 0||h!==null&&(!f||(_=Z(c,a))!=null&&_.writable)){o===void 0&&(o=C(f?G(c[a],v):y),l.set(a,o));var i=I(o);if(i===y)return!1}return f},set(c,a,o,f){var N;var i=l.get(a),_=a in c;if(u&&a==="length")for(var p=o;p<i.v;p+=1){var w=l.get(p+"");w!==void 0?L(w,y):p in c&&(w=C(y),l.set(p+"",w))}i===void 0?(!_||(N=Z(c,a))!=null&&N.writable)&&(i=C(void 0),L(i,G(o,v)),l.set(a,i)):(_=i.v!==y,L(i,G(o,v)));var T=Reflect.getOwnPropertyDescriptor(c,a);if(T!=null&&T.set&&T.set.call(f,o),!_){if(u&&typeof a=="string"){var Y=l.get("length"),S=Number(a);Number.isInteger(S)&&S>=Y.v&&L(Y,S+1)}qt(s)}return!0},ownKeys(c){I(s);var a=Reflect.ownKeys(c).filter(i=>{var _=l.get(i);return _===void 0||_.v!==y});for(var[o,f]of l)f.v!==y&&!(o in c)&&a.push(o);return a},setPrototypeOf(){Ue()}})}function qt(t,e=1){L(t,t.v+e)}var Bt,lr,ae,ie,se;function ur(){if(Bt===void 0){Bt=window,lr=document,ae=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype;ie=Z(e,"firstChild").get,se=Z(e,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function St(t=""){return document.createTextNode(t)}function ft(t){return ie.call(t)}function Ct(t){return se.call(t)}function jt(t,e){return ft(t)}function ar(t,e){{var r=ft(t);return r instanceof Comment&&r.data===""?Ct(r):r}}function $r(t,e=1,r=!1){let n=t;for(;e--;)n=Ct(n);return n}function tn(t){t.textContent=""}function Lt(t){var e=P|q,r=d!==null&&(d.f&P)!==0?d:null;return h===null||r!==null&&(r.f&A)!==0?e|=A:h.f|=$t,{ctx:g,deps:null,effects:null,equals:te,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??h}}function en(t){const e=Lt(t);return e.equals=Pt,e}function fe(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)j(e[r])}}function ir(t){for(var e=t.parent;e!==null;){if((e.f&P)===0)return e;e=e.parent}return null}function sr(t){var e,r=h;H(ir(t));try{fe(t),e=ye(t)}finally{H(r)}return e}function oe(t){var e=sr(t),r=(B||(t.f&A)!==0)&&t.deps!==null?J:x;D(t,r),t.equals(e)||(t.v=e,t.wv=me())}function fr(t){h===null&&d===null&&Be(),d!==null&&(d.f&A)!==0&&h===null&&qe(),et&&Me()}function or(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function Q(t,e,r,n=!0){var l=h,u={ctx:g,deps:null,nodes_start:null,nodes_end:null,f:t|q,first:null,fn:e,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{Dt(u),u.f|=Re}catch(c){throw j(u),c}else e!==null&&Et(u);var s=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&($t|it))===0;if(!s&&n&&(l!==null&&or(u,l),d!==null&&(d.f&P)!==0)){var v=d;(v.effects??(v.effects=[])).push(u)}return u}function ce(t){const e=Q(pt,null,!1);return D(e,x),e.teardown=t,e}function rn(t){fr();var e=h!==null&&(h.f&M)!==0&&g!==null&&!g.m;if(e){var r=g;(r.e??(r.e=[])).push({fn:t,effect:h,reaction:d})}else{var n=_e(t);return n}}function cr(t){const e=Q(X,t,!0);return(r={})=>new Promise(n=>{r.outro?At(e,()=>{j(e),n(void 0)}):(j(e),n(void 0))})}function _e(t){return Q(Qt,t,!1)}function nn(t){return Q(pt,t,!0)}function Vt(t,e=[],r=Lt){const n=e.map(r);return Rt(()=>t(...n.map(I)))}function Rt(t,e=0){return Q(pt|It|e,t,!0)}function ot(t,e=!0){return Q(pt|M,t,!0,e)}function ve(t){var e=t.teardown;if(e!==null){const r=et,n=d;Ut(!0),V(null);try{e.call(null)}finally{Ut(r),V(n)}}}function de(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;(r.f&X)!==0?r.parent=null:j(r,e),r=n}}function _r(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&M)===0&&j(e),e=r}}function j(t,e=!0){var r=!1;if((e||(t.f&De)!==0)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var u=n===l?null:Ct(n);n.remove(),n=u}r=!0}de(t,e&&!r),dt(t,0),D(t,gt);var s=t.transitions;if(s!==null)for(const c of s)c.stop();ve(t);var v=t.parent;v!==null&&v.first!==null&&he(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function he(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function At(t,e){var r=[];pe(t,r,!0),vr(r,()=>{j(t),e&&e()})}function vr(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function pe(t,e,r){if((t.f&z)===0){if(t.f^=z,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&e.push(s);for(var n=t.first;n!==null;){var l=n.next,u=(n.f&wt)!==0||(n.f&M)!==0;pe(n,e,u?r:!1),n=l}}}function Ht(t){ge(t,!0)}function ge(t,e){if((t.f&z)!==0){t.f^=z,(t.f&x)===0&&(t.f^=x),rt(t)&&(D(t,q),Et(t));for(var r=t.first;r!==null;){var n=r.next,l=(r.f&wt)!==0||(r.f&M)!==0;ge(r,l?e:!1),r=n}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||e)&&u.in()}}let ct=[];function dr(){var t=ct;ct=[],Le(t)}function hr(t){ct.length===0&&queueMicrotask(dr),ct.push(t)}let ut=!1,Nt=!1,_t=null,U=!1,et=!1;function Ut(t){et=t}let at=[];let d=null,O=!1;function V(t){d=t}let h=null;function H(t){h=t}let R=null;function pr(t){R=t}let m=null,b=0,F=null;function gr(t){F=t}let we=1,vt=0,B=!1;function me(){return++we}function rt(t){var f;var e=t.f;if((e&q)!==0)return!0;if((e&J)!==0){var r=t.deps,n=(e&A)!==0;if(r!==null){var l,u,s=(e&st)!==0,v=n&&h!==null&&!B,c=r.length;if(s||v){var a=t,o=a.parent;for(l=0;l<c;l++)u=r[l],(s||!((f=u==null?void 0:u.reactions)!=null&&f.includes(a)))&&(u.reactions??(u.reactions=[])).push(a);s&&(a.f^=st),v&&o!==null&&(o.f&A)===0&&(a.f^=A)}for(l=0;l<c;l++)if(u=r[l],rt(u)&&oe(u),u.wv>t.wv)return!0}(!n||h!==null&&!B)&&D(t,x)}return!1}function wr(t,e){for(var r=e;r!==null;){if((r.f&it)!==0)try{r.fn(t);return}catch{r.f^=it}r=r.parent}throw ut=!1,t}function mr(t){return(t.f&gt)===0&&(t.parent===null||(t.parent.f&it)===0)}function mt(t,e,r,n){if(ut){if(r===null&&(ut=!1),mr(e))throw t;return}r!==null&&(ut=!0);{wr(t,e);return}}function Ee(t,e,r=!0){var n=t.reactions;if(n!==null)for(var l=0;l<n.length;l++){var u=n[l];(u.f&P)!==0?Ee(u,e,!1):e===u&&(r?D(u,q):(u.f&x)!==0&&D(u,J),Et(u))}}function ye(t){var _;var e=m,r=b,n=F,l=d,u=B,s=R,v=g,c=O,a=t.f;m=null,b=0,F=null,B=(a&A)!==0&&(O||!U||d===null),d=(a&(M|X))===0?t:null,R=null,Mt(t.ctx),O=!1,vt++;try{var o=(0,t.fn)(),f=t.deps;if(m!==null){var i;if(dt(t,b),f!==null&&b>0)for(f.length=b+m.length,i=0;i<m.length;i++)f[b+i]=m[i];else t.deps=f=m;if(!B)for(i=b;i<f.length;i++)((_=f[i]).reactions??(_.reactions=[])).push(t)}else f!==null&&b<f.length&&(dt(t,b),f.length=b);if(ne()&&F!==null&&!O&&f!==null&&(t.f&(P|J|q))===0)for(i=0;i<F.length;i++)Ee(F[i],t);return l!==null&&vt++,o}finally{m=e,b=r,F=n,d=l,B=u,R=s,Mt(v),O=c}}function Er(t,e){let r=e.reactions;if(r!==null){var n=Ne.call(r,t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&(e.f&P)!==0&&(m===null||!m.includes(e))&&(D(e,J),(e.f&(A|st))===0&&(e.f^=st),fe(e),dt(e,0))}function dt(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Er(t,r[n])}function Dt(t){var e=t.f;if((e&gt)===0){D(t,x);var r=h,n=g,l=U;h=t,U=!0;try{(e&It)!==0?_r(t):de(t),ve(t);var u=ye(t);t.teardown=typeof u=="function"?u:null,t.wv=we;var s=t.deps,v;Ft&&We&&t.f&q}catch(c){mt(c,t,r,n||t.ctx)}finally{U=l,h=r}}}function yr(){try{je()}catch(t){if(_t!==null)mt(t,_t,null);else throw t}}function br(){var t=U;try{var e=0;for(U=!0;at.length>0;){e++>1e3&&yr();var r=at,n=r.length;at=[];for(var l=0;l<n;l++){var u=Tr(r[l]);xr(u)}}}finally{Nt=!1,U=t,_t=null,tt.clear()}}function xr(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if((n.f&(gt|z))===0)try{rt(n)&&(Dt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?he(n):n.fn=null))}catch(l){mt(l,n,null,n.ctx)}}}function Et(t){Nt||(Nt=!0,queueMicrotask(br));for(var e=_t=t;e.parent!==null;){e=e.parent;var r=e.f;if((r&(X|M))!==0){if((r&x)===0)return;e.f^=x}}at.push(e)}function Tr(t){for(var e=[],r=t;r!==null;){var n=r.f,l=(n&(M|X))!==0,u=l&&(n&x)!==0;if(!u&&(n&z)===0){if((n&Qt)!==0)e.push(r);else if(l)r.f^=x;else{var s=d;try{d=r,rt(r)&&Dt(r)}catch(a){mt(a,r,null,r.ctx)}finally{d=s}}var v=r.first;if(v!==null){r=v;continue}}var c=r.parent;for(r=r.next;r===null&&c!==null;)r=c.next,c=c.parent}return e}function I(t){var e=t.f,r=(e&P)!==0;if(d!==null&&!O){R!==null&&R.includes(t)&&Ye();var n=d.deps;t.rv<vt&&(t.rv=vt,m===null&&n!==null&&n[b]===t?b++:m===null?m=[t]:(!B||!m.includes(t))&&m.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,u=l.parent;u!==null&&(u.f&A)===0&&(l.f^=A)}return r&&(l=t,rt(l)&&oe(l)),et&&tt.has(t)?tt.get(t):t.v}function Yt(t){var e=O;try{return O=!0,t()}finally{O=e}}const Ar=-7169;function D(t,e){t.f=t.f&Ar|e}const Nr=["touchstart","touchmove"];function Or(t){return Nr.includes(t)}let Kt=!1;function Ir(){Kt||(Kt=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const r of t.target.elements)(e=r.__on_r)==null||e.call(r)})},{capture:!0}))}function be(t){var e=d,r=h;V(null),H(null);try{return t()}finally{V(e),H(r)}}function ln(t,e,r,n=r){t.addEventListener(e,()=>be(r));const l=t.__on_r;l?t.__on_r=()=>{l(),n(!0)}:t.__on_r=()=>n(!0),Ir()}const xe=new Set,Ot=new Set;function Pr(t,e,r,n={}){function l(u){if(n.capture||$.call(e,u),!u.cancelBubble)return be(()=>r==null?void 0:r.call(this,u))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?hr(()=>{e.addEventListener(t,l,n)}):e.addEventListener(t,l,n),l}function un(t,e,r,n,l){var u={capture:n,passive:l},s=Pr(t,e,r,u);(e===document.body||e===window||e===document)&&ce(()=>{e.removeEventListener(t,s,u)})}function Sr(t){for(var e=0;e<t.length;e++)xe.add(t[e]);for(var r of Ot)r(t)}function $(t){var S;var e=this,r=e.ownerDocument,n=t.type,l=((S=t.composedPath)==null?void 0:S.call(t))||[],u=l[0]||t.target,s=0,v=t.__root;if(v){var c=l.indexOf(v);if(c!==-1&&(e===document||e===window)){t.__root=e;return}var a=l.indexOf(e);if(a===-1)return;c<=a&&(s=c)}if(u=l[s]||t.target,u!==e){Ie(t,"currentTarget",{configurable:!0,get(){return u||r}});var o=d,f=h;V(null),H(null);try{for(var i,_=[];u!==null;){var p=u.assignedSlot||u.parentNode||u.host||null;try{var w=u["__"+n];if(w!=null&&(!u.disabled||t.target===u))if(Jt(w)){var[T,...Y]=w;T.apply(u,[t,...Y])}else w.call(u,t)}catch(N){i?_.push(N):i=N}if(t.cancelBubble||p===e||p===null)break;u=p}if(i){for(let N of _)queueMicrotask(()=>{throw N});throw i}}finally{t.__root=e,delete t.currentTarget,V(o),H(f)}}}function Cr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function ht(t,e){var r=h;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function Te(t,e){var r=(e&Je)!==0,n=(e&Qe)!==0,l,u=!t.startsWith("<!>");return()=>{l===void 0&&(l=Cr(u?t:"<!>"+t),r||(l=ft(l)));var s=n||ae?document.importNode(l,!0):l.cloneNode(!0);if(r){var v=ft(s),c=s.lastChild;ht(v,c)}else ht(s,s);return s}}function an(t=""){{var e=St(t+"");return ht(e,e),e}}function Lr(){var t=document.createDocumentFragment(),e=document.createComment(""),r=St();return t.append(e,r),ht(e,r),t}function bt(t,e){t!==null&&t.before(e)}function sn(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function fn(t,e){return Rr(t,e)}const W=new Map;function Rr(t,{target:e,anchor:r,props:n={},events:l,context:u,intro:s=!0}){ur();var v=new Set,c=f=>{for(var i=0;i<f.length;i++){var _=f[i];if(!v.has(_)){v.add(_);var p=Or(_);e.addEventListener(_,$,{passive:p});var w=W.get(_);w===void 0?(document.addEventListener(_,$,{passive:p}),W.set(_,1)):W.set(_,w+1)}}};c(Oe(xe)),Ot.add(c);var a=void 0,o=cr(()=>{var f=r??e.appendChild(St());return ot(()=>{if(u){ee({});var i=g;i.c=u}l&&(n.$$events=l),a=t(f,n)||{},u&&re()}),()=>{var p;for(var i of v){e.removeEventListener(i,$);var _=W.get(i);--_===0?(document.removeEventListener(i,$),W.delete(i)):W.set(i,_)}Ot.delete(c),f!==r&&((p=f.parentNode)==null||p.removeChild(f))}});return Dr.set(a,o),a}let Dr=new WeakMap;function kr(t,e,[r,n]=[0,0]){var l=t,u=null,s=null,v=y,c=r>0?wt:0,a=!1;const o=(i,_=!0)=>{a=!0,f(_,i)},f=(i,_)=>{v!==(v=i)&&(v?(u?Ht(u):_&&(u=ot(()=>_(l))),s&&At(s,()=>{s=null})):(s?Ht(s):_&&(s=ot(()=>_(l,[r+1,n]))),u&&At(u,()=>{u=null})))};Rt(()=>{a=!1,e(o),a||f(null,null)},c)}function Wt(t,e,...r){var n=t,l=Tt,u;Rt(()=>{l!==(l=e())&&(u&&(j(u),u=null),u=ot(()=>l(n,...r)))},wt)}function Ae(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(e=0;e<l;e++)t[e]&&(r=Ae(t[e]))&&(n&&(n+=" "),n+=r)}else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function Fr(){for(var t,e,r=0,n="",l=arguments.length;r<l;r++)(t=arguments[r])&&(e=Ae(t))&&(n&&(n+=" "),n+=e);return n}function Gt(t){return typeof t=="object"?Fr(t):t??""}function Mr(t,e,r){var n=t==null?"":""+t;return n=n?n+" "+e:e,n===""?null:n}function Zt(t,e,r,n,l,u){var s=t.__className;if(s!==r){var v=Mr(r,n);v==null?t.removeAttribute("class"):t.className=v,t.__className=r}return u}let nt=!1;function qr(t){var e=nt;try{return nt=!1,[t(),nt]}finally{nt=e}}function on(t,e=1){const r=t();return t(r+e),r}function zt(t){var e;return((e=t.ctx)==null?void 0:e.d)??!1}function xt(t,e,r,n){var kt;var l=(r&Ge)!==0,u=!0,s=(r&ze)!==0,v=(r&Xe)!==0,c=!1,a;s?[a,c]=qr(()=>t[e]):a=t[e];var o=lt in t||ke in t,f=s&&(((kt=Z(t,e))==null?void 0:kt.set)??(o&&e in t&&(E=>t[e]=E)))||void 0,i=n,_=!0,p=!1,w=()=>(p=!0,_&&(_=!1,v?i=Yt(n):i=n),i);a===void 0&&n!==void 0&&(f&&u&&Ve(),a=w(),f&&f(a));var T;if(T=()=>{var E=t[e];return E===void 0?w():(_=!0,p=!1,E)},(r&Ze)===0)return T;if(f){var Y=t.$$legacy;return function(E,K){return arguments.length>0?((!K||Y||c)&&f(K?T():E),E):T()}}var S=!1,N=er(a),k=Lt(()=>{var E=T(),K=I(N);return S?(S=!1,K):N.v=E});return s&&I(k),l||(k.equals=Pt),function(E,K){if(arguments.length>0){const yt=K?I(k):s?G(E):E;if(!k.equals(yt)){if(S=!0,L(N,yt),p&&i!==void 0&&(i=yt),zt(k))return E;Yt(()=>I(k))}return E}return zt(k)?k.v:I(k)}}const Br="5";var Xt;typeof window<"u"&&((Xt=window.__svelte??(window.__svelte={})).v??(Xt.v=new Set)).add(Br);var jr=Te("<span><!></span>"),Vr=(t,e)=>e()(),Hr=Te("<button><!></button>");function cn(t,e){ee(e,!0);const r=xt(e,"class",3,""),n=xt(e,"button",3,!1),l=xt(e,"onclick",3,()=>{});var u=Lr(),s=ar(u);{var v=a=>{var o=jr(),f=jt(o);Wt(f,()=>e.children??Tt),Vt(()=>Zt(o,1,Gt(r()),"svelte-lvxof8")),bt(a,o)},c=a=>{var o=Hr();o.__click=[Vr,l];var f=jt(o);Wt(f,()=>e.children??Tt),Vt(()=>Zt(o,1,Gt(r()),"svelte-lvxof8")),bt(a,o)};kr(s,a=>{n()?a(c,!1):a(v)})}bt(t,u),re()}Sr(["click"]);export{lr as $,Yt as A,ee as B,xt as C,zr as D,Wr as E,G as F,Te as G,un as H,z as I,ar as J,Wt as K,Jr as L,L as M,$r as N,an as O,Vt as P,bt as Q,jt as R,lt as S,cn as T,y as U,re as V,on as W,Tt as X,sn as Y,Lt as Z,Sr as _,ot as a,Xr as a0,fn as a1,ln as a2,Qr as a3,rn as a4,Rt as b,St as c,en as d,Oe as e,h as f,I as g,Yr as h,nr as i,Kr as j,Gr as k,pe as l,er as m,Ur as n,tn as o,At as p,hr as q,Ht as r,C as s,vr as t,j as u,Ct as v,Zr as w,Jt as x,_e as y,nn as z};
