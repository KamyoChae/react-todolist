(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(7),r=n.n(c),i=n(1),s=n(2),o=n(4),u=n(3),d=n(5),m=n(8),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).closeHandle=function(){n.props.delete(n.props.itemIndex)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",null,l.a.createElement("i",{className:"indexnum"},this.props.itemIndex+1),this.props.text,l.a.createElement("i",{className:"close",onClick:this.closeHandle})))}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={list:[],inputValue:""},n.handleChange=function(e){var t=e.target.value;n.setState({inputValue:t})},n.addhandle=function(){n.setState({list:[].concat(Object(m.a)(n.state.list),[n.state.inputValue])})},n.deleteHandle=function(e){var t=n.state.list;t.splice(e,1),n.setState({list:t})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"todohead"},l.a.createElement("input",{type:"text",onChange:this.handleChange.bind(this)}),l.a.createElement("button",{onClick:this.addhandle.bind(this)},"\u63d0\u4ea4")),l.a.createElement("ul",{className:"itemlist"},this.state.list.map(function(t,n){return l.a.createElement(p,{text:t,itemIndex:n,key:n,delete:e.deleteHandle.bind(e)})})))}}]),t}(a.Component);var b=function(){return l.a.createElement("h1",{className:"logo"}," TODOLIST ")},f=(n(15),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(b,null),l.a.createElement(h,null))}}]),t}(a.Component));r.a.render(l.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.54c460ca.chunk.js.map