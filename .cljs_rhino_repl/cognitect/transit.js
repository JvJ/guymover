// Compiled by ClojureScript 1.7.58 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__37255_37259 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__37256_37260 = null;
var count__37257_37261 = (0);
var i__37258_37262 = (0);
while(true){
if((i__37258_37262 < count__37257_37261)){
var k_37263 = cljs.core._nth.call(null,chunk__37256_37260,i__37258_37262);
var v_37264 = (b[k_37263]);
(a[k_37263] = v_37264);

var G__37265 = seq__37255_37259;
var G__37266 = chunk__37256_37260;
var G__37267 = count__37257_37261;
var G__37268 = (i__37258_37262 + (1));
seq__37255_37259 = G__37265;
chunk__37256_37260 = G__37266;
count__37257_37261 = G__37267;
i__37258_37262 = G__37268;
continue;
} else {
var temp__4425__auto___37269 = cljs.core.seq.call(null,seq__37255_37259);
if(temp__4425__auto___37269){
var seq__37255_37270__$1 = temp__4425__auto___37269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37255_37270__$1)){
var c__34763__auto___37271 = cljs.core.chunk_first.call(null,seq__37255_37270__$1);
var G__37272 = cljs.core.chunk_rest.call(null,seq__37255_37270__$1);
var G__37273 = c__34763__auto___37271;
var G__37274 = cljs.core.count.call(null,c__34763__auto___37271);
var G__37275 = (0);
seq__37255_37259 = G__37272;
chunk__37256_37260 = G__37273;
count__37257_37261 = G__37274;
i__37258_37262 = G__37275;
continue;
} else {
var k_37276 = cljs.core.first.call(null,seq__37255_37270__$1);
var v_37277 = (b[k_37276]);
(a[k_37276] = v_37277);

var G__37278 = cljs.core.next.call(null,seq__37255_37270__$1);
var G__37279 = null;
var G__37280 = (0);
var G__37281 = (0);
seq__37255_37259 = G__37278;
chunk__37256_37260 = G__37279;
count__37257_37261 = G__37280;
i__37258_37262 = G__37281;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var args37282 = [];
var len__35018__auto___37285 = arguments.length;
var i__35019__auto___37286 = (0);
while(true){
if((i__35019__auto___37286 < len__35018__auto___37285)){
args37282.push((arguments[i__35019__auto___37286]));

var G__37287 = (i__35019__auto___37286 + (1));
i__35019__auto___37286 = G__37287;
continue;
} else {
}
break;
}

var G__37284 = args37282.length;
switch (G__37284) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37282.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__37289 = (i + (2));
var G__37290 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__37289;
ret = G__37290;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37291_37295 = cljs.core.seq.call(null,v);
var chunk__37292_37296 = null;
var count__37293_37297 = (0);
var i__37294_37298 = (0);
while(true){
if((i__37294_37298 < count__37293_37297)){
var x_37299 = cljs.core._nth.call(null,chunk__37292_37296,i__37294_37298);
ret.push(x_37299);

var G__37300 = seq__37291_37295;
var G__37301 = chunk__37292_37296;
var G__37302 = count__37293_37297;
var G__37303 = (i__37294_37298 + (1));
seq__37291_37295 = G__37300;
chunk__37292_37296 = G__37301;
count__37293_37297 = G__37302;
i__37294_37298 = G__37303;
continue;
} else {
var temp__4425__auto___37304 = cljs.core.seq.call(null,seq__37291_37295);
if(temp__4425__auto___37304){
var seq__37291_37305__$1 = temp__4425__auto___37304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37291_37305__$1)){
var c__34763__auto___37306 = cljs.core.chunk_first.call(null,seq__37291_37305__$1);
var G__37307 = cljs.core.chunk_rest.call(null,seq__37291_37305__$1);
var G__37308 = c__34763__auto___37306;
var G__37309 = cljs.core.count.call(null,c__34763__auto___37306);
var G__37310 = (0);
seq__37291_37295 = G__37307;
chunk__37292_37296 = G__37308;
count__37293_37297 = G__37309;
i__37294_37298 = G__37310;
continue;
} else {
var x_37311 = cljs.core.first.call(null,seq__37291_37305__$1);
ret.push(x_37311);

var G__37312 = cljs.core.next.call(null,seq__37291_37305__$1);
var G__37313 = null;
var G__37314 = (0);
var G__37315 = (0);
seq__37291_37295 = G__37312;
chunk__37292_37296 = G__37313;
count__37293_37297 = G__37314;
i__37294_37298 = G__37315;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37316_37320 = cljs.core.seq.call(null,v);
var chunk__37317_37321 = null;
var count__37318_37322 = (0);
var i__37319_37323 = (0);
while(true){
if((i__37319_37323 < count__37318_37322)){
var x_37324 = cljs.core._nth.call(null,chunk__37317_37321,i__37319_37323);
ret.push(x_37324);

var G__37325 = seq__37316_37320;
var G__37326 = chunk__37317_37321;
var G__37327 = count__37318_37322;
var G__37328 = (i__37319_37323 + (1));
seq__37316_37320 = G__37325;
chunk__37317_37321 = G__37326;
count__37318_37322 = G__37327;
i__37319_37323 = G__37328;
continue;
} else {
var temp__4425__auto___37329 = cljs.core.seq.call(null,seq__37316_37320);
if(temp__4425__auto___37329){
var seq__37316_37330__$1 = temp__4425__auto___37329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37316_37330__$1)){
var c__34763__auto___37331 = cljs.core.chunk_first.call(null,seq__37316_37330__$1);
var G__37332 = cljs.core.chunk_rest.call(null,seq__37316_37330__$1);
var G__37333 = c__34763__auto___37331;
var G__37334 = cljs.core.count.call(null,c__34763__auto___37331);
var G__37335 = (0);
seq__37316_37320 = G__37332;
chunk__37317_37321 = G__37333;
count__37318_37322 = G__37334;
i__37319_37323 = G__37335;
continue;
} else {
var x_37336 = cljs.core.first.call(null,seq__37316_37330__$1);
ret.push(x_37336);

var G__37337 = cljs.core.next.call(null,seq__37316_37330__$1);
var G__37338 = null;
var G__37339 = (0);
var G__37340 = (0);
seq__37316_37320 = G__37337;
chunk__37317_37321 = G__37338;
count__37318_37322 = G__37339;
i__37319_37323 = G__37340;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37341_37345 = cljs.core.seq.call(null,v);
var chunk__37342_37346 = null;
var count__37343_37347 = (0);
var i__37344_37348 = (0);
while(true){
if((i__37344_37348 < count__37343_37347)){
var x_37349 = cljs.core._nth.call(null,chunk__37342_37346,i__37344_37348);
ret.push(x_37349);

var G__37350 = seq__37341_37345;
var G__37351 = chunk__37342_37346;
var G__37352 = count__37343_37347;
var G__37353 = (i__37344_37348 + (1));
seq__37341_37345 = G__37350;
chunk__37342_37346 = G__37351;
count__37343_37347 = G__37352;
i__37344_37348 = G__37353;
continue;
} else {
var temp__4425__auto___37354 = cljs.core.seq.call(null,seq__37341_37345);
if(temp__4425__auto___37354){
var seq__37341_37355__$1 = temp__4425__auto___37354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37341_37355__$1)){
var c__34763__auto___37356 = cljs.core.chunk_first.call(null,seq__37341_37355__$1);
var G__37357 = cljs.core.chunk_rest.call(null,seq__37341_37355__$1);
var G__37358 = c__34763__auto___37356;
var G__37359 = cljs.core.count.call(null,c__34763__auto___37356);
var G__37360 = (0);
seq__37341_37345 = G__37357;
chunk__37342_37346 = G__37358;
count__37343_37347 = G__37359;
i__37344_37348 = G__37360;
continue;
} else {
var x_37361 = cljs.core.first.call(null,seq__37341_37355__$1);
ret.push(x_37361);

var G__37362 = cljs.core.next.call(null,seq__37341_37355__$1);
var G__37363 = null;
var G__37364 = (0);
var G__37365 = (0);
seq__37341_37345 = G__37362;
chunk__37342_37346 = G__37363;
count__37343_37347 = G__37364;
i__37344_37348 = G__37365;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those
 * type constructors.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var args37366 = [];
var len__35018__auto___37377 = arguments.length;
var i__35019__auto___37378 = (0);
while(true){
if((i__35019__auto___37378 < len__35018__auto___37377)){
args37366.push((arguments[i__35019__auto___37378]));

var G__37379 = (i__35019__auto___37378 + (1));
i__35019__auto___37378 = G__37379;
continue;
} else {
}
break;
}

var G__37368 = args37366.length;
switch (G__37368) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37366.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__37369 = obj;
G__37369.push(kfn.call(null,k),vfn.call(null,v));

return G__37369;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x37370 = cljs.core.clone.call(null,handlers);
x37370.forEach = ((function (x37370,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__37371 = cljs.core.seq.call(null,coll);
var chunk__37372 = null;
var count__37373 = (0);
var i__37374 = (0);
while(true){
if((i__37374 < count__37373)){
var vec__37375 = cljs.core._nth.call(null,chunk__37372,i__37374);
var k = cljs.core.nth.call(null,vec__37375,(0),null);
var v = cljs.core.nth.call(null,vec__37375,(1),null);
f.call(null,v,k);

var G__37381 = seq__37371;
var G__37382 = chunk__37372;
var G__37383 = count__37373;
var G__37384 = (i__37374 + (1));
seq__37371 = G__37381;
chunk__37372 = G__37382;
count__37373 = G__37383;
i__37374 = G__37384;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37371);
if(temp__4425__auto__){
var seq__37371__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37371__$1)){
var c__34763__auto__ = cljs.core.chunk_first.call(null,seq__37371__$1);
var G__37385 = cljs.core.chunk_rest.call(null,seq__37371__$1);
var G__37386 = c__34763__auto__;
var G__37387 = cljs.core.count.call(null,c__34763__auto__);
var G__37388 = (0);
seq__37371 = G__37385;
chunk__37372 = G__37386;
count__37373 = G__37387;
i__37374 = G__37388;
continue;
} else {
var vec__37376 = cljs.core.first.call(null,seq__37371__$1);
var k = cljs.core.nth.call(null,vec__37376,(0),null);
var v = cljs.core.nth.call(null,vec__37376,(1),null);
f.call(null,v,k);

var G__37389 = cljs.core.next.call(null,seq__37371__$1);
var G__37390 = null;
var G__37391 = (0);
var G__37392 = (0);
seq__37371 = G__37389;
chunk__37372 = G__37390;
count__37373 = G__37391;
i__37374 = G__37392;
continue;
}
} else {
return null;
}
}
break;
}
});})(x37370,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x37370;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var args37393 = [];
var len__35018__auto___37399 = arguments.length;
var i__35019__auto___37400 = (0);
while(true){
if((i__35019__auto___37400 < len__35018__auto___37399)){
args37393.push((arguments[i__35019__auto___37400]));

var G__37401 = (i__35019__auto___37400 + (1));
i__35019__auto___37400 = G__37401;
continue;
} else {
}
break;
}

var G__37395 = args37393.length;
switch (G__37395) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37393.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit37396 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t_cognitect$transit37396 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta37397){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta37397 = meta37397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit37396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37398,meta37397__$1){
var self__ = this;
var _37398__$1 = this;
return (new cognitect.transit.t_cognitect$transit37396(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta37397__$1));
});

cognitect.transit.t_cognitect$transit37396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37398){
var self__ = this;
var _37398__$1 = this;
return self__.meta37397;
});

cognitect.transit.t_cognitect$transit37396.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37396.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37396.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37396.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta37397","meta37397",-217484005,null)], null);
});

cognitect.transit.t_cognitect$transit37396.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit37396.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit37396";

cognitect.transit.t_cognitect$transit37396.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"cognitect.transit/t_cognitect$transit37396");
});

cognitect.transit.__GT_t_cognitect$transit37396 = (function cognitect$transit$__GT_t_cognitect$transit37396(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37397){
return (new cognitect.transit.t_cognitect$transit37396(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37397));
});

}

return (new cognitect.transit.t_cognitect$transit37396(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map