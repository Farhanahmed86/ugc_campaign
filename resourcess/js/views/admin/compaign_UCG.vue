<template>



    <div class="panel">




<!-- </div> -->
<div>

   <div class="panel-body ">
    <br>
    <div class="row">
        <div class="col-10" style="overflow-y: scroll; overflow-x: hidden; height: 600px;">
<div class="row">

    <div class="col-4">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="fas fa-fw fa-table"></i>
      </span>
    </div>
    <select class="form-control" v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
</div>


    <div class="col-4">
        <div class="form-group">

                        <input type="text" class="form-control" placeholder="Bio, Username, Fullname" v-model="form.bios">

                    </div>
    </div>
    <div class="col-2">

        <div class="form-group">

<input type="text" class="form-control" placeholder="Hashtags" v-model="form.hashtags">

</div>
    </div>


</div>


<div class="row" style="padding-top: 10px;">
    <ul style="display: flex; gap: 2px;">
    <li style="list-style: none;" >
        <button class="buttons mx-0">
      Location
    </button>
    </li>

    <li>
        <button class="buttons mx-0">
      Categories
    </button>
    </li>
    <li style="list-style: none;" >
        <button class="buttons mx-0">
      Gender
    </button>
    </li>

    <li>
        <button class="buttons mx-0">
      Age
    </button>
    </li>
    <li style="list-style: none;" >
        <button class="buttons mx-0">
      Ethnicity
    </button>
    </li>

    <li>
        <button class="buttons mx-0">
      Price
    </button>
    </li>
    <li style="list-style: none;" >
        <button class="buttons mx-0">
      ER
    </button>
    </li>

    <li>
        <button class="buttons mx-0">
      Badges
    </button>
    </li>
</ul>


  </div>


  <div class="row" style="padding-top: 10px;">
    <ul style="display: flex; gap: 2px;">
    <li style="list-style: none;" >
        <button class="buttonss mx-0">
      Amazon Storefront
    </button>
    </li>

    <li>
        <button class="buttonss mx-0">
      Prevoius Collabration
    </button>
    </li>
    <li>
        <button class="buttonss mx-0">
      Favorties
    </button>
    </li>

    <li class="buttonsss">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em" width="3em" viewBox="0 0 448 512" style="margin-left: 20px; color: gray;"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
    </li>



</ul>


  </div>

  <div class="form-group " style="margin-top: 40px;">
                        <div class="custom-control custom-checkbox large">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" style="color: black; font-size: medium; font-weight: bold;" for="customCheck"
                            >Dont send this brief to the following creators from past compaigns</label
                          >

                          </div>
                          </div>




<div class="row">
  <div class="card-container">

    <div class="card" @click="portfolio">
        <div class="card-image">
            <img src="images/influencer.jpg" style="width: 99%;
    border-radius: 20px;">
        </div>
      <div class="image-container ">

        <img src="images/Ellipse.jpg" alt="Illustration Image">
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">Marina</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">$120</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">United States</div>
            <div class="col-6 text-right" style="font-size: 12px;">Avr.Price</div>

        </div>

      </div>
    </div>


    <!-- <div class="card">
        <div class="card-image"></div>
    <div class="category"> Illustration </div>
    <div class="heading"> A heading that must span over two lines
        <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
    </div>
    </div> -->

    <div class="card" @click="portfolio">
        <div class="card-image">
            <img src="images/influencer_2.jpg" style="width: 99%;
    border-radius: 20px;">
        </div>
      <div class="image-container ">

        <img src="images/Ellipse.jpg" alt="Illustration Image">
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">Marina</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">$120</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">United States</div>
            <div class="col-6 text-right" style="font-size: 12px;">Avr.Price</div>

        </div>

      </div>
    </div>

    <div class="card" @click="portfolio">
        <div class="card-image">
            <img src="images/influencer_3.jpg" style="width: 99%;
    border-radius: 20px;">
        </div>
      <div class="image-container ">

        <img  src="images/Ellipse.jpg" alt="Illustration Image">
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">Marina</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">$120</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">United States</div>
            <div class="col-6 text-right" style="font-size: 12px;">Avr.Price</div>

        </div>

      </div>
    </div>


    <div class="card" @click="portfolio">
        <div class="card-image">
            <img src="images/influencer_4.jpg" style="width: 99%;
    border-radius: 20px;">
        </div>
      <div class="image-container ">

        <img src="images/Ellipse.jpg" alt="Illustration Image">
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">Marina</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">$120</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">United States</div>
            <div class="col-6 text-right" style="font-size: 12px;">Avr.Price</div>

        </div>

      </div>
    </div>

    <div class="card" @click="portfolio">
        <div class="card-image">
            <img src="images/influencer_5.jpg" style="width: 99%;
    border-radius: 20px;">
        </div>
      <div class="image-container ">

        <img src="images/Ellipse.jpg" alt="Illustration Image">
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">Marina</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">$120</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">United States</div>
            <div class="col-6 text-right" style="font-size: 12px;">Avr.Price</div>

        </div>

      </div>
    </div>

    <div class="card" @click="portfolio">
        <div class="card-image">
            <img src="images/influencer_6.jpg" style="width: 99%;
    border-radius: 20px;">
        </div>
      <div class="image-container ">

        <img src="images/Ellipse.jpg" alt="Illustration Image">
      </div>
      <div class="content">
        <!-- <div class="category"> Illustration </div> -->
        <div class="row">
            <div class="col-6" style="font-weight: bold; color: black;">Marina</div>
            <div class="col-6 text-right" style="font-weight: bold; color: black;">$120</div>

        </div>
        <div class="row">
            <div class="col-6" style="font-size: 12px;">United States</div>
            <div class="col-6 text-right" style="font-size: 12px;">Avr.Price</div>

        </div>

      </div>
    </div>
  </div>
</div>
</div>

<div class="col-2">
<span style="font-size: 20px; color: black;">Creators List</span>
<p>No creators have been added to your list yet . Use the search features to find creators and add them!</p>

</div>

</div>

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

            portfolio(){
                this.$router.push(`/portfolio`);
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
  background-color: rgb(236, 236, 236);
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
