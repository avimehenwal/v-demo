<template>
  <v-app>
    <v-layout justify-center>
      <v-flex xs12 sm12 lg8>
        <Header/>
        <HelloWorld/>
        <Footer/>
      </v-flex>
    </v-layout>
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
