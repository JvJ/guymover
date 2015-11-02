// Compiled by ClojureScript 1.7.58 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async35502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async35502 = (function (fn_handler,f,meta35503){
this.fn_handler = fn_handler;
this.f = f;
this.meta35503 = meta35503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35504,meta35503__$1){
var self__ = this;
var _35504__$1 = this;
return (new cljs.core.async.t_cljs$core$async35502(self__.fn_handler,self__.f,meta35503__$1));
});

cljs.core.async.t_cljs$core$async35502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35504){
var self__ = this;
var _35504__$1 = this;
return self__.meta35503;
});

cljs.core.async.t_cljs$core$async35502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta35503","meta35503",-1873670952,null)], null);
});

cljs.core.async.t_cljs$core$async35502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35502";

cljs.core.async.t_cljs$core$async35502.cljs$lang$ctorPrWriter = (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async35502");
});

cljs.core.async.__GT_t_cljs$core$async35502 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async35502(fn_handler__$1,f__$1,meta35503){
return (new cljs.core.async.t_cljs$core$async35502(fn_handler__$1,f__$1,meta35503));
});

}

return (new cljs.core.async.t_cljs$core$async35502(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args35507 = [];
var len__31995__auto___35510 = arguments.length;
var i__31996__auto___35511 = (0);
while(true){
if((i__31996__auto___35511 < len__31995__auto___35510)){
args35507.push((arguments[i__31996__auto___35511]));

var G__35512 = (i__31996__auto___35511 + (1));
i__31996__auto___35511 = G__35512;
continue;
} else {
}
break;
}

var G__35509 = args35507.length;
switch (G__35509) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35507.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args35514 = [];
var len__31995__auto___35517 = arguments.length;
var i__31996__auto___35518 = (0);
while(true){
if((i__31996__auto___35518 < len__31995__auto___35517)){
args35514.push((arguments[i__31996__auto___35518]));

var G__35519 = (i__31996__auto___35518 + (1));
i__31996__auto___35518 = G__35519;
continue;
} else {
}
break;
}

var G__35516 = args35514.length;
switch (G__35516) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35514.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35521 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35521);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35521,ret){
return (function (){
return fn1.call(null,val_35521);
});})(val_35521,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args35522 = [];
var len__31995__auto___35525 = arguments.length;
var i__31996__auto___35526 = (0);
while(true){
if((i__31996__auto___35526 < len__31995__auto___35525)){
args35522.push((arguments[i__31996__auto___35526]));

var G__35527 = (i__31996__auto___35526 + (1));
i__31996__auto___35526 = G__35527;
continue;
} else {
}
break;
}

var G__35524 = args35522.length;
switch (G__35524) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35522.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31840__auto___35529 = n;
var x_35530 = (0);
while(true){
if((x_35530 < n__31840__auto___35529)){
(a[x_35530] = (0));

var G__35531 = (x_35530 + (1));
x_35530 = G__35531;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35532 = (i + (1));
i = G__35532;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35536 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async35536 = (function (alt_flag,flag,meta35537){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35537 = meta35537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35538,meta35537__$1){
var self__ = this;
var _35538__$1 = this;
return (new cljs.core.async.t_cljs$core$async35536(self__.alt_flag,self__.flag,meta35537__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35538){
var self__ = this;
var _35538__$1 = this;
return self__.meta35537;
});})(flag))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35536.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35536.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35537","meta35537",673485645,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35536.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35536";

cljs.core.async.t_cljs$core$async35536.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async35536");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35536 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35536(alt_flag__$1,flag__$1,meta35537){
return (new cljs.core.async.t_cljs$core$async35536(alt_flag__$1,flag__$1,meta35537));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35536(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35542 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async35542 = (function (alt_handler,flag,cb,meta35543){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35543 = meta35543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35544,meta35543__$1){
var self__ = this;
var _35544__$1 = this;
return (new cljs.core.async.t_cljs$core$async35542(self__.alt_handler,self__.flag,self__.cb,meta35543__$1));
});

cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35544){
var self__ = this;
var _35544__$1 = this;
return self__.meta35543;
});

cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35543","meta35543",175951904,null)], null);
});

cljs.core.async.t_cljs$core$async35542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35542";

cljs.core.async.t_cljs$core$async35542.cljs$lang$ctorPrWriter = (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async35542");
});

cljs.core.async.__GT_t_cljs$core$async35542 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35542(alt_handler__$1,flag__$1,cb__$1,meta35543){
return (new cljs.core.async.t_cljs$core$async35542(alt_handler__$1,flag__$1,cb__$1,meta35543));
});

}

return (new cljs.core.async.t_cljs$core$async35542(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35545_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35545_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35546_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35546_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30956__auto__ = wport;
if(cljs.core.truth_(or__30956__auto__)){
return or__30956__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35547 = (i + (1));
i = G__35547;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30956__auto__ = ret;
if(cljs.core.truth_(or__30956__auto__)){
return or__30956__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__30944__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30944__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30944__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__32002__auto__ = [];
var len__31995__auto___35553 = arguments.length;
var i__31996__auto___35554 = (0);
while(true){
if((i__31996__auto___35554 < len__31995__auto___35553)){
args__32002__auto__.push((arguments[i__31996__auto___35554]));

var G__35555 = (i__31996__auto___35554 + (1));
i__31996__auto___35554 = G__35555;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((1) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__32003__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35550){
var map__35551 = p__35550;
var map__35551__$1 = ((((!((map__35551 == null)))?((((map__35551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35551):map__35551);
var opts = map__35551__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35548){
var G__35549 = cljs.core.first.call(null,seq35548);
var seq35548__$1 = cljs.core.next.call(null,seq35548);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35549,seq35548__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args35556 = [];
var len__31995__auto___35606 = arguments.length;
var i__31996__auto___35607 = (0);
while(true){
if((i__31996__auto___35607 < len__31995__auto___35606)){
args35556.push((arguments[i__31996__auto___35607]));

var G__35608 = (i__31996__auto___35607 + (1));
i__31996__auto___35607 = G__35608;
continue;
} else {
}
break;
}

var G__35558 = args35556.length;
switch (G__35558) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35556.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33038__auto___35610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___35610){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___35610){
return (function (state_35582){
var state_val_35583 = (state_35582[(1)]);
if((state_val_35583 === (7))){
var inst_35578 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35584_35611 = state_35582__$1;
(statearr_35584_35611[(2)] = inst_35578);

(statearr_35584_35611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (1))){
var state_35582__$1 = state_35582;
var statearr_35585_35612 = state_35582__$1;
(statearr_35585_35612[(2)] = null);

(statearr_35585_35612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (4))){
var inst_35561 = (state_35582[(7)]);
var inst_35561__$1 = (state_35582[(2)]);
var inst_35562 = (inst_35561__$1 == null);
var state_35582__$1 = (function (){var statearr_35586 = state_35582;
(statearr_35586[(7)] = inst_35561__$1);

return statearr_35586;
})();
if(cljs.core.truth_(inst_35562)){
var statearr_35587_35613 = state_35582__$1;
(statearr_35587_35613[(1)] = (5));

} else {
var statearr_35588_35614 = state_35582__$1;
(statearr_35588_35614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (13))){
var state_35582__$1 = state_35582;
var statearr_35589_35615 = state_35582__$1;
(statearr_35589_35615[(2)] = null);

(statearr_35589_35615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (6))){
var inst_35561 = (state_35582[(7)]);
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35582__$1,(11),to,inst_35561);
} else {
if((state_val_35583 === (3))){
var inst_35580 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35582__$1,inst_35580);
} else {
if((state_val_35583 === (12))){
var state_35582__$1 = state_35582;
var statearr_35590_35616 = state_35582__$1;
(statearr_35590_35616[(2)] = null);

(statearr_35590_35616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (2))){
var state_35582__$1 = state_35582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35582__$1,(4),from);
} else {
if((state_val_35583 === (11))){
var inst_35571 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
if(cljs.core.truth_(inst_35571)){
var statearr_35591_35617 = state_35582__$1;
(statearr_35591_35617[(1)] = (12));

} else {
var statearr_35592_35618 = state_35582__$1;
(statearr_35592_35618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (9))){
var state_35582__$1 = state_35582;
var statearr_35593_35619 = state_35582__$1;
(statearr_35593_35619[(2)] = null);

(statearr_35593_35619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (5))){
var state_35582__$1 = state_35582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35594_35620 = state_35582__$1;
(statearr_35594_35620[(1)] = (8));

} else {
var statearr_35595_35621 = state_35582__$1;
(statearr_35595_35621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (14))){
var inst_35576 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35596_35622 = state_35582__$1;
(statearr_35596_35622[(2)] = inst_35576);

(statearr_35596_35622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (10))){
var inst_35568 = (state_35582[(2)]);
var state_35582__$1 = state_35582;
var statearr_35597_35623 = state_35582__$1;
(statearr_35597_35623[(2)] = inst_35568);

(statearr_35597_35623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35583 === (8))){
var inst_35565 = cljs.core.async.close_BANG_.call(null,to);
var state_35582__$1 = state_35582;
var statearr_35598_35624 = state_35582__$1;
(statearr_35598_35624[(2)] = inst_35565);

(statearr_35598_35624[(1)] = (10));


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
});})(c__33038__auto___35610))
;
return ((function (switch__32973__auto__,c__33038__auto___35610){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_35602 = [null,null,null,null,null,null,null,null];
(statearr_35602[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_35602[(1)] = (1));

return statearr_35602;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_35582){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_35582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35603){if((e35603 instanceof Object)){
var ex__32977__auto__ = e35603;
var statearr_35604_35625 = state_35582;
(statearr_35604_35625[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35626 = state_35582;
state_35582 = G__35626;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_35582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_35582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___35610))
})();
var state__33040__auto__ = (function (){var statearr_35605 = f__33039__auto__.call(null);
(statearr_35605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___35610);

return statearr_35605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___35610))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35810){
var vec__35811 = p__35810;
var v = cljs.core.nth.call(null,vec__35811,(0),null);
var p = cljs.core.nth.call(null,vec__35811,(1),null);
var job = vec__35811;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33038__auto___35993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___35993,res,vec__35811,v,p,job,jobs,results){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___35993,res,vec__35811,v,p,job,jobs,results){
return (function (state_35816){
var state_val_35817 = (state_35816[(1)]);
if((state_val_35817 === (1))){
var state_35816__$1 = state_35816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35816__$1,(2),res,v);
} else {
if((state_val_35817 === (2))){
var inst_35813 = (state_35816[(2)]);
var inst_35814 = cljs.core.async.close_BANG_.call(null,res);
var state_35816__$1 = (function (){var statearr_35818 = state_35816;
(statearr_35818[(7)] = inst_35813);

return statearr_35818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35816__$1,inst_35814);
} else {
return null;
}
}
});})(c__33038__auto___35993,res,vec__35811,v,p,job,jobs,results))
;
return ((function (switch__32973__auto__,c__33038__auto___35993,res,vec__35811,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_35822 = [null,null,null,null,null,null,null,null];
(statearr_35822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_35822[(1)] = (1));

return statearr_35822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_35816){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_35816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35823){if((e35823 instanceof Object)){
var ex__32977__auto__ = e35823;
var statearr_35824_35994 = state_35816;
(statearr_35824_35994[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35995 = state_35816;
state_35816 = G__35995;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_35816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_35816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___35993,res,vec__35811,v,p,job,jobs,results))
})();
var state__33040__auto__ = (function (){var statearr_35825 = f__33039__auto__.call(null);
(statearr_35825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___35993);

return statearr_35825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___35993,res,vec__35811,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35826){
var vec__35827 = p__35826;
var v = cljs.core.nth.call(null,vec__35827,(0),null);
var p = cljs.core.nth.call(null,vec__35827,(1),null);
var job = vec__35827;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31840__auto___35996 = n;
var __35997 = (0);
while(true){
if((__35997 < n__31840__auto___35996)){
var G__35828_35998 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__35828_35998) {
case "compute":
var c__33038__auto___36000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35997,c__33038__auto___36000,G__35828_35998,n__31840__auto___35996,jobs,results,process,async){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (__35997,c__33038__auto___36000,G__35828_35998,n__31840__auto___35996,jobs,results,process,async){
return (function (state_35841){
var state_val_35842 = (state_35841[(1)]);
if((state_val_35842 === (1))){
var state_35841__$1 = state_35841;
var statearr_35843_36001 = state_35841__$1;
(statearr_35843_36001[(2)] = null);

(statearr_35843_36001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (2))){
var state_35841__$1 = state_35841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35841__$1,(4),jobs);
} else {
if((state_val_35842 === (3))){
var inst_35839 = (state_35841[(2)]);
var state_35841__$1 = state_35841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35841__$1,inst_35839);
} else {
if((state_val_35842 === (4))){
var inst_35831 = (state_35841[(2)]);
var inst_35832 = process.call(null,inst_35831);
var state_35841__$1 = state_35841;
if(cljs.core.truth_(inst_35832)){
var statearr_35844_36002 = state_35841__$1;
(statearr_35844_36002[(1)] = (5));

} else {
var statearr_35845_36003 = state_35841__$1;
(statearr_35845_36003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (5))){
var state_35841__$1 = state_35841;
var statearr_35846_36004 = state_35841__$1;
(statearr_35846_36004[(2)] = null);

(statearr_35846_36004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (6))){
var state_35841__$1 = state_35841;
var statearr_35847_36005 = state_35841__$1;
(statearr_35847_36005[(2)] = null);

(statearr_35847_36005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35842 === (7))){
var inst_35837 = (state_35841[(2)]);
var state_35841__$1 = state_35841;
var statearr_35848_36006 = state_35841__$1;
(statearr_35848_36006[(2)] = inst_35837);

(statearr_35848_36006[(1)] = (3));


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
});})(__35997,c__33038__auto___36000,G__35828_35998,n__31840__auto___35996,jobs,results,process,async))
;
return ((function (__35997,switch__32973__auto__,c__33038__auto___36000,G__35828_35998,n__31840__auto___35996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_35852 = [null,null,null,null,null,null,null];
(statearr_35852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_35852[(1)] = (1));

return statearr_35852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_35841){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_35841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35853){if((e35853 instanceof Object)){
var ex__32977__auto__ = e35853;
var statearr_35854_36007 = state_35841;
(statearr_35854_36007[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36008 = state_35841;
state_35841 = G__36008;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_35841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_35841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(__35997,switch__32973__auto__,c__33038__auto___36000,G__35828_35998,n__31840__auto___35996,jobs,results,process,async))
})();
var state__33040__auto__ = (function (){var statearr_35855 = f__33039__auto__.call(null);
(statearr_35855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___36000);

return statearr_35855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(__35997,c__33038__auto___36000,G__35828_35998,n__31840__auto___35996,jobs,results,process,async))
);


break;
case "async":
var c__33038__auto___36009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35997,c__33038__auto___36009,G__35828_35998,n__31840__auto___35996,jobs,results,process,async){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (__35997,c__33038__auto___36009,G__35828_35998,n__31840__auto___35996,jobs,results,process,async){
return (function (state_35868){
var state_val_35869 = (state_35868[(1)]);
if((state_val_35869 === (1))){
var state_35868__$1 = state_35868;
var statearr_35870_36010 = state_35868__$1;
(statearr_35870_36010[(2)] = null);

(statearr_35870_36010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (2))){
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35868__$1,(4),jobs);
} else {
if((state_val_35869 === (3))){
var inst_35866 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35868__$1,inst_35866);
} else {
if((state_val_35869 === (4))){
var inst_35858 = (state_35868[(2)]);
var inst_35859 = async.call(null,inst_35858);
var state_35868__$1 = state_35868;
if(cljs.core.truth_(inst_35859)){
var statearr_35871_36011 = state_35868__$1;
(statearr_35871_36011[(1)] = (5));

} else {
var statearr_35872_36012 = state_35868__$1;
(statearr_35872_36012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (5))){
var state_35868__$1 = state_35868;
var statearr_35873_36013 = state_35868__$1;
(statearr_35873_36013[(2)] = null);

(statearr_35873_36013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (6))){
var state_35868__$1 = state_35868;
var statearr_35874_36014 = state_35868__$1;
(statearr_35874_36014[(2)] = null);

(statearr_35874_36014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35869 === (7))){
var inst_35864 = (state_35868[(2)]);
var state_35868__$1 = state_35868;
var statearr_35875_36015 = state_35868__$1;
(statearr_35875_36015[(2)] = inst_35864);

(statearr_35875_36015[(1)] = (3));


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
});})(__35997,c__33038__auto___36009,G__35828_35998,n__31840__auto___35996,jobs,results,process,async))
;
return ((function (__35997,switch__32973__auto__,c__33038__auto___36009,G__35828_35998,n__31840__auto___35996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_35879 = [null,null,null,null,null,null,null];
(statearr_35879[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_35879[(1)] = (1));

return statearr_35879;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_35868){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_35868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35880){if((e35880 instanceof Object)){
var ex__32977__auto__ = e35880;
var statearr_35881_36016 = state_35868;
(statearr_35881_36016[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36017 = state_35868;
state_35868 = G__36017;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_35868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_35868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(__35997,switch__32973__auto__,c__33038__auto___36009,G__35828_35998,n__31840__auto___35996,jobs,results,process,async))
})();
var state__33040__auto__ = (function (){var statearr_35882 = f__33039__auto__.call(null);
(statearr_35882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___36009);

return statearr_35882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(__35997,c__33038__auto___36009,G__35828_35998,n__31840__auto___35996,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36018 = (__35997 + (1));
__35997 = G__36018;
continue;
} else {
}
break;
}

var c__33038__auto___36019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___36019,jobs,results,process,async){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___36019,jobs,results,process,async){
return (function (state_35904){
var state_val_35905 = (state_35904[(1)]);
if((state_val_35905 === (1))){
var state_35904__$1 = state_35904;
var statearr_35906_36020 = state_35904__$1;
(statearr_35906_36020[(2)] = null);

(statearr_35906_36020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (2))){
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35904__$1,(4),from);
} else {
if((state_val_35905 === (3))){
var inst_35902 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35904__$1,inst_35902);
} else {
if((state_val_35905 === (4))){
var inst_35885 = (state_35904[(7)]);
var inst_35885__$1 = (state_35904[(2)]);
var inst_35886 = (inst_35885__$1 == null);
var state_35904__$1 = (function (){var statearr_35907 = state_35904;
(statearr_35907[(7)] = inst_35885__$1);

return statearr_35907;
})();
if(cljs.core.truth_(inst_35886)){
var statearr_35908_36021 = state_35904__$1;
(statearr_35908_36021[(1)] = (5));

} else {
var statearr_35909_36022 = state_35904__$1;
(statearr_35909_36022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (5))){
var inst_35888 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35904__$1 = state_35904;
var statearr_35910_36023 = state_35904__$1;
(statearr_35910_36023[(2)] = inst_35888);

(statearr_35910_36023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (6))){
var inst_35890 = (state_35904[(8)]);
var inst_35885 = (state_35904[(7)]);
var inst_35890__$1 = cljs.core.async.chan.call(null,(1));
var inst_35891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35892 = [inst_35885,inst_35890__$1];
var inst_35893 = (new cljs.core.PersistentVector(null,2,(5),inst_35891,inst_35892,null));
var state_35904__$1 = (function (){var statearr_35911 = state_35904;
(statearr_35911[(8)] = inst_35890__$1);

return statearr_35911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35904__$1,(8),jobs,inst_35893);
} else {
if((state_val_35905 === (7))){
var inst_35900 = (state_35904[(2)]);
var state_35904__$1 = state_35904;
var statearr_35912_36024 = state_35904__$1;
(statearr_35912_36024[(2)] = inst_35900);

(statearr_35912_36024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35905 === (8))){
var inst_35890 = (state_35904[(8)]);
var inst_35895 = (state_35904[(2)]);
var state_35904__$1 = (function (){var statearr_35913 = state_35904;
(statearr_35913[(9)] = inst_35895);

return statearr_35913;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35904__$1,(9),results,inst_35890);
} else {
if((state_val_35905 === (9))){
var inst_35897 = (state_35904[(2)]);
var state_35904__$1 = (function (){var statearr_35914 = state_35904;
(statearr_35914[(10)] = inst_35897);

return statearr_35914;
})();
var statearr_35915_36025 = state_35904__$1;
(statearr_35915_36025[(2)] = null);

(statearr_35915_36025[(1)] = (2));


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
});})(c__33038__auto___36019,jobs,results,process,async))
;
return ((function (switch__32973__auto__,c__33038__auto___36019,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_35919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_35919[(1)] = (1));

return statearr_35919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_35904){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_35904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35920){if((e35920 instanceof Object)){
var ex__32977__auto__ = e35920;
var statearr_35921_36026 = state_35904;
(statearr_35921_36026[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36027 = state_35904;
state_35904 = G__36027;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_35904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_35904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___36019,jobs,results,process,async))
})();
var state__33040__auto__ = (function (){var statearr_35922 = f__33039__auto__.call(null);
(statearr_35922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___36019);

return statearr_35922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___36019,jobs,results,process,async))
);


var c__33038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto__,jobs,results,process,async){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto__,jobs,results,process,async){
return (function (state_35960){
var state_val_35961 = (state_35960[(1)]);
if((state_val_35961 === (7))){
var inst_35956 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35962_36028 = state_35960__$1;
(statearr_35962_36028[(2)] = inst_35956);

(statearr_35962_36028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (20))){
var state_35960__$1 = state_35960;
var statearr_35963_36029 = state_35960__$1;
(statearr_35963_36029[(2)] = null);

(statearr_35963_36029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (1))){
var state_35960__$1 = state_35960;
var statearr_35964_36030 = state_35960__$1;
(statearr_35964_36030[(2)] = null);

(statearr_35964_36030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (4))){
var inst_35925 = (state_35960[(7)]);
var inst_35925__$1 = (state_35960[(2)]);
var inst_35926 = (inst_35925__$1 == null);
var state_35960__$1 = (function (){var statearr_35965 = state_35960;
(statearr_35965[(7)] = inst_35925__$1);

return statearr_35965;
})();
if(cljs.core.truth_(inst_35926)){
var statearr_35966_36031 = state_35960__$1;
(statearr_35966_36031[(1)] = (5));

} else {
var statearr_35967_36032 = state_35960__$1;
(statearr_35967_36032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (15))){
var inst_35938 = (state_35960[(8)]);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35960__$1,(18),to,inst_35938);
} else {
if((state_val_35961 === (21))){
var inst_35951 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35968_36033 = state_35960__$1;
(statearr_35968_36033[(2)] = inst_35951);

(statearr_35968_36033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (13))){
var inst_35953 = (state_35960[(2)]);
var state_35960__$1 = (function (){var statearr_35969 = state_35960;
(statearr_35969[(9)] = inst_35953);

return statearr_35969;
})();
var statearr_35970_36034 = state_35960__$1;
(statearr_35970_36034[(2)] = null);

(statearr_35970_36034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (6))){
var inst_35925 = (state_35960[(7)]);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35960__$1,(11),inst_35925);
} else {
if((state_val_35961 === (17))){
var inst_35946 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
if(cljs.core.truth_(inst_35946)){
var statearr_35971_36035 = state_35960__$1;
(statearr_35971_36035[(1)] = (19));

} else {
var statearr_35972_36036 = state_35960__$1;
(statearr_35972_36036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (3))){
var inst_35958 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35960__$1,inst_35958);
} else {
if((state_val_35961 === (12))){
var inst_35935 = (state_35960[(10)]);
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35960__$1,(14),inst_35935);
} else {
if((state_val_35961 === (2))){
var state_35960__$1 = state_35960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35960__$1,(4),results);
} else {
if((state_val_35961 === (19))){
var state_35960__$1 = state_35960;
var statearr_35973_36037 = state_35960__$1;
(statearr_35973_36037[(2)] = null);

(statearr_35973_36037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (11))){
var inst_35935 = (state_35960[(2)]);
var state_35960__$1 = (function (){var statearr_35974 = state_35960;
(statearr_35974[(10)] = inst_35935);

return statearr_35974;
})();
var statearr_35975_36038 = state_35960__$1;
(statearr_35975_36038[(2)] = null);

(statearr_35975_36038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (9))){
var state_35960__$1 = state_35960;
var statearr_35976_36039 = state_35960__$1;
(statearr_35976_36039[(2)] = null);

(statearr_35976_36039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (5))){
var state_35960__$1 = state_35960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35977_36040 = state_35960__$1;
(statearr_35977_36040[(1)] = (8));

} else {
var statearr_35978_36041 = state_35960__$1;
(statearr_35978_36041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (14))){
var inst_35940 = (state_35960[(11)]);
var inst_35938 = (state_35960[(8)]);
var inst_35938__$1 = (state_35960[(2)]);
var inst_35939 = (inst_35938__$1 == null);
var inst_35940__$1 = cljs.core.not.call(null,inst_35939);
var state_35960__$1 = (function (){var statearr_35979 = state_35960;
(statearr_35979[(11)] = inst_35940__$1);

(statearr_35979[(8)] = inst_35938__$1);

return statearr_35979;
})();
if(inst_35940__$1){
var statearr_35980_36042 = state_35960__$1;
(statearr_35980_36042[(1)] = (15));

} else {
var statearr_35981_36043 = state_35960__$1;
(statearr_35981_36043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (16))){
var inst_35940 = (state_35960[(11)]);
var state_35960__$1 = state_35960;
var statearr_35982_36044 = state_35960__$1;
(statearr_35982_36044[(2)] = inst_35940);

(statearr_35982_36044[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (10))){
var inst_35932 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35983_36045 = state_35960__$1;
(statearr_35983_36045[(2)] = inst_35932);

(statearr_35983_36045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (18))){
var inst_35943 = (state_35960[(2)]);
var state_35960__$1 = state_35960;
var statearr_35984_36046 = state_35960__$1;
(statearr_35984_36046[(2)] = inst_35943);

(statearr_35984_36046[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35961 === (8))){
var inst_35929 = cljs.core.async.close_BANG_.call(null,to);
var state_35960__$1 = state_35960;
var statearr_35985_36047 = state_35960__$1;
(statearr_35985_36047[(2)] = inst_35929);

(statearr_35985_36047[(1)] = (10));


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
});})(c__33038__auto__,jobs,results,process,async))
;
return ((function (switch__32973__auto__,c__33038__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_35989 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_35989[(1)] = (1));

return statearr_35989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_35960){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_35960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35990){if((e35990 instanceof Object)){
var ex__32977__auto__ = e35990;
var statearr_35991_36048 = state_35960;
(statearr_35991_36048[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36049 = state_35960;
state_35960 = G__36049;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_35960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_35960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto__,jobs,results,process,async))
})();
var state__33040__auto__ = (function (){var statearr_35992 = f__33039__auto__.call(null);
(statearr_35992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto__);

return statearr_35992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto__,jobs,results,process,async))
);

return c__33038__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args36050 = [];
var len__31995__auto___36053 = arguments.length;
var i__31996__auto___36054 = (0);
while(true){
if((i__31996__auto___36054 < len__31995__auto___36053)){
args36050.push((arguments[i__31996__auto___36054]));

var G__36055 = (i__31996__auto___36054 + (1));
i__31996__auto___36054 = G__36055;
continue;
} else {
}
break;
}

var G__36052 = args36050.length;
switch (G__36052) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36050.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args36057 = [];
var len__31995__auto___36060 = arguments.length;
var i__31996__auto___36061 = (0);
while(true){
if((i__31996__auto___36061 < len__31995__auto___36060)){
args36057.push((arguments[i__31996__auto___36061]));

var G__36062 = (i__31996__auto___36061 + (1));
i__31996__auto___36061 = G__36062;
continue;
} else {
}
break;
}

var G__36059 = args36057.length;
switch (G__36059) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36057.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args36064 = [];
var len__31995__auto___36117 = arguments.length;
var i__31996__auto___36118 = (0);
while(true){
if((i__31996__auto___36118 < len__31995__auto___36117)){
args36064.push((arguments[i__31996__auto___36118]));

var G__36119 = (i__31996__auto___36118 + (1));
i__31996__auto___36118 = G__36119;
continue;
} else {
}
break;
}

var G__36066 = args36064.length;
switch (G__36066) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36064.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33038__auto___36121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___36121,tc,fc){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___36121,tc,fc){
return (function (state_36092){
var state_val_36093 = (state_36092[(1)]);
if((state_val_36093 === (7))){
var inst_36088 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36094_36122 = state_36092__$1;
(statearr_36094_36122[(2)] = inst_36088);

(statearr_36094_36122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (1))){
var state_36092__$1 = state_36092;
var statearr_36095_36123 = state_36092__$1;
(statearr_36095_36123[(2)] = null);

(statearr_36095_36123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (4))){
var inst_36069 = (state_36092[(7)]);
var inst_36069__$1 = (state_36092[(2)]);
var inst_36070 = (inst_36069__$1 == null);
var state_36092__$1 = (function (){var statearr_36096 = state_36092;
(statearr_36096[(7)] = inst_36069__$1);

return statearr_36096;
})();
if(cljs.core.truth_(inst_36070)){
var statearr_36097_36124 = state_36092__$1;
(statearr_36097_36124[(1)] = (5));

} else {
var statearr_36098_36125 = state_36092__$1;
(statearr_36098_36125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (13))){
var state_36092__$1 = state_36092;
var statearr_36099_36126 = state_36092__$1;
(statearr_36099_36126[(2)] = null);

(statearr_36099_36126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (6))){
var inst_36069 = (state_36092[(7)]);
var inst_36075 = p.call(null,inst_36069);
var state_36092__$1 = state_36092;
if(cljs.core.truth_(inst_36075)){
var statearr_36100_36127 = state_36092__$1;
(statearr_36100_36127[(1)] = (9));

} else {
var statearr_36101_36128 = state_36092__$1;
(statearr_36101_36128[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (3))){
var inst_36090 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36092__$1,inst_36090);
} else {
if((state_val_36093 === (12))){
var state_36092__$1 = state_36092;
var statearr_36102_36129 = state_36092__$1;
(statearr_36102_36129[(2)] = null);

(statearr_36102_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (2))){
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36092__$1,(4),ch);
} else {
if((state_val_36093 === (11))){
var inst_36069 = (state_36092[(7)]);
var inst_36079 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36092__$1,(8),inst_36079,inst_36069);
} else {
if((state_val_36093 === (9))){
var state_36092__$1 = state_36092;
var statearr_36103_36130 = state_36092__$1;
(statearr_36103_36130[(2)] = tc);

(statearr_36103_36130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (5))){
var inst_36072 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36073 = cljs.core.async.close_BANG_.call(null,fc);
var state_36092__$1 = (function (){var statearr_36104 = state_36092;
(statearr_36104[(8)] = inst_36072);

return statearr_36104;
})();
var statearr_36105_36131 = state_36092__$1;
(statearr_36105_36131[(2)] = inst_36073);

(statearr_36105_36131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (14))){
var inst_36086 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
var statearr_36106_36132 = state_36092__$1;
(statearr_36106_36132[(2)] = inst_36086);

(statearr_36106_36132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (10))){
var state_36092__$1 = state_36092;
var statearr_36107_36133 = state_36092__$1;
(statearr_36107_36133[(2)] = fc);

(statearr_36107_36133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36093 === (8))){
var inst_36081 = (state_36092[(2)]);
var state_36092__$1 = state_36092;
if(cljs.core.truth_(inst_36081)){
var statearr_36108_36134 = state_36092__$1;
(statearr_36108_36134[(1)] = (12));

} else {
var statearr_36109_36135 = state_36092__$1;
(statearr_36109_36135[(1)] = (13));

}

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
});})(c__33038__auto___36121,tc,fc))
;
return ((function (switch__32973__auto__,c__33038__auto___36121,tc,fc){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_36113 = [null,null,null,null,null,null,null,null,null];
(statearr_36113[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_36113[(1)] = (1));

return statearr_36113;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_36092){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_36092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e36114){if((e36114 instanceof Object)){
var ex__32977__auto__ = e36114;
var statearr_36115_36136 = state_36092;
(statearr_36115_36136[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36137 = state_36092;
state_36092 = G__36137;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_36092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_36092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___36121,tc,fc))
})();
var state__33040__auto__ = (function (){var statearr_36116 = f__33039__auto__.call(null);
(statearr_36116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___36121);

return statearr_36116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___36121,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto__){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto__){
return (function (state_36184){
var state_val_36185 = (state_36184[(1)]);
if((state_val_36185 === (1))){
var inst_36170 = init;
var state_36184__$1 = (function (){var statearr_36186 = state_36184;
(statearr_36186[(7)] = inst_36170);

return statearr_36186;
})();
var statearr_36187_36202 = state_36184__$1;
(statearr_36187_36202[(2)] = null);

(statearr_36187_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36185 === (2))){
var state_36184__$1 = state_36184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36184__$1,(4),ch);
} else {
if((state_val_36185 === (3))){
var inst_36182 = (state_36184[(2)]);
var state_36184__$1 = state_36184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36184__$1,inst_36182);
} else {
if((state_val_36185 === (4))){
var inst_36173 = (state_36184[(8)]);
var inst_36173__$1 = (state_36184[(2)]);
var inst_36174 = (inst_36173__$1 == null);
var state_36184__$1 = (function (){var statearr_36188 = state_36184;
(statearr_36188[(8)] = inst_36173__$1);

return statearr_36188;
})();
if(cljs.core.truth_(inst_36174)){
var statearr_36189_36203 = state_36184__$1;
(statearr_36189_36203[(1)] = (5));

} else {
var statearr_36190_36204 = state_36184__$1;
(statearr_36190_36204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36185 === (5))){
var inst_36170 = (state_36184[(7)]);
var state_36184__$1 = state_36184;
var statearr_36191_36205 = state_36184__$1;
(statearr_36191_36205[(2)] = inst_36170);

(statearr_36191_36205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36185 === (6))){
var inst_36173 = (state_36184[(8)]);
var inst_36170 = (state_36184[(7)]);
var inst_36177 = f.call(null,inst_36170,inst_36173);
var inst_36170__$1 = inst_36177;
var state_36184__$1 = (function (){var statearr_36192 = state_36184;
(statearr_36192[(7)] = inst_36170__$1);

return statearr_36192;
})();
var statearr_36193_36206 = state_36184__$1;
(statearr_36193_36206[(2)] = null);

(statearr_36193_36206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36185 === (7))){
var inst_36180 = (state_36184[(2)]);
var state_36184__$1 = state_36184;
var statearr_36194_36207 = state_36184__$1;
(statearr_36194_36207[(2)] = inst_36180);

(statearr_36194_36207[(1)] = (3));


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
});})(c__33038__auto__))
;
return ((function (switch__32973__auto__,c__33038__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32974__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32974__auto____0 = (function (){
var statearr_36198 = [null,null,null,null,null,null,null,null,null];
(statearr_36198[(0)] = cljs$core$async$reduce_$_state_machine__32974__auto__);

(statearr_36198[(1)] = (1));

return statearr_36198;
});
var cljs$core$async$reduce_$_state_machine__32974__auto____1 = (function (state_36184){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_36184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e36199){if((e36199 instanceof Object)){
var ex__32977__auto__ = e36199;
var statearr_36200_36208 = state_36184;
(statearr_36200_36208[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36209 = state_36184;
state_36184 = G__36209;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32974__auto__ = function(state_36184){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32974__auto____1.call(this,state_36184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32974__auto____0;
cljs$core$async$reduce_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32974__auto____1;
return cljs$core$async$reduce_$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto__))
})();
var state__33040__auto__ = (function (){var statearr_36201 = f__33039__auto__.call(null);
(statearr_36201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto__);

return statearr_36201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto__))
);

return c__33038__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args36210 = [];
var len__31995__auto___36262 = arguments.length;
var i__31996__auto___36263 = (0);
while(true){
if((i__31996__auto___36263 < len__31995__auto___36262)){
args36210.push((arguments[i__31996__auto___36263]));

var G__36264 = (i__31996__auto___36263 + (1));
i__31996__auto___36263 = G__36264;
continue;
} else {
}
break;
}

var G__36212 = args36210.length;
switch (G__36212) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36210.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto__){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto__){
return (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (7))){
var inst_36219 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36239_36266 = state_36237__$1;
(statearr_36239_36266[(2)] = inst_36219);

(statearr_36239_36266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (1))){
var inst_36213 = cljs.core.seq.call(null,coll);
var inst_36214 = inst_36213;
var state_36237__$1 = (function (){var statearr_36240 = state_36237;
(statearr_36240[(7)] = inst_36214);

return statearr_36240;
})();
var statearr_36241_36267 = state_36237__$1;
(statearr_36241_36267[(2)] = null);

(statearr_36241_36267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (4))){
var inst_36214 = (state_36237[(7)]);
var inst_36217 = cljs.core.first.call(null,inst_36214);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36237__$1,(7),ch,inst_36217);
} else {
if((state_val_36238 === (13))){
var inst_36231 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36242_36268 = state_36237__$1;
(statearr_36242_36268[(2)] = inst_36231);

(statearr_36242_36268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (6))){
var inst_36222 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36222)){
var statearr_36243_36269 = state_36237__$1;
(statearr_36243_36269[(1)] = (8));

} else {
var statearr_36244_36270 = state_36237__$1;
(statearr_36244_36270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (3))){
var inst_36235 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36237__$1,inst_36235);
} else {
if((state_val_36238 === (12))){
var state_36237__$1 = state_36237;
var statearr_36245_36271 = state_36237__$1;
(statearr_36245_36271[(2)] = null);

(statearr_36245_36271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (2))){
var inst_36214 = (state_36237[(7)]);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36214)){
var statearr_36246_36272 = state_36237__$1;
(statearr_36246_36272[(1)] = (4));

} else {
var statearr_36247_36273 = state_36237__$1;
(statearr_36247_36273[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (11))){
var inst_36228 = cljs.core.async.close_BANG_.call(null,ch);
var state_36237__$1 = state_36237;
var statearr_36248_36274 = state_36237__$1;
(statearr_36248_36274[(2)] = inst_36228);

(statearr_36248_36274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (9))){
var state_36237__$1 = state_36237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36249_36275 = state_36237__$1;
(statearr_36249_36275[(1)] = (11));

} else {
var statearr_36250_36276 = state_36237__$1;
(statearr_36250_36276[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (5))){
var inst_36214 = (state_36237[(7)]);
var state_36237__$1 = state_36237;
var statearr_36251_36277 = state_36237__$1;
(statearr_36251_36277[(2)] = inst_36214);

(statearr_36251_36277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (10))){
var inst_36233 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36252_36278 = state_36237__$1;
(statearr_36252_36278[(2)] = inst_36233);

(statearr_36252_36278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (8))){
var inst_36214 = (state_36237[(7)]);
var inst_36224 = cljs.core.next.call(null,inst_36214);
var inst_36214__$1 = inst_36224;
var state_36237__$1 = (function (){var statearr_36253 = state_36237;
(statearr_36253[(7)] = inst_36214__$1);

return statearr_36253;
})();
var statearr_36254_36279 = state_36237__$1;
(statearr_36254_36279[(2)] = null);

(statearr_36254_36279[(1)] = (2));


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
});})(c__33038__auto__))
;
return ((function (switch__32973__auto__,c__33038__auto__){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_36258 = [null,null,null,null,null,null,null,null];
(statearr_36258[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_36258[(1)] = (1));

return statearr_36258;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_36237){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_36237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e36259){if((e36259 instanceof Object)){
var ex__32977__auto__ = e36259;
var statearr_36260_36280 = state_36237;
(statearr_36260_36280[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36281 = state_36237;
state_36237 = G__36281;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto__))
})();
var state__33040__auto__ = (function (){var statearr_36261 = f__33039__auto__.call(null);
(statearr_36261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto__);

return statearr_36261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto__))
);

return c__33038__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__31592__auto__ = (((_ == null))?null:_);
var m__31593__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,_);
} else {
var m__31593__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__31593__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m,ch);
} else {
var m__31593__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m);
} else {
var m__31593__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36507 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async36507 = (function (mult,ch,cs,meta36508){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36508 = meta36508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36509,meta36508__$1){
var self__ = this;
var _36509__$1 = this;
return (new cljs.core.async.t_cljs$core$async36507(self__.mult,self__.ch,self__.cs,meta36508__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36509){
var self__ = this;
var _36509__$1 = this;
return self__.meta36508;
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36508","meta36508",1233914345,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36507";

cljs.core.async.t_cljs$core$async36507.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async36507");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36507 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36507(mult__$1,ch__$1,cs__$1,meta36508){
return (new cljs.core.async.t_cljs$core$async36507(mult__$1,ch__$1,cs__$1,meta36508));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36507(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33038__auto___36728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___36728,cs,m,dchan,dctr,done){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___36728,cs,m,dchan,dctr,done){
return (function (state_36640){
var state_val_36641 = (state_36640[(1)]);
if((state_val_36641 === (7))){
var inst_36636 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36642_36729 = state_36640__$1;
(statearr_36642_36729[(2)] = inst_36636);

(statearr_36642_36729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (20))){
var inst_36541 = (state_36640[(7)]);
var inst_36551 = cljs.core.first.call(null,inst_36541);
var inst_36552 = cljs.core.nth.call(null,inst_36551,(0),null);
var inst_36553 = cljs.core.nth.call(null,inst_36551,(1),null);
var state_36640__$1 = (function (){var statearr_36643 = state_36640;
(statearr_36643[(8)] = inst_36552);

return statearr_36643;
})();
if(cljs.core.truth_(inst_36553)){
var statearr_36644_36730 = state_36640__$1;
(statearr_36644_36730[(1)] = (22));

} else {
var statearr_36645_36731 = state_36640__$1;
(statearr_36645_36731[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (27))){
var inst_36583 = (state_36640[(9)]);
var inst_36588 = (state_36640[(10)]);
var inst_36512 = (state_36640[(11)]);
var inst_36581 = (state_36640[(12)]);
var inst_36588__$1 = cljs.core._nth.call(null,inst_36581,inst_36583);
var inst_36589 = cljs.core.async.put_BANG_.call(null,inst_36588__$1,inst_36512,done);
var state_36640__$1 = (function (){var statearr_36646 = state_36640;
(statearr_36646[(10)] = inst_36588__$1);

return statearr_36646;
})();
if(cljs.core.truth_(inst_36589)){
var statearr_36647_36732 = state_36640__$1;
(statearr_36647_36732[(1)] = (30));

} else {
var statearr_36648_36733 = state_36640__$1;
(statearr_36648_36733[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (1))){
var state_36640__$1 = state_36640;
var statearr_36649_36734 = state_36640__$1;
(statearr_36649_36734[(2)] = null);

(statearr_36649_36734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (24))){
var inst_36541 = (state_36640[(7)]);
var inst_36558 = (state_36640[(2)]);
var inst_36559 = cljs.core.next.call(null,inst_36541);
var inst_36521 = inst_36559;
var inst_36522 = null;
var inst_36523 = (0);
var inst_36524 = (0);
var state_36640__$1 = (function (){var statearr_36650 = state_36640;
(statearr_36650[(13)] = inst_36524);

(statearr_36650[(14)] = inst_36523);

(statearr_36650[(15)] = inst_36522);

(statearr_36650[(16)] = inst_36521);

(statearr_36650[(17)] = inst_36558);

return statearr_36650;
})();
var statearr_36651_36735 = state_36640__$1;
(statearr_36651_36735[(2)] = null);

(statearr_36651_36735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (39))){
var state_36640__$1 = state_36640;
var statearr_36655_36736 = state_36640__$1;
(statearr_36655_36736[(2)] = null);

(statearr_36655_36736[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (4))){
var inst_36512 = (state_36640[(11)]);
var inst_36512__$1 = (state_36640[(2)]);
var inst_36513 = (inst_36512__$1 == null);
var state_36640__$1 = (function (){var statearr_36656 = state_36640;
(statearr_36656[(11)] = inst_36512__$1);

return statearr_36656;
})();
if(cljs.core.truth_(inst_36513)){
var statearr_36657_36737 = state_36640__$1;
(statearr_36657_36737[(1)] = (5));

} else {
var statearr_36658_36738 = state_36640__$1;
(statearr_36658_36738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (15))){
var inst_36524 = (state_36640[(13)]);
var inst_36523 = (state_36640[(14)]);
var inst_36522 = (state_36640[(15)]);
var inst_36521 = (state_36640[(16)]);
var inst_36537 = (state_36640[(2)]);
var inst_36538 = (inst_36524 + (1));
var tmp36652 = inst_36523;
var tmp36653 = inst_36522;
var tmp36654 = inst_36521;
var inst_36521__$1 = tmp36654;
var inst_36522__$1 = tmp36653;
var inst_36523__$1 = tmp36652;
var inst_36524__$1 = inst_36538;
var state_36640__$1 = (function (){var statearr_36659 = state_36640;
(statearr_36659[(13)] = inst_36524__$1);

(statearr_36659[(14)] = inst_36523__$1);

(statearr_36659[(18)] = inst_36537);

(statearr_36659[(15)] = inst_36522__$1);

(statearr_36659[(16)] = inst_36521__$1);

return statearr_36659;
})();
var statearr_36660_36739 = state_36640__$1;
(statearr_36660_36739[(2)] = null);

(statearr_36660_36739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (21))){
var inst_36562 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36664_36740 = state_36640__$1;
(statearr_36664_36740[(2)] = inst_36562);

(statearr_36664_36740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (31))){
var inst_36588 = (state_36640[(10)]);
var inst_36592 = done.call(null,null);
var inst_36593 = cljs.core.async.untap_STAR_.call(null,m,inst_36588);
var state_36640__$1 = (function (){var statearr_36665 = state_36640;
(statearr_36665[(19)] = inst_36592);

return statearr_36665;
})();
var statearr_36666_36741 = state_36640__$1;
(statearr_36666_36741[(2)] = inst_36593);

(statearr_36666_36741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (32))){
var inst_36583 = (state_36640[(9)]);
var inst_36582 = (state_36640[(20)]);
var inst_36580 = (state_36640[(21)]);
var inst_36581 = (state_36640[(12)]);
var inst_36595 = (state_36640[(2)]);
var inst_36596 = (inst_36583 + (1));
var tmp36661 = inst_36582;
var tmp36662 = inst_36580;
var tmp36663 = inst_36581;
var inst_36580__$1 = tmp36662;
var inst_36581__$1 = tmp36663;
var inst_36582__$1 = tmp36661;
var inst_36583__$1 = inst_36596;
var state_36640__$1 = (function (){var statearr_36667 = state_36640;
(statearr_36667[(9)] = inst_36583__$1);

(statearr_36667[(20)] = inst_36582__$1);

(statearr_36667[(22)] = inst_36595);

(statearr_36667[(21)] = inst_36580__$1);

(statearr_36667[(12)] = inst_36581__$1);

return statearr_36667;
})();
var statearr_36668_36742 = state_36640__$1;
(statearr_36668_36742[(2)] = null);

(statearr_36668_36742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (40))){
var inst_36608 = (state_36640[(23)]);
var inst_36612 = done.call(null,null);
var inst_36613 = cljs.core.async.untap_STAR_.call(null,m,inst_36608);
var state_36640__$1 = (function (){var statearr_36669 = state_36640;
(statearr_36669[(24)] = inst_36612);

return statearr_36669;
})();
var statearr_36670_36743 = state_36640__$1;
(statearr_36670_36743[(2)] = inst_36613);

(statearr_36670_36743[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (33))){
var inst_36599 = (state_36640[(25)]);
var inst_36601 = cljs.core.chunked_seq_QMARK_.call(null,inst_36599);
var state_36640__$1 = state_36640;
if(inst_36601){
var statearr_36671_36744 = state_36640__$1;
(statearr_36671_36744[(1)] = (36));

} else {
var statearr_36672_36745 = state_36640__$1;
(statearr_36672_36745[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (13))){
var inst_36531 = (state_36640[(26)]);
var inst_36534 = cljs.core.async.close_BANG_.call(null,inst_36531);
var state_36640__$1 = state_36640;
var statearr_36673_36746 = state_36640__$1;
(statearr_36673_36746[(2)] = inst_36534);

(statearr_36673_36746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (22))){
var inst_36552 = (state_36640[(8)]);
var inst_36555 = cljs.core.async.close_BANG_.call(null,inst_36552);
var state_36640__$1 = state_36640;
var statearr_36674_36747 = state_36640__$1;
(statearr_36674_36747[(2)] = inst_36555);

(statearr_36674_36747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (36))){
var inst_36599 = (state_36640[(25)]);
var inst_36603 = cljs.core.chunk_first.call(null,inst_36599);
var inst_36604 = cljs.core.chunk_rest.call(null,inst_36599);
var inst_36605 = cljs.core.count.call(null,inst_36603);
var inst_36580 = inst_36604;
var inst_36581 = inst_36603;
var inst_36582 = inst_36605;
var inst_36583 = (0);
var state_36640__$1 = (function (){var statearr_36675 = state_36640;
(statearr_36675[(9)] = inst_36583);

(statearr_36675[(20)] = inst_36582);

(statearr_36675[(21)] = inst_36580);

(statearr_36675[(12)] = inst_36581);

return statearr_36675;
})();
var statearr_36676_36748 = state_36640__$1;
(statearr_36676_36748[(2)] = null);

(statearr_36676_36748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (41))){
var inst_36599 = (state_36640[(25)]);
var inst_36615 = (state_36640[(2)]);
var inst_36616 = cljs.core.next.call(null,inst_36599);
var inst_36580 = inst_36616;
var inst_36581 = null;
var inst_36582 = (0);
var inst_36583 = (0);
var state_36640__$1 = (function (){var statearr_36677 = state_36640;
(statearr_36677[(9)] = inst_36583);

(statearr_36677[(20)] = inst_36582);

(statearr_36677[(21)] = inst_36580);

(statearr_36677[(27)] = inst_36615);

(statearr_36677[(12)] = inst_36581);

return statearr_36677;
})();
var statearr_36678_36749 = state_36640__$1;
(statearr_36678_36749[(2)] = null);

(statearr_36678_36749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (43))){
var state_36640__$1 = state_36640;
var statearr_36679_36750 = state_36640__$1;
(statearr_36679_36750[(2)] = null);

(statearr_36679_36750[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (29))){
var inst_36624 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36680_36751 = state_36640__$1;
(statearr_36680_36751[(2)] = inst_36624);

(statearr_36680_36751[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (44))){
var inst_36633 = (state_36640[(2)]);
var state_36640__$1 = (function (){var statearr_36681 = state_36640;
(statearr_36681[(28)] = inst_36633);

return statearr_36681;
})();
var statearr_36682_36752 = state_36640__$1;
(statearr_36682_36752[(2)] = null);

(statearr_36682_36752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (6))){
var inst_36572 = (state_36640[(29)]);
var inst_36571 = cljs.core.deref.call(null,cs);
var inst_36572__$1 = cljs.core.keys.call(null,inst_36571);
var inst_36573 = cljs.core.count.call(null,inst_36572__$1);
var inst_36574 = cljs.core.reset_BANG_.call(null,dctr,inst_36573);
var inst_36579 = cljs.core.seq.call(null,inst_36572__$1);
var inst_36580 = inst_36579;
var inst_36581 = null;
var inst_36582 = (0);
var inst_36583 = (0);
var state_36640__$1 = (function (){var statearr_36683 = state_36640;
(statearr_36683[(30)] = inst_36574);

(statearr_36683[(9)] = inst_36583);

(statearr_36683[(29)] = inst_36572__$1);

(statearr_36683[(20)] = inst_36582);

(statearr_36683[(21)] = inst_36580);

(statearr_36683[(12)] = inst_36581);

return statearr_36683;
})();
var statearr_36684_36753 = state_36640__$1;
(statearr_36684_36753[(2)] = null);

(statearr_36684_36753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (28))){
var inst_36599 = (state_36640[(25)]);
var inst_36580 = (state_36640[(21)]);
var inst_36599__$1 = cljs.core.seq.call(null,inst_36580);
var state_36640__$1 = (function (){var statearr_36685 = state_36640;
(statearr_36685[(25)] = inst_36599__$1);

return statearr_36685;
})();
if(inst_36599__$1){
var statearr_36686_36754 = state_36640__$1;
(statearr_36686_36754[(1)] = (33));

} else {
var statearr_36687_36755 = state_36640__$1;
(statearr_36687_36755[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (25))){
var inst_36583 = (state_36640[(9)]);
var inst_36582 = (state_36640[(20)]);
var inst_36585 = (inst_36583 < inst_36582);
var inst_36586 = inst_36585;
var state_36640__$1 = state_36640;
if(cljs.core.truth_(inst_36586)){
var statearr_36688_36756 = state_36640__$1;
(statearr_36688_36756[(1)] = (27));

} else {
var statearr_36689_36757 = state_36640__$1;
(statearr_36689_36757[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (34))){
var state_36640__$1 = state_36640;
var statearr_36690_36758 = state_36640__$1;
(statearr_36690_36758[(2)] = null);

(statearr_36690_36758[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (17))){
var state_36640__$1 = state_36640;
var statearr_36691_36759 = state_36640__$1;
(statearr_36691_36759[(2)] = null);

(statearr_36691_36759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (3))){
var inst_36638 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36640__$1,inst_36638);
} else {
if((state_val_36641 === (12))){
var inst_36567 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36692_36760 = state_36640__$1;
(statearr_36692_36760[(2)] = inst_36567);

(statearr_36692_36760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (2))){
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36640__$1,(4),ch);
} else {
if((state_val_36641 === (23))){
var state_36640__$1 = state_36640;
var statearr_36693_36761 = state_36640__$1;
(statearr_36693_36761[(2)] = null);

(statearr_36693_36761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (35))){
var inst_36622 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36694_36762 = state_36640__$1;
(statearr_36694_36762[(2)] = inst_36622);

(statearr_36694_36762[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (19))){
var inst_36541 = (state_36640[(7)]);
var inst_36545 = cljs.core.chunk_first.call(null,inst_36541);
var inst_36546 = cljs.core.chunk_rest.call(null,inst_36541);
var inst_36547 = cljs.core.count.call(null,inst_36545);
var inst_36521 = inst_36546;
var inst_36522 = inst_36545;
var inst_36523 = inst_36547;
var inst_36524 = (0);
var state_36640__$1 = (function (){var statearr_36695 = state_36640;
(statearr_36695[(13)] = inst_36524);

(statearr_36695[(14)] = inst_36523);

(statearr_36695[(15)] = inst_36522);

(statearr_36695[(16)] = inst_36521);

return statearr_36695;
})();
var statearr_36696_36763 = state_36640__$1;
(statearr_36696_36763[(2)] = null);

(statearr_36696_36763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (11))){
var inst_36541 = (state_36640[(7)]);
var inst_36521 = (state_36640[(16)]);
var inst_36541__$1 = cljs.core.seq.call(null,inst_36521);
var state_36640__$1 = (function (){var statearr_36697 = state_36640;
(statearr_36697[(7)] = inst_36541__$1);

return statearr_36697;
})();
if(inst_36541__$1){
var statearr_36698_36764 = state_36640__$1;
(statearr_36698_36764[(1)] = (16));

} else {
var statearr_36699_36765 = state_36640__$1;
(statearr_36699_36765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (9))){
var inst_36569 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36700_36766 = state_36640__$1;
(statearr_36700_36766[(2)] = inst_36569);

(statearr_36700_36766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (5))){
var inst_36519 = cljs.core.deref.call(null,cs);
var inst_36520 = cljs.core.seq.call(null,inst_36519);
var inst_36521 = inst_36520;
var inst_36522 = null;
var inst_36523 = (0);
var inst_36524 = (0);
var state_36640__$1 = (function (){var statearr_36701 = state_36640;
(statearr_36701[(13)] = inst_36524);

(statearr_36701[(14)] = inst_36523);

(statearr_36701[(15)] = inst_36522);

(statearr_36701[(16)] = inst_36521);

return statearr_36701;
})();
var statearr_36702_36767 = state_36640__$1;
(statearr_36702_36767[(2)] = null);

(statearr_36702_36767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (14))){
var state_36640__$1 = state_36640;
var statearr_36703_36768 = state_36640__$1;
(statearr_36703_36768[(2)] = null);

(statearr_36703_36768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (45))){
var inst_36630 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36704_36769 = state_36640__$1;
(statearr_36704_36769[(2)] = inst_36630);

(statearr_36704_36769[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (26))){
var inst_36572 = (state_36640[(29)]);
var inst_36626 = (state_36640[(2)]);
var inst_36627 = cljs.core.seq.call(null,inst_36572);
var state_36640__$1 = (function (){var statearr_36705 = state_36640;
(statearr_36705[(31)] = inst_36626);

return statearr_36705;
})();
if(inst_36627){
var statearr_36706_36770 = state_36640__$1;
(statearr_36706_36770[(1)] = (42));

} else {
var statearr_36707_36771 = state_36640__$1;
(statearr_36707_36771[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (16))){
var inst_36541 = (state_36640[(7)]);
var inst_36543 = cljs.core.chunked_seq_QMARK_.call(null,inst_36541);
var state_36640__$1 = state_36640;
if(inst_36543){
var statearr_36708_36772 = state_36640__$1;
(statearr_36708_36772[(1)] = (19));

} else {
var statearr_36709_36773 = state_36640__$1;
(statearr_36709_36773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (38))){
var inst_36619 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36710_36774 = state_36640__$1;
(statearr_36710_36774[(2)] = inst_36619);

(statearr_36710_36774[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (30))){
var state_36640__$1 = state_36640;
var statearr_36711_36775 = state_36640__$1;
(statearr_36711_36775[(2)] = null);

(statearr_36711_36775[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (10))){
var inst_36524 = (state_36640[(13)]);
var inst_36522 = (state_36640[(15)]);
var inst_36530 = cljs.core._nth.call(null,inst_36522,inst_36524);
var inst_36531 = cljs.core.nth.call(null,inst_36530,(0),null);
var inst_36532 = cljs.core.nth.call(null,inst_36530,(1),null);
var state_36640__$1 = (function (){var statearr_36712 = state_36640;
(statearr_36712[(26)] = inst_36531);

return statearr_36712;
})();
if(cljs.core.truth_(inst_36532)){
var statearr_36713_36776 = state_36640__$1;
(statearr_36713_36776[(1)] = (13));

} else {
var statearr_36714_36777 = state_36640__$1;
(statearr_36714_36777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (18))){
var inst_36565 = (state_36640[(2)]);
var state_36640__$1 = state_36640;
var statearr_36715_36778 = state_36640__$1;
(statearr_36715_36778[(2)] = inst_36565);

(statearr_36715_36778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (42))){
var state_36640__$1 = state_36640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36640__$1,(45),dchan);
} else {
if((state_val_36641 === (37))){
var inst_36599 = (state_36640[(25)]);
var inst_36608 = (state_36640[(23)]);
var inst_36512 = (state_36640[(11)]);
var inst_36608__$1 = cljs.core.first.call(null,inst_36599);
var inst_36609 = cljs.core.async.put_BANG_.call(null,inst_36608__$1,inst_36512,done);
var state_36640__$1 = (function (){var statearr_36716 = state_36640;
(statearr_36716[(23)] = inst_36608__$1);

return statearr_36716;
})();
if(cljs.core.truth_(inst_36609)){
var statearr_36717_36779 = state_36640__$1;
(statearr_36717_36779[(1)] = (39));

} else {
var statearr_36718_36780 = state_36640__$1;
(statearr_36718_36780[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36641 === (8))){
var inst_36524 = (state_36640[(13)]);
var inst_36523 = (state_36640[(14)]);
var inst_36526 = (inst_36524 < inst_36523);
var inst_36527 = inst_36526;
var state_36640__$1 = state_36640;
if(cljs.core.truth_(inst_36527)){
var statearr_36719_36781 = state_36640__$1;
(statearr_36719_36781[(1)] = (10));

} else {
var statearr_36720_36782 = state_36640__$1;
(statearr_36720_36782[(1)] = (11));

}

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
}
}
}
});})(c__33038__auto___36728,cs,m,dchan,dctr,done))
;
return ((function (switch__32973__auto__,c__33038__auto___36728,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32974__auto__ = null;
var cljs$core$async$mult_$_state_machine__32974__auto____0 = (function (){
var statearr_36724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36724[(0)] = cljs$core$async$mult_$_state_machine__32974__auto__);

(statearr_36724[(1)] = (1));

return statearr_36724;
});
var cljs$core$async$mult_$_state_machine__32974__auto____1 = (function (state_36640){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_36640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e36725){if((e36725 instanceof Object)){
var ex__32977__auto__ = e36725;
var statearr_36726_36783 = state_36640;
(statearr_36726_36783[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36784 = state_36640;
state_36640 = G__36784;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32974__auto__ = function(state_36640){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32974__auto____1.call(this,state_36640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32974__auto____0;
cljs$core$async$mult_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32974__auto____1;
return cljs$core$async$mult_$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___36728,cs,m,dchan,dctr,done))
})();
var state__33040__auto__ = (function (){var statearr_36727 = f__33039__auto__.call(null);
(statearr_36727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___36728);

return statearr_36727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___36728,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args36785 = [];
var len__31995__auto___36788 = arguments.length;
var i__31996__auto___36789 = (0);
while(true){
if((i__31996__auto___36789 < len__31995__auto___36788)){
args36785.push((arguments[i__31996__auto___36789]));

var G__36790 = (i__31996__auto___36789 + (1));
i__31996__auto___36789 = G__36790;
continue;
} else {
}
break;
}

var G__36787 = args36785.length;
switch (G__36787) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36785.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m,ch);
} else {
var m__31593__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m,ch);
} else {
var m__31593__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m);
} else {
var m__31593__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m,state_map);
} else {
var m__31593__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__31592__auto__ = (((m == null))?null:m);
var m__31593__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,m,mode);
} else {
var m__31593__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__32002__auto__ = [];
var len__31995__auto___36804 = arguments.length;
var i__31996__auto___36805 = (0);
while(true){
if((i__31996__auto___36805 < len__31995__auto___36804)){
args__32002__auto__.push((arguments[i__31996__auto___36805]));

var G__36806 = (i__31996__auto___36805 + (1));
i__31996__auto___36805 = G__36806;
continue;
} else {
}
break;
}

var argseq__32003__auto__ = ((((3) < args__32002__auto__.length))?(new cljs.core.IndexedSeq(args__32002__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__32003__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36798){
var map__36799 = p__36798;
var map__36799__$1 = ((((!((map__36799 == null)))?((((map__36799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36799):map__36799);
var opts = map__36799__$1;
var statearr_36801_36807 = state;
(statearr_36801_36807[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__36799,map__36799__$1,opts){
return (function (val){
var statearr_36802_36808 = state;
(statearr_36802_36808[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36799,map__36799__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_36803_36809 = state;
(statearr_36803_36809[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36794){
var G__36795 = cljs.core.first.call(null,seq36794);
var seq36794__$1 = cljs.core.next.call(null,seq36794);
var G__36796 = cljs.core.first.call(null,seq36794__$1);
var seq36794__$2 = cljs.core.next.call(null,seq36794__$1);
var G__36797 = cljs.core.first.call(null,seq36794__$2);
var seq36794__$3 = cljs.core.next.call(null,seq36794__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36795,G__36796,G__36797,seq36794__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36973 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async36973 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36974){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36974 = meta36974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36975,meta36974__$1){
var self__ = this;
var _36975__$1 = this;
return (new cljs.core.async.t_cljs$core$async36973(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36974__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36975){
var self__ = this;
var _36975__$1 = this;
return self__.meta36974;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36974","meta36974",217639236,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36973";

cljs.core.async.t_cljs$core$async36973.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async36973");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36973 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36973(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36974){
return (new cljs.core.async.t_cljs$core$async36973(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36974));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36973(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33038__auto___37136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37073){
var state_val_37074 = (state_37073[(1)]);
if((state_val_37074 === (7))){
var inst_36991 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37075_37137 = state_37073__$1;
(statearr_37075_37137[(2)] = inst_36991);

(statearr_37075_37137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (20))){
var inst_37003 = (state_37073[(7)]);
var state_37073__$1 = state_37073;
var statearr_37076_37138 = state_37073__$1;
(statearr_37076_37138[(2)] = inst_37003);

(statearr_37076_37138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (27))){
var state_37073__$1 = state_37073;
var statearr_37077_37139 = state_37073__$1;
(statearr_37077_37139[(2)] = null);

(statearr_37077_37139[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (1))){
var inst_36979 = (state_37073[(8)]);
var inst_36979__$1 = calc_state.call(null);
var inst_36981 = (inst_36979__$1 == null);
var inst_36982 = cljs.core.not.call(null,inst_36981);
var state_37073__$1 = (function (){var statearr_37078 = state_37073;
(statearr_37078[(8)] = inst_36979__$1);

return statearr_37078;
})();
if(inst_36982){
var statearr_37079_37140 = state_37073__$1;
(statearr_37079_37140[(1)] = (2));

} else {
var statearr_37080_37141 = state_37073__$1;
(statearr_37080_37141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (24))){
var inst_37026 = (state_37073[(9)]);
var inst_37047 = (state_37073[(10)]);
var inst_37033 = (state_37073[(11)]);
var inst_37047__$1 = inst_37026.call(null,inst_37033);
var state_37073__$1 = (function (){var statearr_37081 = state_37073;
(statearr_37081[(10)] = inst_37047__$1);

return statearr_37081;
})();
if(cljs.core.truth_(inst_37047__$1)){
var statearr_37082_37142 = state_37073__$1;
(statearr_37082_37142[(1)] = (29));

} else {
var statearr_37083_37143 = state_37073__$1;
(statearr_37083_37143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (4))){
var inst_36994 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_36994)){
var statearr_37084_37144 = state_37073__$1;
(statearr_37084_37144[(1)] = (8));

} else {
var statearr_37085_37145 = state_37073__$1;
(statearr_37085_37145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (15))){
var inst_37020 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_37020)){
var statearr_37086_37146 = state_37073__$1;
(statearr_37086_37146[(1)] = (19));

} else {
var statearr_37087_37147 = state_37073__$1;
(statearr_37087_37147[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (21))){
var inst_37025 = (state_37073[(12)]);
var inst_37025__$1 = (state_37073[(2)]);
var inst_37026 = cljs.core.get.call(null,inst_37025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37027 = cljs.core.get.call(null,inst_37025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37028 = cljs.core.get.call(null,inst_37025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37073__$1 = (function (){var statearr_37088 = state_37073;
(statearr_37088[(9)] = inst_37026);

(statearr_37088[(13)] = inst_37027);

(statearr_37088[(12)] = inst_37025__$1);

return statearr_37088;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37073__$1,(22),inst_37028);
} else {
if((state_val_37074 === (31))){
var inst_37055 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_37055)){
var statearr_37089_37148 = state_37073__$1;
(statearr_37089_37148[(1)] = (32));

} else {
var statearr_37090_37149 = state_37073__$1;
(statearr_37090_37149[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (32))){
var inst_37032 = (state_37073[(14)]);
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37073__$1,(35),out,inst_37032);
} else {
if((state_val_37074 === (33))){
var inst_37025 = (state_37073[(12)]);
var inst_37003 = inst_37025;
var state_37073__$1 = (function (){var statearr_37091 = state_37073;
(statearr_37091[(7)] = inst_37003);

return statearr_37091;
})();
var statearr_37092_37150 = state_37073__$1;
(statearr_37092_37150[(2)] = null);

(statearr_37092_37150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (13))){
var inst_37003 = (state_37073[(7)]);
var inst_37010 = inst_37003.cljs$lang$protocol_mask$partition0$;
var inst_37011 = (inst_37010 & (64));
var inst_37012 = inst_37003.cljs$core$ISeq$;
var inst_37013 = (inst_37011) || (inst_37012);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_37013)){
var statearr_37093_37151 = state_37073__$1;
(statearr_37093_37151[(1)] = (16));

} else {
var statearr_37094_37152 = state_37073__$1;
(statearr_37094_37152[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (22))){
var inst_37032 = (state_37073[(14)]);
var inst_37033 = (state_37073[(11)]);
var inst_37031 = (state_37073[(2)]);
var inst_37032__$1 = cljs.core.nth.call(null,inst_37031,(0),null);
var inst_37033__$1 = cljs.core.nth.call(null,inst_37031,(1),null);
var inst_37034 = (inst_37032__$1 == null);
var inst_37035 = cljs.core._EQ_.call(null,inst_37033__$1,change);
var inst_37036 = (inst_37034) || (inst_37035);
var state_37073__$1 = (function (){var statearr_37095 = state_37073;
(statearr_37095[(14)] = inst_37032__$1);

(statearr_37095[(11)] = inst_37033__$1);

return statearr_37095;
})();
if(cljs.core.truth_(inst_37036)){
var statearr_37096_37153 = state_37073__$1;
(statearr_37096_37153[(1)] = (23));

} else {
var statearr_37097_37154 = state_37073__$1;
(statearr_37097_37154[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (36))){
var inst_37025 = (state_37073[(12)]);
var inst_37003 = inst_37025;
var state_37073__$1 = (function (){var statearr_37098 = state_37073;
(statearr_37098[(7)] = inst_37003);

return statearr_37098;
})();
var statearr_37099_37155 = state_37073__$1;
(statearr_37099_37155[(2)] = null);

(statearr_37099_37155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (29))){
var inst_37047 = (state_37073[(10)]);
var state_37073__$1 = state_37073;
var statearr_37100_37156 = state_37073__$1;
(statearr_37100_37156[(2)] = inst_37047);

(statearr_37100_37156[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (6))){
var state_37073__$1 = state_37073;
var statearr_37101_37157 = state_37073__$1;
(statearr_37101_37157[(2)] = false);

(statearr_37101_37157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (28))){
var inst_37043 = (state_37073[(2)]);
var inst_37044 = calc_state.call(null);
var inst_37003 = inst_37044;
var state_37073__$1 = (function (){var statearr_37102 = state_37073;
(statearr_37102[(15)] = inst_37043);

(statearr_37102[(7)] = inst_37003);

return statearr_37102;
})();
var statearr_37103_37158 = state_37073__$1;
(statearr_37103_37158[(2)] = null);

(statearr_37103_37158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (25))){
var inst_37069 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37104_37159 = state_37073__$1;
(statearr_37104_37159[(2)] = inst_37069);

(statearr_37104_37159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (34))){
var inst_37067 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37105_37160 = state_37073__$1;
(statearr_37105_37160[(2)] = inst_37067);

(statearr_37105_37160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (17))){
var state_37073__$1 = state_37073;
var statearr_37106_37161 = state_37073__$1;
(statearr_37106_37161[(2)] = false);

(statearr_37106_37161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (3))){
var state_37073__$1 = state_37073;
var statearr_37107_37162 = state_37073__$1;
(statearr_37107_37162[(2)] = false);

(statearr_37107_37162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (12))){
var inst_37071 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37073__$1,inst_37071);
} else {
if((state_val_37074 === (2))){
var inst_36979 = (state_37073[(8)]);
var inst_36984 = inst_36979.cljs$lang$protocol_mask$partition0$;
var inst_36985 = (inst_36984 & (64));
var inst_36986 = inst_36979.cljs$core$ISeq$;
var inst_36987 = (inst_36985) || (inst_36986);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_36987)){
var statearr_37108_37163 = state_37073__$1;
(statearr_37108_37163[(1)] = (5));

} else {
var statearr_37109_37164 = state_37073__$1;
(statearr_37109_37164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (23))){
var inst_37032 = (state_37073[(14)]);
var inst_37038 = (inst_37032 == null);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_37038)){
var statearr_37110_37165 = state_37073__$1;
(statearr_37110_37165[(1)] = (26));

} else {
var statearr_37111_37166 = state_37073__$1;
(statearr_37111_37166[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (35))){
var inst_37058 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
if(cljs.core.truth_(inst_37058)){
var statearr_37112_37167 = state_37073__$1;
(statearr_37112_37167[(1)] = (36));

} else {
var statearr_37113_37168 = state_37073__$1;
(statearr_37113_37168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (19))){
var inst_37003 = (state_37073[(7)]);
var inst_37022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37003);
var state_37073__$1 = state_37073;
var statearr_37114_37169 = state_37073__$1;
(statearr_37114_37169[(2)] = inst_37022);

(statearr_37114_37169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (11))){
var inst_37003 = (state_37073[(7)]);
var inst_37007 = (inst_37003 == null);
var inst_37008 = cljs.core.not.call(null,inst_37007);
var state_37073__$1 = state_37073;
if(inst_37008){
var statearr_37115_37170 = state_37073__$1;
(statearr_37115_37170[(1)] = (13));

} else {
var statearr_37116_37171 = state_37073__$1;
(statearr_37116_37171[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (9))){
var inst_36979 = (state_37073[(8)]);
var state_37073__$1 = state_37073;
var statearr_37117_37172 = state_37073__$1;
(statearr_37117_37172[(2)] = inst_36979);

(statearr_37117_37172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (5))){
var state_37073__$1 = state_37073;
var statearr_37118_37173 = state_37073__$1;
(statearr_37118_37173[(2)] = true);

(statearr_37118_37173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (14))){
var state_37073__$1 = state_37073;
var statearr_37119_37174 = state_37073__$1;
(statearr_37119_37174[(2)] = false);

(statearr_37119_37174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (26))){
var inst_37033 = (state_37073[(11)]);
var inst_37040 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37033);
var state_37073__$1 = state_37073;
var statearr_37120_37175 = state_37073__$1;
(statearr_37120_37175[(2)] = inst_37040);

(statearr_37120_37175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (16))){
var state_37073__$1 = state_37073;
var statearr_37121_37176 = state_37073__$1;
(statearr_37121_37176[(2)] = true);

(statearr_37121_37176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (38))){
var inst_37063 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37122_37177 = state_37073__$1;
(statearr_37122_37177[(2)] = inst_37063);

(statearr_37122_37177[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (30))){
var inst_37026 = (state_37073[(9)]);
var inst_37027 = (state_37073[(13)]);
var inst_37033 = (state_37073[(11)]);
var inst_37050 = cljs.core.empty_QMARK_.call(null,inst_37026);
var inst_37051 = inst_37027.call(null,inst_37033);
var inst_37052 = cljs.core.not.call(null,inst_37051);
var inst_37053 = (inst_37050) && (inst_37052);
var state_37073__$1 = state_37073;
var statearr_37123_37178 = state_37073__$1;
(statearr_37123_37178[(2)] = inst_37053);

(statearr_37123_37178[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (10))){
var inst_36979 = (state_37073[(8)]);
var inst_36999 = (state_37073[(2)]);
var inst_37000 = cljs.core.get.call(null,inst_36999,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37001 = cljs.core.get.call(null,inst_36999,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37002 = cljs.core.get.call(null,inst_36999,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37003 = inst_36979;
var state_37073__$1 = (function (){var statearr_37124 = state_37073;
(statearr_37124[(16)] = inst_37000);

(statearr_37124[(17)] = inst_37002);

(statearr_37124[(18)] = inst_37001);

(statearr_37124[(7)] = inst_37003);

return statearr_37124;
})();
var statearr_37125_37179 = state_37073__$1;
(statearr_37125_37179[(2)] = null);

(statearr_37125_37179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (18))){
var inst_37017 = (state_37073[(2)]);
var state_37073__$1 = state_37073;
var statearr_37126_37180 = state_37073__$1;
(statearr_37126_37180[(2)] = inst_37017);

(statearr_37126_37180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (37))){
var state_37073__$1 = state_37073;
var statearr_37127_37181 = state_37073__$1;
(statearr_37127_37181[(2)] = null);

(statearr_37127_37181[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37074 === (8))){
var inst_36979 = (state_37073[(8)]);
var inst_36996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36979);
var state_37073__$1 = state_37073;
var statearr_37128_37182 = state_37073__$1;
(statearr_37128_37182[(2)] = inst_36996);

(statearr_37128_37182[(1)] = (10));


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
});})(c__33038__auto___37136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32973__auto__,c__33038__auto___37136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32974__auto__ = null;
var cljs$core$async$mix_$_state_machine__32974__auto____0 = (function (){
var statearr_37132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37132[(0)] = cljs$core$async$mix_$_state_machine__32974__auto__);

(statearr_37132[(1)] = (1));

return statearr_37132;
});
var cljs$core$async$mix_$_state_machine__32974__auto____1 = (function (state_37073){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37133){if((e37133 instanceof Object)){
var ex__32977__auto__ = e37133;
var statearr_37134_37183 = state_37073;
(statearr_37134_37183[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37184 = state_37073;
state_37073 = G__37184;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32974__auto__ = function(state_37073){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32974__auto____1.call(this,state_37073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32974__auto____0;
cljs$core$async$mix_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32974__auto____1;
return cljs$core$async$mix_$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33040__auto__ = (function (){var statearr_37135 = f__33039__auto__.call(null);
(statearr_37135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37136);

return statearr_37135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37136,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__31592__auto__ = (((p == null))?null:p);
var m__31593__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__31593__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__31592__auto__ = (((p == null))?null:p);
var m__31593__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,p,v,ch);
} else {
var m__31593__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args37187 = [];
var len__31995__auto___37190 = arguments.length;
var i__31996__auto___37191 = (0);
while(true){
if((i__31996__auto___37191 < len__31995__auto___37190)){
args37187.push((arguments[i__31996__auto___37191]));

var G__37192 = (i__31996__auto___37191 + (1));
i__31996__auto___37191 = G__37192;
continue;
} else {
}
break;
}

var G__37189 = args37187.length;
switch (G__37189) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37187.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__31592__auto__ = (((p == null))?null:p);
var m__31593__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,p);
} else {
var m__31593__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__31592__auto__ = (((p == null))?null:p);
var m__31593__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__31592__auto__)]);
if(!((m__31593__auto__ == null))){
return m__31593__auto__.call(null,p,v);
} else {
var m__31593__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__31593__auto____$1 == null))){
return m__31593__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args37195 = [];
var len__31995__auto___37320 = arguments.length;
var i__31996__auto___37321 = (0);
while(true){
if((i__31996__auto___37321 < len__31995__auto___37320)){
args37195.push((arguments[i__31996__auto___37321]));

var G__37322 = (i__31996__auto___37321 + (1));
i__31996__auto___37321 = G__37322;
continue;
} else {
}
break;
}

var G__37197 = args37195.length;
switch (G__37197) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37195.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30956__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30956__auto__)){
return or__30956__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30956__auto__,mults){
return (function (p1__37194_SHARP_){
if(cljs.core.truth_(p1__37194_SHARP_.call(null,topic))){
return p1__37194_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37194_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30956__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async37198 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async37198 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta37199){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37199 = meta37199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37200,meta37199__$1){
var self__ = this;
var _37200__$1 = this;
return (new cljs.core.async.t_cljs$core$async37198(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37199__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37200){
var self__ = this;
var _37200__$1 = this;
return self__.meta37199;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta37199","meta37199",1236560266,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async37198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37198";

cljs.core.async.t_cljs$core$async37198.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async37198");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async37198 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async37198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37199){
return (new cljs.core.async.t_cljs$core$async37198(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37199));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async37198(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33038__auto___37324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37324,mults,ensure_mult,p){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37324,mults,ensure_mult,p){
return (function (state_37272){
var state_val_37273 = (state_37272[(1)]);
if((state_val_37273 === (7))){
var inst_37268 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37274_37325 = state_37272__$1;
(statearr_37274_37325[(2)] = inst_37268);

(statearr_37274_37325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (20))){
var state_37272__$1 = state_37272;
var statearr_37275_37326 = state_37272__$1;
(statearr_37275_37326[(2)] = null);

(statearr_37275_37326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (1))){
var state_37272__$1 = state_37272;
var statearr_37276_37327 = state_37272__$1;
(statearr_37276_37327[(2)] = null);

(statearr_37276_37327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (24))){
var inst_37251 = (state_37272[(7)]);
var inst_37260 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37251);
var state_37272__$1 = state_37272;
var statearr_37277_37328 = state_37272__$1;
(statearr_37277_37328[(2)] = inst_37260);

(statearr_37277_37328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (4))){
var inst_37203 = (state_37272[(8)]);
var inst_37203__$1 = (state_37272[(2)]);
var inst_37204 = (inst_37203__$1 == null);
var state_37272__$1 = (function (){var statearr_37278 = state_37272;
(statearr_37278[(8)] = inst_37203__$1);

return statearr_37278;
})();
if(cljs.core.truth_(inst_37204)){
var statearr_37279_37329 = state_37272__$1;
(statearr_37279_37329[(1)] = (5));

} else {
var statearr_37280_37330 = state_37272__$1;
(statearr_37280_37330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (15))){
var inst_37245 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37281_37331 = state_37272__$1;
(statearr_37281_37331[(2)] = inst_37245);

(statearr_37281_37331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (21))){
var inst_37265 = (state_37272[(2)]);
var state_37272__$1 = (function (){var statearr_37282 = state_37272;
(statearr_37282[(9)] = inst_37265);

return statearr_37282;
})();
var statearr_37283_37332 = state_37272__$1;
(statearr_37283_37332[(2)] = null);

(statearr_37283_37332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (13))){
var inst_37227 = (state_37272[(10)]);
var inst_37229 = cljs.core.chunked_seq_QMARK_.call(null,inst_37227);
var state_37272__$1 = state_37272;
if(inst_37229){
var statearr_37284_37333 = state_37272__$1;
(statearr_37284_37333[(1)] = (16));

} else {
var statearr_37285_37334 = state_37272__$1;
(statearr_37285_37334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (22))){
var inst_37257 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
if(cljs.core.truth_(inst_37257)){
var statearr_37286_37335 = state_37272__$1;
(statearr_37286_37335[(1)] = (23));

} else {
var statearr_37287_37336 = state_37272__$1;
(statearr_37287_37336[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (6))){
var inst_37251 = (state_37272[(7)]);
var inst_37203 = (state_37272[(8)]);
var inst_37253 = (state_37272[(11)]);
var inst_37251__$1 = topic_fn.call(null,inst_37203);
var inst_37252 = cljs.core.deref.call(null,mults);
var inst_37253__$1 = cljs.core.get.call(null,inst_37252,inst_37251__$1);
var state_37272__$1 = (function (){var statearr_37288 = state_37272;
(statearr_37288[(7)] = inst_37251__$1);

(statearr_37288[(11)] = inst_37253__$1);

return statearr_37288;
})();
if(cljs.core.truth_(inst_37253__$1)){
var statearr_37289_37337 = state_37272__$1;
(statearr_37289_37337[(1)] = (19));

} else {
var statearr_37290_37338 = state_37272__$1;
(statearr_37290_37338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (25))){
var inst_37262 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37291_37339 = state_37272__$1;
(statearr_37291_37339[(2)] = inst_37262);

(statearr_37291_37339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (17))){
var inst_37227 = (state_37272[(10)]);
var inst_37236 = cljs.core.first.call(null,inst_37227);
var inst_37237 = cljs.core.async.muxch_STAR_.call(null,inst_37236);
var inst_37238 = cljs.core.async.close_BANG_.call(null,inst_37237);
var inst_37239 = cljs.core.next.call(null,inst_37227);
var inst_37213 = inst_37239;
var inst_37214 = null;
var inst_37215 = (0);
var inst_37216 = (0);
var state_37272__$1 = (function (){var statearr_37292 = state_37272;
(statearr_37292[(12)] = inst_37214);

(statearr_37292[(13)] = inst_37238);

(statearr_37292[(14)] = inst_37216);

(statearr_37292[(15)] = inst_37215);

(statearr_37292[(16)] = inst_37213);

return statearr_37292;
})();
var statearr_37293_37340 = state_37272__$1;
(statearr_37293_37340[(2)] = null);

(statearr_37293_37340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (3))){
var inst_37270 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37272__$1,inst_37270);
} else {
if((state_val_37273 === (12))){
var inst_37247 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37294_37341 = state_37272__$1;
(statearr_37294_37341[(2)] = inst_37247);

(statearr_37294_37341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (2))){
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37272__$1,(4),ch);
} else {
if((state_val_37273 === (23))){
var state_37272__$1 = state_37272;
var statearr_37295_37342 = state_37272__$1;
(statearr_37295_37342[(2)] = null);

(statearr_37295_37342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (19))){
var inst_37203 = (state_37272[(8)]);
var inst_37253 = (state_37272[(11)]);
var inst_37255 = cljs.core.async.muxch_STAR_.call(null,inst_37253);
var state_37272__$1 = state_37272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37272__$1,(22),inst_37255,inst_37203);
} else {
if((state_val_37273 === (11))){
var inst_37227 = (state_37272[(10)]);
var inst_37213 = (state_37272[(16)]);
var inst_37227__$1 = cljs.core.seq.call(null,inst_37213);
var state_37272__$1 = (function (){var statearr_37296 = state_37272;
(statearr_37296[(10)] = inst_37227__$1);

return statearr_37296;
})();
if(inst_37227__$1){
var statearr_37297_37343 = state_37272__$1;
(statearr_37297_37343[(1)] = (13));

} else {
var statearr_37298_37344 = state_37272__$1;
(statearr_37298_37344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (9))){
var inst_37249 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37299_37345 = state_37272__$1;
(statearr_37299_37345[(2)] = inst_37249);

(statearr_37299_37345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (5))){
var inst_37210 = cljs.core.deref.call(null,mults);
var inst_37211 = cljs.core.vals.call(null,inst_37210);
var inst_37212 = cljs.core.seq.call(null,inst_37211);
var inst_37213 = inst_37212;
var inst_37214 = null;
var inst_37215 = (0);
var inst_37216 = (0);
var state_37272__$1 = (function (){var statearr_37300 = state_37272;
(statearr_37300[(12)] = inst_37214);

(statearr_37300[(14)] = inst_37216);

(statearr_37300[(15)] = inst_37215);

(statearr_37300[(16)] = inst_37213);

return statearr_37300;
})();
var statearr_37301_37346 = state_37272__$1;
(statearr_37301_37346[(2)] = null);

(statearr_37301_37346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (14))){
var state_37272__$1 = state_37272;
var statearr_37305_37347 = state_37272__$1;
(statearr_37305_37347[(2)] = null);

(statearr_37305_37347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (16))){
var inst_37227 = (state_37272[(10)]);
var inst_37231 = cljs.core.chunk_first.call(null,inst_37227);
var inst_37232 = cljs.core.chunk_rest.call(null,inst_37227);
var inst_37233 = cljs.core.count.call(null,inst_37231);
var inst_37213 = inst_37232;
var inst_37214 = inst_37231;
var inst_37215 = inst_37233;
var inst_37216 = (0);
var state_37272__$1 = (function (){var statearr_37306 = state_37272;
(statearr_37306[(12)] = inst_37214);

(statearr_37306[(14)] = inst_37216);

(statearr_37306[(15)] = inst_37215);

(statearr_37306[(16)] = inst_37213);

return statearr_37306;
})();
var statearr_37307_37348 = state_37272__$1;
(statearr_37307_37348[(2)] = null);

(statearr_37307_37348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (10))){
var inst_37214 = (state_37272[(12)]);
var inst_37216 = (state_37272[(14)]);
var inst_37215 = (state_37272[(15)]);
var inst_37213 = (state_37272[(16)]);
var inst_37221 = cljs.core._nth.call(null,inst_37214,inst_37216);
var inst_37222 = cljs.core.async.muxch_STAR_.call(null,inst_37221);
var inst_37223 = cljs.core.async.close_BANG_.call(null,inst_37222);
var inst_37224 = (inst_37216 + (1));
var tmp37302 = inst_37214;
var tmp37303 = inst_37215;
var tmp37304 = inst_37213;
var inst_37213__$1 = tmp37304;
var inst_37214__$1 = tmp37302;
var inst_37215__$1 = tmp37303;
var inst_37216__$1 = inst_37224;
var state_37272__$1 = (function (){var statearr_37308 = state_37272;
(statearr_37308[(12)] = inst_37214__$1);

(statearr_37308[(17)] = inst_37223);

(statearr_37308[(14)] = inst_37216__$1);

(statearr_37308[(15)] = inst_37215__$1);

(statearr_37308[(16)] = inst_37213__$1);

return statearr_37308;
})();
var statearr_37309_37349 = state_37272__$1;
(statearr_37309_37349[(2)] = null);

(statearr_37309_37349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (18))){
var inst_37242 = (state_37272[(2)]);
var state_37272__$1 = state_37272;
var statearr_37310_37350 = state_37272__$1;
(statearr_37310_37350[(2)] = inst_37242);

(statearr_37310_37350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37273 === (8))){
var inst_37216 = (state_37272[(14)]);
var inst_37215 = (state_37272[(15)]);
var inst_37218 = (inst_37216 < inst_37215);
var inst_37219 = inst_37218;
var state_37272__$1 = state_37272;
if(cljs.core.truth_(inst_37219)){
var statearr_37311_37351 = state_37272__$1;
(statearr_37311_37351[(1)] = (10));

} else {
var statearr_37312_37352 = state_37272__$1;
(statearr_37312_37352[(1)] = (11));

}

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
}
}
}
}
});})(c__33038__auto___37324,mults,ensure_mult,p))
;
return ((function (switch__32973__auto__,c__33038__auto___37324,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_37316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37316[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_37316[(1)] = (1));

return statearr_37316;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_37272){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37317){if((e37317 instanceof Object)){
var ex__32977__auto__ = e37317;
var statearr_37318_37353 = state_37272;
(statearr_37318_37353[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37354 = state_37272;
state_37272 = G__37354;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_37272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_37272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37324,mults,ensure_mult,p))
})();
var state__33040__auto__ = (function (){var statearr_37319 = f__33039__auto__.call(null);
(statearr_37319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37324);

return statearr_37319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37324,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args37355 = [];
var len__31995__auto___37358 = arguments.length;
var i__31996__auto___37359 = (0);
while(true){
if((i__31996__auto___37359 < len__31995__auto___37358)){
args37355.push((arguments[i__31996__auto___37359]));

var G__37360 = (i__31996__auto___37359 + (1));
i__31996__auto___37359 = G__37360;
continue;
} else {
}
break;
}

var G__37357 = args37355.length;
switch (G__37357) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37355.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args37362 = [];
var len__31995__auto___37365 = arguments.length;
var i__31996__auto___37366 = (0);
while(true){
if((i__31996__auto___37366 < len__31995__auto___37365)){
args37362.push((arguments[i__31996__auto___37366]));

var G__37367 = (i__31996__auto___37366 + (1));
i__31996__auto___37366 = G__37367;
continue;
} else {
}
break;
}

var G__37364 = args37362.length;
switch (G__37364) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37362.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args37369 = [];
var len__31995__auto___37440 = arguments.length;
var i__31996__auto___37441 = (0);
while(true){
if((i__31996__auto___37441 < len__31995__auto___37440)){
args37369.push((arguments[i__31996__auto___37441]));

var G__37442 = (i__31996__auto___37441 + (1));
i__31996__auto___37441 = G__37442;
continue;
} else {
}
break;
}

var G__37371 = args37369.length;
switch (G__37371) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37369.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33038__auto___37444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37444,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37444,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37410){
var state_val_37411 = (state_37410[(1)]);
if((state_val_37411 === (7))){
var state_37410__$1 = state_37410;
var statearr_37412_37445 = state_37410__$1;
(statearr_37412_37445[(2)] = null);

(statearr_37412_37445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (1))){
var state_37410__$1 = state_37410;
var statearr_37413_37446 = state_37410__$1;
(statearr_37413_37446[(2)] = null);

(statearr_37413_37446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (4))){
var inst_37374 = (state_37410[(7)]);
var inst_37376 = (inst_37374 < cnt);
var state_37410__$1 = state_37410;
if(cljs.core.truth_(inst_37376)){
var statearr_37414_37447 = state_37410__$1;
(statearr_37414_37447[(1)] = (6));

} else {
var statearr_37415_37448 = state_37410__$1;
(statearr_37415_37448[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (15))){
var inst_37406 = (state_37410[(2)]);
var state_37410__$1 = state_37410;
var statearr_37416_37449 = state_37410__$1;
(statearr_37416_37449[(2)] = inst_37406);

(statearr_37416_37449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (13))){
var inst_37399 = cljs.core.async.close_BANG_.call(null,out);
var state_37410__$1 = state_37410;
var statearr_37417_37450 = state_37410__$1;
(statearr_37417_37450[(2)] = inst_37399);

(statearr_37417_37450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (6))){
var state_37410__$1 = state_37410;
var statearr_37418_37451 = state_37410__$1;
(statearr_37418_37451[(2)] = null);

(statearr_37418_37451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (3))){
var inst_37408 = (state_37410[(2)]);
var state_37410__$1 = state_37410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37410__$1,inst_37408);
} else {
if((state_val_37411 === (12))){
var inst_37396 = (state_37410[(8)]);
var inst_37396__$1 = (state_37410[(2)]);
var inst_37397 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37396__$1);
var state_37410__$1 = (function (){var statearr_37419 = state_37410;
(statearr_37419[(8)] = inst_37396__$1);

return statearr_37419;
})();
if(cljs.core.truth_(inst_37397)){
var statearr_37420_37452 = state_37410__$1;
(statearr_37420_37452[(1)] = (13));

} else {
var statearr_37421_37453 = state_37410__$1;
(statearr_37421_37453[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (2))){
var inst_37373 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37374 = (0);
var state_37410__$1 = (function (){var statearr_37422 = state_37410;
(statearr_37422[(7)] = inst_37374);

(statearr_37422[(9)] = inst_37373);

return statearr_37422;
})();
var statearr_37423_37454 = state_37410__$1;
(statearr_37423_37454[(2)] = null);

(statearr_37423_37454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (11))){
var inst_37374 = (state_37410[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37410,(10),Object,null,(9));
var inst_37383 = chs__$1.call(null,inst_37374);
var inst_37384 = done.call(null,inst_37374);
var inst_37385 = cljs.core.async.take_BANG_.call(null,inst_37383,inst_37384);
var state_37410__$1 = state_37410;
var statearr_37424_37455 = state_37410__$1;
(statearr_37424_37455[(2)] = inst_37385);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (9))){
var inst_37374 = (state_37410[(7)]);
var inst_37387 = (state_37410[(2)]);
var inst_37388 = (inst_37374 + (1));
var inst_37374__$1 = inst_37388;
var state_37410__$1 = (function (){var statearr_37425 = state_37410;
(statearr_37425[(7)] = inst_37374__$1);

(statearr_37425[(10)] = inst_37387);

return statearr_37425;
})();
var statearr_37426_37456 = state_37410__$1;
(statearr_37426_37456[(2)] = null);

(statearr_37426_37456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (5))){
var inst_37394 = (state_37410[(2)]);
var state_37410__$1 = (function (){var statearr_37427 = state_37410;
(statearr_37427[(11)] = inst_37394);

return statearr_37427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37410__$1,(12),dchan);
} else {
if((state_val_37411 === (14))){
var inst_37396 = (state_37410[(8)]);
var inst_37401 = cljs.core.apply.call(null,f,inst_37396);
var state_37410__$1 = state_37410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37410__$1,(16),out,inst_37401);
} else {
if((state_val_37411 === (16))){
var inst_37403 = (state_37410[(2)]);
var state_37410__$1 = (function (){var statearr_37428 = state_37410;
(statearr_37428[(12)] = inst_37403);

return statearr_37428;
})();
var statearr_37429_37457 = state_37410__$1;
(statearr_37429_37457[(2)] = null);

(statearr_37429_37457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (10))){
var inst_37378 = (state_37410[(2)]);
var inst_37379 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37410__$1 = (function (){var statearr_37430 = state_37410;
(statearr_37430[(13)] = inst_37378);

return statearr_37430;
})();
var statearr_37431_37458 = state_37410__$1;
(statearr_37431_37458[(2)] = inst_37379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37411 === (8))){
var inst_37392 = (state_37410[(2)]);
var state_37410__$1 = state_37410;
var statearr_37432_37459 = state_37410__$1;
(statearr_37432_37459[(2)] = inst_37392);

(statearr_37432_37459[(1)] = (5));


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
});})(c__33038__auto___37444,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32973__auto__,c__33038__auto___37444,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_37436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37436[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_37436[(1)] = (1));

return statearr_37436;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_37410){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37437){if((e37437 instanceof Object)){
var ex__32977__auto__ = e37437;
var statearr_37438_37460 = state_37410;
(statearr_37438_37460[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37461 = state_37410;
state_37410 = G__37461;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_37410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_37410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37444,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33040__auto__ = (function (){var statearr_37439 = f__33039__auto__.call(null);
(statearr_37439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37444);

return statearr_37439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37444,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args37463 = [];
var len__31995__auto___37519 = arguments.length;
var i__31996__auto___37520 = (0);
while(true){
if((i__31996__auto___37520 < len__31995__auto___37519)){
args37463.push((arguments[i__31996__auto___37520]));

var G__37521 = (i__31996__auto___37520 + (1));
i__31996__auto___37520 = G__37521;
continue;
} else {
}
break;
}

var G__37465 = args37463.length;
switch (G__37465) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37463.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33038__auto___37523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37523,out){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37523,out){
return (function (state_37495){
var state_val_37496 = (state_37495[(1)]);
if((state_val_37496 === (7))){
var inst_37474 = (state_37495[(7)]);
var inst_37475 = (state_37495[(8)]);
var inst_37474__$1 = (state_37495[(2)]);
var inst_37475__$1 = cljs.core.nth.call(null,inst_37474__$1,(0),null);
var inst_37476 = cljs.core.nth.call(null,inst_37474__$1,(1),null);
var inst_37477 = (inst_37475__$1 == null);
var state_37495__$1 = (function (){var statearr_37497 = state_37495;
(statearr_37497[(7)] = inst_37474__$1);

(statearr_37497[(9)] = inst_37476);

(statearr_37497[(8)] = inst_37475__$1);

return statearr_37497;
})();
if(cljs.core.truth_(inst_37477)){
var statearr_37498_37524 = state_37495__$1;
(statearr_37498_37524[(1)] = (8));

} else {
var statearr_37499_37525 = state_37495__$1;
(statearr_37499_37525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (1))){
var inst_37466 = cljs.core.vec.call(null,chs);
var inst_37467 = inst_37466;
var state_37495__$1 = (function (){var statearr_37500 = state_37495;
(statearr_37500[(10)] = inst_37467);

return statearr_37500;
})();
var statearr_37501_37526 = state_37495__$1;
(statearr_37501_37526[(2)] = null);

(statearr_37501_37526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (4))){
var inst_37467 = (state_37495[(10)]);
var state_37495__$1 = state_37495;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37495__$1,(7),inst_37467);
} else {
if((state_val_37496 === (6))){
var inst_37491 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
var statearr_37502_37527 = state_37495__$1;
(statearr_37502_37527[(2)] = inst_37491);

(statearr_37502_37527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (3))){
var inst_37493 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37495__$1,inst_37493);
} else {
if((state_val_37496 === (2))){
var inst_37467 = (state_37495[(10)]);
var inst_37469 = cljs.core.count.call(null,inst_37467);
var inst_37470 = (inst_37469 > (0));
var state_37495__$1 = state_37495;
if(cljs.core.truth_(inst_37470)){
var statearr_37504_37528 = state_37495__$1;
(statearr_37504_37528[(1)] = (4));

} else {
var statearr_37505_37529 = state_37495__$1;
(statearr_37505_37529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (11))){
var inst_37467 = (state_37495[(10)]);
var inst_37484 = (state_37495[(2)]);
var tmp37503 = inst_37467;
var inst_37467__$1 = tmp37503;
var state_37495__$1 = (function (){var statearr_37506 = state_37495;
(statearr_37506[(10)] = inst_37467__$1);

(statearr_37506[(11)] = inst_37484);

return statearr_37506;
})();
var statearr_37507_37530 = state_37495__$1;
(statearr_37507_37530[(2)] = null);

(statearr_37507_37530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (9))){
var inst_37475 = (state_37495[(8)]);
var state_37495__$1 = state_37495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37495__$1,(11),out,inst_37475);
} else {
if((state_val_37496 === (5))){
var inst_37489 = cljs.core.async.close_BANG_.call(null,out);
var state_37495__$1 = state_37495;
var statearr_37508_37531 = state_37495__$1;
(statearr_37508_37531[(2)] = inst_37489);

(statearr_37508_37531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (10))){
var inst_37487 = (state_37495[(2)]);
var state_37495__$1 = state_37495;
var statearr_37509_37532 = state_37495__$1;
(statearr_37509_37532[(2)] = inst_37487);

(statearr_37509_37532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37496 === (8))){
var inst_37474 = (state_37495[(7)]);
var inst_37476 = (state_37495[(9)]);
var inst_37475 = (state_37495[(8)]);
var inst_37467 = (state_37495[(10)]);
var inst_37479 = (function (){var cs = inst_37467;
var vec__37472 = inst_37474;
var v = inst_37475;
var c = inst_37476;
return ((function (cs,vec__37472,v,c,inst_37474,inst_37476,inst_37475,inst_37467,state_val_37496,c__33038__auto___37523,out){
return (function (p1__37462_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37462_SHARP_);
});
;})(cs,vec__37472,v,c,inst_37474,inst_37476,inst_37475,inst_37467,state_val_37496,c__33038__auto___37523,out))
})();
var inst_37480 = cljs.core.filterv.call(null,inst_37479,inst_37467);
var inst_37467__$1 = inst_37480;
var state_37495__$1 = (function (){var statearr_37510 = state_37495;
(statearr_37510[(10)] = inst_37467__$1);

return statearr_37510;
})();
var statearr_37511_37533 = state_37495__$1;
(statearr_37511_37533[(2)] = null);

(statearr_37511_37533[(1)] = (2));


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
});})(c__33038__auto___37523,out))
;
return ((function (switch__32973__auto__,c__33038__auto___37523,out){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_37515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37515[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_37515[(1)] = (1));

return statearr_37515;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_37495){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37516){if((e37516 instanceof Object)){
var ex__32977__auto__ = e37516;
var statearr_37517_37534 = state_37495;
(statearr_37517_37534[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37535 = state_37495;
state_37495 = G__37535;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_37495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_37495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37523,out))
})();
var state__33040__auto__ = (function (){var statearr_37518 = f__33039__auto__.call(null);
(statearr_37518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37523);

return statearr_37518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37523,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args37536 = [];
var len__31995__auto___37585 = arguments.length;
var i__31996__auto___37586 = (0);
while(true){
if((i__31996__auto___37586 < len__31995__auto___37585)){
args37536.push((arguments[i__31996__auto___37586]));

var G__37587 = (i__31996__auto___37586 + (1));
i__31996__auto___37586 = G__37587;
continue;
} else {
}
break;
}

var G__37538 = args37536.length;
switch (G__37538) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37536.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33038__auto___37589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37589,out){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37589,out){
return (function (state_37562){
var state_val_37563 = (state_37562[(1)]);
if((state_val_37563 === (7))){
var inst_37544 = (state_37562[(7)]);
var inst_37544__$1 = (state_37562[(2)]);
var inst_37545 = (inst_37544__$1 == null);
var inst_37546 = cljs.core.not.call(null,inst_37545);
var state_37562__$1 = (function (){var statearr_37564 = state_37562;
(statearr_37564[(7)] = inst_37544__$1);

return statearr_37564;
})();
if(inst_37546){
var statearr_37565_37590 = state_37562__$1;
(statearr_37565_37590[(1)] = (8));

} else {
var statearr_37566_37591 = state_37562__$1;
(statearr_37566_37591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (1))){
var inst_37539 = (0);
var state_37562__$1 = (function (){var statearr_37567 = state_37562;
(statearr_37567[(8)] = inst_37539);

return statearr_37567;
})();
var statearr_37568_37592 = state_37562__$1;
(statearr_37568_37592[(2)] = null);

(statearr_37568_37592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (4))){
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37562__$1,(7),ch);
} else {
if((state_val_37563 === (6))){
var inst_37557 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37569_37593 = state_37562__$1;
(statearr_37569_37593[(2)] = inst_37557);

(statearr_37569_37593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (3))){
var inst_37559 = (state_37562[(2)]);
var inst_37560 = cljs.core.async.close_BANG_.call(null,out);
var state_37562__$1 = (function (){var statearr_37570 = state_37562;
(statearr_37570[(9)] = inst_37559);

return statearr_37570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37562__$1,inst_37560);
} else {
if((state_val_37563 === (2))){
var inst_37539 = (state_37562[(8)]);
var inst_37541 = (inst_37539 < n);
var state_37562__$1 = state_37562;
if(cljs.core.truth_(inst_37541)){
var statearr_37571_37594 = state_37562__$1;
(statearr_37571_37594[(1)] = (4));

} else {
var statearr_37572_37595 = state_37562__$1;
(statearr_37572_37595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (11))){
var inst_37539 = (state_37562[(8)]);
var inst_37549 = (state_37562[(2)]);
var inst_37550 = (inst_37539 + (1));
var inst_37539__$1 = inst_37550;
var state_37562__$1 = (function (){var statearr_37573 = state_37562;
(statearr_37573[(8)] = inst_37539__$1);

(statearr_37573[(10)] = inst_37549);

return statearr_37573;
})();
var statearr_37574_37596 = state_37562__$1;
(statearr_37574_37596[(2)] = null);

(statearr_37574_37596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (9))){
var state_37562__$1 = state_37562;
var statearr_37575_37597 = state_37562__$1;
(statearr_37575_37597[(2)] = null);

(statearr_37575_37597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (5))){
var state_37562__$1 = state_37562;
var statearr_37576_37598 = state_37562__$1;
(statearr_37576_37598[(2)] = null);

(statearr_37576_37598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (10))){
var inst_37554 = (state_37562[(2)]);
var state_37562__$1 = state_37562;
var statearr_37577_37599 = state_37562__$1;
(statearr_37577_37599[(2)] = inst_37554);

(statearr_37577_37599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37563 === (8))){
var inst_37544 = (state_37562[(7)]);
var state_37562__$1 = state_37562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37562__$1,(11),out,inst_37544);
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
});})(c__33038__auto___37589,out))
;
return ((function (switch__32973__auto__,c__33038__auto___37589,out){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_37581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37581[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_37581[(1)] = (1));

return statearr_37581;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_37562){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37582){if((e37582 instanceof Object)){
var ex__32977__auto__ = e37582;
var statearr_37583_37600 = state_37562;
(statearr_37583_37600[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37601 = state_37562;
state_37562 = G__37601;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_37562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_37562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37589,out))
})();
var state__33040__auto__ = (function (){var statearr_37584 = f__33039__auto__.call(null);
(statearr_37584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37589);

return statearr_37584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37589,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37609 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async37609 = (function (map_LT_,f,ch,meta37610){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37610 = meta37610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37611,meta37610__$1){
var self__ = this;
var _37611__$1 = this;
return (new cljs.core.async.t_cljs$core$async37609(self__.map_LT_,self__.f,self__.ch,meta37610__$1));
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37611){
var self__ = this;
var _37611__$1 = this;
return self__.meta37610;
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async37612 = (function (map_LT_,f,ch,meta37610,_,fn1,meta37613){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta37610 = meta37610;
this._ = _;
this.fn1 = fn1;
this.meta37613 = meta37613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37614,meta37613__$1){
var self__ = this;
var _37614__$1 = this;
return (new cljs.core.async.t_cljs$core$async37612(self__.map_LT_,self__.f,self__.ch,self__.meta37610,self__._,self__.fn1,meta37613__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37614){
var self__ = this;
var _37614__$1 = this;
return self__.meta37613;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37602_SHARP_){
return f1.call(null,(((p1__37602_SHARP_ == null))?null:self__.f.call(null,p1__37602_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37612.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37610","meta37610",-849051336,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37609","cljs.core.async/t_cljs$core$async37609",-964774131,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37613","meta37613",-1773814536,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37612.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37612";

cljs.core.async.t_cljs$core$async37612.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async37612");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async37612 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37612(map_LT___$1,f__$1,ch__$1,meta37610__$1,___$2,fn1__$1,meta37613){
return (new cljs.core.async.t_cljs$core$async37612(map_LT___$1,f__$1,ch__$1,meta37610__$1,___$2,fn1__$1,meta37613));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37612(self__.map_LT_,self__.f,self__.ch,self__.meta37610,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30944__auto__ = ret;
if(cljs.core.truth_(and__30944__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30944__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37610","meta37610",-849051336,null)], null);
});

cljs.core.async.t_cljs$core$async37609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37609";

cljs.core.async.t_cljs$core$async37609.cljs$lang$ctorPrWriter = (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async37609");
});

cljs.core.async.__GT_t_cljs$core$async37609 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37609(map_LT___$1,f__$1,ch__$1,meta37610){
return (new cljs.core.async.t_cljs$core$async37609(map_LT___$1,f__$1,ch__$1,meta37610));
});

}

return (new cljs.core.async.t_cljs$core$async37609(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37618 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async37618 = (function (map_GT_,f,ch,meta37619){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta37619 = meta37619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37620,meta37619__$1){
var self__ = this;
var _37620__$1 = this;
return (new cljs.core.async.t_cljs$core$async37618(self__.map_GT_,self__.f,self__.ch,meta37619__$1));
});

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37620){
var self__ = this;
var _37620__$1 = this;
return self__.meta37619;
});

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37619","meta37619",-629507050,null)], null);
});

cljs.core.async.t_cljs$core$async37618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37618";

cljs.core.async.t_cljs$core$async37618.cljs$lang$ctorPrWriter = (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async37618");
});

cljs.core.async.__GT_t_cljs$core$async37618 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37618(map_GT___$1,f__$1,ch__$1,meta37619){
return (new cljs.core.async.t_cljs$core$async37618(map_GT___$1,f__$1,ch__$1,meta37619));
});

}

return (new cljs.core.async.t_cljs$core$async37618(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37624 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t_cljs$core$async37624 = (function (filter_GT_,p,ch,meta37625){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta37625 = meta37625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37626,meta37625__$1){
var self__ = this;
var _37626__$1 = this;
return (new cljs.core.async.t_cljs$core$async37624(self__.filter_GT_,self__.p,self__.ch,meta37625__$1));
});

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37626){
var self__ = this;
var _37626__$1 = this;
return self__.meta37625;
});

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async37624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37625","meta37625",-20659477,null)], null);
});

cljs.core.async.t_cljs$core$async37624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37624";

cljs.core.async.t_cljs$core$async37624.cljs$lang$ctorPrWriter = (function (this__31535__auto__,writer__31536__auto__,opt__31537__auto__){
return cljs.core._write.call(null,writer__31536__auto__,"cljs.core.async/t_cljs$core$async37624");
});

cljs.core.async.__GT_t_cljs$core$async37624 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37624(filter_GT___$1,p__$1,ch__$1,meta37625){
return (new cljs.core.async.t_cljs$core$async37624(filter_GT___$1,p__$1,ch__$1,meta37625));
});

}

return (new cljs.core.async.t_cljs$core$async37624(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args37627 = [];
var len__31995__auto___37671 = arguments.length;
var i__31996__auto___37672 = (0);
while(true){
if((i__31996__auto___37672 < len__31995__auto___37671)){
args37627.push((arguments[i__31996__auto___37672]));

var G__37673 = (i__31996__auto___37672 + (1));
i__31996__auto___37672 = G__37673;
continue;
} else {
}
break;
}

var G__37629 = args37627.length;
switch (G__37629) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37627.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33038__auto___37675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37675,out){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37675,out){
return (function (state_37650){
var state_val_37651 = (state_37650[(1)]);
if((state_val_37651 === (7))){
var inst_37646 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37652_37676 = state_37650__$1;
(statearr_37652_37676[(2)] = inst_37646);

(statearr_37652_37676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (1))){
var state_37650__$1 = state_37650;
var statearr_37653_37677 = state_37650__$1;
(statearr_37653_37677[(2)] = null);

(statearr_37653_37677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (4))){
var inst_37632 = (state_37650[(7)]);
var inst_37632__$1 = (state_37650[(2)]);
var inst_37633 = (inst_37632__$1 == null);
var state_37650__$1 = (function (){var statearr_37654 = state_37650;
(statearr_37654[(7)] = inst_37632__$1);

return statearr_37654;
})();
if(cljs.core.truth_(inst_37633)){
var statearr_37655_37678 = state_37650__$1;
(statearr_37655_37678[(1)] = (5));

} else {
var statearr_37656_37679 = state_37650__$1;
(statearr_37656_37679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (6))){
var inst_37632 = (state_37650[(7)]);
var inst_37637 = p.call(null,inst_37632);
var state_37650__$1 = state_37650;
if(cljs.core.truth_(inst_37637)){
var statearr_37657_37680 = state_37650__$1;
(statearr_37657_37680[(1)] = (8));

} else {
var statearr_37658_37681 = state_37650__$1;
(statearr_37658_37681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (3))){
var inst_37648 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37650__$1,inst_37648);
} else {
if((state_val_37651 === (2))){
var state_37650__$1 = state_37650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37650__$1,(4),ch);
} else {
if((state_val_37651 === (11))){
var inst_37640 = (state_37650[(2)]);
var state_37650__$1 = state_37650;
var statearr_37659_37682 = state_37650__$1;
(statearr_37659_37682[(2)] = inst_37640);

(statearr_37659_37682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (9))){
var state_37650__$1 = state_37650;
var statearr_37660_37683 = state_37650__$1;
(statearr_37660_37683[(2)] = null);

(statearr_37660_37683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (5))){
var inst_37635 = cljs.core.async.close_BANG_.call(null,out);
var state_37650__$1 = state_37650;
var statearr_37661_37684 = state_37650__$1;
(statearr_37661_37684[(2)] = inst_37635);

(statearr_37661_37684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (10))){
var inst_37643 = (state_37650[(2)]);
var state_37650__$1 = (function (){var statearr_37662 = state_37650;
(statearr_37662[(8)] = inst_37643);

return statearr_37662;
})();
var statearr_37663_37685 = state_37650__$1;
(statearr_37663_37685[(2)] = null);

(statearr_37663_37685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37651 === (8))){
var inst_37632 = (state_37650[(7)]);
var state_37650__$1 = state_37650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37650__$1,(11),out,inst_37632);
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
});})(c__33038__auto___37675,out))
;
return ((function (switch__32973__auto__,c__33038__auto___37675,out){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_37667 = [null,null,null,null,null,null,null,null,null];
(statearr_37667[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_37667[(1)] = (1));

return statearr_37667;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_37650){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37668){if((e37668 instanceof Object)){
var ex__32977__auto__ = e37668;
var statearr_37669_37686 = state_37650;
(statearr_37669_37686[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37687 = state_37650;
state_37650 = G__37687;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_37650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_37650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37675,out))
})();
var state__33040__auto__ = (function (){var statearr_37670 = f__33039__auto__.call(null);
(statearr_37670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37675);

return statearr_37670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37675,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args37688 = [];
var len__31995__auto___37691 = arguments.length;
var i__31996__auto___37692 = (0);
while(true){
if((i__31996__auto___37692 < len__31995__auto___37691)){
args37688.push((arguments[i__31996__auto___37692]));

var G__37693 = (i__31996__auto___37692 + (1));
i__31996__auto___37692 = G__37693;
continue;
} else {
}
break;
}

var G__37690 = args37688.length;
switch (G__37690) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37688.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto__){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto__){
return (function (state_37860){
var state_val_37861 = (state_37860[(1)]);
if((state_val_37861 === (7))){
var inst_37856 = (state_37860[(2)]);
var state_37860__$1 = state_37860;
var statearr_37862_37903 = state_37860__$1;
(statearr_37862_37903[(2)] = inst_37856);

(statearr_37862_37903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (20))){
var inst_37826 = (state_37860[(7)]);
var inst_37837 = (state_37860[(2)]);
var inst_37838 = cljs.core.next.call(null,inst_37826);
var inst_37812 = inst_37838;
var inst_37813 = null;
var inst_37814 = (0);
var inst_37815 = (0);
var state_37860__$1 = (function (){var statearr_37863 = state_37860;
(statearr_37863[(8)] = inst_37815);

(statearr_37863[(9)] = inst_37812);

(statearr_37863[(10)] = inst_37813);

(statearr_37863[(11)] = inst_37837);

(statearr_37863[(12)] = inst_37814);

return statearr_37863;
})();
var statearr_37864_37904 = state_37860__$1;
(statearr_37864_37904[(2)] = null);

(statearr_37864_37904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (1))){
var state_37860__$1 = state_37860;
var statearr_37865_37905 = state_37860__$1;
(statearr_37865_37905[(2)] = null);

(statearr_37865_37905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (4))){
var inst_37801 = (state_37860[(13)]);
var inst_37801__$1 = (state_37860[(2)]);
var inst_37802 = (inst_37801__$1 == null);
var state_37860__$1 = (function (){var statearr_37866 = state_37860;
(statearr_37866[(13)] = inst_37801__$1);

return statearr_37866;
})();
if(cljs.core.truth_(inst_37802)){
var statearr_37867_37906 = state_37860__$1;
(statearr_37867_37906[(1)] = (5));

} else {
var statearr_37868_37907 = state_37860__$1;
(statearr_37868_37907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (15))){
var state_37860__$1 = state_37860;
var statearr_37872_37908 = state_37860__$1;
(statearr_37872_37908[(2)] = null);

(statearr_37872_37908[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (21))){
var state_37860__$1 = state_37860;
var statearr_37873_37909 = state_37860__$1;
(statearr_37873_37909[(2)] = null);

(statearr_37873_37909[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (13))){
var inst_37815 = (state_37860[(8)]);
var inst_37812 = (state_37860[(9)]);
var inst_37813 = (state_37860[(10)]);
var inst_37814 = (state_37860[(12)]);
var inst_37822 = (state_37860[(2)]);
var inst_37823 = (inst_37815 + (1));
var tmp37869 = inst_37812;
var tmp37870 = inst_37813;
var tmp37871 = inst_37814;
var inst_37812__$1 = tmp37869;
var inst_37813__$1 = tmp37870;
var inst_37814__$1 = tmp37871;
var inst_37815__$1 = inst_37823;
var state_37860__$1 = (function (){var statearr_37874 = state_37860;
(statearr_37874[(8)] = inst_37815__$1);

(statearr_37874[(9)] = inst_37812__$1);

(statearr_37874[(10)] = inst_37813__$1);

(statearr_37874[(14)] = inst_37822);

(statearr_37874[(12)] = inst_37814__$1);

return statearr_37874;
})();
var statearr_37875_37910 = state_37860__$1;
(statearr_37875_37910[(2)] = null);

(statearr_37875_37910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (22))){
var state_37860__$1 = state_37860;
var statearr_37876_37911 = state_37860__$1;
(statearr_37876_37911[(2)] = null);

(statearr_37876_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (6))){
var inst_37801 = (state_37860[(13)]);
var inst_37810 = f.call(null,inst_37801);
var inst_37811 = cljs.core.seq.call(null,inst_37810);
var inst_37812 = inst_37811;
var inst_37813 = null;
var inst_37814 = (0);
var inst_37815 = (0);
var state_37860__$1 = (function (){var statearr_37877 = state_37860;
(statearr_37877[(8)] = inst_37815);

(statearr_37877[(9)] = inst_37812);

(statearr_37877[(10)] = inst_37813);

(statearr_37877[(12)] = inst_37814);

return statearr_37877;
})();
var statearr_37878_37912 = state_37860__$1;
(statearr_37878_37912[(2)] = null);

(statearr_37878_37912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (17))){
var inst_37826 = (state_37860[(7)]);
var inst_37830 = cljs.core.chunk_first.call(null,inst_37826);
var inst_37831 = cljs.core.chunk_rest.call(null,inst_37826);
var inst_37832 = cljs.core.count.call(null,inst_37830);
var inst_37812 = inst_37831;
var inst_37813 = inst_37830;
var inst_37814 = inst_37832;
var inst_37815 = (0);
var state_37860__$1 = (function (){var statearr_37879 = state_37860;
(statearr_37879[(8)] = inst_37815);

(statearr_37879[(9)] = inst_37812);

(statearr_37879[(10)] = inst_37813);

(statearr_37879[(12)] = inst_37814);

return statearr_37879;
})();
var statearr_37880_37913 = state_37860__$1;
(statearr_37880_37913[(2)] = null);

(statearr_37880_37913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (3))){
var inst_37858 = (state_37860[(2)]);
var state_37860__$1 = state_37860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37860__$1,inst_37858);
} else {
if((state_val_37861 === (12))){
var inst_37846 = (state_37860[(2)]);
var state_37860__$1 = state_37860;
var statearr_37881_37914 = state_37860__$1;
(statearr_37881_37914[(2)] = inst_37846);

(statearr_37881_37914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (2))){
var state_37860__$1 = state_37860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37860__$1,(4),in$);
} else {
if((state_val_37861 === (23))){
var inst_37854 = (state_37860[(2)]);
var state_37860__$1 = state_37860;
var statearr_37882_37915 = state_37860__$1;
(statearr_37882_37915[(2)] = inst_37854);

(statearr_37882_37915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (19))){
var inst_37841 = (state_37860[(2)]);
var state_37860__$1 = state_37860;
var statearr_37883_37916 = state_37860__$1;
(statearr_37883_37916[(2)] = inst_37841);

(statearr_37883_37916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (11))){
var inst_37812 = (state_37860[(9)]);
var inst_37826 = (state_37860[(7)]);
var inst_37826__$1 = cljs.core.seq.call(null,inst_37812);
var state_37860__$1 = (function (){var statearr_37884 = state_37860;
(statearr_37884[(7)] = inst_37826__$1);

return statearr_37884;
})();
if(inst_37826__$1){
var statearr_37885_37917 = state_37860__$1;
(statearr_37885_37917[(1)] = (14));

} else {
var statearr_37886_37918 = state_37860__$1;
(statearr_37886_37918[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (9))){
var inst_37848 = (state_37860[(2)]);
var inst_37849 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37860__$1 = (function (){var statearr_37887 = state_37860;
(statearr_37887[(15)] = inst_37848);

return statearr_37887;
})();
if(cljs.core.truth_(inst_37849)){
var statearr_37888_37919 = state_37860__$1;
(statearr_37888_37919[(1)] = (21));

} else {
var statearr_37889_37920 = state_37860__$1;
(statearr_37889_37920[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (5))){
var inst_37804 = cljs.core.async.close_BANG_.call(null,out);
var state_37860__$1 = state_37860;
var statearr_37890_37921 = state_37860__$1;
(statearr_37890_37921[(2)] = inst_37804);

(statearr_37890_37921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (14))){
var inst_37826 = (state_37860[(7)]);
var inst_37828 = cljs.core.chunked_seq_QMARK_.call(null,inst_37826);
var state_37860__$1 = state_37860;
if(inst_37828){
var statearr_37891_37922 = state_37860__$1;
(statearr_37891_37922[(1)] = (17));

} else {
var statearr_37892_37923 = state_37860__$1;
(statearr_37892_37923[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (16))){
var inst_37844 = (state_37860[(2)]);
var state_37860__$1 = state_37860;
var statearr_37893_37924 = state_37860__$1;
(statearr_37893_37924[(2)] = inst_37844);

(statearr_37893_37924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37861 === (10))){
var inst_37815 = (state_37860[(8)]);
var inst_37813 = (state_37860[(10)]);
var inst_37820 = cljs.core._nth.call(null,inst_37813,inst_37815);
var state_37860__$1 = state_37860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37860__$1,(13),out,inst_37820);
} else {
if((state_val_37861 === (18))){
var inst_37826 = (state_37860[(7)]);
var inst_37835 = cljs.core.first.call(null,inst_37826);
var state_37860__$1 = state_37860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37860__$1,(20),out,inst_37835);
} else {
if((state_val_37861 === (8))){
var inst_37815 = (state_37860[(8)]);
var inst_37814 = (state_37860[(12)]);
var inst_37817 = (inst_37815 < inst_37814);
var inst_37818 = inst_37817;
var state_37860__$1 = state_37860;
if(cljs.core.truth_(inst_37818)){
var statearr_37894_37925 = state_37860__$1;
(statearr_37894_37925[(1)] = (10));

} else {
var statearr_37895_37926 = state_37860__$1;
(statearr_37895_37926[(1)] = (11));

}

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
}
}
});})(c__33038__auto__))
;
return ((function (switch__32973__auto__,c__33038__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_37899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37899[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__);

(statearr_37899[(1)] = (1));

return statearr_37899;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____1 = (function (state_37860){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37900){if((e37900 instanceof Object)){
var ex__32977__auto__ = e37900;
var statearr_37901_37927 = state_37860;
(statearr_37901_37927[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37928 = state_37860;
state_37860 = G__37928;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__ = function(state_37860){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____1.call(this,state_37860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto__))
})();
var state__33040__auto__ = (function (){var statearr_37902 = f__33039__auto__.call(null);
(statearr_37902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto__);

return statearr_37902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto__))
);

return c__33038__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args37929 = [];
var len__31995__auto___37932 = arguments.length;
var i__31996__auto___37933 = (0);
while(true){
if((i__31996__auto___37933 < len__31995__auto___37932)){
args37929.push((arguments[i__31996__auto___37933]));

var G__37934 = (i__31996__auto___37933 + (1));
i__31996__auto___37933 = G__37934;
continue;
} else {
}
break;
}

var G__37931 = args37929.length;
switch (G__37931) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37929.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args37936 = [];
var len__31995__auto___37939 = arguments.length;
var i__31996__auto___37940 = (0);
while(true){
if((i__31996__auto___37940 < len__31995__auto___37939)){
args37936.push((arguments[i__31996__auto___37940]));

var G__37941 = (i__31996__auto___37940 + (1));
i__31996__auto___37940 = G__37941;
continue;
} else {
}
break;
}

var G__37938 = args37936.length;
switch (G__37938) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37936.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args37943 = [];
var len__31995__auto___37994 = arguments.length;
var i__31996__auto___37995 = (0);
while(true){
if((i__31996__auto___37995 < len__31995__auto___37994)){
args37943.push((arguments[i__31996__auto___37995]));

var G__37996 = (i__31996__auto___37995 + (1));
i__31996__auto___37995 = G__37996;
continue;
} else {
}
break;
}

var G__37945 = args37943.length;
switch (G__37945) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37943.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33038__auto___37998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___37998,out){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___37998,out){
return (function (state_37969){
var state_val_37970 = (state_37969[(1)]);
if((state_val_37970 === (7))){
var inst_37964 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37971_37999 = state_37969__$1;
(statearr_37971_37999[(2)] = inst_37964);

(statearr_37971_37999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (1))){
var inst_37946 = null;
var state_37969__$1 = (function (){var statearr_37972 = state_37969;
(statearr_37972[(7)] = inst_37946);

return statearr_37972;
})();
var statearr_37973_38000 = state_37969__$1;
(statearr_37973_38000[(2)] = null);

(statearr_37973_38000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (4))){
var inst_37949 = (state_37969[(8)]);
var inst_37949__$1 = (state_37969[(2)]);
var inst_37950 = (inst_37949__$1 == null);
var inst_37951 = cljs.core.not.call(null,inst_37950);
var state_37969__$1 = (function (){var statearr_37974 = state_37969;
(statearr_37974[(8)] = inst_37949__$1);

return statearr_37974;
})();
if(inst_37951){
var statearr_37975_38001 = state_37969__$1;
(statearr_37975_38001[(1)] = (5));

} else {
var statearr_37976_38002 = state_37969__$1;
(statearr_37976_38002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (6))){
var state_37969__$1 = state_37969;
var statearr_37977_38003 = state_37969__$1;
(statearr_37977_38003[(2)] = null);

(statearr_37977_38003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (3))){
var inst_37966 = (state_37969[(2)]);
var inst_37967 = cljs.core.async.close_BANG_.call(null,out);
var state_37969__$1 = (function (){var statearr_37978 = state_37969;
(statearr_37978[(9)] = inst_37966);

return statearr_37978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37969__$1,inst_37967);
} else {
if((state_val_37970 === (2))){
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37969__$1,(4),ch);
} else {
if((state_val_37970 === (11))){
var inst_37949 = (state_37969[(8)]);
var inst_37958 = (state_37969[(2)]);
var inst_37946 = inst_37949;
var state_37969__$1 = (function (){var statearr_37979 = state_37969;
(statearr_37979[(10)] = inst_37958);

(statearr_37979[(7)] = inst_37946);

return statearr_37979;
})();
var statearr_37980_38004 = state_37969__$1;
(statearr_37980_38004[(2)] = null);

(statearr_37980_38004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (9))){
var inst_37949 = (state_37969[(8)]);
var state_37969__$1 = state_37969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37969__$1,(11),out,inst_37949);
} else {
if((state_val_37970 === (5))){
var inst_37949 = (state_37969[(8)]);
var inst_37946 = (state_37969[(7)]);
var inst_37953 = cljs.core._EQ_.call(null,inst_37949,inst_37946);
var state_37969__$1 = state_37969;
if(inst_37953){
var statearr_37982_38005 = state_37969__$1;
(statearr_37982_38005[(1)] = (8));

} else {
var statearr_37983_38006 = state_37969__$1;
(statearr_37983_38006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (10))){
var inst_37961 = (state_37969[(2)]);
var state_37969__$1 = state_37969;
var statearr_37984_38007 = state_37969__$1;
(statearr_37984_38007[(2)] = inst_37961);

(statearr_37984_38007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37970 === (8))){
var inst_37946 = (state_37969[(7)]);
var tmp37981 = inst_37946;
var inst_37946__$1 = tmp37981;
var state_37969__$1 = (function (){var statearr_37985 = state_37969;
(statearr_37985[(7)] = inst_37946__$1);

return statearr_37985;
})();
var statearr_37986_38008 = state_37969__$1;
(statearr_37986_38008[(2)] = null);

(statearr_37986_38008[(1)] = (2));


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
});})(c__33038__auto___37998,out))
;
return ((function (switch__32973__auto__,c__33038__auto___37998,out){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_37990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37990[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_37990[(1)] = (1));

return statearr_37990;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_37969){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_37969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e37991){if((e37991 instanceof Object)){
var ex__32977__auto__ = e37991;
var statearr_37992_38009 = state_37969;
(statearr_37992_38009[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38010 = state_37969;
state_37969 = G__38010;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_37969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_37969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___37998,out))
})();
var state__33040__auto__ = (function (){var statearr_37993 = f__33039__auto__.call(null);
(statearr_37993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___37998);

return statearr_37993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___37998,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args38011 = [];
var len__31995__auto___38081 = arguments.length;
var i__31996__auto___38082 = (0);
while(true){
if((i__31996__auto___38082 < len__31995__auto___38081)){
args38011.push((arguments[i__31996__auto___38082]));

var G__38083 = (i__31996__auto___38082 + (1));
i__31996__auto___38082 = G__38083;
continue;
} else {
}
break;
}

var G__38013 = args38011.length;
switch (G__38013) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38011.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33038__auto___38085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___38085,out){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___38085,out){
return (function (state_38051){
var state_val_38052 = (state_38051[(1)]);
if((state_val_38052 === (7))){
var inst_38047 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38053_38086 = state_38051__$1;
(statearr_38053_38086[(2)] = inst_38047);

(statearr_38053_38086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (1))){
var inst_38014 = (new Array(n));
var inst_38015 = inst_38014;
var inst_38016 = (0);
var state_38051__$1 = (function (){var statearr_38054 = state_38051;
(statearr_38054[(7)] = inst_38016);

(statearr_38054[(8)] = inst_38015);

return statearr_38054;
})();
var statearr_38055_38087 = state_38051__$1;
(statearr_38055_38087[(2)] = null);

(statearr_38055_38087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (4))){
var inst_38019 = (state_38051[(9)]);
var inst_38019__$1 = (state_38051[(2)]);
var inst_38020 = (inst_38019__$1 == null);
var inst_38021 = cljs.core.not.call(null,inst_38020);
var state_38051__$1 = (function (){var statearr_38056 = state_38051;
(statearr_38056[(9)] = inst_38019__$1);

return statearr_38056;
})();
if(inst_38021){
var statearr_38057_38088 = state_38051__$1;
(statearr_38057_38088[(1)] = (5));

} else {
var statearr_38058_38089 = state_38051__$1;
(statearr_38058_38089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (15))){
var inst_38041 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38059_38090 = state_38051__$1;
(statearr_38059_38090[(2)] = inst_38041);

(statearr_38059_38090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (13))){
var state_38051__$1 = state_38051;
var statearr_38060_38091 = state_38051__$1;
(statearr_38060_38091[(2)] = null);

(statearr_38060_38091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (6))){
var inst_38016 = (state_38051[(7)]);
var inst_38037 = (inst_38016 > (0));
var state_38051__$1 = state_38051;
if(cljs.core.truth_(inst_38037)){
var statearr_38061_38092 = state_38051__$1;
(statearr_38061_38092[(1)] = (12));

} else {
var statearr_38062_38093 = state_38051__$1;
(statearr_38062_38093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (3))){
var inst_38049 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38051__$1,inst_38049);
} else {
if((state_val_38052 === (12))){
var inst_38015 = (state_38051[(8)]);
var inst_38039 = cljs.core.vec.call(null,inst_38015);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38051__$1,(15),out,inst_38039);
} else {
if((state_val_38052 === (2))){
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38051__$1,(4),ch);
} else {
if((state_val_38052 === (11))){
var inst_38031 = (state_38051[(2)]);
var inst_38032 = (new Array(n));
var inst_38015 = inst_38032;
var inst_38016 = (0);
var state_38051__$1 = (function (){var statearr_38063 = state_38051;
(statearr_38063[(7)] = inst_38016);

(statearr_38063[(8)] = inst_38015);

(statearr_38063[(10)] = inst_38031);

return statearr_38063;
})();
var statearr_38064_38094 = state_38051__$1;
(statearr_38064_38094[(2)] = null);

(statearr_38064_38094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (9))){
var inst_38015 = (state_38051[(8)]);
var inst_38029 = cljs.core.vec.call(null,inst_38015);
var state_38051__$1 = state_38051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38051__$1,(11),out,inst_38029);
} else {
if((state_val_38052 === (5))){
var inst_38016 = (state_38051[(7)]);
var inst_38015 = (state_38051[(8)]);
var inst_38019 = (state_38051[(9)]);
var inst_38024 = (state_38051[(11)]);
var inst_38023 = (inst_38015[inst_38016] = inst_38019);
var inst_38024__$1 = (inst_38016 + (1));
var inst_38025 = (inst_38024__$1 < n);
var state_38051__$1 = (function (){var statearr_38065 = state_38051;
(statearr_38065[(12)] = inst_38023);

(statearr_38065[(11)] = inst_38024__$1);

return statearr_38065;
})();
if(cljs.core.truth_(inst_38025)){
var statearr_38066_38095 = state_38051__$1;
(statearr_38066_38095[(1)] = (8));

} else {
var statearr_38067_38096 = state_38051__$1;
(statearr_38067_38096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (14))){
var inst_38044 = (state_38051[(2)]);
var inst_38045 = cljs.core.async.close_BANG_.call(null,out);
var state_38051__$1 = (function (){var statearr_38069 = state_38051;
(statearr_38069[(13)] = inst_38044);

return statearr_38069;
})();
var statearr_38070_38097 = state_38051__$1;
(statearr_38070_38097[(2)] = inst_38045);

(statearr_38070_38097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (10))){
var inst_38035 = (state_38051[(2)]);
var state_38051__$1 = state_38051;
var statearr_38071_38098 = state_38051__$1;
(statearr_38071_38098[(2)] = inst_38035);

(statearr_38071_38098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38052 === (8))){
var inst_38015 = (state_38051[(8)]);
var inst_38024 = (state_38051[(11)]);
var tmp38068 = inst_38015;
var inst_38015__$1 = tmp38068;
var inst_38016 = inst_38024;
var state_38051__$1 = (function (){var statearr_38072 = state_38051;
(statearr_38072[(7)] = inst_38016);

(statearr_38072[(8)] = inst_38015__$1);

return statearr_38072;
})();
var statearr_38073_38099 = state_38051__$1;
(statearr_38073_38099[(2)] = null);

(statearr_38073_38099[(1)] = (2));


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
});})(c__33038__auto___38085,out))
;
return ((function (switch__32973__auto__,c__33038__auto___38085,out){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_38077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38077[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_38077[(1)] = (1));

return statearr_38077;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_38051){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_38051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e38078){if((e38078 instanceof Object)){
var ex__32977__auto__ = e38078;
var statearr_38079_38100 = state_38051;
(statearr_38079_38100[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38101 = state_38051;
state_38051 = G__38101;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_38051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_38051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___38085,out))
})();
var state__33040__auto__ = (function (){var statearr_38080 = f__33039__auto__.call(null);
(statearr_38080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___38085);

return statearr_38080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___38085,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args38102 = [];
var len__31995__auto___38176 = arguments.length;
var i__31996__auto___38177 = (0);
while(true){
if((i__31996__auto___38177 < len__31995__auto___38176)){
args38102.push((arguments[i__31996__auto___38177]));

var G__38178 = (i__31996__auto___38177 + (1));
i__31996__auto___38177 = G__38178;
continue;
} else {
}
break;
}

var G__38104 = args38102.length;
switch (G__38104) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38102.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33038__auto___38180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33038__auto___38180,out){
return (function (){
var f__33039__auto__ = (function (){var switch__32973__auto__ = ((function (c__33038__auto___38180,out){
return (function (state_38146){
var state_val_38147 = (state_38146[(1)]);
if((state_val_38147 === (7))){
var inst_38142 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38148_38181 = state_38146__$1;
(statearr_38148_38181[(2)] = inst_38142);

(statearr_38148_38181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (1))){
var inst_38105 = [];
var inst_38106 = inst_38105;
var inst_38107 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38146__$1 = (function (){var statearr_38149 = state_38146;
(statearr_38149[(7)] = inst_38106);

(statearr_38149[(8)] = inst_38107);

return statearr_38149;
})();
var statearr_38150_38182 = state_38146__$1;
(statearr_38150_38182[(2)] = null);

(statearr_38150_38182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (4))){
var inst_38110 = (state_38146[(9)]);
var inst_38110__$1 = (state_38146[(2)]);
var inst_38111 = (inst_38110__$1 == null);
var inst_38112 = cljs.core.not.call(null,inst_38111);
var state_38146__$1 = (function (){var statearr_38151 = state_38146;
(statearr_38151[(9)] = inst_38110__$1);

return statearr_38151;
})();
if(inst_38112){
var statearr_38152_38183 = state_38146__$1;
(statearr_38152_38183[(1)] = (5));

} else {
var statearr_38153_38184 = state_38146__$1;
(statearr_38153_38184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (15))){
var inst_38136 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38154_38185 = state_38146__$1;
(statearr_38154_38185[(2)] = inst_38136);

(statearr_38154_38185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (13))){
var state_38146__$1 = state_38146;
var statearr_38155_38186 = state_38146__$1;
(statearr_38155_38186[(2)] = null);

(statearr_38155_38186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (6))){
var inst_38106 = (state_38146[(7)]);
var inst_38131 = inst_38106.length;
var inst_38132 = (inst_38131 > (0));
var state_38146__$1 = state_38146;
if(cljs.core.truth_(inst_38132)){
var statearr_38156_38187 = state_38146__$1;
(statearr_38156_38187[(1)] = (12));

} else {
var statearr_38157_38188 = state_38146__$1;
(statearr_38157_38188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (3))){
var inst_38144 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38146__$1,inst_38144);
} else {
if((state_val_38147 === (12))){
var inst_38106 = (state_38146[(7)]);
var inst_38134 = cljs.core.vec.call(null,inst_38106);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38146__$1,(15),out,inst_38134);
} else {
if((state_val_38147 === (2))){
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38146__$1,(4),ch);
} else {
if((state_val_38147 === (11))){
var inst_38110 = (state_38146[(9)]);
var inst_38114 = (state_38146[(10)]);
var inst_38124 = (state_38146[(2)]);
var inst_38125 = [];
var inst_38126 = inst_38125.push(inst_38110);
var inst_38106 = inst_38125;
var inst_38107 = inst_38114;
var state_38146__$1 = (function (){var statearr_38158 = state_38146;
(statearr_38158[(11)] = inst_38126);

(statearr_38158[(7)] = inst_38106);

(statearr_38158[(8)] = inst_38107);

(statearr_38158[(12)] = inst_38124);

return statearr_38158;
})();
var statearr_38159_38189 = state_38146__$1;
(statearr_38159_38189[(2)] = null);

(statearr_38159_38189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (9))){
var inst_38106 = (state_38146[(7)]);
var inst_38122 = cljs.core.vec.call(null,inst_38106);
var state_38146__$1 = state_38146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38146__$1,(11),out,inst_38122);
} else {
if((state_val_38147 === (5))){
var inst_38110 = (state_38146[(9)]);
var inst_38114 = (state_38146[(10)]);
var inst_38107 = (state_38146[(8)]);
var inst_38114__$1 = f.call(null,inst_38110);
var inst_38115 = cljs.core._EQ_.call(null,inst_38114__$1,inst_38107);
var inst_38116 = cljs.core.keyword_identical_QMARK_.call(null,inst_38107,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38117 = (inst_38115) || (inst_38116);
var state_38146__$1 = (function (){var statearr_38160 = state_38146;
(statearr_38160[(10)] = inst_38114__$1);

return statearr_38160;
})();
if(cljs.core.truth_(inst_38117)){
var statearr_38161_38190 = state_38146__$1;
(statearr_38161_38190[(1)] = (8));

} else {
var statearr_38162_38191 = state_38146__$1;
(statearr_38162_38191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (14))){
var inst_38139 = (state_38146[(2)]);
var inst_38140 = cljs.core.async.close_BANG_.call(null,out);
var state_38146__$1 = (function (){var statearr_38164 = state_38146;
(statearr_38164[(13)] = inst_38139);

return statearr_38164;
})();
var statearr_38165_38192 = state_38146__$1;
(statearr_38165_38192[(2)] = inst_38140);

(statearr_38165_38192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (10))){
var inst_38129 = (state_38146[(2)]);
var state_38146__$1 = state_38146;
var statearr_38166_38193 = state_38146__$1;
(statearr_38166_38193[(2)] = inst_38129);

(statearr_38166_38193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38147 === (8))){
var inst_38110 = (state_38146[(9)]);
var inst_38114 = (state_38146[(10)]);
var inst_38106 = (state_38146[(7)]);
var inst_38119 = inst_38106.push(inst_38110);
var tmp38163 = inst_38106;
var inst_38106__$1 = tmp38163;
var inst_38107 = inst_38114;
var state_38146__$1 = (function (){var statearr_38167 = state_38146;
(statearr_38167[(14)] = inst_38119);

(statearr_38167[(7)] = inst_38106__$1);

(statearr_38167[(8)] = inst_38107);

return statearr_38167;
})();
var statearr_38168_38194 = state_38146__$1;
(statearr_38168_38194[(2)] = null);

(statearr_38168_38194[(1)] = (2));


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
});})(c__33038__auto___38180,out))
;
return ((function (switch__32973__auto__,c__33038__auto___38180,out){
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_38172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38172[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_38172[(1)] = (1));

return statearr_38172;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_38146){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__.call(null,state_38146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e38173){if((e38173 instanceof Object)){
var ex__32977__auto__ = e38173;
var statearr_38174_38195 = state_38146;
(statearr_38174_38195[(5)] = ex__32977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38196 = state_38146;
state_38146 = G__38196;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_38146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_38146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
;})(switch__32973__auto__,c__33038__auto___38180,out))
})();
var state__33040__auto__ = (function (){var statearr_38175 = f__33039__auto__.call(null);
(statearr_38175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33038__auto___38180);

return statearr_38175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33040__auto__);
});})(c__33038__auto___38180,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map