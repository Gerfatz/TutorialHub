<template>
  <img class="f-image" :srcset="getSrcSet(tutorial)" sizes="(max-width: 600px) 100vw, (max-width: 960px) 40vw, 25vw" :src="getSrc(tutorial)" :alt="'Thumbnail for Tutorial ' + tutorial.name"/>
</template>

<script>
import { getImageUrl, getSrcSetPart } from '../url'

export default {
    name: "FImage",
    props: ["tutorial", "alt"],
    methods: {
        getSrcSet(tutorial){
            const sizes = ['250', '400', '650', '800']
            let value = ""

            for(let size of sizes){
                value += getSrcSetPart(tutorial, size) + ','
            }

            return value.substring(0, value.length - 1)
        },

        getSrc(tutorial){
            return getImageUrl(tutorial, 800)
        }
    }
}
</script>

<style>
.f-image{
    max-width: 100%;
}
</style>