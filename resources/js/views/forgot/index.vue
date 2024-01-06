<template>
  <!-- <div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
         
            <div class="card-body p-0">
            
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div v-if="!emailSent">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-2">
                          Forgot Your Password?
                        </h1>
                        <p class="mb-4">
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form class="user" @submit.prevent="forgot">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            v-model="email"
                          />
                        </div>
                        <LoadingButton
                          text="Reset password"
                          v-bind:isLoading="isLoading"
                        />
                      </form>
                    </div>
                    <div v-else>
                      <span class="h4">
                        <i class="far fa-check-circle text-success"></i> Check
                        your email!
                      </span>
                    </div>
                    <hr />
                    <div class="text-center">
                      <router-link class="small" to="/register"
                        >Create an Account!</router-link
                      >
                    </div>
                    <div class="text-center">
                      <router-link class="small" to="/login"
                        >Already have an account? Login!</router-link
                      >
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
      <div v-if="!emailSent" class="form">
                      <div class="text-center ">
                        <h2 class="text-center mb-4 mt-4">YALLAD</h2>
                        
                        <!-- <h1 class="h4 text-gray-900 mb-2">
                          
                        </h1> -->
                        <h3 class="text-center mb-4 mt-4" style="color: black; font-size: x-large;">Forgot Your Password?</h3>
                        <p class="mb-4 message">
                          We get it, stuff happens. Just enter your email
                          address below and we'll send you a link to reset your
                          password!
                        </p>
                      </div>
                      <form class="user " @submit.prevent="forgot">
                      
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            v-model="email"
                          />
                        </div>
                        <LoadingButton
                          text="Reset password"
                          class="submit"
                          v-bind:isLoading="isLoading"
                        />
                      </form>
                   
                      <div class="text-center">
                      <router-link class="small" to="/signup"
                        >Create an Account!</router-link
                      >
                    </div>
                    <div class="text-center">
                      <router-link class="small" to="/login"
                        >Already have an account? Login!</router-link
                      >
                    </div>

                    </div>

                    <div v-else class="text-center">
                      <span class="h4" style="font-size: xxx-large;">
                        <i class="far fa-check-circle text-success"></i> Check
                        your email!
                      </span>
                    </div>

      <!-- <form class="form" @submit.prevent="login">
        <h2 class="text-center mb-4 mt-4">YALLAD</h2>
    <p style="font-size: x-large; font-weight: bold; color: black;">Welcome </p>
    <p class="message">Sign in to Your account in insense</p>


    <label>
        <input
                          type="email"
                          class="input"

                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="email"
                        />
      
    </label>

    <label>
        <input
                          type="password"
                          class="input"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="password"
                        />
     
    </label>

    <p style="color: black; font-weight: bolder; cursor: pointer;" @click="forgot">Forgot Password ?</p>

    <button class="submit" @click = "login()">Sign In</button>
    <p style="color: black; font-weight: bolder;">Don't have an acount ? <a @click="register" style="color:gray; font-weight: bold;cursor: pointer; ;">SignUp</a> </p>
</form> -->
     
    </div>
  </div>
</template>

<script>
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";

export default {
  name: "Forgot",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      email: this.email,
      isLoading: false,
      emailSent: false,
    };
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