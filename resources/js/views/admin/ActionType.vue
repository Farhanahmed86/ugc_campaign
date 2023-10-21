<template>
    <div class="contanir">
      <div class="col text-center" style="padding: 10px 0px 50px 0px;">
                <img
            src="/images/id2line.png" style="width: 90%;height: 20px;"/>
            </div>  
      <div class="row" style="    display: flex; flex-direction: column; align-items: flex-start;">
        <div class="col">
          <h4 style="color: #000; font-weight:400px;">Action Type</h4>
        </div>
        <div class="col-8">
          <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 20px 0px">
            <div class="col-4">
              <div class="card" @click="action_type('Testimonial')">
                <div class="action-card" @click="action('ivory-coast' , 1)" :style="{ backgroundColor: atColor1 }">
                Testimonial
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
              <div class="card" @click="action_type('Product Demo')">
                <div class="action-card" @click="action('ivory-coast' , 3)" :style="{ backgroundColor: atColor3 }">
                Product Demo
              </div>
            </div>
            </div>

            <div class="col-4" >
              <div class="card" @click="action_type('Product Review')">
                <div class="action-card" @click="action('ivory-coast' , 4)" :style="{ backgroundColor: atColor4 }">
                Product Review
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
              <div class="card" @click="action_type('Custom')">
                <div class="action-card" @click="action('ivory-coast' , 6)" :style="{ backgroundColor: atColor6 }">
                Custom
              </div>
              </div>  
            </div>



          </div>
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; align-items: flex-start; padding-top: 30px;">
        <div class="col-7">
          <h5 style="color: #000;">What should creators do ?</h5>
          <p style="font-size: 14px; color: #000;">Give clear instructions on how you expect your content to look like. The more detail the better! </p>
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
      <div class="row" style="display: flex; flex-direction: column; justify-content: center; padding-top: 30px;">
        <div class="col">
          <h6 style="color: #000;">What should creators avoid ? ( optional)</h6>
          <p style="color: #000;">Is there any thing specific that you don't want the Creator to do ?</p>
        </div>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" id="name" aria-describedby="" placeholder="" v-model="form.avoid" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
          </div>
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; justify-content: center; padding-top: 30px;">
        <div class="col">
          <h6 style="color: #000;">Caption (optinal)</h6>
          <p style="color: #000;">Do you want the Creator to add a Specific caption?</p>
        </div>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" id="name" aria-describedby="" placeholder="" v-model="form.specific_caption" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
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


            atColor1:'white',
            atColor2:'white',
            atColor3:'white',
            atasColor4:'white',
            atColor5:'white',
            atColor6:'white',

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
        if(num == 1){
            this.atColor1 = '#ECEC4F'
            this.atColor2 = 'white'
            this.atColor3 = 'white'
            this.atColor4 = 'white'
            this.atColor5 = 'white'
            this.atColor6 = 'white'

        }
        if(num == 2){
            this.atColor1 = 'white'
            this.atColor2 = '#ECEC4F'
            this.atColor3 = 'white'
            this.atColor4 = 'white'
            this.atColor5 = 'white'
            this.atColor6 = 'white'
           
        }
        if(num == 3){
            this.atColor1 = 'white'
            this.atColor2 = 'white'
            this.atColor3 = '#ECEC4F'
            this.atColor4 = 'white'
            this.atColor5 = 'white'
            this.atColor6 = 'white'
        }
        if(num == 4){
            this.atColor1 = 'white'
            this.atColor2 = 'white'
            this.atColor3 = 'white'
            this.atColor4 = '#ECEC4F'
            this.atColor5 = 'white'
            this.atColor6 = 'white'
        }
        if(num == 5){
            this.atColor1 = 'white'
            this.atColor2 = 'white'
            this.atColor3 = 'white'
            this.atColor4 = 'white'
            this.atColor5 = '#ECEC4F'
            this.atColor6 = 'white'
        }
        if(num == 6){
            this.atColor1 = 'white'
            this.atColor2 = 'white'
            this.atColor3 = 'white'
            this.atColor4 = 'white'
            this.atColor5 = 'white'
            this.atColor6 = '#ECEC4F'
        }
      },

    action_type(e){
      this.form.action_type = e;
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