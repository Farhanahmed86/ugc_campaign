<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dline-2.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="col">
      <h4 style="font-weight: 400;color: #000;">New Campaign</h4>
      <p  style="font-weight: 400;color: #000;">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
    </div>
    <div class="row" style="display: flex;flex-direction: column;justify-content: center; gap: 20px; padding-top: 40px;">
      <div class="col">
        <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">What is your Marketing Objective</h5>
      </div>
      <div class="col">
        <div class="row" style="display: flex;flex-wrap: wrap;align-items: center;gap: 30px 0px;">
          <div class="col-4">
            <div class="card new1" style="width: 85%; transition: 0.3s; border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new1.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Brand Awareness</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card new1" style="width: 85%; transition: 0.3s; border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new2.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Commitent</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card new1" style="width: 85%;  transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new3.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Interactionss</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card new1" style="width: 85%; transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new4.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Traffic</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card new1" style="width: 85%; transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new5.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Conversion</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card new1" style="width: 85%; transition: 0.3s;border: none;border-radius: 15px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
              <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 15px;padding: 25px 20px;">
                <div class="img">
                  <img src="/images/new6.png" style="width: 75%;"/>
                </div>
               <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Point of sale visit</h5>
                 <p class="card-text" style="font-size: 15px;color: #000;font-weight: 200;text-align: center;">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
.new1:hover{
  background-color: #ECEC4F;
}
</style>