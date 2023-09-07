<svelte:head>
    <title>Visitekaartje Daan Carstens</title>
</svelte:head>

<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices' 

    export let data
</script>

<section class="background">
    <section class="card">
        <img class="head-image" src="{ data.image.url }" alt="">
        <h1>{ data.title }</h1>
        <section class="text-container">
            <p>{ data.content[0].text}</p>
        </section>
        <br>
        <section class="socials-container">
            <img class="social-icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384089.png" alt="">
            <img class="social-icon" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ac3c481f273141736_icon_clyde_black_RGB.png" alt="">
        </section>
    </section>
</section>


<SliceZone slices={data.slices} {components} />