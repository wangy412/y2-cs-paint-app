(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],h=0,p=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},n={app:0},a=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"1ae9":function(e,t,r){},5448:function(e,t,r){"use strict";r("1ae9")},a347:function(e,t,r){},af09:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o,n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"},on:{mousemove:e.updateMousePos}},[e.showingSizeIndicator?r("div",{style:e.sizeIndicatorStyles,attrs:{id:"tool-size-indicator"}}):e._e(),r("main",[r("div",{staticClass:"sidebar left"},[r("h2",[e._v("Tools")]),r("div",{attrs:{id:"tools"}},e._l(e.$store.tools,(function(t,o){return r("button",{key:o,class:{selectedTool:o==e.$store.currentToolIdx},on:{click:function(t){return e.changeTool(o)}}},[e._v(" "+e._s(t.name)+" ")])})),0),r("h2",[e._v("Options")]),r("div",{attrs:{id:"tool-options"}},e._l(e.$store.currentTool.options,(function(t,o){return r("div",{key:o,staticStyle:{"text-align":"left"}},[r("label",[e._v(e._s(e.titleCase(o)))]),"boolean"!=t.type?r("br"):e._e(),"number"==t.type?r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"option.value",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.value},on:{input:function(r){r.target.composing||e.$set(t,"value",e._n(r.target.value))},blur:function(t){return e.$forceUpdate()}}}):"color"==t.type?r("chrome-picker",{staticClass:"color-picker",attrs:{value:t.value},on:{input:function(e){return t.value=e.hex8}}}):"boolean"==t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"option.value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(r){var o=t.value,n=r.target,a=!!n.checked;if(Array.isArray(o)){var i=null,s=e._i(o,i);n.checked?s<0&&e.$set(t,"value",o.concat([i])):s>-1&&e.$set(t,"value",o.slice(0,s).concat(o.slice(s+1)))}else e.$set(t,"value",a)}}}):e._e()],1)})),0)]),r("div",[r("Canvas",{on:{mouseover:function(t){e.hoveringCanvas=!0},mouseleave:function(t){e.hoveringCanvas=!1}}})],1),r("div",{staticClass:"sidebar right"},[r("h2",[e._v("Layers")]),r("draggable",{attrs:{animation:200},model:{value:e.$store.layers,callback:function(t){e.$set(e.$store,"layers",t)},expression:"$store.layers"}},[r("transition-group",{attrs:{type:"transition"}},e._l(e.$store.layers,(function(t,o){return r("div",{key:t.name,staticClass:"layer",class:{selectedLayer:o==e.$store.currentLayerIdx},on:{click:function(t){return e.clickedLayer(o)}}},[e._v(" "+e._s(t.name)+" ")])})),0)],1),r("div",{staticClass:"center-child"},[r("button",{on:{click:e.addLayer}},[e._v("Add Layer")])]),r("p",[e._v(e._s(e.$store.currentPrefixedShortcutKey))]),r("h2",[e._v("Actions")]),r("button",{on:{click:e.clearLayer}},[e._v("Clear Layer")]),r("button",{on:{click:e.saveCanvas}},[e._v("Save as Image")])],1)])])},i=[],s=r("d4ec"),c=r("bee2"),u=r("262e"),l=r("2caf"),h=r("9ab4"),p=r("1b40"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"canvas"},on:{mouseover:function(t){return e.$emit("mouseover")},mouseleave:function(t){return e.$emit("mouseleave")}}})},f=[],d=r("b85c"),y=r("3425"),b=r.n(y);r("cb29"),r("b0c0");(function(e){e[e["Pen"]=0]="Pen",e[e["Eraser"]=1]="Eraser",e[e["Rect"]=2]="Rect"})(o||(o={}));var g=function e(){Object(s["a"])(this,e)},m=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(e,n){var a;return Object(s["a"])(this,r),a=t.call(this),a.type=o.Pen,a.name="Pen",a.options={size:{type:"number",value:null!==e&&void 0!==e?e:3},color:{type:"color",value:null!==n&&void 0!==n?n:"white"}},a}return r}(g),k=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(e){var n;return Object(s["a"])(this,r),n=t.call(this),n.type=o.Eraser,n.name="Eraser",n.options={size:{type:"number",value:null!==e&&void 0!==e?e:10}},n}return r}(g),$=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(e,n,a,i,c,u){var l;return Object(s["a"])(this,r),l=t.call(this),l.type=o.Rect,l.name="Rect",l.options={stroke:{type:"boolean",value:null===e||void 0===e||e},strokeWeight:{type:"number",value:null!==n&&void 0!==n?n:3},strokeColor:{type:"color",value:null!==a&&void 0!==a?a:"white"},fill:{type:"boolean",value:null!==i&&void 0!==i&&i},fillColor:{type:"color",value:null!==c&&void 0!==c?c:"white"},cornerRadius:{type:"number",value:null!==u&&void 0!==u?u:0}},l}return r}(g),O=function e(){Object(s["a"])(this,e)},j=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(e,o,n){var a;return Object(s["a"])(this,r),a=t.call(this),a.points=e,a.tool=o,a.options=n,a}return r}(O),x=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(e,o,n,a){var i;return Object(s["a"])(this,r),i=t.call(this),i.topLeft=e,i.bottomRight=o,i.tool=n,i.options=a,i}return r}(O),w="black",S=r("53ca");function C(e){var t;if(null==e||"object"!=Object(S["a"])(e))return e;if(e instanceof Date)return t=new Date,t.setTime(e.getTime()),t;if(e instanceof Array){t=[];for(var r=0,o=e.length;r<o;r++)t[r]=C(e[r]);return t}if(e instanceof Object){for(var n in t={},e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=C(e[n]));return t}throw new Error("Unable to copy obj! Its type isn't supported.")}var _=function(){function e(t,r){Object(s["a"])(this,e),this.graphics=t.createGraphics(t.width,t.height),this.width=t.width,this.height=t.height,this.name=r,this.shapes=[],this.currentShapeIdx=null}return Object(c["a"])(e,[{key:"update",value:function(e){this.graphics.clear();var t,r=Object(d["a"])(this.shapes);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this.graphics.push(),n instanceof j){var a;this.graphics.noFill(),this.graphics.stroke(n.tool==o.Pen&&"color"in n.options?n.options.color.value:null!==(a=e.backgroundColor)&&void 0!==a?a:w),this.graphics.beginShape(),this.graphics.strokeWeight(n.options.size.value);var i,s=Object(d["a"])(n.points);try{for(s.s();!(i=s.n()).done;){var c=i.value;this.graphics.vertex(c.x,c.y)}}catch(u){s.e(u)}finally{s.f()}this.graphics.endShape()}else n instanceof x&&(n.options.fill.value?this.graphics.fill(n.options.fillColor.value):this.graphics.noFill(),n.options.stroke.value?this.graphics.stroke(n.options.strokeColor.value):this.graphics.noStroke(),this.graphics.strokeWeight(n.options.strokeWeight.value),this.graphics.rectMode(this.graphics.CORNERS),this.graphics.rect(n.topLeft.x,n.topLeft.y,n.bottomRight.x,n.bottomRight.y,n.options.cornerRadius.value));this.graphics.pop()}}catch(u){r.e(u)}finally{r.f()}}},{key:"mouseDragged",value:function(e,t){var r=e.createVector(e.mouseX,e.mouseY);t instanceof m||t instanceof k?null==this.currentShapeIdx?(this.currentShapeIdx=this.shapes.length,this.shapes.push(new j([r],t.type,C(t.options)))):this.currentShape instanceof j&&this.currentShape.points.push(r):t instanceof $&&(null==this.currentShapeIdx?(this.currentShapeIdx=this.shapes.length,this.shapes.push(new x(r,r,t.type,C(t.options)))):this.currentShape instanceof x&&(this.currentShape.bottomRight=r))}},{key:"mouseReleased",value:function(){this.currentShapeIdx=null}},{key:"clear",value:function(){this.shapes=[],this.currentShapeIdx=null}},{key:"currentShape",get:function(){return null==this.currentShapeIdx?null:this.shapes[this.currentShapeIdx]}}]),e}(),P={createLayer:"createLayer",saveCanvas:"saveCanvas"},I=P;function L(e,t){return Object.hasOwnProperty.call(e,t)}var T=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(s["a"])(this,r),t.apply(this,arguments)}return Object(c["a"])(r,[{key:"mounted",value:function(){var e=this,t=function(t){var r;e.$root.$on(I.createLayer,(function(){e.$store.layers.push(new _(t,"Layer ".concat(e.$store.layers.length+1))),e.$store.currentLayerIdx=e.$store.layers.length-1})),e.$root.$on(I.saveCanvas,(function(){if(null==r)alert("Sorry, the canvas hasn't loaded yet");else{var e,o=null===(e=prompt("File format (png|jpg)","png"))||void 0===e?void 0:e.toLowerCase();"png"!=o&&"jpg"!=o?alert("Invalid format, can only be 'png' or 'jpg'"):t.save(r,"sketch.".concat(o))}})),t.setup=function(){r=t.createCanvas(.5*window.innerWidth,window.innerHeight),e.$store.layers=[new _(t,"Layer 1")],console.log(e.$store)},t.draw=function(){var r;t.background(null!==(r=e.$store.backgroundColor)&&void 0!==r?r:t.color(0));var o,n=Object(d["a"])(e.$store.layers);try{for(n.s();!(o=n.n()).done;){var a=o.value;a.update(e.$store)}}catch(u){n.e(u)}finally{n.f()}var i,s=Object(d["a"])(e.$store.layers);try{for(s.s();!(i=s.n()).done;){var c=i.value;t.image(c.graphics,0,0)}}catch(u){s.e(u)}finally{s.f()}},t.mouseDragged=function(){var r;null===(r=e.$store.currentLayer)||void 0===r||r.mouseDragged(t,e.$store.currentTool)},t.mouseReleased=function(){var t;null===(t=e.$store.currentLayer)||void 0===t||t.mouseReleased()},t.keyPressed=function(){var r=function(t){if(e.$store.currentPrefixedShortcutKey==e.$config.changeColorShortcutPrefix){if(L(e.$store.currentTool.options,"color")){var r=e.$config.changeColorShortcutMap[t];r?(console.log("Changing color to ".concat(r,"...")),e.$store.currentTool.options.color.value=r):console.log("Invalid color: ".concat(t))}e.$store.currentPrefixedShortcutKey=null}};switch(t.key){case"b":r("b");break;case"c":e.$store.currentPrefixedShortcutKey="c",setTimeout((function(){e.$store.currentPrefixedShortcutKey=null}),1e3);break;case"e":console.log("E key pressed"),e.$store.setCurrentTool(o.Eraser);break;case"p":e.$store.setCurrentTool(o.Pen);break;case"w":r("w");break;default:r(t.key);break}}};new b.a(t,document.getElementById("canvas"))}}]),r}(p["b"]);T=Object(h["a"])([p["a"]],T);var R=T,E=R,z=(r("5448"),r("2877")),M=Object(z["a"])(E,v,f,!1,null,"1144b118",null),A=M.exports,D=r("b76a"),K=r.n(D),W=r("c345"),F=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(s["a"])(this,r),e=t.apply(this,arguments),e.hoveringCanvas=!1,e.mousePos={x:0,y:0},e}return Object(c["a"])(r,[{key:"updateMousePos",value:function(e){this.mousePos.x=e.pageX,this.mousePos.y=e.pageY}},{key:"addLayer",value:function(){this.$root.$emit(I.createLayer)}},{key:"changeTool",value:function(e){this.$store.currentToolIdx=e}},{key:"clearLayer",value:function(){this.$store.currentLayer.clear()}},{key:"updateOption",value:function(e){console.log(e)}},{key:"clickedLayer",value:function(e){this.$store.currentLayerIdx=e}},{key:"saveCanvas",value:function(){this.$root.$emit(I.saveCanvas)}},{key:"sizeIndicatorStyles",get:function(){var e=3;return this.$store.currentTool instanceof m||this.$store.currentTool instanceof k?e=this.$store.currentTool.options.size.value:this.$store.currentTool instanceof $&&(e=this.$store.currentTool.options.stroke?this.$store.currentTool.options.strokeWeight.value:e),e<1&&(e=1),{width:e+"px",height:e+"px",top:this.mousePos.y-e/2+"px",left:this.mousePos.x-e/2+"px"}}},{key:"showingSizeIndicator",get:function(){return this.hoveringCanvas}}]),r}(p["b"]);F=Object(h["a"])([Object(p["a"])({components:{Canvas:A,draggable:K.a,"chrome-picker":W["Chrome"]}})],F);var N=F,U=N,B=(r("dfac"),Object(z["a"])(U,a,i,!1,null,"5bd761cf",null)),J=B.exports,X=(r("c740"),function(){function e(){Object(s["a"])(this,e),this.backgroundColor="black",this.currentPrefixedShortcutKey=null,this.layers=[],this.currentLayerIdx=0,this.tools=[new m,new k,new $],this.currentToolIdx=0}return Object(c["a"])(e,[{key:"currentTool",get:function(){return this.tools[this.currentToolIdx]}},{key:"setCurrentTool",value:function(e){this.currentToolIdx=this.tools.findIndex((function(t){return t.type==e}))}},{key:"currentLayer",get:function(){return this.layers[this.currentLayerIdx]}}]),e}()),Y=(r("a347"),function e(){Object(s["a"])(this,e),this.changeColorShortcutPrefix="c",this.prefixShortcutDuration=1e3,this.changeColorShortcutMap={b:"blue",w:"white",g:"green",r:"red",y:"yellow",B:"black"}});r("ac1f"),r("5319");function G(e){return e.replace(/([A-Z])/g,(function(e){return" ".concat(e)})).replace(/^./,(function(e){return e.toUpperCase()}))}n["a"].config.productionTip=!1,n["a"].prototype.$store=n["a"].observable(new X),n["a"].prototype.$config=n["a"].observable(new Y),n["a"].mixin({methods:{titleCase:G}}),new n["a"]({render:function(e){return e(J)}}).$mount("#app")},dfac:function(e,t,r){"use strict";r("af09")}});
//# sourceMappingURL=app.7c9a67ba.js.map