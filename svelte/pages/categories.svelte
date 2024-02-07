
<script>

    import { link } from "svelte-spa-router";
    import Articles from "./articles.svelte";
    
    let listArticles = [];
    
    async function getListArticles() {
        // récupérer la catégorie et la passer dans la route 
        // `http://0.0.0.0:8055/items/articles/?fields=*.*&filter[categorie][categorie_name][_eq]={categorieName}`
    const response = await fetch(`http://0.0.0.0:8055/items/articles/?fields=*.*&filter[categorie][categorie_name][_eq]=foot`); 
   
    const dataJson = await response.json();
    listArticles = dataJson.data;
    console.log(listArticles);
}

getListArticles();
   
    
</script>



<main>

    {#each listArticles.slice(5) as article }
    <h1>{article.categorie[0].categorie_name}</h1>
    {/each}
    <div class="containerCat">




        {#each listArticles.reverse() as article }
        <article class="homeArticle catArt">
            <div class="left">
                <img class="img-article" src="http://0.0.0.0:8055/assets/{article.picture.id}" alt="" />
            </div>
            <div class="right">
                <h2>{article.title}</h2>
                <p>{article.resume}</p>
                <a href="/articles/{article.id}" use:link>LIRE LA SUITE >></a>
                <div class="categories auto">{article.categorie[0].categorie_name}</div>
            </div>
        </article>
        {/each}
     
    </div>
</main>