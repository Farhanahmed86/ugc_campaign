<template>


    <div class="container">
                <div class="row">
                   <div class="col-4 item-photo">
                        <img style="max-width:100%; min-width: 80%;" :src="'/uploads/' + brand_details.product_image" />
                    </div>
                                               
            
                    <div class="col-8">
                       <h4>Product Details</h4>
                        <div style="width:100%;border-top:1px solid silver">
                            <div class="row">
                                <div class="col">
                          
                            <p style="padding: 15px;
        font-size: x-large;
        font-weight: bold;
        font-family: system-ui;
        color: black;">
                                
                               {{ brand_details.product_name ? brand_details.product_name:'none'}}
                            
                            </p>
                            <p>
                                <span style="font-weight: 900;
    color: black;
    margin-right: 10px;">Application Due:</span>{{ brand_details.end_of_application }}
                            </p>
                        </div>
                        <div class="col text-right">
                            <a :href="brand_details.delivery_product_url " target="_blank" style="padding: 15px;
        font-size: large;
        font-weight: bold;
        font-family: system-ui;
        color: #4bb4e0;">
                Website Link
            </a>
                        </div>
                        </div>
                            <small>
                                <ul>
                                  <li>Product Name: {{ brand_details.product_name? brand_details.product_name:'none' }}</li>
                                    <li>Plateform: {{ brand_details.action_type_plateform? brand_details.action_type_plateform:'none' }}</li>
                                    <li>Hiring: {{ brand_details.action_type_hiring? brand_details.action_type_hiring:'none' }}</li>
                                    <li>Instruction: {{ brand_details.action_type_instruction? brand_details.action_type_instruction:'none' }}</li>
                                    
                                    <li>Video Type: {{ brand_details.action_type_video? brand_details.action_type_video:'none' }}</li>
                                   
                                    <li>Whitelist: {{ brand_details.action_type_whitelist? brand_details.action_type_whitelist:'none' }}</li>
                                    <li>Campaign id: {{ brand_details.campaign_id? brand_details.campaign_id:'none' }}</li>
                                    
                                    <li>Delivery Description: {{ brand_details.delivery_description? brand_details.delivery_description:'none' }}</li>
                                    
                                    <li>Delivery Product Receive: {{ brand_details.delivery_product_receive? brand_details.delivery_product_receive:'none' }}</li>
                                    
                                    <li>Delivery Product URL: {{ brand_details.delivery_product_url? brand_details.delivery_product_url:'none' }}</li>
                                    
                                    <li>Start of Application: {{ brand_details.start_of_application? brand_details.start_of_application:'none' }}</li>
                                    
                                    <li>End of Application: {{ brand_details.end_of_application? brand_details.end_of_application:'none' }}</li>
                                   
                                    <li>Media Type: {{ brand_details.media_type? brand_details.media_type:'none' }}</li>
                                    
                                    <li>Media Type Raw: {{ brand_details.media_type_raw? brand_details.media_type_raw:'none' }}</li>
                                    
                                    <li>Soacil Type: {{ brand_details.media_type_socail? brand_details.media_type_socail:'none' }}</li>
                                    
                                    <li>Video lenght: {{ brand_details.media_type_videolenght? brand_details.media_type_videolenght:'none' }}</li>
                                     
                                    <li>Number of Product: {{ brand_details.number_of_product? brand_details.number_of_product:'none' }}</li>
                                   
                                 
                                </ul>  
                            </small>
    
                            <br>
                            <p style="padding: 15px;
        font-size: x-large;
        font-weight: bold;
        font-family: system-ui;
        color: black;">
                                
                               Unique Requirments
                               
                            
                            </p>
                           
    
                            <small>
                                <ul>
                                  <li>Action Avoid: {{ brand_details.ugc? brand_details.ugc.action_avoid:'none' }}</li>
                                    <li>Action Instruction: {{ brand_details.ugc? brand_details.ugc.action_instruction:'none' }}</li>
                                    <li>Action Specific Caption: {{ brand_details.ugc? brand_details.ugc.action_specific_caption:'none' }}</li>
                                    <li>Instruction: {{ brand_details.action_type_instruction? brand_details.action_type_instruction:'none' }}</li>
                                    
                                    <li>Action Type: {{ brand_details.ugc? brand_details.ugc.action_type:'none' }}</li>
                                   
                                    <li>Country: {{ brand_details.ugc? brand_details.ugc.country:'none' }}</li>
                                    <li>Followers: {{ brand_details.ugc? brand_details.ugc.followers:'none' }}</li>
                                    
                                    <li>Gender: {{ brand_details.ugc? brand_details.ugc.gender:'none' }}</li>
                                    
                                    <li>Hiring: {{ brand_details.ugc? brand_details.ugc.hire:'none' }}</li>
                                    
                                    <li>Budget: {{ brand_details.ugc? brand_details.hire_budget:'none' }}</li>
                                    
                                    <li>Date: {{ brand_details.ugc? brand_details.ugc.hire_date:'none' }}</li>
                                    
                                    <li>Offer: {{ brand_details.ugc? brand_details.ugc.hire_offer:'none' }}</li>
                                   
                                    <li>Max Age: {{ brand_details.ugc? brand_details.ugc.max_age:'none' }}</li>
                                    
                                    <li>Min: {{ brand_details.ugc? brand_details.ugc.min_age:'none' }}</li>
                                    
                                    <li>Plateform: {{ brand_details.ugc? brand_details.ugc.plateform:'none' }}</li>
                                    
                                    <li>Type: {{ brand_details.ugc? brand_details.ugc.plateform_type:'none' }}</li>
                                     
                                    
                                   
                                 
                                </ul>  
                            </small>
    
    
                            <p style="padding: 15px;
        font-size: x-large;
        font-weight: bold;
        font-family: system-ui;
        color: black;">
                                
                               Description
                            
                            </p>
    
                            <small>
                                {{ brand_details.product_description }}
                            </small>
                            <br>
                            <br>
                            <div class="col text-right">
                                <button class="butt" @click="apply">Apply Here</button>
                            </div>
                            <br>
    
                        </div>
                    </div>		
                </div>
            </div>        
    
    </template>
    
    <script>
    
    import Vue from 'vue'
    
        import { get , byMethod} from '../admin/components/lib/api'
        import Typehead from '../admin/components/typehead/Typehead.vue'
    
    export default {
        components: { Typehead },
      data () {
                return {
                    selectedOption:'',
                    form: {},
                    
                    
                    brand_details:{},
                    model: []
                }
            },
      name: "Dashboard",
    
    
      beforeRouteEnter(to, from, next) {
                get('/api/brand', to.query)
                    .then((res) => {
                        next(vm => vm.setData(res))
    
                    })
            },
            beforeRouteUpdate(to, from, next) {
                get('/api/brand', to.query)
                    .then((res) => {
                        this.setData(res)
                        next()
    
                    })
            },
    
               created() {
        console.log(this.$route.params.id);
        this.id = this.$route.params.id;
    
        get('/api/brand_details?id='+this.id)
                    .then((res) => {
                      console.log(res.data.data)
                        Vue.set(this.$data, 'brand_details', res.data.data)
                       
    
                    })
        
    
      },
    
    
            methods: {
                apply(){
                    if(this.brand_details.ugc.suggest_influencer !=null){
                        this.$router.push(`/creators/${this.id}`)
                        console.log('aa')
                    }
                    else {
                        console.log('ab')
                        this.$router.push(`/compaigns_ucg/${this.id}`)
                    }
                },
        
    
                detailsPage(item) {
                    this.$router.push(`/dashboard/${item.id}`)
                },
                setData(res) {
                    console.log(res.data.data)
                    Vue.set(this.$data, 'model', res.data.data)
                    //this.page = this.model.current_page
    
                    // console.log(res.data)
                },
    
    
            }
    };
    </script>
    
    <style scoped>
    
    .butt{
    border: none;
      color: white;
      background-color: #420988;
      border-radius: 5px;
      padding: 5px 20px;
    }
    ul > li{margin-right:25px;font-weight:lighter;cursor:pointer}
    li.active{border-bottom:3px solid silver;}
    
    .item-photo{display:flex;justify-content:center;align-items:center;border-right:1px solid #f6f6f6;}
    .menu-items{list-style-type:none;font-size:11px;display:inline-flex;margin-bottom:0;margin-top:20px}
    .btn-success{width:100%;border-radius:0;}
    .section{width:100%;margin-left:-15px;padding:2px;padding-left:15px;padding-right:15px;background:#f8f9f9}
    .title-price{margin-top:30px;margin-bottom:0;color:black}
    .title-attr{margin-top:0;margin-bottom:0;color:black;}
    .btn-minus{cursor:pointer;font-size:7px;display:flex;align-items:center;padding:5px;padding-left:10px;padding-right:10px;border:1px solid gray;border-radius:2px;border-right:0;}
    .btn-plus{cursor:pointer;font-size:7px;display:flex;align-items:center;padding:5px;padding-left:10px;padding-right:10px;border:1px solid gray;border-radius:2px;border-left:0;}
    div.section > div {width:100%;display:inline-flex;}
    div.section > div > input {margin:0;padding-left:5px;font-size:10px;padding-right:5px;max-width:18%;text-align:center;}
    .attr,.attr2{cursor:pointer;margin-right:5px;height:20px;font-size:10px;padding:2px;border:1px solid gray;border-radius:2px;}
    .attr.active,.attr2.active{ border:1px solid orange;}
    
    @media (max-width: 426px) {
        .container {margin-top:0px !important;}
        .container > .row{padding:0 !important;}
        .container > .row > .col-xs-12.col-sm-5{
            padding-right:0 ;    
        }
        .container > .row > .col-xs-12.col-sm-9 > div > p{
            padding-left:0 !important;
            padding-right:0 !important;
        }
        .container > .row > .col-xs-12.col-sm-9 > div > ul{
            padding-left:10px !important;
            
        }            
        .section{width:104%;}
        .menu-items{padding-left:0;}
    }
    
    </style>
    