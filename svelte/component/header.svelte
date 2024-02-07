<script>
    import { link } from "svelte-spa-router";
    let open = false;
    let modal;
    let icone;
    let toggleOpen = () => {
        open = !open;
        modal.classList.toggle("show-modal");
        icone.classList.toggle("fa-times");
    };
    const close = () => {
        open = false;
        modal.classList.remove("show-modal");
        icone.classList.remove("fa-times");
    };
</script>



<header>
    <div class="icone">
        <i class="fas fa-bars" bind:this={icone} on:click={toggleOpen} />
        <i class="fa-solid fa-house" />
    </div>
    <!-- Menu mobile -->
    <div class="navbar-mobile">
        <div class="modal" bind:this={modal}>
            <div class="navbar-mobile-list">
                <a href="/home" use:link on:click={close}>ACCUEIL</a>
                <a href="/news" use:link on:click={close}>ACTUALITÉS</a>
                <li class="sous-menu">
                    <a class="catBurger" href="" 
                        >CATÉGORIES
                        <span>&#9660;</span>
                    </a>
                    <ul class="sous-liste">
                        <li class="items-sous-liste">
                            <a href="/categories" use:link>FOOTBALL</a>
                        </li>
                        <li class="items-sous-liste">
                            <a href="/categories" use:link>SPORT MÉCANIQUE</a>
                        </li>
                        <li class="items-sous-liste">
                            <a href="/categories" use:link>SPORT NAUTIQUE</a>
                        </li>
                    </ul>
                </li>
                <a href="/about" use:link on:click={close}>À PROPOS</a>
                <a href="/register" use:link on:click={close}>S'ENREGISTRER</a>
                <a href="/login" use:link on:click={close}>SE CONNECTER</a>
            </div>
        </div>
    </div>






    <!-- Menu desktop -->
    <div class="navbar-desktop">
        <ul class="ul-nav">
            <li><a href="/home" use:link>ACCUEIL</a></li>
            <li><a href="/news" use:link>ACTUALITÉS</a></li>
            <li class="sous-menu">
                <a href="/categorie" >CATÉGORIES<span>&#9660;</span></a>
<!-- dynamiser la liste des catégories 
appel API GET de la liste des catégories 
const listCategory 
on boucle sur chaque category et ça donnerait 
                    <li class="items-sous-liste">
                        <a href="/categories" use:link categoryName:{category.name}>{category.name}</a>
                    </li>
-->
                <ul class="sous-liste">
                    <li class="items-sous-liste">
                        <a href="/categories" use:link>FOOTBALL</a>
                    </li>
                    <li class="items-sous-liste">
                        <a href="/categories" use:link>SPORT MÉCANIQUE</a>
                    </li>
                    <li class="items-sous-liste">
                        <a href="/categories" use:link>SPORT NAUTIQUE</a>
                    </li>
                </ul>
            </li>
            <li><a href="/about" use:link>À PROPOS</a></li>
        </ul>
    </div>
    <div class="connexion">
        <a href="/register" use:link>S'ENREGISTRER</a>
        <a href="/login" use:link>SE CONNECTER</a>
    </div>
    <img
        class="logo"
        src="./src/assets/photo/younes/Logo.png"
        alt="Logo du site"
    />
</header>