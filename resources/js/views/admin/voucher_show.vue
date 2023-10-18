<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            
            <!-- <div>
                <router-link to="/vendors" class="btn">Back</router-link>
                <router-link :to="`/vendors/${model.id}/edit`" class="btn">Edit</router-link>
                <button class="btn btn-error" @click="deleteItem">Delete</button>
            </div> -->
        </div>
        
        <div class="panel-body">
            <div class="document">
                
                
                <div class="row">
                   
                    <h1>Credit Account Detail</h1>
                </div>
                <div class="document-body">
                    <table class="table document-table">
                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>Chart Type</th>
                                <th>Opening Amount</th>
                                <th>Current Amount</th>

                               
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td class="w-3">{{model.chart.account_name}}</td>
                                <td class="w-3">{{model.chart.chart_type}}</td>
                                <td class="w-3">
                                    {{model.chart.amounts}}
                                </td>
                                <td class="w-3">{{model.chart.balance ? model.chart.balance :'-----'}}</td>
                            
                            </tr>
                            <!-- <tr v-for="item in model.transaction" :key="item.id">
                                <td class="w-3">{{item.created_at}}</td>
                                <td class="w-3">{{item.id}}</td>
                                <td class="w-3">
                                    {{item.inventory_id}}
                                </td>
                                <td class="w-3">{{item.payment | formatMoney}}</td>
                                <td class="w-3">{{item.due_payment | formatMoney}}</td>
                                <td class="w-4">{{ item.total_payment | formatMoney}}</td>
                            </tr> -->
                        </tbody>
                        
                    </table>
                </div>
                <!-- <br>
                <div class="col-6 col-offset-12">
                        <table class="document-summary">
                            <tbody>
                                <tr>
                                    <td colspan="2">
                                        <span class="document-title">Payment Method</span>
                                    </td>
                                </tr>
                               
                                
                            </tbody>
                        </table>
                    </div>
                <div class="document-body">
                    <table class="table document-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Payment</th>
                                <th>Due payment</th>
                               
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in model.paymentmethod" :key="item.id">
                                <td class="w-3">{{item.date}}</td>
                                <td class="w-3">{{item.payments | formatMoney}}</td>
                                <td class="w-3">{{item.due_payments | formatMoney}}</td>
                                
                            </tr>
                        </tbody>
                        
                    </table>
                </div> -->
                <br>
                <br>

                 <div class="col-6 col-offset-12">
                        <table class="document-summary">
                            <tbody>
                                <h1>
                                    Vocher Details
                                </h1>
                               
                                
                            </tbody>
                        </table>
                    </div>
                <div class="document-body">
                    <table class="table document-table">
                        <thead>
                            <tr>
                                <th>Reference Code</th>
                                <th>Reference no</th>
                                
                                <th>Account Code</th>
                                <th>Debit</th>
                                <th>Creadit</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in model.items" :key="item.id">
                                <td class="w-3">{{item.ref_code}}</td>
                                <td class="w-3">{{item.ref_no}}</td>
                                <td class="w-3">{{item.account_code }}</td>
                                <td class="w-3">{{item.debit ? item.debit :'-----'}}</td>
                                <td class="w-3">{{item.credit ? item.credit : '-----'}}</td>
                                
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
              
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'Vue'
    // import {get, byMethod} from '../../lib/api'
    import { get , byMethod} from '../admin/components/lib/api'

    export default {
        data () {
            return {
                show: false,
                model: {
                    items: [],
                    customer: {}
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            get(`/api/vouchers/${to.params.id}`)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false
            get(`/api/vouchers/${to.params.id}`)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'model', res.data.model)
                this.show = true
               
                console.log(res.data.model);
            },
            deleteItem() {
                byMethod('delete', `/api/vendors/${this.model.id}`)
                    .then((res) => {
                        if(res.data.deleted) {
                            this.$router.push('/vendors')
                        }
                    })
            }
        }
    }
</script>
