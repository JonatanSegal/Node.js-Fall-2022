<script>
import { onMount } from "svelte";
import {BASE_URL, IS_LOGGED_IN} from "../../store/globals"
import { toast } from '@zerodevx/svelte-toast'

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

import dragon from '../../imgs/dragon.png'
import treasure from '../../imgs/yuan.png'

let dragonAlive = true
let playerAlive = true
let dragonHP = 100
let playerHP = 100
let playerMP = 80

function attack(){
    if(checkDragonHP() && checkPlayerHP()){
        const damage = Math.random() * (10 - 3) + 3
        const roundedDmg = Math.round(damage)
        
        dragonHP = dragonHP - roundedDmg
        playerHP = playerHP - dragonAttack()
       
        if(checkDragonHP() === false){
            dragonAlive = false
        }

        if(checkPlayerHP() === false){
            playerAlive = false
            toast.push('Ohh no you died, please try again')
        }
    }else{
        toast.push('You are dead')
    }
}

function checkDragonHP(){
    if(dragonHP >= 0){
        return true
    }
    return false
}

function checkMP(){
    if(playerMP > 0){
        return true
    }
    return false
}

function checkPlayerHP(){
    if(playerHP > 0){
        return true
    }
    playerHP = 0
    return false
}

function dragonAttack(){
    const damage = Math.random() * (13 - 5) + 5
    const roundedDmg = Math.round(damage)
    return roundedDmg
}

function heal(){
    if(checkMP()){
        if(playerHP < 100 && playerAlive === true){
            playerHP = playerHP + 20
            playerMP = playerMP - 20
        }
        else if(playerAlive === false){
            toast.push('can not use heal while dead')
        }
        else{
            toast.push('You are already full hp')
        }
        if(playerHP > 100){
            playerHP = 100
            return
        }
    }else{
        toast.push('Not enough MP')
    }
}

function resetGame(){
        dragonAlive = true
        playerAlive = true
        dragonHP = 100
        playerHP = 100
        playerMP = 80
        return
    }
</script>

{#if $IS_LOGGED_IN !== true}
<h2>You do not seem well equiped to face the dragon</h2>
<img src = {dragon} alt = "Login-dragon">
{:else}
    {#if dragonAlive === true}
        <h2>Quick attack the dragon with your shiny new sword</h2>
        <img id="dragon" src = {dragon} alt = "Login-dragon"> 
        <p>Dragon HP <b>: {dragonHP}</b></p>
        <p>Player HP <b>: {playerHP}</b> MP <b>:{playerMP}</b></p>
        <br>
        <button on:click|preventDefault={attack}>Attack</button>
        <button on:click|preventDefault={heal}>Heal <i>20:MP</i></button>
        {#if playerAlive === false}
            <button on:click|preventDefault={resetGame}>Reset game</button>
        {/if}
    {:else}
        <h2>Congratulations you have defeated the dragon here is the treasure</h2>
        <img id="treasure" src = {treasure} alt = "treasure">
        <br>
        <button on:click|preventDefault={resetGame}>Reset game</button>
    {/if}
{/if}

<style>
    img#dragon {
        width: 380px;
        height: 380px;
    }
    img#treasure {
        width: 380px;
        height: 380px;
    }
</style>