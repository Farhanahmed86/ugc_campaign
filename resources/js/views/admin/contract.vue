<template>



    <div class="panel">




<!-- </div> -->
<div>
   <div class="panel-heading">
    <div class="row mt-12" >
        <div class="col-8">
            <h4 class="panel-title" style="color: black;">Contrats & Signature electronique</h4>
        </div>
        <div class="col-4 text-right">
            <button style="background-color: black; color: white; border-radius: 5px; height: 30px;
    ">
                        Nouveau contrat
                    </button>
        </div>
    </div>


       <br>
   </div>
   <div class="panel-body">

    <br>
    <br>
    <div  class=" row  ">
        <div class="col" >
    <div class="container" style="display: flex;

justify-content: center; background-color: #ECEC4F;
    width: 65%;
    border-radius: 20px; padding: 30px 0px 30px 0px;">

<div class="form">

        <p style="font-size: 20px; font-weight: bolder; color: black; margin-bottom: 20px;" class="text-center">Influencers</p>


        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input" v-model="form.firstname">
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input" v-model="form.lastname">
            <span>Lastname</span>
        </label>
    </div>

    <label>
        <input required="" placeholder="" type="email" class="input" v-model="form.email">
        <span>Email</span>
    </label>

    <label>
        <input required="" placeholder="" type="number" class="input" v-model="form.phone">
        <span>Phone Number</span>
    </label>

    <label>
        <input required="" placeholder="" type="text" class="input" v-model="form.address">
        <span>Address</span>
    </label>

    <label>
    <select class="input" placeholder="Socail media" v-model="form.option">

      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    </label>



    <button class="submit text-center" @click="save">Send</button>

</div>
</div>
</div>


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
                },
                method:'POST'
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


          save(){
            byMethod(this.method, 'api/contract', this.form)
                    .then((res) => {
                      
                       
                        if(res.data && res.data.saved) {
                           this.$router.go(-1)
                        }
                    })
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



.form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    max-width: 350px;
    /* background-color: #ECEC4F; */
    /* padding: 20px; */
    border-radius: 20px;
    top: 6%;
    left: 35%;
    /* position: absolute; */
}
.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.signin {
  text-align: center;
}

.signin a {
  color: royalblue;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 7px 10px 15px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: green;
}

.submit {
    margin-top: 20px;
    margin-left: 80px;
  border: none;
  outline: none;
  background-color:#0f0f0f;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  border-radius: 8px;
  transform: .3s ease;
  width: 50%;
}

.submit:hover {
  background-color:#2A2C76;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
