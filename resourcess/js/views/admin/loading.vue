<template>
  <div class="container">
    <video autoplay muted loop id="bg-video">
      <source src="/images/bio.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import Vue from 'vue'
import { get, byMethod } from '../admin/components/lib/api'

export default {
  data() {
    return {}
  },
  name: "Dashboard",
  mounted() {
  
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}

#bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>