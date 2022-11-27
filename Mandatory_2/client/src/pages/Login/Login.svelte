<script>
    import {IS_LOGGED_IN, BASE_URL} from "../../store/globals"
    import { navigate } from 'svelte-navigator'
    import { toast } from '@zerodevx/svelte-toast'

    import pig from "../../imgs/pig.png"

    let email = ""
    let password = ""

    async function login(){
        if(email !== "" && password !== ""){
            const response = await fetch(`${$BASE_URL}/api/login`,{
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    "Content-type": "application/json"
                }
             })

             if(response.status === 429) {
                console.log("Too many login attempts")
                toast.push("Too many login attempts", {
                    theme: {
                        '--toastColor': 'white',
                        '--toastBackground': 'red',
                        '--toastBarBackground': '#570404'
                } 
                })
                return
            }
            else if(response.status !== 200) {
                console.log("Couldn't log in")
                toast.push("Wrong email or password", {
                    theme: {
                        '--toastColor': 'white',
                        '--toastBackground': 'red',
                        '--toastBarBackground': '#570404'
                }
                })
                return
            }
            toast.push("Login successful")
            IS_LOGGED_IN.set(true)
            navigate("/", { replace: false }); 
         
        }       
    }
    function isFieldsEmpty(){
        if( email === "" || password === ""){
            toast.push('Email and password required', {
                theme: {
                    '--toastColor': 'white',
                    '--toastBackground': 'red',
                    '--toastBarBackground': '#570404'
                },
                duration: 6000     
                })      
            }
        }



</script>

<h2>Login here</h2>
<h3><i>A friendly spirit has come to make sure you login safely</i></h3>

<div class="form-container">
    <img id="login-guide" src={pig} alt="pig">
    <form on:submit|preventDefault={login}>
       
        <label>
            Email <input type="email" name="email" id="email-id" required bind:value={email} /> 
            <span hidden>Error message</span>
        </label>
        
        <label>
            Password <input type="password" name="password" id="password-id" required bind:value={password} />
        </label>

        <button type="submit" on:click={isFieldsEmpty}> Login </button>
    </form>
</div>

<style>
    div.form-container{
        display: flex;
        align-items: center;
    }
    
    img#login-guide{
        width: 280px;
        height: 280px;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        width: 450px;
        line-height: 36px;
        margin-bottom: 10px;
        padding: 10px;
    }

    input {
        height: 30px;
        flex: 0 0 200px;
        margin-left: 10px;
        font-size: 20px;
    }
</style>