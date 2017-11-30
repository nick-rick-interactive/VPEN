<template lang="pug">
    v-layout(column)
        v-flex(xs6 offset-xs3)
            .white.elevation-2
                v-toolbar.cyan(flat dense dark)
                    v-toolbar-title Register
                div.pl-4.pr-4.pt-2.pb-2
                    input(type="email", name="email", placeholder="email", v-model="email")
                    br
                    input(type="password", name="password", placeholder="password", v-model="password")
                    br
                    .error(v-html='error')
                    v-btn.cyan(@click="register") Register
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    watch: {
      email: (value) => {
        console.log(`email has changed`, value)
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    mounted () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .error{
        color: red;
    }
</style>
