<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p class="blue white--text">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quod possimus placeat, tempore repellendus porro repudiandae unde iusto atque dicta, error dolorem magnam facilis ipsa iste omnis eum saepe vitae?
    </p>
    <p class="lighten-4 pink red--text text--darken-4">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vero expedita modi, quod provident iusto unde hic numquam ipsam, sapiente quidem cupiditate nesciunt minima consequuntur iste. Nisi enim blanditiis dignissimos?
    </p>
    <h4 class="display-1">
      Smaller text
    </h4>
    <h1>
      Normal h1 heading
    </h1>
    <p class="headline">headline</p>
    <p class="subheading">subheading</p>
    <p class="caption">caption to place under image</p>

    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="pink">Click Me</v-btn>
    <v-btn dark color="pink">Click Me</v-btn>
    <v-btn flat color="pink">Click Me</v-btn>
    <v-btn dark depressed color="pink">
      <v-icon left>email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn small dark depressed color="pink">
      <v-icon small left>email</v-icon>
      <span>Email me</span>
    </v-btn>
    <v-btn large dark depressed color="pink">
      <v-icon large left>email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn fab dark color="pink">
      <v-icon>favorite</v-icon>
    </v-btn>

    <!-- breakpoints and visibility -->
    <v-btn class="hidden-md-and-down">hidden-md-and-down</v-btn>
    <v-btn class="hidden-md-and-up-">hidden-md-and-up</v-btn>
    <v-btn class="hidden-sm-only">hidden-sm-only</v-btn>

  </div>
</template>
