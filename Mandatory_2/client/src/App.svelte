<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Signup from "./pages/Signup/Signup.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Home from "./pages/Home/Home.svelte";
</script>

<Router>
  <div>
    <Route path="/"><Home/></Route>
  </div>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">login</Link>
  </nav>
  <div>
    <Route path="/signup"><Signup/></Route>
    <Route path="/login"><Login/></Route>
  </div>
</Router>