<script>
import { onMount } from "svelte";
import {BASE_URL} from "../../store/globals"
import dragon from '../../imgs/dragon.png'
import treasure from '../../imgs/yuan.png'

$: isLoggedIn = false

async function loginCheck(){
    const response = await fetch(`${$BASE_URL}/api/authorized`)
    if(response.status === 200){
        return isLoggedIn = true
    }else{
        return isLoggedIn = false
    }
}
onMount(loginCheck)
</script>

{#if !isLoggedIn}
<h2>You do not seem well equiped to face the dragon please login to get you knight armor</h2>
<img src = {dragon} alt = "Login-dragon">
{:else}
<h2>Quick attack the dragon with your shiny knight sword</h2>
<img src = {dragon} alt = "Login-dragon"> 
<button>Attack</button>
<h2>Congratulations you have defeated the dragon here is the treasure</h2>
<img src = {treasure} alt = "treasure">
{/if}