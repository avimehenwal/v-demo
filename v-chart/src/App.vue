<template>
  <v-app>
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />

    <v-card class="mx-auto" max-width="344" outlined >
      <v-list-item two-line>
        <v-list-item-content>
          <div class="overline mb-4">Reactive data points</div>
          <v-list-item-title class="headline mb-1"> 
            <v-chip color="primary" class="font-weight-bold">{{ chartData.length-1}}</v-chip>
            Data Points</v-list-item-title>
          <v-list-item-subtitle>Check out cool reactive SVG data visualization</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-card-actions>
      <v-btn color="green" v-on:click="addRow()" rounded>
        +ADD 5 more
      </v-btn>
      <v-btn color="red" @click="reset()" rounded>RESET</v-btn>
      </v-card-actions>
    </v-card>
    <br>
    <ol>
      <li v-for="item in chartData" :key="item">
        {{ item }}
      </li>
    </ol>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.addRow();
  },
  filters: {
    pretty: function(value) {
      return JSON.stringify(JSON.parse(value), null, 2);
    }
  },
  data: () => ({
    chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit']
    ],
    chartOptions: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      }
    },
    start_year: 2015
  }),
  methods : {
    randomNumber : function() {
      var random_max = 1000;
      var random_min = 10;
      return Math.floor(Math.random() * random_max) + random_min;
    },
    addRow : function() {
      var i;
      for (i = this.start_year; i < this.start_year + 5; i++) {
        let row = [i, this.randomNumber(), this.randomNumber(), this.randomNumber()];
        console.log(row);
        this.chartData.push(row);
      }
    },
    reset: function() {
      this.chartData = [['Year', 'Sales', 'Expenses', 'Profit']];
      this.addRow();
    }
  }
};
</script>