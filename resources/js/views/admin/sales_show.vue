<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <span class="panel-title">{{model.number}}</span>
            <div>
                <router-link to="/sales" class="btn">Back</router-link>
                <router-link :to="`/sales/${model.id}/edit`" class="btn">Edit</router-link>
                <button class="btn btn-error" @click="deleteItem">Delete</button>
            </div>
        </div>
      <div class="panel-body">
            <div class="row ">
              <div class="col-12">
                    <div class="form-group">
                        <label>
                            Customer Name
                        </label>
                        <span>{{model.customer_name}}</span>

                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <label>
                            Customer Id
                        </label>
                        <span>{{model.customer_id}}</span>

                    </div>
                </div>
                <div class="col-12 ">
                    <div class="form-group">
                        <label>
                            Item
                         </label>
                      <span>{{model.item}}</span>
                     </div>
                </div>
                <div class="col-12 ">
                    <div class="form-group">
                        <label>
                            Price
                         </label>
                      <span>{{model.sale}}</span>
                     </div>
                </div>
            </div>
            
                <!-- <div class="col-12">
                    <div class="form-group">
                        <label>Price</label>
                   <span>{{model.sale}}</span>
                 </div>
                </div> -->
                
                
            
            <hr>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
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
            get(`/api/sales/${to.params.id}`)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false
            get(`/api/sales/${to.params.id}`)
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
                byMethod('delete', `/api/sales/${this.model.id}`)
                    .then((res) => {
                        if(res.data.deleted) {
                            this.$router.push('/sales')
                        }
                    })
            }
        }
    }
</script>