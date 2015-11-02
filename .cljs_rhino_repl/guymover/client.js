// Compiled by ClojureScript 1.7.58 {}
goog.provide('guymover.client');
goog.require('cljs.core');
goog.require('guymover.game_state');
goog.require('guymover.util');
goog.require('quiescent.core');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('quiescent.dom');
guymover.client.default_pix_to_cell = (64);
guymover.client.default_canvas_dims = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(600)], null);
/**
 * All the default initialization logic goes here.
 */
guymover.client.init_client = (function guymover$client$init_client(){
var vec__37606 = guymover.client.default_canvas_dims;
var dw = cljs.core.nth.call(null,vec__37606,(0),null);
var dh = cljs.core.nth.call(null,vec__37606,(1),null);
document.getElementById("guyBoard").width = dw;

return document.getElementById("guyBoard").height = dh;
});
/**
 * Draw the board to the screen,
 * centered on the specified guy.
 */
guymover.client.draw_board = (function guymover$client$draw_board(){
var args__35025__auto__ = [];
var len__35018__auto___37643 = arguments.length;
var i__35019__auto___37644 = (0);
while(true){
if((i__35019__auto___37644 < len__35018__auto___37643)){
args__35025__auto__.push((arguments[i__35019__auto___37644]));

var G__37645 = (i__35019__auto___37644 + (1));
i__35019__auto___37644 = G__37645;
continue;
} else {
}
break;
}

var argseq__35026__auto__ = ((((2) < args__35025__auto__.length))?(new cljs.core.IndexedSeq(args__35025__auto__.slice((2)),(0))):null);
return guymover.client.draw_board.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35026__auto__);
});

guymover.client.draw_board.cljs$core$IFn$_invoke$arity$variadic = (function (p__37611,guy_id,p__37612){
var map__37613 = p__37611;
var map__37613__$1 = ((((!((map__37613 == null)))?((((map__37613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37613):map__37613);
var board = map__37613__$1;
var dims = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"dims","dims",-466522889));
var guys = cljs.core.get.call(null,map__37613__$1,new cljs.core.Keyword(null,"guys","guys",-1710226152));
var map__37614 = p__37612;
var map__37614__$1 = ((((!((map__37614 == null)))?((((map__37614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37614):map__37614);
var pix_to_cell = cljs.core.get.call(null,map__37614__$1,new cljs.core.Keyword(null,"pix-to-cell","pix-to-cell",-537106208),guymover.client.default_pix_to_cell);
if(cljs.core.truth_(dims)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dims","dims",1174008638,null)))].join('')));
}

if(cljs.core.truth_(guys)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"guys","guys",-69694625,null)))].join('')));
}

if(cljs.core.truth_(board)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"board","board",-266486106,null)))].join('')));
}

var canvas = document.getElementById("guyBoard");
var ctx = canvas.getContext("2d");
var vec__37617 = dims;
var w = cljs.core.nth.call(null,vec__37617,(0),null);
var h = cljs.core.nth.call(null,vec__37617,(1),null);
var vec__37618 = cljs.core.mapv.call(null,((function (canvas,ctx,vec__37617,w,h,map__37613,map__37613__$1,board,dims,guys,map__37614,map__37614__$1,pix_to_cell){
return (function (p1__37607_SHARP_){
return (p1__37607_SHARP_ * pix_to_cell);
});})(canvas,ctx,vec__37617,w,h,map__37613,map__37613__$1,board,dims,guys,map__37614,map__37614__$1,pix_to_cell))
,dims);
var pw = cljs.core.nth.call(null,vec__37618,(0),null);
var ph = cljs.core.nth.call(null,vec__37618,(1),null);
var vec__37619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);
var cw = cljs.core.nth.call(null,vec__37619,(0),null);
var ch = cljs.core.nth.call(null,vec__37619,(1),null);
var vec__37620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w * pix_to_cell),(h * pix_to_cell)], null);
var bw = cljs.core.nth.call(null,vec__37620,(0),null);
var bh = cljs.core.nth.call(null,vec__37620,(1),null);
var vec__37621 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guys.call(null,guy_id));
var px = cljs.core.nth.call(null,vec__37621,(0),null);
var py = cljs.core.nth.call(null,vec__37621,(1),null);
var pos = vec__37621;
var vec__37622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cw / (2)) - (pix_to_cell * (0.5 + px))),((ch / (2)) - (pix_to_cell * (0.5 + py)))], null);
var l = cljs.core.nth.call(null,vec__37622,(0),null);
var t = cljs.core.nth.call(null,vec__37622,(1),null);
ctx.strokeStyle = "#000000";

ctx.beginPath();

var seq__37623_37646 = cljs.core.seq.call(null,cljs.core.range.call(null,(w + (1))));
var chunk__37624_37647 = null;
var count__37625_37648 = (0);
var i__37626_37649 = (0);
while(true){
if((i__37626_37649 < count__37625_37648)){
var x_37650 = cljs.core._nth.call(null,chunk__37624_37647,i__37626_37649);
ctx.moveTo((l + (x_37650 * pix_to_cell)),t);

ctx.lineTo((l + (x_37650 * pix_to_cell)),(t + bh));

var G__37651 = seq__37623_37646;
var G__37652 = chunk__37624_37647;
var G__37653 = count__37625_37648;
var G__37654 = (i__37626_37649 + (1));
seq__37623_37646 = G__37651;
chunk__37624_37647 = G__37652;
count__37625_37648 = G__37653;
i__37626_37649 = G__37654;
continue;
} else {
var temp__4425__auto___37655 = cljs.core.seq.call(null,seq__37623_37646);
if(temp__4425__auto___37655){
var seq__37623_37656__$1 = temp__4425__auto___37655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37623_37656__$1)){
var c__34763__auto___37657 = cljs.core.chunk_first.call(null,seq__37623_37656__$1);
var G__37658 = cljs.core.chunk_rest.call(null,seq__37623_37656__$1);
var G__37659 = c__34763__auto___37657;
var G__37660 = cljs.core.count.call(null,c__34763__auto___37657);
var G__37661 = (0);
seq__37623_37646 = G__37658;
chunk__37624_37647 = G__37659;
count__37625_37648 = G__37660;
i__37626_37649 = G__37661;
continue;
} else {
var x_37662 = cljs.core.first.call(null,seq__37623_37656__$1);
ctx.moveTo((l + (x_37662 * pix_to_cell)),t);

ctx.lineTo((l + (x_37662 * pix_to_cell)),(t + bh));

var G__37663 = cljs.core.next.call(null,seq__37623_37656__$1);
var G__37664 = null;
var G__37665 = (0);
var G__37666 = (0);
seq__37623_37646 = G__37663;
chunk__37624_37647 = G__37664;
count__37625_37648 = G__37665;
i__37626_37649 = G__37666;
continue;
}
} else {
}
}
break;
}

var seq__37627_37667 = cljs.core.seq.call(null,cljs.core.range.call(null,(h + (1))));
var chunk__37628_37668 = null;
var count__37629_37669 = (0);
var i__37630_37670 = (0);
while(true){
if((i__37630_37670 < count__37629_37669)){
var y_37671 = cljs.core._nth.call(null,chunk__37628_37668,i__37630_37670);
ctx.moveTo(l,(t + (y_37671 * pix_to_cell)));

ctx.lineTo((l + bw),(t + (y_37671 * pix_to_cell)));

var G__37672 = seq__37627_37667;
var G__37673 = chunk__37628_37668;
var G__37674 = count__37629_37669;
var G__37675 = (i__37630_37670 + (1));
seq__37627_37667 = G__37672;
chunk__37628_37668 = G__37673;
count__37629_37669 = G__37674;
i__37630_37670 = G__37675;
continue;
} else {
var temp__4425__auto___37676 = cljs.core.seq.call(null,seq__37627_37667);
if(temp__4425__auto___37676){
var seq__37627_37677__$1 = temp__4425__auto___37676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37627_37677__$1)){
var c__34763__auto___37678 = cljs.core.chunk_first.call(null,seq__37627_37677__$1);
var G__37679 = cljs.core.chunk_rest.call(null,seq__37627_37677__$1);
var G__37680 = c__34763__auto___37678;
var G__37681 = cljs.core.count.call(null,c__34763__auto___37678);
var G__37682 = (0);
seq__37627_37667 = G__37679;
chunk__37628_37668 = G__37680;
count__37629_37669 = G__37681;
i__37630_37670 = G__37682;
continue;
} else {
var y_37683 = cljs.core.first.call(null,seq__37627_37677__$1);
ctx.moveTo(l,(t + (y_37683 * pix_to_cell)));

ctx.lineTo((l + bw),(t + (y_37683 * pix_to_cell)));

var G__37684 = cljs.core.next.call(null,seq__37627_37677__$1);
var G__37685 = null;
var G__37686 = (0);
var G__37687 = (0);
seq__37627_37667 = G__37684;
chunk__37628_37668 = G__37685;
count__37629_37669 = G__37686;
i__37630_37670 = G__37687;
continue;
}
} else {
}
}
break;
}

ctx.stroke();

var seq__37631 = cljs.core.seq.call(null,guys);
var chunk__37632 = null;
var count__37633 = (0);
var i__37634 = (0);
while(true){
if((i__37634 < count__37633)){
var vec__37635 = cljs.core._nth.call(null,chunk__37632,i__37634);
var id = cljs.core.nth.call(null,vec__37635,(0),null);
var map__37636 = cljs.core.nth.call(null,vec__37635,(1),null);
var map__37636__$1 = ((((!((map__37636 == null)))?((((map__37636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37636):map__37636);
var clr = cljs.core.get.call(null,map__37636__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var vec__37637 = cljs.core.get.call(null,map__37636__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__37637,(0),null);
var y = cljs.core.nth.call(null,vec__37637,(1),null);
console.log(guymover.util.clr_hex.call(null,clr));

ctx.fillStyle = guymover.util.clr_hex.call(null,clr);

ctx.beginPath();

ctx.arc((l + ((0.5 + px) * pix_to_cell)),(t + ((0.5 + px) * pix_to_cell)),(pix_to_cell / 2.0),(0),((2) * Math.PI));

ctx.fill();

var G__37688 = seq__37631;
var G__37689 = chunk__37632;
var G__37690 = count__37633;
var G__37691 = (i__37634 + (1));
seq__37631 = G__37688;
chunk__37632 = G__37689;
count__37633 = G__37690;
i__37634 = G__37691;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__37631);
if(temp__4425__auto__){
var seq__37631__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37631__$1)){
var c__34763__auto__ = cljs.core.chunk_first.call(null,seq__37631__$1);
var G__37692 = cljs.core.chunk_rest.call(null,seq__37631__$1);
var G__37693 = c__34763__auto__;
var G__37694 = cljs.core.count.call(null,c__34763__auto__);
var G__37695 = (0);
seq__37631 = G__37692;
chunk__37632 = G__37693;
count__37633 = G__37694;
i__37634 = G__37695;
continue;
} else {
var vec__37639 = cljs.core.first.call(null,seq__37631__$1);
var id = cljs.core.nth.call(null,vec__37639,(0),null);
var map__37640 = cljs.core.nth.call(null,vec__37639,(1),null);
var map__37640__$1 = ((((!((map__37640 == null)))?((((map__37640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37640):map__37640);
var clr = cljs.core.get.call(null,map__37640__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var vec__37641 = cljs.core.get.call(null,map__37640__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var x = cljs.core.nth.call(null,vec__37641,(0),null);
var y = cljs.core.nth.call(null,vec__37641,(1),null);
console.log(guymover.util.clr_hex.call(null,clr));

ctx.fillStyle = guymover.util.clr_hex.call(null,clr);

ctx.beginPath();

ctx.arc((l + ((0.5 + px) * pix_to_cell)),(t + ((0.5 + px) * pix_to_cell)),(pix_to_cell / 2.0),(0),((2) * Math.PI));

ctx.fill();

var G__37696 = cljs.core.next.call(null,seq__37631__$1);
var G__37697 = null;
var G__37698 = (0);
var G__37699 = (0);
seq__37631 = G__37696;
chunk__37632 = G__37697;
count__37633 = G__37698;
i__37634 = G__37699;
continue;
}
} else {
return null;
}
}
break;
}
});

guymover.client.draw_board.cljs$lang$maxFixedArity = (2);

guymover.client.draw_board.cljs$lang$applyTo = (function (seq37608){
var G__37609 = cljs.core.first.call(null,seq37608);
var seq37608__$1 = cljs.core.next.call(null,seq37608);
var G__37610 = cljs.core.first.call(null,seq37608__$1);
var seq37608__$2 = cljs.core.next.call(null,seq37608__$1);
return guymover.client.draw_board.cljs$core$IFn$_invoke$arity$variadic(G__37609,G__37610,seq37608__$2);
});
guymover.client.main_loop = (function guymover$client$main_loop(ws_url){
var c__36195__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36195__auto__){
return (function (){
var f__36196__auto__ = (function (){var switch__36174__auto__ = ((function (c__36195__auto__){
return (function (state_37711){
var state_val_37712 = (state_37711[(1)]);
if((state_val_37712 === (1))){
var state_37711__$1 = state_37711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37711__$1,null);
} else {
return null;
}
});})(c__36195__auto__))
;
return ((function (switch__36174__auto__,c__36195__auto__){
return (function() {
var guymover$client$main_loop_$_state_machine__36175__auto__ = null;
var guymover$client$main_loop_$_state_machine__36175__auto____0 = (function (){
var statearr_37716 = [null,null,null,null,null,null,null];
(statearr_37716[(0)] = guymover$client$main_loop_$_state_machine__36175__auto__);

(statearr_37716[(1)] = (1));

return statearr_37716;
});
var guymover$client$main_loop_$_state_machine__36175__auto____1 = (function (state_37711){
while(true){
var ret_value__36176__auto__ = (function (){try{while(true){
var result__36177__auto__ = switch__36174__auto__.call(null,state_37711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36177__auto__;
}
break;
}
}catch (e37717){if((e37717 instanceof Object)){
var ex__36178__auto__ = e37717;
var statearr_37718_37720 = state_37711;
(statearr_37718_37720[(5)] = ex__36178__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37721 = state_37711;
state_37711 = G__37721;
continue;
} else {
return ret_value__36176__auto__;
}
break;
}
});
guymover$client$main_loop_$_state_machine__36175__auto__ = function(state_37711){
switch(arguments.length){
case 0:
return guymover$client$main_loop_$_state_machine__36175__auto____0.call(this);
case 1:
return guymover$client$main_loop_$_state_machine__36175__auto____1.call(this,state_37711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
guymover$client$main_loop_$_state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$0 = guymover$client$main_loop_$_state_machine__36175__auto____0;
guymover$client$main_loop_$_state_machine__36175__auto__.cljs$core$IFn$_invoke$arity$1 = guymover$client$main_loop_$_state_machine__36175__auto____1;
return guymover$client$main_loop_$_state_machine__36175__auto__;
})()
;})(switch__36174__auto__,c__36195__auto__))
})();
var state__36197__auto__ = (function (){var statearr_37719 = f__36196__auto__.call(null);
(statearr_37719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36195__auto__);

return statearr_37719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36197__auto__);
});})(c__36195__auto__))
);

return c__36195__auto__;
});
guymover.client.test_board = guymover.game_state.add_guy.call(null,cljs.core.PersistentArrayMap.EMPTY,"Johnny",guymover.util.new_uuid.call(null));
guymover.client.drawTest = (function guymover$client$drawTest(){
return guymover.client.draw_board.call(null,guymover.client.test_board,cljs.core.key.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"guys","guys",-1710226152).cljs$core$IFn$_invoke$arity$1(guymover.client.test_board))));
});

//# sourceMappingURL=client.js.map