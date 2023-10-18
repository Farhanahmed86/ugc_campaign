<template>
    
    <div class="panel" >
        <div class="🤚 d-flex mx-auto" style="margin-top: 300px;" v-if="loading">
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="👉"></div>
	<div class="🌴"></div>		
	<div class="👍"></div>
</div>
        <div class="panel-heading" v-if="show">
            
            <!-- <span class="panel-title"> Customer</span> -->
            <h1>{{ title }} Chart Of Accounts</h1>
            <div class="panel-body">
        </div>

            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label>Account Nature</label>
                        <typehead :url="chartURL" :initialize="form.chart"
                            @input="onChart" /> 
                       
                    </div>
                </div>
                <div class="col-6" v-if="form.chart_id == 1">
                    <div class="form-group" >
                        <label>
                             Assets Type
                            <small>As Selected</small>
                        </label>
                        <typehead :url="assetsURL" :initialize="form.assets"
                            @input="onAssets" /> 
                    </div>
                </div>

                <div class="col-6" v-if="form.chart_id == 2">
                    <div class="form-group" >
                        <label>
                             Liablities Type
                            <small>As Selected</small>
                        </label>
                        <typehead :url="liablitiesURL" :initialize="form.liablities"
                            @input="onLiablities" /> 
                    </div>
                </div>
               
            </div>


            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label>Account Name</label>
                        <input type="text" class="form-control" placeholder="Enter your Account Name"
                                    v-model="form.account_name">
                       
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label>Account Type</label>
                        <typehead :url="typeURL" :initialize="form.account"
                            @input="onAccount" /> 
                       
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group" >
                        <label>
                             Amount
                         
                        </label>
                        <input type="text" class="form-control" placeholder="Enter your Amount"
                                    v-model="form.amount">
                    </div>
                </div>

              
               
            </div>


        

                
                

              

             

                


                    <div>

<h1 class="text-center">
    Brand <br>
    Revam
    
</h1>
</div>
       

           


            <div class="panel-footer flex-end text-right">
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
import { get , byMethod} from '../admin/components/lib/api'
import { Typehead } from '../admin/components/typehead'

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
            loading:false,
            isProcessing: false,
            show: true,
            resource: '/customers',
            store: '/api/customers',
            method: 'POST',
            title: 'Create',
            inventoryURL: '/api/search/inventory',
            chartURL: '/api/chart/search',
            typeURL: '/api/search/account_type',

            accountURL: '/api/search/account_code',
            assetsURL: '/api/search/assets',
            liablitiesURL: '/api/search/liablities',




            
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
                this.store = `/api/customers/${this.$route.params.id}`
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

            onAccount(e) {
                const account = e.target.value
                Vue.set(this.$data.form, 'account', account)
                Vue.set(this.$data.form, 'account_id', account.id)
                Vue.set(this.$data.form, 'account_title', account.title)
             


            },

            onLiablities(e) {
                const liablities = e.target.value
                Vue.set(this.$data.form, 'liablities', liablities)
                Vue.set(this.$data.form, 'id', liablities.id)
                Vue.set(this.$data.form, 'title', liablities.title)
                Vue.set(this.$data.form, 'key', liablities.key)


            },

            onAssets(e) {
                const assets = e.target.value
                Vue.set(this.$data.form, 'assets', assets)
                Vue.set(this.$data.form, 'id', assets.id)
                Vue.set(this.$data.form, 'title', assets.title)
                Vue.set(this.$data.form, 'key', assets.key)

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
            this.loading = true,
            this.show = false,
            this.errors = {}
            this.isProcessing = true
            byMethod(this.method, this.store, this.form)
                .then((res) => {
                    if (res.data && res.data.saved) {
                        setTimeout(() => {
                    this.loading = false;
                    this.show = true;
                    this.success(res)
                }, 2000); 
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
<style scoped>
.🤚 {
  --skin-color: #E4C560;
  --tap-speed: 0.6s;
  --tap-stagger: 0.1s;
  position: relative;
  width: 80px;
  height: 60px;
  margin-left: 80px;
}

.🤚:before {
  content: '';
  display: block;
  width: 180%;
  height: 75%;
  position: absolute;
  top: 70%;
  right: 20%;
  background-color: black;
  border-radius: 40px 10px;
  filter: blur(10px);
  opacity: 0.3;
}

.🌴 {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--skin-color);
  border-radius: 10px 40px;
}

.👍 {
  position: absolute;
  width: 120%;
  height: 38px;
  background-color: var(--skin-color);
  bottom: -18%;
  right: 1%;
  transform-origin: calc(100% - 20px) 20px;
  transform: rotate(-20deg);
  border-radius: 30px 20px 20px 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
}

.👍:after {
  width: 20%;
  height: 60%;
  content: '';
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: -8%;
  left: 5px;
  border-radius: 60% 10% 10% 30%;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
}

.👉 {
  position: absolute;
  width: 80%;
  height: 35px;
  background-color: var(--skin-color);
  bottom: 32%;
  right: 64%;
  transform-origin: 100% 20px;
  animation-duration: calc(var(--tap-speed) * 2);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform: rotate(10deg);
}

.👉:before {
  content: '';
  position: absolute;
  width: 140%;
  height: 30px;
  background-color: var(--skin-color);
  bottom: 8%;
  right: 65%;
  transform-origin: calc(100% - 20px) 20px;
  transform: rotate(-60deg);
  border-radius: 20px;
}

.👉:nth-child(1) {
  animation-delay: 0;
  filter: brightness(70%);
  animation-name: tap-upper-1;
}

.👉:nth-child(2) {
  animation-delay: var(--tap-stagger);
  filter: brightness(80%);
  animation-name: tap-upper-2;
}

.👉:nth-child(3) {
  animation-delay: calc(var(--tap-stagger) * 2);
  filter: brightness(90%);
  animation-name: tap-upper-3;
}

.👉:nth-child(4) {
  animation-delay: calc(var(--tap-stagger) * 3);
  filter: brightness(100%);
  animation-name: tap-upper-4;
}

@keyframes tap-upper-1 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.4);
  }

  40% {
    transform: rotate(50deg) scale(0.4);
  }
}

@keyframes tap-upper-2 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.6);
  }

  40% {
    transform: rotate(50deg) scale(0.6);
  }
}

@keyframes tap-upper-3 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.8);
  }

  40% {
    transform: rotate(50deg) scale(0.8);
  }
}

@keyframes tap-upper-4 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(1);
  }

  40% {
    transform: rotate(50deg) scale(1);
  }
}

</style>
