(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{v0ke:function(t,e,a){"use strict";a.r(e);var r=a("nKUr"),n=(a("q1tI"),a("pCoS")),o=a("3T2N"),i=a("m0r1"),l=function(){if("undefined"!==typeof window){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),s=function(t){var e,a=[];for(t=[].concat(t);t.length;)"string"===typeof(e=t.pop())?a.unshift.apply(a,e.split("\n")):Array.isArray(e)?t.push.apply(t,e):Object(o.Cb)(t)||a.unshift(""+e);return a},c=function(t,e,a){var r,n=[].concat(e),o=n.length,i=t.font,l=0;for(t.font=a.string,r=0;r<o;++r)l=Math.max(t.measureText(n[r]).width,l);return t.font=i,{height:o*a.lineHeight,width:l}},d=function(t,e,a){return Math.max(t,Math.min(e,a))},u=function(t,e){var a,r,n,o,i=t.slice(),l=[];for(a=0,n=e.length;a<n;++a)o=e[a],-1===(r=i.indexOf(o))?l.push([o,1]):i.splice(r,1);for(a=0,n=i.length;a<n;++a)l.push([i[a],-1]);return l};function b(t,e){var a=e.x,r=e.y;if(null===a)return{x:0,y:-1};if(null===r)return{x:1,y:0};var n=t.x-a,o=t.y-r,i=Math.sqrt(n*n+o*o);return{x:i?n/i:0,y:i?o/i:-1}}function f(t,e,a){var r=0;return t<a.left?r|=1:t>a.right&&(r|=2),e<a.top?r|=8:e>a.bottom&&(r|=4),r}function h(t,e){var a,r,n=e.anchor,o=t;return e.clamp&&(o=function(t,e){for(var a,r,n,o=t.x0,i=t.y0,l=t.x1,s=t.y1,c=f(o,i,e),d=f(l,s,e);c|d&&!(c&d);)8&(a=c||d)?(r=o+(l-o)*(e.top-i)/(s-i),n=e.top):4&a?(r=o+(l-o)*(e.bottom-i)/(s-i),n=e.bottom):2&a?(n=i+(s-i)*(e.right-o)/(l-o),r=e.right):1&a&&(n=i+(s-i)*(e.left-o)/(l-o),r=e.left),a===c?c=f(o=r,i=n,e):d=f(l=r,s=n,e);return{x0:o,x1:l,y0:i,y1:s}}(o,e.area)),"start"===n?(a=o.x0,r=o.y0):"end"===n?(a=o.x1,r=o.y1):(a=(o.x0+o.x1)/2,r=(o.y0+o.y1)/2),function(t,e,a,r,n){switch(n){case"center":a=r=0;break;case"bottom":a=0,r=1;break;case"right":a=1,r=0;break;case"left":a=-1,r=0;break;case"top":a=0,r=-1;break;case"start":a=-a,r=-r;break;case"end":break;default:n*=Math.PI/180,a=Math.cos(n),r=Math.sin(n)}return{x:t,y:e,vx:a,vy:r}}(a,r,t.vx,t.vy,e.align)}var x=function(t,e){var a=(t.startAngle+t.endAngle)/2,r=Math.cos(a),n=Math.sin(a),o=t.innerRadius,i=t.outerRadius;return h({x0:t.x+r*o,y0:t.y+n*o,x1:t.x+r*i,y1:t.y+n*i,vx:r,vy:n},e)},y=function(t,e){var a=b(t,e.origin),r=a.x*t.options.radius,n=a.y*t.options.radius;return h({x0:t.x-r,y0:t.y-n,x1:t.x+r,y1:t.y+n,vx:a.x,vy:a.y},e)},v=function(t,e){var a=b(t,e.origin),r=t.x,n=t.y,o=0,i=0;return t.horizontal?(r=Math.min(t.x,t.base),o=Math.abs(t.base-t.x)):(n=Math.min(t.y,t.base),i=Math.abs(t.base-t.y)),h({x0:r,y0:n+i,x1:r+o,y1:n,vx:a.x,vy:a.y},e)},p=function(t,e){var a=b(t,e.origin);return h({x0:t.x,y0:t.y,x1:t.x,y1:t.y,vx:a.x,vy:a.y},e)},_=function(t){return Math.round(t*l)/l};function g(t,e){var a=e.chart.getDatasetMeta(e.datasetIndex).vScale;if(!a)return null;if(void 0!==a.xCenter&&void 0!==a.yCenter)return{x:a.xCenter,y:a.yCenter};var r=a.getBasePixel();return t.horizontal?{x:r,y:null}:{x:null,y:r}}function m(t,e,a){var r=a.backgroundColor,n=a.borderColor,o=a.borderWidth;(r||n&&o)&&(t.beginPath(),function(t,e,a,r,n,o){var i=Math.PI/2;if(o){var l=Math.min(o,n/2,r/2),s=e+l,c=a+l,d=e+r-l,u=a+n-l;t.moveTo(e,c),s<d&&c<u?(t.arc(s,c,l,-Math.PI,-i),t.arc(d,c,l,-i,0),t.arc(d,u,l,0,i),t.arc(s,u,l,i,Math.PI)):s<d?(t.moveTo(s,a),t.arc(d,c,l,-i,i),t.arc(s,c,l,i,Math.PI+i)):c<u?(t.arc(s,c,l,-Math.PI,0),t.arc(s,u,l,0,Math.PI)):t.arc(s,c,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(e,a)}else t.rect(e,a,r,n)}(t,_(e.x)+o/2,_(e.y)+o/2,_(e.w)-o,_(e.h)-o,a.borderRadius),t.closePath(),r&&(t.fillStyle=r,t.fill()),n&&o&&(t.strokeStyle=n,t.lineWidth=o,t.lineJoin="miter",t.stroke()))}function w(t,e,a){var r=t.shadowBlur,n=a.stroked,o=_(a.x),i=_(a.y),l=_(a.w);n&&t.strokeText(e,o,i,l),a.filled&&(r&&n&&(t.shadowBlur=0),t.fillText(e,o,i,l),r&&n&&(t.shadowBlur=r))}var C=function(t,e,a,r){var n=this;n._config=t,n._index=r,n._model=null,n._rects=null,n._ctx=e,n._el=a};Object(o.a)(C.prototype,{_modelize:function(t,e,a,r){var n,l=this,s=l._index,d=Object(o.x)(Object(o.C)([a.font,{}],r,s)),u=Object(o.C)([a.color,i.e.color],r,s);return{align:Object(o.C)([a.align,"center"],r,s),anchor:Object(o.C)([a.anchor,"center"],r,s),area:r.chart.chartArea,backgroundColor:Object(o.C)([a.backgroundColor,null],r,s),borderColor:Object(o.C)([a.borderColor,null],r,s),borderRadius:Object(o.C)([a.borderRadius,0],r,s),borderWidth:Object(o.C)([a.borderWidth,0],r,s),clamp:Object(o.C)([a.clamp,!1],r,s),clip:Object(o.C)([a.clip,!1],r,s),color:u,display:t,font:d,lines:e,offset:Object(o.C)([a.offset,0],r,s),opacity:Object(o.C)([a.opacity,1],r,s),origin:g(l._el,r),padding:Object(o.d)(Object(o.C)([a.padding,0],r,s)),positioner:(n=l._el,n instanceof i.a?x:n instanceof i.d?y:n instanceof i.b?v:p),rotation:Object(o.C)([a.rotation,0],r,s)*(Math.PI/180),size:c(l._ctx,e,d),textAlign:Object(o.C)([a.textAlign,"start"],r,s),textShadowBlur:Object(o.C)([a.textShadowBlur,0],r,s),textShadowColor:Object(o.C)([a.textShadowColor,u],r,s),textStrokeColor:Object(o.C)([a.textStrokeColor,u],r,s),textStrokeWidth:Object(o.C)([a.textStrokeWidth,0],r,s)}},update:function(t){var e,a,r,n=this,i=null,l=null,c=n._index,d=n._config,u=Object(o.C)([d.display,!0],t,c);u&&(e=t.dataset.data[c],a=Object(o.Ob)(Object(o.o)(d.formatter,[e,t]),e),(r=Object(o.Cb)(a)?[]:s(a)).length&&(l=function(t){var e=t.borderWidth||0,a=t.padding,r=t.size.height,n=t.size.width,o=-n/2,i=-r/2;return{frame:{x:o-a.left-e,y:i-a.top-e,w:n+a.width+2*e,h:r+a.height+2*e},text:{x:o,y:i,w:n,h:r}}}(i=n._modelize(u,r,d,t)))),n._model=i,n._rects=l},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,e){var a,r=t.ctx,n=this._model,o=this._rects;this.visible()&&(r.save(),n.clip&&(a=n.area,r.beginPath(),r.rect(a.left,a.top,a.right-a.left,a.bottom-a.top),r.clip()),r.globalAlpha=d(0,n.opacity,1),r.translate(_(e.x),_(e.y)),r.rotate(n.rotation),m(r,o.frame,n),function(t,e,a,r){var n,o=r.textAlign,i=r.color,l=!!i,s=r.font,c=e.length,d=r.textStrokeColor,u=r.textStrokeWidth,b=d&&u;if(c&&(l||b))for(a=function(t,e,a){var r=a.lineHeight,n=t.w,o=t.x;return"center"===e?o+=n/2:"end"!==e&&"right"!==e||(o+=n),{h:r,w:n,x:o,y:t.y+r/2}}(a,o,s),t.font=s.string,t.textAlign=o,t.textBaseline="middle",t.shadowBlur=r.textShadowBlur,t.shadowColor=r.textShadowColor,l&&(t.fillStyle=i),b&&(t.lineJoin="round",t.lineWidth=u,t.strokeStyle=d),n=0,c=e.length;n<c;++n)w(t,e[n],{stroked:b,filled:l,w:a.w,x:a.x,y:a.y+a.h*n})}(r,n.lines,o.text,n),r.restore())}});var k=Number.MIN_SAFE_INTEGER||-9007199254740991,O=Number.MAX_SAFE_INTEGER||9007199254740991;function j(t,e,a){var r=Math.cos(a),n=Math.sin(a),o=e.x,i=e.y;return{x:o+r*(t.x-o)-n*(t.y-i),y:i+n*(t.x-o)+r*(t.y-i)}}function M(t,e){var a,r,n,o,i,l=O,s=k,c=e.origin;for(a=0;a<t.length;++a)n=(r=t[a]).x-c.x,o=r.y-c.y,i=e.vx*n+e.vy*o,l=Math.min(l,i),s=Math.max(s,i);return{min:l,max:s}}function $(t,e){var a=e.x-t.x,r=e.y-t.y,n=Math.sqrt(a*a+r*r);return{vx:(e.x-t.x)/n,vy:(e.y-t.y)/n,origin:t,ln:n}}var I=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function S(t,e,a){var r=e.positioner(t,e),n=r.vx,o=r.vy;if(!n&&!o)return{x:r.x,y:r.y};var i=a.w,l=a.h,s=e.rotation,c=Math.abs(i/2*Math.cos(s))+Math.abs(l/2*Math.sin(s)),d=Math.abs(i/2*Math.sin(s))+Math.abs(l/2*Math.cos(s)),u=1/Math.max(Math.abs(n),Math.abs(o));return c*=n*u,d*=o*u,c+=e.offset*n,d+=e.offset*o,{x:r.x+c,y:r.y+d}}Object(o.a)(I.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,e,a){this._rotation=a,this._rect={x:e.x+t.x,y:e.y+t.y,w:e.w,h:e.h}},contains:function(t){var e=this,a=e._rect;return!((t=j(t,e.center(),-e._rotation)).x<a.x-1||t.y<a.y-1||t.x>a.x+a.w+2||t.y>a.y+a.h+2)},intersects:function(t){var e,a,r,n=this._points(),o=t._points(),i=[$(n[0],n[1]),$(n[0],n[3])];for(this._rotation!==t._rotation&&i.push($(o[0],o[1]),$(o[0],o[3])),e=0;e<i.length;++e)if(a=M(n,i[e]),r=M(o,i[e]),a.max<r.min||r.max<a.min)return!1;return!0},_points:function(){var t=this,e=t._rect,a=t._rotation,r=t.center();return[j({x:e.x,y:e.y},r,a),j({x:e.x+e.w,y:e.y},r,a),j({x:e.x+e.w,y:e.y+e.h},r,a),j({x:e.x,y:e.y+e.h},r,a)]}});var P={prepare:function(t){var e,a,r,n,o,i=[];for(e=0,r=t.length;e<r;++e)for(a=0,n=t[e].length;a<n;++a)o=t[e][a],i.push(o),o.$layout={_box:new I,_hidable:!1,_visible:!0,_set:e,_idx:a};return i.sort((function(t,e){var a=t.$layout,r=e.$layout;return a._idx===r._idx?r._set-a._set:r._idx-a._idx})),this.update(i),i},update:function(t){var e,a,r,n,o,i=!1;for(e=0,a=t.length;e<a;++e)n=(r=t[e]).model(),(o=r.$layout)._hidable=n&&"auto"===n.display,o._visible=r.visible(),i|=o._hidable;i&&function(t){var e,a,r,n,o,i,l;for(e=0,a=t.length;e<a;++e)(n=(r=t[e]).$layout)._visible&&(l=new Proxy(r._el,{get:(t,e)=>t.getProps([e],!0)[e]}),o=r.geometry(),i=S(l,r.model(),o),n._box.update(i,o,r.rotation()));(function(t,e){var a,r,n,o;for(a=t.length-1;a>=0;--a)for(n=t[a].$layout,r=a-1;r>=0&&n._visible;--r)(o=t[r].$layout)._visible&&n._box.intersects(o._box)&&e(n,o)})(t,(function(t,e){var a=t._hidable,r=e._hidable;a&&r||r?e._visible=!1:a&&(t._visible=!1)}))}(t)},lookup:function(t,e){var a,r;for(a=t.length-1;a>=0;--a)if((r=t[a].$layout)&&r._visible&&r._box.contains(e))return t[a];return null},draw:function(t,e){var a,r,n,o,i,l;for(a=0,r=e.length;a<r;++a)(o=(n=e[a]).$layout)._visible&&(i=n.geometry(),l=S(n._el,n.model(),i),o._box.update(l,i,n.rotation()),n.draw(t,l))}},A="$default";function E(t,e,a){if(e){var r,n=a.$context,i=a.$groups;e[i._set]&&(r=e[i._set][i._key])&&!0===Object(o.o)(r,[n])&&(t.$datalabels._dirty=!0,a.update(n))}}function B(t,e){var a,r,n=t.$datalabels,o=n._listeners;if(o.enter||o.leave){if("mousemove"===e.type)r=P.lookup(n._labels,e);else if("mouseout"!==e.type)return;a=n._hovered,n._hovered=r,function(t,e,a,r){var n,o;(a||r)&&(a?r?a!==r&&(o=n=!0):o=!0:n=!0,o&&E(t,e.leave,a),n&&E(t,e.enter,r))}(t,o,a,r)}}var F={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if(Object(o.Cb)(t))return null;var e,a,r,n=t;if(Object(o.Bb)(t))if(Object(o.Cb)(t.label))if(Object(o.Cb)(t.r))for(n="",r=0,a=(e=Object.keys(t)).length;r<a;++r)n+=(0!==r?", ":"")+e[r]+": "+t[e[r]];else n=t.r;else n=t.label;return""+n},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t.$datalabels={_actives:[]}},beforeUpdate:function(t){var e=t.$datalabels;e._listened=!1,e._listeners={},e._datasets=[],e._labels=[]},afterDatasetUpdate:function(t,e,a){var r,n,i,l,s,c,d,u,b=e.index,f=t.$datalabels,h=f._datasets[b]=[],x=t.isDatasetVisible(b),y=t.data.datasets[b],v=function(t,e){var a,r,n,i=t.datalabels,l=[];return!1===i?null:(!0===i&&(i={}),e=Object(o.a)({},[e,i]),r=e.labels||{},n=Object.keys(r),delete e.labels,n.length?n.forEach((function(t){r[t]&&l.push(Object(o.a)({},[e,r[t],{_key:t}]))})):l.push(e),a=l.reduce((function(t,e){return Object(o.e)(e.listeners||{},(function(a,r){t[r]=t[r]||{},t[r][e._key||A]=a})),delete e.listeners,t}),{}),{labels:l,listeners:a})}(y,a),p=e.meta.data||[],_=t.ctx;for(_.save(),r=0,i=p.length;r<i;++r)if((d=p[r]).$datalabels=[],x&&d&&t.getDataVisibility(r)&&!d.skip)for(n=0,l=v.labels.length;n<l;++n)c=(s=v.labels[n])._key,(u=new C(s,_,d,r)).$groups={_set:b,_key:c||A},u.$context={active:!1,chart:t,dataIndex:r,dataset:y,datasetIndex:b},u.update(u.$context),d.$datalabels.push(u),h.push(u);_.restore(),Object(o.a)(f._listeners,v.listeners,{merger:function(t,a,r){a[t]=a[t]||{},a[t][e.index]=r[t],f._listened=!0}})},afterUpdate:function(t,e){t.$datalabels._labels=P.prepare(t.$datalabels._datasets,e)},afterDatasetsDraw:function(t){P.draw(t,t.$datalabels._labels)},beforeEvent:function(t,e){if(t.$datalabels._listened){var a=e.event;switch(a.type){case"mousemove":case"mouseout":B(t,a);break;case"click":!function(t,e){var a=t.$datalabels,r=a._listeners.click,n=r&&P.lookup(a._labels,e);n&&E(t,r,n)}(t,a)}}},afterEvent:function(t){var e,a,r,n,o,i,l,s=t.$datalabels,c=s._actives,d=s._actives=t.getActiveElements(),b=u(c,d);for(e=0,a=b.length;e<a;++e)if((o=b[e])[1])for(r=0,n=(l=o[0].element.$datalabels||[]).length;r<n;++r)(i=l[r]).$context.active=1===o[1],i.update(i.$context);(s._dirty||b.length)&&(P.update(s._labels),t.render()),delete s._dirty}},R=a("tILH"),W=a("10jV");n.c.font.family="'FK Grotesk Neue', 'Helvetica Neue', sans-serif",n.c.color="rgb(201, 201, 201)";e.default=function(){var t,e=Object(W.a)("834px"),a=Object(W.a)("600px"),o=Object(W.a)("500px"),i=Object(W.a)("400px"),l=Object(R.a)(),s=l.ref,c=l.GENERATE_CHART_IMAGE;(0,l.printBase64Image)("gpuProver - ".concat((t={tablet:e,below400:i,below500:o,below600:a}).below400?"below 400px":t.below500?"below 500px":t.below600?"below 600px":t.tablet?"below 834px":"above 834px"));var d={labels:a?[["1","million"],["10","million"],["100","million"]]:["1,000,000","10,000,000","100,000,000"],datasets:[{label:"bellman",data:[5.4,60,563],fill:!1,backgroundColor:"#00ccff",borderColor:"#00ccff"},{label:"bellperson CPU",data:[4.4,54,490],fill:!1,backgroundColor:"#FEC942",borderColor:"#FEC942"},{label:"bellperson OpenCL",data:[2.1,15.5,138],fill:!1,backgroundColor:"#FB39FF",borderColor:"#FB39FF"},{label:"bellperson CUDA",data:[1.6,11,100],fill:!1,backgroundColor:"#4DFEA9",borderColor:"#4DFEA9"}]},u={animation:!c,animations:{x:{from:0,duration:1e3,easing:"easeOutQuint"}},maintainAspectRatio:!1,layout:{padding:{top:e?30:0,right:a?0:e?175:210}},elements:{point:{pointStyle:"rect",radius:8},line:{borderWidth:1,tension:.3}},scales:{x:{ticks:{font:{size:16},align:"start"},grid:{tickLength:e?28:40,lineWidth:0}},y:{ticks:{stepSize:120,padding:e?-9:28,mirror:e,labelOffset:e?-18:0,font:{size:16},callback:function(t){return"".concat(t,"s")}},grid:{drawBorder:!1,color:"rgba(201, 201, 201, 0.5)"}}},plugins:{datalabels:{color:function(t){return t.dataset.backgroundColor},formatter:function(t,e){return e.dataset.label},display:function(t){return 2===t.dataIndex},anchor:"center",align:function(t){return i?[202,200,251,241][t.datasetIndex]:o?[191,186,229,215][t.datasetIndex]:a?[188,183,216,204][t.datasetIndex]:"right"},offset:function(t){return i?[85,24,128,92][t.datasetIndex]:o?[182,123,162,145][t.datasetIndex]:a?[262,203,214,213][t.datasetIndex]:30},font:{size:e?16:20}},legend:{display:!1}}};return Object(r.jsx)("div",{style:{position:"relative",height:410,width:"100%"},children:Object(r.jsx)(n.b,{data:d,ref:s,options:u,fallbackContent:Object(r.jsx)("p",{children:"Number of constraints vs runtime in seconds"}),plugins:[F]})})}}}]);