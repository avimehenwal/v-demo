<template>
  <v-app>
    <v-content>
      Main App.vue
      <router-view></router-view>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
}
</script>
