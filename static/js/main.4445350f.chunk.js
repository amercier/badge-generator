(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(265)},265:function(e,t,a){"use strict";a.r(t);var r=a(1),i=a.n(r),n=a(15),o=a.n(n),s=a(99),l=a(38),c=a(39),m=a(46),p=a(40),g=a(47),h=a(98),u=a.n(h),d=a(43),v=a.n(d),y=a(26),f=a.n(y),b=a(19),S=[{name:"GitHub forks",url:"https://github.com/{repository}",imageUrl:"https://img.shields.io/github/forks/{repository}.svg",title:"Build Status"},{name:"GitHub stars",url:"https://github.com/{repository}",imageUrl:"https://img.shields.io/github/stars/{repository}.svg",title:"Build Status"},{name:"GitHub license",url:"https://github.com/{repository}",imageUrl:"https://img.shields.io/github/license/{repository}.svg",title:"License"},{name:"Travis CI",url:"https://travis-ci.org/{repository}",imageUrl:"https://img.shields.io/travis/{repository}/{branch}.svg",title:"Build Status"},{name:"CircleCI",url:"https://circleci.com/gh/{repository}",imageUrl:"https://img.shields.io/circleci/project/{repository}/{branch}.svg",title:"Build Status"},{name:"CodeShip",url:"https://codeship.com/projects/{repository}",imageUrl:"https://circleci.com/gh/{repository}.svg?style=svg",title:"Build Status"},{name:"Code Climate (maintainability)",url:"https://codeclimate.com/github/{repository}",imageUrl:"https://img.shields.io/codeclimate/maintainability/{repository}.svg",title:"Maintainability"},{name:"Code Climate (% maintainability)",url:"https://codeclimate.com/github/{repository}",imageUrl:"https://img.shields.io/codeclimate/maintainability-percentage/{repository}.svg",title:"Maintainability"},{name:"Code Climate (tech debt)",url:"https://codeclimate.com/github/{repository}",imageUrl:"https://img.shields.io/codeclimate/tech-debt/{repository}.svg",title:"Technical Debt"},{name:"Code Climate (code coverage)",url:"https://codeclimate.com/github/{repository}",imageUrl:"https://img.shields.io/codeclimate/coverage/github/{repository}.svg",title:"Test Coverage"},{name:"Coveralls",url:"https://coveralls.io/r/{repository}?branch={branch}",imageUrl:"http://img.shields.io/coveralls/{repository}/{branch}.svg",title:"Test Coverage"},{name:"Codecov",url:"https://codecov.io/github/{repository}?branch={branch}",imageUrl:"https://img.shields.io/codecov/c/github/{repository}/{branch}.svg",title:"Test Coverage"},{name:"Gemnasium",url:"https://gemnasium.com/{repository}",imageUrl:"http://img.shields.io/gemnasium/{repository}.svg",title:"Dependency Status"},{name:"VersionEye",url:"https://www.versioneye.com/user/projects/{repository}",imageUrl:"https://www.versioneye.com/user/projects/{repository}/badge.svg",title:"Dependency Status"},{name:"David DM",url:"https://david-dm.org/{repository}",imageUrl:"https://img.shields.io/david/{repository}.svg",title:"Dependency Status"},{name:"David DM (dev)",url:"https://david-dm.org/{repository}#info=devDependencies",imageUrl:"https://img.shields.io/david/dev/{repository}.svg",title:"devDependency Status"},{name:"David DM (peer)",url:"https://david-dm.org/{repository}#info=devDependencies",imageUrl:"https://img.shields.io/david/peer/{repository}.svg",title:"peerDependency Status"},{name:"Packagist",url:"https://packagist.org/packages/{repository}",imageUrl:"https://img.shields.io/packagist/v/{repository}.svg",title:"Latest Stable Version"},{name:"Packagist PHP version",url:"https://packagist.org/packages/{repository}",imageUrl:"https://img.shields.io/packagist/php-v/{repository}.svg",title:"PHP version"},{name:"Packagist License",url:"https://packagist.org/packages/{repository}",imageUrl:"https://img.shields.io/packagist/l/{repository}.svg",title:"License"},{name:"NPM",url:"https://www.npmjs.com/package/{repository}",imageUrl:"https://img.shields.io/npm/v/{repository}.svg",title:"Latest Stable Version"},{name:"NPM License",url:"https://www.npmjs.com/package/{repository}",imageUrl:"https://img.shields.io/npm/l/{repository}.svg",title:"License"},{name:"NPM Total Downloads",url:"https://www.npmjs.com/package/{repository}",imageUrl:"https://img.shields.io/npm/dt/{repository}.svg",title:"NPM Downloads"},{name:"NPM Downloads per month",url:"https://www.npmjs.com/package/{repository}",imageUrl:"https://img.shields.io/npm/dm/{repository}.svg",title:"NPM Downloads"},{name:"Bower",url:"http://bower.io/search/?q={repository}",imageUrl:"https://img.shields.io/bower/v/{repository}.svg",title:"Latest Stable Version"},{name:"ESDoc",url:"https://doc.esdoc.org/github.com/{repository}/",imageUrl:"https://doc.esdoc.org/github.com/{repository}/badge.svg",title:"API Documentation"},{name:"Greenkeeper",url:"https://github.com/{repository}/issues?q=label%3Agreenkeeper",imageUrl:"https://badges.greenkeeper.io/{repository}.svg",title:"Greenkeeper"},{name:"Melpa",url:"http://melpa.org/#/{repository}/",imageUrl:"http://melpa.org/packages/{repository}-badge.svg",title:"MELPA"}],w=[{name:"URL",template:function(e,t){return"".concat(t)}},{name:"Image URL",template:function(e,t,a){return"".concat(a)}},{name:"Markdown",template:function(e,t,a){return"[![".concat(e,"](").concat(a,")](").concat(t,")")},default:!0},{name:"Org Mode",template:function(e,t,a){return"[[".concat(t,"][file:").concat(a,"]]")}},{name:"Textile",template:function(e,t,a){return"!".concat(a,"!:").concat(t)}},{name:"Rdoc",template:function(e,t,a){return'{<img src="'.concat(a,'" alt="').concat(e,'" />}[').concat(t,"]")}},{name:"AsciiDoc",template:function(e,t,a){return"image:".concat(a,'["Build Status", link="').concat(t,'"]')}},{name:"RST",template:function(e,t,a){return".. image:: ".concat(a,"\n  :target: ").concat(t)}},{name:"Pod",template:function(e,t,a){return'=for HTML <a href="'.concat(t,'"><img src="').concat(a,'"></a>')}}],k=["default","plastic","flat-square","for-the-badge","social"],E=a(97),C=a.n(E),U=a(31),j=a.n(U),D=a(42),M=a.n(D),T=a(41),N=a.n(T),x=a(21),L=a.n(x),O=a(45),P=a.n(O),R=a(44),B=a.n(R),I=a(96),G=a.n(I);function H(e){return e.replace(/ /g,"-").toLowerCase()}function A(e){var t=e.replace(/-/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}var V=Object(b.withStyles)(function(e){var t=e.spacing;return{gridItem:{marginTop:2*t.unit,marginBottom:2*t.unit}}})(function(e){var t=e.repository,a=e.serviceSelection,r=e.badgeStyle,n=e.handleRepositoryChange,o=e.handleServiceToggle,s=e.handleStyleChange,l=e.classes;return i.a.createElement("form",{noValidate:!0,autoComplete:"off"},i.a.createElement(L.a,{container:!0},i.a.createElement(L.a,{item:!0,xs:12,className:l.gridItem},i.a.createElement(G.a,{label:"Repository",title:"Repository",helperText:'Ex: "lodash" (npm name), "facebook/react" (Github slug), etc.',margin:"normal",fullWidth:!0,value:t,onChange:n})),i.a.createElement(L.a,{item:!0,xs:12,sm:10,className:l.gridItem},i.a.createElement(M.a,{component:"fieldset"},i.a.createElement(N.a,{component:"legend"},"Services"),i.a.createElement(L.a,{container:!0},S.map(function(e,t){var r=e.name;return i.a.createElement(L.a,{key:"service-".concat(H(r)),item:!0,xs:12,sm:6,md:4,lg:3},i.a.createElement(j.a,{label:r,title:r,control:i.a.createElement(C.a,{checked:a[t],onChange:o(t),value:"".concat(t)})}))})))),i.a.createElement(L.a,{item:!0,xs:12,sm:2,className:l.gridItem},i.a.createElement(M.a,{component:"fieldset"},i.a.createElement(N.a,{component:"legend"},"Style"),i.a.createElement(B.a,{"aria-label":"Style",name:"style",value:r,onChange:s},k.map(function(e){return i.a.createElement(j.a,{key:"style-".concat(e),value:e,control:i.a.createElement(P.a,null),label:A(e),title:A(e)})}))))))}),F=a(101),W=a(100);function q(e,t,a){return e.replace("{repository}",t).replace("{branch}",a)}function z(e){return e.replace(/ /g,"-").toLowerCase()}var J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={formatIndex:w.findIndex(function(e){return e.default})||0},a.handleFormatChange=function(e,t){a.setState({formatIndex:+t})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.formatIndex;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{variant:"h6",className:t.subtitle,headlineMapping:{h6:"h2"}},"Preview"),i.a.createElement("p",{className:t.badges},this.formattedServices.map(function(e){var a=e.name,r=e.title,n=e.url,o=e.imageUrl;return i.a.createElement("a",{key:"image-".concat(z(a)),href:n,className:t.badge,title:r},i.a.createElement("img",{src:o,alt:r}))})),i.a.createElement(f.a,{variant:"h6",className:t.subtitle,headlineMapping:{h6:"h2"}},"Source code"),i.a.createElement("form",{noValidate:!0,autoComplete:"off",className:t.formats},i.a.createElement(B.a,{"aria-label":"Format",value:"".concat(a),onChange:this.handleFormatChange,className:t.radioGroup},w.map(function(e,t){var a=e.name;return i.a.createElement(j.a,{key:"format-".concat(z(a)),value:"".concat(t),control:i.a.createElement(P.a,null),label:a,title:a})}))),i.a.createElement("pre",{className:t.code},this.formattedServices.map(function(t){var a=t.title,r=t.url,i=t.imageUrl;return"".concat(e.format.template(a,r,i),"\n")})))}},{key:"format",get:function(){var e=this.state.formatIndex;return w[e]}},{key:"formattedServices",get:function(){var e=this.props,t=e.services,a=e.repository,r=e.badgeStyle,i="default"===r?"":"?style=".concat(r);return t.map(function(e){var t=e.url,r=e.imageUrl,n=Object(W.a)(e,["url","imageUrl"]);return Object(F.a)({url:q(t,a,"master"),imageUrl:"".concat(q(r,a,"master")).concat(i)},n)})}}]),t}(r.Component),X=Object(b.withStyles)(function(e){var t=e.spacing,a=e.typography;return{subtitle:{marginTop:2*t.unit},badges:{lineHeight:"20px"},badge:{marginRight:t.unit/2},formats:{marginTop:t.unit},radioGroup:{flexDirection:"row"},code:{fontFamily:"Roboto Mono, monospace",fontSize:a.fontSize-3,lineHeight:1.8,overflowX:"auto",paddingBottom:t.unit}}})(J),$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={repository:"",style:k[0],serviceSelection:S.map(function(e){return!!e.enabled})},a.handleRepositoryChange=function(e){a.setState({repository:e.target.value})},a.handleServiceToggle=function(e){return function(t){var r=a.state.serviceSelection,i=Object(s.a)(r);i[e]=t.target.checked,a.setState({serviceSelection:i})}},a.handleStyleChange=function(e,t){a.setState({style:t})},a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.repository,r=t.serviceSelection,n=t.style,o=this.enabledServices;return i.a.createElement("main",{className:e.container},i.a.createElement(u.a,null),i.a.createElement(f.a,{variant:"h4",headlineMapping:{h4:"h1"}},"Github Badge Generator"),i.a.createElement(v.a,{className:e.paper},i.a.createElement(V,{repository:a,serviceSelection:r,badgeStyle:n,handleRepositoryChange:this.handleRepositoryChange,handleServiceToggle:this.handleServiceToggle,handleStyleChange:this.handleStyleChange})),a&&o.length>0&&i.a.createElement(v.a,{className:e.paper},i.a.createElement(X,{services:o,repository:a,badgeStyle:n})))}},{key:"enabledServices",get:function(){var e=this.state.serviceSelection;return S.filter(function(t,a){return e[a]})}}]),t}(r.Component),K=Object(b.withStyles)(function(e){var t=e.spacing;return{container:{width:"100%",maxWidth:80*e.typography.fontSize,marginRight:"auto",marginLeft:"auto",marginTop:4*t.unit,marginBottom:4*t.unit,paddingRight:2*t.unit,paddingLeft:2*t.unit},paper:{marginTop:4*t.unit,paddingTop:"1px",paddingBottom:4*t.unit,paddingRight:4*t.unit,paddingLeft:4*t.unit}}})($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4]\d|[01]?\d\d?)){3}$/));var Q=document.getElementById("root");null!==Q&&o.a.render(i.a.createElement(K,null),Q),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,2,1]]]);
//# sourceMappingURL=main.4445350f.chunk.js.map