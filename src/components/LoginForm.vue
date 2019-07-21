<template>
  <div>
    <v-card width="50%" class="mt-5 mx-a">
      <v-card-title>
        <h1>Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            prepend-icon="account_circle"
          />
          <v-text-field
            type="Password"
            label="Password"
            prepend-icon="lock"
            append-icon="visibility_off"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
    export default {
        name: 'LoginForm'
    }
</script>

<style lang="scss" scoped>

</style>