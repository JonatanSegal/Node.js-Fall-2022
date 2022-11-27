<script>
  import { Router, Link, Route } from "svelte-navigator";
  import { SvelteToast, toast } from '@zerodevx/svelte-toast';
  import {BASE_URL,IS_LOGGED_IN} from "./store/globals";
  
  import Signup from "./pages/Signup/Signup.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Home from "./pages/Home/Home.svelte";
  import Secret from "./pages/Secret/Secret.svelte";
  
  import logo from "./imgs/fish.png";
    import { onMount } from "svelte";
  
  function logOut() {
    fetch(`${$BASE_URL}/api/logout`, {
      credentials: "include"
      })
      console.log("Log out pressed")
      toast.push("Logged out")
      IS_LOGGED_IN.set(false)
  }
  async function loginCheck(){
    const response = await fetch(`${$BASE_URL}/api/authorized`,{
        method: "GET",
        credentials: "include"
    })
    if(response.status === 200 ){
        return IS_LOGGED_IN.set(true)
    }else{
      IS_LOGGED_IN.set(false)
    }
  }
  onMount(loginCheck)
</script>

<Router>
  <nav>
    <ul id="menu">
      <span class="nav-logo">
        <Link to="/"><img id="logo" src={logo} alt="logo"></Link>
      </span>
      <span class="link-item">
        <li>
          <Link to="/">Home</Link>
        </li>
      </span>
      <span class="link-item">
        <li>
          <Link to=/secret>Secret</Link>
        </li>
      </span>
    {#if $IS_LOGGED_IN !== true}
      <span class="link-item">
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </span>
      <span class="link-item">
        <Link to="/login">Log in</Link>
      </span>
      {:else}
      <span class="link-item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <Link to="/" on:click={logOut}>Log out</Link>
      </span>
      {/if}
  </ul>
  </nav>
  
  <div>
    <Route path="/"><Home/></Route>
    <Route path="/secret"><Secret/></Route>
    <Route path="/signup"><Signup/></Route>
    <Route path="/login"><Login/></Route>
  </div>
</Router>

<SvelteToast/>

<style>
img#logo {
    width: 42px;
    height: 42px;
    padding-right: 10px;
    float:left;
    display: inline;
  }
</style>