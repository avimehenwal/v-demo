<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="success">
      Add new project
    </v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field :rules="inputRules" label="Title" prepend-icon="folder" v-model="title">
          </v-text-field>
          <v-textarea :rules="inputRules" label="Information" prepend-icon="edit" v-model="content"></v-textarea>
            <v-menu>
              <v-text-field :rules="inputRules" v-model="formattedDate" slot="activator" label="Due date" prepend-icon="date_range"></v-text-field>
              <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-spacer></v-spacer>
          <v-btn flat :loading="loading" class="success mx-0 mt-3" @click="submit">+ Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '../fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
              v => v.length >=3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false,
        }
    },
    methods: {
        submit() {
          if(this.$refs.form.validate()){
            this.loading = true;
            const project = {
              title: this.title,
              content: this.content,
              due: format(this.due, 'Do MMM YYYY'),
              person: 'The Net Ninja',
              status: 'ongoing',
            }

            // asynchronous method, use Promises
            db.collection('Projects').add(project).then(() => {
              console.log('Added to db');
              this.loading = false;
              this.dialog = false;
              this.$emit('projectAdded')
            })
          }
        }
    },
    computed: {
        formattedDate () {
            return this.due ? format(this.due, 'Do MMM YYYY') : ''
        }
    }

}
</script>

<style scoped>
</style>