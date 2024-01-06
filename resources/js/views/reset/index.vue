<template>
<!-- <div>
  <Nav />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
      
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Reset your password</h1>
                  </div>
                  <form class="user" @submit.prevent="reset">
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        v-model="password_confirm"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Reset Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->


<div >
    <!-- <Nav /> -->
    <div class="container style">

      <br>
      <br>
      <div  class="form">
                      <div class="text-center ">
                        <h2 class="text-center mb-4 mt-4">YALLAD</h2>
                        
                        <!-- <h1 class="h4 text-gray-900 mb-2">
                          
                        </h1> -->
                        <h3 class="text-center mb-4 mt-4" style="color: black; font-size: x-large;">Reset your password</h3>
                      
                      </div>
                      <form class="user" @submit.prevent="reset">
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        v-model="password_confirm"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary btn-user btn-block submit"
                    >
                      Reset Password
                    </button>
                  </form>
                   

                    </div>


     
    </div>
  </div>
</template>

<script>
import axios from "axios"
import * as notify from "../../utils/notify.js"
import Nav from '../../components/Nav'

export default {
  name: "Reset",
  components: {
    Nav
  },
  data() {
    return {
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async reset() {
      try {
        const response = await axios.post("reset", {
          password: this.password,
          password_confirm: this.password_confirm,
          token: this.$route.params.token,
        });

        let toast = this.$toasted.show("Password updated successfully", {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000,
        });

        this.$router.push("/login");
      } catch (error) {
        notify.authError(error);
      }
    },
  },
};
</script>


<style>
html, body{

background-color: #f5f5f4;
}
.form {
    /* max-width: 350px;

  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
top:10%;
  left: 35%;
  position: absolute;
}

.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  /* animation: pulse 1s linear infinite; */
}

.message, .signin {
  color: rgba(15, 15, 15, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 150%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
  border: none;
  outline: none;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: rgb(35, 36, 37);
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}


</style>