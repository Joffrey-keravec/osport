<script>
  import Router, { location } from "svelte-spa-router";
  import routes from "./routes";
  

  import Header from "../component/header.svelte";
  import Footer from "../component/footer.svelte";


</script>

<Header />
<Router {routes}/>
<Footer />
