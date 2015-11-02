// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24325_24339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24326_24340 = null;
var count__24327_24341 = (0);
var i__24328_24342 = (0);
while(true){
if((i__24328_24342 < count__24327_24341)){
var f_24343 = cljs.core._nth.call(null,chunk__24326_24340,i__24328_24342);
cljs.core.println.call(null,"  ",f_24343);

var G__24344 = seq__24325_24339;
var G__24345 = chunk__24326_24340;
var G__24346 = count__24327_24341;
var G__24347 = (i__24328_24342 + (1));
seq__24325_24339 = G__24344;
chunk__24326_24340 = G__24345;
count__24327_24341 = G__24346;
i__24328_24342 = G__24347;
continue;
} else {
var temp__4425__auto___24348 = cljs.core.seq.call(null,seq__24325_24339);
if(temp__4425__auto___24348){
var seq__24325_24349__$1 = temp__4425__auto___24348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24325_24349__$1)){
var c__23957__auto___24350 = cljs.core.chunk_first.call(null,seq__24325_24349__$1);
var G__24351 = cljs.core.chunk_rest.call(null,seq__24325_24349__$1);
var G__24352 = c__23957__auto___24350;
var G__24353 = cljs.core.count.call(null,c__23957__auto___24350);
var G__24354 = (0);
seq__24325_24339 = G__24351;
chunk__24326_24340 = G__24352;
count__24327_24341 = G__24353;
i__24328_24342 = G__24354;
continue;
} else {
var f_24355 = cljs.core.first.call(null,seq__24325_24349__$1);
cljs.core.println.call(null,"  ",f_24355);

var G__24356 = cljs.core.next.call(null,seq__24325_24349__$1);
var G__24357 = null;
var G__24358 = (0);
var G__24359 = (0);
seq__24325_24339 = G__24356;
chunk__24326_24340 = G__24357;
count__24327_24341 = G__24358;
i__24328_24342 = G__24359;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24360 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22847__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22847__auto__)){
return or__22847__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24360);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24360)))?cljs.core.second.call(null,arglists_24360):arglists_24360));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24329 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24330 = null;
var count__24331 = (0);
var i__24332 = (0);
while(true){
if((i__24332 < count__24331)){
var vec__24333 = cljs.core._nth.call(null,chunk__24330,i__24332);
var name = cljs.core.nth.call(null,vec__24333,(0),null);
var map__24334 = cljs.core.nth.call(null,vec__24333,(1),null);
var map__24334__$1 = ((((!((map__24334 == null)))?((((map__24334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24334):map__24334);
var doc = cljs.core.get.call(null,map__24334__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24334__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24361 = seq__24329;
var G__24362 = chunk__24330;
var G__24363 = count__24331;
var G__24364 = (i__24332 + (1));
seq__24329 = G__24361;
chunk__24330 = G__24362;
count__24331 = G__24363;
i__24332 = G__24364;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24329);
if(temp__4425__auto__){
var seq__24329__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24329__$1)){
var c__23957__auto__ = cljs.core.chunk_first.call(null,seq__24329__$1);
var G__24365 = cljs.core.chunk_rest.call(null,seq__24329__$1);
var G__24366 = c__23957__auto__;
var G__24367 = cljs.core.count.call(null,c__23957__auto__);
var G__24368 = (0);
seq__24329 = G__24365;
chunk__24330 = G__24366;
count__24331 = G__24367;
i__24332 = G__24368;
continue;
} else {
var vec__24336 = cljs.core.first.call(null,seq__24329__$1);
var name = cljs.core.nth.call(null,vec__24336,(0),null);
var map__24337 = cljs.core.nth.call(null,vec__24336,(1),null);
var map__24337__$1 = ((((!((map__24337 == null)))?((((map__24337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24337):map__24337);
var doc = cljs.core.get.call(null,map__24337__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24337__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24369 = cljs.core.next.call(null,seq__24329__$1);
var G__24370 = null;
var G__24371 = (0);
var G__24372 = (0);
seq__24329 = G__24369;
chunk__24330 = G__24370;
count__24331 = G__24371;
i__24332 = G__24372;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map