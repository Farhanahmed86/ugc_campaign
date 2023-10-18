<template>
  <div class="contanir">
    <div class="col text-center" style="padding: 10px 0px 50px 0px;">
              <img
          src="/images/dline-2.png" style="width: 90%;height: 20px;"/>
    </div>
    <div class="col">
      <h4 style="font-weight: 400;color: #000;">New Campaign</h4>
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