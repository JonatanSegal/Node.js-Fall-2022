<script>
    import pig from "../../imgs/pig.png"
</script>

<h2>Login here</h2>
<h3><i>A friendly spirit has come to make sure you login safely</i></h3>
<div class="form-container">
    <img id="login-guide" src={pig} alt="pig">
    <form>
        <label>
            Email <input type="email" name="email" id="email-id" required /> 
            <span hidden>Error message</span>
        </label>
        
        <label>
            Password <input type="password" name="password" id="password-id" required  />
        </label>
        <br />
        <button type="submit"> Login </button>
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