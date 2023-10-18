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
              <h4 style="color: #000; font-weight: 400;">Media Type</h4>
              <p style="color: #000;">Select the type of creative assest you want for this campaign.</p>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="card-3">
                    Video
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-3">
                    Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-7">
              <h5 style="color: #000;">Posting to social media</h5>
              <p style="color: #000;">Specify if the content requested should be posted by creators on their channels</p>
            </div>
            <div class="col-7">
              <div class="row">
                <div class="col-6">
                  <div class="card-3">
                    Posting
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-3">
                    No Posting
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row" style="display: flex; flex-direction: column; justify-content: center;">
            <div class="col-5">
              <h5 style="color: #000;">Video Length</h5>
              <p style="color: #000;">Select the duration of your creative assest </p>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-6">
                  <div class="card-4">
                    <h6 style="padding: 8px 0px 0px 0px;">20</h6>
                    <p style="padding: 10px 0px 0px 0px ;">Sec</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card-4">
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
              <h5 style="color: #000;">Raw / Ready to use</h5>
              <p style="color: #000;">Let the Creator know if you need the final (ready-to-use) version of the video only the raw footage 
or maybe both!</p>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-4">
                  <div class="card-3">
                    Raw Footage
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-3">
                    Ready to use Ad
                  </div>
                </div>
                <div class="col-4">
                  <div class="card-5">
                    Ready to use Ad
                    + Raw Footage
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
.card-3{
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
.card-4 {
    box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 12px;
    text-align: center;
    padding: 0px 18px;
    color: black;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.card-5 {
  box-sizing: border-box;
    width: 100%;
    background: #FFFFFF;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 12px;
    text-align: center;
    padding: 8px 0px;
    color: black;
    font-size: 18px;
}
</style>
