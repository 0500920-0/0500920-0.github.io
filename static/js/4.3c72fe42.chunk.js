(this["webpackJsonphomepage-typescript"]=this["webpackJsonphomepage-typescript"]||[]).push([[4],{188:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(3),a(4)),s=a(120),c=a(5),l=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.raised,d=void 0!==l&&l,m=Object(i.a)(e,["classes","className","raised"]);return r.createElement(s.a,Object(n.a)({className:Object(o.a)(a.root,c),elevation:d?8:1,ref:t},m))}));t.a=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},189:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(3),a(4)),s=a(5),c=r.forwardRef((function(e,t){var a=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,d=Object(i.a)(e,["classes","className","component"]);return r.createElement(l,Object(n.a)({className:Object(o.a)(a.root,s),ref:t},d))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(c)},190:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(3),a(4)),s=a(5),c=r.forwardRef((function(e,t){var a=e.disableSpacing,s=void 0!==a&&a,c=e.classes,l=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(o.a)(c.root,l,!s&&c.spacing),ref:t},d))}));t.a=Object(s.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(c)},191:function(e,t,a){"use strict";var n=a(2),i=a(1),r=a(0),o=(a(3),a(4)),s=a(5),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=r.forwardRef((function(e,t){var a=e.alignContent,s=void 0===a?"stretch":a,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,m=e.className,u=e.component,p=void 0===u?"div":u,g=e.container,f=void 0!==g&&g,x=e.direction,v=void 0===x?"row":x,b=e.item,h=void 0!==b&&b,j=e.justify,w=void 0===j?"flex-start":j,O=e.lg,y=void 0!==O&&O,W=e.md,k=void 0!==W&&W,S=e.sm,N=void 0!==S&&S,E=e.spacing,C=void 0===E?0:E,I=e.wrap,M=void 0===I?"wrap":I,R=e.xl,G=void 0!==R&&R,z=e.xs,L=void 0!==z&&z,B=e.zeroMinWidth,J=void 0!==B&&B,D=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(o.a)(d.root,m,f&&[d.container,0!==C&&d["spacing-xs-".concat(String(C))]],h&&d.item,J&&d.zeroMinWidth,"row"!==v&&d["direction-xs-".concat(String(v))],"wrap"!==M&&d["wrap-xs-".concat(String(M))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==L&&d["grid-xs-".concat(String(L))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==k&&d["grid-md-".concat(String(k))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==G&&d["grid-xl-".concat(String(G))]);return r.createElement(p,Object(i.a)({className:P,ref:t},D))})),u=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return c.forEach((function(n){var i=e.spacing(n);0!==i&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};l.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(i.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=u},200:function(e,t,a){"use strict";var n=a(1),i=a(2),r=a(17),o=a(0),s=(a(3),a(4)),c=a(5),l=a(7),d=o.forwardRef((function(e,t){var a=e.classes,r=e.className,c=e.component,d=void 0===c?"div":c,m=e.disableGutters,u=void 0!==m&&m,p=e.fixed,g=void 0!==p&&p,f=e.maxWidth,x=void 0===f?"lg":f,v=Object(i.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(d,Object(n.a)({className:Object(s.a)(a.root,r,g&&a.fixed,u&&a.disableGutters,!1!==x&&a["maxWidth".concat(Object(l.a)(String(x)))]),ref:t},v))}));t.a=Object(c.a)((function(e){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t}),{}),maxWidthXs:Object(r.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(r.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)},241:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(164),o=a(200),s=a(191),c=a(60),l=a(44),d=a(188),m=a(190),u=a(189),p=a(163),g=a(76),f=a.n(g),x=a(18);const v=Object(r.a)(e=>({root:{minWidth:275,padding:e.spacing(2)}}));function b(e){var t,a;let n=e.name,r=e.description,o=e.href,s=Object(l.a)(e,["name","description","href"]);const g=v(),b=Object(x.c)().translation;return i.a.createElement(d.a,Object.assign({className:g.root},s),i.a.createElement(u.a,null,i.a.createElement(c.a,{variant:"h5",component:"h2"},n),i.a.createElement(c.a,{color:"textSecondary"},r)),i.a.createElement(m.a,null,i.a.createElement(p.a,{href:o,target:"_blank",rel:"noopener noreferrer",color:"secondary",endIcon:i.a.createElement(f.a,null)}," ",null===b||void 0===b||null===(t=b.about)||void 0===t||null===(a=t.dependency)||void 0===a?void 0:a.external)))}const h=[{id:"react",href:"https://reactjs.org/"},{id:"materialUI",href:"https://material-ui.com/"},{id:"ts",href:"https://www.typescriptlang.org/"},{id:"reactRouter",href:"https://www.typescriptlang.org/"},{id:"periodicTableJSON",href:"https://github.com/Bowserinator/Periodic-Table-JSON"}];a.d(t,"default",(function(){return w}));const j=Object(r.a)(e=>({gridContainer:{padding:e.spacing(2),margin:0,width:"100%",flexGrow:1},gridItem:{}}));function w(){var e,t;const a=j(),n=Object(x.c)().translation;return i.a.createElement(o.a,{maxWidth:"lg"},i.a.createElement(s.a,{container:!0,className:a.gridContainer,spacing:2}," ",i.a.createElement(s.a,{item:!0,xs:12,className:a.gridItem},i.a.createElement(c.a,{variant:"h5",component:"h2",color:"textPrimary"},null===n||void 0===n||null===(e=n.about)||void 0===e||null===(t=e.dependency)||void 0===t?void 0:t.title)),h.map(e=>{var t,r,o,c,l,d,m,u;return i.a.createElement(s.a,{item:!0,xs:12,sm:"auto",key:e.id,className:a.gridItem},i.a.createElement(b,{name:null!==(t=null===(r=null===n||void 0===n||null===(c=n.about)||void 0===c?void 0:c.dependency)||void 0===r||null===(o=r[e.id])||void 0===o?void 0:o.name)&&void 0!==t?t:e.name,description:null!==(l=null===(d=null===n||void 0===n||null===(u=n.about)||void 0===u?void 0:u.dependency)||void 0===d||null===(m=d[e.id])||void 0===m?void 0:m.description)&&void 0!==l?l:e.description,href:e.href}))})))}}}]);
//# sourceMappingURL=4.3c72fe42.chunk.js.map