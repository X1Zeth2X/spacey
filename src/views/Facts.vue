<template>
<div id="facts" class="text-center mb4">
  <h1 class="display-3 font-weight-bold mb2">
    Cool Space Fact 👽
  </h1>
  <p>Some random space facts that are cool *shrug*</p>

  <v-card
    max-width="35rem"
    class="b-card w-50-l w-60-md w-90 auto pb2"
    color="#341270"
    hover
  >
    <v-card-text class="headline">
      "Light year is a measure of distance, not time.
      It is the distance that light travels during one Earth year
      (The speed of light is 300,000km/s, which means that this is a very,
      tremendously, amazingly huge distance of over 9.5 trillion km)"

    </v-card-text>

    <v-card-actions>
      <v-btn
        icon
        x-large
        class="mt4 teal"
        elevation="10"
        absolute
        right
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

</div>
</template>
