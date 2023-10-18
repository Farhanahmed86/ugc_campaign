<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">VENDOR</span>
            <!-- <typehead :url="customerURL" :initialize="customer" modelText="text"
                            @input="onCustomer" /> -->
                       
            <div class="text-right">
                <router-link to="/vendors/create" class="btn btn-primary">
                    New Vendor
                </router-link>
            </div>
        </div>
        <div class="panel-body">
            <table class="table table-link">
                <thead>
                    <tr>
                        <th>ID</th>
                        
                        <th>NAME</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in model.data" :key="item.data" @click="detailsPage(item)" >
                        <td class="w-1">{{item.id}}</td>
                        <td class="w-1">{{item.name}}</td>
                       
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
    import { get } from '../admin/components/lib/api'
   
    export default {
      
        data () {
            return {
                
                
                model: {
                    data: []

                }

            }
        },

     
        beforeRouteEnter(to, from, next) {
            get('/api/vendors', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/vendors', to.query)
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
                this.$router.push(`/vendors/${item.id}`)
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
                        path: '/vendors',
                        query: query
                    })
                }
            },

            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/vendors',
                        query: query
                    })
                }
            }
        }
    }
</script>
