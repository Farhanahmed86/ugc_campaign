<template>



    <div class="panel">
        <h4 style="color:black; margin-left: 30px;">Creatives Library</h4>

        <div class="row" style="padding-top: 10px; margin-left: 30px;">
<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>



  </div>




<!-- </div> -->
<div>

   <div class="panel-body ">




<br>






















</div>



   </div>

</div>

</template>

<script>

import Vue from 'vue'

    import { get , byMethod} from '../admin/components/lib/api'
    import Typehead from '../admin/components/typehead/Typehead.vue'

export default {
    components: { Typehead },
  data () {
            return {
                selectedOption:'',
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
 width: 8em;
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

.container {
    margin-top: 20px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
 height: 4em;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Adjust alignment as needed */
  gap: 20px; /* Adjust the gap between cards */
}



.card {
  flex: 0 0 calc(25% - 20px); /* Adjust the width (33.33% for 3 cards in a row) and gap */
  background: white;
  padding: .4em;
  border-radius: 24px;
  display: flex;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 150px;
  border-radius: 12px 12px 0 0;
}
.image-container img {

  width: 100%;
  height: 100%;
 /* Preserve the aspect ratio and cover the container */
}


.card-image:hover {
  transform: scale(0.98);
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
