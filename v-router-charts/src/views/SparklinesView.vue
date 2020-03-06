<template>
    <v-container>
        <Sparklines/>
    </v-container>
</template>

<script>
// @ is an alias to /src
import Sparklines from '@/components/Sparklines.vue'

export default {
  name: 'SparklinesView',
  components: {
    Sparklines
  },
  date: () => ({
    url: this.$route.fullPath
  })
}
</script>
