// Compiled by ClojureScript 1.7.58 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

chord.format.ChordFormatter = {};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__34615__auto__ = (((_ == null))?null:_);
var m__34616__auto__ = (chord.format.freeze[goog.typeOf(x__34615__auto__)]);
if(!((m__34616__auto__ == null))){
return m__34616__auto__.call(null,_,obj);
} else {
var m__34616__auto____$1 = (chord.format.freeze["_"]);
if(!((m__34616__auto____$1 == null))){
return m__34616__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__34615__auto__ = (((_ == null))?null:_);
var m__34616__auto__ = (chord.format.thaw[goog.typeOf(x__34615__auto__)]);
if(!((m__34616__auto__ == null))){
return m__34616__auto__.call(null,_,s);
} else {
var m__34616__auto____$1 = (chord.format.thaw["_"]);
if(!((m__34616__auto____$1 == null))){
return m__34616__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__34873__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__34874__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__34875__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__34876__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__34877__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__34877__auto__,method_table__34873__auto__,prefer_table__34874__auto__,method_cache__34875__auto__,cached_hierarchy__34876__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format37084 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t_chord$format37084 = (function (_,meta37085){
this._ = _;
this.meta37085 = meta37085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format37084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37086,meta37085__$1){
var self__ = this;
var _37086__$1 = this;
return (new chord.format.t_chord$format37084(self__._,meta37085__$1));
});

chord.format.t_chord$format37084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37086){
var self__ = this;
var _37086__$1 = this;
return self__.meta37085;
});

chord.format.t_chord$format37084.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format37084.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format37084.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format37084.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37085","meta37085",383331458,null)], null);
});

chord.format.t_chord$format37084.cljs$lang$type = true;

chord.format.t_chord$format37084.cljs$lang$ctorStr = "chord.format/t_chord$format37084";

chord.format.t_chord$format37084.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"chord.format/t_chord$format37084");
});

chord.format.__GT_t_chord$format37084 = (function chord$format$__GT_t_chord$format37084(___$1,meta37085){
return (new chord.format.t_chord$format37084(___$1,meta37085));
});

}

return (new chord.format.t_chord$format37084(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format37087 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t_chord$format37087 = (function (_,meta37088){
this._ = _;
this.meta37088 = meta37088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format37087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37089,meta37088__$1){
var self__ = this;
var _37089__$1 = this;
return (new chord.format.t_chord$format37087(self__._,meta37088__$1));
});

chord.format.t_chord$format37087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37089){
var self__ = this;
var _37089__$1 = this;
return self__.meta37088;
});

chord.format.t_chord$format37087.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format37087.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format37087.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format37087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37088","meta37088",-179215274,null)], null);
});

chord.format.t_chord$format37087.cljs$lang$type = true;

chord.format.t_chord$format37087.cljs$lang$ctorStr = "chord.format/t_chord$format37087";

chord.format.t_chord$format37087.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"chord.format/t_chord$format37087");
});

chord.format.__GT_t_chord$format37087 = (function chord$format$__GT_t_chord$format37087(___$1,meta37088){
return (new chord.format.t_chord$format37087(___$1,meta37088));
});

}

return (new chord.format.t_chord$format37087(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format37090 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t_chord$format37090 = (function (opts,json_formatter,meta37091){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta37091 = meta37091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format37090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_37092,meta37091__$1){
var self__ = this;
var _37092__$1 = this;
return (new chord.format.t_chord$format37090(self__.opts,self__.json_formatter,meta37091__$1));
});})(json_formatter))
;

chord.format.t_chord$format37090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_37092){
var self__ = this;
var _37092__$1 = this;
return self__.meta37091;
});})(json_formatter))
;

chord.format.t_chord$format37090.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format37090.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format37090.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format37090.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta37091","meta37091",-1399527190,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format37090.cljs$lang$type = true;

chord.format.t_chord$format37090.cljs$lang$ctorStr = "chord.format/t_chord$format37090";

chord.format.t_chord$format37090.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"chord.format/t_chord$format37090");
});})(json_formatter))
;

chord.format.__GT_t_chord$format37090 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format37090(opts__$1,json_formatter__$1,meta37091){
return (new chord.format.t_chord$format37090(opts__$1,json_formatter__$1,meta37091));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format37090(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format37093 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t_chord$format37093 = (function (_,meta37094){
this._ = _;
this.meta37094 = meta37094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format37093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37095,meta37094__$1){
var self__ = this;
var _37095__$1 = this;
return (new chord.format.t_chord$format37093(self__._,meta37094__$1));
});

chord.format.t_chord$format37093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37095){
var self__ = this;
var _37095__$1 = this;
return self__.meta37094;
});

chord.format.t_chord$format37093.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format37093.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format37093.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format37093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37094","meta37094",560912964,null)], null);
});

chord.format.t_chord$format37093.cljs$lang$type = true;

chord.format.t_chord$format37093.cljs$lang$ctorStr = "chord.format/t_chord$format37093";

chord.format.t_chord$format37093.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"chord.format/t_chord$format37093");
});

chord.format.__GT_t_chord$format37093 = (function chord$format$__GT_t_chord$format37093(___$1,meta37094){
return (new chord.format.t_chord$format37093(___$1,meta37094));
});

}

return (new chord.format.t_chord$format37093(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format37096 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.format.t_chord$format37096 = (function (_,meta37097){
this._ = _;
this.meta37097 = meta37097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format37096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37098,meta37097__$1){
var self__ = this;
var _37098__$1 = this;
return (new chord.format.t_chord$format37096(self__._,meta37097__$1));
});

chord.format.t_chord$format37096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37098){
var self__ = this;
var _37098__$1 = this;
return self__.meta37097;
});

chord.format.t_chord$format37096.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format37096.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format37096.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format37096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta37097","meta37097",161118079,null)], null);
});

chord.format.t_chord$format37096.cljs$lang$type = true;

chord.format.t_chord$format37096.cljs$lang$ctorStr = "chord.format/t_chord$format37096";

chord.format.t_chord$format37096.cljs$lang$ctorPrWriter = (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"chord.format/t_chord$format37096");
});

chord.format.__GT_t_chord$format37096 = (function chord$format$__GT_t_chord$format37096(___$1,meta37097){
return (new chord.format.t_chord$format37096(___$1,meta37097));
});

}

return (new chord.format.t_chord$format37096(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__37100,p__37101){
var map__37110 = p__37100;
var map__37110__$1 = ((((!((map__37110 == null)))?((((map__37110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37110):map__37110);
var read_ch = cljs.core.get.call(null,map__37110__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__37110__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__37111 = p__37101;
var map__37111__$1 = ((((!((map__37111 == null)))?((((map__37111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37111):map__37111);
var opts = map__37111__$1;
var format = cljs.core.get.call(null,map__37111__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__37110,map__37110__$1,read_ch,write_ch,map__37111,map__37111__$1,opts,format){
return (function (p__37114){
var map__37115 = p__37114;
var map__37115__$1 = ((((!((map__37115 == null)))?((((map__37115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37115):map__37115);
var message = cljs.core.get.call(null,map__37115__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
}catch (e37117){if((e37117 instanceof Error)){
var e = e37117;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e37117;

}
}});})(fmtr,map__37110,map__37110__$1,read_ch,write_ch,map__37111,map__37111__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__37110,map__37110__$1,read_ch,write_ch,map__37111,map__37111__$1,opts,format){
return (function (p1__37099_SHARP_){
return chord.format.freeze.call(null,fmtr,p1__37099_SHARP_);
});})(fmtr,map__37110,map__37110__$1,read_ch,write_ch,map__37111,map__37111__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map