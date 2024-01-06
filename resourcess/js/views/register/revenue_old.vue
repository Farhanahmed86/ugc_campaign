<template>
    <div class="main-form">
        <div class="container-1">
            <div class="form-type">
                <h2>Annual Revenue?</h2>
                <p>Select one below</p>
            </div>
            <form action="/action_page.php">
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <div class="card"><div class="card-body"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>$100k</div></div>
                            <div class="card"><div class="card-body">$100k - $1m</div></div>
                            <div class="card"><div class="card-body">$1m - $10m</div></div>
                            <div class="card"><div class="card-body">$1m - $10m</div></div>
                            <div class="card"><div class="card-body"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>$50m</div></div>
                        </div>
                    </div>
                </div>
                <div class="next-button">
                            <button type="button" class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
                            <button type="button" class="btn btn-dark">Next</button>
                        </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";

export default {
  name: "Register",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      isLoading: false,
    };
  },
  methods: {
    async register() {
      this.isLoading = true;
      try {
        var response = await axios.post("register", {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        });

        this.isLoading = false;

        if (response.data.must_verify_email) {
          this.$router.push(`/verify/user/${response.data.id}`);
        } else {
          let message =
            "Your account has been created successfully. Please Log in.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-primary",
            position: "top-right",
            duration: 5000,
          });
          this.$router.push("/login");
        }
      } catch (error) {
        notify.authError(error);
        this.isLoading = false;
      }
    },
  },
};
</script>
<style scoped>
html,body{
    background-color:#ECEC4F !important ;
}
.main-form {
    width: 100%;
    height: 100vh;
    background-color: #ECEC4F;
}
.container-1{
    width: 100%;
    max-width: 30%;
    margin: 0 auto;
    padding: 20px 0px;
}
.form-group {
    width: 100%;

}
.form-type {
    width: 100%;
}
.form-type h2{
    font-size: 25px;
    font-weight: bold;
}
.form-type p{
    font-size: 20px;
    font-weight:400;
}
.col {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.card-body {
    font-size: 18px;
    font-weight:400;
    padding: 8px 0px 8px 50px !important;
}
.next-button {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 35px;
    padding-top: 4%;
}
button.btn.btn-light {
    padding: 0px 16px;
    font-size: 20px;
    font-weight: bold;
}
button.btn.btn-dark {
    padding: 8px 100px;
    font-size: 20px;
    font-weight: 400;
    background-color: #000;
}
html,body{
    background-color:#ECEC4F ;
}
@media screen and (max-width: 600px){

    .main-form {
    padding-top: 30%;
}
    .form-type h2 {
    font-size: 14px;
    font-weight: bold;
}
    .form-type p {
    font-size: 12px;
    font-weight: 400;
}
.card-body {
    font-size: 12px;
    font-weight: 400;
    padding: 8px 0px 8px 16px !important;
}
.container-1 {
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    padding: 20px 0px;
}
.form-group {
    width: 100%;
    padding: 10px 0px 50px 0px;
}
button.btn.btn-dark {
    padding: 5px 40px;
    font-size: 12px;
    font-weight: 400;
    background-color: #000;
}
button.btn.btn-light {
    padding: 0px 10px;
    font-size: 12px;
    font-weight: bold;
}
.next-button {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.col {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
}
</style>

