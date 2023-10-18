<template>
    <div class="panel">
        <div class="panel-heading">
            <h1 class="panel-title">Trail Balance</h1>
            <!-- <typehead :url="customerURL" :initialize="customer" modelText="text"
                            @input="onCustomer" /> -->
                            <!-- <typehead :url="voucherURL" :initialize="form.voucher"  
                            @input="onvoucher($event)" /> -->
                            <!-- <typehead :url="accountURL" :initialize="form.account"  
                            @input="onacce($event)" /> -->
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

                            <!-- <input type="date" placeholder="" v-model="params.todate" >   -->
                            <!-- <input type="date" class="form-control"  v-model="params.todate"> -->
                                  <br>
                            <button type="submit" class="btn btn-primary" @click="onSearch">
        <!-- <svg aria-hidden="true" class="mr-2 -ml-1 w-1 h-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search --> Search
    </button>
            <!-- <div class="text-right " style="margin-bottom: 20px;">
                <router-link to="/voucher/create" class="btn btn-primary">
                    Create Voucher
                </router-link>
            </div> -->
            
        </div>
        <div class="text-right  " style="margin-bottom: 20px;">
                <!-- <div class="col">
                  <button class="btn btn-success" style="float: right" @click="exportTableToExcel('print', 'Voucher Report')" color="success" icon="attachment"
                               type="border">
                        Download Excel
                    </button>
                </div> -->

               
                <button class="btn btn-danger" style="float: right; margin-right: 10px;" @click="generateReport" color="danger" icon="attachment"
                               type="border">
                               Generate PDF
                    </button>
               
                <!-- <div class="col"> -->
           
            <!-- </div> -->
            </div>
            <br>
            <br>
      
        <div  class="panel-body" v-if="show">
            <!-- <h1>{{name[0].chart ? name[0].chart.text:'' }}</h1> -->
            <!-- <div> -->
                <table id="print" class="table table-bordered table-link">
                  <thead style="background-color: #212F3D; color:white">
    <tr >
        
      <th class="text-center" colspan="3">Chart of Accounts</th>
      <th class="text-center" colspan="2" >Opening</th>

      <th class="text-center" colspan="2" >Activity</th>
      <th class="text-center" colspan="2" >Closing</th>

    
    </tr>
  </thead>
  <thead style="background-color:rgba(2, 21, 60 , .3)">
    <tr >
        <th >#</th>
      
      <th  >Account Code</th>
      <th  >Account</th>
      <th  >Debit</th>
      <th  >Credit</th>
      <th  >Debit</th>
      <th  >Credit</th>
      <th >Debit</th>
      <th >Credit</th>


    </tr>
  </thead>
  <tbody>
    <tr v-for="item , index in paginatedItems" :key="index">
      <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
        <td>{{ item.value }}</td>
     
      <td>{{ item.account_name }}</td>
      <!-- <td v-if="item.account_type === 'Debit'">
  
    {{ Math.abs(Math.abs(parseFloat(item.voucher ? (getVoucherDebitSum(item.voucher) - (item.voucher ? getVoucherCreditSum(item.voucher) : 0)).toFixed(2) : '00.00' )) - Math.abs(parseFloat(item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts))) }}.00

   

  </td> -->
  <td v-if="item.account_type === 'Debit'">
   
    {{Math.abs((parseFloat(item.voucher ? (getVoucherDebitSum(item.voucher) - (item.voucher ? getVoucherCreditSum(item.voucher) : 0)).toFixed(2) : '00.00' ) - (parseFloat(item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts)))) }}.00

   

  </td>
  <td v-else>0.00</td>
  <td v-if="item.account_type === 'Credit'">
    <!-- {{ parseFloat(item.voucher ? (getVoucherCreditSum(item.voucher) - (item.voucher ? getVoucherDebitSum(item.voucher) : 0)).toFixed(2) : '00.00') - parseFloat(item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts) }} -->
    {{Math.abs((parseFloat(item.voucher ? (getVoucherCreditSum(item.voucher) - (item.voucher ? getVoucherDebitSum(item.voucher) : 0)).toFixed(2) : '00.00') - (parseFloat(item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts)))) }}.00

  </td>
  <!-- <td v-if="item.account_type === 'Credit'">
  
    {{ Math.abs(Math.abs(parseFloat(item.voucher ? (getVoucherCreditSum(item.voucher) - (item.voucher ? getVoucherDebitSum(item.voucher) : 0)).toFixed(2) : '00.00')) - Math.abs(parseFloat(item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts))) }}.00

  </td> -->
  <td v-else>0.00</td>
      <td >{{item.voucher ? getVoucherDebitSum(item.voucher ):'00.00' }}.00</td>
  <td >{{item.voucher ? getVoucherCreditSum(item.voucher) :'00.00' }}.00</td>
  <!-- <td >{{item.voucher ? getVoucherCreditSum(item.voucher) :'00.00' }}.00</td> -->
  <!-- <td>{{item.voucher ? item.voucher[item.voucher.lenght]:'' }}</td> -->
  <td v-if="item.account_type == 'Debit'">{{ item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts }}.00</td>
  <td v-else>0.00</td>
  
  <td v-if="item.account_type == 'Credit'">{{ item.voucher && item.voucher.length > 0 ? getLastVoucherAccountBalance(item.voucher) : item.amounts }}.00</td>
  <td v-else>0.00</td>
  <!-- <td v-if="item.account_type == 'Credit'">0.00</td> -->


  

      
      <!-- <td v-if="parseFloat(item.total_debit) > parseFloat(item.total_credit)">
    
        {{debitTotals(item.total_debit , item.total_credit)}}
    
    </td>
      <td v-else>----</td>

       
      <td v-if="parseFloat(item.total_credit) > parseFloat(item.total_debit)">
    
    {{creditTotals(item.total_debit , item.total_credit)}}

</td>
  <td v-else>----</td> -->

      <!-- <td>{{ item.total_credit }}</td> -->
      <!-- <div>Total Debit: {{calculateExpression(item)}}</div> -->
    </tr>
    <tr >
  <td colspan="5" class="text-right" style="font-weight:bold"> Total :</td>
  <td >  {{totalDebitSum }}</td>
  <td >  {{totalCreditSum }}</td>

  <td >  {{ totalSum.debit }}</td>


  <td > {{ totalSum.credit }}</td>
</tr>
    

    <!-- <tr>
        <td colspan="2"><strong>Total</strong></td>
        <td><strong>{{ debitTotal }}</strong></td>
        <td><strong>{{ creditTotal }}</strong></td>
      </tr>
      <tr>
        <td colspan="2"><strong>Balance</strong></td>
        <td :class="{'text-danger': remainingDebit > 0}">
          <strong>{{ remainingDebit > 0 ? '+' + remainingDebit : '0' }}</strong>
        </td>
        <td :class="{'text-success': remainingCredit > 0}">
          <strong>{{ remainingCredit > 0 ? '+' + remainingCredit : '0' }}</strong>
        </td>
      </tr> -->
    
  </tbody>
</table>

  <div class="row">
    <!-- <div class="col-9 text-right"><strong>Balance:</strong></div> -->
    
    <!-- <div>Total Other: {{ getTotalOther}}</div> -->
    <!-- <div class="col-3">{{ balanceDebit }}{{ balanceCredit }}</div> -->
  </div>


 
        </div>


        <!-- <vue-html2pdf

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


<div slot="pdf-content" class="panel-body" v-if="show">
            <h1>{{ name[0].chart.text }}</h1>
           
                <table class="table table-bordered">
  <thead class="thead-dark">
    <tr >
        <th scope="col">#</th>
      
      <th  class="col-6">Account</th>
      <th  class="col-3">Debit</th>
      <th  class="col-3">Credit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item , index in model" :key="index">
        <td>{{ index+1 }}</td>
     
      <td>{{ item.account_code }}</td>
      
      <td v-if="parseFloat(item.total_debit) > parseFloat(item.total_credit)">
    
        {{debitTotals(item.total_debit , item.total_credit)}}
    
    </td>
      <td v-else>----</td>

       
      <td v-if="parseFloat(item.total_credit) > parseFloat(item.total_debit)">
    
    {{creditTotals(item.total_debit , item.total_credit)}}

</td>
  <td v-else>----</td>

      
    </tr>
    

  </tbody>
</table>

  <div class="row">
    <div class="col-9 text-right"><strong>Balance:</strong></div>
    <div class="col-3">{{ balanceDebit }}{{ balanceCredit }}</div>
  </div>


 
        </div>


</vue-html2pdf> -->
        <div class="panel-footer flex-between">
          
            <div>
              <div>
                
                <button  class="btn btn-lg " style=" color: #212F3D ; font-weight: bold;" @click="previousPage" :disabled="currentPage === 1">Previous</button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button  class="btn btn-lg " style=" color: #212F3D ; font-weight: bold;" @click="nextPages" :disabled="currentPage === totalPages">Next</button>
                <div class="text-right ">
                <strong  v-if="show" style=" font-weight: bold; margin-left: 15px;">Count: {{ model.length }}</strong>
            </div>
          </div>
           
            </div>
          
        </div>
    </div>
</template>
<script type="text/javascript">
  
import Vue from 'vue'
import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'
    export default {
        components: { Typehead},
        data () {
            return {
             

                responseData: [],
                groupedData: [],
                form: {},
                errors:{},
                voucherURL:'/api/search/voucher',
                accountURL: '/api/search/accounts',
                model: [],
                name: [],
                show:false,

                errors: false,
                currentPage: 1,    
               pageSize: 10,      
         

                params:{
              
                    account: '',
                    account_id :'',
                    voucher_id:'',
                    voucher:'',
                    voucher_no:'',
                    todate:"",
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
          paginatedItems() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.model.slice(start, end);
  },
          totalDebitSum() {
    let sum = 0;
    for (const item of this.model) {
      sum += parseFloat(item.voucher ? this.getVoucherDebitSum(item.voucher) : 0);
    }
    return sum.toFixed(2);
  },
  totalCreditSum() {
    let sum = 0;
    for (const item of this.model) {
      sum += parseFloat(item.voucher ? this.getVoucherCreditSum(item.voucher) : 0);
    }
    return sum.toFixed(2);
  },
          totalSum() {
    let debitSum = 0;
    let creditSum = 0;
    for (const item of this.model) {
      if (item.account_type === 'Debit') {
        debitSum += parseFloat(item.voucher && item.voucher.length > 0 ? this.getLastVoucherAccountBalance(item.voucher) : item.amounts);
      } else if (item.account_type === 'Credit') {
        creditSum += parseFloat(item.voucher && item.voucher.length > 0 ? this.getLastVoucherAccountBalance(item.voucher) : item.amounts);
      }
    }
    return { debit: debitSum.toFixed(2), credit: creditSum.toFixed(2) };
  },
  //         totalSum() {
  //   let sum = 0;
  //   for (const item of this.model) {
      
  //       sum += parseFloat(item.voucher && item.voucher.length > 0 ? this.getLastVoucherAccountBalance(item.voucher) : item.amounts);
      
  //   }
  //   return sum.toFixed(2);
  // },

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
            totalPages() {
    return Math.ceil(this.model.length / this.pageSize);
  },
        },
        methods: {
          previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  },
  nextPages() {
    
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  },
          getLastVoucherAccountBalance(vouchers) {
    const lastVoucher = vouchers[vouchers.length - 1];
    return lastVoucher.account_balance || '.00';
  },
          getVoucherDebitSum(voucher) {
    return voucher.reduce((sum, voucher) => sum + voucher.debit, 0);
  },
  getVoucherCreditSum(voucher) {
    return voucher.reduce((sum, voucher) => sum + voucher.credit, 0);
  },

       
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
            debitTotals( e , f) {
              
                    

                    return e - f ;
             
    },

    creditTotals( e , f) {
              
                    

              return f - e ;
       
},


// debitTotal() {
//         return this.model.reduce((total, item) => total + parseFloat(item.total_debit || 0), 0);
//     },
//     creditTotal() {
//         return this.model.reduce((total, item) => total + parseFloat(item.total_credit || 0), 0);
//     },
//     balance() {
//     const debitTotal = this.model.reduce((total, item) => total + parseFloat(item.total_debit || 0), 0);
//     const creditTotal = this.model.reduce((total, item) => total + parseFloat(item.total_credit || 0), 0);
//     const diff = (debitTotal - creditTotal).toFixed(2);
//     if (diff > 0) {
//       return `+${diff}`;
//     } else if (diff < 0) {
//       return `${-diff}`;
//     } else {
//       return '0';
//     }
//   },

    

         

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
               console.log(this.params);
            //    let params =`?q=&account_id=${this.form.account.id}`
            // if(this.form.account_id != null || this.form.voucher_no != null){
            let params = "?q=";
                if (this.form.account_id != null) {
                    params += "&account_id=" + this.form.account_id;
                }
                if (this.params.todate != null) {
                    params += "&todate=" + this.params.todate;
                }

                if (this.form.voucher_no != null) {
                    params += "&voucher=" + this.form.voucher_no;
                }
            //    let params =`?q=&account_id=${this.form.account.id}&todate=${this.params.todate}`
            //    let param =`?q=voucher=${this.form.voucher.id}`

               

            //    console.log(params+"");
   
               get(`/api/trails/${params}`)
          
            .then((res ) => {

                Vue.set(this.$data, 'model', res.data.merge)
              //   Vue.set(this.$data, 'name', res.data.name)

              // console.log(res.data.trail);   
    //             this.responseData = res.data.data;
    // this.groupData();
                // console.log(res.data.data);
                this.show = true
           
                // this.setData(res)  
            })
        // }
        // else{
        //             this.errors == true;
        //             this.errors = 'Fill'
        //         }
        
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
            },
            getTotalDebit() {
      let total = 0;
      for (const item of this.model) {
        if (item.account_type === 'Debit') {
          total += Math.abs(
            Math.abs(
              parseFloat(
                item.voucher
                  ? (
                      getVoucherDebitSum(item.voucher) -
                      (item.voucher
                        ? getVoucherCreditSum(item.voucher)
                        : 0)
                    ).toFixed(2)
                  : '00.00'
              )
            ) -
              Math.abs(
                parseFloat(
                  item.voucher && item.voucher.length > 0
                    ? getLastVoucherAccountBalance(item.voucher)
                    : item.amounts
                )
              )
          );
        }
      }
      return total;
    },
    calculateExpression(item) {
      return (
        Math.abs(
          Math.abs(
            parseFloat(
              item.voucher
                ? (
                    getVoucherDebitSum(item.voucher) -
                    (item.voucher ? getVoucherCreditSum(item.voucher) : 0)
                  ).toFixed(2)
                : '00.00'
            )
          ) -
          Math.abs(
            parseFloat(
              item.voucher && item.voucher.length > 0
                ? getLastVoucherAccountBalance(item.voucher)
                : item.amounts
            )
          )
        ) + '.00'
      );
    },
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


 