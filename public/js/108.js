(self.webpackChunk=self.webpackChunk||[]).push([[108],{9168:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var s=i(3645),o=i.n(s)()((function(e){return e[1]}));o.push([e.id,'.col-3{border:1px solid #ddd;cursor:pointer;margin:10px;padding:10px;text-align:center}.selected{background-color:#3498db;color:#fff}.imgs{border-radius:10px;height:120%;width:100%}.spans{align-content:stretch;display:flex;font-size:smaller;justify-content:center}.lb,.spans{color:#000;font-weight:700}.form-control{background-clip:padding-box;background-color:#fff;border:1px solid #d1d3e2;border-radius:.35rem;color:#6e707e;display:block;font-size:1rem;font-weight:400;height:calc(2em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}.form-check-inline{align-items:center;display:inline-flex;margin-right:.75rem;padding-left:30px}body,html{background-image:url(/images/Web.png);background-position:50%;background-size:cover}.radio_lable{color:#000;font-size:smaller;font-weight:700;position:relative}.form{border-radius:20px;display:flex;flex-direction:column;gap:8px;left:35%;max-width:400px;position:absolute;top:6%;width:100%}.title{align-items:center;color:#4169e1;display:flex;font-size:28px;font-weight:600;letter-spacing:-1px;padding-left:30px;position:relative}.title:after,.title:before{background-color:#4169e1;border-radius:50%;content:"";height:16px;left:0;position:absolute;width:16px}.title:before{background-color:#4169e1;height:18px;width:18px}.title:after{-webkit-animation:pulse 1s linear infinite;animation:pulse 1s linear infinite;height:18px;width:18px}.message,.signin{color:rgba(88,87,87,.822);font-size:14px}.signin{text-align:center}.signin a{color:#4169e1}.signin a:hover{-webkit-text-decoration:underline #4169e1;text-decoration:underline #4169e1}.flex{display:flex;gap:6px;width:100%}.form label{position:relative}.form label .input{border:1px solid hsla(0,0%,41%,.397);border-radius:10px;outline:0;padding:7px 10px 15px;width:100%}.form label .input+span{color:grey;cursor:text;font-size:.9em;left:10px;position:absolute;top:15px;transition:.3s ease}.form label .input:-moz-placeholder-shown+span{font-size:.9em;top:15px}.form label .input:-ms-input-placeholder+span{font-size:.9em;top:15px}.form label .input:placeholder-shown+span{font-size:.9em;top:15px}.form label .input:focus+span,.form label .input:valid+span{font-size:.7em;font-weight:600;top:30px}.form label .input:valid+span{color:green}.submit{border:none;border-radius:10px;border-radius:8px;color:#fff;font-size:16px;outline:none;padding:10px;transform:.3s ease;width:50%}.submit,.submit:hover{background-color:#2a2c76}@-webkit-keyframes pulse{0%{opacity:1;transform:scale(.9)}to{opacity:0;transform:scale(1.8)}}@keyframes pulse{0%{opacity:1;transform:scale(.9)}to{opacity:0;transform:scale(1.8)}}#image-drop-area{background-color:#fff;border:2px dashed #ccc;border-radius:50%;cursor:pointer;height:165px;padding:20px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:45%}.image-drop-zone{align-items:center;color:#666;display:flex;flex-direction:column;margin-top:30px}.image-drop-zone i{font-size:48px}.image-preview img{border-radius:50%;max-height:125px;max-width:100%;min-height:125px;min-width:100%}',""]);const a=o},2621:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});const s={name:"LoadingButton",props:{text:String,isLoading:Boolean}};const o=(0,i(1900).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("button",{staticClass:"btn btn-primary btn-user btn-block",attrs:{type:"submit",disabled:e.isLoading}},[e.isLoading?e._e():i("span",[e._v(e._s(e.text))]),e._v(" "),e.isLoading?i("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e()])}),[],!1,null,null,null).exports},4108:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>u});i(9669);var s=i(9819),o=i(2621),a=i(1252),n=i(918);const r={name:"Register",components:{Nav:s.Z,LoadingButton:o.Z,Typehead:n.Z},data:function(){return{items:[{image:"/images/games.jpg",label:"Gaming"},{image:"/images/games.jpg",label:"Sports"},{image:"/images/games.jpg",label:"beauty"},{image:"/images/games.jpg",label:"funny"},{image:"/images/games.jpg",label:"Art"},{image:"/images/games.jpg",label:"Nature"}],imageUrl:null,file:null,countriestURL:"/api/search/countries",form:{},method:"POST",first_name:"",last_name:"",pay_email:"",address:"",age:"",postal:"",gender:"",password:"",password_confirm:"",location:"",company:"",website:"",phone:"",selectedIndexes:[],selectedLabels:[],isLoading:!1}},created:function(){this.company_id=this.$route.params.id;this.$route.params.id},computed:{selectedLabels:function(){var e=this;return this.selectedIndexes.map((function(t){return e.items[t].label}))}},methods:{toggleSelect:function(e,t){var i=this.selectedLabels.indexOf(t);console.log(i),-1===i?this.selectedLabels.push(t):this.selectedLabels.splice(i,1),console.log(this.selectedLabels),this.form.selectedLabelsss=this.selectedLabels},isSelected:function(e,t){return this.selectedLabels.includes(t)},onStates:function(e){var t=e.target.value;Vue.set(this.form,"states",t),Vue.set(this.form,"states_name",t.name),Vue.set(this.form,"states_id",t.id)},onCity:function(e){var t=e.target.value;Vue.set(this.form,"city",t),Vue.set(this.form,"city_name",t.name),Vue.set(this.form,"city_id",t.id)},onCountry:function(e){var t=e.target.value;Vue.set(this.form,"countries",t),Vue.set(this.form,"countries_name",t.name),Vue.set(this.form,"countries_id",t.id)},influencer:function(){},save:function(){var e=this;console.log("abcd"),this.form.id=this.company_id,this.form.auth_type="influener",console.log(this.form),(0,a.t)(this.method,"influencer_details",this.form).then((function(t){t.data&&t.data.saved&&e.$router.push("/influencer_uploads/".concat(e.company_id))})).catch((function(t){422===t.response.status&&(e.errors=t.response.data.errors),e.isProcessing=!1}))}}};var l=i(3379),c=i.n(l),p=i(9168),d={insert:"head",singleton:!1};c()(p.Z,d);p.Z.locals;const u=(0,i(1900).Z)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"form"},[i("br"),e._v(" "),i("p",{staticClass:"text-center",staticStyle:{"font-size":"24px","font-weight":"bold",color:"black"}},[e._v("Do you have any socail accounts ")]),e._v(" "),i("p",{staticClass:"text-center",staticStyle:{"font-size":"15px","font-weight":"900",color:"black",cursor:"pointer"}},[e._v("The importtant info will allow us to pair with the right brands ")]),e._v(" "),i("br"),e._v(" "),i("label",[i("span",{staticClass:"lb"},[e._v("Instagram Handel(optional)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.instagram,expression:"form.instagram"}],staticClass:"input",attrs:{required:"",placeholder:"",type:"text"},domProps:{value:e.form.instagram},on:{input:function(t){t.target.composing||e.$set(e.form,"instagram",t.target.value)}}})]),e._v(" "),i("label",[i("span",{staticClass:"lb"},[e._v("Tiktok Handel(optional)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tiktok,expression:"form.tiktok"}],staticClass:"input",attrs:{required:"",placeholder:"",type:"text"},domProps:{value:e.form.tiktok},on:{input:function(t){t.target.composing||e.$set(e.form,"tiktok",t.target.value)}}})]),e._v(" "),i("label",[i("span",{staticClass:"lb"},[e._v("Youtube Channel URL(optional)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.youtube,expression:"form.youtube"}],staticClass:"input",attrs:{required:"",placeholder:"",type:"text"},domProps:{value:e.form.youtube},on:{input:function(t){t.target.composing||e.$set(e.form,"youtube",t.target.value)}}})]),e._v(" "),i("label",[i("span",{staticClass:"lb"},[e._v("Portfolio Site (optional)")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.website,expression:"form.website"}],staticClass:"input",attrs:{required:"",placeholder:"",type:"text"},domProps:{value:e.form.website},on:{input:function(t){t.target.composing||e.$set(e.form,"website",t.target.value)}}})]),e._v(" "),i("br"),e._v(" "),i("p",{staticClass:"text-center",staticStyle:{"font-size":"15px","font-weight":"900",color:"black",cursor:"pointer"}},[e._v("Select the Categories that the best describe you as a creator ")]),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"row",staticStyle:{display:"flex","justify-content":"space-evenly"}},e._l(e.items,(function(t,s){return i("div",{key:s,staticClass:"col-3  ",class:{selected:e.isSelected(s,t.label)},on:{click:function(i){return e.toggleSelect(s,t.label)}}},[i("img",{staticClass:"imgs",attrs:{src:t.image}}),e._v(" "),i("span",{staticClass:"spans"},[e._v(e._s(t.label))])])})),0),e._v(" "),i("br"),e._v(" "),i("div",{staticClass:"col ",staticStyle:{display:"flex","flex-direction":"column",gap:"15px","align-items":"center","justify-content":"space-evenly"}},[i("button",{staticClass:"submit",on:{click:e.save}},[e._v("Suivant")])]),e._v(" "),i("br")])])])}),[],!1,null,null,null).exports}}]);