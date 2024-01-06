<template>
  <div
    class="
      navbar navbar-expand navbar-light
      bg-white
      topbar
      mb-4
      static-top
      shadow
    "
  >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Search -->
    <form
      class="
        d-none d-sm-inline-block
        form-inline
        mr-auto
        ml-md-3
        my-2 my-md-0
        mw-100
        navbar-search
      "
    >
    <!-- <h2>Brand Revam</h2> -->

    </form>
    <!-- <div class="row">
        <div class="col-6">
            <img
            class="nav-link dropdown-toggle mt-1" style="width: 25%; height: 10%;"
            src="images/business.png"

          />
          <span  style="font-size: medium;">Refer a business</span>
        </div>

        <div class="col-6">
            <img
            class="nav-link dropdown-toggle" style="height: 50%; width: 60%"
            src="images/demo.png"

          />

        </div>


    </div> -->

    <!-- Topbar Navbar -->
    <ul class="navbar-nav " style="display: flex;">






      <li class="li-btn nav-item dropdown no-arrow">
        <a :href="openlink" target="_blank" >
        <button class="li-button"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" style="padding-right: 10px;"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>Reserver une démo</button>
      </a>
      </li>
      <li class="li-faq nav-item dropdown no-arrow" style="font-size: 18px; color: black;">
        <a :href="whatsappLink" target="_blank" style="color: green;
    font-size: medium;
">
        <img src="/images/whatsapp.png"  style="    width: 44%;
    height: 50px;"/>
 
WhatsApp</a>
      </li>








      <!-- <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >

        </a>


      </li> -->

      <div class="topbar-divider d-none d-sm-block"></div>


      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >{{ user.first_name }} {{ user.last_name }}</span
          >
          <img
            class="img-profile rounded-circle"
            src="images/user.jpg"

          />
        </a>

        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>

          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="javascript:void(0)"
            @click="logout"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Topbar",
  data() {
    return {
      phoneNumber: '+123456789112', // Replace with your actual phone number
    };
  },
  computed: {
    ...mapGetters(["user"]),
    // window.open("https://calendly.com/demo-yallad", "_blank");

    whatsappLink() {
      return `https://api.whatsapp.com/send?phone=${this.phoneNumber}`;
    },

    openlink() {
      return "https://calendly.com/demo-yallad";
    },
    
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>

/* h2{
     color: rgb(3, 94, 89);
  font-family: "arial";
  font-size: 1.5em;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  animation: animtext 4s steps(80, end);
   transition: all cubic-bezier(0.1, 0.7, 1.0, 0.1);
} */
@keyframes animtext {
  from {
      width: 0;
     transition: all 2s ease-in-out;
  }
}
.navbar-nav{
  display: flex;
  align-items: center;
}
.li-button {
    padding: 8px 32px;
    border: none;
    border-radius: 15px;
    background-color: #ECEC4F;
    font-size: 16px;
    font-weight: 600;
}
button.li-button {
    margin-right: 34px;
}
</style>
