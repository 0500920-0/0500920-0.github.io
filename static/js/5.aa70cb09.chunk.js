(this["webpackJsonphomepage-typescript"]=this["webpackJsonphomepage-typescript"]||[]).push([[5],{188:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(3),a(4)),c=a(120),s=a(5),l=r.forwardRef((function(e,t){var a=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,m=Object(i.a)(e,["classes","className","raised"]);return r.createElement(c.a,Object(n.a)({className:Object(o.a)(a.root,s),elevation:d?8:1,ref:t},m))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},189:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(3),a(4)),c=a(5),s=r.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=Object(i.a)(e,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(o.a)(a.root,c),ref:t},d))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},190:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(3),a(4)),c=a(5),s=r.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,s=e.classes,l=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(o.a)(s.root,l,!c&&s.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},191:function(e,t,a){"use strict";var n=a(2),i=a(1),r=a(0),o=(a(3),a(4)),c=a(5),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=r.forwardRef((function(e,t){var a=e.alignContent,c=void 0===a?"stretch":a,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,m=e.className,f=e.component,u=void 0===f?"div":f,p=e.container,g=void 0!==p&&p,x=e.direction,v=void 0===x?"row":x,b=e.item,h=void 0!==b&&b,j=e.justify,O=void 0===j?"flex-start":j,w=e.lg,y=void 0!==w&&w,W=e.md,E=void 0!==W&&W,k=e.sm,C=void 0!==k&&k,N=e.spacing,S=void 0===N?0:N,I=e.wrap,M=void 0===I?"wrap":I,G=e.xl,R=void 0!==G&&G,z=e.xs,A=void 0!==z&&z,L=e.zeroMinWidth,B=void 0!==L&&L,D=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(o.a)(d.root,m,g&&[d.container,0!==S&&d["spacing-xs-".concat(String(S))]],h&&d.item,B&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==O&&d["justify-xs-".concat(String(O))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==C&&d["grid-sm-".concat(String(C))],!1!==E&&d["grid-md-".concat(String(E))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(u,Object(i.a)({className:F,ref:t},D))})),f=Object(c.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return s.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(i.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=f},200:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(17),o=a(0),c=(a(3),a(4)),s=a(5),l=a(7),d=o.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,d=void 0===s?"div":s,m=e.disableGutters,f=void 0!==m&&m,u=e.fixed,p=void 0!==u&&u,g=e.maxWidth,x=void 0===g?"lg":g,v=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(c.a)(a.root,r,p&&a.fixed,f&&a.disableGutters,!1!==x&&a["maxWidth".concat(Object(l.a)(String(x)))]),ref:t},v))}));t.a=Object(s.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},240:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(164),o=a(200),c=a(191),s=a(60),l=a(180),d={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},m=a(82),f=a.n(m),u=a(61),p=a(44),g=a(30),x=a(188),v=a(190),b=a(189),h=a(163),j=a(76),O=a.n(j),w=a(18);const y=Object(r.a)(e=>({root:{minWidth:275,padding:e.spacing(2)}}));function W(e){var t,a;let n=e.name,r=e.description,o=e.href,c=e.external,l=void 0!==c&&c,d=Object(p.a)(e,["name","description","href","external"]);const m=y(),f=Object(w.c)().translation;return i.a.createElement(x.a,Object.assign({className:m.root},d),i.a.createElement(b.a,null,i.a.createElement(s.a,{variant:"h5",component:"h2"},n),i.a.createElement(s.a,{color:"textSecondary"},r)),i.a.createElement(v.a,null,l?i.a.createElement(h.a,{href:o,target:"_blank",rel:"noopener noreferrer",color:"secondary",endIcon:i.a.createElement(O.a,null)}," ",null===f||void 0===f||null===(t=f.contentCard)||void 0===t?void 0:t.external):i.a.createElement(h.a,{component:g.b,to:e=>Object(u.a)(Object(u.a)({},e),{},{pathname:o}),color:"secondary"}," ",null===f||void 0===f||null===(a=f.contentCard)||void 0===a?void 0:a.internal)))}const E=[{id:"random",href:"/random"},{id:"periodicTable",href:"/periodic-table"},{id:"about",href:"/about"},{id:"profile",href:"https://0500920-0.github.io/resume/index.html",external:!0}];a.d(t,"default",(function(){return C}));const k=Object(r.a)(e=>({gridContainer:{padding:e.spacing(2),margin:0,width:"100%",flexGrow:1},gridItem:{},largeAvatar:{color:e.palette.getContrastText(d[500]),backgroundColor:d[500],width:e.spacing(12),height:e.spacing(12)}}));function C(){var e,t;const a=k(),n=Object(w.c)().translation;return i.a.createElement(o.a,{maxWidth:"lg"},i.a.createElement(c.a,{container:!0,className:a.gridContainer,justify:"center",spacing:2}," ",i.a.createElement(c.a,{container:!0,className:"".concat(a.gridItem," ").concat(a.gridContainer),justify:"center",alignItems:"center",spacing:2},i.a.createElement(c.a,{item:!0,className:a.gridItem},i.a.createElement(l.a,{alt:"Meng Iao Fong",className:a.largeAvatar,src:f.a})),i.a.createElement(c.a,{item:!0,className:a.gridItem},i.a.createElement(s.a,{variant:"h4",component:"h2",color:"textPrimary"},null===n||void 0===n||null===(e=n.home)||void 0===e?void 0:e.name),i.a.createElement(s.a,{variant:"h5",component:"h3",color:"textSecondary"},null===n||void 0===n||null===(t=n.home)||void 0===t?void 0:t.department))),E.map(e=>{var t,r,o,s,l,d;return i.a.createElement(c.a,{item:!0,xs:12,sm:"auto",key:e.id,className:a.gridItem},i.a.createElement(W,{name:null!==(t=null===(r=n)||void 0===r||null===(o=r[e.id])||void 0===o?void 0:o.title)&&void 0!==t?t:e.name,description:null!==(s=null===(l=n)||void 0===l||null===(d=l[e.id])||void 0===d?void 0:d.description)&&void 0!==s?s:e.description,href:e.href,external:e.external}))})))}}}]);
//# sourceMappingURL=5.aa70cb09.chunk.js.map