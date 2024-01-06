<template>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <div class="row">
            <div class="col-6">
                <h2 style="color: black;">Les services YALLAD proposées:</h2>
                <span style="color: black;">Sélectionnez l'une des options ci-dessous:</span    >
<br>
<br>
                <div class="col-12 mt-6">
                <div class="col-xl-10 col-md-12 mb-4">
        <div class="card border-left-primary shadow h-60 ">
          <div class="card-body" style="cursor: pointer;">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="
                    text-s
                    font-weight-bold

                    mb-1

                  "
                  style="color: black;"
                >
                Une campagne d'influenceurs
                </div>
                <div class="h5 text-s mb-0 text-gray-800">
                 <span style="font-size: small;">Collaborez avec des influenceurs pour publier du
                contenu auprès de leur audience</span>
                </div>
                <br>
                <div class="col text-center pb-0" style="bottom: 0%;">
                  <button class="button2" @click="ugc('Influencer Campaign')" style="font-size: medium;">
                    Compléter le brief
                      </button>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg> -->

                </div>

                <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{this.$data.model[0]}}
                </div> -->
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-12 mt-6">
                <div class="col-xl-10 col-md-12 mb-4">
        <div class="card border-left-primary shadow h-100 ">
          <div class="card-body" style="cursor: pointer;">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="
                    text-s
                    font-weight-bold

                    mb-1

                  "
                  style="color: black;"
                >
                Une campagne UGC
                </div>
                <div class="h5 text-xs mb-0 text-gray-800">
                 <span style="font-size: small;">Co-créez des contenus publicitaires UGC
                    authentiques pour vos réseaux sociaux.</span>
                </div>
                <br>
                <div class="col text-center pb-0" style="bottom: 0%;">
                  <button class="button2" @click="ugc('UGC Campaign')" style="font-size: medium;">
                    Obtenir des videos virales
                      </button>

                </div>

                <!-- <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{this.$data.model[0]}}
                </div> -->
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-12 mt-6">
                <div class="col-xl-10 col-md-12 mb-4">
        <div class="card border-left-primary shadow h-100 ">
          <div class="card-body" style="cursor: pointer;">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="
                    text-s
                    font-weight-bold

                    mb-1

                  "
                  style="color: black;"
                >
                Social Ads
                </div>
                <div class="h5 text-xs mb-0 text-gray-800">
                 <span style="font-size: small;">Sponsorisez ces contenus sur Facebook,
                    Instagram, TikTok et Youtube</span>
                </div>
                <br>
                <div class="col text-center pb-0" style="bottom: 0%;">
                  <button class="button2" @click="redirect_page" style="font-size: medium;">
                    Je démarre
                      </button>
                </div>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
            </div>

            <div class="col-6 mt-12" style="padding-top: 100px;; padding-right: 30px;">
                <img src="images/video.jpg" style="width: 100%;">
            </div>

        </div>
    </div>
    <!-- <div v-if="users_data.guards == 'developers'">
        <h1>hello</h1>
    </div>
  <div v-else>

    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a
      >
    </div>

    <div class="row">

      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="
                    text-xs
                    font-weight-bold
                    text-primary text-uppercase
                    mb-1
                  "
                >
                  Earnings (Monthly)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{this.$data.model[0]}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="
                    text-xs
                    font-weight-bold
                    text-success text-uppercase
                    mb-1
                  "
                >
                  Transactions (Monthly)
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{this.$data.model[1]}}
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-info shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-info text-uppercase mb-1"
                >
                  Vendors
                </div>
                <div class="row no-gutters align-items-center">
                  <div class="col-auto">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {{this.$data.model[4]}}
                    </div>
                  </div>
                  <div class="col">
                    <div class="progress progress-sm mr-2">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="
                    text-xs
                    font-weight-bold
                    text-warning text-uppercase
                    mb-1
                  "
                >
                 Customers
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{{this.$data.model[3]}}</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div class="row">

      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">

          <div
            class="
              card-header
              py-3
              d-flex
              flex-row
              align-items-center
              justify-content-between
            "
          >
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <h6 class="m-0 font-weight-bold text-primary">Total Profit : {{this.$data.model[7]}}</h6>
            <div class="dropdown no-arrow">
              <a

                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="
                  dropdown-menu dropdown-menu-right
                  shadow
                  animated--fade-in
                "
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="chart-area">
              <canvas id="myAreaChart"></canvas>
            </div>
          </div>
        </div>
      </div>


      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">

          <div
            class="
              card-header
              py-3
              d-flex
              flex-row
              align-items-center
              justify-content-between
            "
          >
            <h6 class="m-0 font-weight-bold text-primary">Transactions Overview</h6>
            <div class="dropdown no-arrow">
              <a
                class="dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div
                class="
                  dropdown-menu dropdown-menu-right
                  shadow
                  animated--fade-in
                "
                aria-labelledby="dropdownMenuLink"
              >
                <div class="dropdown-header">Dropdown Header:</div>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div class="chart-pie pt-4 pb-2">
              <canvas id="myPieChart"></canvas>
            </div>
            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Credit
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> Balance
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Paid
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row">

      <div class="col-lg-6 mb-4">

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Overview</h6>
          </div>
          <div class="card-body">
            <h4 class="small font-weight-bold">
              Vendor <span class="float-right">20%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                style="width: 20%"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Sales Tracking <span class="float-right">40%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                style="width: 40%"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Customers  <span class="float-right">60%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 60%"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Payout Details <span class="float-right">80%</span>
            </h4>
            <div class="progress mb-4">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style="width: 80%"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 class="small font-weight-bold">
              Purchases <span class="float-right">Complete!</span>
            </h4>
            <div class="progress">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-lg-6 mb-4">
            <div class="card bg-primary text-white shadow">
              <div class="card-body">
                Customers
                <div class="text-white-50 small">#4e73df</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card bg-success text-white shadow">
              <div class="card-body">
                Inventories
                <div class="text-white-50 small">#1cc88a</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card bg-info text-white shadow">
              <div class="card-body">
                Transactions
                <div class="text-white-50 small">#36b9cc</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card bg-warning text-white shadow">
              <div class="card-body">
                Sales
                <div class="text-white-50 small">#f6c23e</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card bg-danger text-white shadow">
              <div class="card-body">
                Vendors
                <div class="text-white-50 small">#e74a3b</div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-4">
            <div class="card bg-secondary text-white shadow">
              <div class="card-body">
                Items
                <div class="text-white-50 small">#858796</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="col-lg-6 mb-4">

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
          </div>
          <div class="card-body">
            <div class="text-center">
              <img
                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style="width: 15rem"
                src="/images/software.png"
                alt="..."
              />
            </div>
            <p>
              Take control of your finances with our intuitive and user-friendly accounting software.
              Make informed decisions with real-time financial data.
              Stay organized and track your expenses effortlessly.
              Save time and reduce manual errors by automating your accounting tasks.
            </p>

          </div>
        </div>


        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              Developer
            </h6>
          </div>
          <div class="card-body">
           <div class="row ">
          <div class="col-4">
              <img
                class="img-fluid px-3 px-sm-4 mt-3 mb-4"

                style="width: 10rem"
                src="/images/2.jpg"
                alt="..."
              />
            </div>
            <div class="mt-6 col-8">
            <p style="margin-top: 40px;">
              Drive innovation and efficiency by leveraging the diverse skill set of a full stack developer handle databases, APIs, and user interfaces.
            </p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import chartAreaDemo from "../../chart/demo/chart-area-demo";
import chartPieDemo from "../../chart/demo/chart-pie-demo";
import Vue from 'vue'

    import { get , byMethod} from '../admin/components/lib/api'

export default {
  data () {
            return {
              form:{},
                users_data:{},
                model: {
                    data: []
                },
                method: 'POST',
            }
        },
  name: "Dashboard",
  mounted() {
    chartAreaDemo();
    chartPieDemo();
  },

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

          redirect_page(){
        window.open("https://calendly.com/demo-yallad", "_blank");
    },

          ugc(e){
        this.form.campaign = e;
        // this.$router.push('/NewCampaign')

        byMethod(this.method, 'api/campaigns' , this.form)
                    .then((res) => {
                        console.log(res.data.id)
                      
                        if(res.data && res.data.saved) {
                          this.$router.push(`/NewCampaign/${res.data.id}`)
                          
                          
                        }
                    })
                    .catch((error) => {
                        if(error.response.status === 422) {
                            this.errors = error.response.data.errors
                        }
                        this.isProcessing = false
                    })
                
    },
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

<style scoped>
.button2 {
display: inline-block;
transition: all 0.2s ease-in;
position: relative;
overflow: hidden;
z-index: 1;
color: #ffffff;
font-size: 18px;
font-weight: 200;
padding: 5px 30px ;
border-radius: 0.5em;
background:#2A2C76;
border: 1px solid #e8e8e8;
box-shadow: 6px 6px 12px #c5c5c5,
           -6px -6px 12px #ffffff;
           width: 80%;
}
.button2:active {
color: #666;
box-shadow: inset 4px 4px 12px #c5c5c5,
           inset -4px -4px 12px #ffffff;
}
.button2:before {
content: "";
position: absolute;
left: 50%;
transform: translateX(-50%) scaleY(1) scaleX(1.25);
top: 100%;
width: 140%;
height: 180%;
background-color: rgba(0, 0, 0, 0.05);
border-radius: 50%;
display: block;
transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
z-index: -1;
}
.button2:after {
content: "";
position: absolute;
left: 55%;
transform: translateX(-50%) scaleY(1) scaleX(1.45);
top: 180%;
width: 160%;
height: 190%;
background-color:#ECEC4F;
border-radius: 50%;
display: block;
transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
z-index: -1;
}
.button2:hover {
color: #000;
border: 1px solid #ECEC4F;
}
.button2:hover:before {
top: -35%;
background-color: #ECEC4F;
transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
.button2:hover:after {
top: -45%;
background-color: #ECEC4F;
transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}</style>
