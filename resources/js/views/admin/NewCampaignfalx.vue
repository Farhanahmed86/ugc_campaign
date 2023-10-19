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
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">morocco</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('ivory-coast')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">ivory-coast</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('spain')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf3.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">spain</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('tunisia')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf4.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">tunisia</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="flags('france')">
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
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;padding: 5px 85px 0px 85px;gap: 5px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/f2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Men</h5>
                  </div>
                </div>
            </div>
            <div class="col_3"> 
              <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="gender('Women')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;padding: 5px 85px 0px 85px;gap: 5px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/f1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Women</h5>
                  </div>
                </div>
            </div>
            <div class="col_3">
              <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="gender('Other')">
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
      <div class="col">
        <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
          <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
          </div>
          <div class="col">
            <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;padding-top: 30px;">
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc3.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc4.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc5.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc6.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/fc7.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">name</h5>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="campaign('name')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 18px 75px 0px 75p">
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

</style>