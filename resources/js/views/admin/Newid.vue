<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dgs-line.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center; gap: 40px;">
      <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choisissez les canaux qui vous intéressent le plus:</h5>
      </div>
      <div class="col">
        <div class="row" style="display: flex;justify-content: center;align-items: center;">
          <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Instagram')">
                  <div class="id-card" @click="ides('ivory-coast' , 1)" :style="{ backgroundColor: idColor1 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/instagram.png" style="width: 50%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Instagram</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Tiktok')">
                  <div class="id-card" @click="ides('ivory-coast' , 2)" :style="{ backgroundColor: idColor2 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/tiktok.png" style="width: 50%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Tiktok</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Youtube')">
                  <div class="id-card" @click="ides('ivory-coast' , 3)" :style="{ backgroundColor: idColor3 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/youtube.png" style="width: 30%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Youtube</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"  @click="nameset('Snapchat')">
                  <div class="id-card" @click="ides('ivory-coast' , 4)" :style="{ backgroundColor: idColor4 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/social.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Snapchat</h5>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Linkedln')">
                  <div class="id-card" @click="ides('ivory-coast' , 5)" :style="{ backgroundColor: idColor5 }">
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
      </div>



      <div class="col" v-if="name == 'Instagram' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Package Stories et Réels')">
              <div class="id-card" @click="des('ivory-coast' , 1)" :style="{ backgroundColor: odColor1 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Package Stories et Réels</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Ecrans de stories')">
              <div class="id-card" @click="des('ivory-coast' , 2)" :style="{ backgroundColor: odColor2 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Ecrans de stories</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Vidéo réel virale')">
              <div class="id-card" @click="des('ivory-coast' , 3)" :style="{ backgroundColor: odColor3 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Vidéo réel virale</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Publication photo')">
              <div class="id-card" @click="des('ivory-coast' , 4)" :style="{ backgroundColor: odColor4 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Publication photo</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Photopost carroussel')">
              <div class="id-card" @click="des('ivory-coast' , 5)" :style="{ backgroundColor: odColor5 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Photopost carroussel</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Live Video')">
              <div class="id-card" @click="des('ivory-coast' , 6)" :style="{ backgroundColor: odColor6 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Live Video</h5>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>


      <div class="col" v-if="name == 'Tiktok' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Vidéo tiktok virale')">
              <div class="id-card" @click="ies('ivory-coast' , 1)" :style="{ backgroundColor: edColor1 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Vidéo tiktok virale</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Publication photo')">
              <div class="id-card" @click="ies('ivory-coast' , 2)" :style="{ backgroundColor: edColor2 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Publication photo</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Photopost carroussel')">
              <div class="id-card" @click="ies('ivory-coast' , 3)" :style="{ backgroundColor: edColor3 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Photopost carroussel</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Live Video')">
              <div class="id-card" @click="ies('ivory-coast' , 4)" :style="{ backgroundColor: edColor4 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Live Video</h5>
                  </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    

      <div class="col" v-if="name == 'Youtube' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Intégration courte < 3 min')">
              <div class="id-card" @click="aes('ivory-coast' , 1)" :style="{ backgroundColor: fdColor1 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Intégration courte < 3 min</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Intégration moyenne entre 3 et 5 min')">
              <div class="id-card" @click="aes('ivory-coast' , 2)" :style="{ backgroundColor: fdColor2 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Intégration moyenne entre 3 et 5 min</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Intégration complète 100% de la vidéo')">
              <div class="id-card" @click="aes('ivory-coast' , 3)" :style="{ backgroundColor: fdColor3 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Intégration complète 100% de la vidéo</h5>
                  </div>
                </div>
              </div>
          </div>    
          
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Youtube Short')">
              <div class="id-card" @click="aes('ivory-coast' , 4)" :style="{ backgroundColor: fdColor4 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Youtube Short</h5>
                  </div>
                </div>
              </div>
          </div> 
        </div>
      </div>

      <div class="col" v-if="name == 'Snapchat' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Stories courte')">
              <div class="id-card" @click="bes('ivory-coast' , 1)" :style="{ backgroundColor: gdColor1 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Stories courte</h5>
                </div>
              </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Stories longue')">
              <div class="id-card" @click="bes('ivory-coast' , 2)" :style="{ backgroundColor: gdColor2 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Stories longue</h5>
                </div>
                </div>
                </div>
          </div>
          
      </div>
    </div>

      <div class="col" v-if="name == 'Linkedln' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Post Linked In')">
              <div class="id-card" @click="ces('ivory-coast' , 1)" :style="{ backgroundColor: cdColor1 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Post Linked In</h5>
                  </div>
                </div>
                </div>
          </div>
          
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

            idColor1:'white',
            idColor2:'white',
            idColor3:'white',
            idColor4:'white',
            idColor5:'white',


            odColor1:'white',
            odColor2:'white',
            odColor3:'white',
            odColor4:'white',
            odColor5:'white',
            odColor6:'white',


            edColor1:'white',
            edColor2:'white',
            edColor3:'white',
            edColor4:'white',
  
            fdColor1:'white',
            fdColor2:'white',
            fdColor3:'white',
            fdColor4:'white',
  
            gdColor1:'white',
            gdColor2:'white',
            gfdColor3:'white',

            
            cdColor1:'white',
            cdColor2:'white',

      

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
  ces(e , num){
    if (num === 1) {
      if (this.cdColor1 === '#ECEC4F') {
        this.cdColor1 = 'white';
      } else {
        this.cdColor1 = '#ECEC4F';
        this.cdColor2 = 'white'; // You might want to reset other colors too
      }
    }
    if (num === 2) {
      if (this.cdColor2 === '#ECEC4F') {
        this.cdColor2 = 'white';
      } else {
        this.cdColor2 = '#ECEC4F';
        this.cdColor1 = 'white'; // You might want to reset other colors too
      }
    }
     
      },
  bes(e , num){
        if(num == 1){
          if (this.gdColor1 === '#ECEC4F') {
        this.gdColor1 = 'white';
      }
      else{
        this.gdColor1 = '#ECEC4F'
            this.gdColor2 = 'white'
            this.gdColor3 = 'white'
           
      }
            
      
           
        }

        if(num == 2){
          if (this.gdColor2 === '#ECEC4F') {
        this.gdColor2 = 'white';
      }
      else{

        this.gdColor1 = 'white'
        this.gdColor2 = '#ECEC4F'
        this.gdColor3 = 'white'
      }
          
    
           
        }
        if(num == 3){
          if (this.gdColor3 === '#ECEC4F') {
        this.gdColor3 = 'white';
      }
      else{

        this.gdColor1 = 'white'
        this.gdColor2 = 'white'
        this.gdColor3 = '#ECEC4F'
      }
        }
     
      },

  aes(e , num){
        if(num == 1){
         
          if (this.fdColor1 === '#ECEC4F') {
        this.fdColor1 = 'white';
      }
      else{

        this.fdColor1 = '#ECEC4F'
        this.fdColor2 = 'white'
        this.fdColor3 = 'white'
        this.fdColor4 = 'white'

       
      }
      
           
        }
        if(num == 2){
          if (this.fdColor2 === '#ECEC4F') {
        this.fdColor2 = 'white';
      }
      else{

        this.fdColor1 = 'white'
        this.fdColor2 = '#ECEC4F'
        this.edColor3 = 'white'
        this.fdColor4 = 'white'
      
      }
    
           
        }
        if(num == 3){

          if (this.fdColor3 === '#ECEC4F') {
        this.fdColor3 = 'white';
      }
      else{
        this.fdColor1 = 'white'
        this.fdColor2 = 'white'
        this.fdColor3 = '#ECEC4F'
        this.fdColor4 = 'white'

      }
    }

      if(num == 4){

if (this.fdColor4 === '#ECEC4F') {
this.fdColor4 = 'white';
}
else{
this.fdColor1 = 'white'
this.fdColor2 = 'white'
this.fdColor3 = 'white'
this.fdColor4 = '#ECEC4F'

}
      }
            

           
        
     
      },
  ies(e , num){
        if(num == 1){

          if (this.edColor1 === '#ECEC4F') {
        this.edColor1 = 'white';
      }
      else{

        this.edColor1 = '#ECEC4F'
        this.edColor2 = 'white'
        this.edColor3 = 'white'
        this.edColor4 = 'white'
      }
      
           
        }
        if(num == 2){
          if (this.edColor2 === '#ECEC4F') {
        this.edColor2 = 'white';
      }
      else{
        this.edColor1 = 'white'
        this.edColor2 = '#ECEC4F'
        this.edColor3 = 'white'
        this.edColor4 = 'white'


      }
           
        }
        if(num == 3){

          if (this.edColor3 === '#ECEC4F') {
        this.edColor3 = 'white';
      }
      else{
        this.edColor1 = 'white'
        this.edColor2 = 'white'
        this.edColor3 = '#ECEC4F'
        this.edColor4 = 'white'

      }

           
        }
        if(num == 4){
          if (this.edColor4 === '#ECEC4F') {
        this.edColor4 = 'white';
      }
      else{

        this.edColor1 = 'white'
        this.edColor2 = 'white'
        this.edColor3 = 'white'
        this.edColor4 = '#ECEC4F'
      }
           
        }
      },
  ides(e , num){
        if(num == 1){
          if (this.idColor1 === '#ECEC4F') {
        this.idColor1 = 'white';
      }
      else{

        this.idColor1 = '#ECEC4F'
        this.idColor2 = 'white'
        this.idColor3 = 'white'
        this.idColor4 = 'white'
        this.idColor5 = 'white'
      }
           
        }
        if(num == 2){
          if (this.idColor2 === '#ECEC4F') {
        this.idColor2 = 'white';
      }
      else{

        this.idColor1 = 'white'
        this.idColor2 = '#ECEC4F'
        this.idColor3 = 'white'
        this.idColor4 = 'white'
        this.idColor5 = 'white'
      }
           
        }
        if(num == 3){
          if (this.idColor3 === '#ECEC4F') {
        this.idColor3 = 'white';
      }
      else{

        this.idColor1 = 'white'
        this.idColor2 = 'white'
        this.idColor3 = '#ECEC4F'
        this.idColor4 = 'white'
        this.idColor5 = 'white'
      }
           
        }
        if(num == 4){
          if (this.idColor4 === '#ECEC4F') {
        this.idColor4 = 'white';
      }
      else{

        this.idColor1 = 'white'
        this.idColor2 = 'white'
        this.idColor3 = 'white'
        this.idColor4 = '#ECEC4F'
        this.idColor5 = 'white'
      }
           
        }
        if(num == 5){
          if (this.idColor5 === '#ECEC4F') {
        this.idColor5 = 'white';
      }
      else{

        this.idColor1 = 'white'
        this.idColor2 = 'white'
        this.idColor3 = 'white'
        this.idColor4 = 'white'
        this.idColor5 = '#ECEC4F'
       
      }
        }
      },
      
      des(e , num){
        if(num == 1){
          if (this.odColor1 === '#ECEC4F') {
this.odColor1 = 'white';
}
else{

  this.odColor1 = '#ECEC4F'
  this.odColor2 = 'white'
  this.odColor3 = 'white'
  this.odColor4 = 'white'
  this.odColor5 = 'white'
  this.odColor6 = 'white'
}
           
        }
        if(num == 2){
          if (this.odColor2 === '#ECEC4F') {
this.odColor2 = 'white';
}
else{
  this.odColor1 = 'white'
  this.odColor2 = '#ECEC4F'
  this.odColor3 = 'white'
  this.odColor4 = 'white'
  this.odColor5 = 'white'
  this.odColor6 = 'white'

}
           
        }
        if(num == 3){
          if (this.odColor3 === '#ECEC4F') {
this.odColor3 = 'white';
}
else{
  
    this.odColor1 = 'white'
    this.odColor2 = 'white'
    this.odColor3 = '#ECEC4F'
    this.odColor4 = 'white'
    this.odColor5 = 'white'
    this.odColor6 = 'white'

}
           
        }
        if(num == 4){
          if (this.odColor4 === '#ECEC4F') {
this.odColor4 = 'white';
}
else{

  this.odColor1 = 'white'
  this.odColor2 = 'white'
  this.odColor3 = 'white'
  this.odColor4 = '#ECEC4F'
  this.odColor5 = 'white'
  this.odColor6 = 'white'
 
}
        }
        if(num == 5){
          if (this.odColor5 === '#ECEC4F') {
this.odColor5 = 'white';
}
else{

  this.odColor1 = 'white'
  this.odColor2 = 'white'
  this.odColor3 = 'white'
  this.odColor4 = 'white'
  this.odColor5 = '#ECEC4F'
  this.odColor6 = 'white'
}
           
        }
        if(num ==6){
          if (this.odColor6 === '#ECEC4F') {
this.odColor6 = 'white';
}
else{

  this.odColor1 = 'white'
  this.odColor2 = 'white'
  this.odColor3 = 'white'
  this.odColor4 = 'white'
  this.odColor5 = 'white'
  this.odColor6 = '#ECEC4F'
}
           
        }
      },
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
.id-card{
  border-radius: 10px;
  padding: 10px;

}
</style>