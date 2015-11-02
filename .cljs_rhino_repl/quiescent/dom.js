// Compiled by ClojureScript 1.7.58 {}
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Return a DOM node constructor function. The argument may be any
 * value accepted by React.createElement (that is, the string name of a
 * HTML tag, or an instance of ReactClass).
 * 
 * Returns a function that takes props and children (the same as the
 * built-in ReactJS element constructors).
 */
quiescent.dom.constructor = (function quiescent$dom$constructor(type){
return (function() { 
var G__38413__delegate = function (props,children){
return cljs.core.apply.call(null,React.createElement,type,cljs.core.clj__GT_js.call(null,props),children);
};
var G__38413 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__38414__i = 0, G__38414__a = new Array(arguments.length -  1);
while (G__38414__i < G__38414__a.length) {G__38414__a[G__38414__i] = arguments[G__38414__i + 1]; ++G__38414__i;}
  children = new cljs.core.IndexedSeq(G__38414__a,0);
} 
return G__38413__delegate.call(this,props,children);};
G__38413.cljs$lang$maxFixedArity = 1;
G__38413.cljs$lang$applyTo = (function (arglist__38415){
var props = cljs.core.first(arglist__38415);
var children = cljs.core.rest(arglist__38415);
return G__38413__delegate(props,children);
});
G__38413.cljs$core$IFn$_invoke$arity$variadic = G__38413__delegate;
return G__38413;
})()
;
});
var ctor__35368__auto___38535 = quiescent.dom.constructor.call(null,"a");
quiescent.dom.a = ((function (ctor__35368__auto___38535){
return (function quiescent$dom$a(){
var args__32002__auto__ = [];
var len__31995__auto___38536 = arguments.length;
var i__31996__auto___38537 = (0);
while(true){
if((i__31996__auto___38537 < len__31995__auto___38536)){
args__32002__auto__.push((arguments[i__31996__auto___38537]));

var G__38538 = (i__31996__auto___38537 + (1));
i__31996__auto___38537 = G__38538;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38535))
;

quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38535){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38535,args__35369__auto__);
});})(ctor__35368__auto___38535))
;

quiescent.dom.a.cljs$lang$maxFixedArity = (0);

quiescent.dom.a.cljs$lang$applyTo = ((function (ctor__35368__auto___38535){
return (function (seq38416){
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38416));
});})(ctor__35368__auto___38535))
;

var ctor__35368__auto___38539 = quiescent.dom.constructor.call(null,"abbr");
quiescent.dom.abbr = ((function (ctor__35368__auto___38539){
return (function quiescent$dom$abbr(){
var args__32002__auto__ = [];
var len__31995__auto___38540 = arguments.length;
var i__31996__auto___38541 = (0);
while(true){
if((i__31996__auto___38541 < len__31995__auto___38540)){
args__32002__auto__.push((arguments[i__31996__auto___38541]));

var G__38542 = (i__31996__auto___38541 + (1));
i__31996__auto___38541 = G__38542;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38539))
;

quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38539){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38539,args__35369__auto__);
});})(ctor__35368__auto___38539))
;

quiescent.dom.abbr.cljs$lang$maxFixedArity = (0);

quiescent.dom.abbr.cljs$lang$applyTo = ((function (ctor__35368__auto___38539){
return (function (seq38417){
return quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38417));
});})(ctor__35368__auto___38539))
;

var ctor__35368__auto___38543 = quiescent.dom.constructor.call(null,"address");
quiescent.dom.address = ((function (ctor__35368__auto___38543){
return (function quiescent$dom$address(){
var args__32002__auto__ = [];
var len__31995__auto___38544 = arguments.length;
var i__31996__auto___38545 = (0);
while(true){
if((i__31996__auto___38545 < len__31995__auto___38544)){
args__32002__auto__.push((arguments[i__31996__auto___38545]));

var G__38546 = (i__31996__auto___38545 + (1));
i__31996__auto___38545 = G__38546;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38543))
;

quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38543){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38543,args__35369__auto__);
});})(ctor__35368__auto___38543))
;

quiescent.dom.address.cljs$lang$maxFixedArity = (0);

quiescent.dom.address.cljs$lang$applyTo = ((function (ctor__35368__auto___38543){
return (function (seq38418){
return quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38418));
});})(ctor__35368__auto___38543))
;

var ctor__35368__auto___38547 = quiescent.dom.constructor.call(null,"area");
quiescent.dom.area = ((function (ctor__35368__auto___38547){
return (function quiescent$dom$area(){
var args__32002__auto__ = [];
var len__31995__auto___38548 = arguments.length;
var i__31996__auto___38549 = (0);
while(true){
if((i__31996__auto___38549 < len__31995__auto___38548)){
args__32002__auto__.push((arguments[i__31996__auto___38549]));

var G__38550 = (i__31996__auto___38549 + (1));
i__31996__auto___38549 = G__38550;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38547))
;

quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38547){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38547,args__35369__auto__);
});})(ctor__35368__auto___38547))
;

quiescent.dom.area.cljs$lang$maxFixedArity = (0);

quiescent.dom.area.cljs$lang$applyTo = ((function (ctor__35368__auto___38547){
return (function (seq38419){
return quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38419));
});})(ctor__35368__auto___38547))
;

var ctor__35368__auto___38551 = quiescent.dom.constructor.call(null,"article");
quiescent.dom.article = ((function (ctor__35368__auto___38551){
return (function quiescent$dom$article(){
var args__32002__auto__ = [];
var len__31995__auto___38552 = arguments.length;
var i__31996__auto___38553 = (0);
while(true){
if((i__31996__auto___38553 < len__31995__auto___38552)){
args__32002__auto__.push((arguments[i__31996__auto___38553]));

var G__38554 = (i__31996__auto___38553 + (1));
i__31996__auto___38553 = G__38554;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38551))
;

quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38551){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38551,args__35369__auto__);
});})(ctor__35368__auto___38551))
;

quiescent.dom.article.cljs$lang$maxFixedArity = (0);

quiescent.dom.article.cljs$lang$applyTo = ((function (ctor__35368__auto___38551){
return (function (seq38420){
return quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38420));
});})(ctor__35368__auto___38551))
;

var ctor__35368__auto___38555 = quiescent.dom.constructor.call(null,"aside");
quiescent.dom.aside = ((function (ctor__35368__auto___38555){
return (function quiescent$dom$aside(){
var args__32002__auto__ = [];
var len__31995__auto___38556 = arguments.length;
var i__31996__auto___38557 = (0);
while(true){
if((i__31996__auto___38557 < len__31995__auto___38556)){
args__32002__auto__.push((arguments[i__31996__auto___38557]));

var G__38558 = (i__31996__auto___38557 + (1));
i__31996__auto___38557 = G__38558;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38555))
;

quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38555){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38555,args__35369__auto__);
});})(ctor__35368__auto___38555))
;

quiescent.dom.aside.cljs$lang$maxFixedArity = (0);

quiescent.dom.aside.cljs$lang$applyTo = ((function (ctor__35368__auto___38555){
return (function (seq38421){
return quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38421));
});})(ctor__35368__auto___38555))
;

var ctor__35368__auto___38559 = quiescent.dom.constructor.call(null,"audio");
quiescent.dom.audio = ((function (ctor__35368__auto___38559){
return (function quiescent$dom$audio(){
var args__32002__auto__ = [];
var len__31995__auto___38560 = arguments.length;
var i__31996__auto___38561 = (0);
while(true){
if((i__31996__auto___38561 < len__31995__auto___38560)){
args__32002__auto__.push((arguments[i__31996__auto___38561]));

var G__38562 = (i__31996__auto___38561 + (1));
i__31996__auto___38561 = G__38562;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38559))
;

quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38559){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38559,args__35369__auto__);
});})(ctor__35368__auto___38559))
;

quiescent.dom.audio.cljs$lang$maxFixedArity = (0);

quiescent.dom.audio.cljs$lang$applyTo = ((function (ctor__35368__auto___38559){
return (function (seq38422){
return quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38422));
});})(ctor__35368__auto___38559))
;

var ctor__35368__auto___38563 = quiescent.dom.constructor.call(null,"b");
quiescent.dom.b = ((function (ctor__35368__auto___38563){
return (function quiescent$dom$b(){
var args__32002__auto__ = [];
var len__31995__auto___38564 = arguments.length;
var i__31996__auto___38565 = (0);
while(true){
if((i__31996__auto___38565 < len__31995__auto___38564)){
args__32002__auto__.push((arguments[i__31996__auto___38565]));

var G__38566 = (i__31996__auto___38565 + (1));
i__31996__auto___38565 = G__38566;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38563))
;

quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38563){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38563,args__35369__auto__);
});})(ctor__35368__auto___38563))
;

quiescent.dom.b.cljs$lang$maxFixedArity = (0);

quiescent.dom.b.cljs$lang$applyTo = ((function (ctor__35368__auto___38563){
return (function (seq38423){
return quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38423));
});})(ctor__35368__auto___38563))
;

var ctor__35368__auto___38567 = quiescent.dom.constructor.call(null,"base");
quiescent.dom.base = ((function (ctor__35368__auto___38567){
return (function quiescent$dom$base(){
var args__32002__auto__ = [];
var len__31995__auto___38568 = arguments.length;
var i__31996__auto___38569 = (0);
while(true){
if((i__31996__auto___38569 < len__31995__auto___38568)){
args__32002__auto__.push((arguments[i__31996__auto___38569]));

var G__38570 = (i__31996__auto___38569 + (1));
i__31996__auto___38569 = G__38570;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38567))
;

quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38567){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38567,args__35369__auto__);
});})(ctor__35368__auto___38567))
;

quiescent.dom.base.cljs$lang$maxFixedArity = (0);

quiescent.dom.base.cljs$lang$applyTo = ((function (ctor__35368__auto___38567){
return (function (seq38424){
return quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38424));
});})(ctor__35368__auto___38567))
;

var ctor__35368__auto___38571 = quiescent.dom.constructor.call(null,"bdi");
quiescent.dom.bdi = ((function (ctor__35368__auto___38571){
return (function quiescent$dom$bdi(){
var args__32002__auto__ = [];
var len__31995__auto___38572 = arguments.length;
var i__31996__auto___38573 = (0);
while(true){
if((i__31996__auto___38573 < len__31995__auto___38572)){
args__32002__auto__.push((arguments[i__31996__auto___38573]));

var G__38574 = (i__31996__auto___38573 + (1));
i__31996__auto___38573 = G__38574;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38571))
;

quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38571){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38571,args__35369__auto__);
});})(ctor__35368__auto___38571))
;

quiescent.dom.bdi.cljs$lang$maxFixedArity = (0);

quiescent.dom.bdi.cljs$lang$applyTo = ((function (ctor__35368__auto___38571){
return (function (seq38425){
return quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38425));
});})(ctor__35368__auto___38571))
;

var ctor__35368__auto___38575 = quiescent.dom.constructor.call(null,"bdo");
quiescent.dom.bdo = ((function (ctor__35368__auto___38575){
return (function quiescent$dom$bdo(){
var args__32002__auto__ = [];
var len__31995__auto___38576 = arguments.length;
var i__31996__auto___38577 = (0);
while(true){
if((i__31996__auto___38577 < len__31995__auto___38576)){
args__32002__auto__.push((arguments[i__31996__auto___38577]));

var G__38578 = (i__31996__auto___38577 + (1));
i__31996__auto___38577 = G__38578;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38575))
;

quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38575){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38575,args__35369__auto__);
});})(ctor__35368__auto___38575))
;

quiescent.dom.bdo.cljs$lang$maxFixedArity = (0);

quiescent.dom.bdo.cljs$lang$applyTo = ((function (ctor__35368__auto___38575){
return (function (seq38426){
return quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38426));
});})(ctor__35368__auto___38575))
;

var ctor__35368__auto___38579 = quiescent.dom.constructor.call(null,"big");
quiescent.dom.big = ((function (ctor__35368__auto___38579){
return (function quiescent$dom$big(){
var args__32002__auto__ = [];
var len__31995__auto___38580 = arguments.length;
var i__31996__auto___38581 = (0);
while(true){
if((i__31996__auto___38581 < len__31995__auto___38580)){
args__32002__auto__.push((arguments[i__31996__auto___38581]));

var G__38582 = (i__31996__auto___38581 + (1));
i__31996__auto___38581 = G__38582;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38579))
;

quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38579){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38579,args__35369__auto__);
});})(ctor__35368__auto___38579))
;

quiescent.dom.big.cljs$lang$maxFixedArity = (0);

quiescent.dom.big.cljs$lang$applyTo = ((function (ctor__35368__auto___38579){
return (function (seq38427){
return quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38427));
});})(ctor__35368__auto___38579))
;

var ctor__35368__auto___38583 = quiescent.dom.constructor.call(null,"blockquote");
quiescent.dom.blockquote = ((function (ctor__35368__auto___38583){
return (function quiescent$dom$blockquote(){
var args__32002__auto__ = [];
var len__31995__auto___38584 = arguments.length;
var i__31996__auto___38585 = (0);
while(true){
if((i__31996__auto___38585 < len__31995__auto___38584)){
args__32002__auto__.push((arguments[i__31996__auto___38585]));

var G__38586 = (i__31996__auto___38585 + (1));
i__31996__auto___38585 = G__38586;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38583))
;

quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38583){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38583,args__35369__auto__);
});})(ctor__35368__auto___38583))
;

quiescent.dom.blockquote.cljs$lang$maxFixedArity = (0);

quiescent.dom.blockquote.cljs$lang$applyTo = ((function (ctor__35368__auto___38583){
return (function (seq38428){
return quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38428));
});})(ctor__35368__auto___38583))
;

var ctor__35368__auto___38587 = quiescent.dom.constructor.call(null,"body");
quiescent.dom.body = ((function (ctor__35368__auto___38587){
return (function quiescent$dom$body(){
var args__32002__auto__ = [];
var len__31995__auto___38588 = arguments.length;
var i__31996__auto___38589 = (0);
while(true){
if((i__31996__auto___38589 < len__31995__auto___38588)){
args__32002__auto__.push((arguments[i__31996__auto___38589]));

var G__38590 = (i__31996__auto___38589 + (1));
i__31996__auto___38589 = G__38590;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38587))
;

quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38587){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38587,args__35369__auto__);
});})(ctor__35368__auto___38587))
;

quiescent.dom.body.cljs$lang$maxFixedArity = (0);

quiescent.dom.body.cljs$lang$applyTo = ((function (ctor__35368__auto___38587){
return (function (seq38429){
return quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38429));
});})(ctor__35368__auto___38587))
;

var ctor__35368__auto___38591 = quiescent.dom.constructor.call(null,"br");
quiescent.dom.br = ((function (ctor__35368__auto___38591){
return (function quiescent$dom$br(){
var args__32002__auto__ = [];
var len__31995__auto___38592 = arguments.length;
var i__31996__auto___38593 = (0);
while(true){
if((i__31996__auto___38593 < len__31995__auto___38592)){
args__32002__auto__.push((arguments[i__31996__auto___38593]));

var G__38594 = (i__31996__auto___38593 + (1));
i__31996__auto___38593 = G__38594;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38591))
;

quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38591){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38591,args__35369__auto__);
});})(ctor__35368__auto___38591))
;

quiescent.dom.br.cljs$lang$maxFixedArity = (0);

quiescent.dom.br.cljs$lang$applyTo = ((function (ctor__35368__auto___38591){
return (function (seq38430){
return quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38430));
});})(ctor__35368__auto___38591))
;

var ctor__35368__auto___38595 = quiescent.dom.constructor.call(null,"button");
quiescent.dom.button = ((function (ctor__35368__auto___38595){
return (function quiescent$dom$button(){
var args__32002__auto__ = [];
var len__31995__auto___38596 = arguments.length;
var i__31996__auto___38597 = (0);
while(true){
if((i__31996__auto___38597 < len__31995__auto___38596)){
args__32002__auto__.push((arguments[i__31996__auto___38597]));

var G__38598 = (i__31996__auto___38597 + (1));
i__31996__auto___38597 = G__38598;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38595))
;

quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38595){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38595,args__35369__auto__);
});})(ctor__35368__auto___38595))
;

quiescent.dom.button.cljs$lang$maxFixedArity = (0);

quiescent.dom.button.cljs$lang$applyTo = ((function (ctor__35368__auto___38595){
return (function (seq38431){
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38431));
});})(ctor__35368__auto___38595))
;

var ctor__35368__auto___38599 = quiescent.dom.constructor.call(null,"canvas");
quiescent.dom.canvas = ((function (ctor__35368__auto___38599){
return (function quiescent$dom$canvas(){
var args__32002__auto__ = [];
var len__31995__auto___38600 = arguments.length;
var i__31996__auto___38601 = (0);
while(true){
if((i__31996__auto___38601 < len__31995__auto___38600)){
args__32002__auto__.push((arguments[i__31996__auto___38601]));

var G__38602 = (i__31996__auto___38601 + (1));
i__31996__auto___38601 = G__38602;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38599))
;

quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38599){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38599,args__35369__auto__);
});})(ctor__35368__auto___38599))
;

quiescent.dom.canvas.cljs$lang$maxFixedArity = (0);

quiescent.dom.canvas.cljs$lang$applyTo = ((function (ctor__35368__auto___38599){
return (function (seq38432){
return quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38432));
});})(ctor__35368__auto___38599))
;

var ctor__35368__auto___38603 = quiescent.dom.constructor.call(null,"caption");
quiescent.dom.caption = ((function (ctor__35368__auto___38603){
return (function quiescent$dom$caption(){
var args__32002__auto__ = [];
var len__31995__auto___38604 = arguments.length;
var i__31996__auto___38605 = (0);
while(true){
if((i__31996__auto___38605 < len__31995__auto___38604)){
args__32002__auto__.push((arguments[i__31996__auto___38605]));

var G__38606 = (i__31996__auto___38605 + (1));
i__31996__auto___38605 = G__38606;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38603))
;

quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38603){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38603,args__35369__auto__);
});})(ctor__35368__auto___38603))
;

quiescent.dom.caption.cljs$lang$maxFixedArity = (0);

quiescent.dom.caption.cljs$lang$applyTo = ((function (ctor__35368__auto___38603){
return (function (seq38433){
return quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38433));
});})(ctor__35368__auto___38603))
;

var ctor__35368__auto___38607 = quiescent.dom.constructor.call(null,"cite");
quiescent.dom.cite = ((function (ctor__35368__auto___38607){
return (function quiescent$dom$cite(){
var args__32002__auto__ = [];
var len__31995__auto___38608 = arguments.length;
var i__31996__auto___38609 = (0);
while(true){
if((i__31996__auto___38609 < len__31995__auto___38608)){
args__32002__auto__.push((arguments[i__31996__auto___38609]));

var G__38610 = (i__31996__auto___38609 + (1));
i__31996__auto___38609 = G__38610;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38607))
;

quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38607){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38607,args__35369__auto__);
});})(ctor__35368__auto___38607))
;

quiescent.dom.cite.cljs$lang$maxFixedArity = (0);

quiescent.dom.cite.cljs$lang$applyTo = ((function (ctor__35368__auto___38607){
return (function (seq38434){
return quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38434));
});})(ctor__35368__auto___38607))
;

var ctor__35368__auto___38611 = quiescent.dom.constructor.call(null,"code");
quiescent.dom.code = ((function (ctor__35368__auto___38611){
return (function quiescent$dom$code(){
var args__32002__auto__ = [];
var len__31995__auto___38612 = arguments.length;
var i__31996__auto___38613 = (0);
while(true){
if((i__31996__auto___38613 < len__31995__auto___38612)){
args__32002__auto__.push((arguments[i__31996__auto___38613]));

var G__38614 = (i__31996__auto___38613 + (1));
i__31996__auto___38613 = G__38614;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38611))
;

quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38611){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38611,args__35369__auto__);
});})(ctor__35368__auto___38611))
;

quiescent.dom.code.cljs$lang$maxFixedArity = (0);

quiescent.dom.code.cljs$lang$applyTo = ((function (ctor__35368__auto___38611){
return (function (seq38435){
return quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38435));
});})(ctor__35368__auto___38611))
;

var ctor__35368__auto___38615 = quiescent.dom.constructor.call(null,"col");
quiescent.dom.col = ((function (ctor__35368__auto___38615){
return (function quiescent$dom$col(){
var args__32002__auto__ = [];
var len__31995__auto___38616 = arguments.length;
var i__31996__auto___38617 = (0);
while(true){
if((i__31996__auto___38617 < len__31995__auto___38616)){
args__32002__auto__.push((arguments[i__31996__auto___38617]));

var G__38618 = (i__31996__auto___38617 + (1));
i__31996__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38615))
;

quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38615){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38615,args__35369__auto__);
});})(ctor__35368__auto___38615))
;

quiescent.dom.col.cljs$lang$maxFixedArity = (0);

quiescent.dom.col.cljs$lang$applyTo = ((function (ctor__35368__auto___38615){
return (function (seq38436){
return quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38436));
});})(ctor__35368__auto___38615))
;

var ctor__35368__auto___38619 = quiescent.dom.constructor.call(null,"colgroup");
quiescent.dom.colgroup = ((function (ctor__35368__auto___38619){
return (function quiescent$dom$colgroup(){
var args__32002__auto__ = [];
var len__31995__auto___38620 = arguments.length;
var i__31996__auto___38621 = (0);
while(true){
if((i__31996__auto___38621 < len__31995__auto___38620)){
args__32002__auto__.push((arguments[i__31996__auto___38621]));

var G__38622 = (i__31996__auto___38621 + (1));
i__31996__auto___38621 = G__38622;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38619))
;

quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38619){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38619,args__35369__auto__);
});})(ctor__35368__auto___38619))
;

quiescent.dom.colgroup.cljs$lang$maxFixedArity = (0);

quiescent.dom.colgroup.cljs$lang$applyTo = ((function (ctor__35368__auto___38619){
return (function (seq38437){
return quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38437));
});})(ctor__35368__auto___38619))
;

var ctor__35368__auto___38623 = quiescent.dom.constructor.call(null,"data");
quiescent.dom.data = ((function (ctor__35368__auto___38623){
return (function quiescent$dom$data(){
var args__32002__auto__ = [];
var len__31995__auto___38624 = arguments.length;
var i__31996__auto___38625 = (0);
while(true){
if((i__31996__auto___38625 < len__31995__auto___38624)){
args__32002__auto__.push((arguments[i__31996__auto___38625]));

var G__38626 = (i__31996__auto___38625 + (1));
i__31996__auto___38625 = G__38626;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38623))
;

quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38623){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38623,args__35369__auto__);
});})(ctor__35368__auto___38623))
;

quiescent.dom.data.cljs$lang$maxFixedArity = (0);

quiescent.dom.data.cljs$lang$applyTo = ((function (ctor__35368__auto___38623){
return (function (seq38438){
return quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38438));
});})(ctor__35368__auto___38623))
;

var ctor__35368__auto___38627 = quiescent.dom.constructor.call(null,"datalist");
quiescent.dom.datalist = ((function (ctor__35368__auto___38627){
return (function quiescent$dom$datalist(){
var args__32002__auto__ = [];
var len__31995__auto___38628 = arguments.length;
var i__31996__auto___38629 = (0);
while(true){
if((i__31996__auto___38629 < len__31995__auto___38628)){
args__32002__auto__.push((arguments[i__31996__auto___38629]));

var G__38630 = (i__31996__auto___38629 + (1));
i__31996__auto___38629 = G__38630;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38627))
;

quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38627){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38627,args__35369__auto__);
});})(ctor__35368__auto___38627))
;

quiescent.dom.datalist.cljs$lang$maxFixedArity = (0);

quiescent.dom.datalist.cljs$lang$applyTo = ((function (ctor__35368__auto___38627){
return (function (seq38439){
return quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38439));
});})(ctor__35368__auto___38627))
;

var ctor__35368__auto___38631 = quiescent.dom.constructor.call(null,"dd");
quiescent.dom.dd = ((function (ctor__35368__auto___38631){
return (function quiescent$dom$dd(){
var args__32002__auto__ = [];
var len__31995__auto___38632 = arguments.length;
var i__31996__auto___38633 = (0);
while(true){
if((i__31996__auto___38633 < len__31995__auto___38632)){
args__32002__auto__.push((arguments[i__31996__auto___38633]));

var G__38634 = (i__31996__auto___38633 + (1));
i__31996__auto___38633 = G__38634;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38631))
;

quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38631){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38631,args__35369__auto__);
});})(ctor__35368__auto___38631))
;

quiescent.dom.dd.cljs$lang$maxFixedArity = (0);

quiescent.dom.dd.cljs$lang$applyTo = ((function (ctor__35368__auto___38631){
return (function (seq38440){
return quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38440));
});})(ctor__35368__auto___38631))
;

var ctor__35368__auto___38635 = quiescent.dom.constructor.call(null,"del");
quiescent.dom.del = ((function (ctor__35368__auto___38635){
return (function quiescent$dom$del(){
var args__32002__auto__ = [];
var len__31995__auto___38636 = arguments.length;
var i__31996__auto___38637 = (0);
while(true){
if((i__31996__auto___38637 < len__31995__auto___38636)){
args__32002__auto__.push((arguments[i__31996__auto___38637]));

var G__38638 = (i__31996__auto___38637 + (1));
i__31996__auto___38637 = G__38638;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38635))
;

quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38635){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38635,args__35369__auto__);
});})(ctor__35368__auto___38635))
;

quiescent.dom.del.cljs$lang$maxFixedArity = (0);

quiescent.dom.del.cljs$lang$applyTo = ((function (ctor__35368__auto___38635){
return (function (seq38441){
return quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38441));
});})(ctor__35368__auto___38635))
;

var ctor__35368__auto___38639 = quiescent.dom.constructor.call(null,"details");
quiescent.dom.details = ((function (ctor__35368__auto___38639){
return (function quiescent$dom$details(){
var args__32002__auto__ = [];
var len__31995__auto___38640 = arguments.length;
var i__31996__auto___38641 = (0);
while(true){
if((i__31996__auto___38641 < len__31995__auto___38640)){
args__32002__auto__.push((arguments[i__31996__auto___38641]));

var G__38642 = (i__31996__auto___38641 + (1));
i__31996__auto___38641 = G__38642;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38639))
;

quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38639){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38639,args__35369__auto__);
});})(ctor__35368__auto___38639))
;

quiescent.dom.details.cljs$lang$maxFixedArity = (0);

quiescent.dom.details.cljs$lang$applyTo = ((function (ctor__35368__auto___38639){
return (function (seq38442){
return quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38442));
});})(ctor__35368__auto___38639))
;

var ctor__35368__auto___38643 = quiescent.dom.constructor.call(null,"dfn");
quiescent.dom.dfn = ((function (ctor__35368__auto___38643){
return (function quiescent$dom$dfn(){
var args__32002__auto__ = [];
var len__31995__auto___38644 = arguments.length;
var i__31996__auto___38645 = (0);
while(true){
if((i__31996__auto___38645 < len__31995__auto___38644)){
args__32002__auto__.push((arguments[i__31996__auto___38645]));

var G__38646 = (i__31996__auto___38645 + (1));
i__31996__auto___38645 = G__38646;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38643))
;

quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38643){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38643,args__35369__auto__);
});})(ctor__35368__auto___38643))
;

quiescent.dom.dfn.cljs$lang$maxFixedArity = (0);

quiescent.dom.dfn.cljs$lang$applyTo = ((function (ctor__35368__auto___38643){
return (function (seq38443){
return quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38443));
});})(ctor__35368__auto___38643))
;

var ctor__35368__auto___38647 = quiescent.dom.constructor.call(null,"div");
quiescent.dom.div = ((function (ctor__35368__auto___38647){
return (function quiescent$dom$div(){
var args__32002__auto__ = [];
var len__31995__auto___38648 = arguments.length;
var i__31996__auto___38649 = (0);
while(true){
if((i__31996__auto___38649 < len__31995__auto___38648)){
args__32002__auto__.push((arguments[i__31996__auto___38649]));

var G__38650 = (i__31996__auto___38649 + (1));
i__31996__auto___38649 = G__38650;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38647))
;

quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38647){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38647,args__35369__auto__);
});})(ctor__35368__auto___38647))
;

quiescent.dom.div.cljs$lang$maxFixedArity = (0);

quiescent.dom.div.cljs$lang$applyTo = ((function (ctor__35368__auto___38647){
return (function (seq38444){
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38444));
});})(ctor__35368__auto___38647))
;

var ctor__35368__auto___38651 = quiescent.dom.constructor.call(null,"dl");
quiescent.dom.dl = ((function (ctor__35368__auto___38651){
return (function quiescent$dom$dl(){
var args__32002__auto__ = [];
var len__31995__auto___38652 = arguments.length;
var i__31996__auto___38653 = (0);
while(true){
if((i__31996__auto___38653 < len__31995__auto___38652)){
args__32002__auto__.push((arguments[i__31996__auto___38653]));

var G__38654 = (i__31996__auto___38653 + (1));
i__31996__auto___38653 = G__38654;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38651))
;

quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38651){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38651,args__35369__auto__);
});})(ctor__35368__auto___38651))
;

quiescent.dom.dl.cljs$lang$maxFixedArity = (0);

quiescent.dom.dl.cljs$lang$applyTo = ((function (ctor__35368__auto___38651){
return (function (seq38445){
return quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38445));
});})(ctor__35368__auto___38651))
;

var ctor__35368__auto___38655 = quiescent.dom.constructor.call(null,"dt");
quiescent.dom.dt = ((function (ctor__35368__auto___38655){
return (function quiescent$dom$dt(){
var args__32002__auto__ = [];
var len__31995__auto___38656 = arguments.length;
var i__31996__auto___38657 = (0);
while(true){
if((i__31996__auto___38657 < len__31995__auto___38656)){
args__32002__auto__.push((arguments[i__31996__auto___38657]));

var G__38658 = (i__31996__auto___38657 + (1));
i__31996__auto___38657 = G__38658;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38655))
;

quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38655){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38655,args__35369__auto__);
});})(ctor__35368__auto___38655))
;

quiescent.dom.dt.cljs$lang$maxFixedArity = (0);

quiescent.dom.dt.cljs$lang$applyTo = ((function (ctor__35368__auto___38655){
return (function (seq38446){
return quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38446));
});})(ctor__35368__auto___38655))
;

var ctor__35368__auto___38659 = quiescent.dom.constructor.call(null,"em");
quiescent.dom.em = ((function (ctor__35368__auto___38659){
return (function quiescent$dom$em(){
var args__32002__auto__ = [];
var len__31995__auto___38660 = arguments.length;
var i__31996__auto___38661 = (0);
while(true){
if((i__31996__auto___38661 < len__31995__auto___38660)){
args__32002__auto__.push((arguments[i__31996__auto___38661]));

var G__38662 = (i__31996__auto___38661 + (1));
i__31996__auto___38661 = G__38662;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38659))
;

quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38659){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38659,args__35369__auto__);
});})(ctor__35368__auto___38659))
;

quiescent.dom.em.cljs$lang$maxFixedArity = (0);

quiescent.dom.em.cljs$lang$applyTo = ((function (ctor__35368__auto___38659){
return (function (seq38447){
return quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38447));
});})(ctor__35368__auto___38659))
;

var ctor__35368__auto___38663 = quiescent.dom.constructor.call(null,"embed");
quiescent.dom.embed = ((function (ctor__35368__auto___38663){
return (function quiescent$dom$embed(){
var args__32002__auto__ = [];
var len__31995__auto___38664 = arguments.length;
var i__31996__auto___38665 = (0);
while(true){
if((i__31996__auto___38665 < len__31995__auto___38664)){
args__32002__auto__.push((arguments[i__31996__auto___38665]));

var G__38666 = (i__31996__auto___38665 + (1));
i__31996__auto___38665 = G__38666;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38663))
;

quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38663){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38663,args__35369__auto__);
});})(ctor__35368__auto___38663))
;

quiescent.dom.embed.cljs$lang$maxFixedArity = (0);

quiescent.dom.embed.cljs$lang$applyTo = ((function (ctor__35368__auto___38663){
return (function (seq38449){
return quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38449));
});})(ctor__35368__auto___38663))
;

var ctor__35368__auto___38667 = quiescent.dom.constructor.call(null,"fieldset");
quiescent.dom.fieldset = ((function (ctor__35368__auto___38667){
return (function quiescent$dom$fieldset(){
var args__32002__auto__ = [];
var len__31995__auto___38668 = arguments.length;
var i__31996__auto___38669 = (0);
while(true){
if((i__31996__auto___38669 < len__31995__auto___38668)){
args__32002__auto__.push((arguments[i__31996__auto___38669]));

var G__38670 = (i__31996__auto___38669 + (1));
i__31996__auto___38669 = G__38670;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38667))
;

quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38667){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38667,args__35369__auto__);
});})(ctor__35368__auto___38667))
;

quiescent.dom.fieldset.cljs$lang$maxFixedArity = (0);

quiescent.dom.fieldset.cljs$lang$applyTo = ((function (ctor__35368__auto___38667){
return (function (seq38450){
return quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38450));
});})(ctor__35368__auto___38667))
;

var ctor__35368__auto___38671 = quiescent.dom.constructor.call(null,"figcaption");
quiescent.dom.figcaption = ((function (ctor__35368__auto___38671){
return (function quiescent$dom$figcaption(){
var args__32002__auto__ = [];
var len__31995__auto___38672 = arguments.length;
var i__31996__auto___38673 = (0);
while(true){
if((i__31996__auto___38673 < len__31995__auto___38672)){
args__32002__auto__.push((arguments[i__31996__auto___38673]));

var G__38674 = (i__31996__auto___38673 + (1));
i__31996__auto___38673 = G__38674;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38671))
;

quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38671){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38671,args__35369__auto__);
});})(ctor__35368__auto___38671))
;

quiescent.dom.figcaption.cljs$lang$maxFixedArity = (0);

quiescent.dom.figcaption.cljs$lang$applyTo = ((function (ctor__35368__auto___38671){
return (function (seq38451){
return quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38451));
});})(ctor__35368__auto___38671))
;

var ctor__35368__auto___38675 = quiescent.dom.constructor.call(null,"figure");
quiescent.dom.figure = ((function (ctor__35368__auto___38675){
return (function quiescent$dom$figure(){
var args__32002__auto__ = [];
var len__31995__auto___38676 = arguments.length;
var i__31996__auto___38677 = (0);
while(true){
if((i__31996__auto___38677 < len__31995__auto___38676)){
args__32002__auto__.push((arguments[i__31996__auto___38677]));

var G__38678 = (i__31996__auto___38677 + (1));
i__31996__auto___38677 = G__38678;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38675))
;

quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38675){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38675,args__35369__auto__);
});})(ctor__35368__auto___38675))
;

quiescent.dom.figure.cljs$lang$maxFixedArity = (0);

quiescent.dom.figure.cljs$lang$applyTo = ((function (ctor__35368__auto___38675){
return (function (seq38452){
return quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38452));
});})(ctor__35368__auto___38675))
;

var ctor__35368__auto___38679 = quiescent.dom.constructor.call(null,"footer");
quiescent.dom.footer = ((function (ctor__35368__auto___38679){
return (function quiescent$dom$footer(){
var args__32002__auto__ = [];
var len__31995__auto___38680 = arguments.length;
var i__31996__auto___38681 = (0);
while(true){
if((i__31996__auto___38681 < len__31995__auto___38680)){
args__32002__auto__.push((arguments[i__31996__auto___38681]));

var G__38682 = (i__31996__auto___38681 + (1));
i__31996__auto___38681 = G__38682;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38679))
;

quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38679){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38679,args__35369__auto__);
});})(ctor__35368__auto___38679))
;

quiescent.dom.footer.cljs$lang$maxFixedArity = (0);

quiescent.dom.footer.cljs$lang$applyTo = ((function (ctor__35368__auto___38679){
return (function (seq38453){
return quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38453));
});})(ctor__35368__auto___38679))
;

var ctor__35368__auto___38683 = quiescent.dom.constructor.call(null,"form");
quiescent.dom.form = ((function (ctor__35368__auto___38683){
return (function quiescent$dom$form(){
var args__32002__auto__ = [];
var len__31995__auto___38684 = arguments.length;
var i__31996__auto___38685 = (0);
while(true){
if((i__31996__auto___38685 < len__31995__auto___38684)){
args__32002__auto__.push((arguments[i__31996__auto___38685]));

var G__38686 = (i__31996__auto___38685 + (1));
i__31996__auto___38685 = G__38686;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38683))
;

quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38683){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38683,args__35369__auto__);
});})(ctor__35368__auto___38683))
;

quiescent.dom.form.cljs$lang$maxFixedArity = (0);

quiescent.dom.form.cljs$lang$applyTo = ((function (ctor__35368__auto___38683){
return (function (seq38454){
return quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38454));
});})(ctor__35368__auto___38683))
;

var ctor__35368__auto___38687 = quiescent.dom.constructor.call(null,"h1");
quiescent.dom.h1 = ((function (ctor__35368__auto___38687){
return (function quiescent$dom$h1(){
var args__32002__auto__ = [];
var len__31995__auto___38688 = arguments.length;
var i__31996__auto___38689 = (0);
while(true){
if((i__31996__auto___38689 < len__31995__auto___38688)){
args__32002__auto__.push((arguments[i__31996__auto___38689]));

var G__38690 = (i__31996__auto___38689 + (1));
i__31996__auto___38689 = G__38690;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38687))
;

quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38687){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38687,args__35369__auto__);
});})(ctor__35368__auto___38687))
;

quiescent.dom.h1.cljs$lang$maxFixedArity = (0);

quiescent.dom.h1.cljs$lang$applyTo = ((function (ctor__35368__auto___38687){
return (function (seq38455){
return quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38455));
});})(ctor__35368__auto___38687))
;

var ctor__35368__auto___38691 = quiescent.dom.constructor.call(null,"h2");
quiescent.dom.h2 = ((function (ctor__35368__auto___38691){
return (function quiescent$dom$h2(){
var args__32002__auto__ = [];
var len__31995__auto___38692 = arguments.length;
var i__31996__auto___38693 = (0);
while(true){
if((i__31996__auto___38693 < len__31995__auto___38692)){
args__32002__auto__.push((arguments[i__31996__auto___38693]));

var G__38694 = (i__31996__auto___38693 + (1));
i__31996__auto___38693 = G__38694;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38691))
;

quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38691){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38691,args__35369__auto__);
});})(ctor__35368__auto___38691))
;

quiescent.dom.h2.cljs$lang$maxFixedArity = (0);

quiescent.dom.h2.cljs$lang$applyTo = ((function (ctor__35368__auto___38691){
return (function (seq38456){
return quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38456));
});})(ctor__35368__auto___38691))
;

var ctor__35368__auto___38695 = quiescent.dom.constructor.call(null,"h3");
quiescent.dom.h3 = ((function (ctor__35368__auto___38695){
return (function quiescent$dom$h3(){
var args__32002__auto__ = [];
var len__31995__auto___38696 = arguments.length;
var i__31996__auto___38697 = (0);
while(true){
if((i__31996__auto___38697 < len__31995__auto___38696)){
args__32002__auto__.push((arguments[i__31996__auto___38697]));

var G__38698 = (i__31996__auto___38697 + (1));
i__31996__auto___38697 = G__38698;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38695))
;

quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38695){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38695,args__35369__auto__);
});})(ctor__35368__auto___38695))
;

quiescent.dom.h3.cljs$lang$maxFixedArity = (0);

quiescent.dom.h3.cljs$lang$applyTo = ((function (ctor__35368__auto___38695){
return (function (seq38457){
return quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38457));
});})(ctor__35368__auto___38695))
;

var ctor__35368__auto___38699 = quiescent.dom.constructor.call(null,"h4");
quiescent.dom.h4 = ((function (ctor__35368__auto___38699){
return (function quiescent$dom$h4(){
var args__32002__auto__ = [];
var len__31995__auto___38700 = arguments.length;
var i__31996__auto___38701 = (0);
while(true){
if((i__31996__auto___38701 < len__31995__auto___38700)){
args__32002__auto__.push((arguments[i__31996__auto___38701]));

var G__38702 = (i__31996__auto___38701 + (1));
i__31996__auto___38701 = G__38702;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38699))
;

quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38699){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38699,args__35369__auto__);
});})(ctor__35368__auto___38699))
;

quiescent.dom.h4.cljs$lang$maxFixedArity = (0);

quiescent.dom.h4.cljs$lang$applyTo = ((function (ctor__35368__auto___38699){
return (function (seq38458){
return quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38458));
});})(ctor__35368__auto___38699))
;

var ctor__35368__auto___38703 = quiescent.dom.constructor.call(null,"h5");
quiescent.dom.h5 = ((function (ctor__35368__auto___38703){
return (function quiescent$dom$h5(){
var args__32002__auto__ = [];
var len__31995__auto___38704 = arguments.length;
var i__31996__auto___38705 = (0);
while(true){
if((i__31996__auto___38705 < len__31995__auto___38704)){
args__32002__auto__.push((arguments[i__31996__auto___38705]));

var G__38706 = (i__31996__auto___38705 + (1));
i__31996__auto___38705 = G__38706;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38703))
;

quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38703){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38703,args__35369__auto__);
});})(ctor__35368__auto___38703))
;

quiescent.dom.h5.cljs$lang$maxFixedArity = (0);

quiescent.dom.h5.cljs$lang$applyTo = ((function (ctor__35368__auto___38703){
return (function (seq38459){
return quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38459));
});})(ctor__35368__auto___38703))
;

var ctor__35368__auto___38707 = quiescent.dom.constructor.call(null,"h6");
quiescent.dom.h6 = ((function (ctor__35368__auto___38707){
return (function quiescent$dom$h6(){
var args__32002__auto__ = [];
var len__31995__auto___38708 = arguments.length;
var i__31996__auto___38709 = (0);
while(true){
if((i__31996__auto___38709 < len__31995__auto___38708)){
args__32002__auto__.push((arguments[i__31996__auto___38709]));

var G__38710 = (i__31996__auto___38709 + (1));
i__31996__auto___38709 = G__38710;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38707))
;

quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38707){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38707,args__35369__auto__);
});})(ctor__35368__auto___38707))
;

quiescent.dom.h6.cljs$lang$maxFixedArity = (0);

quiescent.dom.h6.cljs$lang$applyTo = ((function (ctor__35368__auto___38707){
return (function (seq38460){
return quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38460));
});})(ctor__35368__auto___38707))
;

var ctor__35368__auto___38711 = quiescent.dom.constructor.call(null,"head");
quiescent.dom.head = ((function (ctor__35368__auto___38711){
return (function quiescent$dom$head(){
var args__32002__auto__ = [];
var len__31995__auto___38712 = arguments.length;
var i__31996__auto___38713 = (0);
while(true){
if((i__31996__auto___38713 < len__31995__auto___38712)){
args__32002__auto__.push((arguments[i__31996__auto___38713]));

var G__38714 = (i__31996__auto___38713 + (1));
i__31996__auto___38713 = G__38714;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38711))
;

quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38711){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38711,args__35369__auto__);
});})(ctor__35368__auto___38711))
;

quiescent.dom.head.cljs$lang$maxFixedArity = (0);

quiescent.dom.head.cljs$lang$applyTo = ((function (ctor__35368__auto___38711){
return (function (seq38461){
return quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38461));
});})(ctor__35368__auto___38711))
;

var ctor__35368__auto___38715 = quiescent.dom.constructor.call(null,"header");
quiescent.dom.header = ((function (ctor__35368__auto___38715){
return (function quiescent$dom$header(){
var args__32002__auto__ = [];
var len__31995__auto___38716 = arguments.length;
var i__31996__auto___38717 = (0);
while(true){
if((i__31996__auto___38717 < len__31995__auto___38716)){
args__32002__auto__.push((arguments[i__31996__auto___38717]));

var G__38718 = (i__31996__auto___38717 + (1));
i__31996__auto___38717 = G__38718;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38715))
;

quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38715){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38715,args__35369__auto__);
});})(ctor__35368__auto___38715))
;

quiescent.dom.header.cljs$lang$maxFixedArity = (0);

quiescent.dom.header.cljs$lang$applyTo = ((function (ctor__35368__auto___38715){
return (function (seq38462){
return quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38462));
});})(ctor__35368__auto___38715))
;

var ctor__35368__auto___38719 = quiescent.dom.constructor.call(null,"hr");
quiescent.dom.hr = ((function (ctor__35368__auto___38719){
return (function quiescent$dom$hr(){
var args__32002__auto__ = [];
var len__31995__auto___38720 = arguments.length;
var i__31996__auto___38721 = (0);
while(true){
if((i__31996__auto___38721 < len__31995__auto___38720)){
args__32002__auto__.push((arguments[i__31996__auto___38721]));

var G__38722 = (i__31996__auto___38721 + (1));
i__31996__auto___38721 = G__38722;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38719))
;

quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38719){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38719,args__35369__auto__);
});})(ctor__35368__auto___38719))
;

quiescent.dom.hr.cljs$lang$maxFixedArity = (0);

quiescent.dom.hr.cljs$lang$applyTo = ((function (ctor__35368__auto___38719){
return (function (seq38463){
return quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38463));
});})(ctor__35368__auto___38719))
;

var ctor__35368__auto___38723 = quiescent.dom.constructor.call(null,"html");
quiescent.dom.html = ((function (ctor__35368__auto___38723){
return (function quiescent$dom$html(){
var args__32002__auto__ = [];
var len__31995__auto___38724 = arguments.length;
var i__31996__auto___38725 = (0);
while(true){
if((i__31996__auto___38725 < len__31995__auto___38724)){
args__32002__auto__.push((arguments[i__31996__auto___38725]));

var G__38726 = (i__31996__auto___38725 + (1));
i__31996__auto___38725 = G__38726;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38723))
;

quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38723){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38723,args__35369__auto__);
});})(ctor__35368__auto___38723))
;

quiescent.dom.html.cljs$lang$maxFixedArity = (0);

quiescent.dom.html.cljs$lang$applyTo = ((function (ctor__35368__auto___38723){
return (function (seq38464){
return quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38464));
});})(ctor__35368__auto___38723))
;

var ctor__35368__auto___38727 = quiescent.dom.constructor.call(null,"i");
quiescent.dom.i = ((function (ctor__35368__auto___38727){
return (function quiescent$dom$i(){
var args__32002__auto__ = [];
var len__31995__auto___38728 = arguments.length;
var i__31996__auto___38729 = (0);
while(true){
if((i__31996__auto___38729 < len__31995__auto___38728)){
args__32002__auto__.push((arguments[i__31996__auto___38729]));

var G__38730 = (i__31996__auto___38729 + (1));
i__31996__auto___38729 = G__38730;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38727))
;

quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38727){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38727,args__35369__auto__);
});})(ctor__35368__auto___38727))
;

quiescent.dom.i.cljs$lang$maxFixedArity = (0);

quiescent.dom.i.cljs$lang$applyTo = ((function (ctor__35368__auto___38727){
return (function (seq38465){
return quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38465));
});})(ctor__35368__auto___38727))
;

var ctor__35368__auto___38731 = quiescent.dom.constructor.call(null,"iframe");
quiescent.dom.iframe = ((function (ctor__35368__auto___38731){
return (function quiescent$dom$iframe(){
var args__32002__auto__ = [];
var len__31995__auto___38732 = arguments.length;
var i__31996__auto___38733 = (0);
while(true){
if((i__31996__auto___38733 < len__31995__auto___38732)){
args__32002__auto__.push((arguments[i__31996__auto___38733]));

var G__38734 = (i__31996__auto___38733 + (1));
i__31996__auto___38733 = G__38734;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38731))
;

quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38731){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38731,args__35369__auto__);
});})(ctor__35368__auto___38731))
;

quiescent.dom.iframe.cljs$lang$maxFixedArity = (0);

quiescent.dom.iframe.cljs$lang$applyTo = ((function (ctor__35368__auto___38731){
return (function (seq38466){
return quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38466));
});})(ctor__35368__auto___38731))
;

var ctor__35368__auto___38735 = quiescent.dom.constructor.call(null,"img");
quiescent.dom.img = ((function (ctor__35368__auto___38735){
return (function quiescent$dom$img(){
var args__32002__auto__ = [];
var len__31995__auto___38736 = arguments.length;
var i__31996__auto___38737 = (0);
while(true){
if((i__31996__auto___38737 < len__31995__auto___38736)){
args__32002__auto__.push((arguments[i__31996__auto___38737]));

var G__38738 = (i__31996__auto___38737 + (1));
i__31996__auto___38737 = G__38738;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38735))
;

quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38735){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38735,args__35369__auto__);
});})(ctor__35368__auto___38735))
;

quiescent.dom.img.cljs$lang$maxFixedArity = (0);

quiescent.dom.img.cljs$lang$applyTo = ((function (ctor__35368__auto___38735){
return (function (seq38467){
return quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38467));
});})(ctor__35368__auto___38735))
;

var ctor__35368__auto___38739 = quiescent.dom.constructor.call(null,"input");
quiescent.dom.input = ((function (ctor__35368__auto___38739){
return (function quiescent$dom$input(){
var args__32002__auto__ = [];
var len__31995__auto___38740 = arguments.length;
var i__31996__auto___38741 = (0);
while(true){
if((i__31996__auto___38741 < len__31995__auto___38740)){
args__32002__auto__.push((arguments[i__31996__auto___38741]));

var G__38742 = (i__31996__auto___38741 + (1));
i__31996__auto___38741 = G__38742;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38739))
;

quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38739){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38739,args__35369__auto__);
});})(ctor__35368__auto___38739))
;

quiescent.dom.input.cljs$lang$maxFixedArity = (0);

quiescent.dom.input.cljs$lang$applyTo = ((function (ctor__35368__auto___38739){
return (function (seq38468){
return quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38468));
});})(ctor__35368__auto___38739))
;

var ctor__35368__auto___38743 = quiescent.dom.constructor.call(null,"ins");
quiescent.dom.ins = ((function (ctor__35368__auto___38743){
return (function quiescent$dom$ins(){
var args__32002__auto__ = [];
var len__31995__auto___38744 = arguments.length;
var i__31996__auto___38745 = (0);
while(true){
if((i__31996__auto___38745 < len__31995__auto___38744)){
args__32002__auto__.push((arguments[i__31996__auto___38745]));

var G__38746 = (i__31996__auto___38745 + (1));
i__31996__auto___38745 = G__38746;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38743))
;

quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38743){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38743,args__35369__auto__);
});})(ctor__35368__auto___38743))
;

quiescent.dom.ins.cljs$lang$maxFixedArity = (0);

quiescent.dom.ins.cljs$lang$applyTo = ((function (ctor__35368__auto___38743){
return (function (seq38469){
return quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38469));
});})(ctor__35368__auto___38743))
;

var ctor__35368__auto___38747 = quiescent.dom.constructor.call(null,"kbd");
quiescent.dom.kbd = ((function (ctor__35368__auto___38747){
return (function quiescent$dom$kbd(){
var args__32002__auto__ = [];
var len__31995__auto___38748 = arguments.length;
var i__31996__auto___38749 = (0);
while(true){
if((i__31996__auto___38749 < len__31995__auto___38748)){
args__32002__auto__.push((arguments[i__31996__auto___38749]));

var G__38750 = (i__31996__auto___38749 + (1));
i__31996__auto___38749 = G__38750;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38747))
;

quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38747){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38747,args__35369__auto__);
});})(ctor__35368__auto___38747))
;

quiescent.dom.kbd.cljs$lang$maxFixedArity = (0);

quiescent.dom.kbd.cljs$lang$applyTo = ((function (ctor__35368__auto___38747){
return (function (seq38470){
return quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38470));
});})(ctor__35368__auto___38747))
;

var ctor__35368__auto___38751 = quiescent.dom.constructor.call(null,"keygen");
quiescent.dom.keygen = ((function (ctor__35368__auto___38751){
return (function quiescent$dom$keygen(){
var args__32002__auto__ = [];
var len__31995__auto___38752 = arguments.length;
var i__31996__auto___38753 = (0);
while(true){
if((i__31996__auto___38753 < len__31995__auto___38752)){
args__32002__auto__.push((arguments[i__31996__auto___38753]));

var G__38754 = (i__31996__auto___38753 + (1));
i__31996__auto___38753 = G__38754;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38751))
;

quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38751){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38751,args__35369__auto__);
});})(ctor__35368__auto___38751))
;

quiescent.dom.keygen.cljs$lang$maxFixedArity = (0);

quiescent.dom.keygen.cljs$lang$applyTo = ((function (ctor__35368__auto___38751){
return (function (seq38471){
return quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38471));
});})(ctor__35368__auto___38751))
;

var ctor__35368__auto___38755 = quiescent.dom.constructor.call(null,"label");
quiescent.dom.label = ((function (ctor__35368__auto___38755){
return (function quiescent$dom$label(){
var args__32002__auto__ = [];
var len__31995__auto___38756 = arguments.length;
var i__31996__auto___38757 = (0);
while(true){
if((i__31996__auto___38757 < len__31995__auto___38756)){
args__32002__auto__.push((arguments[i__31996__auto___38757]));

var G__38758 = (i__31996__auto___38757 + (1));
i__31996__auto___38757 = G__38758;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38755))
;

quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38755){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38755,args__35369__auto__);
});})(ctor__35368__auto___38755))
;

quiescent.dom.label.cljs$lang$maxFixedArity = (0);

quiescent.dom.label.cljs$lang$applyTo = ((function (ctor__35368__auto___38755){
return (function (seq38472){
return quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38472));
});})(ctor__35368__auto___38755))
;

var ctor__35368__auto___38759 = quiescent.dom.constructor.call(null,"legend");
quiescent.dom.legend = ((function (ctor__35368__auto___38759){
return (function quiescent$dom$legend(){
var args__32002__auto__ = [];
var len__31995__auto___38760 = arguments.length;
var i__31996__auto___38761 = (0);
while(true){
if((i__31996__auto___38761 < len__31995__auto___38760)){
args__32002__auto__.push((arguments[i__31996__auto___38761]));

var G__38762 = (i__31996__auto___38761 + (1));
i__31996__auto___38761 = G__38762;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38759))
;

quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38759){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38759,args__35369__auto__);
});})(ctor__35368__auto___38759))
;

quiescent.dom.legend.cljs$lang$maxFixedArity = (0);

quiescent.dom.legend.cljs$lang$applyTo = ((function (ctor__35368__auto___38759){
return (function (seq38473){
return quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38473));
});})(ctor__35368__auto___38759))
;

var ctor__35368__auto___38763 = quiescent.dom.constructor.call(null,"li");
quiescent.dom.li = ((function (ctor__35368__auto___38763){
return (function quiescent$dom$li(){
var args__32002__auto__ = [];
var len__31995__auto___38764 = arguments.length;
var i__31996__auto___38765 = (0);
while(true){
if((i__31996__auto___38765 < len__31995__auto___38764)){
args__32002__auto__.push((arguments[i__31996__auto___38765]));

var G__38766 = (i__31996__auto___38765 + (1));
i__31996__auto___38765 = G__38766;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38763))
;

quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38763){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38763,args__35369__auto__);
});})(ctor__35368__auto___38763))
;

quiescent.dom.li.cljs$lang$maxFixedArity = (0);

quiescent.dom.li.cljs$lang$applyTo = ((function (ctor__35368__auto___38763){
return (function (seq38474){
return quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38474));
});})(ctor__35368__auto___38763))
;

var ctor__35368__auto___38767 = quiescent.dom.constructor.call(null,"link");
quiescent.dom.link = ((function (ctor__35368__auto___38767){
return (function quiescent$dom$link(){
var args__32002__auto__ = [];
var len__31995__auto___38768 = arguments.length;
var i__31996__auto___38769 = (0);
while(true){
if((i__31996__auto___38769 < len__31995__auto___38768)){
args__32002__auto__.push((arguments[i__31996__auto___38769]));

var G__38770 = (i__31996__auto___38769 + (1));
i__31996__auto___38769 = G__38770;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38767))
;

quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38767){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38767,args__35369__auto__);
});})(ctor__35368__auto___38767))
;

quiescent.dom.link.cljs$lang$maxFixedArity = (0);

quiescent.dom.link.cljs$lang$applyTo = ((function (ctor__35368__auto___38767){
return (function (seq38475){
return quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38475));
});})(ctor__35368__auto___38767))
;

var ctor__35368__auto___38771 = quiescent.dom.constructor.call(null,"main");
quiescent.dom.main = ((function (ctor__35368__auto___38771){
return (function quiescent$dom$main(){
var args__32002__auto__ = [];
var len__31995__auto___38772 = arguments.length;
var i__31996__auto___38773 = (0);
while(true){
if((i__31996__auto___38773 < len__31995__auto___38772)){
args__32002__auto__.push((arguments[i__31996__auto___38773]));

var G__38774 = (i__31996__auto___38773 + (1));
i__31996__auto___38773 = G__38774;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38771))
;

quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38771){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38771,args__35369__auto__);
});})(ctor__35368__auto___38771))
;

quiescent.dom.main.cljs$lang$maxFixedArity = (0);

quiescent.dom.main.cljs$lang$applyTo = ((function (ctor__35368__auto___38771){
return (function (seq38476){
return quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38476));
});})(ctor__35368__auto___38771))
;

var ctor__35368__auto___38775 = quiescent.dom.constructor.call(null,"map");
quiescent.dom.map = ((function (ctor__35368__auto___38775){
return (function quiescent$dom$map(){
var args__32002__auto__ = [];
var len__31995__auto___38776 = arguments.length;
var i__31996__auto___38777 = (0);
while(true){
if((i__31996__auto___38777 < len__31995__auto___38776)){
args__32002__auto__.push((arguments[i__31996__auto___38777]));

var G__38778 = (i__31996__auto___38777 + (1));
i__31996__auto___38777 = G__38778;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38775))
;

quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38775){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38775,args__35369__auto__);
});})(ctor__35368__auto___38775))
;

quiescent.dom.map.cljs$lang$maxFixedArity = (0);

quiescent.dom.map.cljs$lang$applyTo = ((function (ctor__35368__auto___38775){
return (function (seq38477){
return quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38477));
});})(ctor__35368__auto___38775))
;

var ctor__35368__auto___38779 = quiescent.dom.constructor.call(null,"mark");
quiescent.dom.mark = ((function (ctor__35368__auto___38779){
return (function quiescent$dom$mark(){
var args__32002__auto__ = [];
var len__31995__auto___38780 = arguments.length;
var i__31996__auto___38781 = (0);
while(true){
if((i__31996__auto___38781 < len__31995__auto___38780)){
args__32002__auto__.push((arguments[i__31996__auto___38781]));

var G__38782 = (i__31996__auto___38781 + (1));
i__31996__auto___38781 = G__38782;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38779))
;

quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38779){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38779,args__35369__auto__);
});})(ctor__35368__auto___38779))
;

quiescent.dom.mark.cljs$lang$maxFixedArity = (0);

quiescent.dom.mark.cljs$lang$applyTo = ((function (ctor__35368__auto___38779){
return (function (seq38478){
return quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38478));
});})(ctor__35368__auto___38779))
;

var ctor__35368__auto___38783 = quiescent.dom.constructor.call(null,"menu");
quiescent.dom.menu = ((function (ctor__35368__auto___38783){
return (function quiescent$dom$menu(){
var args__32002__auto__ = [];
var len__31995__auto___38784 = arguments.length;
var i__31996__auto___38785 = (0);
while(true){
if((i__31996__auto___38785 < len__31995__auto___38784)){
args__32002__auto__.push((arguments[i__31996__auto___38785]));

var G__38786 = (i__31996__auto___38785 + (1));
i__31996__auto___38785 = G__38786;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38783))
;

quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38783){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38783,args__35369__auto__);
});})(ctor__35368__auto___38783))
;

quiescent.dom.menu.cljs$lang$maxFixedArity = (0);

quiescent.dom.menu.cljs$lang$applyTo = ((function (ctor__35368__auto___38783){
return (function (seq38479){
return quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38479));
});})(ctor__35368__auto___38783))
;

var ctor__35368__auto___38787 = quiescent.dom.constructor.call(null,"menuitem");
quiescent.dom.menuitem = ((function (ctor__35368__auto___38787){
return (function quiescent$dom$menuitem(){
var args__32002__auto__ = [];
var len__31995__auto___38788 = arguments.length;
var i__31996__auto___38789 = (0);
while(true){
if((i__31996__auto___38789 < len__31995__auto___38788)){
args__32002__auto__.push((arguments[i__31996__auto___38789]));

var G__38790 = (i__31996__auto___38789 + (1));
i__31996__auto___38789 = G__38790;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38787))
;

quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38787){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38787,args__35369__auto__);
});})(ctor__35368__auto___38787))
;

quiescent.dom.menuitem.cljs$lang$maxFixedArity = (0);

quiescent.dom.menuitem.cljs$lang$applyTo = ((function (ctor__35368__auto___38787){
return (function (seq38480){
return quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38480));
});})(ctor__35368__auto___38787))
;

var ctor__35368__auto___38791 = quiescent.dom.constructor.call(null,"meta");
quiescent.dom.meta = ((function (ctor__35368__auto___38791){
return (function quiescent$dom$meta(){
var args__32002__auto__ = [];
var len__31995__auto___38792 = arguments.length;
var i__31996__auto___38793 = (0);
while(true){
if((i__31996__auto___38793 < len__31995__auto___38792)){
args__32002__auto__.push((arguments[i__31996__auto___38793]));

var G__38794 = (i__31996__auto___38793 + (1));
i__31996__auto___38793 = G__38794;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38791))
;

quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38791){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38791,args__35369__auto__);
});})(ctor__35368__auto___38791))
;

quiescent.dom.meta.cljs$lang$maxFixedArity = (0);

quiescent.dom.meta.cljs$lang$applyTo = ((function (ctor__35368__auto___38791){
return (function (seq38481){
return quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38481));
});})(ctor__35368__auto___38791))
;

var ctor__35368__auto___38795 = quiescent.dom.constructor.call(null,"meter");
quiescent.dom.meter = ((function (ctor__35368__auto___38795){
return (function quiescent$dom$meter(){
var args__32002__auto__ = [];
var len__31995__auto___38796 = arguments.length;
var i__31996__auto___38797 = (0);
while(true){
if((i__31996__auto___38797 < len__31995__auto___38796)){
args__32002__auto__.push((arguments[i__31996__auto___38797]));

var G__38798 = (i__31996__auto___38797 + (1));
i__31996__auto___38797 = G__38798;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38795))
;

quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38795){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38795,args__35369__auto__);
});})(ctor__35368__auto___38795))
;

quiescent.dom.meter.cljs$lang$maxFixedArity = (0);

quiescent.dom.meter.cljs$lang$applyTo = ((function (ctor__35368__auto___38795){
return (function (seq38482){
return quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38482));
});})(ctor__35368__auto___38795))
;

var ctor__35368__auto___38799 = quiescent.dom.constructor.call(null,"nav");
quiescent.dom.nav = ((function (ctor__35368__auto___38799){
return (function quiescent$dom$nav(){
var args__32002__auto__ = [];
var len__31995__auto___38800 = arguments.length;
var i__31996__auto___38801 = (0);
while(true){
if((i__31996__auto___38801 < len__31995__auto___38800)){
args__32002__auto__.push((arguments[i__31996__auto___38801]));

var G__38802 = (i__31996__auto___38801 + (1));
i__31996__auto___38801 = G__38802;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38799))
;

quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38799){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38799,args__35369__auto__);
});})(ctor__35368__auto___38799))
;

quiescent.dom.nav.cljs$lang$maxFixedArity = (0);

quiescent.dom.nav.cljs$lang$applyTo = ((function (ctor__35368__auto___38799){
return (function (seq38483){
return quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38483));
});})(ctor__35368__auto___38799))
;

var ctor__35368__auto___38803 = quiescent.dom.constructor.call(null,"noscript");
quiescent.dom.noscript = ((function (ctor__35368__auto___38803){
return (function quiescent$dom$noscript(){
var args__32002__auto__ = [];
var len__31995__auto___38804 = arguments.length;
var i__31996__auto___38805 = (0);
while(true){
if((i__31996__auto___38805 < len__31995__auto___38804)){
args__32002__auto__.push((arguments[i__31996__auto___38805]));

var G__38806 = (i__31996__auto___38805 + (1));
i__31996__auto___38805 = G__38806;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38803))
;

quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38803){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38803,args__35369__auto__);
});})(ctor__35368__auto___38803))
;

quiescent.dom.noscript.cljs$lang$maxFixedArity = (0);

quiescent.dom.noscript.cljs$lang$applyTo = ((function (ctor__35368__auto___38803){
return (function (seq38484){
return quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38484));
});})(ctor__35368__auto___38803))
;

var ctor__35368__auto___38807 = quiescent.dom.constructor.call(null,"object");
quiescent.dom.object = ((function (ctor__35368__auto___38807){
return (function quiescent$dom$object(){
var args__32002__auto__ = [];
var len__31995__auto___38808 = arguments.length;
var i__31996__auto___38809 = (0);
while(true){
if((i__31996__auto___38809 < len__31995__auto___38808)){
args__32002__auto__.push((arguments[i__31996__auto___38809]));

var G__38810 = (i__31996__auto___38809 + (1));
i__31996__auto___38809 = G__38810;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38807))
;

quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38807){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38807,args__35369__auto__);
});})(ctor__35368__auto___38807))
;

quiescent.dom.object.cljs$lang$maxFixedArity = (0);

quiescent.dom.object.cljs$lang$applyTo = ((function (ctor__35368__auto___38807){
return (function (seq38485){
return quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38485));
});})(ctor__35368__auto___38807))
;

var ctor__35368__auto___38811 = quiescent.dom.constructor.call(null,"ol");
quiescent.dom.ol = ((function (ctor__35368__auto___38811){
return (function quiescent$dom$ol(){
var args__32002__auto__ = [];
var len__31995__auto___38812 = arguments.length;
var i__31996__auto___38813 = (0);
while(true){
if((i__31996__auto___38813 < len__31995__auto___38812)){
args__32002__auto__.push((arguments[i__31996__auto___38813]));

var G__38814 = (i__31996__auto___38813 + (1));
i__31996__auto___38813 = G__38814;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38811))
;

quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38811){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38811,args__35369__auto__);
});})(ctor__35368__auto___38811))
;

quiescent.dom.ol.cljs$lang$maxFixedArity = (0);

quiescent.dom.ol.cljs$lang$applyTo = ((function (ctor__35368__auto___38811){
return (function (seq38486){
return quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38486));
});})(ctor__35368__auto___38811))
;

var ctor__35368__auto___38815 = quiescent.dom.constructor.call(null,"optgroup");
quiescent.dom.optgroup = ((function (ctor__35368__auto___38815){
return (function quiescent$dom$optgroup(){
var args__32002__auto__ = [];
var len__31995__auto___38816 = arguments.length;
var i__31996__auto___38817 = (0);
while(true){
if((i__31996__auto___38817 < len__31995__auto___38816)){
args__32002__auto__.push((arguments[i__31996__auto___38817]));

var G__38818 = (i__31996__auto___38817 + (1));
i__31996__auto___38817 = G__38818;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38815))
;

quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38815){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38815,args__35369__auto__);
});})(ctor__35368__auto___38815))
;

quiescent.dom.optgroup.cljs$lang$maxFixedArity = (0);

quiescent.dom.optgroup.cljs$lang$applyTo = ((function (ctor__35368__auto___38815){
return (function (seq38487){
return quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38487));
});})(ctor__35368__auto___38815))
;

var ctor__35368__auto___38819 = quiescent.dom.constructor.call(null,"option");
quiescent.dom.option = ((function (ctor__35368__auto___38819){
return (function quiescent$dom$option(){
var args__32002__auto__ = [];
var len__31995__auto___38820 = arguments.length;
var i__31996__auto___38821 = (0);
while(true){
if((i__31996__auto___38821 < len__31995__auto___38820)){
args__32002__auto__.push((arguments[i__31996__auto___38821]));

var G__38822 = (i__31996__auto___38821 + (1));
i__31996__auto___38821 = G__38822;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38819))
;

quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38819){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38819,args__35369__auto__);
});})(ctor__35368__auto___38819))
;

quiescent.dom.option.cljs$lang$maxFixedArity = (0);

quiescent.dom.option.cljs$lang$applyTo = ((function (ctor__35368__auto___38819){
return (function (seq38488){
return quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38488));
});})(ctor__35368__auto___38819))
;

var ctor__35368__auto___38823 = quiescent.dom.constructor.call(null,"output");
quiescent.dom.output = ((function (ctor__35368__auto___38823){
return (function quiescent$dom$output(){
var args__32002__auto__ = [];
var len__31995__auto___38824 = arguments.length;
var i__31996__auto___38825 = (0);
while(true){
if((i__31996__auto___38825 < len__31995__auto___38824)){
args__32002__auto__.push((arguments[i__31996__auto___38825]));

var G__38826 = (i__31996__auto___38825 + (1));
i__31996__auto___38825 = G__38826;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38823))
;

quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38823){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38823,args__35369__auto__);
});})(ctor__35368__auto___38823))
;

quiescent.dom.output.cljs$lang$maxFixedArity = (0);

quiescent.dom.output.cljs$lang$applyTo = ((function (ctor__35368__auto___38823){
return (function (seq38489){
return quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38489));
});})(ctor__35368__auto___38823))
;

var ctor__35368__auto___38827 = quiescent.dom.constructor.call(null,"p");
quiescent.dom.p = ((function (ctor__35368__auto___38827){
return (function quiescent$dom$p(){
var args__32002__auto__ = [];
var len__31995__auto___38828 = arguments.length;
var i__31996__auto___38829 = (0);
while(true){
if((i__31996__auto___38829 < len__31995__auto___38828)){
args__32002__auto__.push((arguments[i__31996__auto___38829]));

var G__38830 = (i__31996__auto___38829 + (1));
i__31996__auto___38829 = G__38830;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38827))
;

quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38827){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38827,args__35369__auto__);
});})(ctor__35368__auto___38827))
;

quiescent.dom.p.cljs$lang$maxFixedArity = (0);

quiescent.dom.p.cljs$lang$applyTo = ((function (ctor__35368__auto___38827){
return (function (seq38490){
return quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38490));
});})(ctor__35368__auto___38827))
;

var ctor__35368__auto___38831 = quiescent.dom.constructor.call(null,"param");
quiescent.dom.param = ((function (ctor__35368__auto___38831){
return (function quiescent$dom$param(){
var args__32002__auto__ = [];
var len__31995__auto___38832 = arguments.length;
var i__31996__auto___38833 = (0);
while(true){
if((i__31996__auto___38833 < len__31995__auto___38832)){
args__32002__auto__.push((arguments[i__31996__auto___38833]));

var G__38834 = (i__31996__auto___38833 + (1));
i__31996__auto___38833 = G__38834;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38831))
;

quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38831){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38831,args__35369__auto__);
});})(ctor__35368__auto___38831))
;

quiescent.dom.param.cljs$lang$maxFixedArity = (0);

quiescent.dom.param.cljs$lang$applyTo = ((function (ctor__35368__auto___38831){
return (function (seq38491){
return quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38491));
});})(ctor__35368__auto___38831))
;

var ctor__35368__auto___38835 = quiescent.dom.constructor.call(null,"pre");
quiescent.dom.pre = ((function (ctor__35368__auto___38835){
return (function quiescent$dom$pre(){
var args__32002__auto__ = [];
var len__31995__auto___38836 = arguments.length;
var i__31996__auto___38837 = (0);
while(true){
if((i__31996__auto___38837 < len__31995__auto___38836)){
args__32002__auto__.push((arguments[i__31996__auto___38837]));

var G__38838 = (i__31996__auto___38837 + (1));
i__31996__auto___38837 = G__38838;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38835))
;

quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38835){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38835,args__35369__auto__);
});})(ctor__35368__auto___38835))
;

quiescent.dom.pre.cljs$lang$maxFixedArity = (0);

quiescent.dom.pre.cljs$lang$applyTo = ((function (ctor__35368__auto___38835){
return (function (seq38492){
return quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38492));
});})(ctor__35368__auto___38835))
;

var ctor__35368__auto___38839 = quiescent.dom.constructor.call(null,"progress");
quiescent.dom.progress = ((function (ctor__35368__auto___38839){
return (function quiescent$dom$progress(){
var args__32002__auto__ = [];
var len__31995__auto___38840 = arguments.length;
var i__31996__auto___38841 = (0);
while(true){
if((i__31996__auto___38841 < len__31995__auto___38840)){
args__32002__auto__.push((arguments[i__31996__auto___38841]));

var G__38842 = (i__31996__auto___38841 + (1));
i__31996__auto___38841 = G__38842;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38839))
;

quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38839){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38839,args__35369__auto__);
});})(ctor__35368__auto___38839))
;

quiescent.dom.progress.cljs$lang$maxFixedArity = (0);

quiescent.dom.progress.cljs$lang$applyTo = ((function (ctor__35368__auto___38839){
return (function (seq38493){
return quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38493));
});})(ctor__35368__auto___38839))
;

var ctor__35368__auto___38843 = quiescent.dom.constructor.call(null,"q");
quiescent.dom.q = ((function (ctor__35368__auto___38843){
return (function quiescent$dom$q(){
var args__32002__auto__ = [];
var len__31995__auto___38844 = arguments.length;
var i__31996__auto___38845 = (0);
while(true){
if((i__31996__auto___38845 < len__31995__auto___38844)){
args__32002__auto__.push((arguments[i__31996__auto___38845]));

var G__38846 = (i__31996__auto___38845 + (1));
i__31996__auto___38845 = G__38846;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38843))
;

quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38843){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38843,args__35369__auto__);
});})(ctor__35368__auto___38843))
;

quiescent.dom.q.cljs$lang$maxFixedArity = (0);

quiescent.dom.q.cljs$lang$applyTo = ((function (ctor__35368__auto___38843){
return (function (seq38494){
return quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38494));
});})(ctor__35368__auto___38843))
;

var ctor__35368__auto___38847 = quiescent.dom.constructor.call(null,"rp");
quiescent.dom.rp = ((function (ctor__35368__auto___38847){
return (function quiescent$dom$rp(){
var args__32002__auto__ = [];
var len__31995__auto___38848 = arguments.length;
var i__31996__auto___38849 = (0);
while(true){
if((i__31996__auto___38849 < len__31995__auto___38848)){
args__32002__auto__.push((arguments[i__31996__auto___38849]));

var G__38850 = (i__31996__auto___38849 + (1));
i__31996__auto___38849 = G__38850;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38847))
;

quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38847){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38847,args__35369__auto__);
});})(ctor__35368__auto___38847))
;

quiescent.dom.rp.cljs$lang$maxFixedArity = (0);

quiescent.dom.rp.cljs$lang$applyTo = ((function (ctor__35368__auto___38847){
return (function (seq38495){
return quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38495));
});})(ctor__35368__auto___38847))
;

var ctor__35368__auto___38851 = quiescent.dom.constructor.call(null,"rt");
quiescent.dom.rt = ((function (ctor__35368__auto___38851){
return (function quiescent$dom$rt(){
var args__32002__auto__ = [];
var len__31995__auto___38852 = arguments.length;
var i__31996__auto___38853 = (0);
while(true){
if((i__31996__auto___38853 < len__31995__auto___38852)){
args__32002__auto__.push((arguments[i__31996__auto___38853]));

var G__38854 = (i__31996__auto___38853 + (1));
i__31996__auto___38853 = G__38854;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38851))
;

quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38851){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38851,args__35369__auto__);
});})(ctor__35368__auto___38851))
;

quiescent.dom.rt.cljs$lang$maxFixedArity = (0);

quiescent.dom.rt.cljs$lang$applyTo = ((function (ctor__35368__auto___38851){
return (function (seq38496){
return quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38496));
});})(ctor__35368__auto___38851))
;

var ctor__35368__auto___38855 = quiescent.dom.constructor.call(null,"ruby");
quiescent.dom.ruby = ((function (ctor__35368__auto___38855){
return (function quiescent$dom$ruby(){
var args__32002__auto__ = [];
var len__31995__auto___38856 = arguments.length;
var i__31996__auto___38857 = (0);
while(true){
if((i__31996__auto___38857 < len__31995__auto___38856)){
args__32002__auto__.push((arguments[i__31996__auto___38857]));

var G__38858 = (i__31996__auto___38857 + (1));
i__31996__auto___38857 = G__38858;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38855))
;

quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38855){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38855,args__35369__auto__);
});})(ctor__35368__auto___38855))
;

quiescent.dom.ruby.cljs$lang$maxFixedArity = (0);

quiescent.dom.ruby.cljs$lang$applyTo = ((function (ctor__35368__auto___38855){
return (function (seq38497){
return quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38497));
});})(ctor__35368__auto___38855))
;

var ctor__35368__auto___38859 = quiescent.dom.constructor.call(null,"s");
quiescent.dom.s = ((function (ctor__35368__auto___38859){
return (function quiescent$dom$s(){
var args__32002__auto__ = [];
var len__31995__auto___38860 = arguments.length;
var i__31996__auto___38861 = (0);
while(true){
if((i__31996__auto___38861 < len__31995__auto___38860)){
args__32002__auto__.push((arguments[i__31996__auto___38861]));

var G__38862 = (i__31996__auto___38861 + (1));
i__31996__auto___38861 = G__38862;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38859))
;

quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38859){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38859,args__35369__auto__);
});})(ctor__35368__auto___38859))
;

quiescent.dom.s.cljs$lang$maxFixedArity = (0);

quiescent.dom.s.cljs$lang$applyTo = ((function (ctor__35368__auto___38859){
return (function (seq38498){
return quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38498));
});})(ctor__35368__auto___38859))
;

var ctor__35368__auto___38863 = quiescent.dom.constructor.call(null,"samp");
quiescent.dom.samp = ((function (ctor__35368__auto___38863){
return (function quiescent$dom$samp(){
var args__32002__auto__ = [];
var len__31995__auto___38864 = arguments.length;
var i__31996__auto___38865 = (0);
while(true){
if((i__31996__auto___38865 < len__31995__auto___38864)){
args__32002__auto__.push((arguments[i__31996__auto___38865]));

var G__38866 = (i__31996__auto___38865 + (1));
i__31996__auto___38865 = G__38866;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38863))
;

quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38863){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38863,args__35369__auto__);
});})(ctor__35368__auto___38863))
;

quiescent.dom.samp.cljs$lang$maxFixedArity = (0);

quiescent.dom.samp.cljs$lang$applyTo = ((function (ctor__35368__auto___38863){
return (function (seq38499){
return quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38499));
});})(ctor__35368__auto___38863))
;

var ctor__35368__auto___38867 = quiescent.dom.constructor.call(null,"script");
quiescent.dom.script = ((function (ctor__35368__auto___38867){
return (function quiescent$dom$script(){
var args__32002__auto__ = [];
var len__31995__auto___38868 = arguments.length;
var i__31996__auto___38869 = (0);
while(true){
if((i__31996__auto___38869 < len__31995__auto___38868)){
args__32002__auto__.push((arguments[i__31996__auto___38869]));

var G__38870 = (i__31996__auto___38869 + (1));
i__31996__auto___38869 = G__38870;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38867))
;

quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38867){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38867,args__35369__auto__);
});})(ctor__35368__auto___38867))
;

quiescent.dom.script.cljs$lang$maxFixedArity = (0);

quiescent.dom.script.cljs$lang$applyTo = ((function (ctor__35368__auto___38867){
return (function (seq38500){
return quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38500));
});})(ctor__35368__auto___38867))
;

var ctor__35368__auto___38871 = quiescent.dom.constructor.call(null,"section");
quiescent.dom.section = ((function (ctor__35368__auto___38871){
return (function quiescent$dom$section(){
var args__32002__auto__ = [];
var len__31995__auto___38872 = arguments.length;
var i__31996__auto___38873 = (0);
while(true){
if((i__31996__auto___38873 < len__31995__auto___38872)){
args__32002__auto__.push((arguments[i__31996__auto___38873]));

var G__38874 = (i__31996__auto___38873 + (1));
i__31996__auto___38873 = G__38874;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38871))
;

quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38871){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38871,args__35369__auto__);
});})(ctor__35368__auto___38871))
;

quiescent.dom.section.cljs$lang$maxFixedArity = (0);

quiescent.dom.section.cljs$lang$applyTo = ((function (ctor__35368__auto___38871){
return (function (seq38501){
return quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38501));
});})(ctor__35368__auto___38871))
;

var ctor__35368__auto___38875 = quiescent.dom.constructor.call(null,"select");
quiescent.dom.select = ((function (ctor__35368__auto___38875){
return (function quiescent$dom$select(){
var args__32002__auto__ = [];
var len__31995__auto___38876 = arguments.length;
var i__31996__auto___38877 = (0);
while(true){
if((i__31996__auto___38877 < len__31995__auto___38876)){
args__32002__auto__.push((arguments[i__31996__auto___38877]));

var G__38878 = (i__31996__auto___38877 + (1));
i__31996__auto___38877 = G__38878;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38875))
;

quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38875){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38875,args__35369__auto__);
});})(ctor__35368__auto___38875))
;

quiescent.dom.select.cljs$lang$maxFixedArity = (0);

quiescent.dom.select.cljs$lang$applyTo = ((function (ctor__35368__auto___38875){
return (function (seq38502){
return quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38502));
});})(ctor__35368__auto___38875))
;

var ctor__35368__auto___38879 = quiescent.dom.constructor.call(null,"small");
quiescent.dom.small = ((function (ctor__35368__auto___38879){
return (function quiescent$dom$small(){
var args__32002__auto__ = [];
var len__31995__auto___38880 = arguments.length;
var i__31996__auto___38881 = (0);
while(true){
if((i__31996__auto___38881 < len__31995__auto___38880)){
args__32002__auto__.push((arguments[i__31996__auto___38881]));

var G__38882 = (i__31996__auto___38881 + (1));
i__31996__auto___38881 = G__38882;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38879))
;

quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38879){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38879,args__35369__auto__);
});})(ctor__35368__auto___38879))
;

quiescent.dom.small.cljs$lang$maxFixedArity = (0);

quiescent.dom.small.cljs$lang$applyTo = ((function (ctor__35368__auto___38879){
return (function (seq38503){
return quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38503));
});})(ctor__35368__auto___38879))
;

var ctor__35368__auto___38883 = quiescent.dom.constructor.call(null,"source");
quiescent.dom.source = ((function (ctor__35368__auto___38883){
return (function quiescent$dom$source(){
var args__32002__auto__ = [];
var len__31995__auto___38884 = arguments.length;
var i__31996__auto___38885 = (0);
while(true){
if((i__31996__auto___38885 < len__31995__auto___38884)){
args__32002__auto__.push((arguments[i__31996__auto___38885]));

var G__38886 = (i__31996__auto___38885 + (1));
i__31996__auto___38885 = G__38886;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38883))
;

quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38883){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38883,args__35369__auto__);
});})(ctor__35368__auto___38883))
;

quiescent.dom.source.cljs$lang$maxFixedArity = (0);

quiescent.dom.source.cljs$lang$applyTo = ((function (ctor__35368__auto___38883){
return (function (seq38504){
return quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38504));
});})(ctor__35368__auto___38883))
;

var ctor__35368__auto___38887 = quiescent.dom.constructor.call(null,"span");
quiescent.dom.span = ((function (ctor__35368__auto___38887){
return (function quiescent$dom$span(){
var args__32002__auto__ = [];
var len__31995__auto___38888 = arguments.length;
var i__31996__auto___38889 = (0);
while(true){
if((i__31996__auto___38889 < len__31995__auto___38888)){
args__32002__auto__.push((arguments[i__31996__auto___38889]));

var G__38890 = (i__31996__auto___38889 + (1));
i__31996__auto___38889 = G__38890;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38887))
;

quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38887){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38887,args__35369__auto__);
});})(ctor__35368__auto___38887))
;

quiescent.dom.span.cljs$lang$maxFixedArity = (0);

quiescent.dom.span.cljs$lang$applyTo = ((function (ctor__35368__auto___38887){
return (function (seq38505){
return quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38505));
});})(ctor__35368__auto___38887))
;

var ctor__35368__auto___38891 = quiescent.dom.constructor.call(null,"strong");
quiescent.dom.strong = ((function (ctor__35368__auto___38891){
return (function quiescent$dom$strong(){
var args__32002__auto__ = [];
var len__31995__auto___38892 = arguments.length;
var i__31996__auto___38893 = (0);
while(true){
if((i__31996__auto___38893 < len__31995__auto___38892)){
args__32002__auto__.push((arguments[i__31996__auto___38893]));

var G__38894 = (i__31996__auto___38893 + (1));
i__31996__auto___38893 = G__38894;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38891))
;

quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38891){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38891,args__35369__auto__);
});})(ctor__35368__auto___38891))
;

quiescent.dom.strong.cljs$lang$maxFixedArity = (0);

quiescent.dom.strong.cljs$lang$applyTo = ((function (ctor__35368__auto___38891){
return (function (seq38506){
return quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38506));
});})(ctor__35368__auto___38891))
;

var ctor__35368__auto___38895 = quiescent.dom.constructor.call(null,"style");
quiescent.dom.style = ((function (ctor__35368__auto___38895){
return (function quiescent$dom$style(){
var args__32002__auto__ = [];
var len__31995__auto___38896 = arguments.length;
var i__31996__auto___38897 = (0);
while(true){
if((i__31996__auto___38897 < len__31995__auto___38896)){
args__32002__auto__.push((arguments[i__31996__auto___38897]));

var G__38898 = (i__31996__auto___38897 + (1));
i__31996__auto___38897 = G__38898;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38895))
;

quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38895){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38895,args__35369__auto__);
});})(ctor__35368__auto___38895))
;

quiescent.dom.style.cljs$lang$maxFixedArity = (0);

quiescent.dom.style.cljs$lang$applyTo = ((function (ctor__35368__auto___38895){
return (function (seq38507){
return quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38507));
});})(ctor__35368__auto___38895))
;

var ctor__35368__auto___38899 = quiescent.dom.constructor.call(null,"sub");
quiescent.dom.sub = ((function (ctor__35368__auto___38899){
return (function quiescent$dom$sub(){
var args__32002__auto__ = [];
var len__31995__auto___38900 = arguments.length;
var i__31996__auto___38901 = (0);
while(true){
if((i__31996__auto___38901 < len__31995__auto___38900)){
args__32002__auto__.push((arguments[i__31996__auto___38901]));

var G__38902 = (i__31996__auto___38901 + (1));
i__31996__auto___38901 = G__38902;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38899))
;

quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38899){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38899,args__35369__auto__);
});})(ctor__35368__auto___38899))
;

quiescent.dom.sub.cljs$lang$maxFixedArity = (0);

quiescent.dom.sub.cljs$lang$applyTo = ((function (ctor__35368__auto___38899){
return (function (seq38508){
return quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38508));
});})(ctor__35368__auto___38899))
;

var ctor__35368__auto___38903 = quiescent.dom.constructor.call(null,"summary");
quiescent.dom.summary = ((function (ctor__35368__auto___38903){
return (function quiescent$dom$summary(){
var args__32002__auto__ = [];
var len__31995__auto___38904 = arguments.length;
var i__31996__auto___38905 = (0);
while(true){
if((i__31996__auto___38905 < len__31995__auto___38904)){
args__32002__auto__.push((arguments[i__31996__auto___38905]));

var G__38906 = (i__31996__auto___38905 + (1));
i__31996__auto___38905 = G__38906;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38903))
;

quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38903){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38903,args__35369__auto__);
});})(ctor__35368__auto___38903))
;

quiescent.dom.summary.cljs$lang$maxFixedArity = (0);

quiescent.dom.summary.cljs$lang$applyTo = ((function (ctor__35368__auto___38903){
return (function (seq38509){
return quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38509));
});})(ctor__35368__auto___38903))
;

var ctor__35368__auto___38907 = quiescent.dom.constructor.call(null,"sup");
quiescent.dom.sup = ((function (ctor__35368__auto___38907){
return (function quiescent$dom$sup(){
var args__32002__auto__ = [];
var len__31995__auto___38908 = arguments.length;
var i__31996__auto___38909 = (0);
while(true){
if((i__31996__auto___38909 < len__31995__auto___38908)){
args__32002__auto__.push((arguments[i__31996__auto___38909]));

var G__38910 = (i__31996__auto___38909 + (1));
i__31996__auto___38909 = G__38910;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38907))
;

quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38907){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38907,args__35369__auto__);
});})(ctor__35368__auto___38907))
;

quiescent.dom.sup.cljs$lang$maxFixedArity = (0);

quiescent.dom.sup.cljs$lang$applyTo = ((function (ctor__35368__auto___38907){
return (function (seq38510){
return quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38510));
});})(ctor__35368__auto___38907))
;

var ctor__35368__auto___38911 = quiescent.dom.constructor.call(null,"table");
quiescent.dom.table = ((function (ctor__35368__auto___38911){
return (function quiescent$dom$table(){
var args__32002__auto__ = [];
var len__31995__auto___38912 = arguments.length;
var i__31996__auto___38913 = (0);
while(true){
if((i__31996__auto___38913 < len__31995__auto___38912)){
args__32002__auto__.push((arguments[i__31996__auto___38913]));

var G__38914 = (i__31996__auto___38913 + (1));
i__31996__auto___38913 = G__38914;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38911))
;

quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38911){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38911,args__35369__auto__);
});})(ctor__35368__auto___38911))
;

quiescent.dom.table.cljs$lang$maxFixedArity = (0);

quiescent.dom.table.cljs$lang$applyTo = ((function (ctor__35368__auto___38911){
return (function (seq38511){
return quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38511));
});})(ctor__35368__auto___38911))
;

var ctor__35368__auto___38915 = quiescent.dom.constructor.call(null,"tbody");
quiescent.dom.tbody = ((function (ctor__35368__auto___38915){
return (function quiescent$dom$tbody(){
var args__32002__auto__ = [];
var len__31995__auto___38916 = arguments.length;
var i__31996__auto___38917 = (0);
while(true){
if((i__31996__auto___38917 < len__31995__auto___38916)){
args__32002__auto__.push((arguments[i__31996__auto___38917]));

var G__38918 = (i__31996__auto___38917 + (1));
i__31996__auto___38917 = G__38918;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38915))
;

quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38915){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38915,args__35369__auto__);
});})(ctor__35368__auto___38915))
;

quiescent.dom.tbody.cljs$lang$maxFixedArity = (0);

quiescent.dom.tbody.cljs$lang$applyTo = ((function (ctor__35368__auto___38915){
return (function (seq38512){
return quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38512));
});})(ctor__35368__auto___38915))
;

var ctor__35368__auto___38919 = quiescent.dom.constructor.call(null,"td");
quiescent.dom.td = ((function (ctor__35368__auto___38919){
return (function quiescent$dom$td(){
var args__32002__auto__ = [];
var len__31995__auto___38920 = arguments.length;
var i__31996__auto___38921 = (0);
while(true){
if((i__31996__auto___38921 < len__31995__auto___38920)){
args__32002__auto__.push((arguments[i__31996__auto___38921]));

var G__38922 = (i__31996__auto___38921 + (1));
i__31996__auto___38921 = G__38922;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38919))
;

quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38919){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38919,args__35369__auto__);
});})(ctor__35368__auto___38919))
;

quiescent.dom.td.cljs$lang$maxFixedArity = (0);

quiescent.dom.td.cljs$lang$applyTo = ((function (ctor__35368__auto___38919){
return (function (seq38513){
return quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38513));
});})(ctor__35368__auto___38919))
;

var ctor__35368__auto___38923 = quiescent.dom.constructor.call(null,"textarea");
quiescent.dom.textarea = ((function (ctor__35368__auto___38923){
return (function quiescent$dom$textarea(){
var args__32002__auto__ = [];
var len__31995__auto___38924 = arguments.length;
var i__31996__auto___38925 = (0);
while(true){
if((i__31996__auto___38925 < len__31995__auto___38924)){
args__32002__auto__.push((arguments[i__31996__auto___38925]));

var G__38926 = (i__31996__auto___38925 + (1));
i__31996__auto___38925 = G__38926;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38923))
;

quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38923){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38923,args__35369__auto__);
});})(ctor__35368__auto___38923))
;

quiescent.dom.textarea.cljs$lang$maxFixedArity = (0);

quiescent.dom.textarea.cljs$lang$applyTo = ((function (ctor__35368__auto___38923){
return (function (seq38514){
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38514));
});})(ctor__35368__auto___38923))
;

var ctor__35368__auto___38927 = quiescent.dom.constructor.call(null,"tfoot");
quiescent.dom.tfoot = ((function (ctor__35368__auto___38927){
return (function quiescent$dom$tfoot(){
var args__32002__auto__ = [];
var len__31995__auto___38928 = arguments.length;
var i__31996__auto___38929 = (0);
while(true){
if((i__31996__auto___38929 < len__31995__auto___38928)){
args__32002__auto__.push((arguments[i__31996__auto___38929]));

var G__38930 = (i__31996__auto___38929 + (1));
i__31996__auto___38929 = G__38930;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38927))
;

quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38927){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38927,args__35369__auto__);
});})(ctor__35368__auto___38927))
;

quiescent.dom.tfoot.cljs$lang$maxFixedArity = (0);

quiescent.dom.tfoot.cljs$lang$applyTo = ((function (ctor__35368__auto___38927){
return (function (seq38515){
return quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38515));
});})(ctor__35368__auto___38927))
;

var ctor__35368__auto___38931 = quiescent.dom.constructor.call(null,"th");
quiescent.dom.th = ((function (ctor__35368__auto___38931){
return (function quiescent$dom$th(){
var args__32002__auto__ = [];
var len__31995__auto___38932 = arguments.length;
var i__31996__auto___38933 = (0);
while(true){
if((i__31996__auto___38933 < len__31995__auto___38932)){
args__32002__auto__.push((arguments[i__31996__auto___38933]));

var G__38934 = (i__31996__auto___38933 + (1));
i__31996__auto___38933 = G__38934;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38931))
;

quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38931){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38931,args__35369__auto__);
});})(ctor__35368__auto___38931))
;

quiescent.dom.th.cljs$lang$maxFixedArity = (0);

quiescent.dom.th.cljs$lang$applyTo = ((function (ctor__35368__auto___38931){
return (function (seq38516){
return quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38516));
});})(ctor__35368__auto___38931))
;

var ctor__35368__auto___38935 = quiescent.dom.constructor.call(null,"thead");
quiescent.dom.thead = ((function (ctor__35368__auto___38935){
return (function quiescent$dom$thead(){
var args__32002__auto__ = [];
var len__31995__auto___38936 = arguments.length;
var i__31996__auto___38937 = (0);
while(true){
if((i__31996__auto___38937 < len__31995__auto___38936)){
args__32002__auto__.push((arguments[i__31996__auto___38937]));

var G__38938 = (i__31996__auto___38937 + (1));
i__31996__auto___38937 = G__38938;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38935))
;

quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38935){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38935,args__35369__auto__);
});})(ctor__35368__auto___38935))
;

quiescent.dom.thead.cljs$lang$maxFixedArity = (0);

quiescent.dom.thead.cljs$lang$applyTo = ((function (ctor__35368__auto___38935){
return (function (seq38517){
return quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38517));
});})(ctor__35368__auto___38935))
;

var ctor__35368__auto___38939 = quiescent.dom.constructor.call(null,"time");
quiescent.dom.time = ((function (ctor__35368__auto___38939){
return (function quiescent$dom$time(){
var args__32002__auto__ = [];
var len__31995__auto___38940 = arguments.length;
var i__31996__auto___38941 = (0);
while(true){
if((i__31996__auto___38941 < len__31995__auto___38940)){
args__32002__auto__.push((arguments[i__31996__auto___38941]));

var G__38942 = (i__31996__auto___38941 + (1));
i__31996__auto___38941 = G__38942;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38939))
;

quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38939){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38939,args__35369__auto__);
});})(ctor__35368__auto___38939))
;

quiescent.dom.time.cljs$lang$maxFixedArity = (0);

quiescent.dom.time.cljs$lang$applyTo = ((function (ctor__35368__auto___38939){
return (function (seq38518){
return quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38518));
});})(ctor__35368__auto___38939))
;

var ctor__35368__auto___38943 = quiescent.dom.constructor.call(null,"title");
quiescent.dom.title = ((function (ctor__35368__auto___38943){
return (function quiescent$dom$title(){
var args__32002__auto__ = [];
var len__31995__auto___38944 = arguments.length;
var i__31996__auto___38945 = (0);
while(true){
if((i__31996__auto___38945 < len__31995__auto___38944)){
args__32002__auto__.push((arguments[i__31996__auto___38945]));

var G__38946 = (i__31996__auto___38945 + (1));
i__31996__auto___38945 = G__38946;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38943))
;

quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38943){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38943,args__35369__auto__);
});})(ctor__35368__auto___38943))
;

quiescent.dom.title.cljs$lang$maxFixedArity = (0);

quiescent.dom.title.cljs$lang$applyTo = ((function (ctor__35368__auto___38943){
return (function (seq38519){
return quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38519));
});})(ctor__35368__auto___38943))
;

var ctor__35368__auto___38947 = quiescent.dom.constructor.call(null,"tr");
quiescent.dom.tr = ((function (ctor__35368__auto___38947){
return (function quiescent$dom$tr(){
var args__32002__auto__ = [];
var len__31995__auto___38948 = arguments.length;
var i__31996__auto___38949 = (0);
while(true){
if((i__31996__auto___38949 < len__31995__auto___38948)){
args__32002__auto__.push((arguments[i__31996__auto___38949]));

var G__38950 = (i__31996__auto___38949 + (1));
i__31996__auto___38949 = G__38950;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38947))
;

quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38947){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38947,args__35369__auto__);
});})(ctor__35368__auto___38947))
;

quiescent.dom.tr.cljs$lang$maxFixedArity = (0);

quiescent.dom.tr.cljs$lang$applyTo = ((function (ctor__35368__auto___38947){
return (function (seq38520){
return quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38520));
});})(ctor__35368__auto___38947))
;

var ctor__35368__auto___38951 = quiescent.dom.constructor.call(null,"track");
quiescent.dom.track = ((function (ctor__35368__auto___38951){
return (function quiescent$dom$track(){
var args__32002__auto__ = [];
var len__31995__auto___38952 = arguments.length;
var i__31996__auto___38953 = (0);
while(true){
if((i__31996__auto___38953 < len__31995__auto___38952)){
args__32002__auto__.push((arguments[i__31996__auto___38953]));

var G__38954 = (i__31996__auto___38953 + (1));
i__31996__auto___38953 = G__38954;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38951))
;

quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38951){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38951,args__35369__auto__);
});})(ctor__35368__auto___38951))
;

quiescent.dom.track.cljs$lang$maxFixedArity = (0);

quiescent.dom.track.cljs$lang$applyTo = ((function (ctor__35368__auto___38951){
return (function (seq38521){
return quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38521));
});})(ctor__35368__auto___38951))
;

var ctor__35368__auto___38955 = quiescent.dom.constructor.call(null,"u");
quiescent.dom.u = ((function (ctor__35368__auto___38955){
return (function quiescent$dom$u(){
var args__32002__auto__ = [];
var len__31995__auto___38956 = arguments.length;
var i__31996__auto___38957 = (0);
while(true){
if((i__31996__auto___38957 < len__31995__auto___38956)){
args__32002__auto__.push((arguments[i__31996__auto___38957]));

var G__38958 = (i__31996__auto___38957 + (1));
i__31996__auto___38957 = G__38958;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38955))
;

quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38955){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38955,args__35369__auto__);
});})(ctor__35368__auto___38955))
;

quiescent.dom.u.cljs$lang$maxFixedArity = (0);

quiescent.dom.u.cljs$lang$applyTo = ((function (ctor__35368__auto___38955){
return (function (seq38522){
return quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38522));
});})(ctor__35368__auto___38955))
;

var ctor__35368__auto___38959 = quiescent.dom.constructor.call(null,"ul");
quiescent.dom.ul = ((function (ctor__35368__auto___38959){
return (function quiescent$dom$ul(){
var args__32002__auto__ = [];
var len__31995__auto___38960 = arguments.length;
var i__31996__auto___38961 = (0);
while(true){
if((i__31996__auto___38961 < len__31995__auto___38960)){
args__32002__auto__.push((arguments[i__31996__auto___38961]));

var G__38962 = (i__31996__auto___38961 + (1));
i__31996__auto___38961 = G__38962;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38959))
;

quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38959){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38959,args__35369__auto__);
});})(ctor__35368__auto___38959))
;

quiescent.dom.ul.cljs$lang$maxFixedArity = (0);

quiescent.dom.ul.cljs$lang$applyTo = ((function (ctor__35368__auto___38959){
return (function (seq38523){
return quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38523));
});})(ctor__35368__auto___38959))
;

var ctor__35368__auto___38963 = quiescent.dom.constructor.call(null,"var");
quiescent.dom.var$ = ((function (ctor__35368__auto___38963){
return (function quiescent$dom$var(){
var args__32002__auto__ = [];
var len__31995__auto___38964 = arguments.length;
var i__31996__auto___38965 = (0);
while(true){
if((i__31996__auto___38965 < len__31995__auto___38964)){
args__32002__auto__.push((arguments[i__31996__auto___38965]));

var G__38966 = (i__31996__auto___38965 + (1));
i__31996__auto___38965 = G__38966;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38963))
;

quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38963){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38963,args__35369__auto__);
});})(ctor__35368__auto___38963))
;

quiescent.dom.var$.cljs$lang$maxFixedArity = (0);

quiescent.dom.var$.cljs$lang$applyTo = ((function (ctor__35368__auto___38963){
return (function (seq38524){
return quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38524));
});})(ctor__35368__auto___38963))
;

var ctor__35368__auto___38967 = quiescent.dom.constructor.call(null,"video");
quiescent.dom.video = ((function (ctor__35368__auto___38967){
return (function quiescent$dom$video(){
var args__32002__auto__ = [];
var len__31995__auto___38968 = arguments.length;
var i__31996__auto___38969 = (0);
while(true){
if((i__31996__auto___38969 < len__31995__auto___38968)){
args__32002__auto__.push((arguments[i__31996__auto___38969]));

var G__38970 = (i__31996__auto___38969 + (1));
i__31996__auto___38969 = G__38970;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38967))
;

quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38967){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38967,args__35369__auto__);
});})(ctor__35368__auto___38967))
;

quiescent.dom.video.cljs$lang$maxFixedArity = (0);

quiescent.dom.video.cljs$lang$applyTo = ((function (ctor__35368__auto___38967){
return (function (seq38525){
return quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});})(ctor__35368__auto___38967))
;

var ctor__35368__auto___38971 = quiescent.dom.constructor.call(null,"wbr");
quiescent.dom.wbr = ((function (ctor__35368__auto___38971){
return (function quiescent$dom$wbr(){
var args__32002__auto__ = [];
var len__31995__auto___38972 = arguments.length;
var i__31996__auto___38973 = (0);
while(true){
if((i__31996__auto___38973 < len__31995__auto___38972)){
args__32002__auto__.push((arguments[i__31996__auto___38973]));

var G__38974 = (i__31996__auto___38973 + (1));
i__31996__auto___38973 = G__38974;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38971))
;

quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38971){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38971,args__35369__auto__);
});})(ctor__35368__auto___38971))
;

quiescent.dom.wbr.cljs$lang$maxFixedArity = (0);

quiescent.dom.wbr.cljs$lang$applyTo = ((function (ctor__35368__auto___38971){
return (function (seq38526){
return quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38526));
});})(ctor__35368__auto___38971))
;

var ctor__35368__auto___38975 = quiescent.dom.constructor.call(null,"circle");
quiescent.dom.circle = ((function (ctor__35368__auto___38975){
return (function quiescent$dom$circle(){
var args__32002__auto__ = [];
var len__31995__auto___38976 = arguments.length;
var i__31996__auto___38977 = (0);
while(true){
if((i__31996__auto___38977 < len__31995__auto___38976)){
args__32002__auto__.push((arguments[i__31996__auto___38977]));

var G__38978 = (i__31996__auto___38977 + (1));
i__31996__auto___38977 = G__38978;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38975))
;

quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38975){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38975,args__35369__auto__);
});})(ctor__35368__auto___38975))
;

quiescent.dom.circle.cljs$lang$maxFixedArity = (0);

quiescent.dom.circle.cljs$lang$applyTo = ((function (ctor__35368__auto___38975){
return (function (seq38527){
return quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38527));
});})(ctor__35368__auto___38975))
;

var ctor__35368__auto___38979 = quiescent.dom.constructor.call(null,"g");
quiescent.dom.g = ((function (ctor__35368__auto___38979){
return (function quiescent$dom$g(){
var args__32002__auto__ = [];
var len__31995__auto___38980 = arguments.length;
var i__31996__auto___38981 = (0);
while(true){
if((i__31996__auto___38981 < len__31995__auto___38980)){
args__32002__auto__.push((arguments[i__31996__auto___38981]));

var G__38982 = (i__31996__auto___38981 + (1));
i__31996__auto___38981 = G__38982;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38979))
;

quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38979){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38979,args__35369__auto__);
});})(ctor__35368__auto___38979))
;

quiescent.dom.g.cljs$lang$maxFixedArity = (0);

quiescent.dom.g.cljs$lang$applyTo = ((function (ctor__35368__auto___38979){
return (function (seq38528){
return quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38528));
});})(ctor__35368__auto___38979))
;

var ctor__35368__auto___38983 = quiescent.dom.constructor.call(null,"line");
quiescent.dom.line = ((function (ctor__35368__auto___38983){
return (function quiescent$dom$line(){
var args__32002__auto__ = [];
var len__31995__auto___38984 = arguments.length;
var i__31996__auto___38985 = (0);
while(true){
if((i__31996__auto___38985 < len__31995__auto___38984)){
args__32002__auto__.push((arguments[i__31996__auto___38985]));

var G__38986 = (i__31996__auto___38985 + (1));
i__31996__auto___38985 = G__38986;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38983))
;

quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38983){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38983,args__35369__auto__);
});})(ctor__35368__auto___38983))
;

quiescent.dom.line.cljs$lang$maxFixedArity = (0);

quiescent.dom.line.cljs$lang$applyTo = ((function (ctor__35368__auto___38983){
return (function (seq38529){
return quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38529));
});})(ctor__35368__auto___38983))
;

var ctor__35368__auto___38987 = quiescent.dom.constructor.call(null,"path");
quiescent.dom.path = ((function (ctor__35368__auto___38987){
return (function quiescent$dom$path(){
var args__32002__auto__ = [];
var len__31995__auto___38988 = arguments.length;
var i__31996__auto___38989 = (0);
while(true){
if((i__31996__auto___38989 < len__31995__auto___38988)){
args__32002__auto__.push((arguments[i__31996__auto___38989]));

var G__38990 = (i__31996__auto___38989 + (1));
i__31996__auto___38989 = G__38990;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38987))
;

quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38987){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38987,args__35369__auto__);
});})(ctor__35368__auto___38987))
;

quiescent.dom.path.cljs$lang$maxFixedArity = (0);

quiescent.dom.path.cljs$lang$applyTo = ((function (ctor__35368__auto___38987){
return (function (seq38530){
return quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38530));
});})(ctor__35368__auto___38987))
;

var ctor__35368__auto___38991 = quiescent.dom.constructor.call(null,"polygon");
quiescent.dom.polygon = ((function (ctor__35368__auto___38991){
return (function quiescent$dom$polygon(){
var args__32002__auto__ = [];
var len__31995__auto___38992 = arguments.length;
var i__31996__auto___38993 = (0);
while(true){
if((i__31996__auto___38993 < len__31995__auto___38992)){
args__32002__auto__.push((arguments[i__31996__auto___38993]));

var G__38994 = (i__31996__auto___38993 + (1));
i__31996__auto___38993 = G__38994;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38991))
;

quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38991){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38991,args__35369__auto__);
});})(ctor__35368__auto___38991))
;

quiescent.dom.polygon.cljs$lang$maxFixedArity = (0);

quiescent.dom.polygon.cljs$lang$applyTo = ((function (ctor__35368__auto___38991){
return (function (seq38531){
return quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38531));
});})(ctor__35368__auto___38991))
;

var ctor__35368__auto___38995 = quiescent.dom.constructor.call(null,"polyline");
quiescent.dom.polyline = ((function (ctor__35368__auto___38995){
return (function quiescent$dom$polyline(){
var args__32002__auto__ = [];
var len__31995__auto___38996 = arguments.length;
var i__31996__auto___38997 = (0);
while(true){
if((i__31996__auto___38997 < len__31995__auto___38996)){
args__32002__auto__.push((arguments[i__31996__auto___38997]));

var G__38998 = (i__31996__auto___38997 + (1));
i__31996__auto___38997 = G__38998;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38995))
;

quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38995){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38995,args__35369__auto__);
});})(ctor__35368__auto___38995))
;

quiescent.dom.polyline.cljs$lang$maxFixedArity = (0);

quiescent.dom.polyline.cljs$lang$applyTo = ((function (ctor__35368__auto___38995){
return (function (seq38532){
return quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38532));
});})(ctor__35368__auto___38995))
;

var ctor__35368__auto___38999 = quiescent.dom.constructor.call(null,"rect");
quiescent.dom.rect = ((function (ctor__35368__auto___38999){
return (function quiescent$dom$rect(){
var args__32002__auto__ = [];
var len__31995__auto___39000 = arguments.length;
var i__31996__auto___39001 = (0);
while(true){
if((i__31996__auto___39001 < len__31995__auto___39000)){
args__32002__auto__.push((arguments[i__31996__auto___39001]));

var G__39002 = (i__31996__auto___39001 + (1));
i__31996__auto___39001 = G__39002;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___38999))
;

quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___38999){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___38999,args__35369__auto__);
});})(ctor__35368__auto___38999))
;

quiescent.dom.rect.cljs$lang$maxFixedArity = (0);

quiescent.dom.rect.cljs$lang$applyTo = ((function (ctor__35368__auto___38999){
return (function (seq38533){
return quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38533));
});})(ctor__35368__auto___38999))
;

var ctor__35368__auto___39003 = quiescent.dom.constructor.call(null,"svg");
quiescent.dom.svg = ((function (ctor__35368__auto___39003){
return (function quiescent$dom$svg(){
var args__32002__auto__ = [];
var len__31995__auto___39004 = arguments.length;
var i__31996__auto___39005 = (0);
while(true){
if((i__31996__auto___39005 < len__31995__auto___39004)){
args__32002__auto__.push((arguments[i__31996__auto___39005]));

var G__39006 = (i__31996__auto___39005 + (1));
i__31996__auto___39005 = G__39006;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___39003))
;

quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___39003){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___39003,args__35369__auto__);
});})(ctor__35368__auto___39003))
;

quiescent.dom.svg.cljs$lang$maxFixedArity = (0);

quiescent.dom.svg.cljs$lang$applyTo = ((function (ctor__35368__auto___39003){
return (function (seq38534){
return quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38534));
});})(ctor__35368__auto___39003))
;

var ctor__35368__auto___39007 = quiescent.dom.constructor.call(null,"text");
quiescent.dom.text = ((function (ctor__35368__auto___39007){
return (function quiescent$dom$text(){
var args__32002__auto__ = [];
var len__31995__auto___39008 = arguments.length;
var i__31996__auto___39009 = (0);
while(true){
if((i__31996__auto___39009 < len__31995__auto___39008)){
args__32002__auto__.push((arguments[i__31996__auto___39009]));

var G__39010 = (i__31996__auto___39009 + (1));
i__31996__auto___39009 = G__39010;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((0) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((0)),(0))):null);
return quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__32003__auto__);
});})(ctor__35368__auto___39007))
;

quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__35368__auto___39007){
return (function (args__35369__auto__){

return cljs.core.apply.call(null,ctor__35368__auto___39007,args__35369__auto__);
});})(ctor__35368__auto___39007))
;

quiescent.dom.text.cljs$lang$maxFixedArity = (0);

quiescent.dom.text.cljs$lang$applyTo = ((function (ctor__35368__auto___39007){
return (function (seq38448){
return quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38448));
});})(ctor__35368__auto___39007))
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map