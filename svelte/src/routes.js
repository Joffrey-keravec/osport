import home from "../pages/home.svelte";
import about from "../pages/about.svelte";
import news from "../pages/news.svelte";
import register from "../pages/register.svelte";
import login from "../pages/login.svelte";
import articles from "../pages/articles.svelte";
import categories from "../pages/categories.svelte";




export default {
  "/home": home,
  "/about":about,
  "/news":news,
  "/articles/:id":articles,
  "/register":register,
  "/login":login,
  "/categories":categories,

};
