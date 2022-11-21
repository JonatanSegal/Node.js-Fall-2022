<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Signup from "./pages/Signup/Signup.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Home from "./pages/Home/Home.svelte";
  import Secret from "./pages/Secret/Secret.svelte";
  import logo from "./imgs/fish.png"
</script>

<Router>
  <nav>
    <ul id="menu">
      <span class="nav-logo">
        <img  id="logo" src={logo} alt="logo">
    </span>
      <span class="link-item">
        <li>
          <Link to="/">Home</Link>
        </li>
      </span>
      <span class="link-item">
        <li><Link to=/secret>Secret</Link></li>
      </span>
      <span class="link-item">
        <li><Link to="/signup">Signup</Link></li>
      </span>
      <span class="link-item">
        <li><Link to="/login">login</Link></li>
      </span>
  </ul>
  </nav>
  <div>
    <Route path="/"><Home/></Route>
    <Route path="/secret"><Secret/></Route>
    <Route path="/signup"><Signup/></Route>
    <Route path="/login"><Login/></Route>
  </div>
</Router>

<style>
img#logo {
    width: 42px;
    height: 42px;
    padding-right: 10px;
    float:left;
    display: inline;
  }
</style>