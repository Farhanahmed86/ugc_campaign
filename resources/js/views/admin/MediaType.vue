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
              <h4 style="color: #000; font-weight: bold;">Type de contenu</h4>
              <p style="color: #000;">Sélectionnez le type de contenu que le créateur UGC doit vous fournir.</p>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="card-3" @click="media('Video')">
                    <div class="md-card" @click="roduct('ivory-coast' ,1)" :style="{ backgroundColor: dbColor1 }">
                    Video
                  </div>
                  </div>
                </div>


                <div class="col-6">
                  <div class="card-3" @click="media('Photo')">
                    <div class="md-card" @click="roduct('ivory-coast' ,2)" :style="{ backgroundColor: dbColor2 }">
                    Photo
                  </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-7">
              <h5 style="color: #000;">Publication sur les réseaux</h5>
              <p style="color: #000;">Précisez ci le contenu doit être poster sur le profil du créateur</p>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="card-3" @click="socail('Oui')">
                    <div class="md-card" @click="oduct('ivory-coast' ,1)" :style="{ backgroundColor: dgColor1 }">
                      Oui
                  </div>
                </div>
                </div>
                <div class="col-6">
                  <div class="card-3" @click="socail('Non')">
                    <div class="md-card" @click="oduct('ivory-coast' ,2)" :style="{ backgroundColor: dgColor2 }">
                    Non
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-5">
              <h5 style="color: #000;">Durée de la video UGC</h5>
              <p style="color: #000;">Selectionnez la durée souhaité du contenu </p>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-6">
                  <div class="card-4" @click="lenght('30')">
                    <div class="no-card" @click="duct('ivory-coast' ,1)" :style="{ backgroundColor: dsColor1 }">
                    <h6 style="padding: 8px 0px 0px 0px;">30</h6>
                    <p style="padding: 10px 0px 0px 0px ;">Sec</p>
                  </div>
                </div>
                </div>
                <div class="col-6">
                  <div class="card-4" @click="lenght('60')">
                    <div class="no-card" @click="duct('ivory-coast' ,2)" :style="{ backgroundColor: dsColor2 }">
                    <h6 style="padding: 8px 0px 0px 0px;">60</h6>
                    <p style="padding: 10px 0px 0px 0px;">Sec</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       

        
    
      <div class="col">
                      <button class="button2" @click="save">
                        Suivant
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


              dbColor1:'white',
              dbColor2:'white',


              dgColor1:'white',
              dgColor2:'white',

              

              dsColor1:'white',
              dsColor2:'white',

              lgColor1:'white',
              lgColor2:'white',
              lgColor3:'white',

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

    last(e , num){
        if(num == 1){
            this.lgColor1 = '#ECEC4F'
            this.lgColor2 = 'white'
            this.lgColor3 = 'white'
         
          

        }
        if(num == 2){
            this.lgColor1 = 'white'
            this.lgColor2 = '#ECEC4F'
            this.lgColor3 = 'white'
          
      
           
        }
        if(num == 3){
            this.lgColor1 = 'white'
            this.lgColor2 = 'white'
            this.lgColor3 = '#ECEC4F'
          
      
           
        }
      },
        
    
    duct(e , num){
        if(num == 1){
            this.dsColor1 = '#ECEC4F'
            this.dsColor2 = 'white'
        
         
          

        }
        if(num == 2){
            this.dsColor1 = 'white'
            this.dsColor2 = '#ECEC4F'
          
      
           
        }
        
    
      },
    
    oduct(e , num){
        if(num == 1){
            this.dgColor1 = '#ECEC4F'
            this.dgColor2 = 'white'
        
         
          

        }
        if(num == 2){
            this.dgColor1 = 'white'
            this.dgColor2 = '#ECEC4F'
          
      
           
        }
        
    
      },
    roduct(e , num){
        if(num == 1){
            this.dbColor1 = '#ECEC4F'
            this.dbColor2 = 'white'
        
         
          

        }
        if(num == 2){
            this.dbColor1 = 'white'
            this.dbColor2 = '#ECEC4F'
          
      
           
        }
        
    
      },
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

.lg-card{
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
.no-card {
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
.lg-5-card {
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
.md-card{
  cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 7px;
    text-align: center;
    padding: 20px 0px;
    color: black;
    font-size: 18px;

}
</style>
