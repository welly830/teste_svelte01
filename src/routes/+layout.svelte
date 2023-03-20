<script>
  import Pwa from "$lib/Pwa.svelte";
  import "../app.postcss";
  import BottomNav from "../lib/BottomNav.svelte";
  import Header from "../lib/Header.svelte";
</script>
<Header/>
<Pwa/>
<BottomNav/>
<slot />
