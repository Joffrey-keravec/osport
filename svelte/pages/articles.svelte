<script>


    import { onMount } from "svelte";
    
     let articles = [];
    
    // fonction qui nous permet d'appeller tous les articles
    async function getArticle(id) {
        const response = await fetch("http://0.0.0.0:8055/items/articles/" + id ); // connection avec l'API
        const dataJson = await response.json();
        articles = dataJson.data;
        console.log(articles)
    }
    getArticle();
    
    
    // quand le composant est chargé dans le DOM (onMount)...
    onMount(async () => {
        // ... on récupère l'article à afficher dans la page
        const id = document.location.hash.substr(11,5) // 1
        await getArticle(id,);
    });

</script>


<main>
    <div class="containerArt">
        <article class="articlePageContent">
            <div class="paragrapheArt">
                {#if articles }
                    <img class="image-1" src=http://0.0.0.0:8055/assets/{articles.picture} alt=""/>
                    <h1 class="titleArt">{articles.title}</h1>
                    <p class="paraArt">{@html articles.content}</p>
                {/if}
            </div>
        </article>
    </div>
</main>



