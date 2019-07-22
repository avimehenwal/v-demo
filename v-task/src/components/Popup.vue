<template>
    <v-dialog max-width="600px">
        <v-btn flat slot="activator" class="success">
            Add new project
        </v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a new project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" prepend-icon="folder" v-model="title">
                    </v-text-field>
                    <v-textarea label="Information" prepend-icon="edit" v-model="content"></v-textarea>
                    <v-btn flat class="success mx-0 mt-3" @click="submit">+ Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">

export default {
    data() {
        return {
            title: '',
            content: '',
        }
    },
    methods: {
        submit() {
            console.log(this.title, this.content)
        }
    }

}
</script>

<style scoped>

</style>