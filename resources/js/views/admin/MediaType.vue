<template>
    <div class="contanir">
      <div class="col text-center" style="padding: 10px 0px 50px 0px;">
                <img
            src="/images/dline-5.png" style="width: 90%;height: 20px;"/>
            </div> 
      <div class="row" style="display: flex; flex-direction: column; justify-content: center; gap: 40px;">
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-7">
              <h4 style="color: #000; font-weight: bold;">Media Type</h4>
              <p style="color: #000;">Select the type of creative assest you want for this campaign.</p>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="card-3" @click="media('Video')">
                    Video
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-3" @click="media('Photo')">
                    Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-7">
              <h5 style="color: #000;">Posting to social media</h5>
              <p style="color: #000;">Specify if the content requested should be posted by creators on their channels</p>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="card-3" @click="socail('Posting')">
                    Posting
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-3" @click="socail('No Posting')">
                    No Posting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-5">
              <h5 style="color: #000;">Video Length</h5>
              <p style="color: #000;">Select the duration of your creative assest </p>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-6">
                  <div class="card-4" @click="lenght('20')">
                    <h6 style="padding: 8px 0px 0px 0px;">20</h6>
                    <p style="padding: 10px 0px 0px 0px ;">Sec</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-4" @click="lenght('40')">
                    <h6 style="padding: 8px 0px 0px 0px;">40</h6>
                    <p style="padding: 10px 0px 0px 0px;">Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-8">
              <h5 style="color: #000;">Raw / Ready to use</h5>
              <p style="color: #000;">Let the Creator know if you need the final (ready-to-use) version of the video only the raw footage 
or maybe both!</p>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-4">
                  <div class="card-3" @click="raw('Raw Footage')">
                    Raw Footage
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-3"  @click="raw('Ready to use Ad')">
                    Ready to use Ad
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-5" @click="raw('Ready to use Ad + Raw Footage')">
                    Ready to use Ad
                    + Raw Footage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
    
      <div class="col">
                      <button class="button2" @click="save">
                          SEND
                      </button>
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
                form: {},
                users_data:{},
                model: {
                    data: []
                },
                method:'POST',
            }
        },
  name: "Dashboard",

  created() {
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    

  },
  methods: {
          media(e){
            this.form.media_type = e;
          },

          socail(e){
            this.form.media_type_socail = e;
          },

          lenght(e){
            this.form.media_type_videolenght = e;
          },
          raw(e){
            this.form.media_type_raw = e;
          },


          save(){
     
     this.form.id = this.id;
     byMethod(this.method, '/api/ugc_product_media' , this.form)
                     .then((res) => {
                       
                         if(res.data && res.data.saved) {
                           this.$router.push(`/actiontype/${res.data.id}`)
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
.card-3{
  cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    text-align: center;
    padding: 20px 0px;
    color: black;
    font-size: 18px;
}
.card-4 {
  cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    text-align: center;
    padding: 0px 18px;
    color: black;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-5 {
  cursor: pointer;
  box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    text-align: center;
    padding: 8px 0px;
    color: black;
    font-size: 18px;
}
</style>
