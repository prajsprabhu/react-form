(this["webpackJsonpmy-form"]=this["webpackJsonpmy-form"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),o=n.n(s),c=n(7),r=n.n(c),i=n(2),l=n(3),j=n(5),b=n(4),u=n(8),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(u.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){alert("".concat(a.state.username," ").concat(a.state.password," ").concat(a.state.email)),e.preventDefault()},a.state={username:"",password:"",email:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password,s=e.email;return Object(a.jsx)("form",{onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:["Username",Object(a.jsx)("input",{type:"text",name:"username",value:t,onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Password",Object(a.jsx)("input",{type:"password",name:"password",value:n,onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Email",Object(a.jsx)("input",{type:"email",name:"email",value:s,onChange:this.handleChange})]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{type:"Submit",children:"Submit"}),Object(a.jsx)("br",{})]})})}}]),n}(s.Component),d=n(9),m=n.n(d),p=n(10),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).responseFacebook=function(e){console.log(e),a.setState({isLoggedIn:!0})},a.responseGoogle=function(e){console.log(e),console.log(e.profileObj)},a.state={isLoggedIn:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return this.state.isLoggedIn?"Home":Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p.GoogleLogin,{clientId:"676551334787-a6h59fbo2v1vvjgr75nllt3uk3ugj6ej.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}),Object(a.jsx)(m.a,{appId:"209557620907440",autoLoad:!0,fields:"name,email,picture",callback:this.responseFacebook}),",",Object(a.jsx)(h,{})]})}}]),n}(s.Component);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cac14740.chunk.js.map