<template lang='pug'>
  v-layout
    v-flex(xs6)
      panel(title='Song MetaData')
        v-layout.song-panel(slot='main')
          v-flex(xs6)
            .song-title {{song.title}}
            .song-artist {{song.artist}}
            .song-genre {{song.genre}}
          v-flex(xs6)
            img.album-image(:src="song.albumImageUrl")
            .album-title {{song.album}}
</template>

<script>
  import SongsService from '@/services/SongsService'
  import Panel from '@/components/Panel'
  export default {
    name: 'view-song',
    data () {
      return {
        song: null
      }
    },
    async mounted () {
      const songId = this.$store.state.route.params.id
      this.song = (await SongsService.show(songId)).data
      console.log(this.song)
    },
    components: {
      Panel
    }
  }
</script>

<style lang='scss' scoped>
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
        .album-title{
            font-size: 18px;
        }
        .album-image{
            width: 70%;
            text-align: center;
        }
    }
</style>