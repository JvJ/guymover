// Compiled by ClojureScript 1.7.58 {}
goog.provide('guymover.board');
goog.require('cljs.core');
goog.require('guymover.util');
/**
 * Add this to the number of players
 * to get the board size.
 */
guymover.board.extracells = (3);
/**
 * Add a guy and return the board.
 */
guymover.board.add_guy = (function guymover$board$add_guy(p__35230,guy_name,guy_id){
var map__35233 = p__35230;
var map__35233__$1 = ((((!((map__35233 == null)))?((((map__35233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35233):map__35233);
var board = map__35233__$1;
var dims = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guymover.board.extracells,guymover.board.extracells], null));
var guys = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword(null,"guys","guys",-1710226152),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.not.call(null,guys.call(null,guy_name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"guys","guys",-69694625,null),new cljs.core.Symbol(null,"guy-name","guy-name",543900988,null)))))].join('')));
}

var colors = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"color","color",1011675173),guys));
var new_color = guymover.util.clr_gen.call(null,colors);
var dim = ((guymover.board.extracells + (1)) + cljs.core.count.call(null,guys));
var new_guy = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),guy_name,new cljs.core.Keyword(null,"color","color",1011675173),new_color,new cljs.core.Keyword(null,"id","id",-1388402092),guy_id,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dim - (1)),(dim - (1))], null)], null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim,dim], null)),new cljs.core.Keyword(null,"guys","guys",-1710226152),((function (colors,new_color,dim,new_guy,map__35233,map__35233__$1,board,dims,guys){
return (function (p1__35229_SHARP_){
return cljs.core.assoc.call(null,p1__35229_SHARP_,guy_id,new_guy);
});})(colors,new_color,dim,new_guy,map__35233,map__35233__$1,board,dims,guys))
);
});

//# sourceMappingURL=board.js.map