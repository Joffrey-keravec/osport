<script>

import { link } from "svelte-spa-router";

let listArticles = []

// fonction qui nous permet d'appeller tous les articles
async function getArticlesList() {
    const response = await fetch("http://0.0.0.0:8055/items/articles/?fields=*.*"); // connection avec l'API
    const dataJson = await response.json();
    listArticles = dataJson.data
}
getArticlesList();





</script>

<main>
    <h1>ACCUEIL</h1>
    <h2>LES DERNIERES NEWS</h2> 
    
    <div class="articles">
        
        {#each listArticles.slice(-9).reverse() as articles (articles.id)}
        <article class="homeArticle">
        <div class="left">
                <img class="img-article" src=http://0.0.0.0:8055/assets/{articles.picture.id} alt="" />
            </div>
            <div class="right">
                <h2>{articles.title}</h2>
                <p>{articles.resume}</p>                
                <a href="/articles/{articles.id}" use:link>LIRE LA SUITE ...</a>
                <div class="categorie foot">{articles.categorie[0].categorie_name}</div>                          
            </div>     
        </article> 
        {/each}
    


        
    </div>
</main>
