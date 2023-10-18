<template>



    <div class="panel">




<!-- </div> -->
<div>
   <div class="panel-heading">
       <h3 class="panel-title" style="color: black; margin-left: 50px;">Campaigns Influencers</h3>

       <br>
   </div>
   <div class="panel-body">
    <div class="row">
        <div class="col-6">
            <!-- <button style="color: black;">
                        hello
            </button> -->
            <button class="buttons" style="margin-left: 70px;"> <span style="font-size: large;"> Organization</span>
                <p>i want to hire Creators</p>
</button>
        </div>
        <div class="col-6">
            <button class="buttons" style="margin-left: 70px;">
                      <span style="font-size: large;">UCG Creator</span>
                        <p>i want to sell UCGs</p>

            </button>
        </div>



    </div>
<br>
<br>
    <div class="col-4 mt-12" style="margin-left: 55px;">
                    <div class="form-group">
                        <label style="color: black;">Country</label>
                        <typehead :url="countriesURL" :initialize="form.countries"
                            @input="oncountries" />

                            <small >
                            PLease select the  country where you and your business legally operate.
                        </small>

                    </div>
                </div>



    <div class="col-4 " style="margin-left: 55px;">
                    <div class="form-group">
                        <label style="color: black;">Birthday</label>
                        <input type="date" class="form-control" v-model="form.birth">
                        <small >
                            PLease select your birth date.
                        </small>
                    </div>
                </div>

                <div class="col-4 mt-12" style="margin-left: 55px;">
                    <div class="form-group">
                        <label style="color: black;">How did you hear about us?</label>
                        <typehead :url="aboutURL" :initialize="form.about"
                            @input="onabout" />



                    </div>
                </div>
                <br>

                <div class="col-4 mt-12" style="margin-left: 55px;">
                    <button style="background-color: black; color: white; border-radius: 5px; height: 30px;
    width: 110px">
                        Continue
                    </button>
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


            onabout(e) {
                const about = e.target.value
                Vue.set(this.$data.form, 'about', about)
                Vue.set(this.$data.form, 'about_id', about.id)
                Vue.set(this.$data.form, 'about_title', about.title)

            },

            oncountries(e) {
                const countries = e.target.value
                Vue.set(this.$data.form, 'countries', countries)
                Vue.set(this.$data.form, 'countries_id', countries.id)
                Vue.set(this.$data.form, 'countries_title', countries.title)

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
 height: 6em;
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

.buttons::before {
 content: '';
 width: 0;
 height: 3em;
 border-radius: 10em;
 position: absolute;
 top: 0;
 left: 0;
 background-image: linear-gradient(to right, #b5beb8 0%, #52717e 100%);
 transition: .5s ease;
 display: block;
 z-index: -1;
}

.buttons:hover::before {
 width: 9em;
}
</style>
