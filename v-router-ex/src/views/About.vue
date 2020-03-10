<template>
  <div class="about">
    <h1>This is an about page</h1>
      Count = {{ count }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: mapActions([
    'increment',
    'decrement',
  ]),
  computed: mapState([
    'count',
  ]),
};
</script>
