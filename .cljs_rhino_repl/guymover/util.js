// Compiled by ClojureScript 1.7.58 {}
goog.provide('guymover.util');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
guymover.util.stringf = (function guymover$util$stringf(){
var args__35025__auto__ = [];
var len__35018__auto___35239 = arguments.length;
var i__35019__auto___35240 = (0);
while(true){
if((i__35019__auto___35240 < len__35018__auto___35239)){
args__35025__auto__.push((arguments[i__35019__auto___35240]));

var G__35241 = (i__35019__auto___35240 + (1));
i__35019__auto___35240 = G__35241;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((1) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((1)),(0))):null);
return guymover.util.stringf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35026__auto__);
});

guymover.util.stringf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,rest){
return cljs.core.apply.call(null,goog.string.format,fmt,rest);
});

guymover.util.stringf.cljs$lang$maxFixedArity = (1);

guymover.util.stringf.cljs$lang$applyTo = (function (seq35237){
var G__35238 = cljs.core.first.call(null,seq35237);
var seq35237__$1 = cljs.core.next.call(null,seq35237);
return guymover.util.stringf.cljs$core$IFn$_invoke$arity$variadic(G__35238,seq35237__$1);
});
/**
 * Converts rgb colors to hex.
 */
guymover.util.clr_hex = (function guymover$util$clr_hex(p__35242){
var vec__35248 = p__35242;
var r = cljs.core.nth.call(null,vec__35248,(0),null);
var g = cljs.core.nth.call(null,vec__35248,(1),null);
var b = cljs.core.nth.call(null,vec__35248,(2),null);
var hex_string = ((function (vec__35248,r,g,b){
return (function guymover$util$clr_hex_$_hex_string(s){
var ret = s.toString((16));
var G__35252 = cljs.core.count.call(null,ret);
switch (G__35252) {
case (1):
return [cljs.core.str("0"),cljs.core.str(ret)].join('');

break;
default:
return ret;

}
});})(vec__35248,r,g,b))
;
return [cljs.core.str("#"),cljs.core.str(hex_string.call(null,r)),cljs.core.str(hex_string.call(null,g)),cljs.core.str(hex_string.call(null,b))].join('');
});
guymover.util.clr_dist2 = (function guymover$util$clr_dist2(clr1,clr2){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__35254_SHARP_){
return (p1__35254_SHARP_ * p1__35254_SHARP_);
}),cljs.core.map.call(null,cljs.core._,clr2,clr1)));
});
/**
 * Generate a random UUID in clojure or clojurescript.
 */
guymover.util.new_uuid = (function guymover$util$new_uuid(){
return cljs.core.random_uuid.call(null);
});
guymover.util.clr_dist = (function guymover$util$clr_dist(clr1,clr2){
return Math.sqrt(guymover.util.clr_dist2.call(null,clr1,clr2));
});
/**
 * Given a set of existing colors,
 * attempt to generate a random color
 * that is at least a distance of threshold
 * from all existing colors.
 * 
 * If this cant't be done in the specified
 * number of retries, the furthest color from
 * all existing colors is picked.
 */
guymover.util.clr_gen = (function guymover$util$clr_gen(){
var args__35025__auto__ = [];
var len__35018__auto___35266 = arguments.length;
var i__35019__auto___35267 = (0);
while(true){
if((i__35019__auto___35267 < len__35018__auto___35266)){
args__35025__auto__.push((arguments[i__35019__auto___35267]));

var G__35268 = (i__35019__auto___35267 + (1));
i__35019__auto___35267 = G__35268;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((1) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((1)),(0))):null);
return guymover.util.clr_gen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35026__auto__);
});

guymover.util.clr_gen.cljs$core$IFn$_invoke$arity$variadic = (function (color_set,p__35259){
var map__35260 = p__35259;
var map__35260__$1 = ((((!((map__35260 == null)))?((((map__35260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35260):map__35260);
var retries = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(10));
var threshold = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(5));
if(cljs.core.set_QMARK_.call(null,color_set)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"color-set","color-set",-1935464849,null))))].join('')));
}

var gens = (function (){var iter__34732__auto__ = ((function (map__35260,map__35260__$1,retries,threshold){
return (function guymover$util$iter__35262(s__35263){
return (new cljs.core.LazySeq(null,((function (map__35260,map__35260__$1,retries,threshold){
return (function (){
var s__35263__$1 = s__35263;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35263__$1);
if(temp__4425__auto__){
var s__35263__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35263__$2)){
var c__34730__auto__ = cljs.core.chunk_first.call(null,s__35263__$2);
var size__34731__auto__ = cljs.core.count.call(null,c__34730__auto__);
var b__35265 = cljs.core.chunk_buffer.call(null,size__34731__auto__);
if((function (){var i__35264 = (0);
while(true){
if((i__35264 < size__34731__auto__)){
var i = cljs.core._nth.call(null,c__34730__auto__,i__35264);
cljs.core.chunk_append.call(null,b__35265,(function (){var clr = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256))], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clr","clr",-2006445107),clr,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.apply.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,((function (i__35264,clr,i,c__34730__auto__,size__34731__auto__,b__35265,s__35263__$2,temp__4425__auto__,map__35260,map__35260__$1,retries,threshold){
return (function (p1__35255_SHARP_){
return guymover.util.clr_dist.call(null,clr,p1__35255_SHARP_);
});})(i__35264,clr,i,c__34730__auto__,size__34731__auto__,b__35265,s__35263__$2,temp__4425__auto__,map__35260,map__35260__$1,retries,threshold))
,color_set)))], null);
})());

var G__35269 = (i__35264 + (1));
i__35264 = G__35269;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35265),guymover$util$iter__35262.call(null,cljs.core.chunk_rest.call(null,s__35263__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35265),null);
}
} else {
var i = cljs.core.first.call(null,s__35263__$2);
return cljs.core.cons.call(null,(function (){var clr = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256)),cljs.core.rand_int.call(null,(256))], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clr","clr",-2006445107),clr,new cljs.core.Keyword(null,"dist","dist",-1401837144),cljs.core.apply.call(null,cljs.core.max,cljs.core.cons.call(null,(0),cljs.core.map.call(null,((function (clr,i,s__35263__$2,temp__4425__auto__,map__35260,map__35260__$1,retries,threshold){
return (function (p1__35255_SHARP_){
return guymover.util.clr_dist.call(null,clr,p1__35255_SHARP_);
});})(clr,i,s__35263__$2,temp__4425__auto__,map__35260,map__35260__$1,retries,threshold))
,color_set)))], null);
})(),guymover$util$iter__35262.call(null,cljs.core.rest.call(null,s__35263__$2)));
}
} else {
return null;
}
break;
}
});})(map__35260,map__35260__$1,retries,threshold))
,null,null));
});})(map__35260,map__35260__$1,retries,threshold))
;
return iter__34732__auto__.call(null,cljs.core.range.call(null,retries));
})();
var or__33979__auto__ = new cljs.core.Keyword(null,"clr","clr",-2006445107).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (gens,map__35260,map__35260__$1,retries,threshold){
return (function (p1__35256_SHARP_){
return (new cljs.core.Keyword(null,"dist","dist",-1401837144).cljs$core$IFn$_invoke$arity$1(p1__35256_SHARP_) >= threshold);
});})(gens,map__35260,map__35260__$1,retries,threshold))
,gens)));
if(cljs.core.truth_(or__33979__auto__)){
return or__33979__auto__;
} else {
return new cljs.core.Keyword(null,"clr","clr",-2006445107).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"dist","dist",-1401837144),gens));
}
});

guymover.util.clr_gen.cljs$lang$maxFixedArity = (1);

guymover.util.clr_gen.cljs$lang$applyTo = (function (seq35257){
var G__35258 = cljs.core.first.call(null,seq35257);
var seq35257__$1 = cljs.core.next.call(null,seq35257);
return guymover.util.clr_gen.cljs$core$IFn$_invoke$arity$variadic(G__35258,seq35257__$1);
});
guymover.util.add_color = (function guymover$util$add_color(){
var args__35025__auto__ = [];
var len__35018__auto___35275 = arguments.length;
var i__35019__auto___35276 = (0);
while(true){
if((i__35019__auto___35276 < len__35018__auto___35275)){
args__35025__auto__.push((arguments[i__35019__auto___35276]));

var G__35277 = (i__35019__auto___35276 + (1));
i__35019__auto___35276 = G__35277;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((1) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((1)),(0))):null);
return guymover.util.add_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35026__auto__);
});

guymover.util.add_color.cljs$core$IFn$_invoke$arity$variadic = (function (colors,p__35272){
var map__35273 = p__35272;
var map__35273__$1 = ((((!((map__35273 == null)))?((((map__35273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35273):map__35273);
var retries = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(10));
var threshold = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(5));
return cljs.core.conj.call(null,colors,guymover.util.clr_gen.call(null,colors,new cljs.core.Keyword(null,"retries","retries",1888092808),retries,new cljs.core.Keyword(null,"threshold","threshold",204221583),threshold));
});

guymover.util.add_color.cljs$lang$maxFixedArity = (1);

guymover.util.add_color.cljs$lang$applyTo = (function (seq35270){
var G__35271 = cljs.core.first.call(null,seq35270);
var seq35270__$1 = cljs.core.next.call(null,seq35270);
return guymover.util.add_color.cljs$core$IFn$_invoke$arity$variadic(G__35271,seq35270__$1);
});

//# sourceMappingURL=util.js.map