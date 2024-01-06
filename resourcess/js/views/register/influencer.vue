<template>
  <div>
    <div  class="container">
    <form class="form" @submit.prevent="register">
    <p style="font-size: 24px; font-weight: bold; color: black;" class="text-center">Shoot Content Make Cash </p>
    <p style="font-size: 15px; font-weight: 600; color: black; cursor: pointer;" class="text-center" >The importtant info will allow us to pair with the right brands </p>
    <div class="col" style="display: flex;
    justify-content: space-around; align-items: center;" >
        <div 
      id="image-drop-area"
      @dragover="onDragOver"
      @drop="onDrop"
      @click="openFileDialog"
     
    >
    <input  type="file" id="file-input" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*">
      <div class="image-drop-zone" v-if="!imageUrl"  >
        <i class="fas fa-plus"></i>
        <p style="    font-size: small;">Drag and drop an image here</p>
      </div>
      <div class="image-preview" v-else>
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
    </div>

  
  </div>
  <br>
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

    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input" v-model="address">
            <span>Address 1</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input" v-model="phone">
            <span>Phone Num</span>
        </label>
    </div>
    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input" v-model="postal">
            <span>Postal Code</span>
        </label>

        <label>
            <!-- <input required="" placeholder="" type="text" class="input" v-model="last_name"> -->
            <typehead   :url="countriestURL" :initialize="form.countries"
                            @input="onCountry($event)" style="    min-width: 200px;"/>
            
        </label>
    </div>

    <div class="flex">
        <label>
          <typehead   :url="'/api/search/city/?id='+ form.countries_id" :initialize="form.city"
                            @input="onCity($event)" style="    min-width: 200px;"/>
            <!-- <input required="" placeholder="" type="text" class="input" v-model="first_name">
            <span>City</span> -->
        </label>

        <label>
          <typehead   :url="'/api/search/states/?id='+ form.countries_id" :initialize="form.states"
                            @input="onStates($event)" style="    min-width: 200px;"/>
        </label>
    </div>

   

    <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input" v-model="gender">
            <span>Gender</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input" v-model="pay_email">
            <span>Paypal Email</span>
        </label>
    </div>
    <div class="">
    <label>
        <input required="" placeholder="" type="date" class="input" v-model="age" style="min-width: 400px;">
        <span></span>
    </label>
    </div>
    <p style="font-size: 15px; font-weight: 600; color: black; cursor: pointer;" class="text-center" >What Categories are you most comfortable with?(optional) </p>


<!-- 
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
    </label> -->
    <!-- <div class="form-group " style="margin-top: 5px;">
                        <div class="custom-control custom-checkbox small">
                          <label class="custom-control-label" style="color: black; font-size: medium; font-weight: bold;" for="customCheck"
                            >
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          </label
                          >

                          
                          </div>
                          
                          </div> -->
                          <div class="row">
<div class="col">
                          <div class="form-check form-check-inline ">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label radio_lable" for="inlineCheckbox1">Adobde photoshop</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label radio_lable" for="inlineCheckbox2">Adobde photoshop</label>
</div>
</div>
<div class="col">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label radio_lable" for="inlineCheckbox2">After Effects</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label radio_lable" for="inlineCheckbox2">After Effects</label>
</div>
</div>




</div>

<div class="row">
<div class="col">
                          <div class="form-check form-check-inline ">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label radio_lable" for="inlineCheckbox1">Adobde photoshop</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label radio_lable" for="inlineCheckbox2">Adobde photoshop</label>
</div>
</div>
<div class="col">
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label radio_lable" for="inlineCheckbox2">After Effects</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label radio_lable" for="inlineCheckbox2">After Effects</label>
</div>
</div>




</div>

    <button class="submit" @click="save">Suivant</button>
    <br>

</form>

   
  </div>
  </div>
</template>

<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";
import { get , byMethod} from '../admin/components/lib/api'
import Typehead from '../admin/components/typehead/Typehead.vue'

export default {
  
  name: "Register",
  components: {
    Nav,
    LoadingButton,
    Typehead
  },
  data() {
    return {
      imageUrl: null,
                file: null,
      countriestURL: '/api/search/countries',
      form: {},
      method: 'POST',
      first_name: "",
      last_name: "",
      pay_email: "",
      address:"",
      age:"",
      postal:"",
      gender:"",
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
    handleFileChange(event) {
      this.file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
    },
    openFileDialog() {
        
    //   document.getElementById('file-input').click();
    this.$refs.fileInput.click();
    },

    onStates(e){
                
                const states = e.target.value
                Vue.set(this.form, 'states', states)
                Vue.set(this.form, 'states_name', states.name)

                Vue.set(this.form, 'states_id', states.id)
            },

    onCity(e){
                
                const city = e.target.value
                Vue.set(this.form, 'city', city)
                Vue.set(this.form, 'city_name', city.name)

                Vue.set(this.form, 'city_id', city.id)
            },
          

    onCountry(e) {
                
                const countries = e.target.value
                Vue.set(this.form, 'countries', countries)
                Vue.set(this.form, 'countries_name', countries.name)

                Vue.set(this.form, 'countries_id', countries.id)
            },
          

    influencer(){

    },

    save(){

this.form.id = this.company_id;
this.form.first_name = this.first_name;
this.form.last_name = this.last_name;
this.form.location = this.location;
this.form.website = this.website;
this.form.company = this.company;
this.form.phone = this.phone;
this.form.id = this.company_id;
this.form.gender = this.gender;
this.form.postal = this.postal;
this.form.pay_email = this.pay_email;
this.form.age = this.age;
this.form.address = this.address;






this.form.auth_type = 'influencer'


console.log(this.form);

const formData = new FormData();
    formData.append('image', this.file); 
    formData.append('id', this.form.id);
    formData.append('first_name', this.form.first_name);
    formData.append('last_name', this.form.last_name);
    formData.append('location', this.form.location);
    formData.append('website', this.form.website);
    formData.append('company', this.form.company);
    formData.append('phone', this.form.phone);
    formData.append('gender', this.form.gender);
    formData.append('postal', this.form.postal);
    formData.append('pay_email', this.form.pay_email);
    formData.append('age', this.form.age);
    formData.append('address', this.form.address);
    formData.append('countries', this.form.countries_name);
    formData.append('city', this.form.city_name);
    formData.append('states', this.form.states_name);
    formData.append('auth_type', this.form.auth_type);





        byMethod(this.method, 'registered' , formData)
            .then((res) => {


                if(res.data && res.data.saved) {
                    this.$router.push(`/influencer_accounts/${this.company_id}`);
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
    //         "Your countries has been created successfully.";
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
<style >

.form-control {
    display: block;
    width: 100%;
    height: calc(2em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #6e707e;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #d1d3e2;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-check-inline {
    display: inline-flex;
    align-items: center;
    padding-left: 30px;
    margin-right: 0.75rem;}
html, body{

  /* background-color: #ECEC4F; */
 background-position: center;
  background-image: url(/images/Web.png);
  background-size: cover;
}

.radio_lable{
  position: relative;
    color: black;
    font-size: smaller;
    font-weight: bold;}


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

#image-drop-area {
  width: 45%;
    height: 165px;
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  background-color: white
}

.image-drop-zone {
    margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
}

.image-drop-zone i {
  font-size: 48px;
}

.image-preview img {
  max-width: 100%;
    min-height: 125px;
  min-width: 100%;
  max-height: 125px;
  border-radius: 50%;
}

</style>