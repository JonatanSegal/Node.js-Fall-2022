<script>
    import { toast } from '@zerodevx/svelte-toast'
    import { navigate } from 'svelte-navigator'
    import { BASE_URL } from '../../store/globals.js'

    import girl from '../../imgs/girl.png'
    
    let name = ""
    let email = ""
    let password = ""

    async function signUp(){
    if(name !== "" && email !== "" && password !== ""){

        const response = await fetch(`${$BASE_URL}/api/sign-up`,{
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                name,
                email,
                password
            }),
            headers: {
                "Content-type": "application/json"
            }
        })

        if(response.status === 403) {
            toast.push("User already exists", {
                theme: {
                    '--toastColor': 'white',
                    '--toastBackground': '#a60202',
                    '--toastBarBackground': '#570404'
                }    
            })
        return
        }
        else if(response.status === 200){
            const emailLink = await response.json()
            toast.push(`Sign-up successful, conmfirmation <a id="email-link" href="${emailLink.Link}" target="_blank">email</a>`,{
                duration: 6000
            })
            navigate("/", { replace: false });
            }
        }           
    }

    function isFieldsEmpty(){
        if(name === "" || email === "" || password === ""){
            toast.push('A name, email and password is required. Please make sure the fields are filled out', {
                theme: {
                        '--toastColor': 'white',
                        '--toastBackground': '#a60202',
                        '--toastBarBackground': '#570404'
                    },
                duration: 6000        
            })
        }
    }   

</script>

<h2>Sign up</h2>
<h3><i>Look there is guide here to help you defeat the dragon, all you have to do is fill out this form</i></h3>

<div class="form-container">
<img id="guide-girl" src={girl} alt="guide-girl">
    <form on:submit|preventDefault={signUp}>
        <label>
            Name 
            <input type="text" name="name" id="name-id" required bind:value={name} /> 
        </label>

        <label>
            Email
            <input type="email" name="email" id="email-id" required bind:value={email}/> 
            <span hidden>Error message</span>
        </label>
        
        <label>
            Password 
            <input type="password" name="password" id="password-id" required bind:value={password}/>
        </label>
        <button type="submit" on:click={isFieldsEmpty}> Sign up </button>
    </form>
</div>

<style>
    div.form-container{
        display: flex;
        align-items: center;
    }

    img#guide-girl {
        width: 280px;
        height: 280px;
    }
    form {
    display: inline;
    align-items: center;
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