<script>
    export let child;
    export let onTellIloveYou
    export let onAlwaysSayHi
    export let parentName

    import {fridgeMessageStore} from "../../store/fridgeBulletinStore.js"
    let fridgeMessage = "";

    function handleWriteMessage(){
        fridgeMessageStore.update((currentMessage) =>{
            return currentMessage +  `${fridgeMessage}`
        })
        fridgeMessage = ""
    }

</script>

<div class:bright-kid={child.brightKid} class={child.blackSheep || "not-a-black-sheep"}>
<p>{child.name}</p>
<input placeholder="Write a message" bind:value={fridgeMessage}>
<button on:click={handleWriteMessage}>Write a message</button>
<br>
<button on:click={onTellIloveYou(`I love you, ${parentName}.`)}>Whisper in parents ear</button>
<button on:click={onAlwaysSayHi}>Greetings</button>
</div>

<style>
    .bright-kid{
        border: solid 2px yellow;
    }
    .ultra-blacksheep{
        background-color: white;
    }
    .medium-blacksheep{
        background-color: gray;
    }
    .not-a-black-sheep{
        background-color: aquamarine;
    }
</style>