<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dline-3.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="col">
      <h4 style="font-weight: 400;color: #000;padding-left: 25px;">New Campaign</h4>
    </div>
    <div class="row" style="display: flex;flex-direction: column;align-content: center;justify-content: center;;">
      <div class="col">
        <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
          <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
          </div>
          <div class="col">
            <div class="row" style="display: flex;justify-content: space-evenly;align-items: center;padding-top:30px">
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf1.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">morocco</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">ivory-coast</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf3.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">spain</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf4.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">tunisia</h5>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <div class="card" style="width: 100%;border: none;border-radius: 12px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/nf5.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">france</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row" style="display: flex;flex-direction: column;justify-content: center;align-content: center;">
          <div class="col">
            <h5 style="color: #2A2C76; font-weight: 400; text-align: center;">Choississez I'audience cible de votre campagne</h5>
          </div>
          <div class="col">
            <div class="row" style="display: flex;justify-content: center;align-items: center; padding: 10px 0px;">
                <div class="col-1"><input required="" placeholder="18" type="number" class="form-control" v-model="email"></div>
                
                <div class="col-1"><input required="" placeholder="65+" type="number" class="form-control" v-model="email"></div>
            </div>
            <div class="col">
              <h5 style="color: #000;font-weight: 400; text-align: center;">Genre</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col_3">
              <div class="card" style="width: 100%;border: none;border-radius: 10px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                  <div class="card-body" style="display: flex;flex-direction: column;align-items: center;gap: 10px;padding: 15px 0px 0px 0px;">
                    <div class="img" style="display: flex;justify-content: center;align-items: center;">
                      <img src="/images/f2.png" style="width: 75%;"/>
                    </div>
                      <h5 class="card-title" style="font-size: 18px;color: #000;font-weight: 200;">Men</h5>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
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

</style>