(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4H6U":function(n,e,t){"use strict";t.r(e);var a=t("LoAr"),o=function(){},i=t("C9Ky"),r=t("D57K"),l=t("HfXx"),s=t("fQLH"),u=t("LR82"),p=0,c=function(){function n(){this._openCloseAllActions=new s.a,this.id="cdk-accordion-"+p++,this._multi=!1}return Object.defineProperty(n.prototype,"multi",{get:function(){return this._multi},set:function(n){this._multi=Object(l.b)(n)},enumerable:!0,configurable:!0}),n.prototype.openAll=function(){this._openCloseAll(!0)},n.prototype.closeAll=function(){this._openCloseAll(!1)},n.prototype._openCloseAll=function(n){this.multi&&this._openCloseAllActions.next(n)},n}(),d=0,m=function(){function n(n,e,t){var o=this;this.accordion=n,this._changeDetectorRef=e,this._expansionDispatcher=t,this._openCloseAllSubscription=u.a.EMPTY,this.closed=new a.m,this.opened=new a.m,this.destroyed=new a.m,this.expandedChange=new a.m,this.id="cdk-accordion-child-"+d++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=t.listen(function(n,e){o.accordion&&!o.accordion.multi&&o.accordion.id===e&&o.id!==n&&(o.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return Object.defineProperty(n.prototype,"expanded",{get:function(){return this._expanded},set:function(n){n=Object(l.b)(n),this._expanded!==n&&(this._expanded=n,this.expandedChange.emit(n),n?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disabled",{get:function(){return this._disabled},set:function(n){this._disabled=Object(l.b)(n)},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()},n.prototype.toggle=function(){this.disabled||(this.expanded=!this.expanded)},n.prototype.close=function(){this.disabled||(this.expanded=!1)},n.prototype.open=function(){this.disabled||(this.expanded=!0)},n.prototype._subscribeToOpenCloseAllActions=function(){var n=this;return this.accordion._openCloseAllActions.subscribe(function(e){n.disabled||(n.expanded=e)})},n}(),g=function(){},b=(t("qpXW"),t("abkR")),f=t("gQst"),h=t("W/Ou"),y=t("z5yO"),x=t("G2Mx"),v=t("rh80"),_=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e._hideToggle=!1,e.displayMode="default",e}return Object(r.b)(e,n),Object.defineProperty(e.prototype,"hideToggle",{get:function(){return this._hideToggle},set:function(n){this._hideToggle=Object(l.b)(n)},enumerable:!0,configurable:!0}),e}(c),w=0,O=function(n){function e(e,t,a,o){var i=n.call(this,e,t,a)||this;return i._viewContainerRef=o,i._hideToggle=!1,i._inputChanges=new s.a,i._headerId="mat-expansion-panel-header-"+w++,i.accordion=e,i}return Object(r.b)(e,n),Object.defineProperty(e.prototype,"hideToggle",{get:function(){return this._hideToggle},set:function(n){this._hideToggle=Object(l.b)(n)},enumerable:!0,configurable:!0}),e.prototype._getHideToggle=function(){return this.accordion?this.accordion.hideToggle:this.hideToggle},e.prototype._hasSpacing=function(){return!!this.accordion&&"default"===(this.expanded?this.accordion.displayMode:this._getExpandedState())},e.prototype._getExpandedState=function(){return this.expanded?"expanded":"collapsed"},e.prototype.ngAfterContentInit=function(){var n=this;this._lazyContent&&this.opened.pipe(Object(h.a)(null),Object(y.a)(function(){return n.expanded&&!n._portal}),Object(x.a)(1)).subscribe(function(){n._portal=new b.d(n._lazyContent._template,n._viewContainerRef)})},e.prototype.ngOnChanges=function(n){this._inputChanges.next(n)},e.prototype.ngOnDestroy=function(){n.prototype.ngOnDestroy.call(this),this._inputChanges.complete()},e.prototype._bodyAnimation=function(n){var e=n.element.classList,t=n.phaseName,a=n.toState;"done"===t&&"expanded"===a?e.add("mat-expanded"):"start"===t&&"collapsed"===a&&e.remove("mat-expanded")},e}(m),k=function(){function n(n,e,t,a){var o=this;this.panel=n,this._element=e,this._focusMonitor=t,this._changeDetectorRef=a,this._parentChangeSubscription=u.a.EMPTY,this._parentChangeSubscription=Object(f.a)(n.opened,n.closed,n._inputChanges.pipe(Object(y.a)(function(n){return!(!n.hideToggle&&!n.disabled)}))).subscribe(function(){return o._changeDetectorRef.markForCheck()}),t.monitor(e.nativeElement)}return n.prototype._toggle=function(){this.panel.toggle()},n.prototype._isExpanded=function(){return this.panel.expanded},n.prototype._getExpandedState=function(){return this.panel._getExpandedState()},n.prototype._getPanelId=function(){return this.panel.id},n.prototype._showToggle=function(){return!this.panel.hideToggle&&!this.panel.disabled},n.prototype._keydown=function(n){switch(n.keyCode){case v.j:case v.d:n.preventDefault(),this._toggle();break;default:return}},n.prototype.ngOnDestroy=function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element.nativeElement)},n}(),C=function(){},q=function(){},N=t("WT9V"),S=t("PVb+"),j=t("0xYh"),W=a.Ma({encapsulation:2,styles:[".mat-expansion-panel{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);box-sizing:content-box;display:block;margin:0;transition:margin 225ms cubic-bezier(.4,0,.2,1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mat-expansion-panel-content{overflow:hidden}.mat-expansion-panel-content.mat-expanded{overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button{margin-left:0;margin-right:8px}"],data:{animation:[{type:7,name:"bodyExpansion",definitions:[{type:0,name:"collapsed",styles:{type:6,styles:{height:"0px",visibility:"hidden"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{height:"*",visibility:"visible"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}}]}});function A(n){return a.ib(0,[(n()(),a.Fa(0,null,null,0))],null,null)}function I(n){return a.ib(2,[a.Xa(null,0),(n()(),a.Oa(1,0,[["body",1]],null,5,"div",[["class","mat-expansion-panel-content"],["role","region"]],[[24,"@bodyExpansion",0],[1,"aria-labelledby",0],[8,"id",0]],[[null,"@bodyExpansion.done"],[null,"@bodyExpansion.start"]],function(n,e,t){var a=!0,o=n.component;return"@bodyExpansion.done"===e&&(a=!1!==o._bodyAnimation(t)&&a),"@bodyExpansion.start"===e&&(a=!1!==o._bodyAnimation(t)&&a),a},null,null)),(n()(),a.Oa(2,0,null,null,3,"div",[["class","mat-expansion-panel-body"]],null,null,null,null,null)),a.Xa(null,1),(n()(),a.Fa(16777216,null,null,1,null,A)),a.Na(5,212992,null,0,b.a,[a.j,a.N],{portal:[0,"portal"]},null),a.Xa(null,2)],function(n,e){n(e,5,0,e.component._portal)},function(n,e){var t=e.component;n(e,1,0,t._getExpandedState(),t._headerId,t.id)})}var Y=a.Ma({encapsulation:2,styles:[".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],data:{animation:[{type:7,name:"indicatorRotate",definitions:[{type:0,name:"collapsed",styles:{type:6,styles:{transform:"rotate(0deg)"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{transform:"rotate(180deg)"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}},{type:7,name:"expansionHeight",definitions:[{type:0,name:"collapsed",styles:{type:6,styles:{height:"{{collapsedHeight}}"},offset:null},options:{params:{collapsedHeight:"48px"}}},{type:0,name:"expanded",styles:{type:6,styles:{height:"{{expandedHeight}}"},offset:null},options:{params:{expandedHeight:"64px"}}},{type:1,expr:"expanded <=> collapsed",animation:{type:3,steps:[{type:11,selector:"@indicatorRotate",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"}],options:null},options:null}],options:{}}]}});function X(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,0,"span",[["class","mat-expansion-indicator"]],[[24,"@indicatorRotate",0]],null,null,null,null))],null,function(n,e){n(e,0,0,e.component._getExpandedState())})}function M(n){return a.ib(2,[(n()(),a.Oa(0,0,null,null,3,"span",[["class","mat-content"]],null,null,null,null,null)),a.Xa(null,0),a.Xa(null,1),a.Xa(null,2),(n()(),a.Fa(16777216,null,null,1,null,X)),a.Na(5,16384,null,0,N.m,[a.N,a.K],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,5,0,e.component._showToggle())},null)}var E=t("yN5F"),T=t("e8uv"),D=t("TCBR"),P=t("8xy9"),z=t("WLuX"),F=t("NLEP"),Q=t("981U"),R=function(){function n(n,e){this.route=n,this.router=e}return n.prototype.ngOnInit=function(){this.categories=this.route.snapshot.data.categories,this.categories_group=this.categories.reduce(function(n,e){var t=e.num,a=e.parent_num,o=n[a]||[];return null!==a?(o.push(t),n[a]=o):n[t]=[],n},{})},n.prototype.findSubCategory=function(n){return this.categories.find(function(e){return e.num===n})||{}},n.prototype.goToQuestion=function(n){this.router.navigate(["./",n,"questions"],{relativeTo:this.route})},n}(),L=a.Ma({encapsulation:0,styles:[[".mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:0 3px 15px -7px rgba(165,195,253,.4)!important;background:#fff}.mat-expansion-panel[_ngcontent-%COMP%]:hover{background:#fff}"]],data:{}});function U(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,6,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"]],function(n,e,t){var o=!0;return"click"===e&&(o=!1!==a.Ya(n,1)._toggle()&&o),"keydown"===e&&(o=!1!==a.Ya(n,1)._keydown(t)&&o),o},M,Y)),a.Na(1,180224,null,0,k,[O,a.k,j.c,a.h],null,null),a.bb(2,{collapsedHeight:0,expandedHeight:1}),a.bb(3,{value:0,params:1}),(n()(),a.Oa(4,0,null,0,2,"mat-panel-title",[["class","mat-expansion-panel-header-title"]],null,null,null,null,null)),a.Na(5,16384,null,0,C,[],null,null),(n()(),a.gb(6,null,[" "," "]))],null,function(n,e){n(e,0,0,a.Ya(e,1).panel._headerId,a.Ya(e,1).panel.disabled?-1:0,a.Ya(e,1)._getPanelId(),a.Ya(e,1)._isExpanded(),a.Ya(e,1).panel.disabled,a.Ya(e,1)._isExpanded(),n(e,3,0,a.Ya(e,1)._getExpandedState(),n(e,2,0,a.Ya(e,1).collapsedHeight,a.Ya(e,1).expandedHeight))),n(e,6,0,e.parent.context.$implicit.name)})}function H(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,7,null,null,null,null,null,null,null)),(n()(),a.Oa(1,0,null,null,4,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"],[null,"focus"],[null,"blur"]],function(n,e,t){var o=!0,i=n.component;return"focus"===e&&(o=!1!==a.Ya(n,2)._handleFocus()&&o),"blur"===e&&(o=!1!==a.Ya(n,2)._handleBlur()&&o),"click"===e&&(o=!1!==i.goToQuestion(n.context.$implicit)&&o),o},E.c,E.b)),a.Na(2,1097728,null,2,T.b,[a.k,[2,T.e]],null,null),a.eb(603979776,2,{_lines:1}),a.eb(335544320,3,{_avatar:0}),(n()(),a.gb(5,2,["",""])),(n()(),a.Oa(6,0,null,null,1,"mat-divider",[["class","mat-divider"],["role","separator"]],[[1,"aria-orientation",0],[2,"mat-divider-vertical",null],[2,"mat-divider-inset",null]],null,null,D.b,D.a)),a.Na(7,49152,null,0,P.a,[],null,null)],null,function(n,e){var t=e.component;n(e,1,0,a.Ya(e,2)._avatar,a.Ya(e,2)._avatar),n(e,5,0,t.findSubCategory(e.context.$implicit).name),n(e,6,0,a.Ya(e,7).vertical?"vertical":"horizontal",a.Ya(e,7).vertical,a.Ya(e,7).inset)})}function K(n){return a.ib(0,[(n()(),a.Oa(0,16777216,null,null,9,"mat-expansion-panel",[["class","mat-expansion-panel"]],[[2,"mat-expanded",null],[2,"mat-expansion-panel-spacing",null]],null,null,I,W)),a.Na(1,1753088,null,1,O,[[3,_],a.h,S.b,a.N],null,null),a.eb(335544320,1,{_lazyContent:0}),a.db(256,null,_,void 0,[]),(n()(),a.Fa(16777216,null,0,1,null,U)),a.Na(5,16384,null,0,N.m,[a.N,a.K],{ngIf:[0,"ngIf"]},null),(n()(),a.Oa(6,0,null,1,3,"mat-list",[["class","mat-list"]],null,null,null,E.d,E.a)),a.Na(7,49152,null,0,T.a,[],null,null),(n()(),a.Fa(16777216,null,0,1,null,H)),a.Na(9,802816,null,0,N.l,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Fa(0,null,null,0))],function(n,e){var t=e.component;n(e,5,0,t.categories_group[e.context.$implicit.num]),n(e,9,0,t.categories_group[e.context.$implicit.num])},function(n,e){n(e,0,0,a.Ya(e,1).expanded,a.Ya(e,1)._hasSpacing())})}function V(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-navbar",[],null,null,null,z.b,z.a)),a.Na(1,114688,null,0,F.a,[N.h,Q.o],null,null),(n()(),a.Oa(2,0,null,null,3,"mat-accordion",[["class","mat-accordion"]],null,null,null,null,null)),a.Na(3,16384,null,0,_,[],null,null),(n()(),a.Fa(16777216,null,null,1,null,K)),a.Na(5,802816,null,0,N.l,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,1,0),n(e,5,0,t.categories)},null)}var B=a.Ka("ng-component",R,function(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"ng-component",[],null,null,null,V,L)),a.Na(1,114688,null,0,R,[Q.a,Q.o],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),$=t("GzoC"),Z=t("uZLZ"),J=t("HUvM"),G=t("QXIF"),nn=t("5J2o"),en=t("DP0C"),tn=t("45Ed"),an=t("ssoK"),on=t("3LvS"),rn=t("C7Lb"),ln=t("LYzL"),sn=t("Z5FQ"),un=a.Ma({encapsulation:2,styles:[".mat-progress-bar{display:block;height:5px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}._mat-animation-noopable.mat-progress-bar .mat-progress-bar-buffer{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}._mat-animation-noopable.mat-progress-bar .mat-progress-bar-fill{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}._mat-animation-noopable.mat-progress-bar .mat-progress-bar-fill::after{transition:none;animation:none}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}._mat-animation-noopable.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none;animation:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}._mat-animation-noopable.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{transition:none;animation:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}._mat-animation-noopable.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{transition:none;animation:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}._mat-animation-noopable.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{transition:none;animation:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}._mat-animation-noopable.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{transition:none;animation:none}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear}._mat-animation-noopable.mat-progress-bar[mode=buffer] .mat-progress-bar-background{transition:none;animation:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-10px)}}"],data:{}});function pn(n){return a.ib(2,[(n()(),a.Oa(0,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","5"],["width","100%"]],null,null,null,null,null)),(n()(),a.Oa(1,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(n()(),a.Oa(2,0,null,null,1,":svg:pattern",[["height","5"],["patternUnits","userSpaceOnUse"],["width","10"],["x","5"],["y","0"]],[[8,"id",0]],null,null,null,null)),(n()(),a.Oa(3,0,null,null,0,":svg:circle",[["cx","2.5"],["cy","2.5"],["r","2.5"]],null,null,null,null,null)),(n()(),a.Oa(4,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(n()(),a.Oa(5,0,null,null,1,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),a.Na(6,278528,null,0,N.p,[a.r,a.k,a.C],{ngStyle:[0,"ngStyle"]},null),(n()(),a.Oa(7,0,null,null,1,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),a.Na(8,278528,null,0,N.p,[a.r,a.k,a.C],{ngStyle:[0,"ngStyle"]},null),(n()(),a.Oa(9,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(n,e){var t=e.component;n(e,6,0,t._bufferTransform()),n(e,8,0,t._primaryTransform())},function(n,e){var t=e.component;n(e,2,0,t.progressbarId),n(e,4,0,"url(#"+t.progressbarId+")")})}var cn=t("pN2L"),dn=t("Jg5f"),mn=t("IMYO"),gn=t("GiBk"),bn=t("PIN6"),fn=t("sw3K"),hn={headers:new gn.g({"Content-Type":"application/json"})},yn=function(){function n(n){this.http=n,this.questionsUrl=bn.a.API_URL+"api/questions"}return n.prototype.getQuestions=function(){return this.http.get(this.questionsUrl).pipe(Object(dn.a)(function(n){return n.questions.map(function(n){return new fn.a(n)})}),Object(mn.a)(this.handleError("getQuestions",[])))},n.prototype.saveAnswers=function(n,e){return localStorage.clear(),this.http.post(bn.a.API_URL+"api/stops/"+n+"/inputs",{inputs:e},hn).pipe(Object(dn.a)(function(n){return n.message}),Object(mn.a)(this.handleError("saveAnswers",[])))},n.prototype.storeAnswer=function(n){localStorage.setItem(n.question_num,n.answer)},n.prototype.handleError=function(n,e){return void 0===n&&(n="operation"),function(n){return console.error(n),Object(cn.a)(e)}},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(gn.c))},token:n,providedIn:"root"}),n}(),xn=t("0JvR"),vn=function(){function n(n,e,t,a,o){this.route=n,this.router=e,this.location=t,this.questionService=a,this.data=o,this.answeredQuestions=0,this.progressValue=0}return Object.defineProperty(n.prototype,"isDoneBtnDisabled",{get:function(){return 0==this.answeredQuestions},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){this.stop_id=this.route.parent.snapshot.paramMap.get("stop_id"),this.questions=this.route.snapshot.data.questions,this.category=this.route.snapshot.data.category,this.totalNumberOfQuestions=this.questions.length},n.prototype.getAnswer=function(n){this.data.inputs[n.question_num]=n,this.questionService.storeAnswer(n),this.setProgressBar(n)},n.prototype.setProgressBar=function(n){null!==n.answer?this.answeredQuestions=Object.keys(this.data.inputs).length:(delete this.data.inputs[n.question_num],this.answeredQuestions>0&&(this.answeredQuestions-=1)),this.progressValue=100/this.totalNumberOfQuestions*this.answeredQuestions},n.prototype.goBack=function(){this.location.back()},n.prototype.saveAnswers=function(){var n=this,e=Object.entries(localStorage).map(function(n){return{question_num:n[0],answer:n[1]}});return this.questionService.saveAnswers(this.stop_id,e).subscribe(function(e){console.log(e),n.router.navigate(["/stops",n.stop_id])})},n.prototype.cancel=function(){window.confirm("Do you want to save your progress?")?this.saveAnswers():localStorage.clear(),this.router.navigate(["/stops",this.stop_id])},n}(),_n=a.Ma({encapsulation:0,styles:[[".progress-bar[_ngcontent-%COMP%]{margin-top:2rem;margin-bottom:.5rem}.progress-bar[_ngcontent-%COMP%], .progress-tag[_ngcontent-%COMP%]{display:flex;justify-content:center}.progress-tag[_ngcontent-%COMP%]{font-size:1.4rem;color:rgba(29,31,49,.45);margin-bottom:1.5rem}  .mat-progress-bar-buffer{background-color:#eeeff2}  .mat-progress-bar-fill::after{background-image:linear-gradient(-270deg,#0072ff 0,#00c6ff 99%)}.questionDiv[_ngcontent-%COMP%]{margin-bottom:3rem}.empty-first-div[_ngcontent-%COMP%]{height:20rem}"]],data:{}});function wn(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-number",[],null,[[null,"answer"]],function(n,e,t){var a=!0;return"answer"===e&&(a=!1!==n.component.getAnswer(t)&&a),a},$.b,$.a)),a.Na(1,114688,null,0,Z.a,[],{question:[0,"question"]},{answerChange:"answer"})],function(n,e){n(e,1,0,e.parent.context.$implicit)},null)}function On(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-boolean",[],null,[[null,"answer"]],function(n,e,t){var a=!0;return"answer"===e&&(a=!1!==n.component.getAnswer(t)&&a),a},J.b,J.a)),a.Na(1,114688,null,0,G.a,[],{question:[0,"question"]},{answerChange:"answer"})],function(n,e){n(e,1,0,e.parent.context.$implicit)},null)}function kn(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-multiple",[],null,[[null,"answer"]],function(n,e,t){var a=!0;return"answer"===e&&(a=!1!==n.component.getAnswer(t)&&a),a},nn.b,nn.a)),a.Na(1,114688,null,0,en.a,[],{question:[0,"question"]},{answerChange:"answer"})],function(n,e){n(e,1,0,e.parent.context.$implicit)},null)}function Cn(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"app-question-type-string",[],null,[[null,"answer"]],function(n,e,t){var a=!0;return"answer"===e&&(a=!1!==n.component.getAnswer(t)&&a),a},tn.b,tn.a)),a.Na(1,114688,null,0,an.a,[],{question:[0,"question"]},{answerChange:"answer"})],function(n,e){n(e,1,0,e.parent.context.$implicit)},null)}function qn(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,10,"div",[],null,null,null,null,null)),a.Na(1,16384,null,0,N.q,[],{ngSwitch:[0,"ngSwitch"]},null),a.cb(2,1),(n()(),a.Fa(16777216,null,null,1,null,wn)),a.Na(4,278528,null,0,N.r,[a.N,a.K,N.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),a.Fa(16777216,null,null,1,null,On)),a.Na(6,278528,null,0,N.r,[a.N,a.K,N.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),a.Fa(16777216,null,null,1,null,kn)),a.Na(8,278528,null,0,N.r,[a.N,a.K,N.q],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),a.Fa(16777216,null,null,1,null,Cn)),a.Na(10,278528,null,0,N.r,[a.N,a.K,N.q],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,e){n(e,1,0,a.hb(e,1,0,n(e,2,0,a.Ya(e.parent,0),e.context.$implicit.type))),n(e,4,0,"number"),n(e,6,0,"boolean"),n(e,8,0,"multiple"),n(e,10,0,"string")},null)}function Nn(n){return a.ib(0,[a.ab(0,N.j,[]),(n()(),a.Oa(1,0,null,null,6,"app-navbar",[["stopName","Stop Name"]],null,null,null,z.b,z.a)),a.Na(2,114688,null,0,F.a,[N.h,Q.o],{stopId:[0,"stopId"],stopName:[1,"stopName"],doneBtnDisabled:[2,"doneBtnDisabled"],doneCallback:[3,"doneCallback"]},null),(n()(),a.Oa(3,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),a.Oa(4,0,null,null,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","progress-bar mat-progress-bar"],["mode","determinate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,pn,un)),a.Na(5,49152,null,0,on.a,[a.k,[2,sn.a]],{value:[0,"value"],mode:[1,"mode"]},null),(n()(),a.Oa(6,0,null,null,1,"p",[["class","progress-tag"]],null,null,null,null,null)),(n()(),a.gb(7,null,[""," of ",""])),(n()(),a.Oa(8,0,null,null,0,"div",[["class","empty-first-div"]],null,null,null,null,null)),(n()(),a.Oa(9,0,null,null,2,"div",[["class","questions-container"]],null,null,null,null,null)),(n()(),a.Fa(16777216,null,null,1,null,qn)),a.Na(11,802816,null,0,N.l,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null),(n()(),a.Oa(12,0,null,null,0,"div",[["class","empty-div"]],null,null,null,null,null))],function(n,e){var t=e.component;n(e,2,0,t.stop_id,"Stop Name",t.isDoneBtnDisabled,t.saveAnswers.bind(t)),n(e,5,0,a.Qa(1,"",t.progressValue,""),"determinate"),n(e,11,0,t.questions)},function(n,e){var t=e.component;n(e,4,0,a.Ya(e,5).value,a.Ya(e,5).mode,"NoopAnimations"===a.Ya(e,5)._animationMode),n(e,7,0,t.answeredQuestions,t.totalNumberOfQuestions)})}var Sn=a.Ka("ng-component",vn,function(n){return a.ib(0,[(n()(),a.Oa(0,0,null,null,1,"ng-component",[],null,null,null,Nn,_n)),a.Na(1,114688,null,0,vn,[Q.a,Q.o,N.h,yn,xn.a],null,null)],function(n,e){n(e,1,0)},null)},{questions:"questions"},{},[]),jn=t("IfiR"),Wn=t("eXL1"),An=t("D5nm"),In=t("WV+C"),Yn=t("GcYS"),Xn=t("/hyk"),Mn=t("CYrO"),En=t("+3V+"),Tn=t("Ho7M"),Dn=t("dgjn"),Pn=t("rXXt"),zn=t("IvSS"),Fn=t("MZd7"),Qn=t("4XTs"),Rn=function(){return function(n){n&&Object.assign(this,n)}}(),Ln=(new gn.g({"Content-Type":"application/json"}),function(){function n(n){this.http=n,this.categoriessUrl=bn.a.API_URL+"api/categories"}return n.prototype.list=function(){return this.http.get(this.categoriessUrl).pipe(Object(dn.a)(function(n){return n.categories.map(function(n){return new Rn(n)})}),Object(mn.a)(this.handleError("listCategories",[])))},n.prototype.getByNum=function(n){return this.http.get(this.categoriessUrl+"/"+n).pipe(Object(dn.a)(function(n){return new Rn(n.category)}),Object(mn.a)(this.handleError("listCategories",{})))},n.prototype.getQuestions=function(n){return this.http.get(this.categoriessUrl+"/"+n+"/questions").pipe(Object(dn.a)(function(n){return n.questions.map(function(n){return new fn.a(n)})}),Object(mn.a)(this.handleError("getQuestions",[])))},n.prototype.handleError=function(n,e){return void 0===n&&(n="operation"),function(n){return console.error(n),Object(cn.a)(e)}},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(gn.c))},token:n,providedIn:"root"}),n}()),Un=function(){function n(n){this.categoryService=n}return n.prototype.resolve=function(n,e){return this.categoryService.list()},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(Ln))},token:n,providedIn:"root"}),n}(),Hn=function(){function n(n){this.categoryService=n}return n.prototype.resolve=function(n,e){var t=n.paramMap.get("category_num");return this.categoryService.getByNum(t)},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(Ln))},token:n,providedIn:"root"}),n}(),Kn=function(){function n(n){this.categoriesService=n}return n.prototype.resolve=function(n,e){var t=n.paramMap.get("category_num");return this.categoriesService.getQuestions(t)},n.ngInjectableDef=a.R({factory:function(){return new n(a.V(Ln))},token:n,providedIn:"root"}),n}(),Vn=function(){};t.d(e,"CategoriesModuleNgFactory",function(){return Bn});var Bn=a.La(o,[],function(n){return a.Va([a.Wa(512,a.j,a.Aa,[[8,[i.a,B,Sn]],[3,a.j],a.v]),a.Wa(4608,N.o,N.n,[a.s,[2,N.x]]),a.Wa(4608,jn.s,jn.s,[]),a.Wa(4608,jn.d,jn.d,[]),a.Wa(4608,ln.b,ln.b,[]),a.Wa(4608,Wn.a,Wn.a,[Wn.g,Wn.c,a.j,Wn.f,Wn.d,a.p,a.x,N.d,rn.b]),a.Wa(5120,Wn.h,Wn.i,[Wn.a]),a.Wa(5120,An.b,An.c,[Wn.a]),a.Wa(1073742336,N.c,N.c,[]),a.Wa(1073742336,jn.p,jn.p,[]),a.Wa(1073742336,jn.h,jn.h,[]),a.Wa(1073742336,jn.o,jn.o,[]),a.Wa(1073742336,rn.a,rn.a,[]),a.Wa(1073742336,ln.j,ln.j,[[2,ln.c]]),a.Wa(1073742336,In.b,In.b,[]),a.Wa(1073742336,ln.u,ln.u,[]),a.Wa(1073742336,Yn.a,Yn.a,[]),a.Wa(1073742336,Xn.a,Xn.a,[]),a.Wa(1073742336,ln.k,ln.k,[]),a.Wa(1073742336,Mn.a,Mn.a,[]),a.Wa(1073742336,En.c,En.c,[]),a.Wa(1073742336,Tn.d,Tn.d,[]),a.Wa(1073742336,Dn.b,Dn.b,[]),a.Wa(1073742336,ln.s,ln.s,[]),a.Wa(1073742336,P.b,P.b,[]),a.Wa(1073742336,T.c,T.c,[]),a.Wa(1073742336,Pn.a,Pn.a,[]),a.Wa(1073742336,ln.p,ln.p,[]),a.Wa(1073742336,b.c,b.c,[]),a.Wa(1073742336,zn.a,zn.a,[]),a.Wa(1073742336,Wn.e,Wn.e,[]),a.Wa(1073742336,An.e,An.e,[]),a.Wa(1073742336,on.b,on.b,[]),a.Wa(1073742336,Fn.a,Fn.a,[]),a.Wa(1073742336,Qn.a,Qn.a,[]),a.Wa(1073742336,Q.q,Q.q,[[2,Q.w],[2,Q.o]]),a.Wa(1073742336,Vn,Vn,[]),a.Wa(1073742336,g,g,[]),a.Wa(1073742336,q,q,[]),a.Wa(1073742336,o,o,[]),a.Wa(1024,Q.m,function(){return[[{path:"",resolve:{categories:Un},component:R},{path:":category_num/questions",resolve:{questions:Kn,category:Hn},component:vn}]]},[])])})}}]);