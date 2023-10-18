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
              <h4 style="color: #000; font-weight: bold;">Action Type</h4>
              
            </div>
            <div class="row" style="margin-left: 20px;">
    <div class="card ">
        <div class="row">
        <div class="col-4 text-center ">
        <img src="/images/whitelist.png" style="width: 100%;

    padding: 20px;">
    </div>
    <div class="col-6 text-center" style="    margin-top: 60px;">
        <h5 style="color: black;">Enable Influencers Whitelisting</h5>
        <p style="color: black;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit molestias totam numquam, ducimus iste voluptas quibusdam est quam, odio ipsa soluta quos officia commodi sequi quod. Molestias cupiditate quibusdam ipsa?</p>
        <div class="row">
    

    <div class="col-4"><button class="but">Upto 15 days </button></div>
    <div class="col-4"><button class="but">Upto 60 days</button></div>

    <div class="col-4"><button class="but">Upto 90 days</button></div>
<br>
</div>
    </div>
   
</div>

    </div>

</div>
<br>
            <p style="color: #000; margin-left: 10px;" >Specify what type of video need for your campaign.</p>
            <div class="col-7">
              <div class="row">
                <div class="col-4">
                  <div class="card-3">
                    Testmonial
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-3">
                    Unboxing
                  </div>
                </div>

                <div class="col-4">
                  <div class="card-3">
                    Product Demo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            
            <div class="col-7">
              <div class="row">
                <div class="col-4">
                  <div class="card-3">
                    Product Review
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-3">
                    How-to  
                  </div>
                </div>

                <div class="col-4">
                  <div class="card-3">
                    Custom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col">
              <h5 style="color: #000;">What Should Creators do?</h5>
              <p style="color: #000;">Give a clear instruction on how you expect your content to look like.the more detail the better! </p>
            </div>
            <div class="col">
    <textarea class="areas"
      v-model="text"
      rows="5"
      cols="30"
      placeholder=""
    ></textarea>
</div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-5">
              <h5 style="color: #000;">Plateform</h5>
              <p style="color: #000;">Select the Plateform that your plan to use the content for. </p>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-3">
                  <div class="card-3">
                    <h6 style="padding: 8px 0px 0px 0px;">20</h6>
                    <p style="padding: 10px 0px 0px 0px ;">Sec</p>
                  </div>
                </div>
                <div class="col-3">
                  <div class="card-3">
                    <h6 style="padding: 8px 0px 0px 0px;">20</h6>
                    <p style="padding: 10px 0px 0px 0px;">Sec</p>
                  </div>
                </div>

                <div class="col-3">
                  <div class="card-3">
                    <h6 style="padding: 8px 0px 0px 0px;">20</h6>
                    <p style="padding: 10px 0px 0px 0px;">Sec</p>
                  </div>
                </div>

                <div class="col-3">
                  <div class="card-3">
                    <h6 style="padding: 8px 0px 0px 0px;">20</h6>
                    <p style="padding: 10px 0px 0px 0px;">Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-8">
              <h5 style="color: #000;">How Many creators do you want to hire?</h5>
              <p style="color: #000;">Select the ideal number of Creator that your aiming to hire for this campaign
</p>
<p style="color: #000;">Note-this doesnot restrict the number you can hire the next stages.</p>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-3">
                  <div class="card-3">
                  << 5
                  </div>
                </div>
                <div class="col-3">
                  <div class="card-3">
                    5-10
                  </div>
                </div>
                <div class="col-3">
                  <div class="card-3">
                   10-20
                  </div>
                </div>

                <div class="col-3">
                  <div class="card-3">
                 >> 20
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                model: {
                    data: []
                }
            }
        },
  name: "Dashboard",
  methods: {}
};
</script>

<style scoped>

.card {
    background-color: #ffffff;
 width: 70%;

 border-radius: 15px;
 font-size: 15px;
 font-family: inherit;
 border: none;
 border: 2px solid;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}

.card-3{
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
    font-weight: bold;
}
.card-4 {
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
.card-5 {
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

.but{
    border: none;
    padding: 6px 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
    font-size: small;
    font-weight: 600;
}

.areas{
    background-color: #ffffff;
    width: 58%;

    height: 8em;
    border-radius: 10px;
    font-size: 15px;
    font-family: inherit;
    border: none;
    /* border: 1px solid; */
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 2px 2px 4px #c5c5c5, -2px -2px 4px #efeded;
}
</style>
