(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{I6TU:function(n,t,l){"use strict";l.r(t);var a=l("LoAr"),u=function(){},i=l("C9Ky"),e=l("yN5F"),o=l("e8uv"),r=l("981U"),s=l("WT9V"),c=l("TCBR"),p=l("8xy9"),h=l("WLuX"),f=l("NLEP"),d=l("sw3K"),b=function(){return function(n){n&&Object.assign(this,n),n.inputs.length>0&&(this.inputs=n.inputs.map(function(n){return new d.a(n)}))}}(),y=l("pN2L"),g=l("Jg5f"),m=l("IMYO"),v=l("GiBk"),W=l("PIN6"),N=(new v.g({"Content-Type":"application/json"}),function(){function n(n){this.http=n,this.historiesUrl=W.a.API_URL+"api/histories"}return n.prototype.getHistory=function(n){return this.http.get(this.historiesUrl+"/"+n).pipe(Object(g.a)(function(n){return new b(n.history)}),Object(m.a)(this.handleError("getHistory",{})))},n.prototype.getHistoriesByStopId=function(n){return this.http.get(W.a.API_URL+"api/stops/"+n+"/histories").pipe(Object(g.a)(function(n){return n.histories.map(function(n){return new b(n)})}),Object(m.a)(this.handleError("getHistoriesByStopId",[])))},n.prototype.handleError=function(n,t){return void 0===n&&(n="operation"),function(n){return console.error(n),Object(y.a)(t)}},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(v.c))},token:n,providedIn:"root"}),n}()),w=l("0JvR"),O=function(){function n(n,t,l,a){this.route=n,this.router=t,this.historyService=l,this.data=a}return n.prototype.ngOnInit=function(){this.stopId=this.route.parent.snapshot.data.stop.id,this.stopName=this.route.parent.snapshot.data.stop.alpha.nl,this.histories=this.route.snapshot.data.histories},n.prototype.getStopHistories=function(n){var t=this;return this.historyService.getHistoriesByStopId(this.stopId).subscribe(function(n){return t.histories=n})},n.prototype.goToHistoryDetail=function(n){this.router.navigate([n],{relativeTo:this.route})},n}(),I=a.Ma({encapsulation:0,styles:[[".history[_ngcontent-%COMP%]{color:#000;text-decoration:none}"]],data:{}});function S(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,15,"mat-list",[["class","mat-list"]],null,null,null,e.d,e.a)),a.Na(1,49152,null,0,o.a,[],null,null),(n()(),a.Oa(2,0,null,0,11,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"focus"],[null,"blur"]],function(n,t,l){var u=!0;return"focus"===t&&(u=!1!==a.Ya(n,3)._handleFocus()&&u),"blur"===t&&(u=!1!==a.Ya(n,3)._handleBlur()&&u),u},e.c,e.b)),a.Na(3,1097728,null,2,o.b,[a.k,[2,o.e]],null,null),a.eb(603979776,1,{_lines:1}),a.eb(335544320,2,{_avatar:0}),(n()(),a.Oa(6,0,null,2,7,"a",[["class","history"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,t,l){var u=!0;return"click"===t&&(u=!1!==a.Ya(n,7).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&u),u},null,null)),a.Na(7,671744,null,0,r.p,[r.o,r.a,s.i],{routerLink:[0,"routerLink"]},null),a.Za(8,2),(n()(),a.Oa(9,0,null,null,2,"img",[["alt",""],["height","30"],["src","/assets/icons/history.svg"],["width","30"]],null,null,null,null,null)),a.Na(10,278528,null,0,s.p,[a.r,a.k,a.C],{ngStyle:[0,"ngStyle"]},null),a.bb(11,{"vertical-align":0}),(n()(),a.gb(12,null,[" Update of "," "])),a.cb(13,1),(n()(),a.Oa(14,0,null,0,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,c.b,c.a)),a.Na(15,49152,null,0,p.a,[],null,null)],function(n,t){n(t,7,0,n(t,8,0,"./",t.context.$implicit.id)),n(t,10,0,n(t,11,0,"middle"))},function(n,t){n(t,2,0,a.Ya(t,3)._avatar,a.Ya(t,3)._avatar),n(t,6,0,a.Ya(t,7).target,a.Ya(t,7).href),n(t,12,0,a.hb(t,12,0,n(t,13,0,a.Ya(t.parent.parent,0),t.context.$implicit.created_at))),n(t,14,0,a.Ya(t,15).vertical?"vertical":"horizontal",a.Ya(t,15).vertical,a.Ya(t,15).inset)})}function q(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),a.Oa(1,0,null,null,1,"app-navbar",[],null,null,null,h.b,h.a)),a.Na(2,114688,null,0,f.a,[s.h,r.o],{stopId:[0,"stopId"],stopName:[1,"stopName"]},null),(n()(),a.Oa(3,0,null,null,2,"section",[["class","histories"]],null,null,null,null,null)),(n()(),a.Fa(16777216,null,null,1,null,S)),a.Na(5,802816,null,0,s.l,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,2,0,l.stopId,l.stopName),n(t,5,0,l.histories)},null)}function C(n){return a.ib(0,[a.ab(0,s.e,[a.s]),(n()(),a.Fa(16777216,null,null,1,null,q)),a.Na(2,16384,null,0,s.m,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,2,0,t.component.histories)},null)}var j=a.Ka("app-history-list",O,function(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-history-list",[],null,null,null,C,I)),a.Na(1,114688,null,0,O,[r.a,r.o,N,w.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),k=l("GzoC"),Y=l("uZLZ"),x=l("HUvM"),F=l("QXIF"),K=l("5J2o"),L=l("DP0C"),_=l("45Ed"),H=l("ssoK"),M=function(){function n(n){this.route=n}return n.prototype.ngOnInit=function(){this.stopId=this.route.parent.snapshot.data.stop.id,this.stopName=this.route.parent.snapshot.data.stop.alpha.nl,this.historyId=this.route.snapshot.paramMap.get("history_id"),this.history=this.route.snapshot.data.history},n}(),$=a.Ma({encapsulation:0,styles:[[""]],data:{}});function R(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-number",[],null,null,null,k.b,k.a)),a.Na(1,114688,null,0,Y.a,[],{question:[0,"question"],answer:[1,"answer"]},null)],function(n,t){n(t,1,0,t.parent.context.$implicit.question,t.parent.context.$implicit.answer)},null)}function D(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-boolean",[],null,null,null,x.b,x.a)),a.Na(1,114688,null,0,F.a,[],{question:[0,"question"],answer:[1,"answer"]},null)],function(n,t){n(t,1,0,t.parent.context.$implicit.question,t.parent.context.$implicit.answer)},null)}function U(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-multiple",[],null,null,null,K.b,K.a)),a.Na(1,114688,null,0,L.a,[],{question:[0,"question"],answer:[1,"answer"]},null)],function(n,t){n(t,1,0,t.parent.context.$implicit.question,t.parent.context.$implicit.answer)},null)}function B(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-string",[],null,null,null,_.b,_.a)),a.Na(1,114688,null,0,H.a,[],{question:[0,"question"],answer:[1,"answer"]},null)],function(n,t){n(t,1,0,t.parent.context.$implicit.question,t.parent.context.$implicit.answer)},null)}function T(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,10,"a",[["class","inputs"]],null,null,null,null,null)),a.Na(1,16384,null,0,s.q,[],{ngSwitch:[0,"ngSwitch"]},null),a.cb(2,1),(n()(),a.Fa(16777216,null,null,1,null,R)),a.Na(4,278528,null,0,s.r,[a.N,a.K,s.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),a.Fa(16777216,null,null,1,null,D)),a.Na(6,278528,null,0,s.r,[a.N,a.K,s.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),a.Fa(16777216,null,null,1,null,U)),a.Na(8,278528,null,0,s.r,[a.N,a.K,s.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),a.Fa(16777216,null,null,1,null,B)),a.Na(10,278528,null,0,s.r,[a.N,a.K,s.q],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,t){n(t,1,0,a.hb(t,1,0,n(t,2,0,a.Ya(t.parent,0),t.context.$implicit.question.type))),n(t,4,0,"number"),n(t,6,0,"boolean"),n(t,8,0,"multiple"),n(t,10,0,"string")},null)}function V(n){return a.ib(0,[a.ab(0,s.j,[]),(n()(),a.Oa(1,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),a.Oa(2,0,null,null,1,"app-navbar",[],null,null,null,h.b,h.a)),a.Na(3,114688,null,0,f.a,[s.h,r.o],{stopId:[0,"stopId"],stopName:[1,"stopName"],historyDate:[2,"historyDate"]},null),(n()(),a.Oa(4,0,null,null,2,"section",[["class","histories"]],null,null,null,null,null)),(n()(),a.Fa(16777216,null,null,1,null,T)),a.Na(6,802816,null,0,s.l,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null)],function(n,t){var l=t.component;n(t,3,0,l.stopId,l.stopName,l.history.created_at),n(t,6,0,l.history.inputs)},null)}var P=a.Ka("ng-component",M,function(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"ng-component",[],null,null,null,V,$)),a.Na(1,114688,null,0,M,[r.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),X=l("IfiR"),E=l("LYzL"),J=l("eXL1"),A=l("C7Lb"),Z=l("D5nm"),z=l("WV+C"),G=l("GcYS"),Q=l("/hyk"),nn=l("CYrO"),tn=l("+3V+"),ln=l("Ho7M"),an=l("dgjn"),un=l("rXXt"),en=l("abkR"),on=l("IvSS"),rn=l("3LvS"),sn=l("MZd7"),cn=l("4XTs"),pn=function(){function n(n){this.historyService=n}return n.prototype.resolve=function(n,t){var l=n.parent.paramMap.get("stop_id");return this.historyService.getHistoriesByStopId(l)},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(N))},token:n,providedIn:"root"}),n}(),hn=function(){function n(n){this.historyService=n}return n.prototype.resolve=function(n,t){var l=n.paramMap.get("history_id");return this.historyService.getHistory(l)},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(N))},token:n,providedIn:"root"}),n}(),fn=function(){};l.d(t,"HistoriesModuleNgFactory",function(){return dn});var dn=a.La(u,[],function(n){return a.Va([a.Wa(512,a.j,a.Aa,[[8,[i.a,j,P]],[3,a.j],a.v]),a.Wa(4608,s.o,s.n,[a.s,[2,s.x]]),a.Wa(4608,X.s,X.s,[]),a.Wa(4608,X.d,X.d,[]),a.Wa(4608,E.b,E.b,[]),a.Wa(4608,J.a,J.a,[J.g,J.c,a.j,J.f,J.d,a.p,a.x,s.d,A.b]),a.Wa(5120,J.h,J.i,[J.a]),a.Wa(5120,Z.b,Z.c,[J.a]),a.Wa(1073742336,s.c,s.c,[]),a.Wa(1073742336,X.p,X.p,[]),a.Wa(1073742336,X.h,X.h,[]),a.Wa(1073742336,X.o,X.o,[]),a.Wa(1073742336,A.a,A.a,[]),a.Wa(1073742336,E.j,E.j,[[2,E.c]]),a.Wa(1073742336,z.b,z.b,[]),a.Wa(1073742336,E.u,E.u,[]),a.Wa(1073742336,G.a,G.a,[]),a.Wa(1073742336,Q.a,Q.a,[]),a.Wa(1073742336,E.k,E.k,[]),a.Wa(1073742336,nn.a,nn.a,[]),a.Wa(1073742336,tn.c,tn.c,[]),a.Wa(1073742336,ln.d,ln.d,[]),a.Wa(1073742336,an.b,an.b,[]),a.Wa(1073742336,E.s,E.s,[]),a.Wa(1073742336,p.b,p.b,[]),a.Wa(1073742336,o.c,o.c,[]),a.Wa(1073742336,un.a,un.a,[]),a.Wa(1073742336,E.p,E.p,[]),a.Wa(1073742336,en.c,en.c,[]),a.Wa(1073742336,on.a,on.a,[]),a.Wa(1073742336,J.e,J.e,[]),a.Wa(1073742336,Z.e,Z.e,[]),a.Wa(1073742336,rn.b,rn.b,[]),a.Wa(1073742336,sn.a,sn.a,[]),a.Wa(1073742336,cn.a,cn.a,[]),a.Wa(1073742336,r.q,r.q,[[2,r.w],[2,r.o]]),a.Wa(1073742336,fn,fn,[]),a.Wa(1073742336,u,u,[]),a.Wa(1024,r.m,function(){return[[{path:"",resolve:{histories:pn},component:O},{path:":history_id",resolve:{history:hn},component:M}]]},[])])})}}]);