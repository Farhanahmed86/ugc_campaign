<template>



    <div class="panel">




<!-- </div> -->
<div>

   <div class="panel-body ">
    <br>
    <div class="row">
        <div class="col-10" style="overflow-y: scroll; overflow-x: hidden; height: 600px;">
          <div  v-if="filter_input">
          <div class="row">

<div class="col-3">
  <label>Filter</label> 
<div class="input-group">

<div class="input-group-prepend">
  <span class="input-group-text">
    <i class="fas fa-fw fa-table"></i>
  </span>
</div>

<select class="form-control" v-model="form.plateform">
  <option value="instagram">Instagram</option>
  <option value="facebook">Facebook</option>
  <option value="tiktok">Tiktok</option>
  <option value="youtube">Youtube</option>

</select>
</div>
</div>


<div class="col-4">
    <div class="form-group">
      <label>Rechercher un influenceur</label>

                    <input type="text" class="form-control" placeholder="Rechercher un influenceur" v-model="form.bios">

                </div>
</div>
<div class="col-2">

    <div class="form-group">
      <label>Hashtags</label>

<input type="text" class="form-control" placeholder="Hashtags" v-model="form.hashtags" >

</div>
</div>

<div class="col-2 text-center">
  <label>Gender</label>
<select class="form-control" v-model="form.tags">
<option value="Male">Men</option>
  <option value="Female">Women</option>
  

  
</select>
</div>


</div>

<div class="row">
  <div class="col-2">
    <label>Taux d'engagement</label>
    <select class="form-control" v-model="form.engagement" >
    <option value="1%">1%</option>
      <option value="2%">2%</option>
      <option value="3%">3%</option>
      <option value="4%">4%</option>
      <option value="5%">5%</option>
      <option value="6%">6%</option>
      <option value="7%">7%</option>
      <option value="10%">10%</option>
      <option value="12%">12%</option>
      <option value="15%">15%</option>
      <option value="20%">20%</option>
      <option value="25%">25%</option>
      <option value="30%">30%</option>
    </select>
  </div>

  <div class="col-4">
    <div class="col text-center">
    <label>gamme d'abonnés</label>
  </div>
    <div class="row">
      <div class="col">
    <select class="form-control" v-model="form.firstfollowers" >
    <option value="10000">10k</option>
      <option value="20000">20k</option>
      <option value="30000">30k</option>
      <option value="40000">40k</option>
      <option value="50000">50k</option>
      <option value="60000">60k</option>
      <option value="70000">70k</option>
      <option value="80000">80k</option>
      <option value="90000">90k</option>
      <option value="100000">100k</option>








    </select>
  </div>
<div class="col">
    <select class="form-control" v-model="form.secondfollowers">
    <option value="200000">200k</option>
      <option value="300000">300k</option>
      <option value="400000">400k</option>
      <option value="500000">500k</option>
      <option value="600000">600k</option>
      <option value="700000">700k</option>
      <option value="800000">800k</option>
      <option value="900000">900k</option>
      <option value="1000000">1M</option>
      <option value="2000000">2M</option>
      <option value="3000000">3M</option>
      <option value="4000000">4M</option>
      <option value="5000000">5M</option>
      <option value="6000000">6M</option>
      <option value="7000000">7M</option>
      <option value="8000000">8M</option>
      <option value="9000000">9M</option>
      <option value="10000000">10M</option>
      <option value="12000000">12M</option>
      <option value="15000000">15M</option>
      <option value="20000000">20M</option>



















    </select>
  </div>
  </div>
  </div>

  <div class="col-2">
    <label>Age</label> 
    <select class="form-control" v-model="form.agerange" >
    <option value="13-40">13-40</option>
      <option value="18-50">18-50</option>
      <option value="13-50">13-50</option>

    </select>
  </div>
  <div class="col-3">
    <label>Comté d'influenceur</label> 
    
    <typehead    :url="countriestURL" :initialize="form.influencercountries"
                            @input="onCountry($event)" style=""/>
  
  </div>
</div>
<div class="row mt-3">
<div class="col-4">
<label>comté d'audience</label> 

<typehead    :url="countriestURL" :initialize="form.audiencecountries"
                        @input="onCountries($event)" style=""/>

</div>

<div class="col-4">
<label>Vrai compte</label> 
<select class="form-control" v-model="form.real">
<option value="10%">10%</option>
  <option value="20%">20%</option>
  <option value="30%">30%</option>
  <option value="40%">40%</option>
  <option value="50%">50%</option>
  <option value="60%">60%</option>
  <option value="70%">70%</option>
  <option value="80%">80%</option>
  <option value="90%">90%</option>
  <option value="100%">100%</option>








</select>
</div>

<div class="col-2 mt-4">
<button class="butts" @click="filterdata">Search</button>
</div>
</div>
<br>
</div>
<div class="row">
  <div class="col"><h2 style="color:black; font-weight:bold">Les créateurs</h2></div>
  <div class="col">
    <div class="row">
      <div class="col text-right">
    <div style="    border: 1px solid rgb(72 211 27);
    border-radius: 20px;
    padding: 5px 45px;
    color: rgb(32, 199, 32);
    font-weight: 700;
    float: right;
    cursor: pointer;"  @click="showfilter(1)">
    <i class="fas fa-fw fa-filter"></i>

     Show Filter
    </div>
  </div>
<div class="col">
    <div style="    border: 1px solid rgb(247 6 6);
    border-radius: 20px;
    padding: 5px 45px;
    color: rgb(221, 7, 7);
    font-weight: 700;
    float: right;
    cursor: pointer;"  @click="hidefilter(1)">
    <i class="fas fa-fw fa-filter"></i>

     Hide Filter
    </div>
  </div>
</div>
  </div>

</div>




  <div class="form-group " style="margin-top: 40px;">
                        <div class="custom-control custom-checkbox large">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" style="color: black; font-size: medium; font-weight: bold;" for="customCheck"
                            >Parcourez les profils et mettez en favoris ou invitez vos préférés</label
                          >

                          </div>
                          </div>




                          <div class="row">
  <div class="card-container">

    <div class="card"  v-for="item in model.data">
        

        <div class="card-image" @click="portfolio(item.id)" style="    display: flex;
    justify-content: center;">
          <img v-if="item.influncer_profile_image == null" src='/influencer/no_image.png' style=" height: 100%; border-radius: 50%;">

          <img v-else  :src="'/influencer/' + item.influncer_profile_image" style="width: 80%; height: 100%; border-radius: 50%;">
    <!-- <img src="https://www.instagram.com/p/CxicCGCN8VM/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" style="width: 99%; border-radius: 20px;"> -->
</div>
        <div class=" row mt-2">
          <div class=" image-container col-2">

            <img v-if="item.plateform =='instagram'" src="/images/instagram.png" style="height: 80%;" alt="Illustration Image">
            
            <img v-if="item.plateform =='facebook'" src="/images/facebook (1).png" style="height: 80%;" alt="Illustration Image">
           
            <img v-if="item.plateform =='tiktok'" src="/images/tiktok.png" style="height: 80%;" alt="Illustration Image">
            <img v-if="item.plateform =='youtube'" src="/images/youtube.png" style="height: 80%;" alt="Illustration Image">

          </div>
          <div class="col text-right">

            <button class="butt" @click="emailsent(item.id)">Invite</button>
</div>
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">{{ item.name }}</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">Likes:{{ item.avg_likes }}</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">{{ item.influencer_location }}</div>
            <div class="col-6 text-right" style="font-size: 12px;">Followers:{{ formatFollowers(item.followers) }}</div>

        </div>

      </div>
    </div>



  </div>
</div>
</div>

<div class="col-2">
<span style="font-size: 20px; color: black;">Favorite List</span>
<ul v-for="fav in favorite" v-if="favorite[0]">
  <li>{{ fav.name }}</li>
</ul>

<p v-if="favorite == null">No creators have been added to your list yet . Use the search features to find creators and add them!</p>


</div>

</div>

</div>

<div class="panel-footer flex-between text-center mt-4">
            <div>
                <small style="font-weight: bold;">Showing {{model.from}} - {{model.to}} of {{model.total}}</small>
            </div>
            <div>
                <button class="btn btn-lg " style="     color: black;
    font-weight: bold;
    background-color: rgb(111, 120, 129);
    border-radius: 40px;
    font-size: smaller;
    padding: 14px 11px" :disabled="!model.prev_page_url" @click="prevPage">
                    Prev
                </button>
                <button class="btn btn-lg" style="     color: white;
    font-weight: bold;
    background-color: rgb(33, 47, 61);
    border-radius: 40px;
    font-size: smaller;
    padding: 14px 11px" :disabled="!model.next_page_url" @click="nextPage">
                    Next
                </button>
            </div>
        </div>



   </div>

</div>

</template>

<script>

import Vue from 'vue'

    import { get , byMethod} from '../admin/components/lib/api'
    import Typehead from '../admin/components/typehead/Typehead.vue'
    import VueSweetalert2 from 'vue-sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';

export default {
    components: { Typehead , VueSweetalert2 },
  data () {
            return {
              filter_input:false,
              countriestURL: '/api/search/countries',
              button_click:false,
              gender:false,
              Taux:false,
                selectedOption:'',
                form: {},
                favorite:{},
                countriesURL:'/api/search/countries',
                aboutURL:'/api/search/about',
                place:'',

                countries:{},
                users_data:{},
                model: {
                    data:[]
                }
            }
        },
  name: "Dashboard",


  beforeRouteEnter(to, from, next) {
            get('/api/influencers', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))

                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/influencers', to.query)
                .then((res) => {
                    this.setData(res)
                    next()

                })
        },

        created() {
                    console.log(this.$route.params.id);
                    this.id = this.$route.params.id;

                   
                    

                },

        methods: {
          hidefilter(){
            this.filter_input = false
          },

          showfilter(){
            this.filter_input = true
          },

          formatFollowers(value) {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M';
      } else if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'k';
      }
      return value.toString();
    },

          filterdata(){
            const queryParams = new URLSearchParams(this.form);
            get('/api/influencers/?'  + queryParams.toString()).then((res) => {
                      this.setData(res)
                    
  
                  })
          
          },
          onCountry(e) {
                
                const countries = e.target.value
                Vue.set(this.form, 'influencercountries', countries)
                Vue.set(this.form, 'countries_name', countries.name)

                // Vue.set(this.form, 'countries_id', countries.id)
            },

            onCountries(e) {
                
                const countries = e.target.value
                Vue.set(this.form, 'audiencecountries', countries)
                Vue.set(this.form, 'audience_countries_name', countries.name)

                // Vue.set(this.form, 'countries_id', countries.id)
            },

          emailsent(e){
            get('/api/influencer_email?id=' +e + '&brand=' + this.id) .then((res) => {
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

          show_input(e){
            if(e == 'Genre'){
              console.log(e);
              this.button_click = false
              this.Taux = false
              this.gender = true

            }
            else if(e =='Taux'){
              this.gender = false
              this.button_click = false
              this.Taux = true
            }
            else{
              this.Taux = false
              this.gender = false
              this.button_click = true
            }
            
            
            this.form.tags = '',
            
            this.place = e
          },

          send(e, f){
            console.log(e);
            if(f == 'option'){

              get('/api/influencers/?q=' +e).then((res) => {
                      this.setData(res)
                    
  
                  })
            }

            if(f == 'bios'){

            get('/api/influencers/?bios=' +e).then((res) => {
                    this.setData(res)
                  

                })
            }

            if(f == 'hash'){

          get('/api/influencers/?hash=' +e).then((res) => {
                  this.setData(res)
                

              })
          }

          if(f == 'decs'){
            console.log(e);

        get('/api/influencers/?decs=' +e).then((res) => {
                this.setData(res)
              

            })
        }
          },

          portfolio(e){
              this.$router.push({
            path: `/portfolio/${e}`,
            query: { brand: this.id }
          });
                // this.$router.push(`/portfolio/${e}`);
            },


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
                Vue.set(this.$data, 'model', res.data.data)
                Vue.set(this.$data, 'favorite', res.data.fav)
                //this.page = this.model.current_page
                this.page = this.model.current_page

                console.log(res.data.data.data)
            },


            nextPage() {
                if(this.model.next_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) + 1) : 2

                    this.$router.push({
                        path: `/compaigns_ucg/${this.id}`,
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: `/compaigns_ucg/${this.id}`,
                        query: query
                    })
                }
            }


        } 
};
</script>

<style scoped>
.butts{
  border: none;
    color: white;
    background-color: #420988;
    border-radius: 5px;
    padding: 9px 25px;
}
.buttons {
    background-color: #ffffff;
 width: 11em;
 height: 3em;
 border-radius: 5px;
 font-size: 12px;
 font-family: inherit;
 border: none;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 4px 4px 8px #c5c5c5,
             -4px -4px 8px #ffffff;

}

.buttonss {
    background-color: #ffffff;
 width: 16em;
 height: 3em;
 border-radius: 5px;
 font-size: 12px;
 font-family: inherit;
 border: none;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 4px 4px 8px #c5c5c5,
             -4px -4px 8px #ffffff;

}

.buttonsss {
    background-color: #ffffff;
 width: 6em;
 height: 3em;
 border-radius: 5px;
 font-size: 12px;
 font-family: inherit;
 border: none;
 position: relative;
 overflow: hidden;
 z-index: 1;
 box-shadow: 4px 4px 8px #c5c5c5,
             -4px -4px 8px #ffffff;

}
.card-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjust alignment as needed */
  gap: 20px; /* Adjust the gap between cards */
}

.butt{
  border: none;
    color: white;
    background-color: #420988;
    border-radius: 5px;
    padding: 2px 20px;
}
/* .card {
    display: flex;
  width: 25%;
  background: white;
  padding: .4em;
  border-radius: 6px;
  gap: 10px;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 170px;
  border-radius: 6px 6px 0 0;
} */


.card {
  flex: 0 0 calc(33.33% - 20px); /* Adjust the width (33.33% for 3 cards in a row) and gap */
  background: white;
  padding: .4em;
  border-radius: 24px;
  display: flex;
}

.card-image {
  /* background-color: rgb(236, 236, 236); */
  width: 100%;
  height: 200px;
  border-radius: 12px 12px 0 0;
}
.image-container img {

  width: 100%;
  height: 100%;
 /* Preserve the aspect ratio and cover the container */
}


.card-image:hover {
  transform: scale(0.98);
  cursor: pointer;
}
.content {
  flex-grow: 1;
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}
.image-container {
  width: 40px; /* Adjust the width of the image container */
  height: 40px; /* Adjust the height of the image container */
  border-radius: 50%; /* Create a rounded shape */
  overflow: hidden;
  margin-right: 10px; /* Adjust the margin between the image and content */
}

.heading {
  font-weight: 600;
  color: rgb(88, 87, 87);
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}


</style>
