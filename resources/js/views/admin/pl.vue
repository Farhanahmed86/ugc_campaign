<template>
    <div class="panel">
        <div class="panel-heading">
            <h1 class="panel-title">Profit & Loss Statement</h1>

                            <div class="row">
                            <div class="col-6">
                                <strong>To Date</strong>
                            <!-- <input type="date" placeholder="" v-model="params.todate" >   -->
                            <input  type="date" class="form-control "  v-model="params.todate">
                            </div>
                            <div class="col-6">
                                <strong>From Date</strong>
                            <input  type="date" class="form-control "   v-model="params.fromdate">
                            </div>
                        </div>
                        <br>

                            <button type="submit" class="btn btn-primary" @click="onSearch">
        <!-- <svg aria-hidden="true" class="mr-2 -ml-1 w-1 h-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search --> Search
    </button>


        </div>

        <div class="text-right  " style="margin-bottom: 20px;">
                <div class="col">
                <!-- <button class="btn btn-success" style="float: right" @click="exportTableToExcel('print', 'Voucher Report')" color="success" icon="attachment"
                               type="border">
                        Download Excel
                    </button> -->
                </div>
                <!-- <download-excel :data="excelData" name="artikel_export">
  <button color="success" @click="Excel(groupedData)">
    Excel Export <i class="mdi mdi-export-variant" aria-hidden="true"></i>
  </button>
</download-excel> -->

                <!-- <download-excel


                :data="data"
                slot="extra"
                name="Expired Documents.xls">
                <button class="mr-3 my-2 "  @click="Excel" color="success" icon="attachment"
                            type="border">
                     Download Excel
                 </button>

         </download-excel>
                -->
                <button class="btn btn-danger" style="float: right; margin-right: 10px;" @click="generateReport" color="danger" icon="attachment"
                               type="border">
                               Generate PDF
                    </button>

                <!-- <div class="col"> -->

            <!-- </div> -->
            </div>

            <div class="text-center">
            <h2>Brand Revam</h2>
          </div>
          <div class="row text-center" v-if="show">


            <div class="col-6 text-right"><strong>ToDate{{params.todate }}</strong></div>
            <div class="col-5 text-left"><strong>FromDate{{ params.fromdate }}</strong></div>

          </div>
          <br>
          <hr>

              <div class="panel-body" v-if="show ">

            <h1 class="text-center">
              Revenue
            </h1>

              <table  class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th class="col-7">Particular</th>
      <th class="col-4">Amount</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(item, index) in groupedData" :key="index">
      <td>{{  '#'}}</td>
      <td>{{ item.account_code }}</td>
      <td>{{ item.credit }}</td>
    </tr>
  </tbody>
</table>


  <div class="row">
    <div class="col-8 text-right"><strong>Total:</strong></div>
    <div class="col-4">{{ credit}}</div>
  </div>
<br>
<br>
<h1 class="text-center">
              Expenses
            </h1>
<table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th class="col-7">Particular</th>
      <th class="col-4">Amount</th>
    </tr>
  </thead>
  <tbody>
    <!-- Loop through the grouped data and display it in the table -->
    <tr v-for="(item, index) in groupeddata" :key="index">

      <td>{{ '#' }}</td>
      <td>{{ item.account_code }}</td>
      <td>{{ item.debit }}</td>
    </tr>
  </tbody>
</table>

<div class="row">
    <div class="col-8 text-right"><strong>Total:</strong></div>
    <div class="col-4">{{ debit }}</div>
  </div>
<hr>
<br>
<div class="row">
    <div class="col-8 text-right"><strong>Profit/Loss:</strong></div>
    <div class="col-4">{{ credit - debit }}</div>
  </div>

        </div>






        <vue-html2pdf

:show-layout="false"
:float-layout="true"
:enable-download="false"
:preview-modal="true"
:paginate-elements-by-height="1800"
filename="Ledger"
:pdf-quality="2"
:manual-pagination="false"
pdf-format="a4"
pdf-orientation="landscape"
pdf-content-width="1500px"
@progress="onProgress($event)"
@hasStartedGeneration="hasStartedGeneration()"
@hasGenerated="hasGenerated($event)"
ref="html2Pdf"
>







<div  slot="pdf-content" class="panel-body" v-if="show">
          <h2>National Institute of Kidney and Urological Disease</h2>
            <strong>To {{ date[0]}} From{{ date[1] }}</strong>
            <br>
            <h1 class="text-center">
              Revenue
            </h1>
            <!-- <div> -->
              <table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th class="col-7">Particular</th>
      <th class="col-4">Amount</th>
    </tr>
  </thead>
  <tbody>
    <!-- Loop through the grouped data and display it in the table -->
    <tr v-for="(item, index) in groupedData" :key="index">
      <td>{{  '#'}}</td>
      <td>{{ item.account_code }}</td>
      <td>{{ item.credit }}</td>
    </tr>
  </tbody>
</table>
                <!-- <table class="table table-bordered">
  <thead class="thead-dark">
    <tr >
        <th scope="col-1">#</th>

      <th  class="col-7">Particular</th>
      <th  class="col-4">Amount</th>

    </tr>
  </thead>
  <tbody  v-for="item , index in model" :key="index">
    <tr v-if="item.account == 'Revenue'">
        <td>{{ index+1 }}</td>

      <td>{{ item.account_code }}</td>


      <td>{{ item.credit }}</td>





    </tr>



  </tbody>
</table> -->

  <div class="row">
    <div class="col-8 text-right"><strong>Total:</strong></div>
    <div class="col-4">{{ credit}}</div>
  </div>
<br>
<br>
<h1 class="text-center">
              Expenses
            </h1>
<table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th class="col-7">Particular</th>
      <th class="col-4">Amount</th>
    </tr>
  </thead>
  <tbody>
    <!-- Loop through the grouped data and display it in the table -->
    <tr v-for="(item, index) in groupeddata" :key="index">

      <td>{{ '#' }}</td>
      <td>{{ item.account_code }}</td>
      <td>{{ item.debit }}</td>
    </tr>
  </tbody>
</table>

<div class="row">
    <div class="col-8 text-right"><strong>Total:</strong></div>
    <div class="col-4">{{ debit }}</div>
  </div>


        </div>


</vue-html2pdf>


<div id="print" class="panel-body show" v-if="show ">
          <h2>National Institute of Kidney and Urological Disease</h2>
            <strong>To {{ date[0]}} From{{ date[1] }}</strong>
            <br>
            <h1 class="text-center">
              Revenue
            </h1>

              <table  class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th class="col-7">Particular</th>
      <th class="col-4">Amount</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(item, index) in groupedData" :key="index">
      <td>{{  '#'}}</td>
      <td>{{ item.account_code }}</td>
      <td>{{ item.credit }}</td>
    </tr>
  </tbody>
</table>


  <div class="row">
    <div class="col-8 text-right"><strong>Total:</strong></div>
    <div class="col-4">{{ credit}}</div>
  </div>
<br>
<br>
<h1 class="text-center">
              Expenses
            </h1>
<table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th class="col-7">Particular</th>
      <th class="col-4">Amount</th>
    </tr>
  </thead>
  <tbody>
    <!-- Loop through the grouped data and display it in the table -->
    <tr v-for="(item, index) in groupeddata" :key="index">

      <td>{{ '#' }}</td>
      <td>{{ item.account_code }}</td>
      <td>{{ item.debit }}</td>
    </tr>
  </tbody>
</table>

<div class="row">
    <div class="col-8 text-right"><strong>Total:</strong></div>
    <div class="col-4">{{ debit }}</div>
  </div>
<hr>
<br>
<div class="row">
    <div class="col-8 text-right"><strong>Profit/Loss:</strong></div>
    <div class="col-4">{{ credit - debit }}</div>
  </div>

        </div>
        <div class="panel-footer flex-between">
            <div>

            </div>

        </div>
    </div>
</template>
<script src="https://unpkg.com/tableexport.jquery.plugin/tableExport.min.js"></script>
<script type="text/javascript">

import Vue from 'vue'
    import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'
import excel from "vue-json-excel";
    export default {
        components: { Typehead , excel},
        data () {
            return {
              excelData:[{}],
                // responseData: [],
                data:[
                  {
                    name:'abcd',
                    title:'abcd'
                  }
                ],
                groupedData: [],
                responsedata: [],
                groupeddata: [],
                // form: {},
                // errors:{},
                // voucherURL:'/api/search/voucher',
                // accountURL: '/api/search/accounts',
                model: [],
                name: [],


                date:[],
                debit:{},
                credit:{},



                show:false,

                // errors: false,


                params:{

                    account: '',
                    account_id :'',
                    voucher_id:'',
                    voucher:'',
                    voucher_no:'',
                    todate:"",
                },
                 artikel : [
],


            }
        },


        // beforeRouteEnter(to, from, next) {
        //     get('/api/pl', to.query)
        //         .then((res) => {
        //             next(vm => vm.setData(res))
        //         })
        // },
        beforeRouteUpdate(to, from, next) {
            get('/api/pl', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },

        computed: {


            totalDebit() {
    const debitTotal = this.model.reduce((total, item) => {
      return total + parseFloat(item.total_debit || 0);
    }, 0);
    return debitTotal ? `${debitTotal.toFixed(2)} ` : '';
  },
  totalCredit() {
    const creditTotal = this.model.reduce((total, item) => {
      return total + parseFloat(item.total_credit || 0);
    }, 0);
    return creditTotal ? `${creditTotal.toFixed(2)} ` : '';
  },
  balanceDebit() {
    const debitTotal = this.model.reduce((total, item) => {
      if (parseFloat(item.total_debit) > parseFloat(item.total_credit)) {
        return total + parseFloat(item.total_debit) - parseFloat(item.total_credit);
      } else {
        return total;
      }
    }, 0);
    return debitTotal ? `+${debitTotal.toFixed(2)} ` : '';
  },
  balanceCredit() {
    const creditTotal = this.model.reduce((total, item) => {
      if (parseFloat(item.total_credit) > parseFloat(item.total_debit)) {
        return total + parseFloat(item.total_credit) - parseFloat(item.total_debit);
      } else {
        return total;
      }
    }, 0);
    return creditTotal ? `+${creditTotal.toFixed(2)} ` : '';
  },


        },
        methods: {

          exportTableToExcel(tableID, filename = "") {
            console.log(tableID);

    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById(tableID);




    var tableHTML = tableSelect.innerHTML.replace(/ /g, "%20");
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

tableExport (tableID, filename = "") {
            console.log(tableID);

            $(document).ready(function() {
    $('#print').tableExport({type:'xlsx', fileName:'example'});
  });

},
generateReport() {

this.$refs.html2Pdf.generatePdf()

},

onProgress(e) {

console.log(e, 'e');

},

          getTotalCredits() {
      let totalCredits = 0
      for (let i = 0; i < this.groupedData.length; i++) {
        totalCredits += this.groupedData[i].credit
      }
      return totalCredits
    },
            debitTotals( e , f) {



                    return e - f ;

    },

    creditTotals( e , f) {



              return f - e ;

},



            onSearch(){
            //    console.log(this.params);
            //    let params =`?q=&account_id=${this.form.account.id}`

            let params = "?q=";

                if (this.params.todate != null) {
                    params += "&todate=" + this.params.todate;
                }
                if (this.params.fromdate != null) {
                    params += "&fromdate=" + this.params.fromdate;
                }

            //    let params =`?q=&account_id=${this.form.account.id}&todate=${this.params.todate}`
            //    let param =`?q=voucher=${this.form.voucher.id}`



            //    console.log(params+"");

               get(`/api/pl/${params}`)

            .then((res ) => {

                Vue.set(this.$data, 'model', res.data.results.data)
                // Vue.set(this.$data, 'model', res.data.results.data)

                Vue.set(this.$data, 'date', res.data.date)
                Vue.set(this.$data, 'debit', res.data.debit)
                Vue.set(this.$data, 'credit', res.data.credit)





              console.log(res.data.date[0]);
                this.responseData = res.data.results.data;
                this.responsedata = res.data.result.data;

    this.groupData();
    this.groupdata();

                // console.log(res.data.data);
                this.show = true

                // this.setData(res)
            })



        },
                groupData() {
                  const groupedData = this.responseData.reduce((acc, curr) => {
  const { account_code, credit } = curr;
  if (!acc[account_code]) {
    acc[account_code] = { account_code, credit: 0 };
  }
  acc[account_code].credit += credit;
  return acc;
}, {});

// Now the grouped data is stored in the 'groupedData' variable
console.log(groupedData);
this.groupedData = groupedData;

},

groupdata() {
                  const groupeddata = this.responsedata.reduce((acc, curr) => {
  const { account_code, debit } = curr;
  if (!acc[account_code]) {
    acc[account_code] = { account_code, debit: 0 };
  }
  acc[account_code].debit += debit;
  return acc;
}, {});

// Now the grouped data is stored in the 'groupedData' variable
console.log(groupeddata);
this.groupeddata = groupeddata;
  this.show = true
},


            detailsPage(item) {
                this.$router.push(`/pl/${item.id}`)
            },
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                // this.page = this.model.current_page

                // console.log(res.data.results);
            },
            nextPage() {
                if(this.model.next_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) + 1) : 2

                    this.$router.push({
                        path: '/pl',
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/pl',
                        query: query
                    })
                }
            },
            Excel() {
      this.data = [];
      var items = this.groupeddata;
      console.log(items);
      for (let i = 0; i < items.length; i++) {

       this.data.push({
          'Title': items[i].acount_code,

          'Username': items[i].debit ,



        });


      }
    },


        }
    }
</script>

<style scoped>
@media print {
  table {
    display: table !important;
  }
}

.show{
  display: none;
}
</style>






