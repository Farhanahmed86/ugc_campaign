<template>
    <div class="main-form">
        <div class="container-1">
            <div class="from-4-img" style="width: 100%; padding-bottom: 20px;">
                <img
            src="/images/line-4.png"/>
            </div>
            <div class="form-type">
                <h2>Comment avez-vous connu Yallad ?</h2>
                <p>Sélectionnez l'une des options suivantes</p>
            </div>
            <form action="/action_page.php">
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <div class="card"><div class="card-body" @click="datas('Recommandation' , 1)" :style="{ backgroundColor: bgColor1 ,color:color1}">Recommandation</div></div>
                            <div class="card"><div class="card-body" @click="datas('Google' , 2)" :style="{ backgroundColor: bgColor2 ,color:color2}">Google</div></div>
                            <div class="card"><div class="card-body" @click="datas('Instagram / Linked In' , 3)" :style="{ backgroundColor: bgColor3 ,color:color3}">Instagram / Linked In</div></div>
                            <div class="card"><div class="card-body" @click="datas('E-mail' , 4)" :style="{ backgroundColor: bgColor4 ,color:color4}">E-mail</div></div>
                            <div class="card"><div class="card-body" @click="datas('Par hasard' , 5)" :style="{ backgroundColor: bgColor5 ,color:color5}">Par hasard</div></div>
                        </div>
                    </div>
                </div>
                <div class="next-button">
                            <button type="button" class="btn btn-light" @click="goback"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
                            <button type="button" class="btn btn-dark" @click="save">Suivant</button>
                        </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import * as notify from "../../utils/notify.js";
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";
import { get , byMethod} from '../admin/components/lib/api'

export default {
  name: "Register",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
        form: {
      company: '',
      id: ''
    },
      company_id:'',
      isLoading: false,
      bgColor1:'white',
     bgColor2:'white',
     bgColor3:'white',
     bgColor4:'white',
     bgColor5:'white',

     color1:'black',
     color2:'black',
     color3:'black',
     color4:'black',
     color5:'black',

     method: 'POST',
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;


  },
  methods: {
    goback() {
      this.$router.go(-1); // Navigate back one step in the history
    },
    datas(e , num){
        this.company_type = e;
        console.log(this.company_type);
        if(num == 1){
            this.bgColor1 = '#2A2C76'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'

            
            this.color1 ='white'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='black'


        }

        if(num == 2){
            this.bgColor1 = 'white'
            this.bgColor2 = '#2A2C76'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
                        
            this.color1 ='black'
            this.color2 ='white'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='black'


        }

        if(num == 3){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = '#2A2C76'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
                         
            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='white'
            this.color4 ='black'
            this.color5 ='black'


        }

        if(num == 4){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = '#2A2C76'
            this.bgColor5 = 'white'

            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='white'
            this.color5 ='black'


        }

        if(num == 5){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = '#2A2C76'

            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='white'


        }




    },

    save(){

this.form.company = this.company_type;
this.form.id = this.company_id;




        byMethod(this.method, 'company_recommandation' , this.form)
            .then((res) => {


                if(res.data && res.data.saved) {
                    this.$router.push(`/login`);
                }
            })
            .catch((error) => {
                if(error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
                this.isProcessing = false
            })

},

  },
};
</script>
<style scoped>
.main-form {
    width: 100%;
    height: 100vh;
    background-color: #ECEC4F;
}
.container-1{
    width: 100%;
    max-width: 30%;
    margin: 0 auto;
    padding: 20px 0px;
}
.from-4-img img {
    width: 100%;
}
.form-group {
    width: 100%;

}
.form-type {
    width: 100%;
}
.form-type h2{
    font-size: 24px;
    font-weight: bold;
    color: #000;
}
.form-type p{
    font-size: 20px;
    font-weight:400;
    color: #000;
}
.col {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.card-body {
    font-size: 18px;
    font-weight:400;
    padding: 8px 0px 8px 50px !important;
}
.next-button {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 35px;
    padding-top: 4%;
}
button.btn.btn-light {
    padding: 0px 16px;
    font-size: 20px;
    font-weight: bold;
}
button.btn.btn-dark {
    padding: 8px 100px;
    font-size: 20px;
    font-weight: 400;
    background-color:#2A2C76;
}
html,body{
    background-color:#ECEC4F ;
}
@media screen and (max-width: 600px){
    .form-type h2 {
    font-size: 14px;
    font-weight: bold;
}
    .form-type p {
    font-size: 12px;
    font-weight: 400;
}
.card-body {
    font-size: 12px;
    font-weight: 400;
    padding: 8px 0px 8px 16px !important;
}
.container-1 {
    width: 100%;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0px;
}
.form-group {
    width: 100%;
    padding: 10px 0px 50px 0px;
}
button.btn.btn-dark {
    padding: 5px 40px;
    font-size: 12px;
    font-weight: 400;
    background-color: #000;
}
button.btn.btn-light {
    padding: 0px 10px;
    font-size: 12px;
    font-weight: bold;
}
.next-button {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.col {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
}
</style>

