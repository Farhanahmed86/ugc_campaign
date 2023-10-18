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
                   
                    <h1>Accounts Ledger</h1>
                </div>
                <div class="document-body">
                    <table class="table document-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Voucher no</th>
                                <th>Account</th>

                                <th>Debit</th>
                                <th>Credit</th>
                                <th>Balance</th>


                               
                                
                            </tr>
                        </thead>
                        <!-- <tbody>
                            <tr v-for="item in model" :key="item.id">
                                <td class="w-3">{{item.created_at}}</td>
                                <td class="w-3">{{item ? item.voucher_no:''}}</td>
                                <td class="w-3">
                                    {{item ? item.account_code:''}}
                                </td>
                                <td class="w-3">{{item ? item.debit :''}}</td>
                                <td class="w-3">{{item ? item.credit :''}}</td>
                                <td class="w-3">{{item ? item.account_balance :''}}</td>


                            
                            </tr>
                           
                        </tbody> -->
                        
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
                // model: {
                //     items: [],
                //     customer: {}
                // }
                model:[],
            }
        },
        beforeRouteEnter(to, from, next) {
            get(`/api/accounts_ledger/${to.params.routeParams}`)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false
            get(`/api/accounts_ledger/${to.params.id}`)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'model', res.data.data)
                this.show = true
               
                console.log(res.data.data);
            },
            // deleteItem() {
            //     byMethod('delete', `/api/vendors/${this.model.id}`)
            //         .then((res) => {
            //             if(res.data.deleted) {
            //                 this.$router.push('/vendors')
            //             }
            //         })
            // }
        }
    }
</script>
