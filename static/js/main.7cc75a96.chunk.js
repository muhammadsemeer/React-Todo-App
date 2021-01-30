(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),s=n(1),c=n(2),l=n(4),m=n(3),u=(n(13),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"footer"},o.a.createElement("h3",null,"Developed By ",o.a.createElement("span",null,"Muhammad Semeer"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/muhammadsemeer/React-Todo-App",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-github"})),"\xa0",o.a.createElement("a",{href:"https://www.instagram.com/dream_dev_/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"fab fa-instagram"}))))}}]),n}(a.Component)),d=n(7),f=(n(14),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={input:"",items:[],message:"",temp:"",keyref:"",addDisp:"block",editDisp:"none",textDec:"none"},e.preventRefresh=function(e){e.preventDefault()},e.timer=function(){setTimeout((function(){e.setState({message:""})}),2e3)},e.handleChange=function(t){e.setState({input:t.target.value})},e.storeItems=function(){var t=e.state.input;if(""===t)e.setState({message:"Enter Something to Add"}),e.timer();else{var n=t+" Added to list";e.setState({message:n,items:[].concat(Object(d.a)(e.state.items),[{val:t,status:"notcompleted"}]),input:""}),e.timer()}},e.deleteItem=function(t){var n=e.state.items[t].val+" deleted from list";e.setState({message:n,items:e.state.items.filter((function(e,n){return n!==t}))}),e.timer()},e.editItem=function(t){var n=e.state.items;e.setState({input:n[t].val,keyref:t,addDisp:"none",editDisp:"block"})},e.updateItem=function(){var t=e.state,n=t.items,a=t.input,o=t.keyref,r=n;if(""!==a){var i=n[o].val+" is edited to "+a;r[o].val=a,e.setState({message:i,items:r,input:"",keyref:"",editDisp:"none",addDisp:"block"}),e.timer()}else e.setState({message:"Items Can't Empty"}),e.timer()},e.complete=function(t){var n=e.state.items,a=n;a.map((function(o,r){if(t===r)if("notcompleted"===a[t].status){a[t].status="completed";var i=a[t].val+" Completed";e.setState({items:a,message:i}),e.timer()}else a[t].status="notcompleted",i=a[t].val+"  uncompleted",e.setState({items:a,message:i}),e.timer();return n}))},e.saveTodo=function(){var t=e.state.items;localStorage.setItem("todo",JSON.stringify(t))},e.getTodo=function(){if(null===localStorage.getItem("todo"))localStorage.setItem("todo",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todo"));e.setState({items:t})}},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.getTodo()}},{key:"componentDidUpdate",value:function(){this.saveTodo()}},{key:"render",value:function(){var e=this,t=this.state,n=t.input,a=t.items,r=t.message,i=t.addDisp,s=t.editDisp;return o.a.createElement("div",{className:"todo-container"},o.a.createElement("form",{className:"input-form",onSubmit:this.preventRefresh},o.a.createElement("h1",null,"Todo App"),o.a.createElement("p",null,r),o.a.createElement("div",{className:"input-section"},o.a.createElement("input",{type:"text",value:n,onChange:this.handleChange,placeholder:"Enter Items"}),o.a.createElement("button",{type:"button",onClick:this.storeItems,style:{display:i}},o.a.createElement("i",{className:"fas fa-plus"})),o.a.createElement("button",{type:"button",onClick:this.updateItem,style:{display:s}},o.a.createElement("i",{className:"fas fa-check"})))),o.a.createElement("div",{className:"todo-items"},o.a.createElement("ul",null,a.map((function(t,n){return o.a.createElement("li",{key:n},o.a.createElement("i",{className:"fas fa-check-square",onClick:function(){return e.complete(n)}}),o.a.createElement("span",{className:t.status},t.val),o.a.createElement("i",{className:"fas fa-pencil-alt",onClick:function(){return e.editItem(n)}}),o.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){return e.deleteItem(n)}}))})))))}}]),n}(a.Component)),p=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,null),o.a.createElement(u,null))}}]),n}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Todo-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React-Todo-App","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7cc75a96.chunk.js.map