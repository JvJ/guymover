// Compiled by ClojureScript 1.7.58 {}
goog.provide('guymover.game_state');
goog.require('cljs.core');
goog.require('guymover.util');
goog.require('cljs.core.typed');
cljs.core.typed.def_alias_STAR_.call(null,new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null),new cljs.core.Symbol("cljs.core","UUID","cljs.core/UUID",-1279419460,null));

cljs.core.typed.def_alias_STAR_.call(null,new cljs.core.Symbol(null,"Point","Point",-2145220521,null),cljs.core.list(new cljs.core.Symbol("t","HVec","t/HVec",1460093114,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Int","t/Int",-2116888664,null),new cljs.core.Symbol("t","Int","t/Int",-2116888664,null)], null)));

cljs.core.typed.def_alias_STAR_.call(null,new cljs.core.Symbol(null,"Color","Color",-1193784282,null),cljs.core.list(new cljs.core.Symbol("t","HVec","t/HVec",1460093114,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("t","Int","t/Int",-2116888664,null),new cljs.core.Symbol("t","Int","t/Int",-2116888664,null),new cljs.core.Symbol("t","Int","t/Int",-2116888664,null)], null)));

cljs.core.typed.def_alias_STAR_.call(null,new cljs.core.Symbol(null,"Guy","Guy",727913998,null),cljs.core.list(new cljs.core.Symbol("t","HMap","t/HMap",1520108281,null),new cljs.core.Keyword(null,"mandatory","mandatory",542802336),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("t","Str","t/Str",907974339,null),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Symbol(null,"Color","Color",-1193784282,null)], null)));

cljs.core.typed.def_alias_STAR_.call(null,new cljs.core.Symbol(null,"Board","Board",-611815954,null),cljs.core.list(new cljs.core.Symbol("t","HMap","t/HMap",1520108281,null),new cljs.core.Keyword(null,"mandatory","mandatory",542802336),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.Symbol(null,"Point","Point",-2145220521,null),new cljs.core.Keyword(null,"guys","guys",-1710226152),cljs.core.list(new cljs.core.Symbol("t","Map","t/Map",1442803059,null),new cljs.core.Symbol("t","Any","t/Any",1277490105,null),new cljs.core.Symbol(null,"Guy","Guy",727913998,null))], null)));

cljs.core.typed.ann_STAR_.call(null,new cljs.core.Symbol(null,"extracells","extracells",639400155,null),new cljs.core.Symbol("t","Int","t/Int",-2116888664,null));
/**
 * Add this to the number of players
 * to get the board size.
 */
guymover.game_state.extracells = (3);
/**
 * Add a guy and return the board.
 */
guymover.game_state.add_guy = (function guymover$game_state$add_guy(p__35247,guy_name,guy_id){
var map__35250 = p__35247;
var map__35250__$1 = ((((!((map__35250 == null)))?((((map__35250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35250):map__35250);
var board = map__35250__$1;
var dims = cljs.core.get.call(null,map__35250__$1,new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guymover.game_state.extracells,guymover.game_state.extracells], null));
var guys = cljs.core.get.call(null,map__35250__$1,new cljs.core.Keyword(null,"guys","guys",-1710226152),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.not.call(null,guys.call(null,guy_name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"guys","guys",-69694625,null),new cljs.core.Symbol(null,"guy-name","guy-name",543900988,null)))))].join('')));
}

var colors = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"color","color",1011675173),guys));
var new_color = guymover.util.clr_gen.call(null,colors);
var dim = ((guymover.game_state.extracells + (1)) + cljs.core.count.call(null,guys));
var new_guy = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),guy_name,new cljs.core.Keyword(null,"color","color",1011675173),new_color,new cljs.core.Keyword(null,"id","id",-1388402092),guy_id,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dim - (1)),(dim - (1))], null)], null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dim,dim], null)),new cljs.core.Keyword(null,"guys","guys",-1710226152),((function (colors,new_color,dim,new_guy,map__35250,map__35250__$1,board,dims,guys){
return (function (p1__35246_SHARP_){
return cljs.core.assoc.call(null,p1__35246_SHARP_,guy_id,new_guy);
});})(colors,new_color,dim,new_guy,map__35250,map__35250__$1,board,dims,guys))
);
});

//# sourceMappingURL=game_state.js.map