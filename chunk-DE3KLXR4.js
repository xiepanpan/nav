import{a as D}from"./chunk-TE53HV7M.js";import{Ba as f,Ca as u,Cc as S,Dc as I,Hb as m,Hc as T,Jb as o,Mb as y,Td as O,Xb as s,Yb as l,Zb as C,bc as v,ec as b,fd as k,gc as r,gd as w,hb as x,kd as L,lb as c,mb as _,oc as z,od as d,pc as g,qc as h,rc as M,tb as p}from"./chunk-4UKPJFLZ.js";var V=(t,i,e,n,a)=>({width:t,height:i,minWidth:e,minHeight:n,borderRadius:a}),H=(t,i,e,n)=>({width:t,height:i,minWidth:e,minHeight:n});function R(t,i){if(t&1&&C(0,"img",2),t&2){let e=r();o("src",e.src,x)("ngStyle",I(3,V,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px",e.radius+"px"))("alt",e.name?e.name[0]:"")}}function U(t,i){if(t&1&&(s(0,"div",3),g(1),l()),t&2){let e=r();o("ngStyle",S(2,H,e.size===0?"":e.size+"px",e.size===0?"":e.size+"px",e.size+"px",e.size+"px")),c(),M(" ",e.name?e.name[0]:""," ")}}var F=class t{src="";name="";size=35;radius=3;check=!0;constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-logo"]],inputs:{src:"src",name:"name",size:"size",radius:"radius",check:"check"},decls:3,vars:2,consts:[["noSrc",""],["class","icon common-icon","draggable","false","loading","lazy",3,"src","ngStyle","alt",4,"ngIf","ngIfElse"],["draggable","false","loading","lazy",1,"icon","common-icon",3,"src","ngStyle","alt"],[1,"circle","common-icon",3,"ngStyle"]],template:function(e,n){if(e&1&&m(0,R,1,9,"img",1)(1,U,2,7,"ng-template",null,0,T),e&2){let a=z(2);o("ngIf",n.src)("ngIfElse",a)}},dependencies:[d,w,L],styles:['.icon[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:middle;pointer-events:none;background-color:#eee;border-radius:3px;object-fit:cover;transition:all .12s linear}.icon[_ngcontent-%COMP%]:after{content:"" attr(alt);z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;background-color:#1890ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:18px}.circle[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:#1890ff;font-size:18px}'],changeDetection:0})};function $(t,i){if(t&1){let e=v();s(0,"div",2)(1,"span",3),b("click",function(a){let N=f(e).$implicit,j=r();return u(j.jumpService.goUrl(a,N.url))}),g(2),l()()}if(t&2){let e=i.$implicit,n=r();y("background-color: "+(n.tagMap[e.id]&&n.tagMap[e.id].color)),c(2),h(n.tagMap[e.id]&&n.tagMap[e.id].name)}}var P=class t{constructor(i){this.jumpService=i}data=[];tagMap=O;static \u0275fac=function(e){return new(e||t)(_(D))};static \u0275cmp=p({type:t,selectors:[["tag-list"]],inputs:{data:"data"},decls:2,vars:1,consts:[[1,"tagbox"],["class","tag-item",3,"style",4,"ngFor","ngForOf"],[1,"tag-item"],[1,"cursor-pointer",3,"click"]],template:function(e,n){e&1&&(s(0,"div",0),m(1,$,3,3,"div",1),l()),e&2&&(c(),o("ngForOf",n.data))},dependencies:[d,k],styles:[".tagbox[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:6px}.tag-item[_ngcontent-%COMP%]{padding:0 6px;border-radius:2px;font-size:12px;display:flex;align-items:center;transition:all .1s linear;color:#fff}.tag-item[_ngcontent-%COMP%]:hover{opacity:.8}"]})};export{F as a,P as b};
