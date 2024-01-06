<template>
    <div class="contanir">
      <div class="col text-center" style="padding: 10px 0px 50px 0px;">
                <img
            src="/images/dline-3.png" style="width: 90%;height: 20px;"/>
            </div>  
      <div class="row" style="    display: flex; flex-direction: column; align-items: flex-start;">
        <div class="col">
          <h4 style="color: #000; font-weight:bold;">Livraison du produit</h4>
          <p style="font-size: 14px; color: #000;">Choisissez comment vous souhaitez que le créateur reçoit le produit.</p>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-4">
              <div class="card-5" @click="delivery('Livraison')">
                <div class="product-card" @click="product('ivory-coast' , 1)" :style="{ backgroundColor: dpColor1 }">
                  Livraison
              </div> 
            </div> 
            </div>
            <div class="col-4">
              <div class="card-5" @click="delivery('Sur le point de vente')">
                <div class="product-card" @click="product('ivory-coast' ,2)" :style="{ backgroundColor: dpColor2 }">
                  Sur le point de vente
              </div>
            </div>
            </div>
            <div class="col-4">
              <div class="card-5" @click="delivery('Code Promo')">
                <div class="product-card" @click="product('ivory-coast' , 3)" :style="{ backgroundColor: dpColor3 }">
                  Code Promo
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; align-items: flex-start; padding-top: 30px;">
        <div class="col-7">
          <h5 style="color: #000;">Description</h5>
          <p style="font-size: 14px; color: #000;">Indiquer quel problème votre produit/service résout et de quelle manière vous le faites. Dites nous quels sont vos avantages commerciales / concurrentielle</p>
        </div>
        <div class="col-8">
            <div class="row" style="display: flex; flex-direction: column;padding-left: 15px; gap: 20px;">
              <textarea class="form-control" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;border: none; border-radius: 10px; width:100%%"
                              id="textarea"
                              v-model="form.delivery_description"
                              rows="4"
                              cols="50"
                          placeholder=""></textarea>
            </div> 
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; justify-content: center; padding-top: 30px;">
        <div class="col">
          <h6 style="color: #000;">Lien vers votre page</h6>
          <p style="color: #000;">insérez le lien vers votre site web</p>
        </div>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" v-model="form.delivery_product_url" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 5px;">
          </div>
        </div>
      </div>
      <br>
      <br>
      <div class="col">
                      <button class="button2" @click="save">
                        Suivant
                      </button>
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
              
            dpColor1:'white',
            dpColor2:'white',
            dpColor3:'white',



              method: 'POST',
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

    product(e , num){
        if(num == 1){
            this.dpColor1 = '#ECEC4F'
            this.dpColor2 = 'white'
            this.dpColor3 = 'white'

          

        }
        if(num == 2){
            this.dpColor1 = 'white'
            this.dpColor2 = '#ECEC4F'
            this.dpColor3 = 'white'
      
            
           
        }
        if(num == 3){
            this.dpColor1 = 'white'
            this.dpColor2 = 'white'
            this.dpColor3 = '#ECEC4F'
            
           
        }
    
      },
    delivery(e){
      this.form.product_receive = e;
    },

    save(){
     
    this.form.id = this.id;
    byMethod(this.method, '/api/ugc_product_delivery' , this.form)
                    .then((res) => {
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/MediaType/${res.data.id}`)
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
.card{
  cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 12px;
    text-align: center;
    padding: 20px 0px;
    color: black;
    font-size: 18px;
    font-weight: bold;
}
.card-1{
    box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border:1px solid  #e8e2e2 ;
    border-radius: 12px;
    color: black;
    padding: 25px 0px ;
    font-size: 18px;
}
.product-card{
  cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 12px;
    text-align: center;
    padding: 20px 0px;
    color: black;
    font-size: 18px;
    font-weight: bold;
}
</style>