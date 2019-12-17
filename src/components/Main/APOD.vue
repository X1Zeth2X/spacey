<template>
<div id="apod">
  <v-row align="start" justify="space-between">
    <v-col cols="12" xs="12" md="6">
      <v-card class="b-card" elevation="10" color="#835961">
        <v-card-title class="font-weight-bold">
          <v-icon class="mr2">mdi-weather-night</v-icon>
          Astronomy Picture of the Day
        </v-card-title>
        <a href="https://apod.nasa.gov/apod/image/1912/M77Bfield_NASA_1200.jpg" target="_blank">
        <v-img
          src="https://apod.nasa.gov/apod/image/1912/M77Bfield_NASA_960.jpg"
        ></v-img>

        </a>
      </v-card>
    </v-col>

    <v-col cols="12" md="5">
      <v-card class="b-card" color="#835961" elevation="10">
        <v-card-title class="font-weight-bold">
        <v-icon class="mr2">mdi-telescope</v-icon>
          Details
        </v-card-title>

      <v-card-text>
        <span class="white--text">The Magnetic Fields of Spiral Galaxy M77:</span>
        <br>
        "Can magnetic fields help tell us how spiral galaxies form and evolve?
        To find out, the HAWC+ instrument on NASA's airborne (747)
        SOFIA observatory observed nearby spiral galaxy M77.
        HAWC+ maps magnetism by observing polarized infrared light emitted by
        elongated dust grains rotating in alignment with the local magnetic field.
        The HAWC+ image shows that magnetic fields do appear to trace
        the spiral arms in the inner regions of M77,
        arms that likely highlight density waves in the inflowing gas,
        dust and stars caused by the gravity of the galaxy's oval shape.
        The featured picture superposes the HAWC+ image over diffuse X-ray emission
        mapped by NASA's NuSTAR satellite and visible light images taken by Hubble and the SDSS.
        M77 is located about 47 million light years away toward the constellation
        of the Sea Monster (Cetus)."
      </v-card-text>

      <v-divider></v-divider>

      <v-card-title class="font-weight-bold">
        <v-icon class="mr2">mdi-calendar</v-icon>
        Published on 2019-12-16
      </v-card-title>
      </v-card>
    </v-col>

  </v-row>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class APOD extends Vue {}
</script>
