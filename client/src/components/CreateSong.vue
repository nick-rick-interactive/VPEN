<template lang="pug">
    v-layout
        v-flex(xs4)
            panel(title="Song Metadata")
                .section(slot='main')
                    v-text-field.input-group(type="text", name="title", label="Title", v-model="title")
                    v-text-field.input-group(type="text", name="artist", label="Artist", v-model="artist")
                    v-text-field.input-group(type="text", name="album", label="Album", v-model="album")
                    v-text-field.input-group(type="text", name="albumImage", label="Album Image", v-model="albumImage")
                    v-text-field.input-group(type="text", name="youtubeId", label="YouTube ID", v-model="youtubeId")
        v-flex(xs8)
            panel.ml-2(title="Song Structure")
                .section(slot='main')
                    v-text-field.input-group(type="text", multi-line, name="lyrics", label="Lyrics", v-model="lyrics")
                    v-text-field.input-group(type="text", multi-line, name="tab", label="Tab", v-model="tab")
                    v-btn.cyan(dark @click="create") Create Song
</template>

<script>
  import Panel from '@/components/Panel'
  export default {
    name: 'create-song',
    components: {
      Panel
    },
    data () {
      return {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    },
    methods: {
      create () {
        //call API
      }
    }
  }
</script>

<style scoped>

</style>