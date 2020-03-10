<template>
  <v-app>
    <v-app-bar app color="primary" dark dense>
      <!-- Navigating links from router -->
      <v-list-item v-for="item in $router.options.routes" :key="item.name" link
        :to="item.path" :class="{ active: item.path === $router.currentRoute.path }">
        <v-list-item-icon> <v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    //
  }),
};
</script>
