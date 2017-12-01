<template lang="pug">
    v-layout
        v-flex(xs4)
            panel(title="Song Metadata")
                .section(slot='main')
                    v-text-field.input-group(type="text", name="title", label="Title", required, :rules="[required]" v-model="song.title")
                    v-text-field.input-group(type="text", name="artist", label="Artist", required, :rules="[required]" v-model="song.artist")
                    v-text-field.input-group(type="text", name="genre", label="Genre", required, :rules="[required]" v-model="song.genre")
                    v-text-field.input-group(type="text", name="album", label="Album", required, :rules="[required]" v-model="song.album")
                    v-text-field.input-group(type="text", name="albumImage", label="Album Image", required, :rules="[required]" v-model="song.albumImage")
                    v-text-field.input-group(type="text", name="youtubeId", label="YouTube ID", required, :rules="[required]" v-model="song.youtubeId")
        v-flex(xs8)
            panel.ml-2(title="Song Structure")
                .section(slot='main')
                    v-text-field.input-group(type="text", multi-line, name="lyrics", label="Lyrics", required, :rules="[required]" v-model="song.lyrics")
                    v-text-field.input-group(type="text", multi-line, name="tab", label="Tab", required, :rules="[required]" v-model="song.tab")

                    v-alert(:value='error' v-if="error" error transition="scale-transition") {{error}}
                    v-btn.cyan(dark @click="create") Create Song
</template>

<script>
  import Panel from '@/components/Panel'
  import SongService from '@/services/SongsService'
  export default {
    name: 'create-song',
    components: {
      Panel
    },
    data () {
      return {
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImage: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        },
        error: null,
        required: (value) => !!value || 'Required.'
      }
    },
    methods: {
      async create () {
        this.error = null
        const allFieldsFilled = Object
          .keys(this.song)
          .every(key => !!this.song[key])
        if (!allFieldsFilled) {
          this.error = ' Please fill in all required fields.'
          return
        }
        try {
          await SongService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>

<style scoped>

</style>