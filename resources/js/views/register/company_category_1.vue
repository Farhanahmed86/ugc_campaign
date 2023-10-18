<template>
    <div class="main-form">
        <div class="container-1">
            <div class="form-type">
                <h2>What is your Company type?</h2>
                <p>Select one below</p>
            </div>
            <form>
                <div class="form-group">
                    <div class="row">
                        <div class="col-6 custom">
                            <div class="card"><div class="card-body" @click="datas('Apparel' , 1)" :style="{ backgroundColor: bgColor1 }">Apparel</div></div>
                            <div class="card"><div class="card-body" @click="datas('Consumer Product' , 2)" :style="{ backgroundColor: bgColor2 }">Consumer Product</div></div>
                            <div class="card"><div class="card-body" @click="datas('Food & Beverages' , 3)" :style="{ backgroundColor: bgColor3 }">Food & Beverages</div></div>
                            <div class="card"><div class="card-body" @click="datas('Home Goods' , 4)" :style="{ backgroundColor: bgColor4 }">Home Goods</div></div>
                            <div class="card"><div class="card-body" @click="datas('Kids & Family' , 5)" :style="{ backgroundColor: bgColor5 }" >Kids & Family</div></div>
                            <div class="card"><div class="card-body" @click="datas('Services' , 6)" :style="{ backgroundColor: bgColor6 }">Services</div></div>
                            <div class="card"><div class="card-body" @click="datas('Sports' , 7)" :style="{ backgroundColor: bgColor7 }">Sports</div></div>
                            <div class="card"><div class="card-body" @click="datas('Gaming' , 8)" :style="{ backgroundColor: bgColor8 }">Gaming</div></div>
                            <div class="card"><div class="card-body" @click="datas('Fintech' , 9)" :style="{ backgroundColor: bgColor9 }">Fintech</div></div>
                        </div>
                        <div class="col-6 custom">
                            <div class="card"><div class="card-body" @click="data('ApBeauty & skincaJewelry & Accessoriesreparel' , 1)" :style="{ backgroundColor: bgColors1 }">Beauty & skincare</div></div>
                            <div class="card"><div class="card-body" @click="data('Electronics' , 2)" :style="{ backgroundColor: bgColors2 }">Electronics</div></div>
                            <div class="card"><div class="card-body" @click="data('Health & Wellness' , 3)" :style="{ backgroundColor: bgColors3 }">Health & Wellness</div></div>
                            <div class="card"><div class="card-body" @click="data('Jewelry & Accessories' , 4)" :style="{ backgroundColor: bgColors4 }">Jewelry & Accessories</div></div>
                            <div class="card"><div class="card-body" @click="data('Pets' , 5)" :style="{ backgroundColor: bgColors5 }">Pets</div></div>
                            <div class="card"><div class="card-body" @click="data('Software' , 6)" :style="{ backgroundColor: bgColors6 }">Software</div></div>
                            <div class="card"><div class="card-body" @click="data('CBD' , 7)" :style="{ backgroundColor: bgColors7 }">CBD</div></div>
                            <div class="card"><div class="card-body" @click="data('Other' , 8)" :style="{ backgroundColor: bgColors8 }">Other</div></div>
                            <div class="card"><div class="card-body" @click="data('Supplement' , 9)" :style="{ backgroundColor: bgColors9 }">Supplement</div></div>
                        </div>
                    </div>
                </div>
                <p><a href=""></a></p>
                <div class="next-button">
                            <button type="button"  class="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
                            <button type="button" class="btn btn-dark" @click="save">Next</button>
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
     bgColor9:'white',

     bgColors1:'white',
     bgColors2:'white',
     bgColors3:'white',
     bgColors4:'white',
     bgColors5:'white',
     bgColors6:'white',
     bgColors7:'white',
     bgColors8:'white',
     bgColors9:'white',
     method: 'POST',


    };
  },

  created() {
    console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;


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
        this.bgColor8 = 'white'
        this.bgColor9 = 'white'


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
        this.bgColor9 = 'white'



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


    }

    if(num == 9){
        this.bgColor1 = 'white'
        this.bgColor2 = 'white'
        this.bgColor3 = 'white'
        this.bgColor4 = 'white'
        this.bgColor5 = 'white'
        this.bgColor6 = 'white'
        this.bgColor7 = 'white'
        this.bgColor8 = 'white'
        this.bgColor9 = '#2A2C76'


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


    }

    if(num == 9){
        this.bgColors1 = 'white'
        this.bgColors2 = 'white'
        this.bgColors3 = 'white'
        this.bgColors4 = 'white'
        this.bgColors5 = 'white'
        this.bgColors6 = 'white'
        this.bgColors7 = 'white'
        this.bgColors8 = 'white'
        this.bgColors9 = '#2A2C76'


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
    max-width: 40%;
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
    background-color: #000;
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
