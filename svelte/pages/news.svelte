
<script>
    import { link } from "svelte-spa-router";
   

    let listArticles = []
    


// fonction qui nous permet d'appeller tous les articles
async function getArticlesList() {
    const response = await fetch("http://0.0.0.0:8055/items/articles/?fields=*.*"); // connection avec l'API
    const dataJson = await response.json();
        listArticles = dataJson.data

            console.log(listArticles);
}
getArticlesList();







</script>


<main class="Main">
    <h1 class="newsTitle"> ACTUALITÉS</h1>
    


    
    {#each listArticles.slice(-1).reverse() as articles (articles.id)}
    <article class="main-article">
        <img class="ImgMainArt" src=http://0.0.0.0:8055/assets/{articles.picture.id} alt="">
        <div class="ContentMainArt">
            <h2>{articles.title}</h2>
            <p>{articles.resume}</p>
            <div id="mainArtFooter">
                <a class="linkNews" href="/articles/{articles.id}" use:link>LIRE LA SUITE...</a>
                <div class="categorieNewsMain foot">{articles.categorie[0].categorie_name}</div>
            </div>    
        </div>
    </article>
    {/each} 



    <div class="SecondaryArticles">

        {#each listArticles.slice(-5, -1).reverse() as articles (articles.id)}
        <article class="articlesNews">
            <img class="ImgMainArt" src=http://0.0.0.0:8055/assets/{articles.picture.id} alt="">
            <div class="ContentSecondaryArt">
                <h2>{articles.title}</h2>
                <p>{articles.resume}</p>
                <div id="secondaryArtFooter">
                    <a class="linkNews" href="/articles/{articles.id}" use:link>LIRE LA SUITE ...</a>
                    <div class="categorieNews foot">{articles.categorie[0].categorie_name}</div>
                </div>
            </div>
        </article>
        {/each}


    </div>
</main>