/**
 * jQuery EasyUI 1.5.2
 * 
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function(a){a.easyui={indexOfArray:function(a,b,d){for(var c=0,e=a.length;c<e;c++)if(void 0==d){if(a[c]==b)return c}else if(a[c][b]==d)return c;return-1},removeArrayItem:function(a,b,d){if("string"==typeof b)for(var c=0,e=a.length;c<e;c++){if(a[c][b]==d){a.splice(c,1);break}}else b=this.indexOfArray(a,b),-1!=b&&a.splice(b,1)},addArrayItem:function(a,b,d){var c=this.indexOfArray(a,b,d?d[b]:void 0);-1==c?a.push(d?d:b):a[c]=d?d:b},getArrayItem:function(a,b,d){b=this.indexOfArray(a,b,d);return-1==b?null:a[b]},forEach:function(a,b,d){for(var c=[],e=0;e<a.length;e++)c.push(a[e]);for(;c.length;){a=c.shift();if(0==d(a))break;if(b&&a.children)for(e=a.children.length-1;0<=e;e--)c.unshift(a.children[e])}}};a.parser={auto:!0,onComplete:function(a){},plugins:"draggable droppable resizable pagination tooltip linkbutton menu menubutton splitbutton switchbutton progressbar tree textbox passwordbox filebox combo combobox combotree combogrid combotreegrid tagbox numberbox validatebox searchbox spinner numberspinner timespinner datetimespinner calendar datebox datetimebox slider layout panel datagrid propertygrid treegrid datalist tabs accordion window dialog form".split(" "),parse:function(c){for(var b=[],d=0;d<a.parser.plugins.length;d++){var g=a.parser.plugins[d],e=a(".easyui-"+g,c);e.length&&(e[g]?e.each(function(){a(this)[g](a.data(this,"options")||{})}):b.push({name:g,jq:e}))}if(b.length&&window.easyloader){e=[];for(d=0;d<b.length;d++)e.push(b[d].name);easyloader.load(e,function(){for(var d=0;d<b.length;d++){var f=b[d].name;b[d].jq.each(function(){a(this)[f](a.data(this,"options")||{})})}a.parser.onComplete.call(a.parser,c)})}else a.parser.onComplete.call(a.parser,c)},parseValue:function(c,b,d,g){g=g||0;b=a.trim(String(b||""));"%"==b.substr(b.length-1,1)?(b=parseFloat(b.substr(0,b.length-1)),b=0<=c.toLowerCase().indexOf("width")?Math.floor((d.width()-g)*b/100):Math.floor((d.height()-g)*b/100)):b=parseInt(b)||void 0;return b},parseOptions:function(c,b){var d=a(c),g={},e=a.trim(d.attr("data-options"));e&&("{"!=e.substring(0,1)&&(e="{"+e+"}"),g=(new Function("return "+e))());a.map("width height left top minWidth maxWidth minHeight maxHeight".split(" "),function(b){var f=a.trim(c.style[b]||"");f&&(-1==f.indexOf("%")&&(f=parseInt(f),isNaN(f)&&(f=void 0)),g[b]=f)});if(b){for(var e={},k=0;k<b.length;k++){var f=b[k];if("string"==typeof f)e[f]=d.attr(f);else for(var h in f){var l=f[h];"boolean"==l?e[h]=d.attr(h)?"true"==d.attr(h):void 0:"number"==l&&(e[h]="0"==d.attr(h)?0:parseFloat(d.attr(h))||void 0)}}a.extend(g,e)}return g}};a(function(){var c=a('\x3cdiv style\x3d"position:absolute;top:-1000px;width:100px;height:100px;padding:5px"\x3e\x3c/div\x3e').appendTo("body");a._boxModel=100!=c.outerWidth();c.remove();c=a('\x3cdiv style\x3d"position:fixed"\x3e\x3c/div\x3e').appendTo("body");a._positionFixed="fixed"==c.css("position");c.remove();!window.easyloader&&a.parser.auto&&a.parser.parse()});a.fn._outerWidth=function(a){return void 0==a?this[0]==window?this.width()||document.body.clientWidth:this.outerWidth()||0:this._size("width",a)};a.fn._outerHeight=function(a){return void 0==a?this[0]==window?this.height()||document.body.clientHeight:this.outerHeight()||0:this._size("height",a)};a.fn._scrollLeft=function(c){return void 0==c?this.scrollLeft():this.each(function(){a(this).scrollLeft(c)})};a.fn._propAttr=a.fn.prop||a.fn.attr;a.fn._size=function(c,b){function d(b,f,c){if(!f.length)return!1;b=a(b)[0];f=f[0];var d=f.fcount||0;if(c)return b.fitted||(b.fitted=!0,f.fcount=d+1,a(f).addClass("panel-noscroll"),"BODY"==f.tagName&&a("html").addClass("panel-fit")),{width:a(f).width()||1,height:a(f).height()||1};b.fitted&&(b.fitted=!1,f.fcount=d-1,0==f.fcount&&(a(f).removeClass("panel-noscroll"),"BODY"==f.tagName&&a("html").removeClass("panel-fit")));return!1}function g(b,f,c,d){b=a(b);var e=f.substr(0,1).toUpperCase()+f.substr(1),h=a.parser.parseValue("min"+e,d["min"+e],c),g=a.parser.parseValue("max"+e,d["max"+e],c),k=a.parser.parseValue(f,d[f],c);c=0<=String(d[f]||"").indexOf("%")?!0:!1;isNaN(k)?(b._size(f,""),b._size("min"+e,h),b._size("max"+e,g)):(h=Math.min(Math.max(k,h||0),g||99999),c||(d[f]=h),b._size("min"+e,""),b._size("max"+e,""),b._size(f,h));return c||d.fit}function e(b,f,c){function d(){return 0<=f.toLowerCase().indexOf("width")?e.outerWidth()-e.width():e.outerHeight()-e.height()}var e=a(b);if(void 0==c){c=parseInt(b.style[f]);if(isNaN(c))return;a._boxModel&&(c+=d());return c}""===c?e.css(f,""):(a._boxModel&&(c-=d(),0>c&&(c=0)),e.css(f,c+"px"))}return"string"==typeof c?"clear"==c?this.each(function(){a(this).css({width:"",minWidth:"",maxWidth:"",height:"",minHeight:"",maxHeight:""})}):"fit"==c?this.each(function(){d(this,"BODY"==this.tagName?a("body"):a(this).parent(),!0)}):"unfit"==c?this.each(function(){d(this,a(this).parent(),!1)}):void 0==b?e(this[0],c):this.each(function(){e(this,c,b)}):this.each(function(){b=b||a(this).parent();a.extend(c,d(this,b,c.fit)||{});var e=g(this,"width",b,c),f=g(this,"height",b,c);e||f?a(this).addClass("easyui-fluid"):a(this).removeClass("easyui-fluid")})}})(jQuery);(function(a){function c(b){1==b.touches.length&&(k?(clearTimeout(dblClickTimer),k=!1,g(b,"dblclick")):(k=!0,dblClickTimer=setTimeout(function(){k=!1},500)),e=setTimeout(function(){g(b,"contextmenu",3)},1E3),g(b,"mousedown"),(a.fn.draggable.isDragging||a.fn.resizable.isResizing)&&b.preventDefault())}function b(b){1==b.touches.length&&(e&&clearTimeout(e),g(b,"mousemove"),(a.fn.draggable.isDragging||a.fn.resizable.isResizing)&&b.preventDefault())}function d(b){e&&clearTimeout(e);g(b,"mouseup");(a.fn.draggable.isDragging||a.fn.resizable.isResizing)&&b.preventDefault()}function g(b,c,d){c=new a.Event(c);c.pageX=b.changedTouches[0].pageX;c.pageY=b.changedTouches[0].pageY;c.which=d||1;a(b.target).trigger(c)}var e=null,k=!1;document.addEventListener&&(document.addEventListener("touchstart",c,!0),document.addEventListener("touchmove",b,!0),document.addEventListener("touchend",d,!0))})(jQuery);