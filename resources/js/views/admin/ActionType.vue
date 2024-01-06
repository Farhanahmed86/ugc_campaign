<template>
    <div class="container text-center">
      <div class="col text-center" style="padding: 10px 0px 50px 0px;">
                <img
            src="/images/id2line.png" style="width: 90%;height: 20px;"/>
            </div>  
      <div class="row " style="    display: flex; flex-direction: column; align-items: center;">
        <div class="col">
          <h4 style="color: #000; font-weight:400px;">Type d'action</h4>
        </div>
        <div class="col-8">
          <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 20px 0px">
            <div class="col-4">
              <div class="card" @click="action_type('Témoignage')">
                <div class="action-card" @click="action('ivory-coast' , 1)" :style="{ backgroundColor: atColor1 }">
                  Témoignage
              </div>
              </div>  
            </div>


            <div class="col-4" >
              <div class="card" @click="action_type('Unboxing')">
                <div class="action-card" @click="action('ivory-coast' , 2)" :style="{ backgroundColor: atColor2 }">
                Unboxing
              </div>
              </div>
            </div>


            <div class="col-4" >
              <div class="card" @click="action_type('Démo produit')">
                <div class="action-card" @click="action('ivory-coast' , 3)" :style="{ backgroundColor: atColor3 }">
                Démo produit
              </div>
            </div>
            </div>

            <div class="col-4" >
              <div class="card" @click="action_type('Revue du produit')">
                <div class="action-card" @click="action('ivory-coast' , 4)" :style="{ backgroundColor: atColor4 }">
                Revue du produit
              </div>
              </div>  
            </div>


            <div class="col-4">
              <div class="card" @click="action_type('How-to')">
                <div class="action-card" @click="action('ivory-coast' , 5)" :style="{ backgroundColor: atColor5 }">
                How-to
              </div>
              </div>  
            </div>


            <div class="col-4">
              <div class="card" @click="action_type('Customiser l action')">
                <div class="action-card" @click="action('ivory-coast' , 6)" :style="{ backgroundColor: atColor6 }">
                  Customiser l'action
              </div>
              </div>  
            </div>



          </div>
        </div>
      </div>
      <div class="row" v-if="input_type" style="display: flex; flex-direction: column; align-items: center; padding-top: 30px;">
        <div class="col-7">
          <h5 style="color: #000;">Quel action souhaitez-vous que le créateurs effectue ?</h5>
          <p style="font-size: 14px; color: #000;">Donnez des directives claires pour le contenu. Plus de détails sont préférables. </p>
        </div>
        <div class="col-8">
            <div class="row" style="display: flex; flex-direction: column; gap: 20px;">
              <textarea class="form-control" style="box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;border: none; border-radius: 10px; width:100%%"
                              id="textarea"
                              v-model="form.instruction"
                              rows="4"
                              cols="50"
                          placeholder=""></textarea>
            </div> 
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; align-items: center; padding-top: 30px;">
        <div class="col">
          <h6 style="color: #000;">Ce que doivent éviter les créateurs ? (option)</h6>
          
         
        </div>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" id="name" aria-describedby="" placeholder=""  style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
          </div>
        </div>
        <p style="color: #000;">Y a-t-il des actions que vous préférez que le créateur évite de réaliser ?</p>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" id="name" aria-describedby="" placeholder="" v-model="form.avoid" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
          </div>
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; align-items: center; padding-top: 30px;">
        <div class="col">
          <h6 style="color: #000;">Caption & Hashtag</h6>
          <p style="color: #000;">Précisez le hashtag, votre page, le code promo, ou toute autre information à mentionner.</p>
        </div>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" id="name" aria-describedby="" placeholder="" v-model="form.specific_caption" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
          </div>
        </div>
        <br>
        <br>
        <div class="col" style="display: flex;justify-content: center;align-items: center;">
        <button style="padding: 8px 40px;border: none;background-color: #2A2c76;color: #fff;border-radius: 10px;" @click="save">Suivant</button>
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
              input_type:false,

            atColor1:'white',
            atColor2:'white',
            atColor3:'white',
            atColor4:'white',

            atasColor4:'white',
            atColor5:'white',
            atColor6:'white',
            clickedValues: [],

                form: {},
                users_data:{},
                model: {
                    data: []
                },   method: 'POST',

            }
        },
  name: "Dashboard",

  created() {
    console.log(this.$route.params.id);
    this.campaign = this.$route.params.id;
    

  },
  methods: {

    action(e , num){
      // this.clickedValues.push(e);
        if(num == 1){
            this.atColor1 = '#ECEC4F'
           
        }
        if(num == 2){
         
            this.atColor2 = '#ECEC4F'
          
           
        }
        if(num == 3){
           
            this.atColor3 = '#ECEC4F'
           
        }
        if(num == 4){
           
            this.atColor4 = '#ECEC4F'
        
        }
        if(num == 5){
      
            this.atColor5 = '#ECEC4F'
            
        }
        if(num == 6){
          
            this.atColor6 = '#ECEC4F'
        }
      },

    action_type(e){
      this.clickedValues.push(e);
      console.log(this.clickedValues);
      this.form.action_type = this.clickedValues;
      if(e == 'Customiser l action'){
        this.input_type = true

      }
    },

    save(){
      this.form.id = this.campaign;
    byMethod(this.method, 'api/action_type' , this.form)
                    .then((res) => {
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/doyou/${this.campaign}`)
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
.action-card{
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
</style>