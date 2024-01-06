<template>
    <div class="panel">
        <div class="panel-heading">
            <div class="row">
                <div class="col-6">
            <h2 class="panel-title">UGC Product</h2>
        </div>

        <div class="col-6 text-right">
            <h5 class="panel-title">Name:  {{ product[0].ugc.user.first_name }}</h5>
            <p class="panel-title">id:  {{ product[0].ugc.user.id }}</p>
            <p class="panel-title">Location:  {{ product[0].ugc.user.company_data }}</p>


        </div>
        </div>
            

            
                            <br>

                        
                       
                       
           
        </div>
        <div class="panel-body">

            <div class="table-container" v-if="product[0]" >
            <table  class="table table-link" style="color:#212F3D; ">
                <thead>
                    <tr>
                        <th>Hiring</th>
                        <th>Action Instruction</th>
                        <th>Action Plateform</th>
                        <th>Action</th>
                        <th>Whitelist</th>
                        <th>Delivery description </th>
                        <th>Product receive</th>


                        <th>Product url</th>
                        <th>End of application</th>
                        <th>Start of application</th>
                        <th>Media type</th>
                        <th>Media raw</th>
                        <th>Media socail</th>
                        <th>Video Lenght</th>
                        <th>No of Product</th>
                        <th>Product Name</th>







                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in product" :key="item.data" @click="detailsPage(item)">
              

                        <td class="w-1">{{item.action_type_hiring ? item.action_type_hiring :"---"}}</td>
                        <td class="w-1">{{item.action_type_instruction ? item.action_type_instruction : '---'}}</td>
                        <td class="w-1">{{item.action_type_plateform ? item.action_type_plateform : '---'}}</td>
                        <td class="w-1">{{item.action_type_plateform ? item.action_type_video : '---'}}</td>

                        <td class="w-3">{{item.action_type_whitelist ? item.action_type_whitelist : '---'}}</td>
                        <td class="w-3">{{item.delivery_description ? item.delivery_description : ''}}</td>
                        <td class="w-3">{{item.delivery_product_receive ? item.delivery_product_receive : ''}}</td>
                        <td class="w-3">{{item.delivery_product_url ? item.delivery_product_url : ''}}</td>


                        <td class="w-3">{{item.end_of_application ? item.end_of_application : ''}}</td>
                        <td class="w-3">{{item.start_of_application ? item.start_of_application : ''}}</td>
                        <td class="w-3">{{item.media_type ? item.media_type : ''}}</td>
                        <td class="w-3">{{item.media_type_raw ? item.media_type_raw : ''}}</td>
                        <td class="w-3">{{item.media_type_socail ? item.media_type_socail : ''}}</td>
                        <td class="w-3">{{item.media_type_videolenght ? item.media_type_videolenght : ''}}</td>
                        <td class="w-3">{{item.number_of_product ? item.number_of_product : ''}}</td>
                        <td class="w-3">{{item.product_name ? item.product_name : ''}}</td>






                   
                    </tr>
                </tbody>
            </table>
        </div>
            <div v-else>
            <h4>No Product UCG</h4>
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
                product:[],
                
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

    get('/api/details?id='+this.id)
                .then((res) => {
                    Vue.set(this.$data, 'product', res.data.product)
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
</style>
