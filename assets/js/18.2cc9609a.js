(window.webpackJsonp=window.webpackJsonp||[]).push([[18,24],{420:function(e,t,n){"use strict";n.r(t);var a=n(0),r={name:"render-abc",props:{abc:{type:String,required:!0}},data:function(){return{visualObj:null,defaultOptions:{paddingleft:0,paddingright:0,responsive:"resize"}}},mounted:function(){var e=this;a.a.nextTick((function(){var t=n(307),a=e.$refs.paper;e.visualObj=t.renderAbc(a,e.abc,e.defaultOptions)}))},methods:{getObj:function(){return this.visualObj[0]}}},s=n(45),i=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("ClientOnly",[t("div",{ref:"paper",staticClass:"render-abc"})])}),[],!1,null,null,null);t.default=i.exports},581:function(e,t,n){"use strict";n.r(t);var a=n(0),r={name:"show-and-render-abc",components:{RenderAbc:n(420).default},props:{abc:{type:String,required:!0}},data:function(){return{visualObj:null,defaultOptions:{paddingleft:0,paddingright:0,responsive:"resize"}}},mounted:function(){var e=this;a.a.nextTick((function(){var t=n(307),a=e.$refs.paper;e.visualObj=t.renderAbc(a,e.abc,e.defaultOptions)}))},methods:{getObj:function(){return this.visualObj[0]}}},s=n(45),i=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"show-and-render"},[t("div",{staticClass:"language- extra-class"},[t("pre",{staticClass:"language-text"},[t("code",[this._v(this._s(this.abc))])])]),this._v(" "),t("render-abc",{attrs:{abc:this.abc}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);