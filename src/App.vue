<template>
  <v-app>
    <TitleBar></TitleBar>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TitleBar from './components/TitleBar'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TitleBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
