<template>
  <div class="panel">
      <div class="panel-heading">
          <h1 class="panel-title">Balance Sheet</h1>
          <!-- <typehead :url="customerURL" :initialize="customer" modelText="text"
                          @input="onCustomer" /> -->
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
              <button class="btn btn-success" style="float: right" @click="exportTableToExcel('print', 'Voucher Report')" color="success" icon="attachment"
                             type="border">
                      Download Excel
                  </button>
              </div>

             
              <button class="btn btn-danger" style="float: right; margin-right: 10px;" @click="generateReport" color="danger" icon="attachment"
                             type="border">
                             Generate PDF
                  </button>
             
              <!-- <div class="col"> -->
             
          <!-- </div> -->
          </div>
      </div>
      <div class="text-center">
        <h2>Balance Sheet</h2>
      </div>
      <div class="row text-center" v-if="show">

       
  <div class="col-6 text-right"><strong>ToDate{{params.todate }}</strong></div>
  <div class="col-5 text-left"><strong>FromDate{{ params.fromdate }}</strong></div>

</div>
<br>
<hr>

      <div 
class="panel-body row" v-if="show">

<div class="col-6">
        <h2>Assets</h2>
          <table  class="table table-link table-bordered" >
              <thead style="background-color: rgb(33, 47, 61); color: white;">
                  <tr>
                      <th>Assets</th>
                      <!-- <th>Opening Balance</th> -->
                      <th>Current Balance </th>
                  
                  </tr>
              </thead>
              <tbody>
                <th>Current Assets</th>
                  <tr v-for="item in  assets" :key="item" >
            

                      <td class="w-3" v-if="item.accounts.chart_type == 'Current Assets'">{{item.accounts.account_name}}</td>
                      <!-- <td class="w-1" v-if="item.accounts.chart_type == 'Current Assets'" >{{item.total_debit ? item.total_debit : ''}}</td> -->
                      <td class="w-1" v-if="item.accounts.chart_type == 'Current Assets'">{{item.items ? item.items.account_balance : ''}}</td>
                  
                  </tr>
                  <th>Fixed Assets</th>
                  <tr v-for="item in  assets" :key="item">
            

            <td class="w-3" v-if="item.accounts.chart_type == 'Fixed Assets'">{{item.accounts.account_name}}</td>
            <!-- <td class="w-1" v-if="item.accounts.chart_type == 'Fixed Assets'">{{item.total_debit ? item.total_debit : ''}}</td> -->
            <td class="w-1" v-if="item.accounts.chart_type == 'Fixed Assets'">{{item.items ? item.items.account_balance : ''}}</td>
          
       
        </tr>
              </tbody>
          
          </table>
        </div>
        

<!-- <br> -->
<div class="col-6">
          <h2>Liabilities</h2>
          <table  class="table table-link table-bordered" >
              <thead style="background-color: rgb(33, 47, 61); color: white;">
                  <tr>
                      <th>Liabilities</th>
                      <!-- <th>Opening Balance</th> -->
                      <th>Current Balance </th>
                  
                  </tr>
              </thead>
              <tbody>
                
                  <th>Current Liablities</th>
                  <tr v-for="item in  laibility" :key="item">
            

            <td class="w-3" v-if="item.accounts.chart_type == 'Current Liablities'">{{item.accounts.account_name}}</td>
            <!-- <td class="w-1" v-if="item.accounts.chart_type == 'Current Liablities'">{{item.total_debit ? item.total_debit : ''}}</td> -->
            <td class="w-1" v-if="item.accounts.chart_type == 'Current Liablities'">{{item.items ? item.items.account_balance : ''}}</td>
          
       
        </tr>

        <th>Long Term Liablities</th>
                  <tr v-for="item in  laibility" :key="item" >
            

                      <td class="w-3" v-if="item.accounts.chart_type == 'Long Term Liablities'">{{item.accounts.account_name}}</td>
                      <!-- <td class="w-1" v-if="item.chart.chart_type == 'Long Term Liablities'" >{{item.total_debit ? item.total_debit : ''}}</td> -->
                      <td class="w-1" v-if="item.accounts.chart_type == 'Long Term Liablities'">{{item.items ? item.items.account_balance : ''}}</td>
                  
                  </tr>

                  <th>Equity</th>
                  <tr v-for="item in  laibility" :key="item" >
            

                      <td class="w-3" v-if="item.accounts.chart == 'Equity'">{{item.accounts.account_name}}</td>
                      <!-- <td class="w-1" v-if="item.chart.chart == 'Equity'" >{{item.total_debit ? item.total_debit : ''}}</td> -->
                      <td class="w-1" v-if="item.accounts.chart == 'Equity'">{{item.items ? item.items.account_balance : ''}}</td>
                  
                  </tr>
              </tbody>

              <!-- <tfoot>
        <tr>
          <td style="color:blue; font-weight: bold;">Total:</td>
          <td style=" font-weight: bold;">{{ laibility_total }}</td>
          <td style=" font-weight: bold;">{{totalsBalance }}</td>
        </tr>
      </tfoot> -->
          </table>
         
        </div>
      


      </div>
      <table class="table table-link table-bordered" v-if="show">
        <tr>
          <td style="color:#143376; font-weight: bold;">Total</td>
          <td>{{ total_assets }}</td>
          <!-- <td>{{ totalBalance }}</td> -->
          <td style="color:#143376; font-weight: bold;">Total</td>

          <!-- <td>{{ laibility_total }}</td> -->

          <td>{{ laibility_total }}</td>

        </tr>
       </table>
      <!-- <div id="print"
class="panel-body show" v-if="show">
        <h2>Assets</h2>
          <table  class="table table-link table-bordered">
              <thead>
                  <tr>
                      <th>Assets</th>
                      <th>Opening Balance</th>
                      <th>Current Balance </th>
                  
                  </tr>
              </thead>
              <tbody>
                <th>Current Assets</th>
                  <tr v-for="item in  assets" :key="item" >
            

                      <td class="w-3" v-if="item.chart.chart_type == 'Current Assets'">{{item.chart.account_name}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Current Assets'" >{{item.total_debit ? item.total_debit : ''}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Current Assets'">{{item.chart ? item.chart.balance : ''}}</td>
                  
                  </tr>
                  <th>Fixed Assets</th>
                  <tr v-for="item in  assets" :key="item">
            

            <td class="w-3" v-if="item.chart.chart_type == 'Fixed Assets'">{{item.chart.account_name}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Fixed Assets'">{{item.total_debit ? item.total_debit : ''}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Fixed Assets'">{{item.chart ? item.chart.balance : ''}}</td>
          
       
        </tr>
              </tbody>
              <tfoot>
        <tr>
          <td style="color:blue; font-weight: bold;">Total:</td>
          <td style=" font-weight: bold;">{{total_assets}}</td>
          <td style=" font-weight: bold;">{{totalBalance }}</td>
        </tr>
      </tfoot>
          </table>
          

<br>
          <h2>Liabilities</h2>
          <table  class="table table-link table-bordered">
              <thead>
                  <tr>
                      <th>Liabilities</th>
                      <th>Opening Balance</th>
                      <th>Current Balance </th>
                  
                  </tr>
              </thead>
              <tbody>
                
                  <th>Current Liablities</th>
                  <tr v-for="item in  laibility" :key="item">
            

            <td class="w-3" v-if="item.chart.chart_type == 'Current Liablities'">{{item.chart.account_name}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Current Liablities'">{{item.total_debit ? item.total_debit : ''}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Current Liablities'">{{item.chart ? item.chart.balance : ''}}</td>
          
       
        </tr>

        <th>Long Term Liablities</th>
                  <tr v-for="item in  laibility" :key="item" >
            

                      <td class="w-3" v-if="item.chart.chart_type == 'Long Term Liablities'">{{item.chart.account_name}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Long Term Liablities'" >{{item.total_debit ? item.total_debit : ''}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Long Term Liablities'">{{item.chart ? item.chart.balance : ''}}</td>
                  
                  </tr>

                  <th>Equity</th>
                  <tr v-for="item in  laibility" :key="item" >
            

                      <td class="w-3" v-if="item.chart.chart == 'Equity'">{{item.chart.account_name}}</td>
                      <td class="w-1" v-if="item.chart.chart == 'Equity'" >{{item.total_debit ? item.total_debit : ''}}</td>
                      <td class="w-1" v-if="item.chart.chart == 'Equity'">{{item.chart ? item.chart.balance : ''}}</td>
                  
                  </tr>
              </tbody>
              <tfoot>
        <tr>
          <td style="color:blue; font-weight: bold;">Total:</td>
          <td style=" font-weight: bold;">{{ laibility_total }}</td>
          <td style=" font-weight: bold;">{{totalsBalance }}</td>
        </tr>
      </tfoot>
          </table>


      </div> -->

<!-- 
      <vue-html2pdf

                    :show-layout="false"
                    :float-layout="true"
                    :enable-download="false"
                    :preview-modal="true"
                    :paginate-elements-by-height="1400"
                    filename="Vouchers"
                    :pdf-quality="3"
                    :manual-pagination="false"
                    pdf-format="a4"
                    pdf-orientation="landscape"
                    pdf-content-width="1100px"
                    @progress="onProgress($event)"
                    @hasStartedGeneration="hasStartedGeneration()"
                    @hasGenerated="hasGenerated($event)"
                    ref="html2Pdf"
                >
                   

                <div slot="pdf-content"
class="panel-body" v-if="show">
        <h2>Assets</h2>
          <table  class="table table-link table-bordered">
              <thead>
                  <tr>
                      <th>Assets</th>
                      <th>Opening Balance</th>
                      <th>Current Balance </th>
                  
                  </tr>
              </thead>
              <tbody>
                <th>Current Assets</th>
                  <tr v-for="item in  assets" :key="item" >
            

                      <td class="w-3" v-if="item.chart.chart_type == 'Current Assets'">{{item.chart.account_name}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Current Assets'" >{{item.total_debit ? item.total_debit : ''}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Current Assets'">{{item.chart ? item.chart.balance : ''}}</td>
                  
                  </tr>
                  <th>Fixed Assets</th>
                  <tr v-for="item in  assets" :key="item">
            

            <td class="w-3" v-if="item.chart.chart_type == 'Fixed Assets'">{{item.chart.account_name}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Fixed Assets'">{{item.total_debit ? item.total_debit : ''}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Fixed Assets'">{{item.chart ? item.chart.balance : ''}}</td>
          
       
        </tr>
              </tbody>
              <tfoot>
        <tr>
          <td style="color:blue; font-weight: bold;">Total:</td>
          <td style=" font-weight: bold;">{{total_assets}}</td>
          <td style=" font-weight: bold;">{{totalBalance }}</td>
        </tr>
      </tfoot>
          </table>
      

<br>
          <h2>Liabilities</h2>
          <table  class="table table-link table-bordered">
              <thead>
                  <tr>
                      <th>Liabilities</th>
                      <th>Opening Balance</th>
                      <th>Current Balance </th>
                  
                  </tr>
              </thead>
              <tbody>
                
                  <th>Current Liablities</th>
                  <tr v-for="item in  laibility" :key="item">
            

            <td class="w-3" v-if="item.chart.chart_type == 'Current Liablities'">{{item.chart.account_name}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Current Liablities'">{{item.total_debit ? item.total_debit : ''}}</td>
            <td class="w-1" v-if="item.chart.chart_type == 'Current Liablities'">{{item.chart ? item.chart.balance : ''}}</td>
          
       
        </tr>

        <th>Long Term Liablities</th>
                  <tr v-for="item in  laibility" :key="item" >
            

                      <td class="w-3" v-if="item.chart.chart_type == 'Long Term Liablities'">{{item.chart.account_name}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Long Term Liablities'" >{{item.total_debit ? item.total_debit : ''}}</td>
                      <td class="w-1" v-if="item.chart.chart_type == 'Long Term Liablities'">{{item.chart ? item.chart.balance : ''}}</td>
                  
                  </tr>

                  <th>Equity</th>
                  <tr v-for="item in  laibility" :key="item" >
            

                      <td class="w-3" v-if="item.chart.chart == 'Equity'">{{item.chart.account_name}}</td>
                      <td class="w-1" v-if="item.chart.chart == 'Equity'" >{{item.total_debit ? item.total_debit : ''}}</td>
                      <td class="w-1" v-if="item.chart.chart == 'Equity'">{{item.chart ? item.chart.balance : ''}}</td>
                  
                  </tr>
              </tbody>
              <tfoot>
        <tr>
          <td style="color:blue; font-weight: bold;">Total:</td>
          <td style=" font-weight: bold;">{{ laibility_total }}</td>
          <td style=" font-weight: bold;">{{totalsBalance }}</td>
        </tr>
      </tfoot>
          </table>


      </div>


               </vue-html2pdf> -->
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
            assets:[],
            laibility:[],
            laibility_total:{},
            total_assets:{},
        
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
        show:false,
        form: {},
            
              voucherURL:'/api/search/voucher',
              accountURL: '/api/search/accounts',

          }
      },

   
      beforeRouteEnter(to, from, next) {
          get('/api/sheet', to.query)
              .then((res) => {
                  next(vm => vm.setData(res))
              })
      },
      beforeRouteUpdate(to, from, next) {
          get('/api/sheet', to.query)
              .then((res) => {
                  this.setData(res)
                  next()
              })
      },


      computed:{
        totalBalance() {
      return this.assets.reduce((sum, item) => {
        if (item.chart && item.chart.balance) {
          return sum + item.chart.balance;
        } else {
          return sum;
        }
      }, 0);
    },

    totalsBalance() {
      return this.laibility.reduce((sum, item) => {
        if (item.chart && item.chart.balance) {
          return sum + item.chart.balance;
        } else {
          return sum;
        }
      }, 0);
    },
    openingBalance() {
  return this.assets.reduce((sum, item) => {
    if (item.total_debit) {
      return sum + item.total_debit;
    } else {
      return sum;
    }
  }, 0);
},
openingsBalance() {
  return this.laibility.reduce((sum, item) => {
    if (item.total_debit) {
      return sum + item.total_debit;
    } else {
      return sum;
    }
  }, 0);
},
totalDebit() {
    let sum = 0;
    this.assets.forEach(item => {
      sum += item.total_debit ? item.total_debit : 0;
    });
    return sum;
  }
      },
      methods: {

        totalD(e){
            return e = +e;
        },
        calculateTotalDebit() {
      this.totalDebit = this.assets.reduce((sum, item) => {
        if (item.total_debit) {
          return sum + item.total_debit
        }
        return sum
      }, 0)
    },

          exportTableToExcel(tableID, filename = "") {
  var downloadLink;
  var dataType = "application/vnd.ms-excel";
  var tableSelect = document.getElementById(tableID);

  // Add CSS styles to the table
  tableSelect.style.borderCollapse = "collapse";
  // tableSelect.style.border = "2px solid black";
  tableSelect.style.width = "100%";
  tableSelect.style.textAlign = "center";

  // Add CSS styles to the thead element
  var thead = tableSelect.querySelector("thead");
  // thead.style.backgroundColor = "#1179E1 ";
  // thead.style.border = "1px solid black";

  // Add CSS styles to the td and th elements
  // var cells = tableSelect.querySelectorAll("td, th");
  // for (var i = 0; i < cells.length; i++) {
  //     cells[i].style.border = "1px solid black";
  // }

  var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");
  filename = filename ? filename + ".xls" : "Pivot Report.xls";

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

        

         onSearch(){
         //    console.log(this.params);
         //    let params =`?q=&account_id=${this.form.account.id}`
         // if(this.form.account_id != null || this.form.voucher_no != null){
         let params = "?q=";
            
             if (this.params.todate != null) {
                 params += "&todate=" + this.params.todate;
             }
             if (this.params.fromdate != null) {
                 params += "&fromdate=" + this.params.fromdate;
             }

           
             get(`/api/sheet/${params}`)
        
        .then((res ) => {

            Vue.set(this.$data, 'assets', res.data.new)
            Vue.set(this.$data, 'laibility', res.data.liability)
            Vue.set(this.$data, 'laibility_total', res.data.total_liabilities)
            Vue.set(this.$data, 'total_assets', res.data.total_assets)



            // console.log(res.data.liability);
          
       
            
        })
        this.show = true;
          },

         
          detailsPage(item) {
              this.$router.push(`/sheet/${item.id}`)
          },
          setData(res) {
              Vue.set(this.$data, 'model', res.data)
              // this.page = this.model.current_page
              
              // console.log(res.data.results);
          },
          nextPage() {
              if(this.model.next_page_url) {
                  const query = Object.assign({}, this.$route.query)
                  query.page = query.page ? (Number(query.page) + 1) : 2

                  this.$router.push({
                      path: '/sheet',
                      query: query
                  })
              }
          },

          prevPage () {
              if(this.model.prev_page_url) {
                  const query = Object.assign({}, this.$route.query)
                  query.page = query.page ? (Number(query.page) - 1) : 1

                  this.$router.push({
                      path: '/sheet',
                      query: query
                  })
              }
          },
     
      }
  }
</script>
<style scoped>
.show{
  display: none;
}
.col-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 0rem;
    padding-right: 0rem;
}
</style>