<template>
 <h1>testing</h1>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'
    export default {
        data () {
            return {
                show: false,
                model: {
                 customer: {}
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            get(`/api/transactions/${to.params.id}`)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false
            get(`/api/transactions/${to.params.id}`)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'model', res.data.model)
                this.show = true
                
            },
            deleteItem() {
                byMethod('delete', `/api/transactions/${this.model.id}`)
                    .then((res) => {
                        if(res.data.deleted) {
                            this.$router.push('/transactions')
                        }
                    })
            }
        }
    }
</script>