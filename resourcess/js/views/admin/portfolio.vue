<template>
<div class="main-portfolio">
    <div class="row">
        <div class="col-6" style="overflow-y: scroll; height: 600px;">
            <div class="row">
                <div class="col-6 dp">
                    <img
            src="/images/dp.png"/>
            <p>Marina</p>
                </div>
                <div class="col-6 icon">
                    <p>4.85</p>
                    <img style="height: 30%;"
                         src="/images/star-yello.png"/>
                    <svg xmlns="http://www.w3.org/2000/svg"  height="1em"  viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                </div>
            </div>
            <div class="row ul-li" style="display: flex;flex-direction: column;align-content: center; gap: 25px;">
                <h2>Creator</h2>
                <div class="col account">
                    <ul class="a-f">
                        <li>
                            <p>Follower <img src="/images/icon.png"/></p>
                            <p>11,318</p>
                        </li>

                        <li>
                            <p>Location <img src="/images/icon.png"/></p>
                            <p>dummy location</p>
                        </li>

                        <li>
                            <p>website Click <img src="/images/icon.png"/></p>
                            <p>dummy location</p>
                        </li>
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p>Reach <img src="/images/icon.png"/></p>
                            <p>12,333</p>
                        </li>

                        <li>
                            <p>Engagement Rate<img src="/images/icon.png"/></p>
                            <p>4.3%</p>
                        </li>

                        <li>
                            <p>Avg-Likes<img src="/images/icon.png"/></p>
                            <p>259</p>
                        </li>
                    </ul>

                    <ul class="a-f">
                        <li>
                            <p>Impressions<img src="/images/icon.png"/></p>
                            <p>39,490</p>
                        </li>

                        <li>
                            <p>Avg. Comments <img src="/images/icon.png"/></p>
                            <p>34</p>
                        </li>

                        <li>
                            <p>CPE-000<img src="/images/icon.png"/> </p>
                            <p>$0.53</p>
                        </li>
                    </ul>
                </div>
                <h2>Reviews</h2>
                <div class="reviews">
                    <div class="reviews-1">
                        <img
                         src="/images/dp.png"/>
                        <p>John wick</p>
                    </div>
                    <div class=" reviews-2">
                        <img
                         src="/images/more-icon.png"/>
                        <p>16/feb/2023</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="row Portfolio">
                <h2>Portfolio</h2>
                <div class="col-10 m-cads">
                <div class="card-im">
                    <img
                         src="/images/card-1.png" width="95%"/>
                </div>
                <div class="card-im">
                    <img
                         src="/images/card-2.png" width="95%"/>
                </div>
                <div class="card-im">
                    <img
                         src="/images/card-3.png" width="95%"/>
                </div>
                </div>
               </div>
               <div class="row Portfolio">
                <h2>Posts</h2>
                <div class="col-10 post" style="display: flex; justify-content: space-between;align-items: center;">
                    <div class="card">
                      <img src="/images/post-1.png" style="width:100%">
                      <div class="card-para">
                         <ul>
                            <li>
                                <p>Reach <br> 599</p>
                            </li>
                            <li>
                                <p>Impres <br>728</p>
                            </li>
                            <li>
                                <p>ER <br> 2.12%</p>
                            </li>
                         </ul>
                        </div>
                    </div>
                    <div class="card">
                      <img src="/images/post-2.png" style="width:100%">
                      <div class="card-para">
                         <ul>
                            <li>
                                <p>Reach <br> 599</p>
                            </li>
                            <li>
                                <p>Impres <br>728</p>
                            </li>
                            <li>
                                <p>ER <br> 2.12%</p>
                            </li>
                         </ul>
                        </div>
                    </div>
                    <div class="card">
                      <img src="/images/post-3.png" style="width:100%">
                        <div class="card-para">
                         <ul>
                            <li>
                                <p>Reach <br> 599</p>
                            </li>
                            <li>
                                <p>Impres <br>728</p>
                            </li>
                            <li>
                                <p>ER <br> 2.12%</p>
                            </li>
                         </ul>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
  width: 30%;
}
.card-para ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 5px;
    padding-top: 30px;
}
.card-para ul li{
    list-style: none;

    color: #000;
}

.card-para ul li p{
    font-size: smaller;
}
.Portfolio{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.Portfolio h2 {
    font-size: 30px;
    color: #000;
    font-weight: 400;
    padding-right: 64%;
    padding-top: 30px;
}
.m-cads{
    display: flex;
    justify-content:  space-between;
    align-items: center;
}
.card-im{
    flex: 0 0 calc(33.33% - 20px);
}
.reviews{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.reviews-1{
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 0px 50px;
}
.reviews-1 img {
    width: 25%;
}
.reviews-1 p {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    padding-top: 20px;
}
.reviews-2{
    padding: 0px 50px;
}
.reviews-2 img {
    width: 100%;
}
.reviews-2 p {
    font-size: 20px;
    font-weight: 600;
    color: #000;
    padding-top: 20px;
}
.dp {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0px 50px;
}
.dp img{
    width: 20%;
}
.dp p {
    font-size: 24px;
    font-weight: 400;
    color: #000;
    padding-top: 20px;
}
.icon {
    display: flex;
    justify-content: flex-end;
    gap: 15px;
    align-items: center;
}
.icon p{
    font-size: 20px;
    color: #000;
    padding-top: 18px;
}
.account ul {
    display: flex;
    gap: 43px;
    flex-direction: column;
    justify-content: space-between;
}
.account ul li{
    list-style: none;
}
.a-f p{
    font-size:14px;
    color: #000;
    font-weight: 300;
}
.a-f img {
    padding: 0px 0px 0px 5px;
}
.ul-li h2{
    font-size: 30px;
    font-weight:400;
    color: #000;
    padding:45px 0px 0px  50px;
}
.account {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<script>
import chartAreaDemo from "../../chart/demo/chart-area-demo";
import chartPieDemo from "../../chart/demo/chart-pie-demo";
import Vue from 'vue'

    import { get , byMethod} from '../admin/components/lib/api'

export default {
  data () {
            return {
                users_data:{},
                model: {
                    data: []
                }
            }
        },
  name: "Dashboard",


//   beforeRouteEnter(to, from, next) {
//             get('/api/dashboard', to.query)
//                 .then((res) => {
//                     next(vm => vm.setData(res))

//                 })
//         },
//         beforeRouteUpdate(to, from, next) {
//             get('/api/dashboard', to.query)
//                 .then((res) => {
//                     this.setData(res)
//                     next()

//                 })
//         },
        created(){
            this.users()
            // console.log(this.$data.model)
        },
        methods: {
            detailsPage(item) {
                this.$router.push(`/dashboard/${item.id}`)
            },
            setData(res) {
                Vue.set(this.$data, 'model', res.data.results)
                //this.page = this.model.current_page

                // console.log(res.data)
            },
            users(){
                get('/api/auth_users') .then((res) => {

                    // console.log(res.data.data);
                    Vue.set(this.$data, 'users_data', res.data.data)
                });
            }

        }
};
</script>
