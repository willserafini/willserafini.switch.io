import{d as u,aw as z,l as o,c as n,m as c,T as f,I as v,J as h,n as _,D as p,e as m,C,q as b,x as S,cb as g,cc as w}from"./main-A7BwrMDB.js";import{_ as d}from"./_plugin-vue_export-helper-x3n3nnut.js";const $={class:"container-avatar"},I=u({__name:"GlobalContainerAvatar",props:{radius:{},containerSize:{},backgroundColor:{}},setup(a){z(r=>({"2931b043":i.value,"4ab92da0":t.value,"3ad1bf53":s.value}));const e=a,i=o(()=>`var(--${e.backgroundColor})`),t=o(()=>`${e.radius}px`),s=o(()=>`${e.containerSize}px`);return(r,l)=>(n(),c("div",$,[f(r.$slots,"default",{},void 0,!0)]))}}),x=d(I,[["__scopeId","data-v-7dbfbe9a"]]),y=a=>(v("data-v-f292bef1"),a=a(),h(),a),k=["width","height"],B=y(()=>_("path",{d:"M7.99941 8.00019C8.62242 8.00019 9.23144 7.81545 9.74946 7.46932C10.2675 7.1232 10.6712 6.63124 10.9096 6.05565C11.148 5.48006 11.2104 4.8467 11.0889 4.23566C10.9673 3.62462 10.6673 3.06335 10.2268 2.62281C9.78626 2.18227 9.22499 1.88227 8.61395 1.76072C8.00291 1.63918 7.36955 1.70156 6.79396 1.93998C6.21837 2.17839 5.72641 2.58214 5.38028 3.10015C5.03416 3.61816 4.84941 4.22718 4.84941 4.8502C4.84941 5.68563 5.18129 6.48684 5.77203 7.07758C6.36277 7.66832 7.16398 8.00019 7.99941 8.00019ZM7.99941 8.90019C6.04698 8.90019 2.14941 10.1062 2.14941 12.5002V14.3002H13.8494V12.5002C13.8494 10.1062 9.95185 8.90019 7.99941 8.90019Z",fill:"white"},null,-1)),A=[B],V=u({__name:"IPerson",props:{size:{},color:{default:"bg-element"}},setup(a){z(s=>({"51a2b440":i.value,da3bf71a:t.value}));const e=a,i=o(()=>`${e.size}px`),t=o(()=>`var(--${e.color})`);return(s,r)=>(n(),c("svg",{width:s.size,height:s.size,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A,8,k))}}),G=d(V,[["__scopeId","data-v-f292bef1"]]),M=["src"],N=u({__name:"BaseAvatar",props:{status:{default:void 0},size:{default:"1rem"},src:{default:""},name:{default:""},rounded:{type:Boolean,default:!1}},setup(a){const e=a,i=o(()=>{const s=g(e.size),r=w(e.size),l=parseInt(s,10)*.333;return{width:e.size,height:e.size,fontSize:`${l}${r}`,borderRadius:`${t.value.radius}px`}}),t=o(()=>{switch(e.size){case"1.25rem":return{size:"20",radius:"4",iconSize:"12"};case"1.5rem":return{size:"24",radius:"5",iconSize:"15"};case"2rem":return{size:"32",radius:"5",iconSize:"18"};case"2.25rem":return{size:"36",radius:"8",iconSize:"21"};default:return{size:"16",radius:"4",iconSize:"9"}}});return(s,r)=>(n(),c("figure",{class:"avatar",style:p(i.value)},[s.src!=="undefined"?(n(),c("img",{key:0,src:s.src,style:p({width:e.size,height:e.size})},null,12,M)):(n(),m(x,{key:1,"background-color":"type-directory",radius:t.value.radius,"container-size":t.value.size},{default:C(()=>[b(G,{size:t.value.iconSize},null,8,["size"])]),_:1},8,["radius","container-size"])),_("div",{class:S([e.status?`status ${e.status}`:""]),style:{"z-index":"2"}},null,2)],4))}}),Z=d(N,[["__scopeId","data-v-b0cfa7cc"]]);export{Z as B,x as G,G as I};
//# sourceMappingURL=BaseAvatar-cLayq0TK.js.map