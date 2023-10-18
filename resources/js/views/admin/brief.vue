<template>



    <div class="panel">




<!-- </div> -->
<div>
   <div class="panel-heading">
       <h3 class="panel-title" style="color: black;">Fill Out a Brief</h3>
       

       <br>
   </div>
   <div class="panel-body">
   
        <p style="    color: black;
    font-size: large;
    margin-left: 20px;
    font-weight: bold;">Brand Info </p>
    
  
<div class="row">
    <div class="col-1 text-right">
    <img src="/images/Ellipse.jpg" alt="Illustration Image">
</div>
<div class="col mt-2">

    <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
   
</div>
</div>
<br>
<br>

<p style="    color: black;
    font-size: large;
    margin-left: 20px;
    font-weight: bold;">Campaign Info </p>


<div class="row">
    <div class="col-8">
        <label>
         Campaign Name
        <input required="" placeholder="Enter a short name for your campaign.this is what creator will see" type="text" class="form-control" v-model="email" style="width: 700px;">
       
    </label>
    </div>

    <div class="col-4">
        <label>
            Campaign Privacy
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
    </label>
    </div>
</div>

<br>
<p style="    color: black;
    font-size: large;
    margin-left: 20px;
    font-weight: bold;">Campaign cover </p>

     <div class="col" style="margin-left: 25px;" >
        <div
      id="image-drop-area"
      @dragover="onDragOver"
      @drop="onDrop"
      @click="openFileDialog"
     
    >
    <input type="file" id="file-input" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*">
      <div class="image-drop-zone" v-if="!imageUrl"  >
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Drag and drop an image here</p>
      </div>
      <div class="image-preview" v-else>
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
    </div>

    <!-- <div class="image-drop-area">
    <label for="file-input" class="image-drop-zone" @dragover="onDragOver" @drop="onDrop" @click="openFileDialog">
      <input type="file" id="file-input" style="display: none" @change="handleFileChange" accept="image/*">
      <div v-if="!imageUrl">
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Click, drag, or drop an image here</p>
      </div>
      <div v-else class="image-preview">
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
    </label>
  </div> -->
  </div>
  <br>
    
    <div class="row">
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Campaign type</span>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
    </label>
    </div>

    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Plateform</span>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
    </label>
    </div>
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Campaign objective</span>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
    </label>
    </div>
</div>
<br>
<div class="row" style="margin-left: 40px;">
    <div class="card ">
        <div class="row">
        <div class="col-4 text-center ">
        <img src="/images/accounts.png" style="width: 70%;

    padding: 20px;">
    </div>
    <div class="col-6 text-center" style="    margin-top: 60px;">
        <h5 style="color: black;">Enable Influencers Whitelisting</h5>
        <p style="color: black;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit molestias totam numquam, ducimus iste voluptas quibusdam est quam, odio ipsa soluta quos officia commodi sequi quod. Molestias cupiditate quibusdam ipsa?</p>
        <div class="row">
    

    <div class="col-4"><button class="but">Upto 15 days </button></div>
    <div class="col-4"><button class="but">Upto 60 days</button></div>

    <div class="col-4"><button class="but">Upto 90 days</button></div>
<br>
</div>
    </div>
   
</div>

    </div>

</div>
<br>
<div class="row">
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Payment method</span>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
    </label>
    </div>

    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">How many creators do you want to hire</span>
            <div class="row">
                <div class="col-6"><input required="" placeholder="Min" type="number" class="form-control" v-model="email"></div>
                
                <div class="col-6"><input required="" placeholder="Max" type="number" class="form-control" v-model="email"></div>
            </div>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
      
       
    </label>
    </div>
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Payment</span>
        <input required="" placeholder="Enter price " type="text" class="form-control" v-model="email" style="width: 300px;">
      
       
    </label>
    </div>
</div> 
<br>
<div class="row">
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Campaign timming</span>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <select class="form-control" placeholder="Socail media" v-model="selectedOption" style="width: 300px;">

<option value="option1">Option 1</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
    </label>
    </div>

    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Start Date</span>
        <input required="" placeholder="" type="date" class="form-control" v-model="email" style="width: 300px;">
      
       
    </label>
    </div>
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">End Date</span>
        <input required="" placeholder="" type="date" class="form-control" v-model="email" style="width: 300px;">
        
       
    </label>
    </div>
</div>
<br>
<span style="color: black; margin-bottom: 10px; font-weight: 600;   margin-left: 20px;">Product Description</span>
<div class="col">
    <textarea class="area"
      v-model="text"
      rows="5"
      cols="30"
      placeholder="    Describe the product you promoting."
    ></textarea>
</div>
<br>
<h5 style="    color: black;
    font-size: large;
 
    font-weight: bold;">Desired Creators Profile </h5>
    <p >Desired profile conditions</p>
<br>
<div class="row">
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Format </span>
        <!-- <input required="" placeholder="" type="text" class="form-control" v-model="email"> -->
        <input required="" placeholder="limited" type="text" class="form-control" v-model="email" style="width: 300px;">
       
    </label>
    </div>

    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">Placement</span>
        <input required="" placeholder="Stories" type="text" class="form-control" v-model="email" style="width: 300px;">
      
       
    </label>
    </div>
    <div class="col-4">
        <label>
            <span style="color: black; margin-bottom: 10px; font-weight: 600;">#creatives</span>
        <input required="" placeholder="" type="number" class="form-control" v-model="email" style="width: 150px;">
       
       
    </label>
    </div>
</div>
<br>
<div class="col">
    <textarea class="areas"
      v-model="text"
      rows="5"
      cols="30"
      placeholder=""
    ></textarea>
</div>

<br>
<br>
<div class="col text-right">
    <button style="border: none;
    color: white;
    background-color: rgb(43, 40, 40);
    padding: 5px;
    width: 100px;
    border-radius: 7px;">Send</button>
</div> 
<br>
    </div>

</div>
</div>

</template>

<script>

import Vue from 'vue'

    import { get , byMethod} from '../admin/components/lib/api'
    import Typehead from '../admin/components/typehead/Typehead.vue'

export default {
    components: { Typehead },
  data () {
            return {
                imageUrl: null,
                file: null,
                form: {},
                countriesURL:'/api/search/countries',
                aboutURL:'/api/search/about',

                countries:{},
                users_data:{},
                model: {
                    data: []
                }
            }
        },
  name: "Dashboard",


//   beforeRouteEnter(to, from, next) {
//             get('/api/dashboard', to.query)
//                 .then((res) => {
//                     next(vm => vm.setData(res))

//                 })
//         },
//         beforeRouteUpdate(to, from, next) {
//             get('/api/dashboard', to.query)
//                 .then((res) => {
//                     this.setData(res)
//                     next()

//                 })
//         },

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

            brief(){
                this.$router.push('')
            },


           
            detailsPage(item) {
                this.$router.push(`/dashboard/${item.id}`)
            },
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                //this.page = this.model.current_page

                // console.log(res.data)
            },


        }
};
</script>

<style scoped>
.buttons {
    background-color: #ffffff;
 width: 24em;
 height: 10em;
 border-radius: 15px;
 font-size: 15px;
 font-family: inherit;
 border: none;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}

.but{
    border: none;
    padding: 6px 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    font-size: small;
    font-weight: 600;
}
.area{
    background-color: #ffffff;
    width: 90%;
    margin-left: 30px;
    border-radius: 15px;
    font-size: 15px;
    font-family: inherit;
    border: none;
    /* border: 1px solid; */
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 2px 2px 4px #c5c5c5, -2px -2px 4px #efeded;
}

.areas{
    background-color: #ffffff;
    width: 90%;
    margin-left: 30px;
    height: 16em;
    border-radius: 15px;
    font-size: 15px;
    font-family: inherit;
    border: none;
    /* border: 1px solid; */
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 2px 2px 4px #c5c5c5, -2px -2px 4px #efeded;
}
.card {
    background-color: #ffffff;
 width: 90%;

 border-radius: 15px;
 font-size: 15px;
 font-family: inherit;
 border: none;
 border: 2px solid;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}


#image-drop-area {
    width: 90%;
    height: 250px;
  border: 2px dotted #ccc;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}

.image-drop-zone {
    margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #666;
}

.image-drop-zone i {
  font-size: 48px;
}

.image-preview img {
  max-width: 88%;
  max-height: 200px;
}



</style>
