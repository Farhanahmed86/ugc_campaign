<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">Sales</span>
   <!-- <typehead :url="customerURL" :initialize="customer" modelText="text"
                            @input="onCustomer" />  -->
                        
            <div>
                <router-link to="/sales/create" class="btn btn-primary">
                    Create Sales
                </router-link>
            </div> 
        </div>
        <div class="panel-body">
            <table class="table table-link">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CUSTOMER ID</th>
                        <th>CUSTOMER NAME </th>
                        <!-- <th>EMAIL </th> -->
                        <!-- <th>ITEM</th> -->
                        <th>SALE </th>
                        <th>DATE </th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in model.data" :key="item.data" @click="detailsPage(item)" >
                        <td class="w-2">{{item.id}}</td>
                        <td class="w-3">{{item.customer_id}}</td>
                        <td class="w-5">{{item.customer_name}}</td>
                        <!-- <td class="w-3">{{item.customer.email}}</td> -->
                        <!-- <td class="w-3">{{item.item}}</td> -->
                        <td class="w-3">{{item.sale | formatMoney}}</td>
                        <td class="w-3">{{item.date}}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="panel-footer flex-between">
            <div>
                <small>Showing {{model.from}} - {{model.to}} of {{model.total}}</small>
            </div>
            <div>
                <button class="btn btn-sm" :disabled="!model.prev_page_url" @click="prevPage">
                    Prev
                </button>
                <button class="btn btn-sm" :disabled="!model.next_page_url" @click="nextPage">
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    import { get , byMethod} from '../admin/components/lib/api'
import { Typehead } from '../admin/components/typehead'
    export default {
        components: { Typehead},
        data () {
            return {
                 customer:{},
                 customer_id:'',
                 customerURL: '/api/search/customers',
                model: {
                    data: []

                }

            }
        },

     
        beforeRouteEnter(to, from, next) {
            get('/api/sales', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/sales', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {

            onCustomer(e) {
                console.log("hi "+e);
                const customer = e.target.value
                Vue.set(this.$data.customer, 'customer', customer)
                Vue.set(this.$data.customer_id,'customer_id',customer.id)
            },
            detailsPage(item) {
                this.$router.push(`/sales/${item.id}`)
            },
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                this.page = this.model.current_page
               
            },
            nextPage() {
                if(this.model.next_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) + 1) : 2

                    this.$router.push({
                        path: '/sales',
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/sales',
                        query: query
                    })
                }
            }
        }
    }
</script>
