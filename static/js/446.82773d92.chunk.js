"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[446],{446:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var a,r,o,i,s=t(885),p=t(2791),d=t(168),x=t(9584),l=x.Z.button(a||(a=(0,d.Z)(["\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  position: relative;\n  display: inline-block;\n  padding: 15px 10px;\n  margin: 40px 0;\n  font-size: 24px;\n  text-decoration: none;\n  /* text-transform: uppercase; */\n  overflow: hidden;\n  transition: 0.5s;\n  letter-spacing: 3px;\n  border-radius: 8px;\n  /* background: #0052fe; */\n  background-color: rgb(237, 237, 237);\n  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);\n  -webkit-box-reflect: below -3px linear-gradient(transparent, #0005);\n  color: black;\n  &:hover {\n    background-color: #03e9f4;\n    color: #050801;\n    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,\n      0 0 200px #03e9f4;\n  }\n  & span {\n    position: absolute;\n    display: block;\n  }\n  & span:nth-of-type(1) {\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(90deg, transparent, grey);\n    animation: animation1 1s linear infinite;\n    animation-delay: 0.25s;\n  }\n  & span:nth-of-type(2) {\n    top: -100;\n    right: 0%;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(180deg, transparent, grey);\n    animation: animation2 1s linear infinite;\n    animation-delay: 0.25s;\n  }\n  & span:nth-of-type(3) {\n    bottom: 0;\n    right: -100%;\n    width: 100%;\n    height: 2px;\n    background: linear-gradient(270deg, transparent, grey);\n    animation: animation3 1s linear infinite;\n    animation-delay: 0.5s;\n  }\n  & span:nth-of-type(4) {\n    bottom: -100%;\n    left: 0;\n    width: 2px;\n    height: 100%;\n    background: linear-gradient(360deg, transparent, grey);\n    animation: animation4 1s linear infinite;\n    animation-delay: 0.75s;\n  }\n"]))),u=t(184),c=function(){return(0,u.jsxs)(l,{type:"submit",children:[(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),(0,u.jsx)("span",{}),"Add contact"]})},b=x.Z.label(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  color: var(--text);\n  font-size: 25px;\n"]))),g=x.Z.input(o||(o=(0,d.Z)(["\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  flex: 0 1 50vw;\n  height: 30px;\n  margin: 12px 0;\n  position: relative;\n  transition: background linear 0.27s, box-shadow linear 0ms 0.27s;\n  white-space: nowrap;\n  background: #fff;\n  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);\n  -webkit-box-shadow: 0 10px 6px -6px #777;\n  -moz-box-shadow: 0 10px 6px -6px #777;\n  border: 1px solid rgb(237, 237, 237);\n  /* box-shadow: 0px 5px 10px 0px rgba(0, 255, 255, 0.7); */\n  opacity: 1;\n  visibility: visible;\n  flex-basis: auto;\n  flex-grow: 1;\n  padding-left: 10px;\n  &:focus-visible {\n    outline: none;\n  }\n"]))),f=function(n){var e=n.value,t=n.onChange;return(0,u.jsxs)(b,{children:["Name",(0,u.jsx)(g,{type:"text",name:"name",onChange:t,value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},m=function(n){var e=n.value,t=n.onChange;return(0,u.jsxs)(b,{children:["Number",(0,u.jsx)(g,{type:"tel",name:"number",onChange:t,value:e,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})},h=x.Z.form(i||(i=(0,d.Z)(['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n  width: 60%;\n  /* background-color: rgba(123, 128, 135, 0.5); */\n  /* background-color: rgba(0, 0, 0, 1); */\n  background: var(--form);\n  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);\n  /* box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%); */\n  border-radius: 8px;\n  font-family: "Rampart One", cursive;\n  position: relative;\n  color: var(--text);\n  &:before,\n  &:after {\n    z-index: -1;\n    position: absolute;\n    content: "";\n    bottom: 25px;\n    left: 10px;\n    width: 50%;\n    top: 80%;\n    max-width: 300px;\n    background: #777;\n    -webkit-box-shadow: 0 35px 20px #777;\n    -moz-box-shadow: 0 35px 20px #777;\n    box-shadow: 0 35px 20px #777;\n    -webkit-transform: rotate(-8deg);\n    -moz-transform: rotate(-8deg);\n    -o-transform: rotate(-8deg);\n    -ms-transform: rotate(-8deg);\n    transform: rotate(-8deg);\n  }\n  &:after {\n    -webkit-transform: rotate(8deg);\n    -moz-transform: rotate(8deg);\n    -o-transform: rotate(8deg);\n    -ms-transform: rotate(8deg);\n    transform: rotate(8deg);\n    right: 10px;\n    left: auto;\n  }\n']))),w=t(9434),v=t(8743),y=t(5568),k=t(2667);var j,Z=function(){var n=(0,p.useState)(""),e=(0,s.Z)(n,2),t=e[0],a=e[1],r=(0,p.useState)(""),o=(0,s.Z)(r,2),i=o[0],d=o[1],x=(0,w.v9)(k.QY),l=(0,w.I0)(),b=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":d(r);break;default:return}},g=function(){a(""),d("")};return(0,u.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e={name:t,number:i,id:""},a=n.target;if(e.name=a.name.value,e.number=a.number.value,e.id=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}(),x.some((function(n){return e.name===n.name})))return y.Am.error("already has"),void g();l((0,v.uK)(e)),y.Am.success("success"),g()},children:[(0,u.jsx)(f,{value:t,onChange:b}),(0,u.jsx)(m,{value:i,onChange:b}),(0,u.jsx)(c,{})]})},C=x.Z.div(j||(j=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),z=function(){return(0,u.jsxs)(C,{children:[(0,u.jsx)(Z,{}),(0,u.jsx)(y.Ix,{autoClose:1e3})]})}}}]);
//# sourceMappingURL=446.82773d92.chunk.js.map