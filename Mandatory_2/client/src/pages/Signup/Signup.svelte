<script>
    import girl from '../../imgs/girl.png'

</script>
<h2>Sign up</h2>
<h3><i>Looks like there is guide here to help you defeat the dragon all you have to do is fill out the form</i></h3>

<div class="form-container">
<img id="guide-girl" src={girl} alt="guide-girl">
    <form>
        <label>
            Name 
            <input type="text" name="name" id="name-id" required  /> 
        </label>

        <label>
            Email
            <input type="email" name="email" id="email-id" required /> 
            <span hidden>Error message</span>
        </label>
        
        <label>
            Password 
            <input type="password" name="password" id="password-id" required />
        </label>
        <button type="submit"> Sign up </button>
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