<template>
  <v-app>

    <TitleBar></TitleBar>
    <LoginForm></LoginForm>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TitleBar from './components/TitleBar'
import LoginForm from './components/LoginForm'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TitleBar,
    LoginForm,
  },
  data () {
    return {
      //
    }
  }
}
</script>
