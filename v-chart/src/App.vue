<template>
  <v-app>
    {{chart_data}} {{randomNumber()}}
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    chartData: [
      ['Year', 'Sales', 'Expenses', 'Profit'],
      ['2014', this.randomNumber(), this.randomNumber(), this.randomNumber()],
      ['2015', this.randomNumber(), this.randomNumber(), this.randomNumber()],
      ['2016', this.randomNumber(), this.randomNumber(), this.randomNumber()],
      ['2017', this.randomNumber(), this.randomNumber(), this.randomNumber()]
    ],
    chartOptions: {
      chart: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      }
    },
    random_max: 1000,
    random_min: 200
  }),
  methods : {
    randomNumber : function() {
      var random_max = 1000;
      var random_min = 200;
      return Math.floor(Math.random() * random_max) + random_min;
    }
  }
};
</script>
