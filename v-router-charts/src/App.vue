<template>
  <v-app>
    <!-- Navigation Drawer -->
     <v-navigation-drawer v-model="drawer" :color="color" :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant" :right="right" :src="bg" absolute dark app clipped>
        <v-list dense nav class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
              <v-list-item-subtitle>Subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <!-- Navigating links from router -->
          <v-list-item v-for="item in $router.options.routes" :key="item.name" link
            :to="item.path" :class="{ active: item.path === $router.currentRoute.path }">
            <v-list-item-icon> <v-icon>{{ item.icon }}</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      <!-- Reactive Localizations setting -->
      <template v-slot:append>
        <div class="pa-2">
          <v-list dense height="250">
            <v-list-item>
              <v-select v-model="color" :items="colors" label="Color" ></v-select>
            </v-list-item>
            <!-- <v-list-item>
              <v-switch v-model="drawer" class="ma-2" label="v-model" ></v-switch>
            </v-list-item> -->
            <v-list-item>
              <v-switch v-model="miniVariant" class="ma-2" label="Mini variant" ></v-switch>
            </v-list-item>
            <!-- <v-list-item>
              <v-switch v-model="expandOnHover" class="ma-2" label="Expand on hover" ></v-switch>
            </v-list-item> -->
            <v-list-item>
              <v-switch v-model="background" class="ma-2" label="Background" ></v-switch>
            </v-list-item>
            <v-list-item>
              <v-switch v-model="right" class="ma-2" label="Right" ></v-switch>
            </v-list-item>
          </v-list>
          <v-btn block>Logout</v-btn>
        </div>
      </template>

    </v-navigation-drawer>

    <v-app-bar app clipped-right dense color="primary" light short dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{$route.path}}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created () {
    this.$vuetify.theme.dark = false
  },
  data () {
    return {
      drawer: true,
      color: 'primary',
      colors: [
        'primary',
        'secondary',
        'accent',
        'blue',
        'success',
        'info',
        'warning',
        'red',
        'teal'
      ],
      right: true,
      miniVariant: false,
      expandOnHover: false,
      background: false
    }
  },
  computed: {
    bg () {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    }
  }
}
</script>
