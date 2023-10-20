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
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="nameset('Facebook')">
                  <div class="id-card" @click="ides('ivory-coast' , 3)" :style="{ backgroundColor: idColor3 }">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/facebook (1).png" style="width: 50%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Facebook</h5>
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
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="des('ivory-coast' , 1)" :style="{ backgroundColor: odColor1 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="des('ivory-coast' , 2)" :style="{ backgroundColor: odColor2 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="des('ivory-coast' , 3)" :style="{ backgroundColor: odColor3 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="des('ivory-coast' , 4)" :style="{ backgroundColor: odColor4 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="des('ivory-coast' , 5)" :style="{ backgroundColor: odColor5 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="des('ivory-coast' , 6)" :style="{ backgroundColor: odColor6 }">       
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
      </div>


      <div class="col" v-if="name == 'Tiktok' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="ies('ivory-coast' , 1)" :style="{ backgroundColor: edColor1 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="ies('ivory-coast' , 2)" :style="{ backgroundColor: edColor2 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="ies('ivory-coast' , 3)" :style="{ backgroundColor: edColor3 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="ies('ivory-coast' , 4)" :style="{ backgroundColor: edColor4 }">    
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
      </div>
    

      <div class="col" v-if="name == 'Facebook' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="aes('ivory-coast' , 1)" :style="{ backgroundColor: fdColor1 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="aes('ivory-coast' , 2)" :style="{ backgroundColor: fdColor2 }">     
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="aes('ivory-coast' , 3)" :style="{ backgroundColor: fdColor3 }">     
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
      </div>

      <div class="col" v-if="name == 'Snapchat' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="bes('ivory-coast' , 1)" :style="{ backgroundColor: gdColor1 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                </div>
              </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="bes('ivory-coast' , 2)" :style="{ backgroundColor: gdColor2 }">    
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="bes('ivory-coast' , 3)" :style="{ backgroundColor: gdColor3 }">    
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
    </div>

      <div class="col" v-if="name == 'Linkedln' "> 
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="ces('ivory-coast' , 1)" :style="{ backgroundColor: cdColor1 }">       
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap:0px;padding: 0px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/zigzag.png" style="width: 80%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Lorem Ipsum</h5>
                  </div>
                </div>
                </div>
          </div>
          <div class="col-3">
            <div class="card" style="width: 90%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" @click="plate('Lorem Ipsum')">
              <div class="id-card" @click="ces('ivory-coast' , 2)" :style="{ backgroundColor: cdColor2 }">    
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
        if(num == 1){
            this.cdColor1 = '#ECEC4F'
            this.cdColor2 = 'white'
           
      
           
        }
        if(num == 2){
            this.cdColor1 = 'white'
            this.cdColor2 = '#ECEC4F'
          
    
           
        }
     
      },
  bes(e , num){
        if(num == 1){
            this.gdColor1 = '#ECEC4F'
            this.gdColor2 = 'white'
            this.gdColor3 = 'white'
           
      
           
        }
        if(num == 2){
            this.gdColor1 = 'white'
            this.gdColor2 = '#ECEC4F'
            this.gdColor3 = 'white'
          
    
           
        }
        if(num == 3){
            this.gdColor1 = 'white'
            this.gdColor2 = 'white'
            this.gdColor3 = '#ECEC4F'
        }
     
      },

  aes(e , num){
        if(num == 1){
            this.fdColor1 = '#ECEC4F'
            this.fdColor2 = 'white'
            this.fdColor3 = 'white'
           
      
           
        }
        if(num == 2){
            this.fdColor1 = 'white'
            this.fdColor2 = '#ECEC4F'
            this.edColor3 = 'white'
          
    
           
        }
        if(num == 3){
            this.fdColor1 = 'white'
            this.fdColor2 = 'white'
            this.fdColor3 = '#ECEC4F'
            

           
        }
     
      },
  ies(e , num){
        if(num == 1){
            this.edColor1 = '#ECEC4F'
            this.edColor2 = 'white'
            this.edColor3 = 'white'
            this.edColor4 = 'white'
      
           
        }
        if(num == 2){
            this.edColor1 = 'white'
            this.edColor2 = '#ECEC4F'
            this.edColor3 = 'white'
            this.edColor4 = 'white'
    
           
        }
        if(num == 3){
            this.edColor1 = 'white'
            this.edColor2 = 'white'
            this.edColor3 = '#ECEC4F'
            this.edColor4 = 'white'

           
        }
        if(num == 4){
            this.edColor1 = 'white'
            this.edColor2 = 'white'
            this.edColor3 = 'white'
            this.edColor4 = '#ECEC4F'
           
        }
      },
  ides(e , num){
        if(num == 1){
            this.idColor1 = '#ECEC4F'
            this.idColor2 = 'white'
            this.idColor3 = 'white'
            this.idColor4 = 'white'
            this.idColor5 = 'white'
           
        }
        if(num == 2){
            this.idColor1 = 'white'
            this.idColor2 = '#ECEC4F'
            this.idColor3 = 'white'
            this.idColor4 = 'white'
            this.idColor5 = 'white'
           
        }
        if(num == 3){
            this.idColor1 = 'white'
            this.idColor2 = 'white'
            this.idColor3 = '#ECEC4F'
            this.idColor4 = 'white'
            this.idColor5 = 'white'
           
        }
        if(num == 4){
            this.idColor1 = 'white'
            this.idColor2 = 'white'
            this.idColor3 = 'white'
            this.idColor4 = '#ECEC4F'
            this.idColor5 = 'white'
           
        }
        if(num == 5){
            this.idColor1 = 'white'
            this.idColor2 = 'white'
            this.idColor3 = 'white'
            this.idColor4 = 'white'
            this.idColor5 = '#ECEC4F'
           
        }
      },
      
      des(e , num){
        if(num == 1){
            this.odColor1 = '#ECEC4F'
            this.odColor2 = 'white'
            this.odColor3 = 'white'
            this.odColor4 = 'white'
            this.odColor5 = 'white'
            this.odColor6 = 'white'
           
        }
        if(num == 2){
            this.odColor1 = 'white'
            this.odColor2 = '#ECEC4F'
            this.odColor3 = 'white'
            this.odColor4 = 'white'
            this.odColor5 = 'white'
            this.odColor6 = 'white'
           
        }
        if(num == 3){
            this.odColor1 = 'white'
            this.odColor2 = 'white'
            this.odColor3 = '#ECEC4F'
            this.odColor4 = 'white'
            this.odColor5 = 'white'
            this.odColor6 = 'white'
           
        }
        if(num == 4){
            this.odColor1 = 'white'
            this.odColor2 = 'white'
            this.odColor3 = 'white'
            this.odColor4 = '#ECEC4F'
            this.odColor5 = 'white'
            this.odColor6 = 'white'
           
        }
        if(num == 5){
            this.odColor1 = 'white'
            this.odColor2 = 'white'
            this.odColor3 = 'white'
            this.odColor4 = 'white'
            this.odColor5 = '#ECEC4F'
            this.odColor6 = 'white'
           
        }
        if(num ==6){
            this.odColor1 = 'white'
            this.odColor2 = 'white'
            this.odColor3 = 'white'
            this.odColor4 = 'white'
            this.odColor5 = 'white'
            this.odColor6 = '#ECEC4F'
           
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