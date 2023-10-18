<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <span class="panel-title">{{model.number}}</span>
            <div class="text-right">
                <router-link to="/customers" class="btn" style="background-color: #1884F1 ; color: aliceblue;">Back</router-link>
                <!-- <router-link :to="`/customers/${model.id}/edit`" class="btn" style="background-color: #33B000 ; color: aliceblue;">Edit</router-link>
                <button class="btn btn-error" style="background-color: #C70039; color: aliceblue; " @click="deleteItem">Delete</button> -->
            </div>
        </div>
      <div class="panel-body">
            <div class="row ">
              <div class="col-12">
                    <div class="form-group">
                        <label style="font-weight:bold">
                            Accounts Name :
                        </label>
                        <span style="margin-left: 100px;">{{model.account_name}}</span>

                    </div>
                </div>
                <div class="col-12 ">
                    <div class="form-group">
                        <label style="font-weight:bold">
                            Account :
                         </label>
                      <span style="margin-left: 160px;">{{model.chart}}</span>
                     </div>
                </div>
            </div>

            
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label style="font-weight:bold ">Account Type:</label>
                   <span style="margin-left: 100px;">{{model.chart_type}}</span>
                 </div>
                </div>
                
                
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label style="font-weight:bold ">Id :</label>
                   <span style="margin-left: 200px;">{{model.value}}</span>
                 </div>
                </div>
                
                
            </div>


            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label style="font-weight:bold ">Amount :</label>
                   <span style="margin-left: 150px;">{{model.amounts}}</span>
                 </div>
                </div>
                
                
            </div>
            <hr>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    // import {get, byMethod} from '../../lib/api'
    import { get , byMethod} from '../admin/components/lib/api'
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
            get(`/api/customers/${to.params.id}`)
                .then((res) => {
                    next(vm => vm.setData(res))
                })
        },
        beforeRouteUpdate(to, from, next) {
            this.show = false
            get(`/api/customers/${to.params.id}`)
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
                byMethod('delete', `/api/customers/${this.model.id}`)
                    .then((res) => {
                        if(res.data.deleted) {
                            this.$router.push('/customers')
                        }
                    })
            }
        }
    }
</script>