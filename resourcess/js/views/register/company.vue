<template>
    <div class="main-form">
        <div class="container-1">
            <div class="from-img" style="width: 100%; padding-bottom: 20px;">
                <img
            src="/images/line.png"/>
            </div>
            <div class="form-type">
                <h2>Quel est votre type d’entreprise ?</h2>
                <p>Sélectionnez l'une des options suivantes</p>
            </div>
            <form>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <div class="card"><div class="card-body" @click="datas('E-commerce' , 1)" :style="{ backgroundColor: bgColor1 ,color:color1}">E-commerce</div></div>
                            <div class="card"><div class="card-body" @click="datas('Entreprise B2C' , 2)" :style="{ backgroundColor: bgColor2 ,color:color2 }">Entreprise B2C</div></div>
                            <div class="card"><div class="card-body" @click="datas('Restaurateur' , 3)" :style="{ backgroundColor: bgColor3 ,color:color3}">Restaurateur</div></div>
                            <div class="card"><div class="card-body" @click="datas('Agence' , 4)" :style="{ backgroundColor: bgColor4 ,color:color4}">Agence</div></div>
                            <div class="card"><div class="card-body" @click="datas('Application mobile' , 5)" :style="{ backgroundColor: bgColor5 ,color:color5}">Application mobile</div></div>
                            <div class="card"><div class="card-body" @click="datas('Grande distribution & automobile' , 6)" :style="{ backgroundColor: bgColor6 ,color:color6}">Grande distribution & automobile</div></div>
                            <div class="card"><div class="card-body" @click="datas('Autre' , 7)" :style="{ backgroundColor: bgColor7 ,color:color7 }">Autre</div></div>
                        </div>
                    </div>
                </div>
                <div class="next-button">
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
     company_type:'',
     method: 'POST',
     bgColor1:'white',
     bgColor2:'white',
     bgColor3:'white',
     bgColor4:'white',
     bgColor5:'white',
     bgColor6:'white',
     bgColor7:'white',

     color1:'black',
     color2:'black',
     color3:'black',
     color4:'black',
     color5:'black',
     color6:'black',
     color7:'black',




    };
  },
  created() {
    console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;
    // const companyId = this.$route.params.id;

  },
  methods: {

    datas(e , num){
        this.company_type = e;
        console.log(this.company_type);
        if(num == 1){
            this.bgColor1 = '#2A2C76'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'

            this.color1 ='white'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='black'
            this.color6 ='black'
            this.color7 ='black'

        }

        if(num == 2){
            this.bgColor1 = 'white'
            this.bgColor2 = '#2A2C76'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
       
            this.color1 ='black'
            this.color2 ='white'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='black'
            this.color6 ='black'
            this.color7 ='black'

        }

        if(num == 3){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = '#2A2C76'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'

            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='white'
            this.color4 ='black'
            this.color5 ='black'
            this.color6 ='black'
            this.color7 ='black'

        }

        if(num == 4){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = '#2A2C76'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'

            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='white'
            this.color5 ='black'
            this.color6 ='black'
            this.color7 ='black'

        }

        if(num == 5){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = '#2A2C76'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'

            
            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='white'
            this.color6 ='black'
            this.color7 ='black'
            

        }

        if(num == 6){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = '#2A2C76'
            this.bgColor7 = 'white'
            
            
            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='black'
            this.color6 ='white'
            this.color7 ='black'

        }

        if(num == 7){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = '#2A2C76'

            this.color1 ='black'
            this.color2 ='black'
            this.color3 ='black'
            this.color4 ='black'
            this.color5 ='black'
            this.color6 ='black'
            this.color7 ='white'

        }


    },

    save(){

        this.form.company = this.company_type;
    this.form.id = this.company_id;




                byMethod(this.method, 'company_register' , this.form)
                    .then((res) => {


                        if(res.data && res.data.saved) {
                            this.$router.push(`/register/company_category/${this.company_id}`);
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
<style>
.main-form {
    width: 100%;
    background-color: #ECEC4F;
}
.container-1{
    width: 100%;
    max-width: 30%;
    margin: 0 auto;
    padding: 15px 0px;
}
.from-img img {
    width: 85%;
}
.form-group {
    width: 100%;
    /* padding: 30px 0px 100px 0px; */
}
.form-type {
    width: 100%;
}
.form-type h2{
    font-size: 25px;
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
    gap: 15px;
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
    padding-top: 1%;

}
button.btn.btn-dark {
    padding: 10px 150px;
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
    padding: 5px 55px;
    font-size: 12px;
    font-weight: 400;
    background-color: #000;
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
