<template lang="pug">
    v-toolbar.cyan(fixed dark)
        v-toolbar-title.mr-4
            router-link.home(to='/root') VPEN
        v-toolbar-items
            v-btn(flat dark to='/songs') Browse
        v-spacer
        v-toolbar-items
            v-btn(flat dark to='/login' v-if='!$store.state.isUserLoggedIn') Login
            v-btn(flat dark to='/register' v-if='!$store.state.isUserLoggedIn') Sign Up
            v-btn(flat dark @click='logout' v-if='$store.state.isUserLoggedIn') Log Out
</template>

<script>
  export default {
    name: 'page-header',
    methods: {
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'root'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .home{
        cursor: pointer;
        text-decoration: none;
        color:white;
        transition: color 0.3s ease;
        &:hover{
            color: black;
        }
    }
</style>
