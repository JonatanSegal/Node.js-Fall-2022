<script>
    import { onMount } from "svelte";
    import {BASE_URL} from "../../store/globals"
    let animals = []
    
    async function fetchAnimals(){
        const response = await fetch(`${$BASE_URL}/api/animals`)
        //Only works if from same origin (if we use SSR in the express server folder)
        //const response = await fetch("/api/animals")
        const data = await response.json()
        animals = data.data
   }
   
   onMount(fetchAnimals)
</script>

<h3>Todo....animals...displays..here</h3>

{#each animals as animal }
    <p>{animal}</p>
{/each}