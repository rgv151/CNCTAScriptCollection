// ==UserScript==
// @name        Maelstrom ADDON Citycolor
// @namespace   http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @description change the color of citys
// @include     http*://prodgame*.alliances.commandandconquer.com/*/index.aspx*
// @version     0.3
// ==/UserScript==
(function(){var c=function(){var f=["__mscc_version","Maelstrom_Citycolor "," loaded","log","Maelstrom_Citycolor Include","prototype","RegionCity","Region","Vis","CityTextcolor","CCTA_MaelstromTools_CC_Ally","undefined","parse","length","get_PlayerName","test","get_AllianceName","MaelstromTools_Citycolor CityTextcolor error: ","CityBackgroundColor","2d","getContext","fillStyle","#000000","width","height","fillRect","MaelstromTools_Citycolor CityBackgroundColor error: ","UpdateColor","ClientLib.Vis.Region.RegionCity UpdateColor","Error - ClientLib.Vis.Region.RegionCity.SetCanvasValue undefined","error","","replace"," ","substring","true; } g=this.CityTextcolor(g); this","a","b","VisUpdate","ClientLib.Vis.Region.RegionCity VisUpdate","Error - ClientLib.Vis.Region.RegionCity VisUpdate paramter undefined","c.Font); this.CityBackgroundColor(a); ","c","d","e","Maelstrom_Citycolor initalisiert","FileManager","File","getInstance","Language","MaelstromTools","Cache","Base","getLocale","Manager","locale","indexOf","Languages","CityColor Overview","Data","Resumo Cidade Cor","Aper\xe7u Couleur Ville","Player or Ally","Spieler Ally","jogador ou Ally","joueur ou Ally","Color","Frabe","cor","couleur","Text Color","TextFrabe","cor do texto","couleur du texte","Background Color","Hintergrund Frabe","Cor de Fundo","Couleur de fond","CityColor","ui/icons/icon_mainui_build_error.png","createNewImage","L","createNewWindow","gt","desktopPosition","createDesktopButton","execute","openWindow","CityColorGUI","HuffyTools","addListener","addToMainMenu","qx.ui.table.ModalCellEditorFactoryText","Object","core","ICellEditorFactory","table","ui"," Editor","window","layout","setLayout","set","moveTo","appear","focus","__cellEditor","getValue","setTextSelection","value","form","add","Save","close","Enter","dispose","HuffyTools.CityColor.ModalCellEditorFactoryText: ","define","Class","qx.ui.table.ModalCellEditorFactoryColor","cellEditor","label","_colors","groupbox","values","mousedown","setBackgroundColor","HuffyTools.CityColor.ModalCellEditorFactoryColor: ","$$user_backgroundColor","_currentTarget","setValue","Basic Colors","#333333","#666666","#999999","#CCCCCC","#FFFFFF","#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","#FF00FF","HuffyTools.CityColorGUI","singleton","DefaultObject","setPadding","Window","removeAll","t","get_Cities","MainData","get_CurrentOwnCity",'<iframe src="http://qicki2.bplaced.de/insidecitycolor.php?i=',"get_PlayerId","&n=","&v=",'" border="0" frameborder="0" scrolling="no" width="100%" height="80" name=""></iframe>',"basic","HuffyTools.CityColor.setWidgetLabels: ","HuffyTools.CityColor.updateCache: ","m","push","model","setColumns","setData","setColumnEditable","dataEdited","setCellEditorFactory","getTableColumnModel","HuffyTools.CityColor.FT: ","stringify","toolbar","Add","Remove selection","iterateSelection","getSelectionModel","cancelEditing","removeRows","set_CurrentCityId","get_Id","Wrapper","HuffyTools.CityColor.FC: ","match","Error - ","not found","warn","setTimeout","MaelstromTools_CitycolorInclude_checkIfLoaded: ","MaelstromTools_CitycolorTool_checkIfLoaded: ","domain"];window[f[0]]=0.3;console[f[3]](f[1]+window[f[0]]+f[2]);function d(){console[f[3]](f[4]);var C=ClientLib[f[8]][f[7]][f[6]][f[5]];C[f[9]]=function(K){try{var J;var I=[];var H=null;if(localStorage[f[10]]!=null&&localStorage[f[10]]!=f[11]){I=JSON[f[12]](localStorage[f[10]])}for(H in I){if(I[H] instanceof Array&&I[H][f[13]]>=1){if(I[H][0]==this[f[14]]()){var G=/^#[0-9A-F]{6}$/i[f[15]](I[H][1]);if(G){return I[H][1]}}else{if(I[H][0]==this[f[16]]()){var G=/^#[0-9A-F]{6}$/i[f[15]](I[H][1]);if(G){return I[H][1]}}}}}}catch(L){console[f[3]](f[17],L)}return K};C[f[18]]=function(H){try{var L;var K=H[f[20]](f[19]);var J=[];var I=null;if(localStorage[f[10]]!=null&&localStorage[f[10]]!=f[11]){J=JSON[f[12]](localStorage[f[10]])}for(I in J){if(J[I] instanceof Array&&J[I][f[13]]>=2){if(J[I][0]==this[f[14]]()){var G=/^#[0-9A-F]{6}$/i[f[15]](J[I][2]);if(G){K[f[21]]=J[I][2]}else{K[f[21]]=f[22]}K[f[25]](0,0,H[f[23]],H[f[24]]);break}else{if(J[I][0]==this[f[16]]()){var G=/^#[0-9A-F]{6}$/i[f[15]](J[I][2]);if(G){K[f[21]]=J[I][2]}else{K[f[21]]=f[22]}K[f[25]](0,0,H[f[23]],H[f[24]]);break}}}}}catch(M){console[f[3]](f[26],M)}};var x=e(C[f[27]],/createHelper;this\.([A-Z]{6})\(/,f[28],1);if(x!=null&&x[1][f[13]]==6){}else{console[f[30]](f[29]);return}var B=C[x[1]].toString();var A=B[f[32]](/(\n\r|\n|\r|\t)/gm,f[31]);var y=A[f[32]](/\s+/gm,f[33]);var v=y[f[32]](/function.{0,3}\(a,.{0,3}b\).{0,3}\{/,f[31]);var t=v[f[34]](0,v[f[13]]-1);var r=t[f[32]](/true;.{0,3}\}.{0,3}this/im,f[35]);C[x[1]]=new Function(f[36],f[37],r);var p=e(C[f[38]],/Own:\{?this\.(.{6})\(.*Alliance:\{?this\.(.{6})\(/,f[39],2);if(p!=null&&p[1][f[13]]==6){}else{console[f[30]](f[40]);return}var o=C[p[1]].toString();var l=o[f[32]](/(\n\r|\n|\r|\t)/gm,f[31]);var j=l[f[32]](/\s+/gm,f[33]);var z=j[f[32]](/function.{0,3}\(a,.{0,3}b,.{0,3}c,.{0,3}d\).{0,3}\{/,f[31]);var w=z[f[34]](0,z[f[13]]-1);var u=w[f[32]](/c.Font\);/im,f[41]);C[p[1]]=new Function(f[36],f[37],f[42],f[43],u);var s=C[p[2]].toString();var q=s[f[32]](/(\n\r|\n|\r|\t)/gm,f[31]);var m=q[f[32]](/\s+/gm,f[33]);var F=m[f[32]](/function.{0,3}\(a,.{0,3}b,.{0,3}c,.{0,3}d,.{0,3}e\).{0,3}\{/,f[31]);var E=F[f[34]](0,F[f[13]]-1);var D=E[f[32]](/c.Font\);/im,f[41]);C[p[2]]=new Function(f[36],f[37],f[42],f[43],f[44],D)}function g(){console[f[3]](f[45]);var q=null;var p=null;var o=null;var m=null;m=ClientLib[f[47]][f[46]].GetInstance();q=window[f[50]][f[49]][f[48]]();p=window[f[50]][f[51]][f[48]]();o=window[f[50]][f[52]][f[48]]();var l=q[f[57]][f[56]](qx[f[55]][f[54]][f[48]]()[f[53]]());if(l>=0){q[f[59]][f[58]]=[f[58],f[60],f[61]][l];q[f[59]][f[62]]=[f[63],f[64],f[65]][l];q[f[59]][f[66]]=[f[67],f[68],f[69]][l];q[f[59]][f[70]]=[f[71],f[72],f[73]][l];q[f[59]][f[74]]=[f[75],f[76],f[77]][l]}o[f[80]](f[78],f[79],m);o[f[82]](f[78],f[81],200,200,300,300);var j=o[f[85]](q[f[83]](f[58]),f[78],false,o[f[84]](0));j[f[90]](f[86],function(){window[f[89]][f[88]][f[48]]()[f[87]](f[78],q[f[83]](f[58]))},this);o[f[91]](f[78],j);qx[f[118]][f[117]](f[92],{extend:qx[f[94]][f[93]],implement:qx[f[97]][f[96]][f[95]],members:{createCellEditor:function(s){try{var u=new qx[f[97]][f[99]].Window(q[f[83]](f[62])+f[98]);u[f[101]](new qx[f[97]][f[100]].HBox(4));u[f[102]]({padding:3,modal:true,showClose:false,showMaximize:false,showMinimize:false});u[f[103]](300,250);u[f[90]](f[104],function(w){u[f[106]][f[105]]();u[f[106]][f[108]](0,u[f[106]][f[107]]()[f[13]])});u[f[106]]=new qx[f[97]][f[110]].TextField(s[f[109]]+f[31])[f[102]]({allowGrowY:true});u[f[111]](u.__cellEditor);var t=new qx[f[97]][f[110]].Button(f[112]);t[f[90]](f[86],function(w){u[f[113]]()});u[f[111]](t);var r=new qx[f[97]][f[94]].Command(f[114]);r[f[90]](f[86],function(w){t[f[86]]();r[f[115]]();r=null});return u}catch(v){console[f[3]](f[116],v)}},getCellEditorValue:function(r){return r[f[106]][f[107]]()}}});qx[f[118]][f[117]](f[119],{extend:qx[f[94]][f[93]],implement:qx[f[97]][f[96]][f[95]],members:{cellEditor:null,createCellEditor:function(s){try{this[f[120]]=new qx[f[97]][f[99]].Window(q[f[83]](f[66])+f[98]);this[f[120]][f[101]](new qx[f[97]][f[100]].Flow());this[f[120]][f[102]]({padding:3,modal:true,showClose:false,showMaximize:false,showMinimize:false});this[f[120]][f[103]](300,250);this[f[120]][f[90]](f[104],function(y){this[f[120]][f[106]][f[105]]();this[f[120]][f[106]][f[108]](0,this[f[120]][f[106]][f[107]]()[f[13]])},this);this[f[120]][f[106]]=new qx[f[97]][f[110]].TextField(s[f[109]]+f[31])[f[102]]({allowGrowY:true});this[f[120]][f[111]](this[f[120]].__cellEditor);var r=new qx[f[97]][f[110]].Button(f[112]);r[f[90]](f[86],function(y){this[f[120]][f[113]]()},this);this[f[120]][f[111]](r,{lineBreak:true});var x=new qx[f[97]][f[123]].GroupBox(this[f[122]][f[121]]);x[f[101]](new qx[f[97]][f[100]].HBox());this[f[120]][f[111]](x);var w=[];var u;for(u=0;u<this[f[122]][f[124]][f[13]];u++){w[u]=new qx[f[97]][f[94]].Widget()[f[102]]({width:20,height:20,decorator:null});w[u][f[90]](f[125],this._onFieldMouseDown,this);w[u][f[126]](this[f[122]][f[124]][u]||null);x[f[111]](w[u])}var t=new qx[f[97]][f[94]].Command(f[114]);t[f[90]](f[86],function(y){r[f[86]]();t[f[115]]();t=null});return this[f[120]]}catch(v){console[f[3]](f[127],v)}},_onFieldMouseDown:function(s){var r=s[f[129]][f[128]];this[f[120]][f[106]][f[130]](r)},getCellEditorValue:function(r){return this[f[120]][f[106]][f[107]]()},_colors:{label:f[131],values:[f[22],f[132],f[133],f[134],f[135],f[136],f[137],f[138],f[139],f[140],f[141],f[142]]}}});qx[f[118]][f[117]](f[143],{type:f[144],extend:MaelstromTools[f[145]],members:{d:null,m:null,t:null,b:null,FI:function(){try{this.FT();this.FC();if(this[f[43]]==null){this[f[43]]=[]}this[f[147]][f[146]](0);this[f[147]][f[102]]({resizable:true});this[f[147]][f[148]]();this[f[147]][f[111]](this[f[37]]);this[f[147]][f[111]](this[f[149]]);var u=ClientLib[f[59]][f[151]].GetInstance()[f[150]]();var t=u[f[152]]();var r=f[153]+t[f[154]]()+f[155]+t[f[14]]()+f[156]+window[f[0]]+f[157];var s=new qx[f[97]][f[158]].Label()[f[102]]({value:r,rich:true,width:300,height:30});this[f[147]][f[111]](s)}catch(v){console[f[3]](f[159],v)}},updateCache:function(){try{}catch(r){console[f[3]](f[160],r)}},setWidgetLabels:function(){try{if(this[f[161]]==null){this.FI()}}catch(r){console[f[3]](f[159],r)}},FT:function(){try{if(localStorage[f[10]]!=null&&localStorage[f[10]]!=f[11]){var r=JSON[f[12]](localStorage[f[10]]);if(r instanceof Array){this[f[43]]=r}else{this[f[43]]=[];for(n in r){this[f[43]][f[162]]([n,r[n],f[22]])}}}this[f[161]]=new qx[f[97]][f[96]][f[163]].Simple();this[f[161]][f[164]]([q[f[83]](f[62]),q[f[83]](f[70]),q[f[83]](f[74])]);if(this[f[43]]!=null){this[f[161]][f[165]](this[f[43]])}this[f[161]][f[166]](0,true);this[f[161]][f[166]](1,true);this[f[161]][f[166]](2,true);this[f[149]]=new qx[f[97]][f[96]].Table(this[f[161]])[f[102]]({width:250,height:200,decorator:null});this[f[149]][f[90]](f[167],function(t){this.FS()},this);this[f[149]][f[169]]()[f[168]](0,new qx[f[97]][f[96]].ModalCellEditorFactoryText());this[f[149]][f[169]]()[f[168]](1,new qx[f[97]][f[96]].ModalCellEditorFactoryColor());this[f[149]][f[169]]()[f[168]](2,new qx[f[97]][f[96]].ModalCellEditorFactoryColor())}catch(s){console[f[3]](f[170],s)}},FS:function(){localStorage[f[10]]=JSON[f[171]](this[f[43]])},FC:function(){try{this[f[37]]=new qx[f[97]][f[172]].ToolBar();var s,r;r=new qx[f[97]][f[172]].Part();this[f[37]][f[111]](r);s=new qx[f[97]][f[110]].Button(f[173]);s[f[90]](f[86],function(u){this[f[43]][f[162]]([f[31],f[137],f[22]]);this[f[161]][f[165]](this[f[43]])},this);r[f[111]](s);s=new qx[f[97]][f[110]].Button(f[174]);s[f[90]](f[86],function(w){var v=[];this[f[149]][f[176]]()[f[175]](function(x){v[f[162]](x)});this[f[149]][f[177]]();for(k=0;k<v[f[13]];k++){this[f[161]][f[178]](v[k],1,true)}this.FS();var u=ClientLib[f[59]][f[151]].GetInstance()[f[150]]()[f[152]]();ClientLib[f[59]][f[151]].GetInstance()[f[150]]()[f[179]](0);ClientLib[f[59]][f[151]].GetInstance()[f[150]]()[f[179]](u[f[180]]());window[f[50]][f[181]].GetCity(0);window[f[50]][f[181]].GetCity(u[f[180]]())},this);r[f[111]](s)}catch(t){console[f[3]](f[182],t)}}}})}function e(j,s,r,q){var p=[];var m=j.toString();var o=m[f[32]](/\s/gim,f[31]);p=o[f[183]](s);var l;for(l=1;l<(q+1);l++){if(p!=null&&p[l][f[13]]==6){console[f[3]](r,l,p[l])}else{console[f[30]](f[184],r,l,f[185]);console[f[186]](r,o)}}return p}function i(){try{if(typeof ClientLib!=f[11]&&ClientLib[f[8]]!=f[11]&&ClientLib[f[8]][f[7]]!=f[11]&&ClientLib[f[8]][f[7]][f[6]]!=f[11]){d()}else{window[f[187]](i,10)}}catch(j){console[f[3]](f[188],j)}}function h(){try{if(typeof ClientLib!=f[11]&&typeof MaelstromTools!=f[11]){g()}else{window[f[187]](h,1000)}}catch(j){console[f[3]](f[189],j)}}if(/commandandconquer\.com/i[f[15]](document[f[190]])){window[f[187]](i,100);window[f[187]](h,10000)}};try{var a=document.createElement("script");a.innerHTML="("+c.toString()+")();";a.type="text/javascript";if(/commandandconquer\.com/i.test(document.domain)){document.getElementsByTagName("head")[0].appendChild(a)}}catch(b){console.log("MaelstromTools_Citycolor: init error: ",b)}})();
