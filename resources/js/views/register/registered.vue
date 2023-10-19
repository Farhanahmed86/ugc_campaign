<template>
    <div class="main-form">
        <div class="container-1">
            <div class="from-img" style="width: 100%; padding-bottom: 20px;">
                <img
            src="/images/line.png"/>
            </div>
            <div class="form-type">
                <h2>Quel est votre type d’entreprise ?</h2>
                <p>Sélectionnez l'une des options suivantes</p>
            </div>
            <!-- <form class="" > -->
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

    <button class="" @click="save">Suivant</button>

<!-- </form> -->
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
        form: {
      company: '',
      id: ''
    },
     company_id:'',
     company_type:'',
     method: 'POST',
   first_name:"",
   last_name:"",
   location:"",
   company:"",
   website:"",
   phone:"",




    };
  },
  created() {
    console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;
   
    // const companyId = this.$route.params.id;

  },
  methods: {

    

    save(){

        this.form.id = this.company_id;
        this.form.first_name = this.first_name;
        this.form.last_name = this.last_name;
        this.form.location = this.location;
        this.form.website = this.website;
        this.form.company = this.company;
        console.log(this.form);




                byMethod(this.method, 'registered' , this.company)
                    .then((res) => {


                        // if(res.data && res.data.saved) {
                        //     this.$router.push(`/register/company_category/${this.company_id}`);
                        // }
                    })
                    .catch((error) => {
                        if(error.response.status === 422) {
                            this.errors = error.response.data.errors
                        }
                        this.isProcessing = false
                    })

    },

  },
};
</script>
<style>
.main-form {
    width: 100%;
    background-color: #ECEC4F;
}
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
