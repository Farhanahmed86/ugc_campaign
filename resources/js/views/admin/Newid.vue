<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/id_line.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center; gap: 40px;">
      <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
      </div>
      <div class="col">
        <div class="row" style="display: flex;justify-content: center;align-items: center;">
          <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Instagram')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/instagram.png" style="width: 50%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Instagram</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Tiktok')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/tiktok.png" style="width: 50%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Tiktok</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Facebook')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/facebook (1).png" style="width: 50%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Facebook</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"  @click="nameset('Snapchat')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/social.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Snapchat</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Linkedln')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/linkedin.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Linkedln</h5>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div class="col" v-if="name == 'Instagram' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
        </div>
      </div>


      <div class="col" v-if="name == 'Tiktok' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          
        </div>
      </div>

      <div class="col" v-if="name == 'Facebook' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
         
          
        </div>
      </div>

      <div class="col" v-if="name == 'Snapchat' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
         
          
        </div>
      </div>

      <div class="col" v-if="name == 'Linkedln' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
          </div>
          
         
          
        </div>
      </div>
      <br>
      <br>
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
            name:"",
              form: {},
              users_data:{},
              model: {
                  data: []
              },
              method: 'POST',
          }
      },
name: "Dashboard",

created() {
    console.log(this.$route.params.id);
    this.campaign = this.$route.params.id;
    

  },
methods: {

  nameset(e){
    this.name = e;
    this.form.plateform = e ;

  },

  plate(e){
      this.form.plateform_type = e;
  },
  save(){
    this.form.id = this.campaign;
    byMethod(this.method, 'api/platefrom' , this.form)
                    .then((res) => {
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/ActionTypes/${res.data.id}`)
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