<template>
  <div >
    <!-- <Nav /> -->
    <div class="container style">

      <br>
      <br>
      <div
        class="row justify-content-center"
        v-if="verificationStatus"
      >
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div
            class="alert alert-dismissible fade show mt-5"
            v-bind:class="verificationAlertClasses"
            role="alert"
          >
            <div>{{ verificationMessage }}</div>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>

      <form class="form" @submit.prevent="login">
        <h2 class="text-center mb-4 mt-4">YALLAD</h2>
    <p style="font-size: x-large; font-weight: bold; color: black;">Get Start </p>
    <p class="message">Register your account</p>


    <label>
        <input
                          type="email"
                          class="input"

                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          v-model="email"
                        />
        <!-- <input required="" placeholder="" type="email" class="input"> -->
        <!-- <span>Email Address</span> -->
    </label>

    <label>
        <input
                          type="password"
                          class="input"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="password"
                        />
        <!-- <input required="" placeholder="" type="password" class="input">
        <span>Password</span> -->
    </label>

    <label>
        <input
                          type="password"
                          class="input"
                          id="exampleInputPassword"
                          placeholder="Confirm Password"
                          v-model="password_confirm"
                        />
        <!-- <input required="" placeholder="" type="password" class="input">
        <span>Password</span> -->
    </label>

 

    <button class="submit" @click = "registers()">Sign up</button>
    <p style="color: black; font-weight: bolder;">if you have an acount ? <a @click="register" style="color:gray; font-weight: bold;cursor: pointer; ;">SignIn</a> </p>
</form>
      <!-- <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-6 col-md-9 color">
          <div class="card o-hidden border-0 shadow-lg my-5 color">
            <div class="card-body p-0">

              <div class="row">

                <div class="col-lg-12">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome</h1>
                    </div>
                    <form class="user" @submit.prevent="login">
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
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <button class="text-center btn btn-primary btn-user btn-block"   @click = "login()">
                          login
                        </button>


                    </form>
                    <hr />
                    <div class="text-center">

                    </div>

                    <div class="text-center">

                    </div>

                    <div class="text-center">
                 <span>Accounts Management System</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "../../components/Nav";
import * as notify from "../../utils/notify.js";

export default {
  name: "Login",
  components: {
    Nav,
  },
  data() {
    return {
      email: "",
      password: "",
      password_confirm:"",
      first_name:"aaaa",
      last_name:"bbbb",
    
    };
  },
 
  methods: {
    register(){
        this.$router.push("/login")
    },
    async registers() {
      this.isLoading = true;
      try {
        var response = await axios.post("register", {
        
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
          first_name: this.first_name,
          last_name: this.last_name,
       



        });

        this.isLoading = false;

        if (response.data.must_verify_email) {
          this.$router.push(`/verify/user/${response.data.id}`);
        } else {
          let message =
            "Your account has been created successfully.";
          let toast = Vue.toasted.show(message, {
            theme: "toasted-primary",
            position: "top-right",
            duration: 5000,
          });
          this.$router.push(`/register/${response.data.id}`);
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
