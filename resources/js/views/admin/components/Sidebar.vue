<template>
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <router-link
        class="sidebar-brand d-flex align-items-center justify-content-center" style="background-color: white;"
        to="/"
      >
        <div class="sidebar-brand-icon rotate-n-15" >
          <!-- <i class="fas fa-laugh-wink"></i> -->
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
        </div>
        <div class="sidebar-brand-text mx-3" style="color: black;">YALLAD</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">
        <router-link class="nav-link" to="/dashboard">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <span class="text-center" style=" font-weight: bold;">Dashboard</span></router-link
        >
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <!-- <div class="sidebar-heading">Campaigns</div> -->

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <router-link class="nav-link" to="/compaigns">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Campaigns Influencers</span>
       </router-link
        >
        <!-- <span v-if="users_data.guards == 'management'">Trail Balance</span></router-link> -->

      </li>


      <li class="nav-item">
        <router-link class="nav-link" to="/compaigns_ucg">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Campaigns UCG</span></router-link
        >
      </li>

      <!-- <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapse"
          aria-expanded="true"
          aria-controls="collapse"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Voucher</span>
        </a>
        <div
          id="collapse"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <router-link class="collapse-item" to="/vouchers">Show Voucher</router-link>
            <router-link class="collapse-item" to="/voucher/create">Create Voucher</router-link>
          </div>
        </div>
      </li> -->

      <!-- <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>Transactions</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <router-link class="collapse-item" to="/transactions">Transaction List</router-link>
            <router-link class="collapse-item" to="/transactions/create">Create Payment</router-link>
          </div>
        </div>
      </li> -->



      <!-- Nav Item - Utilities Collapse Menu -->
      <!-- <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-wrench"></i>
          <span>Inventories</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Utilities:</h6>
            <router-link class="collapse-item" to="/inventory">Items list</router-link>
            <router-link class="collapse-item" to="/inventory/create">Inventory Create</router-link>

          </div>
        </div>
      </li> -->

      <!-- Divider -->
      <!-- <hr class="sidebar-divider" /> -->

      <!-- Heading -->
      <!-- <div class="sidebar-heading">Brand Revem</div> -->

      <!-- Nav Item - Pages Collapse Menu -->

      <li class="nav-item">
        <router-link class="nav-link" to="/brands/">
          <i class="fas fa-fw fa-folder"></i>
          <span>Ma marque</span></router-link
        >
      </li>


      <li class="nav-item">
        <router-link class="nav-link" to="/contract/">
          <i class="fas fa-fw fa-folder"></i>
          <span>Contrats</span></router-link
        >
      </li>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
        <router-link class="nav-link" to="/creators">
          <i class="fas fa-fw fa-chart-area"></i>
          <span>Créateurs</span></router-link
        >
      </li>

      <!-- Nav Item - Tables -->
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/customers/">
          <i class="fas fa-fw fa-table"></i>
          <span>Chart of Accounts</span></router-link
        >
      </li> -->


      <li class="nav-item">
        <router-link class="nav-link" to="/libraries/">
          <i class="fas fa-fw fa-table"></i>
          <span>Mes contenus</span></router-link
        >
      </li>
      <!-- <button>
    <a>Hover me</a>
</button> -->
      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!-- End of Sidebar -->
</template>

<script>
import Vue from 'vue'
import { get} from '../components/lib/api'


export default {
    name: 'Sidebar',
    data () {
            return {
                users_data:{},

            }
        },

    created(){
        get('/api/auth_users') .then((res) => {

            console.log(res.data.data);
            Vue.set(this.$data, 'users_data', res.data.data)
            });
            // this.users()
            // console.log(this.$data.model)
        },

        method:{
            // users(){
            //     get('/api/auth_users') .then((res) => {

            //         console.log(res.data.data);
            //         Vue.set(this.$data, 'users_data', res.data.data)
            //     });
            // }
        }
}
</script>

<style>


.bg-gradient-primary {
    /* background-color: #0f102c !important; */
    background-image: linear-gradient(180deg, #2A2C76 10%, #2A2C76 30%,#2A2C76 100%);
    background-size: cover;
}
</style>
