<script>
import { onMount } from "svelte";
import {BASE_URL, IS_LOGGED_IN} from "../../store/globals"
import { toast } from '@zerodevx/svelte-toast'

import dragon from '../../imgs/dragon.png'
import treasure from '../../imgs/yuan.png'

let dragonALive = true

async function loginCheck(){
    const response = await fetch(`${$BASE_URL}/api/authorized`,{
        method: "GET",
        credentials: "include"
    })
    if(response.status === 200 ){
        return IS_LOGGED_IN.set(true)
    }else{
        toast.push('Please login to face the dragon')
        return 
    }
}
onMount(loginCheck)

function attack(){
        dragonALive = false
}
</script>

{#if $IS_LOGGED_IN !== true}
<h2>You do not seem well equiped to face the dragon</h2>
<img src = {dragon} alt = "Login-dragon">
{:else}
    {#if dragonALive === true}
        <h2>Quick attack the dragon with your shiny sword</h2>
        <img src = {dragon} alt = "Login-dragon"> 
        <button on:click|preventDefault={attack}>Attack</button>
    {:else}
        <h2>Congratulations you have defeated the dragon here is the treasure</h2>
        <img src = {treasure} alt = "treasure">
    {/if}
{/if}