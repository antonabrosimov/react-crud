(this["webpackJsonpreact-accounts"]=this["webpackJsonpreact-accounts"]||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(18),m=t.n(c),r=(t(27),t(21)),o=t(9),i=t(4),s=t(7),u=(t(28),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(i.b,{className:"navbar-brand",to:"#/"},"Accounts App"),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{to:"#/",exact:!0,activeClassName:"activeLink",className:"nav-link"},"Accounts")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{to:"#/add",activeClassName:"activeLink",className:"nav-link"},"Add Accounts")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.c,{to:"#/edit",activeClassName:"activeLink",className:"nav-link"},"Edit/Delete"))))}),E=function(e){var a=e.account,t=e.edit,n=e.deleteAccount,c=t?l.a.createElement(l.a.Fragment,null,l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){return n(a.id)},className:"btn btn-danger"},"Delete")),l.a.createElement("td",null,l.a.createElement(i.b,{to:"/edit/".concat(a.id),className:"btn btn-warning"},"Edit"))):null;return l.a.createElement("tr",null,l.a.createElement("td",null,a.id),l.a.createElement("td",null,a.name),l.a.createElement("td",null,a.lastname),l.a.createElement("td",null,a.phone),l.a.createElement("td",null,a.email),c)},d=function(e){var a=e.accounts.map((function(e){return l.a.createElement(E,{account:e,key:e.id})}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("h3",{className:"display-4 m-4"},"Accounts"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Lastname"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,a)))))))},f=t(5);var v=Object(s.f)((function(e){var a=Object(n.useState)({id:"",name:"",lastname:"",phone:"",email:""}),t=Object(o.a)(a,2),c=t[0],m=t[1],r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current.focus()}),[]),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("h2",{className:"display-4 m-4"},"Add Account"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{id:e.target.value}))},type:"text",ref:r,placeholder:"id",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{name:e.target.value}))},type:"text",placeholder:"name",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{lastname:e.target.value}))},type:"text",placeholder:"lastname",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{phone:e.target.value}))},type:"text",name:"phone",id:"phone",placeholder:"phone",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{email:e.target.value}))},type:"email",placeholder:"email",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.addNewAccountToSate(c),e.history.push("/")},className:"btn btn-primary form-control"},"Save"))))))})),h=function(e){var a=e.accounts,t=e.deleteAccount,n=a.map((function(e){return l.a.createElement(E,{account:e,key:e.id,edit:!0,deleteAccount:t})}));return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("h3",{className:"display-4 m-4"},"Accounts"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"id"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Lastname"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Action"),l.a.createElement("th",null,"Action"))),l.a.createElement("tbody",null,n)))))))};var p=Object(s.f)((function(e){var a=Object(n.useState)(e.accounts.filter((function(a){return a.id==e.match.params.id}))[0]),t=Object(o.a)(a,2),c=t[0],m=t[1];return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("h2",{className:"display-4 m-4"},"Edit Account"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 offset-1"},l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{name:e.target.value}))},value:c.name,type:"text",name:"name",id:"name",placeholder:"name",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{lastname:e.target.value}))},value:c.lastname,type:"text",name:"lastname",id:"lastname",placeholder:"lastname",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{phone:e.target.value}))},value:c.phone,type:"text",name:"phone",id:"phone",placeholder:"phone",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){m(Object(f.a)({},c,{email:e.target.value}))},value:c.email,type:"email",name:"email",id:"email",placeholder:"email",className:"form-control"}),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){e.editAccount(c),e.history.push("/")},className:"btn btn-info form-control"},"Edit"))))))}));var b=function(){var e=Object(n.useState)([{id:1,name:"Milos",lastname:"Stojanovic",phone:"11-11-11",email:"stojanovic@gmail.com"},{id:2,name:"Ivan",lastname:"Mitic",phone:"22-22-22",email:"iva@gmail.com"},{id:3,name:"Sanja",lastname:"Stosic",phone:"33-33-33",email:"sanja@gmail.com"}]),a=Object(o.a)(e,2),t=a[0],c=a[1];return l.a.createElement(i.a,null,l.a.createElement(u,null),l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(d,{accounts:t})),l.a.createElement(s.a,{path:"/add"},l.a.createElement(v,{addNewAccountToSate:function(e){c([].concat(Object(r.a)(t),[e]))}})),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/edit/:id"},l.a.createElement(p,{accounts:t,editAccount:function(e){var a=t.map((function(e){return e.id})).indexOf(e.id);t[a]=e,c(t)}})),l.a.createElement(s.a,{path:"/edit"},l.a.createElement(h,{accounts:t,deleteAccount:function(e){var a=t.filter((function(a){return a.id!==e}));c(a)}}))))};m.a.render(l.a.createElement(b,null),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4f0d28ed.chunk.js.map