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
        <!-- <div class="col-4">

        <div class="col text-left">
            
            <div class="buttons"> <h2 style="    font-size: larger;
    margin-left: 30px;
    margin-top: 15px;
    font-weight: bold;
    color: black;
">Create a Campaign</h2>
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

        </div>
    </div> -->
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
">MarketPlace créateurs</h2>
            <!-- <button class="buttons" style="margin-left: 70px;"> <span style="font-size: large;"> Create a Campaign</span> -->
                <p style="    font-size: smaller;
    margin-left: 30px;
    margin-top: 15px;">Maintenant invitez les créateurs de contenu de votre choix en fonction des données sur leurs audience.</p>
    <button style="     margin-left: 30px;
    border: none;
    color: white;
    background-color: rgb(42, 44, 118);
    border-radius: 7px;
    font-size: smaller;
    padding: 5px 10px;" @click="creators">Les créateurs</button>
            </div>
<!-- </button> -->
        </div>
        </div>



    </div>
    <br>
    <br>
    <div class="col">
        <div class="row">
            <div class="col-6"> <h5 style="color: black; font-weight: bold;">{{ title_name == 'ugc'?'Les campagnes UGC Running':'Mes campagnes d influenceurs en cours'}}</h5></div>
            <div class="col-6 text-right"><button style=" border: none;
    color: white;
    background-color: rgb(42, 44, 118);
    border-radius: 7px;
    margin-bottom: 10px;

    padding: 5px 10px;"  @click="hitapi('Influencer Campaign')">Les campagnes influenceurs</button>

                <button style=" border: none;
    color: white;
    background-color: rgb(42, 44, 118);
    border-radius: 7px;
    padding: 5px 10px;
    margin-bottom: 10px;
   " @click="hitapi('UGC Campaign')">Les campagnes UGC</button>
            </div>
        </div>
        
       
    </div>
    
    <table  class="table table-link" style="color:#212F3D ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>

                        <th>Pays cible</th>
                        <th>Intérêt de l'audience</th>
                        <th>Genre</th>
                        <th>Canaux </th>
                        <th>Type d'action</th>
                        <th v-if="actions">Ajouter un produit UGC</th>



                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item , index) in model" :key="index" >
              

                        <td class="w-1">{{index +1}}</td>
                        <td class="w-1">{{item.campaign ? item.campaign : ''}}</td>
                       
                        <td class="w-3">{{item.country ? item.country : ''}}</td>
                        <td class="w-3">{{item.campaign_type ? item.campaign_type : ''}}</td>
                        <td class="w-3">{{item.gender ? item.gender : ''}}</td>
                        <td class="w-3">{{item.plateform ? item.plateform : ''}}</td>
                        <td class="w-3">{{item.action_type ? item.action_type : 'none'}}</td>
                        <td v-if="actions" class="w-3 text-right" style="cursor: pointer;"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill:#4da037; font-size: xx-large;" @click="ugc_porduct(item.id)"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg></td>

                       
                   
                    </tr>
                </tbody>
            </table>

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
                actions:true,
                form: {},
                title_name:'ugc',
                countriesURL:'/api/search/countries',
                aboutURL:'/api/search/about',

                countries:{},
                users_data:{},
                model: {
                    
                }
            }
        },
  name: "Dashboard",


  beforeRouteEnter(to, from, next) {
            get('/api/get_campaigns', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))

                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/get_campaigns', to.query)
                .then((res) => {
                    this.setData(res)
                    next()

                })
        },

        methods: {

            hitapi(e){
                if(e == 'Influencer Campaign'){
                    this.actions = false,
                this.title_name = 'influencer'
                }
                if(e == 'UGC Campaign'){
                    this.actions = true,
                this.title_name = 'ugc'
                }
                get('/api/get_campaigns?q=' + e)
                .then((res) => {
                    this.setData(res)
                   

                })
            },

            creators(){
                this.$router.push('/no_suggestion')
            },

            brief(){
                this.$router.push('/brief')
            },


           
            detailsPage(item) {
                this.$router.push(`/dashboard/${item.id}`)
            },
            setData(res) {
                console.log(res.data.data);
                Vue.set(this.$data, 'model', res.data.data)
                //this.page = this.model.current_page

                // console.log(res.data)
            },

            ugc_porduct(e){
                this.$router.push(`/ugc_porduct/${e}`)
            }


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
