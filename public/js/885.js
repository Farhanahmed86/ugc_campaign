(self.webpackChunk=self.webpackChunk||[]).push([[885],{3811:(e,t,a)=>{"use strict";function o(e){var t=[],a=[],o=e.response.data.message||"The given data was invalid.";t.push(o),e.response.data.errors&&(a=[].concat.apply([],Object.values(e.response.data.errors)),t=t.concat(a)),t.forEach((function(e){Vue.toasted.show(e,{theme:"toasted-primary",position:"top-right",duration:5e3})}))}a.d(t,{w:()=>o})},3025:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(3645),i=a.n(o)()((function(e){return e[1]}));i.push([e.id,'body,html{background-color:#f5f5f4}.form{background-color:#fff;border-radius:20px;display:flex;flex-direction:column;gap:10px;left:35%;max-width:450px;padding:20px;position:absolute;top:10%;width:100%}.title{align-items:center;color:#4169e1;display:flex;font-size:28px;font-weight:600;letter-spacing:-1px;padding-left:30px;position:relative}.title:after,.title:before{background-color:#4169e1;border-radius:50%;content:"";height:16px;left:0;position:absolute;width:16px}.title:before{background-color:#4169e1}.title:after,.title:before{height:18px;width:18px}.message,.signin{color:hsla(0,0%,6%,.822);font-size:14px}.signin{text-align:center}.signin a{color:#4169e1}.signin a:hover{-webkit-text-decoration:underline #4169e1;text-decoration:underline #4169e1}.flex{display:flex;gap:6px;width:150%}.form label{position:relative}.form label .input{border:1px solid hsla(0,0%,41%,.397);border-radius:10px;outline:0;padding:10px 10px 20px;width:100%}.form label .input+span{color:grey;cursor:text;font-size:.9em;left:10px;position:absolute;top:15px;transition:.3s ease}.form label .input:-moz-placeholder-shown+span{font-size:.9em;top:15px}.form label .input:-ms-input-placeholder+span{font-size:.9em;top:15px}.form label .input:placeholder-shown+span{font-size:.9em;top:15px}.form label .input:focus+span,.form label .input:valid+span{font-size:.7em;font-weight:600;top:30px}.form label .input:valid+span{color:green}.submit{background-color:#000;border:none;border-radius:10px;color:#fff;font-size:16px;outline:none;padding:10px;transform:.3s ease}.submit:hover{background-color:#232425}@-webkit-keyframes pulse{0%{opacity:1;transform:scale(.9)}to{opacity:0;transform:scale(1.8)}}@keyframes pulse{0%{opacity:1;transform:scale(.9)}to{opacity:0;transform:scale(1.8)}}',""]);const s=i},8885:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var o=a(8311),i=a.n(o),s=a(9669),r=a.n(s),n=a(9819),l=a(3811);function c(e,t,a,o,i,s,r){try{var n=e[s](r),l=n.value}catch(e){return void a(e)}n.done?t(l):Promise.resolve(l).then(o,i)}var u,p,d;const f={name:"Login",components:{Nav:n.Z},data:function(){return{email:"",password:"",verificationStatus:!!this.$route.query.verification_status,verificationMessage:"",verificationAlertClasses:{"alert-success":!1,"alert-danger":!1}}},created:function(){"success"===this.$route.query.verification_status?(this.verificationMessage="Your account has been verified. Please log in.",this.verificationAlertClasses["alert-success"]=!0):"error"===this.$route.query.verification_status&&(this.verificationMessage="Your account could not be verified.",this.verificationAlertClasses["alert-danger"]=!0)},methods:(u={register:function(){this.$router.push("/signup")},login:function(){this.$router.push("/DashboardBrand")}},p="login",d=function(){var e,t=this;return(e=i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r().post("login",{email:t.email,password:t.password});case 3:a=e.sent,localStorage.setItem("token",a.data.token),t.$store.dispatch("user",a.data.user),"admin"==a.data.user.auth_type?t.$router.push("/CreatorCampaign").then((function(){setTimeout((function(){location.reload()}),100)})):t.$router.push("/dashboard").then((function(){setTimeout((function(){location.reload()}),100)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l.w(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,a=arguments;return new Promise((function(o,i){var s=e.apply(t,a);function r(e){c(s,o,i,r,n,"next",e)}function n(e){c(s,o,i,r,n,"throw",e)}r(void 0)}))})()},p in u?Object.defineProperty(u,p,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[p]=d,u)};var m=a(3379),v=a.n(m),h=a(3025),g={insert:"head",singleton:!1};v()(h.Z,g);h.Z.locals;const b=(0,a(1900).Z)(f,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container style"},[a("br"),e._v(" "),a("br"),e._v(" "),e.verificationStatus?a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-xl-10 col-lg-12 col-md-9"},[a("div",{staticClass:"alert alert-dismissible fade show mt-5",class:e.verificationAlertClasses,attrs:{role:"alert"}},[a("div",[e._v(e._s(e.verificationMessage))]),e._v(" "),e._m(0)])])]):e._e(),e._v(" "),a("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[a("h2",{staticClass:"text-center mb-4 mt-4"},[e._v("YALLAD")]),e._v(" "),a("p",{staticStyle:{"font-size":"x-large","font-weight":"bold",color:"black"}},[e._v("Welcome ")]),e._v(" "),a("p",{staticClass:"message"},[e._v("Sign in to Your account in insense")]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"email",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address..."},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",id:"exampleInputPassword",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),a("p",{staticStyle:{color:"black","font-weight":"bolder"}},[e._v("Forgot Password ?")]),e._v(" "),a("button",{staticClass:"submit",on:{click:function(t){return e.login()}}},[e._v("Sign In")]),e._v(" "),a("p",{staticStyle:{color:"black","font-weight":"bolder"}},[e._v("Don't have an acount ? "),a("a",{staticStyle:{color:"gray","font-weight":"bold",cursor:"pointer"},on:{click:e.register}},[e._v("SignUp")])])])])])}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],!1,null,null,null).exports}}]);