(this.webpackJsonpmarch=this.webpackJsonpmarch||[]).push([[8],{162:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},177:function(e,t,n){"use strict";n.r(t);var r=n(162),a=n(0),o=n.n(a),c=n(2);n(178);t.default=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],u=t[1],i=Object(a.useState)(""),s=Object(r.a)(i,2),l=s[0],m=s[1],f=function(){n.length>10&&-1===n.indexOf("@")?m("Form sent"):m("The message cannot be shorter than 10 characters and cannot contain @")};return o.a.createElement("div",{className:"me"},o.a.createElement("h1",{className:"hMe"},"Write a message:"),l&&o.a.createElement("span",null,l),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f(),u(""),setTimeout((function(){m("")}),3e3)},className:"formMe",noValidate:!0},o.a.createElement("textarea",{onChange:function(e){m(""),u(e.target.value)},className:"formMe__textarea",placeholder:"Write here.",value:n}),o.a.createElement("button",{className:"formMe__button",type:"submit"},"Send a message")),o.a.createElement(c.a,{when:!!n,message:"You haven't sent the form."}))}},178:function(e,t,n){}}]);
//# sourceMappingURL=8.b81489e5.chunk.js.map