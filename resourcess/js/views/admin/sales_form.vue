<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <span class="panel-title">{{title}} Sales</span>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-12">
                    <div class="form-group col-8">
                        <label>Customer</label>
                        <typehead :url="customerURL" :initialize="form.customer"
                            @input="onCustomer" />
                        <small class="error-control" v-if="errors.customer_id">
                            {{errors.customer_id[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-8">
                    <div class="col-24">
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" class="form-control" v-model="form.date">
                        <small class="error-control" v-if="errors.date">
                            {{errors.date[0]}}
                        </small>
                    </div>
                </div>
                </div>
                
            </div>
            <div class="row">
                
                
            </div>
            <hr>
            <table class="form-table">
                <thead>
                    <tr>
                        <th>Select product</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in form.items" :key="index">
                        <td class="w-14">
                            <typehead :url="inventoryURL" :initialize="item.inventory" 
                            @input="onInventory (index, $event)"    />
                            <small class="error-control text-red-600" v-if="errors[`item.${index}.inventory_id`]">
                                {{errors[`item.${index}.inventory_id`][0]}}
                            </small>
                            
                        </td>
                        <td class="w-4">
                            <input type="text" class="form-control" v-model="item.unit_price">
                            <small class="error-control" v-if="errors[`items.${index}.unit_price`]">
                                {{errors[`items.${index}.unit_price`][0]}}
                            </small>
                        </td>
                        <td class="w-2">
                            <input type="text" class="form-control" v-model="item.qty">
                            <small class="error-control" v-if="errors[`items.${index}.qty`]">
                                {{errors[`items.${index}.qty`][0]}}
                            </small>
                        </td>
                        <td class="w-4">
                            <span class="form-control">
                                {{Number(item.qty) * Number(item.unit_price) | formatMoney}}
                            </span>
                        </td>
                        <td>
                            <span class="form-remove" @click="removeItem(index)">&times;</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">
                            <button class="btn btn-sm"
                             @click="addNewLine">Add New Line</button>
                        </td>
                        <td class="form-summary">Sub Total</td>
                        <td>{{subTotal | formatMoney}}</td>
                    </tr>
                    <tr>
                        <td colspan="3" class="form-summary">Discount</td>
                        <td>
                            <input type="text" class="form-control" v-model="form.discount">
                            <small class="form-control" v-if="errors.discount">
                                {{errors.discount[0]}}
                            </small>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3" class="form-summary">Grand Total</td>
                        <td>{{total | formatMoney}}</td>
                    </tr>
                </tfoot>
            </table>
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
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'

    function initialize(to) {
        let urls = {
            'create': `/api/invoices/create`,
            'edit': `/api/sales/${to.params.id}/edit`
        }

        return (urls[to.meta.mode] || urls['create'])
    }
    export default {
        // components: { Typehead},
        components: { 
            Typehead,
           
        },
        data () {
            return {
                nazar:this.total,
                form: {},
                errors: {},
                isProcessing: false,
                show: false,
                resource: '/invoices',
                store: '/api/invoices',
                method: 'POST',
                title: 'Create',
                
                customerURL: '/api/search/customers',
                inventoryURL: '/api/get/inventory',
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
                return this.subTotal - Number(this.form.discount)
            }
        },
        methods: {
            setData(res) {
                Vue.set(this.$data, 'form', res.data.form)

                if(this.$route.meta.mode === 'edit') {
                    this.store = `/api/invoices/${this.$route.params.id}`
                    this.method = 'PUT'
                    this.title = 'Edit'
                }

                this.show = true
             
            },
            addNewLine() {
                this.form.items.push({
                    inventory_id: null,
                    item: null,
                    unit_price: 0,
                    qty: 1
                })
            },
            onInventory(index,e) {
                const inventory = e.target.value
                Vue.set(this.form.items[index], 'inventory', inventory)
                Vue.set(this.form.items[index], 'item', inventory.item)
                Vue.set(this.form.items[index], 'inventory_id', inventory.id)
               
            },
            onCustomer(e) {
                const customer = e.target.value
                Vue.set(this.$data.form, 'customer', customer)
                Vue.set(this.$data.form, 'customer_id', customer.id)
                Vue.set(this.$data.form, 'customer_name', customer.text)
            },
            // onInventory(index, e) {
            //     const inventory = e.target.value
            //     Vue.set(this.form.items[index], 'inventory', inventory)
            //     Vue.set(this.form.items[index], 'product_id', inventory.id)

            //     Vue.set(this.form.items[index], 'unit_price', product.unit_price)
            // },
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
                if( this.form.date == null){this.$swal('Please Fill Form')}
                // this.errors = {}
                // this.isProcessing = true
                else{
                byMethod(this.method, this.store, this.form)
                    .then((res) => {
                        if(res.data[0] == 'alert') {
                            this.$swal.fire({
                                icon:'error',
                                title:'Sorry',
                                text: 'Out Of Stock',
                            })
                        }
                        else {
                            this.success(res)
                        }
                    })
                }
                    // .catch((error) => {
                    //     if(error.response.status === 422) {
                    //         this.errors = error.response.data.errors
                    //     }
                    //     this.isProcessing = false
                    // })
            },
            success(res) {
                this.$router.push(`${this.resource}/${res.data.id}`)
            }
        }
    }
</script>
