(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),u=a(2),o=a(1),i=a.n(o),s=a(3),m=a(4),p=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi-trybe.herokuapp.com/api/planets/",e.prev=1,e.next=4,fetch("https://swapi-trybe.herokuapp.com/api/planets/");case 4:return t=e.sent,a=t.json(),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,n=a.json(),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(e,t){return e.results.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},b=function(e,t){var a=t.comparison,n=t.column,r=t.value;switch(a){case"maior que":return e.filter((function(e){return Number(e[n])>Number(r)}));case"menor que":return e.filter((function(e){return Number(e[n])<Number(r)}));case"igual a":return e.filter((function(e){return Number(e[n])===Number(r)}));default:return"Operador Inv\xe1lido"}},v=Object(n.createContext)(),E=function(e){var t=e.children,a=Object(n.useState)({}),c=Object(m.a)(a,2),l=c[0],o=c[1],b=Object(n.useState)([]),E=Object(m.a)(b,2),h=E[0],j=E[1],O=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a=d(t,""),o(t),w(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.films.map(function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:return a=e.sent,e.abrupt("return",a.title);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return a=e.sent,e.abrupt("return",Object(u.a)(Object(u.a)({},t),{},{films:a}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:a=e.sent,j(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O()}),[]);var x={data:l,planetsToRender:h,setPlanetsToRender:j};return r.a.createElement(v.Provider,{value:x},t)},h={name:""},j=function(){var e=Object(n.useState)(h),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(v),o=l.setPlanetsToRender,i=l.data;return r.a.createElement("input",{className:"search_input",type:"text","data-testid":"name-filter",placeholder:"Search",value:a.name,onChange:function(e){return function(e){c(Object(u.a)(Object(u.a)({},a),e));var t=d(i,e.name);o(t)}({name:e.target.value})}})},O=function(){var e=Object(n.useContext)(v),t=e.data.results,a=e.planetsToRender;return t?r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table_head"},r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Rotation Period"),r.a.createElement("th",null,"Orbital Period"),r.a.createElement("th",null,"Diameter"),r.a.createElement("th",null,"Climate"),r.a.createElement("th",null,"Gravity"),r.a.createElement("th",null,"Terrain"),r.a.createElement("th",null,"Surface Water"),r.a.createElement("th",null,"Population"),r.a.createElement("th",null,"Films"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Edited"),r.a.createElement("th",null,"URL"))),r.a.createElement("tbody",{className:"table_body"},a.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",{className:"planet_name"},e.name),r.a.createElement("td",null,e.rotation_period),r.a.createElement("td",null,e.orbital_period),r.a.createElement("td",null,e.diameter),r.a.createElement("td",null,e.climate),r.a.createElement("td",null,e.gravity),r.a.createElement("td",null,e.terrain),r.a.createElement("td",null,e.surface_water),r.a.createElement("td",null,e.population),r.a.createElement("td",null,e.films),r.a.createElement("td",null,e.created),r.a.createElement("td",null,e.edited),r.a.createElement("td",null,e.url))})))):r.a.createElement("p",null,"Loading...")},w=a(7),x=["population","orbital_period","diameter","rotation_period","surface_water"],y={column:"population",comparison:"maior que",value:0},N=function(){var e=Object(n.useState)(y),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(x),o=Object(m.a)(l,2),i=o[0],s=o[1],p=Object(n.useState)([]),f=Object(m.a)(p,2),d=f[0],E=f[1],h=Object(n.useContext)(v),j=h.setPlanetsToRender,O=h.data,N=h.planetsToRender,g=function(e){c(Object(u.a)(Object(u.a)({},a),e))};return r.a.createElement("section",{className:"filter_section"},r.a.createElement("select",{className:"filter_select","data-testid":"column-filter",onChange:function(e){return g({column:e.target.value})}},i.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("select",{className:"filter_select","data-testid":"comparison-filter",onChange:function(e){return g({comparison:e.target.value})}},r.a.createElement("option",{value:"maior que"},"maior que"),r.a.createElement("option",{value:"menor que"},"menor que"),r.a.createElement("option",{value:"igual a"},"igual a")),r.a.createElement("input",{className:"filter_input","data-testid":"value-filter",type:"number",value:a.value,onChange:function(e){return g({value:e.target.value})}}),r.a.createElement("button",{className:"filter_button","data-testid":"button-filter",type:"button",onClick:function(){if(d.length>0){var e=b(N,a);E([].concat(Object(w.a)(d),[a])),j(e)}else{var t=b(O.results,a);E([].concat(Object(w.a)(d),[a])),j(t)}!function(){var e=i.filter((function(e){return e!==a.column}));s(e);var t={column:e[0]};c(Object(u.a)(Object(u.a)({},a),t))}()}},"Apply Filter"),d.map((function(e){return r.a.createElement("div",{key:e.column},r.a.createElement("span",null,"".concat(e.column," | ").concat(e.comparison," | ").concat(e.value)),r.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=d.filter((function(t){return t!==e}));E(t)}(e)}},"X"))})))};a(16);var g=function(){return r.a.createElement(E,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Projeto StarWars Planets")),r.a.createElement("div",{className:"filter_div"},r.a.createElement(j,null),r.a.createElement(N,null)),r.a.createElement(O,null))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fe0ebf63.chunk.js.map