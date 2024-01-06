<template>
    <div class="panel">
        <div class="panel-heading">
            <h2 class="panel-title">Vouchers</h2>
            <!-- <typehead :url="customerURL" :initialize="customer" modelText="text"
                            @input="onCustomer" /> -->
                            <br>
<div class="row">
 <div class="col-6">
    <strong>Filter By Voucher Number</strong>
  <typehead   :url="voucherURL" :initialize="form.voucher"  
           @input="onvoucher($event)" label="Enter voucher code" />
        </div>   
        <div class="col-6">       
            <strong>Filter By Account</strong>
  <typehead :url="accountURL" :initialize="form.account"  
            @input="onacce($event)" label="Enter account code" />
            </div>
</div>
                        <br>
                        <div class="row">
                            <div class="col-6">
                                <strong>To Date</strong>
                            <!-- <input type="date" placeholder="" v-model="params.todate" >   -->
                            <input  type="date" class="form-control "   v-model="params.todate">
                            </div>
                            <div class="col-6">
                                <strong>From Date</strong>
                            <input  type="date" class="form-control "   v-model="params.fromdate">
                            </div>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-primary" @click="onSearch">Filter</button>
                       
            <div class="text-right row " style="margin-bottom: 20px;">
                <div class="col">
                <!-- <button class="btn btn-success" style="float: right" @click="exportToExcel" color="success" icon="attachment"
                               type="border">
                        Download Excel
                    </button> -->
                </div>

               
                <button class="btn btn-danger" style="float: right; margin-right: 10px;" @click="generateReport" color="danger" icon="attachment"
                               type="border">
                               Generate PDF
                    </button>
               
                <!-- <div class="col"> -->
                <router-link to="/voucher/create" class="btn btn-primary">
                    Create Voucher
                </router-link>
            <!-- </div> -->
            </div>
        </div>
        <div class="panel-body">
            <table id="print" class="table table-link" style="color:#212F3D ">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Voucher Types</th>
                        <th>Voucher no</th>
                        <th>Voucher NAME</th>
                        <th> Accounts Name </th>
                        <th>Credit Accounts </th>
                        <th>Credit Accounts Type</th>


                        <th>Chaque no</th>
                        <th>Voucher Date</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in model.data" :key="item.data" @click="detailsPage(item)">
              

                        <td class="w-1">{{item.id}}</td>
                        <td class="w-1">{{item.voucher_type ? item.voucher_type : ''}}</td>
                        <td class="w-1">{{item.voucher_no ? item.voucher_no : ''}}</td>
                        <td class="w-3">{{item.voucher_name ? item.voucher_name : ''}}</td>
                        <td class="w-3">{{item.chart ? item.chart.account_name : ''}}</td>
                        <td class="w-3">{{item.chart ? item.chart.chart : ''}}</td>
                        <td class="w-3">{{item.chart ? item.chart.chart_type : ''}}</td>


                        <td class="w-3">{{item.cheque_no ? item.cheque_no : ''}}</td>
                        <td class="w-3">{{item.voucher_date ? item.voucher_date : ''}}</td>
                   
                    </tr>
                </tbody>
            </table>
        </div>


        <vue-html2pdf

                      :show-layout="false"
                      :float-layout="true"
                      :enable-download="false"
                      :preview-modal="true"
                      :paginate-elements-by-height="1400"
                      filename="Vouchers"
                      :pdf-quality="2"
                      :manual-pagination="false"
                      pdf-format="a4"
                      pdf-orientation="landscape"
                      pdf-content-width="1100px"
                      @progress="onProgress($event)"
                      @hasStartedGeneration="hasStartedGeneration()"
                      @hasGenerated="hasGenerated($event)"
                      ref="html2Pdf"
                  >
                     

                      <table slot="pdf-content" class="table table-link">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Voucher Types</th>
                        <th>Voucher no</th>
                        <th>Voucher NAME</th>
                        <th> Accounts Name </th>
                        <th>Credit Accounts </th>
                        <th>Credit Accounts Type</th>


                        <th>Chaque no</th>
                        <th>Voucher Date</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in model.data" :key="item.data" @click="detailsPage(item)">
              

                        <td class="w-1">{{item.id}}</td>
                        <td class="w-1">{{item.voucher_type ? item.voucher_type : ''}}</td>
                        <td class="w-1">{{item.voucher_no ? item.voucher_no : ''}}</td>
                        <td class="w-3">{{item.voucher_name ? item.voucher_name : ''}}</td>
                        <td class="w-3">{{item.chart ? item.chart.account_name : ''}}</td>
                        <td class="w-3">{{item.chart ? item.chart.chart : ''}}</td>
                        <td class="w-3">{{item.chart ? item.chart.chart_type : ''}}</td>


                        <td class="w-3">{{item.cheque_no ? item.cheque_no : ''}}</td>
                        <td class="w-3">{{item.voucher_date ? item.voucher_date : ''}}</td>
                   
                    </tr>
                </tbody>
            </table>


                 </vue-html2pdf>
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
                
                model: {
                    data: []

                },

                params:{
              
              account: '',
              account_id :'',
              voucher_id:'',
              voucher:'',
              voucher_no:'',
              todate:"",
              fromdate:"",

          },
          form: {},
              
                voucherURL:'/api/search/voucher',
                accountURL: '/api/search/accounts',

            }
        },

     
        beforeRouteEnter(to, from, next) {
            get('/api/vouchers', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/vouchers', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {
            exportTableToExcel(tableID, filename = "") {
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    // var dataType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"; // Updated MIME type
    var tableSelect = document.getElementById(tableID);


    tableSelect.style.borderCollapse = "collapse";
   
    tableSelect.style.width = "100%";
    tableSelect.style.textAlign = "center";


    var thead = tableSelect.querySelector("thead");
   

    var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");
    filename = filename ? filename + ".xls" : "Pivot Report.xlsx";

    downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(["\ufeff", tableHTML], {
            type: dataType,
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        downloadLink.href = "data:" + dataType + ", " + tableHTML;
        downloadLink.download = filename;
        downloadLink.click();
    }
},
generateReport() {

this.$refs.html2Pdf.generatePdf()

},

onProgress(e) {

console.log(e, 'e');

},
// generatePdf(html) {
//     const table = document.querySelector('#print');
//     vueHtmlToPdf(table, 'filename.pdf', { selector: '#print' });
//   },

            onvoucher(e) {
               
               const voucher = e.target.value
               Vue.set(this.form, 'voucher', voucher)
               Vue.set(this.form, 'voucher_id', voucher.id)
               Vue.set(this.form, 'voucher_no', voucher.voucher_no)

           },

            // onacce(e) {
         
            //     const account = e.target.value
            //     Vue.set(this.form, 'account', account)
            //     Vue.set(this.form, 'account_id', account.id)
            // },
            onacce(e) {
               
               const account = e.target.value
               Vue.set(this.form, 'account', account)
               Vue.set(this.form, 'account_id', account.id)
           },

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

           
            detailsPage(item) {
                this.$router.push(`/vouchers/${item.id}`)
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
