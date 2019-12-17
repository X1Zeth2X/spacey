<template>
  <v-card
    max-width="35rem"
    class="auto b-card w-90"
    color="#341270"
    elevation="10"
  >
    <v-card-text>
      <p>
        To get the full experience please enter your NASA Open API Key.
        Which can be acquired <a href="https://api.nasa.gov/" target="_blank">here</a>.
        (Currently placeholders, don't enter an API key yet.)
      </p>

      <v-text-field
        outlined
        label="NASA OpenAPI Key"
        v-model="apiKey"
      >
      </v-text-field>

      <v-btn
        block
        rounded
        large
        class="teal font-weight-black"
        @click="submitKey"
      >
        <v-icon>mdi-rocket</v-icon>
        Lift Off
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class APICard extends Vue {
  public apiKey: string = '';

  public submitKey() {
    // Save the API Key
    localStorage.setItem('apiKey', this.apiKey);
    // Clear input key
    this.apiKey = '';
    // Re-route to main NASA board.
    this.$router.push({
      name: 'main',
    });
  }
}
</script>
