<template>
  <div>
    <v-card>
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
          />
        </v-form>
      </v-card-text>
       <v-card-actions>
        <v-btn>Register</v-btn>
        <v-btn>Login</v-btn>
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