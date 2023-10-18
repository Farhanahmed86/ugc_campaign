<template>



    <div class="panel">




<!-- </div> -->
<div>
   <!-- <div class="panel-heading">
       <h3 class="panel-title" style="color: black; margin-left: 50px;">Campaigns Influencers</h3>

       <br>
   </div> -->
   <div class="panel-body">
    <div class="row">
        <div class="col-4">

        <div class="col text-left">
            <!-- <button style="color: black;">
                        hello
            </button> -->
            <div class="buttons"> <h2 style="    font-size: larger;
    margin-left: 30px;
    margin-top: 15px;
    font-weight: bold;
    color: black;
">Create a Campaign</h2>
            <!-- <button class="buttons" style="margin-left: 70px;"> <span style="font-size: large;"> Create a Campaign</span> -->
                <p style="font-size: smaller;
    margin-left: 30px;
    margin-top: 15px;">fill out a brief and review creators to get started on your content compaign</p>
    <button style=" margin-left: 30px;
    border: none;
    color: white;
    background-color: rgb(42, 44, 118);
    border-radius: 7px;
    font-size: smaller;
    padding: 5px 10px;" @click="brief">Fill Out a Brief</button>
            </div>
<!-- </button> -->
        </div>
    </div>
        <div class="col-6" style=" padding-left: 30px;">
            <div class="col-6 text-left">
            <!-- <button style="color: black;">
                        hello
            </button> -->
            <div class="buttons"> <h2 style="    font-size: larger;
    margin-left: 30px;
    margin-top: 15px;
    font-weight: bold;
    color: black;
">Creators MarketPlace</h2>
            <!-- <button class="buttons" style="margin-left: 70px;"> <span style="font-size: large;"> Create a Campaign</span> -->
                <p style="    font-size: smaller;
    margin-left: 30px;
    margin-top: 15px;">fill out a brief and review creators to get started on your content compaign</p>
    <button style="     margin-left: 30px;
    border: none;
    color: white;
    background-color: rgb(42, 44, 118);
    border-radius: 7px;
    font-size: smaller;
    padding: 5px 10px;">Find Creators</button>
            </div>
<!-- </button> -->
        </div>
        </div>



    </div>
    <br>
    <br>
    <div class="col">
        <h5 style="color: black;">UCG Campaign Running</h5>
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
                countriesURL:'/api/search/countries',
                aboutURL:'/api/search/about',

                countries:{},
                users_data:{},
                model: {
                    data: []
                }
            }
        },
  name: "Dashboard",


//   beforeRouteEnter(to, from, next) {
//             get('/api/dashboard', to.query)
//                 .then((res) => {
//                     next(vm => vm.setData(res))

//                 })
//         },
//         beforeRouteUpdate(to, from, next) {
//             get('/api/dashboard', to.query)
//                 .then((res) => {
//                     this.setData(res)
//                     next()

//                 })
//         },

        methods: {

            brief(){
                this.$router.push('/brief')
            },


           
            detailsPage(item) {
                this.$router.push(`/dashboard/${item.id}`)
            },
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                //this.page = this.model.current_page

                // console.log(res.data)
            },


        }
};
</script>

<style scoped>
.buttons {
    background-color: #ffffff;
 width: 24em;
 height: 10em;
 border-radius: 15px;
 font-size: 15px;
 font-family: inherit;
 border: none;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 6px 6px 12px #c5c5c5,
             -6px -6px 12px #ffffff;
}






</style>
