webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"app",components:{},mounted:function(){this.$store.dispatch("generateFakeMessages"),this.$store.dispatch("generateFakeMessageWithRandomTimeout")}},n,!1,function(e){s("TB+h")},null,null).exports,o=s("/ocq"),i=s("Ubyc"),u={name:"Login",components:{VueTyper:i.VueTyper},computed:{welcomeText:function(){return["welcome to chitchat","where your dreams become reality","or not"]}},data:function(){return{username:""}},methods:{handleSubmit:function(e){this.username.length<3||(this.$store.commit("setUsername",this.username),this.$router.push("/chat"))}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("div",{staticClass:"typer"},[s("vue-typer",{attrs:{text:e.welcomeText}})],1),e._v(" "),s("form",{on:{submit:function(t){t.preventDefault(),e.handleSubmit(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",placeholder:"enter your nickname",autocomplete:"off",autocapitalize:"off"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),s("button",{attrs:{type:"submit",disabled:e.username.length<3}},[e._v("\n      Login\n    ")])])])},staticRenderFns:[]};var c=s("VU/8")(u,m,!1,function(e){s("QbHf")},"data-v-7f16e78f",null).exports,l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat"},[s("div",{staticClass:"log"},e._l(e.log,function(t,a){return s("div",{key:a,class:["entry",t.username===e.username?"highlight":""]},[s("span",{staticClass:"username"},[e._v(e._s(t.username)+":")]),e._v(" "),s("span",{staticClass:"message"},[e._v(e._s(t.message))])])})),e._v(" "),s("form",{on:{submit:function(t){t.preventDefault(),e.handleSubmit(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",name:"chatmessage",autocomplete:"off",autocapitalize:"off",autofocus:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])])},staticRenderFns:[]};var p=s("VU/8")({name:"Chat",data:function(){return{message:""}},computed:{username:function(){return this.$store.state.username},log:function(){return this.$store.getters.logReversed}},methods:{handleSubmit:function(e){if(0!==this.message.length){var t={username:this.username,message:this.message};this.$store.commit("addMessage",t),this.message=""}}},created:function(){""===this.$store.state.username&&this.$router.push("/")}},l,!1,function(e){s("gVSf")},"data-v-ce4dc410",null).exports;a.a.use(o.a);var g=new o.a({routes:[{path:"/",component:c},{path:"/chat",component:p}]}),d=s("NYxO"),f=s("asHx"),h=s.n(f);a.a.use(d.a);var v=new h.a,_={generateFakeMessage:function(e){var t=e.commit;e.dispatch;t("addMessage",{username:v.first(),message:v.sentence(),color:v.color()})},generateFakeMessages:function(e){for(var t=e.dispatch,s=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:10)-1;s>=0;s--)t("generateFakeMessage")},generateFakeMessageWithRandomTimeout:function(e){var t=e.dispatch,s=v.integer({min:3e3,max:1e4});return setTimeout(function(e){t("generateFakeMessage"),t("generateFakeMessageWithRandomTimeout")},s)}},b=new d.a.Store({state:{username:"",log:[]},getters:{logReversed:function(e){return e.log.slice().reverse()}},actions:_,mutations:{addMessage:function(e,t){e.log.push(t)},setUsername:function(e,t){e.username=t}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,store:b,components:{App:r},template:"<App/>"})},QbHf:function(e,t){},"TB+h":function(e,t){},gVSf:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ab273c26583d738f4369.js.map