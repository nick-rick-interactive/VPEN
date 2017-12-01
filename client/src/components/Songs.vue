<template lang="pug">
    v-layout(column)
        v-flex(xs6 offset-xs3)
            panel(title='Songs')
                v-btn.cyan.accent-2(to='/songs/create' slot="action" fab medium absolute light right middle)
                    v-icon add
                div.songs(slot="main" v-bind:key='song.id' v-for="song in songs")
                    v-layout.song
                        v-flex(xs6)
                            .song-title {{song.title}}
                            .song-artist {{song.artist}}
                            .song-genre {{song.genre}}
                            v-btn.cyan(dark :to="`/songs/${song.id}`") View
                        v-flex(xs6)
                            img.album-image(:src="song.albumImageUrl")
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

<style lang="scss" scoped>
    .song{
        padding: 20px;
        .song-title{
            font-size: 30px;
        }
        .song-artist{
            font-size: 24px;
        }
        .song-genre{
            font-size: 18px;
        }
        .album-image{
            width: 70%;
            text-align: center;
        }
    }
</style>