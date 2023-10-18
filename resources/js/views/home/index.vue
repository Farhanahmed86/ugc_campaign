<!-- <template>
  <div class="bg-black">

    <div class="container">
  <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">Pegasus</text>
    </symbol>

    <g class = "g-ants">
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
      <use xlink:href="#s-text" class="text-copy"></use>
    </g>
  </svg>
  <h1 class="text-center"><span style="font-weight: bold;">Copyright &copy; Nikud </span> </h1>
  <h5 class="text-center">The Project Of Kode Creaters</h5>
</div>

      <div class="text-center py-5 min-vh-50">
        <router-link to="/login" class="btn btn-primary">
          Go to dashboard <i class="fas fa-chevron-right"></i
        ></router-link>
      </div>
    </div>


</template> -->

<template>
  <div class="black">
    <div class="container">
      <svg viewBox="0 0 960 300">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">tester</text>
        </symbol>
        <g class="g-ants">
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
        </g>
      </svg>
      <h1 class="text-center" style="color:cyan"><span style="font-weight: bold;">Copyright &copy; Brand Revam
        </span>
      </h1>
      <h5 class="text-center" style="color:cyan"></h5>
    </div>

    <div class="text-center py-5 min-vh-50" >
      <router-link to="/login" class="btn btn-primary" style="background: linear-gradient(49deg, rgba(0,0,0,1) 0%, rgba(0,0,1,1) 7%, rgba(7,11,34,1) 32%, rgba(11,37,37,1) 73%, rgba(116,32,96,1) 100%);">
        Go to dashboard <i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {

  },
};
</script>

<style>

h1{
     color: #42B0A4;
     font-weight: bold;
  font-family: "arial";
  font-size: 2em;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: animtext 4s steps(80, end);
   transition: all cubic-bezier(0.1, 0.7, 1.0, 0.1);
}
h5{
     color: #42B0A4;
     font-weight: bold;
  font-family: "arial";
  font-size: 1em;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: animtext 4s steps(80, end);
   transition: all cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

@keyframes animtext {
  from {
      width: 0;
     transition: all 2s ease-in-out;
  }
}
.home-title {
  font-size: 4rem;
}
.masthead {
  background: linear-gradient(0deg, #4e73df 0%, #36b9cc 100%);
  padding-top: 0rem;
  padding-bottom: 0rem;
}
.min-vh-50 {
    min-height: 50vh !important;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat);

html, body{
  height: 100%;
  font-weight: 800;
  margin: 0;
  padding: 0;
  background-color: #d6d2d2;
}

body{


    background-color: #d6d2d2;
   background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 110vh !important;
  /* background-color: black; */
}
.black {
  /* background-color: black; */
  /* height: 100vh !important; */
  /* background-image: url('/images/Number Loops.gif');

   background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; */

}

svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 960px;
    height: 300px;
    margin: 0 auto;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1){
	stroke: #0e1622;
	animation-delay: -1;
}

.text-copy:nth-child(2){
	stroke: #42B0A4;
	animation-delay: -2s;
}

.text-copy:nth-child(3){
	stroke: #ffffff;
	animation-delay: -3s;
}

.text-copy:nth-child(4){
	stroke: #42B0A4;
	animation-delay: -4s;
}

.text-copy:nth-child(5){
	stroke: #0e1622;
	animation-delay: -5s;
}

@keyframes stroke-offset{
	100% {stroke-dashoffset: -35%;}
}
</style>
