(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"qMO+":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return i}));var n=t("dsAS"),l=t("vOnD"),r=t("q1tI"),s=t.n(r),c=t("1Yd/"),u=l.d.div.withConfig({displayName:"progress__Container",componentId:"sc-1pfgk0-0"})(["display:flex;align-items:center;.bar{flex:1;}"]);function i(){var e=Object(r.useState)(25),a=e[0],t=e[1],l=Object(r.useState)("Danger"),i=l[0],m=l[1];Object(r.useEffect)((function(){m(a<=25?"Danger":a<=50?"Warning":a<=75?"Info":"Success")}),[a]);var o=function(e){t(Math.min(Math.max(e,0),100))},E={marginBottom:"1rem"};return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{title:"Progress",keywords:["OAH","application","react"]}),s.a.createElement(n.I,null,s.a.createElement(n.o,{breakPoint:{xs:12}},s.a.createElement(n.g,null,s.a.createElement("header",null,"Progress Status"),s.a.createElement(n.h,null,s.a.createElement(n.F,{style:E,value:20,status:"Primary"},"Primary"),s.a.createElement(n.F,{style:E,value:40,status:"Success"},"Success"),s.a.createElement(n.F,{style:E,value:60,status:"Danger"},"Danger"),s.a.createElement(n.F,{style:E,value:80,status:"Info"},"Info"),s.a.createElement(n.F,{style:E,value:100,status:"Warning"},"Warning")))),s.a.createElement(n.o,{breakPoint:{xs:12}},s.a.createElement(n.g,null,s.a.createElement("header",null,"Progress Bar Size"),s.a.createElement(n.h,null,s.a.createElement(n.F,{style:E,value:20,size:"Tiny"},"XS"),s.a.createElement(n.F,{style:E,value:40,size:"Small"},"SM"),s.a.createElement(n.F,{style:E,value:60,size:"Medium"},"MD"),s.a.createElement(n.F,{style:E,value:80,size:"Large"},"LG"),s.a.createElement(n.F,{style:E,value:100,size:"Giant"},"XL")))),s.a.createElement(n.o,{breakPoint:{xs:12}},s.a.createElement(n.g,null,s.a.createElement("header",null,"Progress Bar Value"),s.a.createElement(n.h,null,s.a.createElement(n.F,{style:E,value:20,displayValue:!0}),s.a.createElement(n.F,{style:E,value:40},"Custom value")))),s.a.createElement(n.o,{breakPoint:{xs:12}},s.a.createElement(n.g,null,s.a.createElement("header",null,"Progress Bar Interactive"),s.a.createElement(n.h,null,s.a.createElement(u,null,s.a.createElement(n.c,{size:"Medium",actions:[{icon:"arrow-down",url:{onClick:function(){return o(a-25)}}}]}),s.a.createElement(n.F,{className:"bar",value:a,status:i,displayValue:!0}),s.a.createElement(n.c,{size:"Medium",actions:[{icon:"arrow-up",url:{onClick:function(){return o(a+25)}}}]})))))))}}}]);
//# sourceMappingURL=component---src-pages-extra-components-progress-tsx-adbaca28071e416fd25f.js.map