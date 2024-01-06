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
                <div class="col-6 col-offset-12">
                        <table class="document-summary">
                            <tbody>
                                <tr>
                                    <td colspan="2">
                                        <span class="document-title">Amount Balance</span>
                                    </td>
                                </tr>
                               
                                
                            </tbody>
                        </table>
                    </div>
                <div class="document-body">
                    <table class="table document-table">
                        <thead>
                            <tr>
                             
                                <th>Total Purchase</th>
                                
                                <th>Paid</th>
                                <th>Balance</th>
                            
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                
                                <td class="w-5">{{model.total_purchase | formatMoney}}</td>
                                <td class="w-3">{{model.total_paid | formatMoney}}</td>
                                <td class="w-3">{{model.due_payment | formatMoney}}</td>
                                
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
                <br>
                <br>
                <div class="row">
                   
                    <div class="col-6 col-offset-12">
                        <table class="document-summary">
                            <tbody>
                                <tr>
                                   
                                    <tr>
                                    <td colspan="2">
                                        <span class="document-title">Transaction</span>
                                    </td>
                                </tr>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="document-body">
                    <table class="table document-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Transaction id</th>
                                <th>Inventory id</th>
                                <th>Paid</th>
                                <th>Balance</th>
                                <th>Total amount

                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in model.transaction" :key="item.id">
                                <td class="w-3">{{item.created_at}}</td>
                                <td class="w-3">{{item.id}}</td>
                                <td class="w-3">
                                    {{item.inventory_id}}
                                </td>
                                <td class="w-3">{{item.payment | formatMoney}}</td>
                                <td class="w-3">{{item.due_payment | formatMoney}}</td>
                                <td class="w-4">{{ item.total_payment | formatMoney}}</td>
                            </tr>
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
                                <tr>
                                    <td colspan="2">
                                        <span class="document-title">Inventory</span>
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
                                <th>Inventory Id</th>
                                
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit price</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in model.inventory" :key="item.id">
                                <td class="w-3">{{item.created_at}}</td>
                                <td class="w-3">{{item.id}}</td>
                                <td class="w-3">{{item.item }}</td>
                                <td class="w-3">{{item.quantity }}</td>
                                <td class="w-3">{{item.unit_price | formatMoney}}</td>
                                
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
            get(`/api/vendors/${to.params.id}`)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false
            get(`/api/vendors/${to.params.id}`)
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
