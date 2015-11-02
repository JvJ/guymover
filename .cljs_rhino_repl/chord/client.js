// Compiled by ClojureScript 1.7.58 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.on_close = (function chord$client$on_close(){
var args__35025__auto__ = [];
var len__35018__auto___36897 = arguments.length;
var i__35019__auto___36898 = (0);
while(true){
if((i__35019__auto___36898 < len__35018__auto___36897)){
args__35025__auto__.push((arguments[i__35019__auto___36898]));

var G__36899 = (i__35019__auto___36898 + (1));
i__35019__auto___36898 = G__36899;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((3) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((3)),(0))):null);
return chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35026__auto__);
});

chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic = (function (ws,read_ch,write_ch,p__36824){
var vec__36825 = p__36824;
var err_meta_channel = cljs.core.nth.call(null,vec__36825,(0),null);
return ws.onclose = ((function (vec__36825,err_meta_channel){
return (function (ev){
var c__36195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36195__auto__,vec__36825,err_meta_channel){
return (function (){
var f__36196__auto__ = (function (){var switch__36174__auto__ = ((function (c__36195__auto__,vec__36825,err_meta_channel){
return (function (state_36864){
var state_val_36865 = (state_36864[(1)]);
if((state_val_36865 === (7))){
var inst_36860 = (state_36864[(2)]);
var inst_36861 = cljs.core.async.close_BANG_.call(null,read_ch);
var inst_36862 = cljs.core.async.close_BANG_.call(null,write_ch);
var state_36864__$1 = (function (){var statearr_36866 = state_36864;
(statearr_36866[(7)] = inst_36861);

(statearr_36866[(8)] = inst_36860);

return statearr_36866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36864__$1,inst_36862);
} else {
if((state_val_36865 === (1))){
var inst_36826 = (state_36864[(9)]);
var inst_36826__$1 = ws.error_seen;
var state_36864__$1 = (function (){var statearr_36867 = state_36864;
(statearr_36867[(9)] = inst_36826__$1);

return statearr_36867;
})();
if(cljs.core.truth_(inst_36826__$1)){
var statearr_36868_36900 = state_36864__$1;
(statearr_36868_36900[(1)] = (2));

} else {
var statearr_36869_36901 = state_36864__$1;
(statearr_36869_36901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (4))){
var inst_36832 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
if(cljs.core.truth_(inst_36832)){
var statearr_36870_36902 = state_36864__$1;
(statearr_36870_36902[(1)] = (5));

} else {
var statearr_36871_36903 = state_36864__$1;
(statearr_36871_36903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (6))){
var state_36864__$1 = state_36864;
var statearr_36872_36904 = state_36864__$1;
(statearr_36872_36904[(2)] = null);

(statearr_36872_36904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (3))){
var inst_36829 = ev.wasClean;
var inst_36830 = cljs.core.not.call(null,inst_36829);
var state_36864__$1 = state_36864;
var statearr_36873_36905 = state_36864__$1;
(statearr_36873_36905[(2)] = inst_36830);

(statearr_36873_36905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (12))){
var inst_36857 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36874_36906 = state_36864__$1;
(statearr_36874_36906[(2)] = inst_36857);

(statearr_36874_36906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (2))){
var inst_36826 = (state_36864[(9)]);
var state_36864__$1 = state_36864;
var statearr_36875_36907 = state_36864__$1;
(statearr_36875_36907[(2)] = inst_36826);

(statearr_36875_36907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (11))){
var inst_36852 = (state_36864[(2)]);
var state_36864__$1 = state_36864;
var statearr_36876_36908 = state_36864__$1;
(statearr_36876_36908[(2)] = inst_36852);

(statearr_36876_36908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (9))){
var state_36864__$1 = state_36864;
var statearr_36877_36909 = state_36864__$1;
(statearr_36877_36909[(2)] = null);

(statearr_36877_36909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (5))){
var inst_36834 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wasClean","wasClean",-1404940601)];
var inst_36835 = ev.reason;
var inst_36836 = ev.code;
var inst_36837 = ev.wasClean;
var inst_36838 = [inst_36835,inst_36836,inst_36837];
var inst_36839 = cljs.core.PersistentHashMap.fromArrays(inst_36834,inst_36838);
var state_36864__$1 = (function (){var statearr_36878 = state_36864;
(statearr_36878[(10)] = inst_36839);

return statearr_36878;
})();
if(cljs.core.truth_(err_meta_channel)){
var statearr_36879_36910 = state_36864__$1;
(statearr_36879_36910[(1)] = (8));

} else {
var statearr_36880_36911 = state_36864__$1;
(statearr_36880_36911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36865 === (10))){
var inst_36839 = (state_36864[(10)]);
var inst_36855 = (state_36864[(2)]);
var state_36864__$1 = (function (){var statearr_36881 = state_36864;
(statearr_36881[(11)] = inst_36855);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(12),read_ch,inst_36839);
} else {
if((state_val_36865 === (8))){
var inst_36839 = (state_36864[(10)]);
var inst_36826 = (state_36864[(9)]);
var inst_36844 = cljs.core.async.chan.call(null,(1));
var inst_36845 = (function (){var error_seen_QMARK_ = inst_36826;
var error_desc = inst_36839;
var c__36195__auto____$1 = inst_36844;
return ((function (error_seen_QMARK_,error_desc,c__36195__auto____$1,inst_36839,inst_36826,inst_36844,state_val_36865,c__36195__auto__,vec__36825,err_meta_channel){
return (function (){
var f__36196__auto__ = (function (){var switch__36174__auto__ = ((function (error_seen_QMARK_,error_desc,c__36195__auto____$1,inst_36839,inst_36826,inst_36844,state_val_36865,c__36195__auto__,vec__36825,err_meta_channel){
return (function (state_36842){
var state_val_36843 = (state_36842[(1)]);
if((state_val_36843 === (1))){
var state_36842__$1 = state_36842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36842__$1,error_desc);
} else {
return null;
}
});})(error_seen_QMARK_,error_desc,c__36195__auto____$1,inst_36839,inst_36826,inst_36844,state_val_36865,c__36195__auto__,vec__36825,err_meta_channel))
;
return ((function (switch__36174__auto__,error_seen_QMARK_,error_desc,c__36195__auto____$1,inst_36839,inst_36826,inst_36844,state_val_36865,c__36195__auto__,vec__36825,err_meta_channel){
return (function() {
var chord$client$state_machine__36175__auto__ = null;
var chord$client$state_machine__36175__auto____0 = (function (){
var statearr_36885 = [null,null,null,null,null,null,null];
(statearr_36885[(0)] = chord$client$state_machine__36175__auto__);

(statearr_36885[(1)] = (1));

return statearr_36885;
});
var chord$client$state_machine__36175__auto____1 = (function (state_36842){
while(true){
var ret_value__36176__auto__ = (function (){try{while(true){
var result__36177__auto__ = switch__36174__auto__.call(null,state_36842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36177__auto__;
}
break;
}
}catch (e36886){if((e36886 instanceof Object)){
var ex__36178__auto__ = e36886;
var statearr_36887_36912 = state_36842;
(statearr_36887_36912[(5)] = ex__36178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36913 = state_36842;
state_36842 = G__36913;
continue;
} else {
return ret_value__36176__auto__;
}
break;
}
});
chord$client$state_machine__36175__auto__ = function(state_36842){
switch(arguments.length){
case 0:
return chord$client$state_machine__36175__auto____0.call(this);
case 1:
return chord$client$state_machine__36175__auto____1.call(this,state_36842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__36175__auto____0;
chord$client$state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__36175__auto____1;
return chord$client$state_machine__36175__auto__;
})()
;})(switch__36174__auto__,error_seen_QMARK_,error_desc,c__36195__auto____$1,inst_36839,inst_36826,inst_36844,state_val_36865,c__36195__auto__,vec__36825,err_meta_channel))
})();
var state__36197__auto__ = (function (){var statearr_36888 = f__36196__auto__.call(null);
(statearr_36888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36195__auto____$1);

return statearr_36888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36197__auto__);
});
;})(error_seen_QMARK_,error_desc,c__36195__auto____$1,inst_36839,inst_36826,inst_36844,state_val_36865,c__36195__auto__,vec__36825,err_meta_channel))
})();
var inst_36846 = cljs.core.async.impl.dispatch.run.call(null,inst_36845);
var inst_36848 = cljs.core.async.chan.call(null);
var inst_36849 = cljs.core.async.close_BANG_.call(null,inst_36848);
var inst_36850 = chord.channels.bidi_ch.call(null,inst_36844,inst_36848);
var state_36864__$1 = (function (){var statearr_36889 = state_36864;
(statearr_36889[(12)] = inst_36849);

(statearr_36889[(13)] = inst_36846);

return statearr_36889;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36864__$1,(11),err_meta_channel,inst_36850);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36195__auto__,vec__36825,err_meta_channel))
;
return ((function (switch__36174__auto__,c__36195__auto__,vec__36825,err_meta_channel){
return (function() {
var chord$client$state_machine__36175__auto__ = null;
var chord$client$state_machine__36175__auto____0 = (function (){
var statearr_36893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36893[(0)] = chord$client$state_machine__36175__auto__);

(statearr_36893[(1)] = (1));

return statearr_36893;
});
var chord$client$state_machine__36175__auto____1 = (function (state_36864){
while(true){
var ret_value__36176__auto__ = (function (){try{while(true){
var result__36177__auto__ = switch__36174__auto__.call(null,state_36864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36177__auto__;
}
break;
}
}catch (e36894){if((e36894 instanceof Object)){
var ex__36178__auto__ = e36894;
var statearr_36895_36914 = state_36864;
(statearr_36895_36914[(5)] = ex__36178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36915 = state_36864;
state_36864 = G__36915;
continue;
} else {
return ret_value__36176__auto__;
}
break;
}
});
chord$client$state_machine__36175__auto__ = function(state_36864){
switch(arguments.length){
case 0:
return chord$client$state_machine__36175__auto____0.call(this);
case 1:
return chord$client$state_machine__36175__auto____1.call(this,state_36864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__36175__auto____0;
chord$client$state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__36175__auto____1;
return chord$client$state_machine__36175__auto__;
})()
;})(switch__36174__auto__,c__36195__auto__,vec__36825,err_meta_channel))
})();
var state__36197__auto__ = (function (){var statearr_36896 = f__36196__auto__.call(null);
(statearr_36896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36195__auto__);

return statearr_36896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36197__auto__);
});})(c__36195__auto__,vec__36825,err_meta_channel))
);

return c__36195__auto__;
});})(vec__36825,err_meta_channel))
;
});

chord.client.on_close.cljs$lang$maxFixedArity = (3);

chord.client.on_close.cljs$lang$applyTo = (function (seq36820){
var G__36821 = cljs.core.first.call(null,seq36820);
var seq36820__$1 = cljs.core.next.call(null,seq36820);
var G__36822 = cljs.core.first.call(null,seq36820__$1);
var seq36820__$2 = cljs.core.next.call(null,seq36820__$1);
var G__36823 = cljs.core.first.call(null,seq36820__$2);
var seq36820__$3 = cljs.core.next.call(null,seq36820__$2);
return chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic(G__36821,G__36822,G__36823,seq36820__$3);
});
chord.client.make_open_ch = (function chord$client$make_open_ch(ws,read_ch,write_ch,v){
var ch = cljs.core.async.chan.call(null);
chord.client.on_close.call(null,ws,read_ch,write_ch,ch);

ws.onopen = ((function (ch){
return (function (){
var c__36195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36195__auto__,ch){
return (function (){
var f__36196__auto__ = (function (){var switch__36174__auto__ = ((function (c__36195__auto__,ch){
return (function (state_36934){
var state_val_36935 = (state_36934[(1)]);
if((state_val_36935 === (1))){
var state_36934__$1 = state_36934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36934__$1,(2),ch,v);
} else {
if((state_val_36935 === (2))){
var inst_36931 = (state_36934[(2)]);
var inst_36932 = cljs.core.async.close_BANG_.call(null,ch);
var state_36934__$1 = (function (){var statearr_36936 = state_36934;
(statearr_36936[(7)] = inst_36931);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36934__$1,inst_36932);
} else {
return null;
}
}
});})(c__36195__auto__,ch))
;
return ((function (switch__36174__auto__,c__36195__auto__,ch){
return (function() {
var chord$client$make_open_ch_$_state_machine__36175__auto__ = null;
var chord$client$make_open_ch_$_state_machine__36175__auto____0 = (function (){
var statearr_36940 = [null,null,null,null,null,null,null,null];
(statearr_36940[(0)] = chord$client$make_open_ch_$_state_machine__36175__auto__);

(statearr_36940[(1)] = (1));

return statearr_36940;
});
var chord$client$make_open_ch_$_state_machine__36175__auto____1 = (function (state_36934){
while(true){
var ret_value__36176__auto__ = (function (){try{while(true){
var result__36177__auto__ = switch__36174__auto__.call(null,state_36934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36177__auto__;
}
break;
}
}catch (e36941){if((e36941 instanceof Object)){
var ex__36178__auto__ = e36941;
var statearr_36942_36944 = state_36934;
(statearr_36942_36944[(5)] = ex__36178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36945 = state_36934;
state_36934 = G__36945;
continue;
} else {
return ret_value__36176__auto__;
}
break;
}
});
chord$client$make_open_ch_$_state_machine__36175__auto__ = function(state_36934){
switch(arguments.length){
case 0:
return chord$client$make_open_ch_$_state_machine__36175__auto____0.call(this);
case 1:
return chord$client$make_open_ch_$_state_machine__36175__auto____1.call(this,state_36934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$make_open_ch_$_state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$make_open_ch_$_state_machine__36175__auto____0;
chord$client$make_open_ch_$_state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$make_open_ch_$_state_machine__36175__auto____1;
return chord$client$make_open_ch_$_state_machine__36175__auto__;
})()
;})(switch__36174__auto__,c__36195__auto__,ch))
})();
var state__36197__auto__ = (function (){var statearr_36943 = f__36196__auto__.call(null);
(statearr_36943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36195__auto__);

return statearr_36943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36197__auto__);
});})(c__36195__auto__,ch))
);

return c__36195__auto__;
});})(ch))
;

return ch;
});
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 * ws-url           - (required) link to websocket service
 * opts             - (optional) map to configure reading/writing channels
 * :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 * :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 * :format        - (optional) data format to use on the channel, (at the moment)
 * either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 * (:require [cljs.core.async :as a])
 * 
 * 
 * (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 * (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 * (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 * :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(){
var args__35025__auto__ = [];
var len__35018__auto___37052 = arguments.length;
var i__35019__auto___37053 = (0);
while(true){
if((i__35019__auto___37053 < len__35018__auto___37052)){
args__35025__auto__.push((arguments[i__35019__auto___37053]));

var G__37054 = (i__35019__auto___37053 + (1));
i__35019__auto___37053 = G__37054;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((1) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35026__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__36950){
var vec__36951 = p__36950;
var map__36952 = cljs.core.nth.call(null,vec__36951,(0),null);
var map__36952__$1 = ((((!((map__36952 == null)))?((((map__36952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36952):map__36952);
var opts = map__36952__$1;
var read_ch = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__36954 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__33979__auto__ = read_ch;
if(cljs.core.truth_(or__33979__auto__)){
return or__33979__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__33979__auto__ = write_ch;
if(cljs.core.truth_(or__33979__auto__)){
return or__33979__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__36954__$1 = ((((!((map__36954 == null)))?((((map__36954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36954):map__36954);
var read_ch__$1 = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__36954__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format){
return (function (p1__36946_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__36946_SHARP_);
});})(web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format){
return (function (p1__36947_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__36947_SHARP_);
});})(web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__36195__auto___37055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36195__auto___37055,ws_chan,initial_ch,web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format){
return (function (){
var f__36196__auto__ = (function (){var switch__36174__auto__ = ((function (c__36195__auto___37055,ws_chan,initial_ch,web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format){
return (function (state_37015){
var state_val_37016 = (state_37015[(1)]);
if((state_val_37016 === (7))){
var inst_37011 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37017_37056 = state_37015__$1;
(statearr_37017_37056[(2)] = inst_37011);

(statearr_37017_37056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (20))){
var state_37015__$1 = state_37015;
var statearr_37018_37057 = state_37015__$1;
(statearr_37018_37057[(2)] = null);

(statearr_37018_37057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (1))){
var inst_36956 = false;
var state_37015__$1 = (function (){var statearr_37019 = state_37015;
(statearr_37019[(7)] = inst_36956);

return statearr_37019;
})();
var statearr_37020_37058 = state_37015__$1;
(statearr_37020_37058[(2)] = null);

(statearr_37020_37058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (4))){
var inst_36969 = (state_37015[(8)]);
var inst_36967 = (state_37015[(9)]);
var inst_36967__$1 = (state_37015[(2)]);
var inst_36968 = cljs.core.nth.call(null,inst_36967__$1,(0),null);
var inst_36969__$1 = cljs.core.nth.call(null,inst_36967__$1,(1),null);
var inst_36970 = cljs.core._EQ_.call(null,inst_36969__$1,open_ch);
var state_37015__$1 = (function (){var statearr_37021 = state_37015;
(statearr_37021[(8)] = inst_36969__$1);

(statearr_37021[(9)] = inst_36967__$1);

(statearr_37021[(10)] = inst_36968);

return statearr_37021;
})();
if(inst_36970){
var statearr_37022_37059 = state_37015__$1;
(statearr_37022_37059[(1)] = (5));

} else {
var statearr_37023_37060 = state_37015__$1;
(statearr_37023_37060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (15))){
var inst_36996 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37024_37061 = state_37015__$1;
(statearr_37024_37061[(2)] = inst_36996);

(statearr_37024_37061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (21))){
var inst_37007 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37025_37062 = state_37015__$1;
(statearr_37025_37062[(2)] = inst_37007);

(statearr_37025_37062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (13))){
var state_37015__$1 = state_37015;
var statearr_37026_37063 = state_37015__$1;
(statearr_37026_37063[(2)] = null);

(statearr_37026_37063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (6))){
var inst_36969 = (state_37015[(8)]);
var inst_36982 = cljs.core._EQ_.call(null,inst_36969,close_ch);
var state_37015__$1 = state_37015;
if(inst_36982){
var statearr_37027_37064 = state_37015__$1;
(statearr_37027_37064[(1)] = (9));

} else {
var statearr_37028_37065 = state_37015__$1;
(statearr_37028_37065[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (17))){
var state_37015__$1 = state_37015;
var statearr_37029_37066 = state_37015__$1;
(statearr_37029_37066[(2)] = initial_ch);

(statearr_37029_37066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (3))){
var inst_37013 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37015__$1,inst_37013);
} else {
if((state_val_37016 === (12))){
var inst_36956 = (state_37015[(7)]);
var state_37015__$1 = state_37015;
if(cljs.core.truth_(inst_36956)){
var statearr_37030_37067 = state_37015__$1;
(statearr_37030_37067[(1)] = (16));

} else {
var statearr_37031_37068 = state_37015__$1;
(statearr_37031_37068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (2))){
var inst_36963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36964 = [open_ch,close_ch];
var inst_36965 = (new cljs.core.PersistentVector(null,2,(5),inst_36963,inst_36964,null));
var state_37015__$1 = state_37015;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37015__$1,(4),inst_36965);
} else {
if((state_val_37016 === (19))){
var inst_36968 = (state_37015[(10)]);
var state_37015__$1 = state_37015;
var statearr_37032_37069 = state_37015__$1;
(statearr_37032_37069[(2)] = inst_36968);

(statearr_37032_37069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (11))){
var inst_37009 = (state_37015[(2)]);
var state_37015__$1 = state_37015;
var statearr_37033_37070 = state_37015__$1;
(statearr_37033_37070[(2)] = inst_37009);

(statearr_37033_37070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (9))){
var inst_36967 = (state_37015[(9)]);
var inst_36986 = (state_37015[(11)]);
var inst_36985 = cljs.core.nth.call(null,inst_36967,(0),null);
var inst_36986__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_36985);
var state_37015__$1 = (function (){var statearr_37034 = state_37015;
(statearr_37034[(11)] = inst_36986__$1);

return statearr_37034;
})();
if(cljs.core.truth_(inst_36986__$1)){
var statearr_37035_37071 = state_37015__$1;
(statearr_37035_37071[(1)] = (12));

} else {
var statearr_37036_37072 = state_37015__$1;
(statearr_37036_37072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (5))){
var inst_36967 = (state_37015[(9)]);
var inst_36973 = cljs.core.nth.call(null,inst_36967,(0),null);
var inst_36974 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_36975 = [ws_chan];
var inst_36976 = cljs.core.PersistentHashMap.fromArrays(inst_36974,inst_36975);
var state_37015__$1 = (function (){var statearr_37037 = state_37015;
(statearr_37037[(12)] = inst_36973);

return statearr_37037;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37015__$1,(8),initial_ch,inst_36976);
} else {
if((state_val_37016 === (14))){
var inst_36999 = (state_37015[(2)]);
var inst_37000 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_37001 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_37015__$1 = (function (){var statearr_37038 = state_37015;
(statearr_37038[(13)] = inst_37000);

(statearr_37038[(14)] = inst_36999);

return statearr_37038;
})();
var statearr_37039_37073 = state_37015__$1;
(statearr_37039_37073[(2)] = inst_37001);

(statearr_37039_37073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (16))){
var state_37015__$1 = state_37015;
var statearr_37040_37074 = state_37015__$1;
(statearr_37040_37074[(2)] = read_ch__$1);

(statearr_37040_37074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (10))){
var inst_36969 = (state_37015[(8)]);
var inst_37003 = cljs.core._EQ_.call(null,inst_36969,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_37015__$1 = state_37015;
if(inst_37003){
var statearr_37041_37075 = state_37015__$1;
(statearr_37041_37075[(1)] = (19));

} else {
var statearr_37042_37076 = state_37015__$1;
(statearr_37042_37076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37016 === (18))){
var inst_36986 = (state_37015[(11)]);
var inst_36991 = (state_37015[(2)]);
var inst_36992 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_36993 = [inst_36986];
var inst_36994 = cljs.core.PersistentHashMap.fromArrays(inst_36992,inst_36993);
var state_37015__$1 = state_37015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37015__$1,(15),inst_36991,inst_36994);
} else {
if((state_val_37016 === (8))){
var inst_36978 = (state_37015[(2)]);
var inst_36979 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_36956 = true;
var state_37015__$1 = (function (){var statearr_37043 = state_37015;
(statearr_37043[(15)] = inst_36978);

(statearr_37043[(7)] = inst_36956);

(statearr_37043[(16)] = inst_36979);

return statearr_37043;
})();
var statearr_37044_37077 = state_37015__$1;
(statearr_37044_37077[(2)] = null);

(statearr_37044_37077[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36195__auto___37055,ws_chan,initial_ch,web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__36174__auto__,c__36195__auto___37055,ws_chan,initial_ch,web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__36175__auto__ = null;
var chord$client$state_machine__36175__auto____0 = (function (){
var statearr_37048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37048[(0)] = chord$client$state_machine__36175__auto__);

(statearr_37048[(1)] = (1));

return statearr_37048;
});
var chord$client$state_machine__36175__auto____1 = (function (state_37015){
while(true){
var ret_value__36176__auto__ = (function (){try{while(true){
var result__36177__auto__ = switch__36174__auto__.call(null,state_37015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36177__auto__;
}
break;
}
}catch (e37049){if((e37049 instanceof Object)){
var ex__36178__auto__ = e37049;
var statearr_37050_37078 = state_37015;
(statearr_37050_37078[(5)] = ex__36178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37079 = state_37015;
state_37015 = G__37079;
continue;
} else {
return ret_value__36176__auto__;
}
break;
}
});
chord$client$state_machine__36175__auto__ = function(state_37015){
switch(arguments.length){
case 0:
return chord$client$state_machine__36175__auto____0.call(this);
case 1:
return chord$client$state_machine__36175__auto____1.call(this,state_37015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__36175__auto____0;
chord$client$state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__36175__auto____1;
return chord$client$state_machine__36175__auto__;
})()
;})(switch__36174__auto__,c__36195__auto___37055,ws_chan,initial_ch,web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format))
})();
var state__36197__auto__ = (function (){var statearr_37051 = f__36196__auto__.call(null);
(statearr_37051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36195__auto___37055);

return statearr_37051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36197__auto__);
});})(c__36195__auto___37055,ws_chan,initial_ch,web_socket,map__36954,map__36954__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__36951,map__36952,map__36952__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq36948){
var G__36949 = cljs.core.first.call(null,seq36948);
var seq36948__$1 = cljs.core.next.call(null,seq36948);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__36949,seq36948__$1);
});

//# sourceMappingURL=client.js.map