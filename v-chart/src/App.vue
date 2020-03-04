<template>
  <v-app>
    {{chartData}} {{randomNumber()}}
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </v-app>
</template>

<script>
// const chartData = [
//     ['Year', 'Sales', 'Expenses', 'Profit'],
//     ['2014', 1000, 400, 200],
//     ['2015', 1170, 460, 250],
//     ['2016', 660, 1120, 300],
//     ['2017', 1030, 540, 350]
// ];

export default {
  name: 'App',
  created() {
    this.addRow();
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
      var random_min = 200;
      return Math.floor(Math.random() * random_max) + random_min;
    },
    addRow : function() {
      var i;
      for (i = this.start_year; i < this.start_year + 5; i++) {
        let row = [i, this.randomNumber(), this.randomNumber(), this.randomNumber()];
        console.log(row);
        this.chartData.push(row);
      }
    }
  }
};
</script>
