<template>
  <div>
    <div  class="container">
    <form class="form" @submit.prevent="register">
    <p style="font-size: 24px; font-weight: bold; color: black;" class="text-center">Inscription comme une marque</p>
    <p style="font-size: 15px; font-weight: 600; color: black;" class="text-center">Vous êtes un créateur de contenu ?<span style="color: rgb(10, 199, 199); font-weight: bold;">Inscrivez-vous ici</span> </p>

        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input" v-model="first_name">
            <span>Prénom</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input" v-model="last_name">
            <span>Nom</span>
        </label>
    </div>

    <label>
        <input required="" placeholder="" type="text" class="input" v-model="location">
        <span>Votre position</span>
    </label>

    <label>
        <input required="" placeholder="" type="text" class="input" v-model="company">
        <span>Nom de l'entreprise</span>
    </label>
    <label>
        <input required="" placeholder="" type="text" class="input" v-model="website">
        <span>Votre site web</span>
    </label>
    <label>
        <input required="" placeholder="" type="phone" class="input" v-model="phone">
        <span>Numéro de téléphone</span>
    </label>
    <div class="form-group " style="margin-top: 5px;">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" style="color: black; font-size: medium; font-weight: bold;" for="customCheck"
                            >J'ai lu et j'accepte les conditions d'utilisation et la politique de confidentialité de Yallad</label
                          >
                          </div>
                          </div>

    <button class="submit" @click="save">Suivant</button>

</form>

    <!-- <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">

          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user" @submit.prevent="register">
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                        v-model="first_name"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                        v-model="last_name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      v-model="email"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        v-model="password"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        v-model="password_confirm"
                      />
                    </div>
                  </div>
                  <LoadingButton
                    text="Register Account"
                    v-bind:isLoading="isLoading"
                  />
                </form>
                <hr />
                <div class="text-center">
                  <router-link class="small" to="/forgot-password"
                    >Forgot Password?</router-link
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
    </div> -->
  </div>
  </div>
</template>

<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";
import { get , byMethod} from '../admin/components/lib/api'

export default {
  name: "Register",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      form: {},
      method: 'POST',
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      location: "",
      company: "",
      website: "",
      phone:"",



      isLoading: false,
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;
   
    const companyId = this.$route.params.id;

  },
  methods: {

    save(){

this.form.id = this.company_id;
this.form.first_name = this.first_name;
this.form.last_name = this.last_name;
this.form.location = this.location;
this.form.website = this.website;
this.form.company = this.company;
this.form.phone = this.phone;
this.form.id = this.company_id;


console.log(this.form);




        byMethod(this.method, 'registered' , this.form)
            .then((res) => {


                if(res.data && res.data.saved) {
                    this.$router.push(`/register/company/${this.company_id}`);
                }
            })
            .catch((error) => {
                if(error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
                this.isProcessing = false
            })

},
    // async register() {
    //   this.isLoading = true;
    //   try {
    //     var response = await axios.post("registered", {
    //       first_name: this.first_name,
    //       last_name: this.last_name,
    //       email: this.email,
    //       password: this.password,
    //       password_confirm: this.password_confirm,
    //       location: this.location,
    //       website: this.website,
    //       company: this.company,



    //     });

    //     this.isLoading = false;

    //     if (response.data.must_verify_email) {
    //       this.$router.push(`/verify/user/${response.data.id}`);
    //     } else {
    //       let message =
    //         "Your account has been created successfully.";
    //       let toast = Vue.toasted.show(message, {
    //         theme: "toasted-primary",
    //         position: "top-right",
    //         duration: 5000,
    //       });
    //       this.$router.push(`/register/company/${response.data.id}`);
    //     }
    //   } catch (error) {
    //     notify.authError(error);
    //     this.isLoading = false;
    //   }






      
    // },
  },
};
</script>
<style>
html, body{

  /* background-color: #ECEC4F; */
 background-position: center;
  background-image: url(/images/Web.png);
  background-size: cover;
}


.form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    max-width: 400px;
    /* background-color: #ECEC4F; */
    /* padding: 20px; */
    border-radius: 20px;
    top: 6%;
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
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
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
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 7px 10px 15px 10px;
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
  background-color:#2A2C76;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  transform: .3s ease;
}

.submit:hover {
  background-color:#2A2C76;
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