<template>
<v-card :dark="dark" :disabled="disabled" :exact="exact" :flat="flat"
    :hover="hover" :light="light" :link="link" :loading="loading" :outlined="outlined"
    :raised="raised" :shaped="shaped" :tile="tile">
    <v-card-title>
      <v-icon
        :color="checking ? 'red lighten-2' : 'indigo'"
        class="mr-12"
        size="64"
        @click="takePulse"
      >
        mdi-heart-pulse
      </v-icon>
      <v-row align="start">
        <div class="caption grey--text text-uppercase">
          Heart rate
        </div>
        <div>
          <span
            class="display-2 font-weight-black"
            v-text="avg || '—'"
          ></span>
          <strong v-if="avg">BPM</strong>
        </div>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn icon class="align-self-start" size="28">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        :key="String(avg)"
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="heartbeats"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
    </v-sheet>
    <v-card-actions>
        <v-switch v-model="dark" label="dark"></v-switch>
        <v-switch v-model="disabled" label="disabled"></v-switch>
        <v-switch v-model="exact" label="exact"></v-switch>
        <v-switch v-model="flat" label="flat"></v-switch>
        <v-switch v-model="hover" label="hover"></v-switch>
        <v-switch v-model="light" label="light"></v-switch>
        <v-switch v-model="loading" label="loading"></v-switch>
        <v-switch v-model="outlined" label="outlined"></v-switch>
        <v-switch v-model="raised" label="raised"></v-switch>
        <v-switch v-model="shaped" label="shaped"></v-switch>
        <v-switch v-model="tile" label="tile"></v-switch>
    </v-card-actions>
</v-card>
</template>

<script>
const exhale = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  data () {
    return {
      dark: false,
      disabled: false,
      exact: false,
      flat: false,
      hover: false,
      light: false,
      loading: false,
      outlined: false,
      raised: false,
      shaped: false,
      tile: false,
      checking: false,
      heartbeats: []
    }
  },
  computed: {
    avg () {
      const sum = this.heartbeats.reduce((acc, cur) => acc + cur, 0)
      const length = this.heartbeats.length

      if (!sum && !length) return 0

      return Math.ceil(sum / length)
    }
  },

  created () {
    this.takePulse(false)
  },

  methods: {
    heartbeat () {
      return Math.ceil(Math.random() * (120 - 80) + 80)
    },
    async takePulse (inhale = true) {
      this.checking = true

      inhale && await exhale(1000)

      this.heartbeats = Array.from({ length: 20 }, this.heartbeat)

      this.checking = false
    }
  }
}
</script>
