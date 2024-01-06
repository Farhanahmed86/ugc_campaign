<template>
    <div class="panel">
        <div class="panel-heading">
            <div class="row">
                <div class="col-6">
            <h2 class="panel-title">User Details</h2>
        </div>

        <!-- <div class="col-6 text-right">
            <h5 class="panel-title">Name:  {{ product[0].ugc.user.first_name }}</h5>
            <p class="panel-title">id:  {{ product[0].ugc.user.id }}</p>
            <p class="panel-title">Location:  {{ product[0].ugc.user.company_data }}</p>


        </div> -->
        </div>

            

            

                        
                       
                       
           
        </div>
        <div class="panel-body">

            <div class="row" style="padding-top: 30px;">
      <div class="col-6 Country">
        <div class="col ul-title">
          <h4>User Basic Details</h4>
          <!-- <p>2023-10-13</p> -->
        </div>
        <ul >
          <li class="li_list" >
            <div class="li_img" ><img src="/images/user (1).png" style="width: 30%;"/><p>Name</p></div>
            <p>{{ users_detail.first_name }}</p>
          </li>
          <li class="li_list" >
            <div class="li_img" ><img src="/images/user (1).png" style="width: 26%;"/><p>Email</p></div>
            <p>{{ users_detail.email }}</p>
          </li>
          <li class="li_list" >
            <div class="li_img" ><img src="/images/user (1).png" style="width: 23%;"/><p>Location</p></div>
            <p>{{ users_detail.location }}</p>
          </li>
          <li class="li_list" >
            <div class="li_img" ><img src="/images/user (1).png" style="width: 30%;"/><p>Phone</p></div>
            <p>{{ users_detail.phone?  users_detail.phone:'----'}}</p>
          </li>
          <li class="li_list" >
            <div class="li_img" ><img src="/images/user (1).png" style="width: 30%;"/><p>Website</p></div>
            <p>{{ users_detail.website }}</p>
          </li>
        </ul>
      </div>
      <div class="col-6 Country">
        <div class="col ul-title">
          <h4>User Company Details</h4>
          <!-- <p>2023-10-13</p> -->
        </div>
        <ul >
          <li class="li_list" >
            <div class="li_img"><img src="/images/user (1).png" style="width: 25%;"/><p>Company</p></div>
            <p>{{ users_detail.company }}</p>
          </li>
          <li class="li_list" >
            <div class="li_img"><img src="/images/user (1).png" style="width: 28%;"/><p>Category</p></div>
            <p>{{ users_detail.company_category }}</p>
          </li>

          <li class="li_list" >
            <div class="li_img"><img src="/images/user (1).png" style="width: 25%;"/><p>Location</p></div>
            <p>{{ users_detail.company_data }}</p>
          </li>
          <li class="li_list" >
            <div class="li_img"><img src="/images/user (1).png" style="width: 28%;"/><p>Recommandation</p></div>
            <p>{{ users_detail.company_recommandation }}</p>
          </li>

          <li class="li_list" >
            <div class="li_img"><img src="/images/user (1).png" style="width: 25%;"/><p>Company Type</p></div>
            <p>{{ users_detail.company_type }}</p>
          </li>
          
          
         
        </ul>
      </div>
    </div>
    <br>
    <div class="col ul-title">
          <h4>User Campaings Details</h4>
          <!-- <p>2023-10-13</p> -->
        </div>
            <div class="table-container" >
            <table  class="table table-link" style="color:#212F3D; ">
                <thead>
                    <tr>
                        <th>Action avoid</th>
                        <th>Action Instruction</th>
                        <th>Action Specific Caption</th>
                        <th>Action Type</th>
                        <th>Campaign</th>
                        <th>Campaign type</th>
                        <th>country</th>


                        <th>Gender</th>
                        <th>Marketing objective</th>
                        <th>Min Age</th>
                        <th>Max age</th>
                        <th>PlateForm</th>
                        <th>Plateform Type</th>
                        







                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in users_detail.campaign" :key="item.data" @click="detailsPage(item)">
              

                        <td class="w-1">{{item.action_avoid ? item.action_avoid :"---"}}</td>
                        <td class="w-1">{{item.action_instruction ? item.action_instruction : '---'}}</td>
                        <td class="w-1">{{item.action_specific_caption ? item.action_specific_caption : '---'}}</td>
                        <td class="w-1">{{item.action_type ? item.action_type : '---'}}</td>

                        <td class="w-3">{{item.campaign ? item.campaign : '---'}}</td>
                        <td class="w-3">{{item.campaign_type ? item.campaign_type : ''}}</td>
                        <td class="w-3">{{item.country ? item.country : ''}}</td>
                        <td class="w-3">{{item.gender ? item.gender : ''}}</td>


                        <td class="w-3">{{item.marketing_objective ? item.marketing_objective : ''}}</td>
                        <td class="w-3">{{item.min_age ? item.min_age : ''}}</td>
                        <td class="w-3">{{item.max_age ? item.max_age : ''}}</td>
                        <td class="w-3">{{item.plateform ? item.plateform : ''}}</td>
                        <td class="w-3">{{item.plateform_type ? item.plateform_type : ''}}</td>
                       






                   
                    </tr>
                </tbody>
            </table>
        </div>
            
           

        
        </div>


       
        <div class="panel-footer flex-between">
            <div>
                <small>Showing {{model.from}} - {{model.to}} of {{model.total}}</small>
            </div>
            <div>
                <button class="btn btn-lg " style=" color: #212F3D ; font-weight: bold;" :disabled="!model.prev_page_url" @click="prevPage">
                    Prev
                </button>
                <button class="btn btn-lg" style="  color: #212F3D ; font-weight: bold;" :disabled="!model.next_page_url" @click="nextPage">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'
import vueHtmlToPdf from 'vue-html2pdf';
    export default {
        components: { Typehead , vueHtmlToPdf},
        
        data () {
            return {
                id:'',
                users_detail:[],
                users_detail:{},
                model: {
                    data: []

                },

             
          form: {},
              
                voucherURL:'/api/search/voucher',
                accountURL: '/api/search/accounts',

            }
        },
        created() {
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;

    get('/api/user_details?id='+this.id)
                .then((res) => {
                    Vue.set(this.$data, 'users_detail', res.data.product)
                    // Vue.set(this.$data, 'campaign', res.data.product.)

                })
    

  },
     
        // beforeRouteEnter(to, from, next) {
        //     get('/api/details?id='+this.id)
        //         .then((res) => {
        //             next(vm => vm.setData(res))
        //         })
        // },
        // beforeRouteUpdate(to, from, next) {
        //     get('/api/details?id='+this.id)
        //         .then((res) => {
        //             this.setData(res)
        //             next()
        //         })
        // },
      
        methods: {
    




           onSearch(){
           //    console.log(this.params);
           //    let params =`?q=&account_id=${this.form.account.id}`
           // if(this.form.account_id != null || this.form.voucher_no != null){
           let params = "?q=";
               if (this.form.account_id != null) {
                   params += "&account_id=" + this.form.account_id;
               }
               if (this.params.todate != null) {
                   params += "&todate=" + this.params.todate;
               }
               if (this.params.fromdate != null) {
                   params += "&fromdate=" + this.params.fromdate;
               }

               if (this.form.voucher_no != null) {
                   params += "&voucher=" + this.form.voucher_no;
               }
               get(`/api/vouchers/${params}`)
          
          .then((res ) => {

              Vue.set(this.$data, 'model', res.data.results)
            
         
              
          })
            },

           
           
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                this.page = this.model.current_page
                
                console.log(res.data.results);
            },
            nextPage() {
                if(this.model.next_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) + 1) : 2

                    this.$router.push({
                        path: '/vouchers',
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/vouchers',
                        query: query
                    })
                }
            }
        }
    }
</script>
<style>

    .table-container {
        width: 100%; /* Set the width to the desired size or use a percentage */
        overflow-x: auto; /* Enable horizontal scrolling */
    }


    .li_img{
    display: flex;
    gap: 0px 15px;
    align-items: center;

}
.li_img  p{
  font-size: 18px;
  color: #000;
  font-weight: 400;
  padding-top: 10px;
}
.Country ul{
  list-style: none;
  padding-top: 24px;
}
.li_list{
     display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 24px;
}
.li_list p{
  font-size: 18px;
  font-weight: 400;
  color: #000;
  padding-top: 10px;
}
.ul-title{
     display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
}
.ul-title h4{
  color: #000;
    font-weight: 400;
    padding-left: 30px;
}
.ul-title p {
    padding-top: 10px;
    font-size: 15px;
    color: #000;
    font-weight: 200;
}
</style>
