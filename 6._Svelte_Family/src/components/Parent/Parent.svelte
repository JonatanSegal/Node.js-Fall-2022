<script>
    export let name;
    export let children;

    import {fridgeMessageStore} from "../../store/fridgeBulletinStore.js"
    import Child from "../Child/Child.svelte";


    function handleEraseFridgeBulletin(){
        fridgeMessageStore.set("Write you message...")
    }

    function handleAlwaysSayHi(){
        console.log("Hi")
    }

    function handleTellIloveYou(message){
        console.log(message)
    }

</script>

<h1>Hi I'm {name}.</h1>
<div on:click={handleEraseFridgeBulletin} on:keydown={()=>{}}>Erase the fridge bulletin.</div>

{#each children as child}
    <Child child={child} parentName={name} onTellIloveYou={handleTellIloveYou} onAlwaysSayHi={handleAlwaysSayHi}/>
{/each}
