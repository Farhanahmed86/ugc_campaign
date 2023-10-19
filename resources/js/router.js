import Vue from "vue";

import Router from "vue-router";
import store from "./vuex";
import AdminLayout from "./views/admin/layout/index";


Vue.use(Router);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("./views/home/index.vue")
        },
        {
            path: "/login/:user_id?",
            name: "login",
            component: () => import("./views/login/index.vue")
        },
        {
            path: "/signup",
            name: "register",
            component: () => import("./views/register/register.vue")
        },
        {
            path: "/register/:id",
            name: "register",
            component: () => import("./views/register/index.vue")
        },
        {
            path: "/register/company/:id",
            name: "register",
            component: () => import("./views/register/company.vue")
        },
        {
            path: "/register/revenue/:id",
            name: "register",
            component: () => import("./views/register/revenue.vue")
        },
        {
            path: "/register/new_revenue/:id",
            name: "register",
            component: () => import("./views/register/revenue_2.vue")
        },
        {
            path: "/register/company_category/:id",
            name: "register",
            component: () => import("./views/register/company_category.vue")
        },
        {
            path: "/verify/user/:id",
            name: "verify",
            props: true,
            component: () => import("./views/verify/index.vue")
        },
        {
            path: "/forgot-password",
            name: "forgot",
            component: () => import("./views/forgot/index.vue")
        },
        {
            path: "/reset/:token",
            name: "reset",
            component: () => import("./views/reset/index.vue")
        },
        /**
         * Admin routes
         */
        {path: "/loading", component: require("./views/admin/loading.vue").default,
        meta: {
                   requiresAuth: true,
                   layout: AdminLayout
               }
        },
         {path: "/dashboard", component: require("./views/admin/dashboard.vue").default,
         meta: {
                    requiresAuth: true,
                    layout: AdminLayout
                }
         },
        //  {path: "/dashboard", component: require("./views/admin/dashboard.vue").default,
        //  meta: {
        //             // requiresAuth: true,
        //             layout: AdminLayout
        //         }
        //  },

        // {

        //     path: "/admin",
        //     name: "admin",
        //     component: () => import("./views/admin/dashboard.vue"),
        //     meta: {
        //         requiresAuth: true,
        //         layout: AdminLayout
        //     }
        // },
        {
            path: "/admin/components/buttons",
            name: "buttons",
            component: () => import("./views/admin/buttons.vue"),
            meta: {
                // requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/components/cards",
            name: "cards",
            component: () => import("./views/admin/cards.vue"),
            meta: {
                // requiresAuth: true,
                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/colors",
            name: "colors",
            component: () => import("./views/admin/colors.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/borders",
            name: "borders",
            component: () => import("./views/admin/borders.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/animations",
            name: "animations",
            component: () => import("./views/admin/animations.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {
            path: "/admin/utilities/other",
            name: "other",
            component: () => import("./views/admin/stock_report.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/page-not-found",
            name: "page-not-found",
            component: () => import("./views/admin/page-not-found.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {
            path: "/admin/pages/blank",
            name: "blank",
            component: () => import("./views/admin/blank.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {
            path: "/admin/charts",
            name: "charts",
            component: () => import("./views/admin/charts.vue"),
            meta: {

                layout: AdminLayout
            }
        },
        {path: "/customers", component: require("./views/admin/tables.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: "/customers/create", component: require("./views/admin/tables-2.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: "/accounts", component: require("./views/admin/code.vue").default,
        meta: {

            layout: AdminLayout
        }
        },

        {path: "/accounts/create", component: require("./views/admin/code-2.vue").default,
        meta: {

            layout: AdminLayout
        }
        },

        {path: "/plstatement", component: require("./views/admin/pl.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: "/statement", component: require("./views/admin/ledger copy.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: "/balance_sheet", component: require("./views/admin/balance.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: '/customers/:id', component: require('./views/admin/customer_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },
    {path: "/vendors", component: require("./views/admin/vendors_index.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: "/vendors/create", component: require("./views/admin/vendors_form.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: '/vendors/:id', component: require('./views/admin/vendors_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },

    {path: "/sales", component: require("./views/admin/sales_index.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: "/sales/create", component: require("./views/admin/sales_form.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: '/sales/:id', component: require('./views/admin/sales_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },
    {path: '/invoices/:id', component: require('./views/admin/sales_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },

    {path: "/inventory", component: require("./views/admin/inventories_index.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: "/inventory/create", component: require("./views/admin/inventories_form.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: '/inventory/:id', component: require('./views/admin/inventories_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },


    {path: "/transactions", component: require("./views/admin/transactions_index.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/ugc_porduct', component: require("./views/admin/ugc_porduct.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/DashboardBrand', component: require("./views/admin/DashboardBrand.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/ProductDelivery', component: require("./views/admin/ProductDelivery.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/MediaType', component: require("./views/admin/MediaType.vue").default,
    meta: {

        layout: AdminLayout
    }
    },

    {path: '/actiontype', component: require("./views/admin/new_ActionType.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/NewCampaign', component: require("./views/admin/NewCampaign.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/NewCampaignfalx', component: require("./views/admin/NewCampaignfalx.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/Newid', component: require("./views/admin/Newid.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/doyou', component: require("./views/admin/doyou.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: '/ActionType', component: require("./views/admin/ActionType.vue").default,
    meta: {

        layout: AdminLayout
    }
    },
    {path: "/transactions/create", component: require("./views/admin/transactions_form.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: "/vouchers", component: require("./views/admin/voucher_index.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: "/voucher/create", component: require("./views/admin/voucher_create.vue").default,
        meta: {

            layout: AdminLayout
        }
        },
        {path: '/vouchers/:id', component: require('./views/admin/voucher_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },
        {path: '/transactions/:id', component: require('./views/admin/transaction_show.vue').default,
        meta: {

            layout: AdminLayout
        }
    },



    {path: '/inventories', component: require('./views/admin/stock_report.vue').default,
        meta: {

            layout: AdminLayout
        }
    },


    {path: '/trail', component: require('./views/admin/trailbalance.vue').default,
    meta: {

        layout: AdminLayout
    }



        },

                {path: '/compaigns', component: require('./views/admin/compaign.vue').default,
                meta: {

                    layout: AdminLayout
                }



                },

                {path: '/brief', component: require('./views/admin/brief.vue').default,
                meta: {

                    layout: AdminLayout
                }



                },

                {path: '/contract', component: require('./views/admin/contract.vue').default,
                meta: {

                    layout: AdminLayout
                }



                },

                {path: '/compaigns_ucg', component: require('./views/admin/compaign_UCG.vue').default,
                meta: {

                    layout: AdminLayout
                }



                },

                {path: '/brands', component: require('./views/admin/brand.vue').default,
                meta: {

                    layout: AdminLayout
                }



                },

                {path: '/creators', component: require('./views/admin/creators.vue').default,
                meta: {

                    layout: AdminLayout
                }



                },

                {path: '/libraries', component: require('./views/admin/library.vue').default,
                meta: {

                    layout: AdminLayout
                }
                },

                 {path: '/portfolio', component: require('./views/admin/portfolio.vue').default,
                meta: {

                    layout: AdminLayout
                }
                },

    {path: '/ledgers', component: require('./views/admin/ledger.vue').default,
        meta: {

            layout: AdminLayout
        }
    },
    {path: '/ledgers/:id', component: require('./views/admin/ledger_show.vue').default,
    meta: {

        layout: AdminLayout
    }
},

        // {path: '/customers/create', component: require('../views/customers/form.vue').default},
        // {

        //     path: "/admin/tables",
        //     name: "tables",
        //     component: () => import("./views/admin/tables.vue"),
        //     meta: {
        //         requiresAuth: true,
        //         layout: AdminLayout
        //     }
        // }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.user) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

export default router;
