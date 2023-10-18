<template>
    <div class="contanir">
      <div class="col text-center" style="padding: 10px 0px 50px 0px;">
                <img
            src="/images/dline-3.png" style="width: 90%;height: 20px;"/>
            </div>  
      <div class="row" style="    display: flex; flex-direction: column; align-items: flex-start;">
        <div class="col">
          <h4 style="color: #000; font-weight:bold;">Product Delivery</h4>
          <p style="font-size: 14px; color: #000;">Choose how you want Creators to receive the product.</p>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-4">
              <div class="card">
                Not Required
              </div>  
            </div>
            <div class="col-4">
              <div class="card">
                 Shipment
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                Reimbursement
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; align-items: flex-start; padding-top: 30px;">
        <div class="col-7">
          <h5 style="color: #000;">Description and  Instructions</h5>
          <p style="font-size: 14px; color: #000;">Give creator more details about the product of services to be promoted. as well as general guidelines
of what's expected from this collaboration</p>
        </div>
        <div class="col-8">
          <div class="card-1">
            <div class="row" style="display: flex; flex-direction: column; padding-left: 30px; gap: 20px;">
              <div class="col">
                <h5>Our new silk sheets are here !</h5>
              </div>
              <div class="col-10">
                <p style="font-size: 14px; color: #000;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              </div>
            </div>
        </div> 
        </div>
      </div>
      <div class="row" style="display: flex; flex-direction: column; justify-content: center; padding-top: 30px;">
        <div class="col">
          <h6 style="color: #000;">Product URL ( optional )</h6>
          <p style="color: #000;">Insert the product URL here so the Creator can discover more about it.</p>
        </div>
        <div class="col-4">
          <div class="form-group">
            <input type="name" class="form-control" id="name" aria-describedby="" placeholder="" style="border: none;box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; border-radius: 5px;">
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
  cursor: pointer;
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
    font-weight: bold;
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