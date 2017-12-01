<template lang="pug">
    #app
        v-app
            page-header
            main
                v-container(fluid)
                    img(src="./assets/logo.png")
                    router-view
</template>

<script>
    import PageHeader from '@/components/Header.vue'

    export default {
      name: 'app',
      components: {
        PageHeader
      }
    }
</script>

<style lang="scss">
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

</style>
