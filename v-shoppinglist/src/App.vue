<template>
  <v-app>
    <Header/>
    <HelloWorld/>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
