<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dline-2.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="col">
      <h4 style="font-weight: 400;color: #000;">Briefez nous sur vos besoins</h4>
      <p  style="font-weight: 400;color: #000;">Quels sont les objectifs que vous souhaitez atteindre ?</p>
    </div>
    <div class="row" style="display: flex;flex-direction: column;justify-content: center; gap: 20px; padding-top: 40px;">
      <div class="col">
        <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Quel est votre objectif principal ?</h5>
      </div>
      <div class="col">
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-4" @click="datas('1') " > 
            <div class="card new1" style="cursor: pointer; width: 85%; transition: 0.3s; border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" :style="{ backgroundColor: bgColor1}">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new1.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Faire connaître ma marque</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Augmenter la visibilité de votre marque pour obtenir plus d'abonnées ciblés.</p>
                </div>
            </div>
          </div>
          <div class="col-4"  @click="datas('2') " >
            <div class="card new1" style=" cursor: pointer; width: 85%; transition: 0.3s; border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" :style="{ backgroundColor: bgColor2}">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new2.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style=" cursor: pointer; font-size: 18px;color: #000;font-weight: 200;">Fidélisation client</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Renforcer la confiance, l'engagement continu et la loyauté envers votre marque..</p>
                </div>
            </div>
          </div>
          <div class="col-4"  @click="datas('3') " >
            <div class="card new1" style=" cursor: pointer; width: 85%;  transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" :style="{ backgroundColor: bgColor3}">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new3.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Engagement</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Augmenter l'interaction du public pour créer une communauté engagée..</p>
                </div>
            </div>
          </div>
          <div class="col-4"  @click="datas('4') " >
            <div class="card new1" style=" cursor: pointer; width: 85%; transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" :style="{ backgroundColor: bgColor4}">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new4.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Traffic</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Générer du trafic vers votre site web pour augmenter les ventes.</p>
                </div>
            </div>
          </div>
          <div class="col-4"  @click="datas('5') " >
            <div class="card new1" style=" cursor: pointer; width: 85%; transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" :style="{ backgroundColor: bgColor5}">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new5.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Conversions</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Mettre en place une action mesurable et augmenter mes ventes.</p>
                </div>
            </div>
          </div>
          <div class="col-4"  @click="datas('6') " >
            <div class="card new1" style=" cursor: pointer; width: 85%; transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" :style="{ backgroundColor: bgColor6}">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new6.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Visite point de vente</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Augmenter les visites dans votre boutiques, restaurant, hotel etc..</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col text-center">
        <button style="padding: 8px 40px;border: none;background-color: #2A2c76;color: #fff;border-radius: 10px;" @click="pushnew">Next</button>
        <!-- <button class="butt" @click="pushnew">Next</button> -->
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
            
              method: 'POST',

              bgColor1:'white',
     bgColor2:'white',
     bgColor3:'white',
     bgColor4:'white',
     bgColor5:'white',
     bgColor6:'white',
     clickedValues: [],
     isBgColor1Active:'',
     isBgColor2Active:'',
     isBgColor3Active:'',
     isBgColor4Active:'',
     isBgColor5Active:'',
     isBgColor6Active:'',



          }
      },
name: "Dashboard",
created() {
    console.log(this.$route.params.id);
    this.campaign = this.$route.params.id;
    

  },
methods: {


  datas(num){
    const index = this.clickedValues.indexOf(num);

if (index === -1) {
    // If num is not in the array, add it
    this.clickedValues.push(num);
} else {
    // If num is in the array, remove it
    this.clickedValues.splice(index, 1);
}
    // this.clickedValues.push(num);
    console.log(this.clickedValues);
  
 
  if(num == 1){
    this.isBgColor1Active = !this.isBgColor1Active;
    this.bgColor1 = this.isBgColor1Active ? '#ECEC4F' : '#FFFFFF';
      // this.bgColor1 = '#ECEC4F'
   
  }
  if(num == 2){
    this.isBgColor2Active = !this.isBgColor2Active;
    this.bgColor2 = this.isBgColor2Active ? '#ECEC4F' : '#FFFFFF';
      // this.bgColor2 = '#ECEC4F'
    
     

  }

  if(num == 3){
    this.isBgColor3Active = !this.isBgColor3Active;
    this.bgColor3 = this.isBgColor3Active ? '#ECEC4F' : '#FFFFFF';
      // this.bgColor3 = '#ECEC4F'
  
     

  }

  if(num == 4){
    this.isBgColor4Active = !this.isBgColor4Active;
    this.bgColor4 = this.isBgColor4Active ? '#ECEC4F' : '#FFFFFF';
      // this.bgColor4 = '#ECEC4F'
     
     
  }

  if(num == 5){
    this.isBgColor5Active = !this.isBgColor5Active;
    this.bgColor5 = this.isBgColor5Active ? '#ECEC4F' : '#FFFFFF';
      // this.bgColor5 = '#ECEC4F'
   
   
  


  }

  if(num == 6){
     
    this.isBgColor6Active = !this.isBgColor6Active;
    this.bgColor6 = this.isBgColor6Active ? '#ECEC4F' : '#FFFFFF';
      // this.bgColor6 = '#ECEC4F'
   
      
  


  }

},

  




  pushnew(){
    this.form.title = this.clickedValues;
    this.form.id = this.campaign;
 

    byMethod(this.method,  '/api/objective' , this.form)
                    .then((res) => {
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/NewCampaignfalx/${res.data.id}`)
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
    // this.$router.push()
  
}
};
</script>

<style scoped>
.new1:hover{
background-color: #ECEC4F;
}
</style>