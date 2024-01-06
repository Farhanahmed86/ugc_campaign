<template>
  <div class="containe">
      <div class="row" style="display: flex; flex-direction: column; justify-content: center">
          <div class="col">
              <h4 style="font-weight: 400; padding-bottom: 60px; color: #000;">Dashboard Brand</h4>
          </div>
          <div class="col-11">
              <div class="row brand">
          <div class="col-4">
              <div class="card shadow">
                  <div class="card-body" style="padding: 30px 20px ;">
                      <h5 class="card-title" >Influencer Campaign</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                      <div class="col text-center">
                      <button class="button2" @click="ugc('Influencer Campaign')">
                          To Start
                      </button>
                  </div>
                  </div>
              </div>
          </div> 
          <div class="col-4">
              <div class="card shadow">
                  <div class="card-body" style="padding: 30px 20px ;">
                      <h5 class="card-title">UGC Campaign</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                      <div class="col text-center">
                      <button class="button2" @click="ugc('UGC Campaign')">
                          To Start
                      </button>
                  </div>
                  </div>
              </div>
          </div> 
          <div class="col-4">
              <div class="card shadow">
                  <div class="card-body" style="padding: 30px 20px;">
                      <h5 class="card-title">Community Management</h5>
                      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                      <div class="col text-center">
                      <button class="button2">
                          To Start
                      </button>
                  </div>
                  </div>
              </div>
          </div> 
      </div>
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
              method: 'POST',
          }
      },
name: "Dashboard",
methods: {
    ugc(e){
        this.form.campaign = e;
        // this.$router.push('/NewCampaign')

        byMethod(this.method, 'api/campaigns' , this.form)
                    .then((res) => {
                        console.log(res.data.id)
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/NewCampaign/${res.data.id}`)
                          
                          
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
.card {
width:90%;
background: white;
border-radius: 10px;
transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.shadow {
box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
           0 0  0 2px rgb(190, 190, 190),
           0.3em 0.3em 1em rgba(0,0,0,0.3);
}
.card-title{
  color: #000;
  text-align: center;
  font-weight: bold;
}
.card-text{
  color: #000;
  text-align: center;
  padding-top: px;
  font-size: smaller;
}
.button2 {
display: inline-block;
transition: all 0.2s ease-in;
position: relative;
overflow: hidden;
z-index: 1;
color: #ffffff;
font-size: 18px;
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
</style>

