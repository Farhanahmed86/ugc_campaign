<template>
    <div class="panel">
       

            <!-- <div class="loader d-flex mx-auto" v-if="is_loading " style="margin-top: 300px;">
        <span>
        </span>
    </div> -->
    <!-- <div v-if="is_loading = true "> -->
    <!-- <div class="pl d-flex mx-auto " style="margin-top: 200px; margin-bottom: 200px;" v-if="is_loading " >
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__dot"></div>
	<div class="pl__text">Loading…</div>
</div> -->
<!-- <div class="loader d-flex mx-auto " style=" margin-bottom: 200px ; height: 500px; width: 500px;" v-if="is_loading">
  <span></span>
  <span></span>
  <span></span>
</div> -->
<div class="cube-loader d-flex mx-auto" style="margin-top: 300px;" v-if="is_loading">
  <div class="cube-top"></div>
  <div class="cube-wrapper">
    <span style="--i:0" class="cube-span"></span>
    <span style="--i:1" class="cube-span"></span>
    <span style="--i:2" class="cube-span"></span>
    <span style="--i:3" class="cube-span"></span>
  </div>
</div>
<!-- </div> -->
<div v-if="show">
        <div class="panel-heading">
            <h1 class="panel-title">Chart Of Accounts</h1>
            <div class="text-right">
                <router-link to="/customers/create" class="btn btn-primary">
                    Add Chart of Account
                </router-link>
            </div>
            <br>
        </div>
        <div class="panel-body">
            <table class="table table-link">
               
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Accounts Name</th>
                        <th>Account</th>
                        <th>Account Type</th>

                        <th>Id</th>
                        <th>Amount</th>
                        <th>Balance</th>


                        
                       
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item ,index) in model.data" :key="index" >
                        <td class="w-1">{{index+1}}</td>
                        <td class="w-3">{{item.account_name}}</td>
                        <td class="w-3">{{item.chart}}</td>

                        <td class="w-3">{{item.chart_type}}</td>
                        <td class="w-3">{{item.value}}</td>
                        <td class="w-3">{{item.amounts}}</td>
                        <td class="w-3">{{item.balance}}</td>

                       
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="panel-footer flex-between">
            <div>
                <small>Showing {{model.from}} - {{model.to}} of {{model.total}}</small>
            </div>
            <div>
                <button class="btn btn-sm" :disabled="!model.prev_page_url" @click="prevPage">
                    Prev
                </button>
                <button class="btn btn-sm" :disabled="!model.next_page_url" @click="nextPage">
                    Next
                </button>
            </div>
        
</div>
</div>
    </div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    // import { get } from '../../lib/api'
    import { get , byMethod} from '../admin/components/lib/api'
    export default {
        data () {
            return {
                is_loading:true,
                show:false,
                model: {
                    data: []
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            get('/api/customers', to.query)
            .then((res) => {
                next(vm => vm.setData(res))
      
                })
              
        },
        beforeRouteUpdate(to, from, next) {
            get('/api/customers', to.query)
                .then((res) => {
                    this.setData(res)
                    next()
                })
        },
        methods: {
            detailsPage(item) {
                this.$router.push(`/customers/${item.id}`)
            },
            setData(res) {
                this.is_loading = true;
              
                Vue.set(this.$data, 'model', res.data.results)
                this.page = this.model.current_page
                setTimeout(() => {
                    this.is_loading = false;
                    this.show = true;
                }, 1200); 
                
                
            },
            nextPage() {
                if(this.model.next_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) + 1) : 2

                    this.$router.push({
                        path: '/customers',
                        query: query
                    })
                }
            },
            prevPage () {
                if(this.model.prev_page_url) {
                    const query = Object.assign({}, this.$route.query)
                    query.page = query.page ? (Number(query.page) - 1) : 1

                    this.$router.push({
                        path: '/customers',
                        query: query
                    })
                }
            }
        }
    }
</script>
<style scoped>
.cube-loader {
  position: relative;
/* u can choose any size */
  width: 75px;
  height: 75px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0% {
    transform: rotateX(-30deg) rotateY(0);
  }

  100% {
    transform: rotateX(-30deg) rotateY(360deg);
  }
}

.cube-loader .cube-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0; */
  transform-style: preserve-3d;
}

.cube-loader .cube-wrapper .cube-span {
  position: absolute;
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0; */
                                     /* width 75px / 2 = 37.5px */
  transform: rotateY(calc(90deg * var(--i))) translateZ(37.5px);
  background: linear-gradient(
    to bottom,
    hsl(330, 3.13%, 25.1%) 0%,
    hsl(177.27, 21.71%, 32.06%) 5.5%,
    hsl(176.67, 34.1%, 36.88%) 12.1%,
    hsl(176.61, 42.28%, 40.7%) 19.6%,
    hsl(176.63, 48.32%, 43.88%) 27.9%,
    hsl(176.66, 53.07%, 46.58%) 36.6%,
    hsl(176.7, 56.94%, 48.91%) 45.6%,
    hsl(176.74, 62.39%, 50.91%) 54.6%,
    hsl(176.77, 69.86%, 52.62%) 63.4%,
    hsl(176.8, 76.78%, 54.08%) 71.7%,
    hsl(176.83, 83.02%, 55.29%) 79.4%,
    hsl(176.85, 88.44%, 56.28%) 86.2%,
    hsl(176.86, 92.9%, 57.04%) 91.9%,
    hsl(176.88, 96.24%, 57.59%) 96.3%,
    hsl(176.88, 98.34%, 57.93%) 99%,
    hsl(176.89, 99.07%, 58.04%) 100%
  );
}

.cube-top {
  position: absolute;
  width: 75px;
  height: 75px;
  background: hsl(330, 3.13%, 25.1%) 0%;
                      /* width 75px / 2 = 37.5px */
  transform: rotateX(90deg) translateZ(37.5px);
  transform-style: preserve-3d;
}

.cube-top::before {
  content: '';
  position: absolute;
/* u can choose any size */
  width: 75px;
  height: 75px;
  background: hsl(176.61, 42.28%, 40.7%) 19.6%;
  transform: translateZ(-90px);
  filter: blur(10px);
  box-shadow: 0 0 10px #323232,
              0 0 20px hsl(176.61, 42.28%, 40.7%) 19.6%,
              0 0 30px #323232,
              0 0 40px hsl(176.61, 42.28%, 40.7%) 19.6%;
}

</style>