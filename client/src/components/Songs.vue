<template lang="pug">
    v-layout(column)
        v-flex(xs6 offset-xs3)
            panel(title='Songs')
                div(slot="main" v-bind:key='song.id' v-for="song in songs")
                    | {{song.title}} -
                    | {{song.artist}} -
                    | {{song.album}}


</template>

<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  export default {
    name: 'songs',
    components: {
      Panel
    },
    data () {
      return {
        songs: null
      }
    },
    async mounted () {
      this.songs = (await SongsService.index()).data
    }
  }
</script>

<style scoped>

</style>