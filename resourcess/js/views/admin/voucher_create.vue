<template>
    <div class="panel" v-if="show">
        <div class="panel-heading">
            <h1 class="panel-title">{{title}} Voucher</h1>
        </div>
        <div class="panel-body">
            <button class="btn btn-primary text-right" style="float:right" @click="importshow">Import Excel</button>
            <br>
            <br>
            <div v-if="imports" >
                <input class="file-input form-control" type="file" ref="file" name="file">
        <br>
        <button class="btn btn-primary text-right" @click="submitForm">Upload</button>
            </div>

            
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label>Voucher Type</label>
                        <typehead :url="vouchertyeURL" :initialize="form.vouchertype"
                            @input="onVouchers" />
                        <small class="error-control" v-if="errors.vouchertype_id">
                            {{errors.vouchertype_id[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-4" >

                    <div class="form-group"  v-if="form.vouchertype_id == 1">
                        <label>
                             Voucher Number
                            <small>Type</small>
                        </label>
                        <input type="text" class="form-control" v-model="form.number">
                      
                    </div>

                    <div class="form-group" v-else>
                        <label>
                             Voucher Number
                            <small>Auto Generated</small>
                        </label>
                        <span class="form-control">{{form.number}}</span>
                    </div>
                   
                </div>
                
                <div class="col-4">
                    <div class="form-group">
                        <label>
                            Name of Voucher
                         
                        </label>
                        <input type="text" class="form-control" v-model="form.reference">
                        <small class="error-control" v-if="errors.reference">
                            {{errors.reference[0]}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label>Voucher Date</label>
                        <input type="date" class="form-control" v-model="form.date">
                        <small class="error-control" v-if="errors.date">
                            {{errors.date[0]}}
                        </small>
                    </div>
                </div>

                <div class="col-4">
                    <div class="form-group">
                        <label>
                            Cheque No
                           
                        </label>
                        <input type="text" class="form-control" v-model="form.cheque">
                        <small class="error-control" v-if="errors.reference">
                            {{errors.reference[0]}}
                        </small>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label>Credit Accounts</label>
                        <typehead :url="accountURL" :initialize="form.account"
                            @input="onacce($event)" />
<!-- 
                            <typehead :url="accountsURL" :initialize="form.account"
                                @input="onAccount(index,$event)" /> -->
                        <small class="error-control" v-if="errors.accounts_id">
                            {{errors.accounts_id[0]}}
                        </small>
                    </div>
                </div>
                <!-- <div class="col-6">
                    <div class="form-group">
                        <label>Due Date</label>
                        <input type="date" class="form-control" v-model="form.due_date">
                        <small class="error-control" v-if="errors.due_date">
                            {{errors.due_date[0]}}
                        </small>
                    </div>
                </div> -->
            </div>
            <hr>
            <table class="form-table">
                <thead>
                    <tr>
                        <th>Ref No</th>
                        <th>Ref Code</th>
                        <th>Account Code</th>
                        <th>Debit</th>
                        <th>Credit</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in form.items">
                       
                        <td class="w-4">
                            <input type="text" class="form-control" v-model="item.ref_no">
                            
                        </td>
                        <td class="w-4">
                            <input type="text" class="form-control" v-model="item.ref_code">
                            
                        </td>
                        <td class="w-24 " >
                            <typehead :url="accountURL" :initialize="item.accounts"
                            @input="onAccount(index,$event)" />
                            <!-- <typehead :url="accountsURL" :initialize="item.accounts"
                                @input="onAccounts(index,$event)" /> -->
                            <small class="error-control" v-if="errors[`items.${index}.accounts_id`]">
                                {{errors[`items.${index}.accounts_id`][0]}}
                            </small>
                        </td>
                        <td class="w-4">
                            <input type="text" class="form-control" v-model="item.debit">
                            
                        </td>
                        <td class="w-4">
                            <input type="text" class="form-control" v-model="item.credit">
                            
                        </td>
                        <!-- <td class="w-4">
                            <input type="text" class="form-control" v-model="item.unit_price">
                            <small class="error-control" v-if="errors[`items.${index}.unit_price`]">
                                {{errors[`items.${index}.unit_price`][0]}}
                            </small>
                        </td> -->
                        <!-- <td class="w-1">
                            <input type="text" class="form-control" v-model="item.qty">
                            <small class="error-control" v-if="errors[`items.${index}.qty`]">
                                {{errors[`items.${index}.qty`][0]}}
                            </small>
                        </td> -->
                        <!-- <td class="w-4">
                            <span class="form-control">
                                {{Number(item.qty) * Number(item.unit_price) | formatMoney}}
                            </span>
                        </td> -->
                        <td>
                            <span class="form-remove" style="color:red; font-size:x-large ; cursor: pointer !important;" @click="removeItem(index)">&times;</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">
                            <button class="btn btn-sm" style="background-color: lightskyblue;  color:black; "
                             @click="addNewLine">Add New Line</button>
                        </td>
                        <!-- <td class="form-summary">Sub Total</td>
                        <td>{{subTotal | formatMoney}}</td> -->
                    </tr>
                    <!-- <tr>
                        <td colspan="3" class="form-summary">Discount</td>
                        <td>
                            <input type="text" class="form-control" v-model="form.discount">
                            <small class="form-control" v-if="errors.discount">
                                {{errors.discount[0]}}
                            </small>
                        </td>
                    </tr> -->
                    <tr>
                        <td colspan="3" class="form-summary text-right" style="margin-left: 80px;">Total</td>
                       
                        <td class="text-right">{{subTotal | formatMoney}}</td>
                        <td colspan="3" class="form-summary">Total</td>
                       
                        <td>{{total | formatMoney}}</td>
                       
                    </tr>
                    <h1 class="error-control" style="color: brown;" v-if="errors ">Not Balance</h1>
                </tfoot>
            </table>
            <hr>
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="form.terms_and_conditions"></textarea>
                        <small class="error-control" v-if="errors.terms_and_conditions">
                            {{errors.terms_and_conditions[0]}}
                        </small>
                    </div>
                </div>
            </div>
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
    // import {get, byMethod } from '../../lib/api'
    // import {Typehead } from '../../components/typehead'
    import { get , byMethod} from '../admin/components/lib/api'
    import VueSweetalert2 from 'vue-sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';


import Typehead from '../admin/components/typehead/Typehead.vue'

    function initialize(to) {
        let urls = {
            'create': `/api/vouchers/create`,
            'edit': `/api/vouchers/${to.params.id}/edit`
        }

        return (urls[to.meta.mode] || urls['create'])
    }
    export default {
        components: { Typehead ,  VueSweetalert2},
        data () {
            return {
                imports:false,
                form: {},
                errors: {},
                isProcessing: false,
                show: false,
                errors: false,

                resource: '/vouchers',
                store: '/api/vouchers',
                method: 'POST',
                title: 'Create',
                productURL: '/api/search/products',
                accountURL: '/api/search/accounts',

                customerURL: '/api/search/customers',
                vouchertyeURL: '/api/search/vouchertype',
                chart_of_accountURL:'/api/search/account',
                accountsURL:'/api/search/account_code',


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
                    return carry + (Number(item.debit? item.debit : 0))
                }, 0)
            },
            total() {
                return this.form.items.reduce((carry, item) => {
                    return carry + (Number(item.credit ? item.credit :0))
                }, 0)
            }
        },
        methods: {
            importshow(){
                console.log('abcd')
                this.imports =true
              
            },
            submitForm() {
                this.formData = new FormData();
                console.log(this.$refs.file.files[0],'this.$refs.file.files[0]');
                // this.formData.append('name', this.fileName);
                this.formData.append('file', this.$refs.file.files[0]);

                axios.post('api/import', this.formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    if (res.data.saved === true) {
                        console.log(res);
                        Vue.set(this.$data, "msg", res.data.msg);
                    }
                    // handle success response
                }).catch(error => {
                    // handle failed response
                });
            },
            setData(res) {
                Vue.set(this.$data, 'form', res.data.form)

                if(this.$route.meta.mode === 'edit') {
                    this.store = `/api/vouchers/${this.$route.params.id}`
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
            onacce(e) {
                // const chart_of_account = e.target.value
                // Vue.set(this.$data.form, 'chart_of_account', chart_of_account)
                // Vue.set(this.$data.form, 'chart_of_account_id', chart_of_account.id)
                // Vue.set(this.$data.form, 'accounts_name', accounts.name)
                const account = e.target.value
                Vue.set(this.form, 'account', account)
                Vue.set(this.form, 'account_id', account.id)
            },
          
          

            onVouchers(e) {
                const vouchertype = e.target.value
                Vue.set(this.$data.form, 'vouchertype', vouchertype)
                Vue.set(this.$data.form, 'vouchertype_id', vouchertype.id)
                Vue.set(this.$data.form, 'vouchertyper_name', vouchertype.name)

            },
            onCustomer(e) {
                const customer = e.target.value
                Vue.set(this.$data.form, 'customer', customer)
                Vue.set(this.$data.form, 'customer_id', customer.id)
                Vue.set(this.$data.form, 'customer_name', customer.name)

            },
            onAccounts( index,e) {
                const accounts = e.target.value
                Vue.set(this.form.items[index], 'accounts', accounts)
                Vue.set(this.form.items[index], 'accounts_id', accounts.id)
                Vue.set(this.form.items[index], 'accounts_title', accounts.title)

                

                // Vue.set(this.form.items[index], 'unit_price', product.unit_price)
            },

            onAccount( index,e) {
                const accounts = e.target.value
                Vue.set(this.form.items[index], 'accounts', accounts)
                Vue.set(this.form.items[index], 'accounts_id', accounts.id)
                Vue.set(this.form.items[index], 'accounts_title', accounts.account_name)
                Vue.set(this.form.items[index], 'accounts_type', accounts.chart_type)

                Vue.set(this.form.items[index], 'accounts_chart', accounts.chart)


                

                // Vue.set(this.form.items[index], 'unit_price', product.unit_price)
            },
            onProduct( index,e) {
                const product = e.target.value
                Vue.set(this.form.items[index], 'product', product)
                Vue.set(this.form.items[index], 'product_id', product.id)

                Vue.set(this.form.items[index], 'unit_price', product.unit_price)
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
                // console.log(this.total);
                if(this.total == this.subTotal){
                Vue.set(this.form, 'total', this.total)
                Vue.set(this.form, 'sub_total', this.subTotal)

                this.errors = {}
                this.isProcessing = true
                byMethod(this.method, this.store, this.form)
                    .then((res) => {
                      
                        if(res.data[0] == 'alert') {
                            this.$swal.fire({
                                icon:'error',
                                title:'Already Paid',
                                text: 'May be your voucher amount bigger than balance amount',
                            })
                        }
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
                }
                else{
                    this.errors == true;
                    this.errors = 'Not Balance'
                }
            },
            success(res) {
                this.$router.push(`${this.resource}`)
            }
        }
    }
</script>
