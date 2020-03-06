<template>
    <v-container>
        <h1>{{$router.path}}</h1>
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
  }
}
</script>
