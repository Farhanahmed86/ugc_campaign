<template>
    <div class="main-form">
        <div class="container-1">
            <div class="from-img" style="width: 100%; padding-bottom: 20px;">
                <img
            src="/images/line-2.png"/>
            </div>
            <div class="form-type">
                <h2 style="color: #000;">Le secteur d'activité de votre entreprise</h2>
                <p style="color: #000;">Sélectionnez-en un ci-dessous</p>
            </div>
            <form>
                <div class="form-group">
                    <div class="row">
                        <div class="col-6 custom">
                            <div class="card"><div class="card-body" @click="datas('Vêtements' , 1)" :style="{ backgroundColor: bgColor1 ,color:color1}">Vêtements</div></div>
                            <div class="card"><div class="card-body" @click="datas('Produit de consommation' , 2)" :style="{ backgroundColor: bgColor2 ,color:color2 }">Produit de consommation</div></div>
                            <div class="card"><div class="card-body" @click="datas('Nourriture et boissons' , 3)" :style="{ backgroundColor: bgColor3 ,color:color3 }">Nourriture et boissons</div></div>
                            <div class="card"><div class="card-body" @click="datas('Nourriture et boissons' , 4)" :style="{ backgroundColor: bgColor4 ,color:color4 }">Nourriture et boissons</div></div>
                            <div class="card"><div class="card-body" @click="datas('Enfants et famille' , 5)" :style="{ backgroundColor: bgColor5 ,color:color5}" >Enfants et famille</div></div>
                            <div class="card"><div class="card-body" @click="datas('Prestations de service' , 6)" :style="{ backgroundColor: bgColor6 ,color:color6}">Prestations de service</div></div>
                            <div class="card"><div class="card-body" @click="datas('Des sports' , 7)" :style="{ backgroundColor: bgColor7 ,color:color7}">Des sports</div></div>
                            <div class="card"><div class="card-body" @click="datas('Jeux' , 8)" :style="{ backgroundColor: bgColor8 ,color:color8}">Jeux</div></div>
                        </div>
                        <div class="col-6 custom">
                            <div class="card"><div class="card-body" @click="data('Beauté et soins de la peau' , 1)" :style="{ backgroundColor: bgColors1 ,color:colors1}">Beauté et soins de la peau</div></div>
                            <div class="card"><div class="card-body" @click="data('Électronique' , 2)" :style="{ backgroundColor: bgColors2 ,color:colors2}">Électronique</div></div>
                            <div class="card"><div class="card-body" @click="data('Santé' , 3)" :style="{ backgroundColor: bgColors3  ,color:colors3}">Santé</div></div>
                            <div class="card"><div class="card-body" @click="data('Bijoux et Accessoires' , 4)" :style="{ backgroundColor: bgColors4  ,color:colors4}">Bijoux et Accessoires</div></div>
                            <div class="card"><div class="card-body" @click="data('Animaux domestiques' , 5)" :style="{ backgroundColor: bgColors5  ,color:colors5}">Animaux domestiques</div></div>
                            <div class="card"><div class="card-body" @click="data('Logiciel' , 6)" :style="{ backgroundColor: bgColors6  ,color:colors6}">Logiciel</div></div>
                            <div class="card"><div class="card-body" @click="data('Autre' , 7)" :style="{ backgroundColor: bgColors7 ,color:colors7}">Autre</div></div>
                            <div class="card"><div class="card-body" @click="data('Technologie financière' , 8)" :style="{ backgroundColor: bgColors8 ,color:colors8}">Technologie financière</div></div>
                        </div>
                    </div>
                </div>
                <p><a href=""></a></p>
                <div class="next-button">
                            <button type="button"  class="btn btn-light" @click="goback"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
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
     bgColor6:'white',
     bgColor7:'white',
     bgColor8:'white',
  

     color1:'black',
     color2:'black',
     color3:'black',
     color4:'black',
     color5:'black',
     color6:'black',
     color7:'black',
     color8:'black',
  


     bgColors1:'white',
     bgColors2:'white',
     bgColors3:'white',
     bgColors4:'white',
     bgColors5:'white',
     bgColors6:'white',
     bgColors7:'white',
     bgColors8:'white',
     method: 'POST',

     colors1:'black',
     colors2:'black',
     colors3:'black',
     colors4:'black',
     colors5:'black',
     colors6:'black',
     colors7:'black',
     colors8:'black',



    };
  },

  created() {
    console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;


  },
  methods: {
    goback() {
      this.$router.go(-1); 
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
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'

        this.color1 ='white'
        this.color2 ='black'
        this.color3 ='black'
        this.color4 ='black'
        this.color5 ='black'
        this.color6 ='black'
        this.color7 ='black'
        this.color8 ='black'

    }

    if(num == 2){
        this.bgColor1 = 'white'
        this.bgColor2 = '#2A2C76'
        this.bgColor3 = 'white'
        this.bgColor4 = 'white'
        this.bgColor5 = 'white'
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'
 
        this.color1 ='black'
        this.color2 ='white'
        this.color3 ='black'
        this.color4 ='black'
        this.color5 ='black'
        this.color6 ='black'
        this.color7 ='black'
        this.color8 ='black'


    }

    if(num == 3){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = '#2A2C76'
        this.bgColor4 = 'white'
        this.bgColor5 = 'white'
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'
        this.bgColor9 = 'white'

        this.color1 ='black'
        this.color2 ='black'
        this.color3 ='white'
        this.color4 ='black'
        this.color5 ='black'
        this.color6 ='black'
        this.color7 ='black'
        this.color8 ='black'


    }

    if(num == 4){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = 'white'
        this.bgColor4 = '#2A2C76'
        this.bgColor5 = 'white'
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'
        this.bgColor9 = 'white'

        this.color1 ='black'
        this.color2 ='black'
        this.color3 ='black'
        this.color4 ='white'
        this.color5 ='black'
        this.color6 ='black'
        this.color7 ='black'
        this.color8 ='black'


    }

    if(num == 5){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = 'white'
        this.bgColor4 = 'white'
        this.bgColor5 = '#2A2C76'
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'
        this.bgColor9 = 'white'

        this.color1 ='black'
        this.color2 ='black'
        this.color3 ='black'
        this.color4 ='black'
        this.color5 ='white'
        this.color6 ='black'
        this.color7 ='black'
        this.color8 ='black'


    }

    if(num == 6){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = 'white'
        this.bgColor4 = 'white'
        this.bgColor5 = 'white'
        this.bgColor6 = '#2A2C76'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'
        this.bgColor9 = 'white'
        
        this.color1 ='black'
        this.color2 ='black'
        this.color3 ='black'
        this.color4 ='black'
        this.color5 ='black'
        this.color6 ='white'
        this.color7 ='black'
        this.color8 ='black'


    }

    if(num == 7){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = 'white'
        this.bgColor4 = 'white'
        this.bgColor5 = 'white'
        this.bgColor6 = 'white'
        this.bgColor7 = '#2A2C76'
        this.bgColor8 = 'white'
        this.bgColor9 = 'white'

        this.color1 ='black'
        this.color2 ='black'
        this.color3 ='black'
        this.color4 ='black'
        this.color5 ='black'
        this.color6 ='black'
        this.color7 ='white'
        this.color8 ='black'


    }

    if(num == 8){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = 'white'
        this.bgColor4 = 'white'
        this.bgColor5 = 'white'
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = '#2A2C76'
        this.bgColor9 = 'white'

        
        this.color1 ='black'
        this.color2 ='black'
        this.color3 ='black'
        this.color4 ='black'
        this.color5 ='black'
        this.color6 ='black'
        this.color7 ='black'
        this.color8 ='white'

    }

},

data(e , num){
    this.company_type = e;
    console.log(this.company_type);
    if(num == 1){
        this.bgColors1 = '#2A2C76'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'

        this.colors1 ='white'
        this.colors2 ='black'
        this.colors3 ='black'
        this.colors4 ='black'
        this.colors5 ='black'
        this.colors6 ='black'
        this.colors7 ='black'
        this.colors8 ='black'


    }

    if(num == 2){
        this.bgColors1 = 'white'
        this.bgColors2 = '#2A2C76'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'

        this.colors1 ='black'
        this.colors2 ='white'
        this.colors3 ='black'
        this.colors4 ='black'
        this.colors5 ='black'
        this.colors6 ='black'
        this.colors7 ='black'
        this.colors8 ='black'



    }

    if(num == 3){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = '#2A2C76'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'


        this.colors1 ='black'
        this.colors2 ='black'
        this.colors3 ='white'
        this.colors4 ='black'
        this.colors5 ='black'
        this.colors6 ='black'
        this.colors7 ='black'
        this.colors8 ='black'


    }

    if(num == 4){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = '#2A2C76'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'

        this.colors1 ='black'
        this.colors2 ='black'
        this.colors3 ='black'
        this.colors4 ='white'
        this.colors5 ='black'
        this.colors6 ='black'
        this.colors7 ='black'
        this.colors8 ='black'


    }

    if(num == 5){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = '#2A2C76'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'

        this.colors1 ='black'
        this.colors2 ='black'
        this.colors3 ='black'
        this.colors4 ='black'
        this.colors5 ='white'
        this.colors6 ='black'
        this.colors7 ='black'
        this.colors8 ='black'


    }

    if(num == 6){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = '#2A2C76'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'

        this.colors1 ='black'
        this.colors2 ='black'
        this.colors3 ='black'
        this.colors4 ='black'
        this.colors5 ='black'
        this.colors6 ='white'
        this.colors7 ='black'
        this.colors8 ='black'


    }

    if(num == 7){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = '#2A2C76'
        this.bgColors8 = 'white'
        this.bgColors9 = 'white'

        this.colors1 ='black'
        this.colors2 ='black'
        this.colors3 ='black'
        this.colors4 ='black'
        this.colors5 ='black'
        this.colors6 ='black'
        this.colors7 ='white'
        this.colors8 ='black'


    }

    if(num == 8){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = '#2A2C76'
        this.bgColors9 = 'white'

        this.colors1 ='black'
        this.colors2 ='black'
        this.colors3 ='black'
        this.colors4 ='black'
        this.colors5 ='black'
        this.colors6 ='black'
        this.colors7 ='black'
        this.colors8 ='white'


    }
},

save(){

this.form.company = this.company_type;
this.form.id = this.company_id;




    byMethod(this.method, 'company_category' , this.form)
        .then((res) => {


            if(res.data && res.data.saved) {
                this.$router.push(`/register/revenue/${this.company_id}`);
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
    background-color: #ECEC4F;
}
.container-1{
    width: 100%;
    max-width: 45%;
    margin: 0 auto;
    padding: 20px 0px;
}
.form-group {
    width: 100%;

}
.form-type {
    width: 100%;
}
.form-type h2{
    font-size: 25px;
    font-weight: bold;
}
.form-type p{
    font-size: 18px;
    font-weight:400;
}
.custom {
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
    gap: 35px;
}
button.btn.btn-light {
    padding: 0px 20px;
    font-size: 20px;
    font-weight: bold;
}
button.btn.btn-dark {
    padding: 8px 115px;
    font-size: 20px;
    font-weight: 400;
    background-color: #2A2C76;
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
    max-width: 80%;
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
