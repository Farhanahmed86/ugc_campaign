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
        <div class="card">
        <p>5</p>
        </div>
      </div>
      <div class="col-2">
        <div class="card">
          <p>5-10</p>
        </div>
      </div>
      <div class="col-2">
        <div class="card">
          <p>10-20</p>
        </div>
      </div>
      <div class="col-2">
        <div class="card">
          <p>>20</p>
        </div>
      </div>
    </div>
      <div class="col" style="    padding-top:30px;">
        <h5 style="color: #000;font-weight: 400">A quelle frequence souhaities tu qule ou les influenceurs parient de l'offre ?</h5>
      </div>
    <div class="row" style="padding-top: 10px;">
      <div class="col-3">
          <div class="card-body-2">
              <div class="img">
                <img src="/images/zigzag.png" style="width: 60%;"/>
              </div>
                <h5 class="card-title">What is Lorem Ipsum</h5>
          </div>
          </div>

          <div class="col-3">
            <div class="card-body-2">
                <div class="img">
                  <img src="/images/zigzag.png" style="width: 60%;"/>
                </div>
                  <h5 class="card-title">What is Lorem Ipsum</h5>
            </div>
          </div>

          <div class="col-3">
            <div class="card-body-2">
              <div class="img">
                <img src="/images/zigzag.png" style="width: 60%;"/>
              </div>
                <h5 class="card-title">What is Lorem Ipsum</h5>
            </div>
          </div>
    </div>
    <div class="col" style="padding-top: 30px;">
      <h5 style="color: #000;font-weight: 400">Budget de campagne ?</h5>
    </div>
    <div class="row" style="padding-top: 10px;">
      <div class="col-5">
        <div class="form-group">
            <input type="number" class="form-control" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 10px;">
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
.card-body-2{
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
</style>