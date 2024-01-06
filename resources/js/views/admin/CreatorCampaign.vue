<template>
  <div class="contanir">
    <div class="row">
      <div class="col-xl-12 col-lg-11">
        <div class="card shadow mb-4">

          <div
            class="
              card-header
              py-3
              d-flex
              flex-row
              align-items-center
              justify-content-between
            "
          >
            <h6 class="m-0 font-weight-bold text-primary">Statistiques inscriptions</h6>
            <!-- <h6 class="m-0 font-weight-bold text-primary">Total Profit : {{this.$data.model[7]}}</h6> -->
            <div class="dropdown no-arrow">
              <a

                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="
                  dropdown-menu dropdown-menu-right
                  shadow
                  animated--fade-in
                "
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col ul-title">
          <h4>Campagne crées</h4>
          <p>{{ formattedDate }}</p>
        </div>
    <div class="row" style="padding-top: 30px;">

      <div class="col-4">
            <div class="card">
              <div class="card-body-2">
                <div class="img">
                  <img src="/images/user (1).png" style="width: 75%; padding-left: 12px;"/>
                </div>
               <h5 class="card-title">{{ community_management }}</h5>
                 <p class="card-text">Total Brands</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body-2">
                <div class="img">
                  <img src="/images/user (1).png" style="width: 75%; padding-left: 12px;"/>
                </div>
               <h5 class="card-title">{{ influencer_campaign }}</h5>
                 <p class="card-text">Influencer Campaign</p>
                </div>
            </div>
          </div>
           <div class="col-4">
            <div class="card">
              <div class="card-body-2">
                <div class="img">
                  <img src="/images/user (1).png" style="width: 75%;padding-left: 12px;"/>
                </div>
               <h5 class="card-title">{{ ugc_campaign }}</h5>
                 <p class="card-text">UGC Campaign</p>
                </div>
            </div>
          </div>
    </div>
    <div class="row" style="padding-top: 20px;">
      <div class="col-4">
            <div class="card">
              <div class="card-body-2">
                <div class="img">
                  <img src="/images/user (1).png" style="width: 75%;padding-left: 12px;"/>
                </div>
               <h5 class="card-title">{{ women }}</h5>
                 <p class="card-text">Influencers Singup</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body-2">
                <div class="img">
                  <img src="/images/user (1).png" style="width: 75%;padding-left: 12px;"/>
                </div>
               <h5 class="card-title">{{ men }}</h5>
                 <p class="card-text">Total Budget</p>
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body-2">
                <div class="img">
                  <img src="/images/user (1).png" style="width: 75%;padding-left: 12px;"/>
                </div>
               <h5 class="card-title">{{ other }}</h5>
                 <p class="card-text">New Clients</p>
                </div>
            </div>
          </div>
    </div>
    <div class="row" style="padding-top: 30px;">
      <div class="col-6 Country">
        <div class="col ul-title">
          <h4>Localisation des marques inscrites</h4>
          <p>{{ formattedDate }}</p>
        </div>
        <ul v-for="item in country">
          <li class="li_list" v-if="item.company_data == 'Espagne 🇪🇸'">
            <div class="li_img" ><img src="/images/spain-c.png" style="width: 30%;"/><p>Spain</p></div>
            <p>{{ item.user_count }}</p>
          </li>
          <li class="li_list" v-if="item.company_data == 'Maroc 🇲🇦'">
            <div class="li_img" ><img src="/images/morocco-c.png" style="width: 26%;"/><p>Morocco</p></div>
            <p>{{ item.user_count }}</p>
          </li>
          <li class="li_list" v-if="item.company_data == 'Côte dIvoire 🇨🇮'">
            <div class="li_img" ><img src="/images/ivory-coast-c.png" style="width: 23%;"/><p>Ivory-coast</p></div>
            <p>{{ item.user_count }}</p>
          </li>
          <li class="li_list" v-if="item.company_data == 'Tunisie 🇹🇳'">
            <div class="li_img" ><img src="/images/tunisia-c.png" style="width: 30%;"/><p>Tunisia</p></div>
            <p>{{ item.user_count }}</p>
          </li>
          <li class="li_list" v-if="item.company_data == 'France 🇫🇷'">
            <div class="li_img" ><img src="/images/tunisia-c.png" style="width: 30%;"/><p>Tunisia</p></div>
            <p>{{ item.user_count }}</p>
          </li>
        </ul>
      </div>
      <div class="col-6 Country">
        <div class="col ul-title">
          <h4>Comment ils nous en connus ?</h4>
          <p>{{ formattedDate }}</p>
        </div>
        <ul v-for="datas in rec">
          <li class="li_list" v-if="datas.company_recommandation == 'Instagram / Linked In'">
            <div class="li_img"><img src="/images/instagram-c.png" style="width: 25%;"/><p>Instagram</p></div>
            <p>{{ datas.recommand }}</p>
          </li>
          <li class="li_list" v-if="datas.company_recommandation == 'Google'">
            <div class="li_img"><img src="/images/chrome-c.png" style="width: 28%;"/><p>Google</p></div>
            <p>{{ datas.recommand }}</p>
          </li>
          <li class="li_list" v-if="datas.company_recommandation == 'Recommandation'">
            <div class="li_img"><img src="/images/ivory-coast-c2.png"  style="width: 23%;"/><p>Recommandation</p></div>
            <p>{{ datas.recommand }}</p>
          </li>
          <li class="li_list" v-if="datas.company_recommandation == 'Par hasard'">
            <div class="li_img"><img src="/images/messsag-c.png"  style="width: 23%;"/><p>Par hasard</p></div>
            <p>{{ datas.recommand }}</p>
          </li>

          <li class="li_list" v-if="datas.company_recommandation == 'E-mail'">
            <div class="li_img"><img src="/images/messsag-c.png"  style="width: 28%;"/><p>Email</p></div>
            <p>{{ datas.recommand }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="row" style="padding-top: 30px;">
      <div class="col-6 Country">
        <div class="col ul-title">
          <h4>Industries représentés</h4>
          <p>{{ formattedDate }}</p>
        </div>
        <ul v-for="cat in category ">
          <li class="li_list" v-if="cat.company_category == 'Autre'">
            <div class="li_img"><img src="/images/spin-1.png" style="width: 28%;"/><p>Clothes</p></div>
            <p>{{ cat.category }}</p>
          </li>
          <li class="li_list" v-if="cat.company_category == 'Other'">
            <div class="li_img"><img src="/images/Group 536.png" style="width: 18%;"/><p>Food and Drinks</p></div>
            <p>{{ cat.category }}</p>
          </li>
          <li class="li_list" v-if="cat.company_category == 'Nourriture et boissons'">
            <div class="li_img"><img src="/images/Group 537.png" style="width: 22%;"/><p>Home Items</p></div>
            <p>{{ cat.category }}</p>
          </li>
          <li class="li_list" v-if="cat.company_category == 'Des sports'">
            <div class="li_img"><img src="/images/Group 538.png" style="width: 28%;"/><p>Sports</p></div>
            <p>{{ cat.category }}</p>
          </li>
        </ul>
      </div>
      <div class="col-6 Country">
        <div class="col ul-title">
          <h4>Type de commerce</h4>
          <p>{{ formattedDate }}</p>
        </div>
        <ul v-for="ty in type">
          <li class="li_list" v-if="ty.company_type == 'Entreprise B2C'">
            <div class="li_img"><img src="/images/Group 540.png"  style="width: 23%;"/><p>Entreprise B2C</p></div>
            <p>{{ ty.type }}</p>
          </li>
          <li class="li_list" v-if="ty.company_type == 'E-commerce'">
            <div class="li_img"><img src="/images/c1.png" style="width: 20%;"/><p>E-commerce</p></div>
            <p>{{ ty.type }}</p>
          </li>
          <li class="li_list" v-if="ty.company_type == 'Agence'">
            <div class="li_img"><img src="/images/c2.png" style="width: 28%;"/><p>Agency</p></div>
            <p>{{ ty.type }}</p>
          </li>
          <li class="li_list" v-if="ty.company_type == 'Application mobile'">
            <div class="li_img"><img src="/images/Group 541.png"  style="width: 23%;"/><p>Mobile app</p></div>
            <p>{{ ty.type }}</p>
          </li>
          
        </ul>
      </div>


    </div>
    <hr>

    <div class="row">
  
    
  <div class="col-6">
    <div class="card">
      <h4 style="    text-align: center;
    color: black;
    margin-bottom: 10px;
    margin-top: 10px;
">Campagnes Crées Short</h4>
    <table  class="table table-striped table-sm table-hover" style="color:#212F3D; cursor: pointer;">
                <thead class="thead-dark">
                    <tr>
                        <!-- <th>ID</th> -->
                        <th>Type de campagne</th>
                        <th>User </th>
                      <th>Objectif</th>
                        <th>Client ID</th>
                        <th>Budget</th>
                        <!-- <th>Type</th> -->
                        <th>Action type</th>
                        
                        <th>Action </th>
                        



                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item , index) in camp" :key="index"  >
              

                       
                        <td class="w-1" @click="detailpage(item.id)">{{item.campaign ? item.campaign : ''}}</td>
                       
                        <!-- <td v-if="item.user = null"  class="w-1" @click="detailpage(item.id)">{{''}}</td>
                        <td v-else  class="w-1" @click="detailpage(item.id)">{{item.user}}</td> -->
                        <td  class="w-1" >{{item.user ? item.user.first_name :'-----'}}</td>
                        
                        <td class="w-1" @click="detailpage(item.id)">{{item.marketing_objective ? item.marketing_objective : ''}}</td>
                        <td  class="w-1" >{{item.user ? item.user.id :'-----'}}</td>

                        <!-- <td class="w-3" @click="detailpage(item.id)">{{item.country ? item.country : '0.00'}}</td> -->
                        <!-- <td class="w-3">{{item.campaign_type ? item.campaign_type : ''}}</td> -->
                        <td class="w-3" @click="detailpage(item.id)">{{item.hire_budget ? item.hire_budget : '0.00'}}</td>
                        <td class="w-3" @click="detailpage(item.id)">{{item.plateform ? item.plateform : ''}}</td>
                        <td class="w-3" style="cursor: pointer;"> <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill:#4da037; font-size: xx-large;" @click="influencer(item.id)">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg></td>



                        <!-- <td class="w-3">{{item.action_type ? item.action_type : 'none'}}</td> -->
                       

                       
                   
                    </tr>
                </tbody>
            </table>
  </div>
</div>


<div class="col-6">
    <div class="card">
      <h4 style="    text-align: center;
    color: black;
    margin-bottom: 10px;
    margin-top: 10px;
">Marques inscrites</h4>
    <table  class="table table-striped table-sm table-hover" style="color:#212F3D; cursor: pointer ">
                <thead class="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>

                        
                        
                        <!-- <th>Type</th> -->
                        <th>Phone number</th>
                        <th>Country</th>
                        <th>website </th>
                        <th>Company  </th>
                        <!-- <th>Action </th> -->
                        



                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item , index) in use" :key="index" @click="user_detail(item.id)">
              

                      <td class="w-1">{{item.id}}</td>
                       
                        <td class="w-1">{{item.first_name ? item.first_name : ''}}</td>
                        <td class="w-1">{{item.phone? item.phone: '---'}}</td>
                        <td class="w-3">{{item.company_data ? item.company_data : ''}}</td>
                        <!-- <td class="w-3">{{item.campaign_type ? item.campaign_type : ''}}</td> -->
                        <td class="w-3">{{item.company_recommandation ? item.company_recommandation : ''}}</td>
                        <td class="w-3">{{item.website ? item.website : ''}}</td>


                        <!-- <td class="w-3">{{item.action_type ? item.action_type : 'none'}}</td> -->
                       

                       
                   
                    </tr>
                </tbody>
            </table>
  </div>
</div>


</div>

<hr>
  </div>
</template>
<script>
import chartAreaDemo from "../../chart/demo/chart-area-demo";
import chartPieDemo from "../../chart/demo/chart-pie-demo";
import Vue from 'vue'
import moment from 'moment';

  import { get , byMethod} from '../admin/components/lib/api'
  import Typehead from '../admin/components/typehead/Typehead.vue'
  // import ApexCharts from "apexcharts";
  
 
  

export default {
  components: { Typehead },
data () {
          return {
         
    country:[],
    category:[],
    rec:[],
    type:[],
    camp:[],
    use:[],
    community_management:{},
    influencer_campaign:{},
    women:{},
    men:{},
    other:{},
    ugc_campaign:{},
              form: {},
              users_data:{},
              model: {
                  data: []
              }
          }
      },
name: "Dashboard",

mounted() {
    chartAreaDemo();
    
  },
  computed: {
    formattedDate() {
      return moment(this.currentDate).format('MMMM Do YYYY');
    },
  },
beforeRouteEnter(to, from, next) {
            get('/api/query', to.query)
            
                .then((res) => {
                 
                    next(vm => vm.setData(res))
                })
                
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/query', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },

        created(){
            this.load();
            this.users();
            this.campaignss();
        },

  
methods: {

  influencer(e){
            this.$router.push(`/influencer_suggest/${e}`)
            // this.$router.push(`/compaigns_ucg`)

            },

  user_detail(e){
    this.$router.push(`/user_details/${e}`)
  },

  detailpage(e){
    console.log(e);

    this.$router.push(`/details/${e}`)

    // get('/api/details?id=' +e)
    //             .then((res) => {
                

                 
    //             })
  },

  campaignss(){
    get('/api/campaignss')
                .then((res) => {
                

                  Vue.set(this.$data, 'community_management', res.data.community_management)
                  Vue.set(this.$data, 'influencer_campaign', res.data.influencer_campaign)
                  Vue.set(this.$data, 'ugc_campaign', res.data.ugc_campaign)
                  Vue.set(this.$data, 'women', res.data.gender1)
                  Vue.set(this.$data, 'men', res.data.gender2)
                  Vue.set(this.$data, 'other', res.data.gender3)





                })
  },

  users(){
    get('/api/use')
                .then((res) => {
                

                  Vue.set(this.$data, 'use', res.data.user)
                })
  },
  load(){
    get('/api/camp')
                .then((res) => {
                  // console.log(res.data.camp)

                  Vue.set(this.$data, 'camp', res.data.camp)
                })

  },
  setData(res){
    // console.log(res.data.data);

    Vue.set(this.$data, 'country', res.data.data)
    Vue.set(this.$data, 'category', res.data.category)
    Vue.set(this.$data, 'rec', res.data.rec)
    Vue.set(this.$data, 'type', res.data.type)



  }
}
};
</script>

<style scoped>
.card{
     width: 100%; 
      border: none;
     border-radius: 10px;
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.card-text{
     font-size: 15px;color: #000;
     font-weight: 200;
     text-align: center;
}
.card-body-2{
  display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;
}
.card-title{
font-size: 18px;
color: #000;
font-weight: 200; 
padding-top: 8px;
}
.li_img{
    display: flex;
    gap: 0px 15px;
    align-items: center;
       
}
.li_img  p{
  font-size: 18px;
  color: #000;
  font-weight: 400;
  padding-top: 10px;
}
.Country ul{
  list-style: none;
  padding-top: 24px;
}
.li_list{
     display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 24px;
}
.li_list p{
  font-size: 18px;
  font-weight: 400;
  color: #000;
  padding-top: 10px;
}
.ul-title{
     display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
}
.ul-title h4{
  color: #000;
    font-weight: 400;
    padding-left: 30px;
}
.ul-title p {
    padding-top: 10px;
    font-size: 15px;
    color: #000;
    font-weight: 200;
}
</style>