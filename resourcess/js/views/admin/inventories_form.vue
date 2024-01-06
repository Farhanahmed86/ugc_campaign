<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <span class="panel-title">{{title}} Inventory</span>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label>Select Vendor</label>
                        <typehead :url="vendorURL" :initialize="form.vendor"
                            @input="onvendor" />
                        <small class="error-control" v-if="errors.vendor_id">
                            {{errors.vendor_id[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>
                            Item
                           
                        </label>
                        <input type="text" class="form-control" v-model="form.item">
                        <small class="error-control" v-if="errors.item">
                            {{errors.item[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>
                            Invoice Code
                           
                        </label>
                        <input type="text" class="form-control" v-model="form.item_code">
                        <small class="error-control" v-if="errors.item_code">
                            {{errors.item_code[0]}}
                        </small>
                    </div>
                </div>
             
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Unit Price</label>
                        <input type="text" class="form-control" v-model="form.unit_price">
                        <small class="error-control" v-if="errors.payment">
                            {{errors.payment[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>Quantity</label>
                        <input type="text" class="form-control" v-model="form.quantity">
                        <small class="error-control" v-if="errors.due_payment">
                            {{errors.due_payment[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>Total Payment</label>
                        <input type="text" class="form-control" v-model="total">
                        
                    </div>
                </div>
            </div>
            
            <hr>
            
        </div>
        <div class="panel-footer flex-end">
            <div>
                <button class="btn btn-primary" :disabled="isProcessing" @click="onSave">Save</button>
                <button class="btn" :disabled="isProcessing" @click="onCancel">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'Vue'
    import { get , byMethod} from '../admin/components/lib/api'
import { Typehead } from '../admin/components/typehead'

    function initialize(to) {
        let urls = {
            'create': `/api/inventory/create`,
            'edit': `/api/inventory/${to.params.id}/edit`
        }

        return (urls[to.meta.mode] || urls['create'])
    }
    export default {
        components: { Typehead},
        data () {
            return {
                form: {},
                errors: {},
                isProcessing: false,
                show: false,
                resource: '/inventory',
                store: '/api/inventory',
                method: 'POST',
                title: 'Create',
               
                vendorURL: '/api/search/vendors'
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
        computed: {
            subTotal() {
                return this.form.items.reduce((carry, item) => {
                    return carry + (Number(item.unit_price) * Number(item.qty))
                }, 0)
            },
            total() {
                return Number(this.form.unit_price)* Number(this.form.quantity)
            }
        },
        
        methods: {
            setData(res) {
                Vue.set(this.$data, 'form', res.data.form)

                if(this.$route.meta.mode === 'edit') {
                    this.store = `/api/inventory/${this.$route.params.id}`
                    this.method = 'PUT'
                    this.title = 'Edit'
                }

                this.show = true
             
            },
            addNewLine() {
                this.form.items.push({
                    product_id: null,
                    product: null,
                    unit_price: 0,
                    qty: 1
                })
            },
            onvendor(e) {
                const vendor = e.target.value
                Vue.set(this.$data.form, 'vendor', vendor)
                Vue.set(this.$data.form, 'vendor_id', vendor.id)
                
            },
           
            removeItem(index) {
                this.form.items.splice(index, 1)
            },
            onCancel() {
                if(this.$route.meta.mode === 'edit') {
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
                        if(res.data && res.data.saved) {
                            this.success(res)
                        }
                    })
                    .catch((error) => {
                        if(error.response.status === 422) {
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
