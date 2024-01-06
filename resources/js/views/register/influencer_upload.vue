<template>
  <div>
    <div  class="container">
    <div class="form" >
    <p style="font-size: 24px; font-weight: bold; color: black;" class="text-center">Shoot Content Make Cash </p>
    <p style="font-size: 15px; font-weight: 600; color: black; cursor: pointer;" class="text-center" >The importtant info will allow us to pair with the right brands </p>
    <!-- <div class="col" style="display: flex;
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

  
  </div> -->

  <div class="col" style="display: flex; justify-content: space-around; align-items: center;">
    <div 
      id="image-drop-area"
      @dragover="onDragOver"
      @drop="onDrop"
      @click="openFileDialog"
    >
      <input type="file" id="file-input" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*" multiple>
      <div class="image-drop-zones" >
        <i class="fas fa-plus"></i>
        <p style="font-size: small;">Drag and drop images here or click to browse</p>
      </div>
      <!-- <div class="image-preview" v-else>
        <img :src="url" v-for="(url, index) in imageUrls" :key="index" alt="Uploaded Image" />
      </div> -->
    </div>

    
  </div>
  <div class="row">

    <div class="image-previews"  v-if="imageUrls.length">
        <!-- <img :src="url" v-for="(url, index) in imageUrls" :key="index" alt="Uploaded Image" /> -->
        <img :src="getUrl(file)" v-for="(file, index) in files" :key="index" alt="Uploaded Media" />
      </div>
  </div>
  <br>
   





    <button class="submitss" @click="save">Suivant</button>
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

      files: [],
      imageUrls: [],
      videoPlaceholder: '/images/video-removebg-preview.png',
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
      const newFiles = Array.from(event.target.files);
      this.files = [...this.files, ...newFiles];
      this.updateImageUrls();
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(event) {
      event.preventDefault();
      const newFiles = Array.from(event.dataTransfer.files);
      this.files = [...this.files, ...newFiles];
      this.updateImageUrls();
    },
    openFileDialog() {
      this.$refs.fileInput.click();
    },
    updateImageUrls() {
      this.imageUrls = this.files.map(file => this.getUrl(file));
     
    },
    getUrl(file) {
      // Check if the file is a video
      if (file.type.startsWith('video/')) {
        return this.videoPlaceholder;
      }
      // For images, use the actual URL
      return URL.createObjectURL(file);
      
    },


    influencer(){

    },

    save(){









const formData = new FormData();
const filesArray = [];
    
    
    this.files.forEach((file, index) => {
     formData.append(`file${index}`, file);
      

        // const abcd = formData.append(`file${index}`, file)
        // let jhjh = 99
        // var abc= {
        //   jhjh,
        //   ...formData
        // }\
 

    // console.log(formData);
        
      });
      formData.append('id', this.company_id ); 

      // const payload = {
      //   formData: formData,
        
      // };

     

       


   





        byMethod(this.method, 'influencer_profile', formData)
            .then((res) => {


                if(res.data && res.data.saved) {

                  this.$router.push('/login').then(() => {
  // Use the setTimeout function to refresh the page after a short delay
  setTimeout(() => {
    location.reload();
  }, 10);
});
                  //  this.$router.push('/login')
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
<style>

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
  background-image: url(/images/Web.png) !important;
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

.submitss {
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

.submitss:hover {
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

<style scoped>

#image-drop-area {
  width: 100%;
    height: 150px;
    border: 2px dashed #121111;
    padding: 10px;
    text-align: center;
    /* border-radius: 50%; */
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border-radius: 0px !important;
}

.image-drop-zones {
    margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
}

.image-drop-zones i {
  font-size: 48px;
}

.image-previews img {
  max-width: 100% !important;
    min-height: 100px !important;
    /* min-width: 100%; */
    max-height: 100px !important;
 
}
.image-previews{
  display: flex;
    gap: 10px;
    flex-wrap: wrap;

}
</style>