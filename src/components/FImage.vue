<template>
  <img v-if="sizes" :srcset="getSrcSet(tutorial)" sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" :src="getSrc(tutorial)" :alt="'Thumbnail for Tutorial ' + tutorial.name"/>
  <img v-else :srcset="getSrcSet(tutorial)" :src="getSrc(tutorial)" :alt="alt"/>
</template>

<script>
import { getImageUrl, getSrcSetPart } from '../url'

export default {
    name: "FImage",
    props: ["tutorial", "alt", "sizes"],
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

</style>