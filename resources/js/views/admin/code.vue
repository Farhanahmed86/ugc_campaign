<template>
    <div class="panel">
        <div class="panel-heading">
            <span class="panel-title">Account Code</span>
            <div class="text-right">
                <router-link to="/accounts/create" class="btn btn-primary">
                    Add Account Code
                </router-link>
            </div>
        </div>
        <div class="panel-body">
            <table class="table table-link">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Accounts Code Name</th>
                        <th>Account Code</th>
                        <th>Date</th>
                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in model.data" :key="item.data" >
                        <td class="w-1">{{item.id}}</td>
                        <td class="w-3">{{item.title}}</td>
                        <td class="w-3">{{item.account_code}}</td>
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
    // import { get } from '../../lib/api'
    import { get , byMethod} from './components/lib/api'
    export default {
        data () {
            return {
                model: {
                    data: []
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            get('/api/accounts', to.query)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/accounts', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {
            detailsPage(item) {
                this.$router.push(`/accounts/${item.id}`)
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
                        path: '/accounts',
                        query: query
                    })
                }
            },
            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/accounts',
                        query: query
                    })
                }
            }
        }
    }
</script>
