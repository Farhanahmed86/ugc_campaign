<template>
  <div>
   
    <div class="container">
     
    </div>
  </div>
</template>

<script>
import * as notify from "../../utils/notify.js";

import LoadingButton from "../../components/LoadingButton";

export default {
  name: "Forgot",
  components: {
  
    LoadingButton,
  },
  data() {
    return {
      email: this.email,
      isLoading: false,
      emailSent: false,
    };
  },
  created(){
    setTimeout(() => {
        // this.$router.push('/dashboard');
        this.$router.push('/dashboard').then(() => {
            window.location.reload(true);
          });
      }, 3000); 
  },
  methods: {
    async forgot() {
      this.isLoading = true;
      try {
        await axios.post("forgot", {
          email: this.email,
        });
        this.isLoading = false;
        this.emailSent = true;
      } catch (error) {
        notify.authError(error);
        this.isLoading = false;
      }
    },
  },
};
</script>
<style scoped>
/* .container {
  position: relative;
  width: 100%;
  height: 110vh;
} */

html, body{
  height: 100%;
  font-weight: 800;
  margin: 0;
  padding: 0;
}

.container {
  background-image: url('/images/Check mark animation.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 110vh !important;
  background-position: center center;
}

#bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  height: 110vh;
  object-fit: cover;
  z-index: -1;
}
</style>