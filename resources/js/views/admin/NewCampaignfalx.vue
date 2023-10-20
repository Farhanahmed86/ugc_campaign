<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dline-3.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="col">
      <h4 style="font-weight: 400;color: #000;padding-left: 25px;">New Campaign</h4>
    </div>
    <div class="row" style="display: flex;flex-direction: column;align-content: center;justify-content: center;gap: 50px; padding-top: 50px;">
      <div class="col">
        <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
          <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
          </div>
          <div class="col">
            <div class="row" style="display: flex;    justify-content: space-between;align-items: center;padding-top:30px">
              <div class="col-2">
                  <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('morocco')">
                    <div class="main-card"  :style="{ backgroundColor: bgColor1 }">
                    <div class="card-body" @click="datas('morocco' , 1)" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">morocco</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('ivory-coast')">
                  <div class="main-card" @click="datas('ivory-coast' , 2)" :style="{ backgroundColor: bgColor2 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">ivory-coast</h5>
                  </div>
                </div>
              </div>
              </div>
              <div class="col-2">
                  <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('spain')">
                    <div class="main-card" @click="datas('spain' , 3)" :style="{ backgroundColor: bgColor3 }">
                    <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf3.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">spain</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('tunisia')">
                  <div class="main-card" @click="datas('tunisia' , 4)" :style="{ backgroundColor: bgColor4 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf4.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">tunisia</h5>
                  </div>
                </div>
              </div>
              </div>
              <div class="col-2">
                  <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('france')">
                    <div class="main-card" @click="datas('france' , 5)" :style="{ backgroundColor: bgColor5 }">
                    <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf5.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">france</h5>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
          <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
          </div>
          <div class="col">
            <div class="row" style="display: flex;justify-content: center;align-items: center; padding: 10px 0px;">
                <div class="col-1"><input required="" placeholder="18" type="number" class="form-control" v-model="form.min_age"></div>
                
                <div class="col-1"><input required="" placeholder="65+" type="number" class="form-control" v-model="form.max_age"></div>
            </div>
            <div class="col">
              <h5 style="color: #000;font-weight: 400; text-align: center;">Genre</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex;justify-content: center;gap: 50px;align-items: center;padding-top: 10px;">
            <div class="col_3">
              <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="gender('Men')">
                <div class="short-card" @click="atas('ivory-coast' , 1)" :style="{ backgroundColor: bmColor1 }">  
                <div class="card-body" style="display: flex;flex-direction: column;align-items: center;padding: 5px 85px 0px 85px;gap: 5px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/f2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Men</h5>
                  </div>
                </div>
             </div>
            </div>
            <div class="col_3"> 
              <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="gender('Women')">
                <div class="short-card" @click="atas('ivory-coast' , 2)" :style="{ backgroundColor: bmColor2 }">  
                <div class="card-body" style="display: flex;flex-direction: column;align-items: center;padding: 5px 85px 0px 85px;gap: 5px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/f1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Women</h5>
                  </div>
                </div>
             </div>
            </div>
            <div class="col_3">
              <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="gender('Other')">
                 <div class="short-card" @click="atas('ivory-coast' , 3)" :style="{ backgroundColor: bmColor3 }">  
                <div class="card-body" style="display: flex;flex-direction: column;align-items: center;padding: 5px 85px 0px 85px;gap: 5px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/f3.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Other</h5>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
          <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
          </div>
          <div class="col">
            <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;padding-top: 30px;">
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 1)" :style="{ backgroundColor: boColor1 }"> 
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 2)" :style="{ backgroundColor: boColor2 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 3)" :style="{ backgroundColor: boColor3 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc3.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 4)" :style="{ backgroundColor: boColor4 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc4.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 5)" :style="{ backgroundColor: boColor5 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc5.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 6)" :style="{ backgroundColor: boColor6 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc6.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 7)" :style="{ backgroundColor: boColor7 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc7.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="long-card" @click="tas('ivory-coast' , 8)" :style="{ backgroundColor: boColor8 }">
                  <div class="card-body">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc8.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col" style="display: flex;justify-content: center;align-items: center;">
        <button style="padding: 8px 40px;border: none;background-color: #2A2c76;color: #fff;border-radius: 10px;" @click="save">Next</button>
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
            bgColor1:'white',
            bgColor2:'white',
            bgColor3:'white',
            bgColor4:'white',
            bgColor5:'white',

            bmColor1:'white',
            bmColor2:'white',
            bmColor3:'white',


            boColor1:'white',
            boColor2:'white',
            boColor3:'white',
            boColor4:'white',
            boColor5:'white',
            boColor6:'white',
            boColor7:'white',
            boColor8:'white',
            
              form: {
                min_age:'',
                max_age:''
              },
              method: 'POST',
              users_data:{},
              model: {
                  data: []
              }
          }
      },
name: "Dashboard",

created() {
    console.log(this.$route.params.id);
    this.campaigns = this.$route.params.id;
    

  },
methods: {
  tas(e , num){
        if(num == 1){
            this.boColor1 = '#ECEC4F'
            this.boColor2 = 'white'
            this.boColor3 = 'white'
            this.boColor4 = 'white'
            this.boColor5 = 'white'
            this.boColor6 = 'white'
            this.boColor7 = 'white'
            this.boColor8 = 'white'
        }
        if(num == 2){
            this.boColor1 = 'white'
            this.boColor2 = '#ECEC4F'
            this.boColor3 = 'white'
            this.boColor4 = 'white'
            this.boColor5 = 'white'
            this.boColor6 = 'white'
            this.boColor7 = 'white'
            this.boColor8 = 'white'
        }
        if(num == 3){
            this.boColor1 = 'white'
            this.boColor2 = 'white'
            this.boColor3 = '#ECEC4F'
            this.boColor4 = 'white'
            this.boColor5 = 'white'
            this.boColor6 = 'white'
            this.boColor7 = 'white'
            this.boColor8 = 'white'
        }
        if(num == 4){
            this.boColor1 = 'white'
            this.boColor2 = 'white'
            this.boColor3 = 'white'
            this.boColor4 = '#ECEC4F'
            this.boColor5 = 'white'
            this.boColor6 = 'white'
            this.boColor7 = 'white'
            this.boColor8 = 'white'
        }
        if(num == 5){
            this.boColor1 = 'white'
            this.boColor2 = 'white'
            this.boColor3 = 'white'
            this.boColor4 = 'white'
            this.boColor5 = '#ECEC4F'
            this.boColor6 = 'white'
            this.boColor7 = 'white'
            this.boColor8 = 'white'
        }
        if(num == 6){
            this.boColor1 = 'white'
            this.boColor2 = 'white'
            this.boColor3 = 'white'
            this.boColor4 = 'white'
            this.boColor5 = 'white'
            this.boColor6 = '#ECEC4F'
            this.boColor7 = 'white'
            this.boColor8 = 'white'
        }
        if(num == 7){
            this.boColor1 = 'white'
            this.boColor2 = 'white'
            this.boColor3 = 'white'
            this.boColor4 = 'white'
            this.boColor5 = 'white'
            this.boColor6 = 'white'
            this.boColor7 = '#ECEC4F'
            this.boColor8 = 'white'
        }
        if(num == 8){
            this.boColor1 = 'white'
            this.boColor2 = 'white'
            this.boColor3 = 'white'
            this.boColor4 = 'white'
            this.boColor5 = 'white'
            this.boColor6 = 'white'
            this.boColor7 = 'white'
            this.boColor8 = '#ECEC4F'
        }
      },
  atas(e , num){
        if(num == 1){
            this.bmColor1 = '#ECEC4F'
            this.bmColor2 = 'white'
            this.bmColor3 = 'white'
        }
        if(num == 2){
            this.bmColor1 = 'white'
            this.bmColor2 = '#ECEC4F'
            this.bmColor3 = 'white'
        }
        if(num == 3){
            this.bmColor1 = 'white'
            this.bmColor2 = 'white'
            this.bmColor3 = '#ECEC4F'
        }
      },
    datas(e , num){
        if(num == 1){
            this.bgColor1 = '#ECEC4F'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
        }
        if(num == 2){
            this.bgColor1 = 'white'
            this.bgColor2 = '#ECEC4F'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
        }

        if(num == 3){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = '#ECEC4F'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
        }

        if(num == 4){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = '#ECEC4F'
            this.bgColor5 = 'white'
        }

        if(num == 5){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = '#ECEC4F'
        }
      },

  campaign(e){
    this.form.campaign_type = e;
  },
  gender(e){
    this.form.gender = e;
  },

  flags(e){
    console.log(e)
    this.form.country = e;

  },

  save(){
    this.form.id = this.campaigns;
    byMethod(this.method, 'api/flages' , this.form)
                    .then((res) => {
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/Newid/${res.data.id}`)
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
.long-card{
  display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    height: 110px;
    padding-top: 10px;

}
.main-card{
  border-radius: 10px;
}
</style>