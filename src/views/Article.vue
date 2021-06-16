<template>
  <div v-if="tutorial" class="mt-3">
      <div v-html="content"></div>
  </div>
</template>

<script>

import axios from 'axios'
import { getBaseUrl } from '../url'

export default {
    name: 'Article',
    props: ['tutorial'],
    data: function(){
        return {
            content: ""
        }
    },

    methods: {
        setContent(res){
            this.content = res.data
        }
    },

    mounted(){
        axios.get(getBaseUrl() + '/content/articles/' + this.tutorial.article).
            then(this.setContent)
    }
}
</script>

<style>

</style>