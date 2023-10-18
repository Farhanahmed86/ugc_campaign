<template>
    <div class="main-form">
        <div class="container-1">
            <div class="form-type">
                <h2>What is your Company type?</h2>
                <p>Select one below</p>
            </div>
            <form>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <div class="card"><div class="card-body">DTC Brand</div></div>
                            <div class="card"><div class="card-body">Amazon seller</div></div>
                            <div class="card"><div class="card-body">Aggregator</div></div>
                            <div class="card"><div class="card-body">Agency</div></div>
                            <div class="card"><div class="card-body">Digital services</div></div>
                            <div class="card"><div class="card-body">Mobile app</div></div>
                            <div class="card"><div class="card-body">Other</div></div>
                        </div>
                    </div>
                </div>
                <div class="next-button">
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
<style>
.main-form {
    width: 100%;
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
    /* padding: 30px 0px 100px 0px; */
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
    padding-top: 4%;

}
button.btn.btn-dark {
    padding: 10px 150px;
    font-size: 20px;
    font-weight: 400;
    background-color: #000;
}
html,body{
    background-color:#ECEC4F ;
}
@media screen and (max-width: 600px){
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
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0px;
}
.form-group {
    width: 100%;
    padding: 10px 0px 50px 0px;
}
button.btn.btn-dark {
    padding: 5px 55px;
    font-size: 12px;
    font-weight: 400;
    background-color: #000;
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
