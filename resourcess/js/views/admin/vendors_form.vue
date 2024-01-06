<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <!-- <span class="panel-title">{{ title }} Vendor</span> -->
            <h1>{{ title }} Vendor</h1>
        </div>
        <div class="panel-body">
            <div class="row-24">
                <div class="col-20">
                    <div class="form-group">
                        <label> Name</label>
                        <div class="row">
                            <div class="col-20">
                                <input type="text" class="form-control" placeholder="Enter your  Name"
                                    v-model="form.name">
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="col-20">
                    <div class="form-group">
                        <label>
                           Email

                        </label>

                        <div class="row">
                            <div class="col-20">
                                <!-- <typehead :url="inventoryURL" :initialize="form.inventory"
                            @input="onInventory" /> -->
                            <!-- <small class="error-control" v-if="errors[`items.${index}.inventory_id`]">
                                {{errors[`items.${index}.inventory_id`][0]}}
                            </small> -->
                                <input type="text" class="form-control" placeholder="Enter your Email"
                                    v-model="form.email">
                            </div>
                        </div>
                    </div>
                </div>


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

import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'

function initialize(to) {
    let urls = {
        'create': `/api/vendors/create`,
        'edit': `/api/vendors/${to.params.id}/edit`
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
            resource: '/vendors',
            store: '/api/vendors',
            method: 'POST',
            title: 'Create',
            inventoryURL: '/api/search/inventory',
            
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
                this.store = `/api/vendors/${this.$route.params.id}`
                this.method = 'PUT'
                this.title = 'Edit'
            }

            this.show = true
         
        },
        onInventory(e) {
                const inventory = e.target.value
                Vue.set(this.$data.form, 'inventory', inventory)
                Vue.set(this.$data.form, 'inventory_id', inventory.id)
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
            this.$router.push(`${this.resource}`)
        }
    }
}
</script>
