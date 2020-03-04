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

const chartData = [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
];

export default {
  name: 'App',
  data: () => ({
    chartData: chartData,
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
