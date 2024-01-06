<template>



  <div class="panel">




<!-- </div> -->
<div>

 <div class="panel-body ">
  <div class="col text-center">
    <h2 style="color: black;
  font-weight: 800;
  font-family: system-ui;
">Jobs you may be interested</h2>
  </div>
  <br>
 
  <div class="container back">
  
  <br>
  
  <div class="row">
      <div class="col" >
<div class="row">

  <div class="col-4">
<div class="input-group" v-if="filters">
  <div class="input-group-prepend">
    <span class="input-group-text">
      <i class="fas fa-fw fa-table"></i>
    </span>
  </div>
  <select class="form-control" v-model="selectedOption" @change="send(selectedOption , 'option')">
    <option value="newest">Newest</option>
    <option value="one month">One month older</option>
    <option value="two month">Two month older</option>
   

  </select>
</div>
</div>


  <div class="col-4" >
      <div class="form-group" v-if="filters">

                      <input type="text" class="form-control" placeholder="Search" v-model="form.bios"  @keyup.enter="send(form.bios, 'bios')">

                  </div>
  </div>
  <div class="col-4">
    <div style="    border: 1px solid rgb(195, 190, 190);
    border-radius: 20px;
    padding: 5px 45px;
    color: black;
    font-weight: 700;
    float: right;
    cursor: pointer;"  @click="filter(1)">
    <i class="fas fa-fw fa-filter"></i>

      Filter
    </div>
  </div>
  


</div>

<br>
<hr>








<div class="row">
<div class="card-container">

  <div class="card"  v-for="item in model.data">
      

      <div class="card-image" @click="portfolio(item.id)" style="    display: flex;
  justify-content: center;">
        <img v-if="item.product_image == null" src='/influencer/no_image.png' style="width: 80%; height: 100%; border-radius: 5px;">

        <img v-else  :src="'/uploads/' + item.product_image" style=" height: 100%; border-radius: 5px;     max-width: 100%;
    max-height: 100%;     min-width: 100%;
    min-height: 100%;

">
       
        <!-- <img v-else  :src="https://scontent.cdninstagram.com/v/t51.2885-19/391379106_710351987602941_6845938254589432177_n.jpg?stp=dst-jpg_s80x80&_nc_cat=106&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=fGdV-b-sMewAX963hYS&_nc_ht=scontent.cdninstagram.com&oh=00_AfC0po7g9Zqzyf7flpWkcEskJVPRog0wMsB1NijM8rB01w&oe=6563CD91" style=" height: 100%; border-radius: 50%;"> -->
  <!-- <img src="https://www.instagram.com/p/CxicCGCN8VM/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" style="width: 99%; border-radius: 20px;"> -->
</div>
      <div class=" row mt-2">
        <div class=" image-container col-2">

          <img v-if="item.action_type_plateform =='Instagram'" src="/images/instagram.png" style="height: 60%;" alt="Illustration Image">
          
          <img v-if="item.action_type_plateform =='Facebook'" src="/images/facebook (1).png" style="height: 60%;" alt="Illustration Image">
         
          <img v-if="item.action_type_plateform =='Tiktok'" src="/images/tiktok.png" style="height: 60%;" alt="Illustration Image">
          <img v-if="item.action_type_plateform =='linkedin'" src="/images/linkedin.png" style="height: 60%;" alt="Illustration Image">

        </div>
        <!-- <div class="col text-right">

          <button class="butt" @click="emailsent(item.id)">Invite</button>
</div> -->
    </div>
    <div class="content">
      <!-- <div class="category"> Illustration </div> -->
      <div class="row">
          <div class="col-6" style="font-weight: bold; color: black;">{{ item.product_name }}</div>
          <div class="col-6 text-right" style="font-weight: bold; color: black;">{{ item.number_of_product }}</div>

      </div>
      <div class="row">
          <div class="col-6" style="font-size: 12px;">{{ item.media_type_raw }}</div>
          <!-- <div class="col-6 text-right" style="font-size: 12px;">Followers:{{ item.followers }}</div> -->

      </div>

    </div>
  </div>




</div>
</div>
</div>


</div>
<br>
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
            filters:false,
            button_click:false,
            gender:false,
            Taux:false,
              selectedOption:'',
              form: {},
              countriesURL:'/api/search/countries',
              aboutURL:'/api/search/about',
              place:'',
              favorite:{},

              countries:{},
              users_data:{},
              model: {
                  data:[]
              }
          }
      },
name: "Dashboard",


beforeRouteEnter(to, from, next) {
          get('/api/influencer_brand', to.query)
              .then((res) => {
                  next(vm => vm.setData(res))

              })
      },
      beforeRouteUpdate(to, from, next) {
          get('/api/influencer_brand', to.query)
              .then((res) => {
                  this.setData(res)
                  next()

              })
      },

      methods: {

        filter(e){
          console.log(e);
          this.filters = true;
        },

        emailsent(e){
          get('/api/influencer_email?id=' +e) .then((res) => {
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

            get('/api/influencer_brand/?q=' +e).then((res) => {
                    this.setData(res)
                  

                })
          }

          if(f == 'bios'){

          get('/api/influencer_brand/?bios=' +e).then((res) => {
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

      if(f == 'decss'){
          console.log(e);

      get('/api/influencers/?decss=' +e).then((res) => {
              this.setData(res)
            

          })
      }
        },

          portfolio(e){
            this.$router.push(`/brand_detail/${e}`)
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
            console.log(res.data.data)
              Vue.set(this.$data, 'model', res.data.data)
              // Vue.set(this.$data, 'favorite', res.data.fav)

              //this.page = this.model.current_page
              this.page = this.model.current_page

              // console.log(res.data.fav)
          },


          nextPage() {
              if(this.model.next_page_url) {
                  const query = Object.assign({}, this.$route.query)
                  query.page = query.page ? (Number(query.page) + 1) : 2

                  this.$router.push({
                      path: '/influencerdashboard',
                      query: query
                  })
              }
          },

          prevPage () {
              if(this.model.prev_page_url) {
                  const query = Object.assign({}, this.$route.query)
                  query.page = query.page ? (Number(query.page) - 1) : 1

                  this.$router.push({
                      path: '/influencerdashboard',
                      query: query
                  })
              }
          }


      } 
};
</script>

<style scoped>
.back{
  background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  flex: 0 0 calc(25% - 20px);
    background: white;
    padding: 0.4em;
    border-radius: 10px;
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
