<template>
  <div>
    <div  class="container">
    <div class="form" >
      <br>
    <p style="font-size: 24px; font-weight: bold; color: black;" class="text-center">Do you have any socail accounts </p>
    <p style="font-size: 15px; font-weight: 900; color: black; cursor: pointer;" class="text-center" >The importtant info will allow us to pair with the right brands </p>
    
  <br>
        
        <label>
          <span class="lb">Instagram Handel(optional)</span>
            <input required="" placeholder="" type="text" class="input" v-model="form.instagram">
        </label>

        <label>
          <span class="lb">Tiktok Handel(optional)</span>
            <input required="" placeholder="" type="text" class="input" v-model="form.tiktok">
        
        </label>
  


        <label>
          <span class="lb">Youtube Channel URL(optional)</span>
            <input required="" placeholder="" type="text" class="input" v-model="form.youtube">
        </label>

        <label>
          <span class="lb">Portfolio Site (optional)</span>
            <input required="" placeholder="" type="text" class="input" v-model="form.website">
        </label>
        <br>
        <p style="font-size: 15px; font-weight: 900; color: black; cursor: pointer;" class="text-center" >Select the Categories that the best describe you as a creator </p>
<br>
        <!-- <div class="row">
          <div class="col-3">

            <img class="imgs" src="/images/games.jpg" />
            <span class="spans">Gaming</span>
          </div>
          <div class="col-3">
            
            <img class="imgs" src="/images/games.jpg"/>
            <span class="spans">Gaming</span>
</div>
<div class="col-3">
 

<img class="imgs" src="/images/games.jpg"/>
<span class="spans">Gaming</span>
</div>
<div class="col-3">
  

<img class="imgs" src="/images/games.jpg"/>
<span class="spans">Gaming</span>
</div>
        </div> -->
     

        <!-- <div class="row">
          <div class="col-3">

            <img class="imgs" src="/images/games.jpg"/>
            <span class="spans">Gaming</span>
          </div>
          <div class="col-3">
            
            <img class="imgs" src="/images/games.jpg"/>
            <span class="spans">Gaming</span>
</div>
<div class="col-3">
 

<img class="imgs" src="/images/games.jpg"/>
<span class="spans">Gaming</span>
</div>
<div class="col-3">
  

<img class="imgs" src="/images/games.jpg"/>
<span class="spans">Gaming</span>
</div>
        </div> -->
  

        <div class="row" style="display: flex;
    justify-content: space-evenly;">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="col-3  "
      @click="toggleSelect(index, item.label)"
      :class="{ 'selected': isSelected(index ,item.label) }"
    >
      <img class="imgs" :src="item.image" />
      <span class="spans">{{ item.label }}</span>
    </div>
  </div>
        <br>
<div class="col " style="display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: space-evenly;">

  <button class="submit" @click="save">Suivant</button>
</div>
    <br>

</div>

   
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

      items: [
        { image: '/images/games.jpg', label: 'Gaming' },
        { image: '/images/games.jpg', label: 'Sports' },
        { image: '/images/games.jpg', label: 'beauty' },
        { image: '/images/games.jpg', label: 'funny' },
        { image: '/images/games.jpg', label: 'Art' },
        { image: '/images/games.jpg', label: 'Nature' },
      ],
      imageUrl: null,
                file: null,
      countriestURL: '/api/search/countries',
      form: {},
      // form:[],
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
      selectedIndexes: [],
      selectedLabels: [],



      isLoading: false,
    };
  },
  created() {
    // console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;
   
    const companyId = this.$route.params.id;

  },
  computed: {
      selectedLabels() {
        return this.selectedIndexes.map(index => this.items[index].label);
      },
    },
  methods: {


    toggleSelect(index, label) {
        // Toggle selection by clicking on the image
        const selectedIndex = this.selectedLabels.indexOf(label);
        console.log(selectedIndex)
        if (selectedIndex === -1) {
          // Add to selection
          this.selectedLabels.push(label);
        } else {
          // Remove from selection
          this.selectedLabels.splice(selectedIndex, 1);
        }
        console.log(this.selectedLabels)
        this.form.selectedLabelsss = this.selectedLabels
      },
      isSelected(index, label) {
        // Check if the label is selected
        return this.selectedLabels.includes(label);
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
      console.log('abcd')

this.form.id = this.company_id;
// this.form.first_name = this.first_name;
// this.form.last_name = this.last_name;
// this.form.location = this.location;
// this.form.website = this.website;
// this.form.company = this.company;
// this.form.phone = this.phone;
// this.form.id = this.company_id;
// this.form.gender = this.gender;
// this.form.postal = this.postal;
// this.form.pay_email = this.pay_email;
// this.form.age = this.age;
// this.form.address = this.address;






this.form.auth_type = 'influener'


console.log(this.form);





        byMethod(this.method, 'influencer_details' , this.form)
            .then((res) => {


                if(res.data && res.data.saved) {
                    this.$router.push(`/influencer_uploads/${this.company_id}`);
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
  .col-3 {
      border: 1px solid #ddd;
      margin: 10px;
      padding: 10px;
      text-align: center;
      cursor: pointer;
    }

    .selected {
      background-color: #3498db; /* Change this to your desired selected color */
      color: #fff; /* Change this to your desired text color */
    }

.imgs{
  width: 100%;
    height: 120%;
    border-radius: 10px;

}

.spans{
  color: black;
    display: flex;
    align-content: stretch;
    justify-content: center;
    font-weight: bold;
    font-size: smaller;

}

.lb{
  color: black;
    font-weight: bold;
}

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
  width: 50%;
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