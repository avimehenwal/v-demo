<template>
<nav>
    <v-toolbar flat app>
        <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="grey--text text-uppercase">
            <span class="font-weight-light">ToDo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>

    <!-- Navigation drawer -->
    <v-navigation-drawer app class="primary" v-model="drawer">
        <p>test</p>
    </v-navigation-drawer>
</nav>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
        })

    }
</script>

<style lang="scss" scoped>

</style>