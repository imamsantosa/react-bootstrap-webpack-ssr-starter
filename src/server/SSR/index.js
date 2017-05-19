module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/Users/kentor/GitProjects/react-bootstrap-webpack-ssr-starter/docs/public",t(0)}([function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=(0,c.default)(),r=e.url;(0,s.match)({routes:n,location:r},function(e,n,r){if(e)return console.error(e),t.status(500).end("Internal server error");if(n)return t.redirect(302,n.pathname+n.search);if(!r)return t.status(404).end("Not found");var o=a.default.createElement(s.RouterContext,r),l=(0,u.renderToString)(o);return t.status(200).set("content-type","text/html").send(i(l))})}function i(e){var t={template:'\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>react bootstrap universal</title>\n        <meta charset="utf-8">\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <meta name="description" content="actAdmin">\n        <meta name="author" content="Erwan DATIN">\n        <link href="http://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">\n        <link rel="stylesheet" href="/assets/app.styles.css">\n      </head>\n      <body class="skin-black" style="background-color:#f1f2f7">\n        <section id="root">\n          '+e+'\n        </section>\n        <script type="text/javascript" src="/assets/app.vendor.bundle.js"></script>\n        <script type="text/javascript" src="/assets/app.bundle.js"></script>\n      </body>\n    </html>\n  '};return t.template}var l=n(1),a=r(l),u=n(27),f=n(18),c=r(f),s=n(2),p=n(24),d=n(26),v=n(23),y=n(25),h="../../../../docs",b=p();b.use(y()),b.use(v.json()),b.use(v.urlencoded({extended:!0})),b.use("/assets",p.static(d.resolve(t,h,"public/assets/"))),b.get("/*",o),b.use(function(e,t,n){console.log("req.url: ",e.url);var r=new Error("Not found");r.status=404,n(r)}),b.use(function(e,t,n,r){404===e.status&&n.status(404).send("Sorry nothing here for now..."),console.error(e),n.status(500).send("internal server error")}),b.set("port",8083),b.set("ipAdress","localhost"),b.listen(b.get("port"),b.get("ipAdress"),function(){return console.log("Production server 🏃 (running) on "+b.get("ipAdress")+":"+b.get("port")+"'")}),e.exports=b}).call(t,"src/server/SSR/src")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("classnames")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BackToTop=t.NavigationBar=t.Jumbotron=void 0;var o=n(10),i=r(o),l=n(11),a=r(l),u=n(6),f=r(u);t.Jumbotron=i.default,t.NavigationBar=a.default,t.BackToTop=f.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(3)),s=r(c),p=500,d=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),f=0;f<a;f++)u[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.enterAnimationTimer=null,r.state={animated:!0,viewEnters:!1},l=n,i(r,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.delay;this.enterAnimationTimer=setTimeout(function(){return e.setState({viewEnters:!0})},t)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.enterAnimationTimer)}},{key:"render",value:function(){var e=this.state,t=e.animated,n=e.viewEnters,r=this.props.children;return a("section",{className:(0,s.default)({content:!0,invisible:!n&&t,"view-enter":n&&t})},void 0,r)}}]),t}(f.PureComponent);d.defaultProps={delay:p},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(9)),s=n(7),p=r(s),d=n(28),v=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),f=0;f<a;f++)u[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.defaultProps={minScrollY:120},r.state={windowScrollY:0,showBackButton:!1},r.handleWindowScroll=function(){if(!$)throw"BackToTop component requires jQuery";var e=r.state.windowScrollY,t=r.props.minScrollY,n=$(window).scrollTop();if(e!==n){var o=n>=t;r.setState({windowScrollY:n,showBackButton:o})}},r.scrollDone=function(){var e=r.props.onScrollDone;e&&e()},r.handlesOnBackButtonClick=function(e){e.preventDefault();var t=r.props,n=t.scrollTo,o=t.minScrollY,i=r.state.windowScrollY;i&&i>o&&c.smoothScroll.scrollTo(n,r.scrollDone)},l=n,i(r,l)}return l(t,e),u(t,[{key:"componentWillMount",value:function(){window.addEventListener("scroll",this.handleWindowScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleWindowScroll)}},{key:"render",value:function(){var e=this,t=this.state.showBackButton;return a(d.Motion,{style:{x:(0,d.spring)(t?0:120)}},void 0,function(t){var n=t.x;return a(p.default,{position:"bottom-right",onClick:e.handlesOnBackButtonClick,motionStyle:{WebkitTransform:"translate3d("+n+"px, 0, 0)",transform:"translate3d("+n+"px, 0, 0)"}})})}}]),t}(f.Component);t.default=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom-right",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=l({},t);switch(e){case"bottom-right":return n.right=d,n.left="",n;case"bottom-left":return n.right="",n.left=d,n;default:return t}}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=(r(a),n(3)),f=r(u),c=n(8),s=r(c),p="#4A4A4A",d="-10px",v="40px",y="100px",h=10,b=.5,m={position:"fixed",right:d,left:"",bottom:v,width:y,zIndex:h,opacity:b,backgroundColor:p},_=i(s.default,{color:"#F1F1F1"}),w=function(e){var t=e.onClick,n=e.position,r=e.children,a=e.motionStyle,u=o(n,l({},a,m));return i("button",{style:u,className:(0,f.default)({btn:!0}),onClick:t},void 0,!r&&i("div",{style:{marginRight:"10px"}},void 0,_),!!r&&r)};w.defaultProps={position:"bottom-right"},t.default=w},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),o("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"})),a=function(e){var t=e.color;return o("svg",{width:"24px",height:"24px",viewBox:"0 0 512 512",fill:""+t},void 0,l)};a.defaultProps={color:"#F1F1F1"},t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.smoothScroll={timer:null,stop:function(){clearTimeout(this.timer)},scrollTo:function(e,t){function n(){var e=void 0,i=Date.now()-h;i>r.duration&&clearTimeout(this.timer),o=i/r.duration,o>1?(clearTimeout(this.timer),t&&t()):(e=r.easing.outQuint(0,i,p,y,r.duration),window.scrollTo(0,e),this.timer=setTimeout(n,10))}var r={duration:1e3,easing:{outQuint:function(e,t,n,r,o){return r*((t=t/o-1)*t*t*t*t+1)+n}}},o=void 0,i=document.getElementById(e),l=i.offsetTop,a=i.offsetHeight,u=document.body,f=document.documentElement,c=Math.max(u.scrollHeight,u.offsetHeight,f.clientHeight,f.scrollHeight,f.offsetHeight),s=window.innerHeight,p=window.pageYOffset,d=l-p,v=c-s,y=v<d?v-(c-l-a+p):d,h=Date.now();o=0,this.timer&&clearInterval(this.timer),this.timer=setTimeout(n,10)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),function(e){return o("div",{className:"jumbotron"},void 0,e.children)});t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),n(12)),a=r(l),u=n(13),f=r(u),c=n(15),s=r(c),p=o(a.default,{}),d=function(e){var t=e.brand,n=e.navModel,r=e.handleLeftNavItemClick,i=e.handleRightNavItemClick;return o("nav",{className:"navbar navbar-default"},void 0,o("div",{className:"containersCustom"},void 0,o("div",{className:"navbar-header"},void 0,p,o("a",{className:"navbar-brand"},void 0,t)),o("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},void 0,o("ul",{className:"nav navbar-nav"},void 0,o(f.default,{leftLinks:n.leftLinks,onLeftNavButtonClick:r})),o("ul",{className:"nav navbar-nav navbar-right"},void 0,o(s.default,{rightLinks:n.rightLinks,onRightNavButtonClick:i})))))};d.defaultProps={brand:"brand"},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),o("button",{className:"navbar-toggle collapsed",type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"},void 0,o("span",{className:"sr-only"},void 0,"Toggle navigation"),o("span",{className:"icon-bar"}),o("span",{className:"icon-bar"}),o("span",{className:"icon-bar"}))),a=function(){return l};t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),n(14)),a=r(l),u=function(e){var t=e.leftLinks,n=e.onLeftNavButtonClick;return o("ul",{className:"nav navbar-nav"},void 0,t.map(function(e,t){return o(a.default,{link:e.link,label:e.label,viewName:e.view,onClick:n},t)}))};t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(2)),s=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),f=0;f<a;f++)u[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleLeftNavItemClick=function(e){var t=r.props,n=t.onClick,o=t.viewName;n(e,o)},l=n,i(r,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.label;return a("li",{},void 0,a(c.Link,{to:t,onClick:this.handleLeftNavItemClick},void 0,n))}}]),t}(f.PureComponent);t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),n(16)),a=r(l),u=function(e){var t=e.rightLinks,n=e.onRightNavButtonClick;return o("ul",{className:"nav navbar-nav navbar-right"},void 0,t.map(function(e,t){return o(a.default,{link:e.link,label:e.label,viewName:e.view,onClick:n},t)}))};t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(2)),s=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),f=0;f<a;f++)u[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleRightNavItemClick=function(e){var t=r.props,n=t.onClick,o=t.viewName;n(e,o)},l=n,i(r,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.label;return a("li",{},void 0,a(c.Link,{to:t,onClick:this.handleRightNavItemClick},void 0,n))}}]),t}(f.PureComponent);t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(4)),s=n(22),p=r(s),d=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),f=0;f<a;f++)u[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={navModel:p.default},r.handleLeftNavItemClick=function(e,t){},r.handleRightNavItemClick=function(e,t){},l=n,i(r,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.state.navModel,t=this.props.children;return a("div",{id:"appContainer"},void 0,a(c.NavigationBar,{brand:e.brand,navModel:e,handleLeftNavItemClick:this.handleLeftNavItemClick,handleRightNavItemClick:this.handleRightNavItemClick}),a("div",{className:"container-fluid"},void 0,t))}}]),t}(f.Component);t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(1),l=(r(i),n(2)),a=n(17),u=r(a),f=n(21),c=o(l.Route,{path:"/",component:u.default},void 0,o(l.IndexRoute,{component:f.Home}),o(l.Route,{path:"/about",component:f.About})),s=function(){return c};t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(5)),s=r(c),p=a(s.default,{},void 0,a("h1",{},void 0,"About")),d=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){return p}}]),t}(f.PureComponent);t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var a in i)void 0===n[a]&&(n[a]=i[a]);else n||(n=i||{});if(1===l)n.children=o;else if(l>1){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=(r(f),n(4)),s=n(3),p=r(s),d=n(2),v=a(c.Jumbotron,{},void 0,a("h1",{},void 0,"Full ES2015 ReactJS + Bootstrap"),a("h2",{},void 0,"with Hot Reload!!!"),a("h2",{},void 0,"with React Router (SPA)"),a("h1",{},void 0,"Starter"),a("p",{},void 0,a(d.Link,{className:"btn btn-success btn-lg",to:"/about"},void 0,a("i",{className:"fa fa-info"}),"  go to about"))),y=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),f=0;f<a;f++)u[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={animated:!0,viewEntersAnim:!0},l=n,i(r,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.state,t=e.animated,n=e.viewEntersAnim;return a("div",{className:(0,p.default)({animatedViews:t,"view-enter":n})},"homeView",v)}}]),t}(f.PureComponent);t.default=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Home=t.About=void 0;var o=n(19),i=r(o),l=n(20),a=r(l);t.About=i.default,t.Home=a.default},function(e,t){e.exports={brand:"React Bootstrap Starter",leftLinks:[],rightLinks:[{label:"Home",link:"/"},{label:"About",link:"/about"}]}},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-motion")}]);