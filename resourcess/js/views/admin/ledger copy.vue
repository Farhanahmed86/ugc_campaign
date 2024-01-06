<template>
    <div class="panel">
      <div class="panel-heading">
            <h1 class="panel-title">Profit & Loss Statement</h1>
          
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

                            <button type="submit" class="btn btn-primary" @click="onSearch">
        <!-- <svg aria-hidden="true" class="mr-2 -ml-1 w-1 h-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search --> Search
    </button>
        
          
        </div>
        <div class="text-right  " style="margin-bottom: 20px;">
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
        <!-- <div v-if="error">
            <h1 class="error-control" style="color: brown;">
                You have to select Voucher no or Account name  
            </h1>
        </div> -->

        <!-- <div>
  <div v-for="(account, index) in groupedData" :key="account.account_code">
    <h2>{{ account.account_code }}</h2>
    <div v-for="(voucher, voucherIndex) in groupVouchersByAccount(account)" :key="voucherIndex">
      <h3>Voucher ID: {{ voucher.voucher_id }}</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Ref:no</th>
            <th>Ref:code</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in voucher.transactions" :key="transaction.id">
            <td>{{ transaction.created_at }}</td>
            <td>{{ transaction.ref_no }}</td>
            <td>{{ transaction.ref_code }}</td>
            <td>{{ transaction.debit }}</td>
            <td>{{ transaction.credit }}</td>
          </tr>
          <tr>
            <td colspan="3">Balance</td>
            <td v-if="computeDebitCreditDiff(voucher.transactions) > 0">00</td>
            <td v-else>{{ -computeDebitCreditDiff(voucher.transactions) }}</td>
            <td v-if="computeDebitCreditDiff(voucher.transactions) < 0"></td>
            <td v-else>{{ computeDebitCreditDiff(voucher.transactions) }}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="voucherIndex < groupVouchersByAccount(account).length - 1"><hr /></div>
    </div>
    <div v-if="index < groupedData.length - 1"><hr /></div>
  </div>
</div> -->
<div id="print" class=" container">

<div  v-for="voucher in groupedData" :key="voucher.voucher_id">
<h1>Voucher {{ voucher.voucher_no }}</h1>
<hr>
<div v-for="account in voucher.accounts" :key="account.account_code">
<h2>{{ account.account_code }}</h2>
<hr>
<table class="table ">
<thead>
<tr>
<th>Date</th>
<th>Ref no</th>
<th>Ref code</th>
<th>Debit</th>
<th>Credit</th>
</tr>
</thead>
<tbody>
<tr v-for="transaction in account.transactions" :key="transaction.id">
<td>{{ transaction.created_at }}</td>
<td>{{ transaction.ref_no }}</td>
<td>{{ transaction.ref_code }}</td>
<td>{{ transaction.debit }}</td>
<td>{{ transaction.credit }}</td>
</tr>
</tbody>
</table>
<div>Total debit: {{ computeDebitTotal(account.transactions) }}</div>
<div>Total credit: {{ computeCreditTotal(account.transactions) }}</div>
<tr>
<td colspan="3">Balance ||</td>
<td v-if="computeDebitCreditDiff(account.transactions) > 0">Debit Balance</td>
<td v-if="computeDebitCreditDiff(account.transactions) < 0">Credit Balance</td>
<td v-if="computeDebitCreditDiff(account.transactions) == 0">0</td>
<td v-if="computeDebitCreditDiff(account.transactions) > 0">{{ computeDebitCreditDiff(account.transactions) }}</td>
<td v-if="computeDebitCreditDiff(account.transactions) < 0">{{ -computeDebitCreditDiff(account.transactions) }}</td>
</tr>
<div class="row">
            <div class="col-8">
                <div>Final Balance</div>
            </div>
            <div class="col-2" >
                <div class="text-right" v-if="computeDebitTotal(account.transactions) < computeCreditTotal(account.transactions)" >{{debitTotal((computeDebitTotal(account.transactions)), computeCreditTotal(account.transactions))}}</div>
                <div class="text-right" v-else >{{computeDebitTotal(account.transactions)}}</div>
              

            </div>
            <div class="col-2"  >
                <div class="text-center" v-if="computeCreditTotal(account.transactions) < computeDebitTotal(account.transactions)" >{{debitTotals((computeCreditTotal(account.transactions)), computeDebitTotal(account.transactions))}}</div>
                <div class="text-center" v-else >{{computeCreditTotal(account.transactions)}}</div>
              

            </div>
            
        </div>

</div>
</div>

<!-- <div class="container" v-for="account in groupedData" :key="account.account_code">
<h1>{{ account.account_code }}</h1>
<hr>
<hr>
<table class="table ">
<thead>
<tr>
<th>Date</th>


<th>Ref:no</th>
<th>Ref:code</th>
<th>Debit</th>
<th>Credit</th>
</tr>
</thead>
<hr>
<tbody>
<tr v-for="transaction in account.transactions" :key="transaction.id">
<td>{{ transaction.created_at}}</td>

<td>{{ transaction.ref_no }}</td>
<td>{{ transaction.ref_code }}</td>
<td>{{ transaction.debit }}</td>
<td>{{ transaction.credit }}</td>


<hr>
</tr>



      
</tbody>


<hr>
</table>
<div class="row">
            <div class="col-8">
                <div>Total</div>
            </div>
            <div class="col-2">
                <div class="text-center">{{ computeDebitTotal(account.transactions) }}</div>
              

            </div>
            <div class="col-2">
                <div class="text-center">{{ computeCreditTotal(account.transactions) }}</div>
            </div>
        </div>
<hr>


<tr>
<td colspan="3">Balance ||</td>
<td v-if="computeDebitCreditDiff(account.transactions) > 0">Debit Balance</td>
<td v-if="computeDebitCreditDiff(account.transactions) < 0">Credit Balance</td>
<td v-if="computeDebitCreditDiff(account.transactions) == 0">0</td>
<td v-if="computeDebitCreditDiff(account.transactions) > 0">{{ computeDebitCreditDiff(account.transactions) }}</td>
<td v-if="computeDebitCreditDiff(account.transactions) < 0">{{ -computeDebitCreditDiff(account.transactions) }}</td>
</tr>
<hr>
<div class="row">
            <div class="col-8">
                <div>Final Balance</div>
            </div>
            <div class="col-2">
                <div class="text-center" v-if="computeDebitTotal(account.transactions) < computeCreditTotal(account.transactions)" >{{debitTotal((computeDebitTotal(account.transactions)), computeCreditTotal(account.transactions))}}</div>
                <div class="text-center" v-else >{{computeDebitTotal(account.transactions)}}</div>
              

            </div>
            <div class="col-2">
                <div class="text-center" v-if="computeCreditTotal(account.transactions) < computeDebitTotal(account.transactions)" >{{debitTotals((computeCreditTotal(account.transactions)), computeDebitTotal(account.transactions))}}</div>
                <div class="text-center" v-else >{{computeCreditTotal(account.transactions)}}</div>
              

            </div>
            
        </div>
       
</div> -->

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


<div  slot="pdf-content" v-for="voucher in groupedData" :key="voucher.voucher_id">
<h1>Voucher {{ voucher.voucher_no }}</h1>
<hr>
<div v-for="account in voucher.accounts" :key="account.account_code">
<h2>{{ account.account_code }}</h2>
<hr>
<table class="table ">
<thead>
<tr>
<th>Date</th>
<th>Ref no</th>
<th>Ref code</th>
<th>Debit</th>
<th>Credit</th>
</tr>
</thead>
<tbody>
<tr v-for="transaction in account.transactions" :key="transaction.id">
<td>{{ transaction.created_at }}</td>
<td>{{ transaction.ref_no }}</td>
<td>{{ transaction.ref_code }}</td>
<td>{{ transaction.debit }}</td>
<td>{{ transaction.credit }}</td>
</tr>
</tbody>
</table>
<div>Total debit: {{ computeDebitTotal(account.transactions) }}</div>
<div>Total credit: {{ computeCreditTotal(account.transactions) }}</div>
<tr>
<td colspan="3">Balance ||</td>
<td v-if="computeDebitCreditDiff(account.transactions) > 0">Debit Balance</td>
<td v-if="computeDebitCreditDiff(account.transactions) < 0">Credit Balance</td>
<td v-if="computeDebitCreditDiff(account.transactions) == 0">0</td>
<td v-if="computeDebitCreditDiff(account.transactions) > 0">{{ computeDebitCreditDiff(account.transactions) }}</td>
<td v-if="computeDebitCreditDiff(account.transactions) < 0">{{ -computeDebitCreditDiff(account.transactions) }}</td>
</tr>
<div class="row">
            <div class="col-8">
                <div>Final Balance</div>
            </div>
            <div class="col-2" >
                <div class="text-right" v-if="computeDebitTotal(account.transactions) < computeCreditTotal(account.transactions)" >{{debitTotal((computeDebitTotal(account.transactions)), computeCreditTotal(account.transactions))}}</div>
                <div class="text-right" v-else >{{computeDebitTotal(account.transactions)}}</div>
              

            </div>
            <div class="col-2"  >
                <div class="text-center" v-if="computeCreditTotal(account.transactions) < computeDebitTotal(account.transactions)" >{{debitTotals((computeCreditTotal(account.transactions)), computeDebitTotal(account.transactions))}}</div>
                <div class="text-center" v-else >{{computeCreditTotal(account.transactions)}}</div>
              

            </div>
            
        </div>
<!-- <div>Balance: {{ computeDebitCreditDiff(account.transactions) }}</div> -->
</div>
</div>







</vue-html2pdf>
        <div class="panel-footer flex-between">
            <div>
                <!-- <small>Showing {{model.from}} - {{model.to}} of {{model.total}}</small> -->
            </div>
            <!-- <div>
                <button class="btn btn-sm" :disabled="!model.prev_page_url" @click="prevPage">
                    Prev
                </button>
                <button class="btn btn-sm" :disabled="!model.next_page_url" @click="nextPage">
                    Next
                </button>
            </div> -->
        </div>
    </div>
</template>
<script type="text/javascript">
  
import Vue from 'vue'
    import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'
import excel from "vue-json-excel";
    export default {
        components: { Typehead, excel},
        data () {
            return {
                responseData: [],
                groupedData: [],
               
                // groupVouchersByAccount:[],
                form: {},
                errors:{},
                voucherURL:'/api/search/voucher',
                accountURL: '/api/search/accounts',
                model: [],
                errors: false,
         

                params:{
              
                    account: '',
                    account_id :'',
                    voucher_id:'',
                    voucher:'',
                    voucher_no:'',
                    todate:"",
                    fromdate:"",
                    

                },

            }
        },

     
        beforeRouteEnter(to, from, next) {
            get('/api/ledgers', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/ledgers', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },

        computed: {

          

            // subTotal() {
            //     return this.account.transactions.reduce((carry, transaction) => {
            //         return carry + (Number(transaction.debit? transaction.debit : 0))
            //     }, 0)
            // },
            // total() {
            //     return this.form.items.reduce((carry, item) => {
            //         return carry + (Number(item.credit ? item.credit :0))
            //     }, 0)
            // }
        },
        methods: {


     
          exportTableToExcel(tableID, filename = "") {
    var downloadLink;
    var dataType = "application/vnd.ms-excel";
    var tableSelect = document.getElementById(tableID);

    

    // var tableHTML = tableSelect.outerHTML.replace(/ /g, "%20");
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
generateReport() {

this.$refs.html2Pdf.generatePdf()

},

onProgress(e) {

console.log(e, 'e');

},

            computeDebitTotal(transactions) {
      let debitTotal = 0;
      transactions.forEach((transaction) => {
        debitTotal += transaction.debit;
      });
      return debitTotal;
    },
    computeCreditTotal(transactions) {
      let creditTotal = 0;
      transactions.forEach((transaction) => {
        creditTotal += transaction.credit;
      });
      return creditTotal;
    },

    computeDebitCreditDiff(transactions) {
      return this.computeCreditTotal(transactions) - this.computeDebitTotal(transactions);
    },

    debitTotal( e , f) {
      return e + (f - e);
    },

    debitTotals( e , f) {
      return e + (f - e);
    },

//             groupData() {
//   this.groupedData = this.responseData.reduce((acc, cur) => {
//     const accountCode = cur.account_code;
//     const existingAccount = acc.find((item) => item.account_code === accountCode);
//     if (existingAccount) {
//       existingAccount.debits += cur.debit;
//       existingAccount.credits += cur.credit;
//     } else {
//       acc.push({
//         account_code: accountCode,
//         debits: cur.debit,
//         credits: cur.credit,
//       });
//     }
//     return acc;
//   }, []);
// },

            onvoucher(e) {
               
               const voucher = e.target.value
               Vue.set(this.form, 'voucher', voucher)
               Vue.set(this.form, 'voucher_id', voucher.id)
               Vue.set(this.form, 'voucher_no', voucher.voucher_no)

           },
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
            //    let params =`?q=&account_id=${this.form.account.id}&todate=${this.params.todate}`
            //    let param =`?q=voucher=${this.form.voucher.id}`

               

            //    console.log(params+"");
   
               get(`/api/ledgers/${params}`)
          
            .then((res ) => {

                Vue.set(this.$data, 'model', res.data.data)
              
                this.responseData = res.data.data;
    this.groupData();
                
            })
        // }
        // else{
        //             this.errors == true;
        //             this.errors = 'Fill'
        //         }
        
        },

//         groupData() {
//   this.groupedData = this.responseData.reduce((acc, cur) => {
//     const voucherId = cur.voucher_id;
//     const existingVoucher = acc.find((item) => item.voucher_id === voucherId);
//     if (existingVoucher) {
//       const accountCode = cur.account_code;
//       const existingAccount = existingVoucher.accounts.find((item) => item.account_code === accountCode);
//       if (existingAccount) {
//         existingAccount.transactions.push({ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at});
//       } else {
//         existingVoucher.accounts.push({
//           account_code: accountCode,
//           transactions: [{ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at }]
//         });
//       }
//     } else {
//       acc.push({
//         voucher_id: voucherId,
//         accounts: [{
//           account_code: cur.account_code,
//           transactions: [{ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at }]
//         }]
//       });
//     }
//     return acc;
//   }, []);
//   this.show = true
// },

groupData() {
  this.groupedData = this.responseData.reduce((acc, cur) => {
    const voucherId = cur.voucher_id;
    const voucherno = cur.voucher_no;

    const existingVoucher = acc.find((item) => item.voucher_id === voucherId);
    
    if (existingVoucher) {
      const accountCode = cur.account_code;
      const existingAccount = existingVoucher.accounts.find((item) => item.account_code === accountCode);
      if (existingAccount) {
        existingAccount.transactions.push({ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at});
      } else {
        existingVoucher.accounts.push({
          account_code: accountCode,
          transactions: [{ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at }]
        });
      }
    } else {
      acc.push({
        voucher_id: voucherId,
        voucher_no: voucherno,

        accounts: [{
          account_code: cur.account_code,
          transactions: [{ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at }]
        }]
      });
    }
    return acc;
  }, []);
  this.show = true
},

Excel() {
      this.data = [];
      var items = this.groupedData;
      console.log(items);
  //     for (let i = 0; i < items.length; i++) {
   
  //      this.data.push({
  //         'Title': items[i].document_type.title,
         
  //         'Username': items[i].candidate ? items[i].candidate.username :'',
  //         'Email': items[i].candidate ? items[i].candidate.email : '',
  //         'Phase': items[i].candidate ? items[i].candidate.phase : '',

  //         'Expiry Date': items[i].expiry_date,
          
  //       });
   
  // }
},
//         groupData() {
//   this.groupedData = this.responseData.reduce((acc, cur) => {
//     const accountCode = cur.account_code;
//     const existingAccount = acc.find((item) => item.account_code === accountCode);
//     if (existingAccount) {
//       existingAccount.transactions.push({ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at});
//     } else {
//       acc.push({
//         account_code: accountCode,
//         transactions: [{ debit: cur.debit, credit: cur.credit, ref_code:cur.ref_code, ref_no:cur.ref_no, created_at:cur.created_at }]
//       });
//     }
//     return acc;
//   }, []);
//   this.show = true
// },
groupVouchersByAccount(account) {
    return account.accounts;
  },
            detailsPage(item) {
                this.$router.push(`/ledgers/${item.id}`)
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
                        path: '/ledgers',
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/ledgers',
                        query: query
                    })
                }
            }
        }
    }
</script>



<!-- <div>
    <div v-for="item in groupedData" :key="item.account_code">
      <h2>{{ item.account_code }}</h2>
      <p>Debits: {{ item.debits }}</p>
      <p>Credits: {{ item.credits }}</p>
    </div>
  </div> -->


 