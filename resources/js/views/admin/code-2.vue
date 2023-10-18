<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <!-- <span class="panel-title"> Customer</span> -->
            <h1>{{ title }} Account Code</h1>
        </div>
        <div class="panel-body">
            <div class="row-24">
                <div class="col-20">
                    <div class="form-group">
                        <label>Account Code Name</label>
                        <div class="row">
                            <div class="col-20">
                                <input type="text" class="form-control" placeholder="Enter your Account Name"
                                    v-model="form.account_code_name">
                            </div>
                            <div class="col-20 ml-12" style="margin-left: 300px; font-weight: bold;">
                               <h1 style="font-weight: bold; font-size: 70px;">National <br>
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-20">
                    <div class="form-group">
                        <label>Account Code ID</label>
                        <div class="row">
                            <div class="col-20">
                                <input type="text" class="form-control" placeholder="Enter your  Account Code ID"
                                    v-model="form.id">
                            </div>

                            <div class="col-20 ml-12" style="margin-left: 300px; font-weight: bold;">
                               <h1 style="font-weight: bold; font-size: 70px;">Institute of Kidney <br>
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-20">
                    <div class="form-group">
                        <label>
                            Date

                        </label>

                        <div class="row">
                            <div class="col-20">
                                <input type="date" class="form-control" v-model="form.date">
                        <small class="error-control" v-if="errors.date">
                            {{errors.date[0]}}
                        </small>
                            </div>

                            <div class="col-20 ml-12" style="margin-left: 350px; font-weight: bold;">
                               <h1 style="font-weight: bold; font-size: 70px;">Urological Disease <br>
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="col-20">
                    <div class="form-group">
                        <label>
                            
                                Amount 
                        </label>

                        <div class="row">
                            <div class="col-20">
                                <input type="text" class="form-control" placeholder="Enter your Amount"
                                    v-model="form.amount">
                            </div>
                            
                        </div>
                    </div>
                </div> -->


                <!-- <div class="col-20">
                    <div class="form-group">
                        <label>
                            Unit Price
                        </label>

                     <div class="row">
                            <div class="col-20">
                                <input type="text" class="form-control" placeholder="Enter price"
                                    v-model="form.price">
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>

           


            <div class="panel-footer flex-end">
                <div>
                    <button class="btn btn-primary" :disabled="isProcessing" @click="onSave">Save</button>
                    <button class="btn" :disabled="isProcessing" @click="onCancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import Vue from 'Vue'
// import { get, byMethod } from '../../api.js'
import { get , byMethod} from './components/lib/api'
import { Typehead } from './components/typehead'

function initialize(to) {
    let urls = {
        'create': `/api/customers/create`,
        'edit': `/api/customers/${to.params.id}/edit`
    }

    return (urls[to.meta.mode] || urls['create'])
}
export default {
    components: { Typehead },
    data() {
        return {
            form: {},
            errors: {},
            isProcessing: false,
            show: false,
            resource: '/accounts',
            store: '/api/accounts',
            method: 'POST',
            title: 'Create',
            inventoryURL: '/api/search/inventory',
            chartURL: '/api/chart/search',

            
        }
    },
    beforeRouteEnter(to, from, next) {
        get(initialize(to))
            .then((res) => {
                next(vm => vm.setData(res))
            })
    },
    beforeRouteUpdate(to, from, next) {
        this.show = false
        get(initialize(to))
            .then((res) => {
                this.setData(res)
                next()
            })
    },

    methods: {
        setData(res) {
            Vue.set(this.$data, 'form', res.data.form)

            if (this.$route.meta.mode === 'edit') {
                this.store = `/api/accounts/${this.$route.params.id}`
                this.method = 'PUT'
                this.title = 'Edit'
            }

            this.show = true
          
        },

        onChart(e) {
                const chart = e.target.value
                Vue.set(this.$data.form, 'chart', chart)
                Vue.set(this.$data.form, 'chart_id', chart.id)
                Vue.set(this.$data.form, 'chart_title', chart.title)

            },
        
        

        removeItem(index) {
            this.form.items.splice(index, 1)
        },
        onCancel() {
            if (this.$route.meta.mode === 'edit') {
                this.$router.push(`${this.resource}/${this.form.id}`)
            } else {
                this.$router.push(`${this.resource}`)
            }
        },
        onSave() {
            this.errors = {}
            this.isProcessing = true
            byMethod(this.method, this.store, this.form)
                .then((res) => {
                    if (res.data && res.data.saved) {
                        this.success(res)
                    }
                })
                .catch((error) => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors
                    }
                    this.isProcessing = false
                })
        },
        success(res) {
            this.$router.push(`${this.resource}/${res.data.id}`)
        }
    }
}
</script>
<style>
h1{
     color: #6da6bd; 
     
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: animtext 4s steps(80, end); 
   transition: all cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

@keyframes animtext { 
  from {
      width: 0;
     transition: all 2s ease-in-out;
  }
}
</style>
