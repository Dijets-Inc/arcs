import{p as r,d as c,i as d,c as l,n as p,a as s,e as u,u as v,t as h,H as i,S as m,V as f,o as _,_ as C}from"./index-HeIrib_o.js";/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),D=["aria-expanded"],S=c({__name:"Disclosure",props:{title:{},open:{type:Boolean}},setup(a){const e=d(!!a.open),o=`disc-${Math.random().toString(36).slice(2,8)}`;return(t,n)=>(_(),l("div",{class:p(["disc",{open:e.value}])},[s("button",{type:"button",class:"head","aria-expanded":e.value,"aria-controls":o,onClick:n[0]||(n[0]=k=>e.value=!e.value)},[u(v(y),{size:15,class:"chev","aria-hidden":"true"}),s("span",null,h(a.title),1),i(t.$slots,"aside",{},void 0)],8,D),m(s("div",{id:o,class:"body"},[i(t.$slots,"default",{},void 0)],512),[[f,e.value]])],2))}}),$=C(S,[["__scopeId","data-v-99276a7d"]]);export{y as C,$ as D};
