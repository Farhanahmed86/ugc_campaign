<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title"></span>
            <h1>Stock Report</h1>
            <!-- <typehead :url="customerURL" :initialize="customer" modelText="text"
                            @input="onCustomer" /> -->
                       
           
        </div>
        <div class="panel-body">
            <table class="table table-link">
                <thead>
                    <tr>
                        <th>INVENTORY ID</th>
                        <th>VENDOR NAME</th>
                        <th>ITEM</th>
                        <th>QUANTITY</th>
                        <th>REMANING STOCK</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in model.data" :key="item.data" >
                        <td class="w-3">{{item.id}}</td>
                        <td class="w-3">{{item.vendor.name}}</td>
                        <td class="w-3">{{item.item}}</td>
                       
                        <td class="w-3">{{item.quantity}}</td>
                        <td class="w-3">{{item.quantity-item.stock}}</td>
                       
                        
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
    import { get , byMethod} from './components/lib/api'
    //  import {Typehead } from '../../components/typehead'
    export default {
        // components: { Typehead},
        data () {
            return {
                
                model: {
                    data: []

                }

            }
        },

     
        beforeRouteEnter(to, from, next) {
            get('/api/inventory', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/inventory', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {

           
            detailsPage(item) {
                this.$router.push(`/inventory/${item.id}`)
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
                        path: '/inventory/stock',
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/inventory/stock',
                        query: query
                    })
                }
            }
        }
    }
</script>
