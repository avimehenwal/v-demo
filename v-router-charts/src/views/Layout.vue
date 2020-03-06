<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters fluid>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4" >
        <v-card flat>
          <v-card-text class="display-4 text-center">221</v-card-text>
          <v-card-subtitle class="text-center">Processes</v-card-subtitle>
          <!-- <v-card-text>Processes</v-card-text> -->
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <!-- <v-system-bar dark color="info"> -->
      <!-- <v-spacer></v-spacer> -->
      <!-- <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span> -->
    <!-- </v-system-bar> -->
    <v-row not gutters fluid>
      <v-col v-for="n in 3" :key=n>
        <v-card flat>
          <v-sparkline :fill="fill" :smooth="radius || false" :value="value" auto-draw ></v-sparkline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fill: true,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2
  })
}
</script>
