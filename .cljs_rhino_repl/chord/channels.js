// Compiled by ClojureScript 1.7.58 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__36195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36195__auto__){
return (function (){
var f__36196__auto__ = (function (){var switch__36174__auto__ = ((function (c__36195__auto__){
return (function (state_37446){
var state_val_37447 = (state_37446[(1)]);
if((state_val_37447 === (1))){
var state_37446__$1 = state_37446;
var statearr_37448_37463 = state_37446__$1;
(statearr_37448_37463[(2)] = null);

(statearr_37448_37463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (2))){
var state_37446__$1 = state_37446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37446__$1,(4),ch);
} else {
if((state_val_37447 === (3))){
var inst_37444 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37446__$1,inst_37444);
} else {
if((state_val_37447 === (4))){
var inst_37436 = (state_37446[(7)]);
var inst_37436__$1 = (state_37446[(2)]);
var state_37446__$1 = (function (){var statearr_37449 = state_37446;
(statearr_37449[(7)] = inst_37436__$1);

return statearr_37449;
})();
if(cljs.core.truth_(inst_37436__$1)){
var statearr_37450_37464 = state_37446__$1;
(statearr_37450_37464[(1)] = (5));

} else {
var statearr_37451_37465 = state_37446__$1;
(statearr_37451_37465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (5))){
var inst_37436 = (state_37446[(7)]);
var inst_37438 = ws.send(inst_37436);
var state_37446__$1 = (function (){var statearr_37452 = state_37446;
(statearr_37452[(8)] = inst_37438);

return statearr_37452;
})();
var statearr_37453_37466 = state_37446__$1;
(statearr_37453_37466[(2)] = null);

(statearr_37453_37466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (6))){
var state_37446__$1 = state_37446;
var statearr_37454_37467 = state_37446__$1;
(statearr_37454_37467[(2)] = null);

(statearr_37454_37467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37447 === (7))){
var inst_37442 = (state_37446[(2)]);
var state_37446__$1 = state_37446;
var statearr_37455_37468 = state_37446__$1;
(statearr_37455_37468[(2)] = inst_37442);

(statearr_37455_37468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__36195__auto__))
;
return ((function (switch__36174__auto__,c__36195__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__36175__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__36175__auto____0 = (function (){
var statearr_37459 = [null,null,null,null,null,null,null,null,null];
(statearr_37459[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__36175__auto__);

(statearr_37459[(1)] = (1));

return statearr_37459;
});
var chord$channels$write_to_ws_BANG__$_state_machine__36175__auto____1 = (function (state_37446){
while(true){
var ret_value__36176__auto__ = (function (){try{while(true){
var result__36177__auto__ = switch__36174__auto__.call(null,state_37446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36177__auto__;
}
break;
}
}catch (e37460){if((e37460 instanceof Object)){
var ex__36178__auto__ = e37460;
var statearr_37461_37469 = state_37446;
(statearr_37461_37469[(5)] = ex__36178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37470 = state_37446;
state_37446 = G__37470;
continue;
} else {
return ret_value__36176__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__36175__auto__ = function(state_37446){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__36175__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__36175__auto____1.call(this,state_37446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__36175__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__36175__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__36175__auto__;
})()
;})(switch__36174__auto__,c__36195__auto__))
})();
var state__36197__auto__ = (function (){var statearr_37462 = f__36196__auto__.call(null);
(statearr_37462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36195__auto__);

return statearr_37462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36197__auto__);
});})(c__36195__auto__))
);

return c__36195__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(){
var args__35025__auto__ = [];
var len__35018__auto___37481 = arguments.length;
var i__35019__auto___37482 = (0);
while(true){
if((i__35019__auto___37482 < len__35018__auto___37481)){
args__35025__auto__.push((arguments[i__35019__auto___37482]));

var G__37483 = (i__35019__auto___37482 + (1));
i__35019__auto___37482 = G__37483;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((2) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35026__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__37474){
var vec__37475 = p__37474;
var map__37476 = cljs.core.nth.call(null,vec__37475,(0),null);
var map__37476__$1 = ((((!((map__37476 == null)))?((((map__37476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37476):map__37476);
var on_close = cljs.core.get.call(null,map__37476__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels37478 !== 'undefined'){
} else {

/**
* @constructor
*/
chord.channels.t_chord$channels37478 = (function (read_ch,write_ch,p__37474,vec__37475,map__37476,on_close,meta37479){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__37474 = p__37474;
this.vec__37475 = vec__37475;
this.map__37476 = map__37476;
this.on_close = on_close;
this.meta37479 = meta37479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels37478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (_37480,meta37479__$1){
var self__ = this;
var _37480__$1 = this;
return (new chord.channels.t_chord$channels37478(self__.read_ch,self__.write_ch,self__.p__37474,self__.vec__37475,self__.map__37476,self__.on_close,meta37479__$1));
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.t_chord$channels37478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (_37480){
var self__ = this;
var _37480__$1 = this;
return self__.meta37479;
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.t_chord$channels37478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels37478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.t_chord$channels37478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels37478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.t_chord$channels37478.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels37478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.t_chord$channels37478.getBasis = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__37474","p__37474",31428487,null),new cljs.core.Symbol(null,"vec__37475","vec__37475",780752431,null),new cljs.core.Symbol(null,"map__37476","map__37476",-472318667,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta37479","meta37479",-1669601936,null)], null);
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.t_chord$channels37478.cljs$lang$type = true;

chord.channels.t_chord$channels37478.cljs$lang$ctorStr = "chord.channels/t_chord$channels37478";

chord.channels.t_chord$channels37478.cljs$lang$ctorPrWriter = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function (this__34558__auto__,writer__34559__auto__,opt__34560__auto__){
return cljs.core._write.call(null,writer__34559__auto__,"chord.channels/t_chord$channels37478");
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

chord.channels.__GT_t_chord$channels37478 = ((function (vec__37475,map__37476,map__37476__$1,on_close){
return (function chord$channels$__GT_t_chord$channels37478(read_ch__$1,write_ch__$1,p__37474__$1,vec__37475__$1,map__37476__$2,on_close__$1,meta37479){
return (new chord.channels.t_chord$channels37478(read_ch__$1,write_ch__$1,p__37474__$1,vec__37475__$1,map__37476__$2,on_close__$1,meta37479));
});})(vec__37475,map__37476,map__37476__$1,on_close))
;

}

return (new chord.channels.t_chord$channels37478(read_ch,write_ch,p__37474,vec__37475,map__37476__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq37471){
var G__37472 = cljs.core.first.call(null,seq37471);
var seq37471__$1 = cljs.core.next.call(null,seq37471);
var G__37473 = cljs.core.first.call(null,seq37471__$1);
var seq37471__$2 = cljs.core.next.call(null,seq37471__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__37472,G__37473,seq37471__$2);
});

//# sourceMappingURL=channels.js.map