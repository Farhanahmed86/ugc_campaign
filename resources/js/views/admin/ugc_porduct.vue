<template>

  <div class="contanir">
    
      <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dline-2.png" style="width: 90%;height: 20px;"/>
          </div>   
          <div class="row">
              <div class="col-6">
                <div class="form-type" style="width: 40%; padding-bottom: 25px;">
                  <h4 style="font-weight: 400;color: #000;border-bottom: 1px solid #2A2C76;">Add UGC Product</h4>
                </div>
                  
                     <div class="form-group">
                          <label for="Product Name*"  style="color: #000; font-size: 18px;" >Product Name*</label>
                          <input type="name" class="form-control" v-model="form.product_name" id="name" aria-describedby="" placeholder="" style= "border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 5px;">
                      </div>
                      <div class="form-group">
                          <label for="Product Name*" style="color: #000; font-size: 18px;">Product Description*</label>
                          <textarea class="form-control" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;border: none; border-radius: 10px; width:100%%"
                              id="textarea"
                              v-model="form.product_description"
                              rows="4"
                              cols="50"
                          placeholder=""></textarea>
                      </div>
                      <div class="form-group">
                          <label for="Product Name*" style="color: #000; font-size: 18px;">Start of Application*</label>
                          <input type="name" class="form-control" v-model="form.start_of_application" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 5px;">
                      </div>
                      <div class="form-group">
                          <label for="Product Name*" style="color: #000; font-size: 18px;">End of Application*</label>
                          <input type="name" class="form-control" v-model="form.end_of_application" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 5px;">
                      </div>
                      <div class="form-group">
                      <label for="Product Name*" style="color: #000; font-size: 18px;">Number of products you would like to offer*</label>
                          <input type="name" class="form-control" v-model="form.number_of_product" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 5px;">
                      </div>
                      <div class="col">
                      <button class="button2" @click="save">
                          SEND
                      </button>
                  </div>
                  
              </div>
              <div class="col-6">
                <br>
                <br>
                <br>
                <p style="color: #000; font-size: 18px;"> Image of your Product</p>
                <div
      id="image-drop-area"
      @dragover="onDragOver"
      @drop="onDrop"
      @click="openFileDialog"
     
    >
    <input type="file" id="file-input" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*">
      <div class="image-drop-zone" v-if="!imageUrl"  >
      
        <p>Drag and drop an image here</p>
      </div>
      <div class="image-preview" v-else>
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
    </div>
<br>
    <p style="color: #000;">How do you want to distribute your project?</p>
              </div>
          </div>
      </div>
</template>

<script>
import chartAreaDemo from "../../chart/demo/chart-area-demo";
import chartPieDemo from "../../chart/demo/chart-pie-demo";
import Vue from 'vue'

  import { get , byMethod} from '../admin/components/lib/api'
  import Typehead from '../admin/components/typehead/Typehead.vue'

export default {
  components: { Typehead },
data () {
          return {
            method: 'POST',
            imageUrl: null,
                file: null,
              form: {},
              users_data:{},
              model: {
                  data: []
              }
          }
      },
name: "Dashboard",

created() {
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    

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

    save(){
      const formData = new FormData();
    formData.append('image', this.file); // 'image' should match the field name in your Laravel controller
    formData.append('product_name', this.form.product_name);
    formData.append('product_description', this.form.product_description);
    formData.append('start_of_application', this.form.start_of_application);
    formData.append('end_of_application', this.form.end_of_application);
    formData.append('number_of_product', this.form.number_of_product);
    formData.append('id', this.id);





    // this.form.id = this.id;
    byMethod(this.method, '/api/ugc_product' , formData)
                    .then((res) => {
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/ProductDelivery/${res.data.id}`)
                            // this.success(res)
                        }
                    })
                    .catch((error) => {
                        if(error.response.status === 422) {
                            this.errors = error.response.data.errors
                        }
                        this.isProcessing = false
                    })
                }
}
};
</script>

<style scoped>
.button2 {
display: inline-block;
transition: all 0.2s ease-in;
position: relative;
overflow: hidden;
z-index: 1;
color: #ffffff;
font-size: 16px;
font-weight: 200;
padding: 5px 30px ;
border-radius: 0.5em;
background:#2A2C76;
border: 1px solid #e8e8e8;
box-shadow: 6px 6px 12px #c5c5c5,
           -6px -6px 12px #ffffff;
}

.button2:active {
color: #666;
box-shadow: inset 4px 4px 12px #c5c5c5,
           inset -4px -4px 12px #ffffff;
}

.button2:before {
content: "";
position: absolute;
left: 50%;
transform: translateX(-50%) scaleY(1) scaleX(1.25);
top: 100%;
width: 140%;
height: 180%;
background-color: rgba(0, 0, 0, 0.05);
border-radius: 50%;
display: block;
transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
z-index: -1;
}

.button2:after {
content: "";
position: absolute;
left: 55%;
transform: translateX(-50%) scaleY(1) scaleX(1.45);
top: 180%;
width: 160%;
height: 190%;
background-color:#ECEC4F;
border-radius: 50%;
display: block;
transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
z-index: -1;
}
.button2:hover {
color: #000;
border: 1px solid #ECEC4F;
}

.button2:hover:before {
top: -35%;
background-color: #ECEC4F;
transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
top: -45%;
background-color: #ECEC4F;
transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

#image-drop-area {
    width: 90%;
  height: 200px;
  border: 2px dashed #ccc; /* Use dashed instead of dotted */
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
  max-height: 150px;
}

</style>