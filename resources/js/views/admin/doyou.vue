<template>
  <div class="contanir">
      <div class="col-8">
            <h5 style="color:#000; font-weight:bold;">How many Creator do you wat to hire?</h5>
          <br>
          <p style="font-weight: 400;color: #000;">Select the ideal number of Creator that your aiming to hire for this camoaign 
                  note- this doesn't restrict the number you can hire in the next stages.</p>
      </div>
    <div class="row">
      <div class="col-2">
        <div class="card-s">
          <div class="shorts-card" @click="shorts('5' , 1)" :style="{ backgroundColor: ssColor1 }">
        <p>5</p>
      </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card-s">
          <div class="shorts-card" @click="shorts('5-10' , 2)" :style="{ backgroundColor: ssColor2 }">
          <p>5-10</p>
        </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card-s">
          <div class="shorts-card" @click="shorts('10-20' , 3)" :style="{ backgroundColor: ssColor3 }">
          <p>10-20</p>
        </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card-s">
          <div class="shorts-card" @click="shorts('>20' , 4)" :style="{ backgroundColor: ssColor4 }">
          <p>>20</p>
        </div>
        </div>
      </div>
    </div>
    <br>
    <div class="col" style="    padding-top:30px;">
        <h5 style="color: #000;font-weight: 400">A quelle frequence souhaities tu qule ou les influenceurs parient de l'offre ?</h5>
      </div>
      <br>

      <div class="row">
        <div class="col-5">
          <div class="form-group">
            <input type="date" class="form-control" v-model="form.hire_date" id="date" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
          </div>
        </div>

      </div>
      <div class="col" style="    padding-top:30px;">
        <h5 style="color: #000;font-weight: 400">A quelle frequence souhaities tu qule ou les influenceurs parient de l'offre ?</h5>
      </div>
    <div class="row" style="padding-top: 10px;">
      <div class="col-3">
          <div class="card-body-2">
            <div class="longs-card" @click="longs('What is Lorem Ipsum' , 1)" :style="{ backgroundColor: lgColor1}">
              <div class="img">
                <img src="/images/zigzag.png" style="width: 60%;"/>
              </div>
                <h5 class="card-title">What is Lorem Ipsum</h5>
          </div>
        </div>
          </div>

          <div class="col-3">
            <div class="card-body-2">
              <div class="longs-card" @click="longs('What is Lorem Ipsum' , 2)" :style="{ backgroundColor: lgColor2}">
                <div class="img">
                  <img src="/images/zigzag.png" style="width: 60%;"/>
                </div>
                  <h5 class="card-title">What is Lorem Ipsum</h5>
            </div>
          </div>
          </div>

          <div class="col-3">
            <div class="card-body-2">
              <div class="longs-card" @click="longs('What is Lorem Ipsum' , 3)" :style="{ backgroundColor: lgColor3}">
              <div class="img">
                <img src="/images/zigzag.png" style="width: 60%;"/>
              </div>
                <h5 class="card-title">What is Lorem Ipsum</h5>
            </div>
          </div>
          </div>
    </div>
    <br>
    <div class="col" style="padding-top: 30px;">
      <h5 style="color: #000;font-weight: 400">A quelle frequence souhaities tu qule ou les influenceurs parient de l'offre ?</h5>
    </div>
    <div class="row" style="padding-top: 10px;">
      <div class="col-6">
        <div class="form-group">
          <select class="form-control" placeholder="Socail media" v-model="form.followers">

<option style="background-color: #2A2C76; color:white" value="100k">100k</option>
<option style="background-color: #2A2C76; color:white" value="1 Million">1 Million</option>
<option style="background-color: #2A2C76; color:white" value="100-500">100-500</option>
<option style="background-color: #2A2C76; color:white" value="200k">200k</option>
<option style="background-color: #2A2C76; color:white" value="300k">300k</option>



</select>
          </div>
      </div>
    </div>
    
    <div class="col" style="padding-top: 30px;">
      <h5 style="color: #000;font-weight: 400">Budget de campagne ?</h5>
    </div>

    
    <div class="row" style="padding-top: 10px;">
      <div class="col-5">
        <div class="form-group">
            <input type="number" class="form-control" v-model="form.hire_budget" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
          </div>
      </div>
    </div>

    <div class="col" style="display: flex;justify-content: center;align-items: center;">
        <button style="padding: 8px 40px;border: none;background-color: #2A2c76;color: #fff;border-radius: 10px;" @click="save">Next</button>
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
            method:'POST',
            ssColor1:'white',
            ssColor2:'white',
            ssColor3:'white',
            ssColor4:'white',

            lgColor1:'white',
            lgColor2:'white',
            lgColor3:'white',

             form: {},
              users_data:{},
              model: {
                  data: []
              }
          }
      },
name: "Dashboard",
methods: {
  longs(e , num){
    this.form.hire_offer = e;
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

      save(){
        this.form.id = this.campaign;
            byMethod(this.method, 'api/hire', this.form)
                    .then((res) => {
                      
                       
                        if(res.data && res.data.saved) {
                           this.$router.push('/compaigns')
                        }
                    })
          },
  shorts(e , num){
    this.form.hire = e;
        if(num == 1){
            this.ssColor1 = '#ECEC4F'
            this.ssColor2 = 'white'
            this.ssColor3 = 'white'
            this.ssColor4 = 'white'
          

        }
        if(num == 2){
            this.ssColor1 = 'white'
            this.ssColor2 = '#ECEC4F'
            this.ssColor3 = 'white'
            this.ssColor4 = 'white'
            
           
        }
        if(num == 3){
            this.ssColor1 = 'white'
            this.ssColor2 = 'white'
            this.ssColor3 = '#ECEC4F'
            this.ssColor4 = 'white'
           
        }
        if(num == 4){
            this.ssColor1 = 'white'
            this.ssColor2 = 'white'
            this.ssColor3 = 'white'
            this.ssColor4 = '#ECEC4F'
   
        }
    
      },
}
};
</script>

<style scoped>
.card{
    display: flex;
    align-items: center;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card p{
    font-size: 18px;
    color: #000;
    font-weight:600;
}
.longs-card{
     display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 10px;
    flex-direction: column;
}
.card-title{
    color: #000;
    font-weight: 400;
    font-size: 18px; 
}
.shorts-card{
    display: flex;
    align-items: center;
    padding-top: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    justify-content:center;
    border-radius:8px;
}
.card-s p{
  color: #000;
    font-weight: 600;
}

option:hover{
background-color: yellow;
}
</style>