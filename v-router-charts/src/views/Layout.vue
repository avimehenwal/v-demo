<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters fluid>
      <!-- All grid space in extra small devices, half on small and quarter on medium -->
      <v-col v-for="n in 3" :key="n" cols="12" xs="12" sm="6" md="4">
        <v-card flat>
          <v-card-text class="display-4 text-center">221</v-card-text>
          <v-card-subtitle class="text-center">{{}}</v-card-subtitle>
          <!-- <v-card-text>Processes</v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-progress-linear v-model="power" color="amber" height="25" reactive ></v-progress-linear>
    <!-- <v-system-bar dark color="info"> -->
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span> -->
    <!-- </v-system-bar> -->
    <v-row not gutters fluid>
      <v-col v-for="n in 3" :key=n sm="4">
        <v-card flat>
          <v-sparkline :fill="fill" :smooth="radius || false" :value="value" auto-draw ></v-sparkline>
        </v-card>
      </v-col>
    </v-row>

  <v-card>
    <v-card-text>
      Methods : {{ dateM }} <br>
      Computed : {{ getComputed }}
    </v-card-text>
    <v-card-actions>
      <v-btn v-on:click="getDate()">Refresh methods</v-btn>
      <v-btn v-on:click="getComputed()">Refresh computed</v-btn>
    </v-card-actions>
  </v-card>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    fill: true,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
    dateM: ''
  }),
  methods: {
    getDate: function () {
      this.dateM = Date.now()
    }
  },
  computed: {
    getComputed: function () {
      return Date.now()
    }
  }
}
</script>
