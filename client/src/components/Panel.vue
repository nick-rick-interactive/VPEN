<template lang="pug">
    .white.elevation-2
        v-toolbar.cyan(flat dense dark)
            v-toolbar-title {{title}}
        div.pl-4.pr-4.pt-2.pb-2
            slot(name='main') No Slot Content Defined.
</template>

<script>
  export default {
    name: 'panel',
    props: [
      'title'
    ]
  }
</script>

<style scoped>

</style>