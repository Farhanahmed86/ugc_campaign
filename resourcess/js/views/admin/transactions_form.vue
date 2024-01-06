<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <span class="panel-title">{{title}} Payment</span>
        </div>
        <div class="panel-body">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label>
                            Item

                        </label>
                        <typehead :url="inventoryURL" :initialize="form.inventory" @input="onInventory" />

                        <small class="form-control" v-if="errors.item_code">
                            {{errors[`item_code.${index}.inventory_id`][0]}}
                        </small>

                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>
                            Vendor

                        </label>
                        <input type="text" class="form-control" v-model="form.vendor">
                        <small class="error-control" v-if="errors.vendor_id">
                            {{errors.vendor[0]}}
                        </small>
                    </div>
                </div>
                <!-- <div class="col-6">
                    <div class="form-group">
                        <label>
                            Reference
                            <small>Optional</small>
                        </label>
                        <input type="text" class="form-control" v-model="form.reference">
                        <small class="error-control" v-if="errors.reference">
                            {{errors.reference[0]}}
                        </small>
                    </div>
                </div> -->
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Product</label>
                        <input type="text" class="form-control" v-model="form.item">
                       
                    </div>
                </div>
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
                        
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>Total Purchase</label>
                        <div>

                            <input type="text" class="form-control" v-model="form.total_payment">
                            
                        </div>
                        <small class="error-control" v-if="errors.total_payment">
                            {{errors.total_payment[0]}}
                        </small>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Total Paid</label>
                        <div>

                            <input type="text" class="form-control" v-model="form.paid">
                            <!-- {{total | formatMoney}} -->
                        </div>
                        
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>Payment</label>
                        <input type="text" class="form-control" v-model="form.payment">
                        <small class="error-control" v-if="errors.payment">
                            {{errors.payment[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>Due Payment</label>
                        <!-- {{totalAmount | formatMoney}} -->
                        <input type="text" class="form-control" v-model="form.due_payment">
                        <small class="error-control" v-if="errors.due_payment">
                          
                        </small>
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label>Total Payment</label>
                        <div>

                            <input type="text" class="form-control" v-model="form.total_payment">
                            <!-- {{total | formatMoney}} -->
                        </div>
                        <small class="error-control" v-if="errors.total_payment">
                            {{errors.total_payment[0]}}
                        </small>
                    </div>
                </div>
            </div>
            <hr>
            <!-- <table class="form-table">
                <thead>
                    <tr>
                        <th>Item Description</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in form.items">
                        <td class="w-14">
                            <typehead :url="productURL" :initialize="item.product"
                                @input="onProduct(index, $event)" />
                            <small class="error-control" v-if="errors[`items.${index}.product_id`]">
                                {{errors[`items.${index}.product_id`][0]}}
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
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label>Terms and Conditions</label>
                        <textarea class="form-control" v-model="form.terms_and_conditions"></textarea>
                        <small class="error-control" v-if="errors.terms_and_conditions">
                            {{errors.terms_and_conditions[0]}}
                        </small>
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
</template>
<script type="text/javascript">
import Vue from 'Vue'
import { get , byMethod} from '../admin/components/lib/api'
// import { Typehead } from '../../components/typehead'
import Typehead from '../admin/components/typehead/Typehead.vue'

function initialize(to) {
    let urls = {
        'create': `/api/transactions/create`,
        'edit': `/api/transactions/${to.params.id}/edit`
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
            resource: '/transactions',
            store: '/api/transactions',
            method: 'POST',
            title: 'Create',
            inventoryURL: '/api/search/inventory',
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
        // subTotal: function () {
        //     var due_payment = 0;
        //     this.due_payment.forEach(element => {
        //         total += (element.transaction.payment);
        //     });
        //     console.log(due_payment);
        //     return due_payment;
            
        // },
        total() {
            return (this.form.total_payment)  - (this.form.payment)
        },


        // total() {
        //     return Number(this.form.due_payment) ((total, p) => total + p.amount, 0)

        // },
        totalAmount() {
            return this.due_payment.reduce((total, due_payment) => total + due_payment.amount, 0)
        },
        //     totalAmount: function() {
        //     var sum = 0;
        //     for (var i = 0; i < this.form.due_payment.length; i++) {
        //     sum += this.form.due_payment[i].amount;
        //     }
        //     return sum;
        // },

    },

    methods: {
        // total() {
        //     return Number(this.form.total_payment) - Number(this.form.payment)
        // },
        setData(res) {
            Vue.set(this.$data, 'form', res.data.form);
            Vue.set(this.$data.form, 'calculation', this.total)

            // console.log(res.data.form);

            if (this.$route.meta.mode === 'edit') {
                this.store = `/api/transactions/${this.$route.params.id}`
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
        onInventory(e) {
            const inventory = e.target.value
            // console.log(inventory);

            Vue.set(this.$data.form, 'inventory', inventory)
            Vue.set(this.$data.form, 'inventory_id', inventory.id)
            Vue.set(this.$data.form, 'vendor', inventory.vendor.name)
            Vue.set(this.$data.form, 'vendor_id', inventory.vendor.id)
            Vue.set(this.$data.form, 'unit_price', inventory.unit_price)
            Vue.set(this.$data.form, 'quantity', inventory.quantity)
            Vue.set(this.$data.form, 'total_payment', inventory.total_payment)
            Vue.set(this.$data.form, 'payment', inventory.transaction.payment)
            Vue.set(this.$data.form, 'item_code', inventory.item_code)
            Vue.set(this.$data.form, 'item', inventory.item)
            Vue.set(this.$data.form, 'paid', inventory.paid)
            Vue.set(this.$data.form, 'due_payment',  inventory.total_payment - inventory.paid )

            console.log(inventory.total_payment - inventory.paid );
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
