<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Animals from "./pages/Animals/Animals.svelte";
  import Entrance from "./pages/Entrance/Entrance.svelte";
  import Home from "./pages/Home/Home.svelte";
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/entrance">Entrance</Link>
    <Link to="/animals">Animals</Link>
  </nav>
  <div>
    <Route path="/"><Home/></Route>
    <Route path="/entrance"><Entrance/></Route>
    <Route path="/animals"><Animals/></Route>
  </div>
</Router>