<template>
<div class="main-portfolio">
    <div class="row">
        <div class="col-6" style="overflow-y: scroll; height: 800px;">
            <div class="row">
                <div class="col-6 dp">
                    <!-- <img
            src="/images/dp.png"/> -->

            <img v-if="influencer.influncer_profile_image == null" src='/influencer/no_image.png' style="width: 70px;
    height: 70px;
    border-radius: 50%;">

<img v-else  :src="'/influencer/' + influencer.influncer_profile_image" style="width: 70px;
    height: 70px;
    border-radius: 50%;">
            <p>{{ influencer.name }}</p>
                </div>
                <div class="col-6 icon">
                    <p>{{ formatFollowers(influencer.followers) }}</p>
                    <img v-if="favorite" style="height: 30%;"
                         src="/images/star-yello.png"/>
                    <img v-else style="height: 15%; cursor: pointer;" @click="fov(influencer.id)"
                         src="/images/download-removebg-preview (1).png"/>
                    
                    <svg xmlns="http://www.w3.org/2000/svg"  height="1em"  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                </div>
            </div>
            <div class="row ul-li" style="display: flex;flex-direction: column;align-content: center; gap: 25px;">
                <h2>Détails de l'influenceur</h2>
                <div class="col account">
                    <ul class="a-f">
                        <li>
                            <p>Follower <img src="/images/icon.png"/></p>
                            <p>{{ influencer.followers }}</p>
                        </li>

                        <li>
                            <p>Localisation <img src="/images/icon.png"/></p>
                            <p>{{ influencer.influencer_location }}</p>
                        </li>

                        <li>
                            <p>Fiabilité des followers <img src="/images/icon.png"/></p>
                            <p>{{ influencer.real_account }}</p>
                        </li>
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p>Reach <img src="/images/icon.png"/></p>
                            <p>{{ influencer.audience_1 }}</p>
                        </li>

                        <li>
                            <p>Engagement Rate<img src="/images/icon.png"/></p>
                            <p>{{ influencer.avg_engagement }}</p>
                        </li>

                        <li>
                            <p>Avg-Likes<img src="/images/icon.png"/></p>
                            <p>{{ influencer.avg_likes }}</p>
                        </li>
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p>No of Post<img src="/images/icon.png"/></p>
                            <p>{{ influencer.number_of_post}}</p>
                        </li>

                        <li>
                            <p>Avg. Comments <img src="/images/icon.png"/></p>
                            <p>{{ influencer.avg_comments}}</p>
                        </li>

                        <li>
                            <p>Following<img src="/images/icon.png"/> </p>
                            <p>{{ influencer.following}}</p>
                        </li>
                    </ul>
                </div>
                <h2>Reviews</h2>
                <div class="reviews">
                    <div class="reviews-1">
                        <img v-if="influencer.influncer_profile_image == null" src='/influencer/no_image.png' style="width: 50px;
    height: 50px;
    border-radius: 50%;">

<img v-else  :src="'/influencer/' + influencer.influncer_profile_image" style="width: 50px;
    height: 50px;
    border-radius: 50%;">
                        <p>{{ influencer.name}}</p>
                    </div>
                    <div class=" reviews-2">
                        <img
                         src="/images/more-icon.png"/>
                        <p>{{ formattedDate }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row Portfolio">
                <h2>Profil</h2>
                <div class="col-10 m-cads">
                    <div class="card-im">
                  
                </div>
                <div class="card-im">
                    <img
                    v-if="influencer.influncer_profile_image == null" src='/influencer/no_image.png' style="width: 150px; border-radius: 50px;"/>
                    <img v-else
                    :src="'/influencer/' + influencer.influncer_profile_image" style="width: 160px;
    border-radius: 50%;"/>
                </div>
                <div class="card-im">
                  

                </div>
                
                <!-- <div>
                    <button>View Profile</button>
                </div> -->
                </div>
                <div class="col text-center"><p>{{ influencer.bio }}</p></div>
                <div class="row">
                    <div class="col">
                        <a :href="influencer.url_link" target="_blank" ><button class="but" style="width: 150px">Lien vers le profil</button></a>
                    </div>

                    <div class="col">
                        <button class="but" @click="invite(influencer.id)">Invite</button>
                    </div>
                </div>
               </div>


               <div class="row ul-li" style="display: flex;flex-direction: column;align-content: center; gap: 25px;">
                <h2>Bio</h2>
                <div class="col account">
                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Nom d'utilisateur</p>
                            <p style="font-weight: bold;">{{ influencer.username }}</p>
                        </li>

                        

                    </ul>

                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Genre</p>
                            <p style="font-weight: bold;">{{ influencer.influencer_gender }}</p>
                        </li>

                        

                       
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Categorie</p>
                            <p style="font-weight: bold;">{{ influencer.category }}</p>
                        </li>

                        

                       
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Plateforme</p>
                            <p style="font-weight: bold;">{{ influencer.plateform}}</p>
                        </li>

                        

                        
                    </ul>
                </div>
                
            </div>

               <div class="row ul-li" style="display: flex;flex-direction: column;align-content: center; gap: 25px;">
                <h2>Audience</h2>
                <div class="col account">
                    <ul class="a-f">
                        <!-- <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Age de l'audience</p>
                            <p style="font-weight: bold;">{{ influencer.age_of_audience }}</p>
                        </li> -->

                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Pays du public</p>
                            <p style="font-weight: bold;">{{ influencer.country_audience }}</p>
                        </li>


                        

                    </ul>

                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">% Public 1</p>
                            <p style="font-weight: bold;">{{ influencer.audience_1 }}</p>
                        </li>

                        

                       
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">% Public 2</p>
                            <p style="font-weight: bold;">{{ influencer.audience_2 }}</p>
                        </li>

                        

                       
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Public 3</p>
                            <p style="font-weight: bold;">{{ influencer.audience_3}}</p>
                        </li>

                        

                        
                    </ul>
                </div>

                <div class="col account">
                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Ville d'audience</p>
                            <p style="font-weight: bold;">{{ influencer.city_of_audience }}</p>
                        </li>

                        

                       
                    </ul>
                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">Age de l'audience</p>
                            <p style="font-weight: bold;">{{ influencer.age_of_audience }}</p>
                        </li>



                        

                    </ul>
                    <ul class="a-f">
                        <li>
                            <p style="font-weight: bold; color:cornflowerblue;">sexe du public</p>
                            <p style="font-weight: bold;">{{ influencer.audience_gender }}</p>
                        </li>



                        

                    </ul>

                    

                   
                </div>
                
            </div>

               <!-- <div class="row Portfolio">
                <h2>Posts</h2>
                <div class="col-10 post" style="display: flex; justify-content: space-between;align-items: center;">
                    <div class="card">
                      <img src="/images/post-1.png" style="width:100%">
                      <div class="card-para">
                         <ul>
                            <li>
                                <p>Reach <br> 599</p>
                            </li>
                            <li>
                                <p>Impres <br>728</p>
                            </li>
                            <li>
                                <p>ER <br> 2.12%</p>
                            </li>
                         </ul>
                        </div>
                    </div>
                    <div class="card">
                      <img src="/images/post-2.png" style="width:100%">
                      <div class="card-para">
                         <ul>
                            <li>
                                <p>Reach <br> 599</p>
                            </li>
                            <li>
                                <p>Impres <br>728</p>
                            </li>
                            <li>
                                <p>ER <br> 2.12%</p>
                            </li>
                         </ul>
                        </div>
                    </div>
                    <div class="card">
                      <img src="/images/post-3.png" style="width:100%">
                        <div class="card-para">
                         <ul>
                            <li>
                                <p>Reach <br> 599</p>
                            </li>
                            <li>
                                <p>Impres <br>728</p>
                            </li>
                            <li>
                                <p>ER <br> 2.12%</p>
                            </li>
                         </ul>
                        </div>
                    </div>
                </div>
               </div> -->
            </div>
        </div>
    </div>
</template>
<style scoped>

.but{
    border: none;
    background-color: #420988;
    color: white;
    border-radius: 5px;
    padding: 2px 10px 2px 10px;
}
.card {
  width: 30%;
}
.card-para ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 5px;
    padding-top: 30px;
}
.card-para ul li{
    list-style: none;

    color: #000;
}

.card-para ul li p{
    font-size: smaller;
}
.Portfolio{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.Portfolio h2 {
    font-size: 30px;
    color: #000;
    font-weight: 400;
    padding-right: 64%;
    padding-top: 30px;
}
.m-cads{
    display: flex;
    justify-content:  space-between;
    align-items: center;
}
.card-im{
    flex: 0 0 calc(33.33% - 20px);
}
.reviews{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.reviews-1{
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 0px 50px;
}
.reviews-1 img {
    width: 25%;
}
.reviews-1 p {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    padding-top: 20px;
}
.reviews-2{
    padding: 0px 50px;
}
.reviews-2 img {
    width: 100%;
}
.reviews-2 p {
    font-size: 10px;
    font-weight: 600;
    color: #000;
    padding-top: 20px;
}
.dp {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 50px;
}
.dp img{
    width: 20%;
}
.dp p {
    font-size: 24px;
    font-weight: 400;
    color: #000;
    padding-top: 20px;
}
.icon {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    align-items: center;
}
.icon p{
    font-size: 20px;
    color: #000;
    padding-top: 18px;
}
.account ul {
    display: flex;
    gap: 43px;
    flex-direction: column;
    justify-content: space-between;
}
.account ul li{
    list-style: none;
}
.a-f p{
    font-size:14px;
    color: #000;
    font-weight: 300;
}
.a-f img {
    padding: 0px 0px 0px 5px;
}
.ul-li h2{
    font-size: 30px;
    font-weight:400;
    color: #000;
    padding:45px 0px 0px  50px;
}
.account {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<script>
import chartAreaDemo from "../../chart/demo/chart-area-demo";
import chartPieDemo from "../../chart/demo/chart-pie-demo";
import moment from 'moment';
import Vue from 'vue'

import VueSweetalert2 from 'vue-sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';

    import { get , byMethod} from '../admin/components/lib/api'

export default {
    components: {  VueSweetalert2},
  data () {

            return {
                currentDate: new Date(),
                influencer:{},
                favorite:false,
                
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


                created() {
                    console.log(this.$route.query.brand);
                    this.brand = this.$route.query.brand;
                    this.id = this.$route.params.id;

                    get('/api/solo_inf?id=' +this.id) .then((res) => {

                    console.log(res.data.data);
                    Vue.set(this.$data, 'influencer', res.data.data)
                    });

                    

                },

        methods: {

            formatFollowers(value) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'k';
      }
      return value.toString();
    },

            fov(e){
                    
                    get('api/favorite?id=' + e).then((res) => {
                    console.log(res.data.data);
                    if(res.data.saved) {
                            this.$swal.fire({
                                icon:'success',
                                title:'Added to Favorite list',
                                
                            })
                            this.favorite = true
                        }
                    
                });
            },

            invite(e){
                get('/api/influencer_email?id=' +e + '&brand=' + this.brand) .then((res) => {
                    console.log(res.data.data);
                    if(res.data.data) {
                            this.$swal.fire({
                                icon:'success',
                                title:'Email Sent',
                                text: 'Your request sent Influencer will contact you',
                            })
                        }
                    
                });
            },
            detailsPage(item) {
                this.$router.push(`/dashboard/${item.id}`)
            },
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                //this.page = this.model.current_page

                // console.log(res.data)
            },
            users(){
                get('/api/auth_users') .then((res) => {

                    // console.log(res.data.data);
                    Vue.set(this.$data, 'users_data', res.data.data)
                });
            }

        },

        computed: {
    formattedDate() {
      return moment(this.currentDate).format('MMMM Do YYYY, h:mm:ss a');
    },
},

        
};
</script>
