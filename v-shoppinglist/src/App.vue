<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>My awesome</span>
        <span class="font-weight-light">shoppinglist app</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <HelloWorld/>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
  },
  data () {
    return {
      //
    }
  }
}
</script>
