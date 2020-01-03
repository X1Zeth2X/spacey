<template>
<div id="about" class="tc-ns w-50-l w-60-md w-90 auto bg-space ph3">
  <h1 class="display-3 font-weight-bold mb2">
    About
  </h1>
  <p>What about it?</p>

  <v-card class="w-40-ns auto b-card tl">
    <v-card-text class="headline">
      This is for a cool friend of mine (KT)!
      <br>
      Also, props to Kyle for helping me design this.
      <br>
      <a href="https://www.vecteezy.com/free-vector/space" target="_blank">Space Vectors by Vecteezy</a>
      <br>
      Created by <a href="https://zethleonardo.netlify.com" target="_blank">Zeth Leonardo</a>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text>
      <strong>Some important information:</strong>
      <ul>
        <li>
          Our API is hosted on a free service with Heroku which means that it sleeps every 30 mins
          or so of inactivity. Which means our Dyno has to wake up when someone requests,
          which takes a couple of seconds.
        </li>
        <li>
          Main page's information is from NASA's Open APIs.
          While Facts takes information from Spacey's own API which sends data collected from
          other space information sites.
        </li>
      </ul>
    </v-card-text>
  </v-card>
</div>
</template>
