<template>
  <v-app>
    <v-content>
      <v-layout justify-center>
        <v-flex xs12 sm12 lg8>
          <Header/>
          <List/>
          <HelloWorld/>
          <Footer/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
    Header,
    List
  },
  data () {
    return {
      //
    }
  }
}
</script>
