/* =========================================================
 * bootstrap-treeview.js v1.2.0
 * =========================================================
 * Copyright 2013 Jonathan Miles
 * Project URL : http://www.jondmiles.com/bootstrap-treeview
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
(function(c,l,p,h){var m,k,n;m={injectStyle:!0,levels:2,expandIcon:"glyphicon glyphicon-plus",collapseIcon:"glyphicon glyphicon-minus",emptyIcon:"glyphicon",nodeIcon:"",selectedIcon:"",checkedIcon:"glyphicon glyphicon-check",uncheckedIcon:"glyphicon glyphicon-unchecked",color:h,backColor:h,borderColor:h,onhoverColor:"#F5F5F5",selectedColor:"#FFFFFF",selectedBackColor:"#428bca",searchResultColor:"#D9534F",searchResultBackColor:h,enableLinks:!1,highlightSelected:!0,highlightSearchResults:!0,showBorder:!0,showIcon:!0,showCheckbox:!1,showTags:!1,multiSelect:!1,onNodeChecked:h,onNodeCollapsed:h,onNodeDisabled:h,onNodeEnabled:h,onNodeExpanded:h,onNodeSelected:h,onNodeUnchecked:h,onNodeUnselected:h,onSearchComplete:h,onSearchCleared:h};k={silent:!1,ignoreChildren:!1};n={ignoreCase:!0,exactMatch:!1,revealResults:!0};var e=function(a,b){this.$element=c(a);this.elementId=a.id;this.styleId=this.elementId+"-style";this.init(b);return{options:this.options,init:c.proxy(this.init,this),remove:c.proxy(this.remove,this),getNode:c.proxy(this.getNode,this),getParent:c.proxy(this.getParent,this),getSiblings:c.proxy(this.getSiblings,this),getSelected:c.proxy(this.getSelected,this),getUnselected:c.proxy(this.getUnselected,this),getExpanded:c.proxy(this.getExpanded,this),getCollapsed:c.proxy(this.getCollapsed,this),getChecked:c.proxy(this.getChecked,this),getUnchecked:c.proxy(this.getUnchecked,this),getDisabled:c.proxy(this.getDisabled,this),getEnabled:c.proxy(this.getEnabled,this),selectNode:c.proxy(this.selectNode,this),unselectNode:c.proxy(this.unselectNode,this),toggleNodeSelected:c.proxy(this.toggleNodeSelected,this),collapseAll:c.proxy(this.collapseAll,this),collapseNode:c.proxy(this.collapseNode,this),expandAll:c.proxy(this.expandAll,this),expandNode:c.proxy(this.expandNode,this),toggleNodeExpanded:c.proxy(this.toggleNodeExpanded,this),revealNode:c.proxy(this.revealNode,this),checkAll:c.proxy(this.checkAll,this),checkNode:c.proxy(this.checkNode,this),uncheckAll:c.proxy(this.uncheckAll,this),uncheckNode:c.proxy(this.uncheckNode,this),toggleNodeChecked:c.proxy(this.toggleNodeChecked,this),disableAll:c.proxy(this.disableAll,this),disableNode:c.proxy(this.disableNode,this),enableAll:c.proxy(this.enableAll,this),enableNode:c.proxy(this.enableNode,this),toggleNodeDisabled:c.proxy(this.toggleNodeDisabled,this),search:c.proxy(this.search,this),clearSearch:c.proxy(this.clearSearch,this)}};e.prototype.init=function(a){this.tree=[];this.nodes=[];a.data&&("string"===typeof a.data&&(a.data=c.parseJSON(a.data)),this.tree=c.extend(!0,[],a.data),delete a.data);this.options=c.extend({},m,a);this.destroy();this.subscribeEvents();this.setInitialStates({nodes:this.tree},0);this.render()};e.prototype.remove=function(){this.destroy();c.removeData(this,"treeview");c("#"+this.styleId).remove()};e.prototype.destroy=function(){this.initialized&&(this.$wrapper.remove(),this.$wrapper=null,this.unsubscribeEvents(),this.initialized=!1)};e.prototype.unsubscribeEvents=function(){this.$element.off("click");this.$element.off("nodeChecked");this.$element.off("nodeCollapsed");this.$element.off("nodeDisabled");this.$element.off("nodeEnabled");this.$element.off("nodeExpanded");this.$element.off("nodeSelected");this.$element.off("nodeUnchecked");this.$element.off("nodeUnselected");this.$element.off("searchComplete");this.$element.off("searchCleared")};e.prototype.subscribeEvents=function(){this.unsubscribeEvents();this.$element.on("click",c.proxy(this.clickHandler,this));if("function"===typeof this.options.onNodeChecked)this.$element.on("nodeChecked",this.options.onNodeChecked);if("function"===typeof this.options.onNodeCollapsed)this.$element.on("nodeCollapsed",this.options.onNodeCollapsed);if("function"===typeof this.options.onNodeDisabled)this.$element.on("nodeDisabled",this.options.onNodeDisabled);if("function"===typeof this.options.onNodeEnabled)this.$element.on("nodeEnabled",this.options.onNodeEnabled);if("function"===typeof this.options.onNodeExpanded)this.$element.on("nodeExpanded",this.options.onNodeExpanded);if("function"===typeof this.options.onNodeSelected)this.$element.on("nodeSelected",this.options.onNodeSelected);if("function"===typeof this.options.onNodeUnchecked)this.$element.on("nodeUnchecked",this.options.onNodeUnchecked);if("function"===typeof this.options.onNodeUnselected)this.$element.on("nodeUnselected",this.options.onNodeUnselected);if("function"===typeof this.options.onSearchComplete)this.$element.on("searchComplete",this.options.onSearchComplete);if("function"===typeof this.options.onSearchCleared)this.$element.on("searchCleared",this.options.onSearchCleared)};e.prototype.setInitialStates=function(a,b){if(a.nodes){b+=1;var d=this;c.each(a.nodes,function(c,f){f.nodeId=d.nodes.length;f.parentId=a.nodeId;f.hasOwnProperty("selectable")||(f.selectable=!0);f.state=f.state||{};f.state.hasOwnProperty("checked")||(f.state.checked=!1);f.state.hasOwnProperty("disabled")||(f.state.disabled=!1);f.state.hasOwnProperty("expanded")||(f.state.expanded=!f.state.disabled&&b<d.options.levels&&f.nodes&&0<f.nodes.length?!0:!1);f.state.hasOwnProperty("selected")||(f.state.selected=!1);d.nodes.push(f);f.nodes&&d.setInitialStates(f,b)})}};e.prototype.clickHandler=function(a){this.options.enableLinks||a.preventDefault();var b=c(a.target);(a=this.findNode(b))&&!a.state.disabled&&(b=b.attr("class")?b.attr("class").split(" "):[],-1!==b.indexOf("expand-icon")?this.toggleExpandedState(a,k):-1!==b.indexOf("check-icon")?this.toggleCheckedState(a,k):a.selectable?this.toggleSelectedState(a,k):this.toggleExpandedState(a,k),this.render())};e.prototype.findNode=function(a){a=a.closest("li.list-group-item").attr("data-nodeid");(a=this.nodes[a])||console.log("Error: node does not exist");return a};e.prototype.toggleExpandedState=function(a,b){a&&this.setExpandedState(a,!a.state.expanded,b)};e.prototype.setExpandedState=function(a,b,d){b!==a.state.expanded&&(b&&a.nodes?(a.state.expanded=!0,d.silent||this.$element.trigger("nodeExpanded",c.extend(!0,{},a))):b||(a.state.expanded=!1,d.silent||this.$element.trigger("nodeCollapsed",c.extend(!0,{},a)),a.nodes&&!d.ignoreChildren&&c.each(a.nodes,c.proxy(function(a,b){this.setExpandedState(b,!1,d)},this))))};e.prototype.toggleSelectedState=function(a,b){a&&this.setSelectedState(a,!a.state.selected,b)};e.prototype.setSelectedState=function(a,b,d){b!==a.state.selected&&(b?(this.options.multiSelect||c.each(this.findNodes("true","g","state.selected"),c.proxy(function(a,b){this.setSelectedState(b,!1,d)},this)),a.state.selected=!0,d.silent||this.$element.trigger("nodeSelected",c.extend(!0,{},a))):(a.state.selected=!1,d.silent||this.$element.trigger("nodeUnselected",c.extend(!0,{},a))))};e.prototype.toggleCheckedState=function(a,b){a&&this.setCheckedState(a,!a.state.checked,b)};e.prototype.setCheckedState=function(a,b,d){b!==a.state.checked&&(b?(a.state.checked=!0,d.silent||this.$element.trigger("nodeChecked",c.extend(!0,{},a))):(a.state.checked=!1,d.silent||this.$element.trigger("nodeUnchecked",c.extend(!0,{},a))))};e.prototype.setDisabledState=function(a,b,d){b!==a.state.disabled&&(b?(a.state.disabled=!0,this.setExpandedState(a,!1,d),this.setSelectedState(a,!1,d),this.setCheckedState(a,!1,d),d.silent||this.$element.trigger("nodeDisabled",c.extend(!0,{},a))):(a.state.disabled=!1,d.silent||this.$element.trigger("nodeEnabled",c.extend(!0,{},a))))};e.prototype.render=function(){this.initialized||(this.$element.addClass("treeview"),this.$wrapper=c(this.template.list),this.injectStyle(),this.initialized=!0);this.$element.empty().append(this.$wrapper.empty());this.buildTree(this.tree,0)};e.prototype.buildTree=function(a,b){if(a){b+=1;var d=this;c.each(a,function(a,f){for(var e=c(d.template.item).addClass("node-"+d.elementId).addClass(f.state.checked?"node-checked":"").addClass(f.state.disabled?"node-disabled":"").addClass(f.state.selected?"node-selected":"").addClass(f.searchResult?"search-result":"").attr("data-nodeid",f.nodeId).attr("style",d.buildStyleOverride(f)),g=0;g<b-1;g++)e.append(d.template.indent);g=[];f.nodes?(g.push("expand-icon"),f.state.expanded?g.push(d.options.collapseIcon):g.push(d.options.expandIcon)):g.push(d.options.emptyIcon);e.append(c(d.template.icon).addClass(g.join(" ")));d.options.showIcon&&(g=["node-icon"],g.push(f.icon||d.options.nodeIcon),f.state.selected&&(g.pop(),g.push(f.selectedIcon||d.options.selectedIcon||f.icon||d.options.nodeIcon)),e.append(c(d.template.icon).addClass(g.join(" "))));d.options.showCheckbox&&(g=["check-icon"],f.state.checked?g.push(d.options.checkedIcon):g.push(d.options.uncheckedIcon),e.append(c(d.template.icon).addClass(g.join(" "))));d.options.enableLinks?e.append(c(d.template.link).attr("href",f.href).append(f.text)):e.append(f.text);d.options.showTags&&f.tags&&c.each(f.tags,function(a,b){e.append(c(d.template.badge).append(b))});d.$wrapper.append(e);if(f.nodes&&f.state.expanded&&!f.state.disabled)return d.buildTree(f.nodes,b)})}};e.prototype.buildStyleOverride=function(a){if(a.state.disabled)return"";var b=a.color,d=a.backColor;this.options.highlightSelected&&a.state.selected&&(this.options.selectedColor&&(b=this.options.selectedColor),this.options.selectedBackColor&&(d=this.options.selectedBackColor));this.options.highlightSearchResults&&a.searchResult&&!a.state.disabled&&(this.options.searchResultColor&&(b=this.options.searchResultColor),this.options.searchResultBackColor&&(d=this.options.searchResultBackColor));return"color:"+b+";background-color:"+d+";"};e.prototype.injectStyle=function(){this.options.injectStyle&&!p.getElementById(this.styleId)&&c('\x3cstyle type\x3d"text/css" id\x3d"'+this.styleId+'"\x3e '+this.buildStyle()+" \x3c/style\x3e").appendTo("head")};e.prototype.buildStyle=function(){var a=".node-"+this.elementId+"{";this.options.color&&(a+="color:"+this.options.color+";");this.options.backColor&&(a+="background-color:"+this.options.backColor+";");this.options.showBorder?this.options.borderColor&&(a+="border:1px solid "+this.options.borderColor+";"):a+="border:none;";a+="}";this.options.onhoverColor&&(a+=".node-"+this.elementId+":not(.node-disabled):hover{background-color:"+this.options.onhoverColor+";}");return this.css+a};e.prototype.template={list:'\x3cul class\x3d"list-group"\x3e\x3c/ul\x3e',item:'\x3cli class\x3d"list-group-item"\x3e\x3c/li\x3e',indent:'\x3cspan class\x3d"indent"\x3e\x3c/span\x3e',icon:'\x3cspan class\x3d"icon"\x3e\x3c/span\x3e',link:'\x3ca href\x3d"#" style\x3d"color:inherit;"\x3e\x3c/a\x3e',badge:'\x3cspan class\x3d"badge"\x3e\x3c/span\x3e'};e.prototype.css=".treeview .list-group-item{cursor:pointer}.treeview span.indent{margin-left:10px;margin-right:10px}.treeview span.icon{width:12px;margin-right:5px}.treeview .node-disabled{color:silver;cursor:not-allowed}";e.prototype.getNode=function(a){return this.nodes[a]};e.prototype.getParent=function(a){a=this.identifyNode(a);return this.nodes[a.parentId]};e.prototype.getSiblings=function(a){var b=this.identifyNode(a);a=this.getParent(b);return(a?a.nodes:this.tree).filter(function(a){return a.nodeId!==b.nodeId})};e.prototype.getSelected=function(){return this.findNodes("true","g","state.selected")};e.prototype.getUnselected=function(){return this.findNodes("false","g","state.selected")};e.prototype.getExpanded=function(){return this.findNodes("true","g","state.expanded")};e.prototype.getCollapsed=function(){return this.findNodes("false","g","state.expanded")};e.prototype.getChecked=function(){return this.findNodes("true","g","state.checked")};e.prototype.getUnchecked=function(){return this.findNodes("false","g","state.checked")};e.prototype.getDisabled=function(){return this.findNodes("true","g","state.disabled")};e.prototype.getEnabled=function(){return this.findNodes("false","g","state.disabled")};e.prototype.selectNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setSelectedState(a,!0,b)},this));this.render()};e.prototype.unselectNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setSelectedState(a,!1,b)},this));this.render()};e.prototype.toggleNodeSelected=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.toggleSelectedState(a,b)},this));this.render()};e.prototype.collapseAll=function(a){var b=this.findNodes("true","g","state.expanded");this.forEachIdentifier(b,a,c.proxy(function(a,b){this.setExpandedState(a,!1,b)},this));this.render()};e.prototype.collapseNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setExpandedState(a,!1,b)},this));this.render()};e.prototype.expandAll=function(a){if((a=c.extend({},k,a))&&a.levels)this.expandLevels(this.tree,a.levels,a);else{var b=this.findNodes("false","g","state.expanded");this.forEachIdentifier(b,a,c.proxy(function(a,b){this.setExpandedState(a,!0,b)},this))}this.render()};e.prototype.expandNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setExpandedState(a,!0,b);a.nodes&&b&&b.levels&&this.expandLevels(a.nodes,b.levels-1,b)},this));this.render()};e.prototype.expandLevels=function(a,b,d){d=c.extend({},k,d);c.each(a,c.proxy(function(a,c){this.setExpandedState(c,0<b?!0:!1,d);c.nodes&&this.expandLevels(c.nodes,b-1,d)},this))};e.prototype.revealNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){for(var c=this.getParent(a);c;)this.setExpandedState(c,!0,b),c=this.getParent(c)},this));this.render()};e.prototype.toggleNodeExpanded=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.toggleExpandedState(a,b)},this));this.render()};e.prototype.checkAll=function(a){var b=this.findNodes("false","g","state.checked");this.forEachIdentifier(b,a,c.proxy(function(a,b){this.setCheckedState(a,!0,b)},this));this.render()};e.prototype.checkNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setCheckedState(a,!0,b)},this));this.render()};e.prototype.uncheckAll=function(a){var b=this.findNodes("true","g","state.checked");this.forEachIdentifier(b,a,c.proxy(function(a,b){this.setCheckedState(a,!1,b)},this));this.render()};e.prototype.uncheckNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setCheckedState(a,!1,b)},this));this.render()};e.prototype.toggleNodeChecked=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.toggleCheckedState(a,b)},this));this.render()};e.prototype.disableAll=function(a){var b=this.findNodes("false","g","state.disabled");this.forEachIdentifier(b,a,c.proxy(function(a,b){this.setDisabledState(a,!0,b)},this));this.render()};e.prototype.disableNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setDisabledState(a,!0,b)},this));this.render()};e.prototype.enableAll=function(a){var b=this.findNodes("true","g","state.disabled");this.forEachIdentifier(b,a,c.proxy(function(a,b){this.setDisabledState(a,!1,b)},this));this.render()};e.prototype.enableNode=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setDisabledState(a,!1,b)},this));this.render()};e.prototype.toggleNodeDisabled=function(a,b){this.forEachIdentifier(a,b,c.proxy(function(a,b){this.setDisabledState(a,!a.state.disabled,b)},this));this.render()};e.prototype.forEachIdentifier=function(a,b,d){b=c.extend({},k,b);a instanceof Array||(a=[a]);c.each(a,c.proxy(function(a,c){d(this.identifyNode(c),b)},this))};e.prototype.identifyNode=function(a){return"number"===typeof a?this.nodes[a]:a};e.prototype.search=function(a,b){b=c.extend({},n,b);this.clearSearch({render:!1});var d=[];a&&0<a.length&&(b.exactMatch&&(a="^"+a+"$"),d="g",b.ignoreCase&&(d+="i"),d=this.findNodes(a,d),c.each(d,function(a,b){b.searchResult=!0}));b.revealResults?this.revealNode(d):this.render();this.$element.trigger("searchComplete",c.extend(!0,{},d));return d};e.prototype.clearSearch=function(a){a=c.extend({},{render:!0},a);var b=c.each(this.findNodes("true","g","searchResult"),function(a,b){b.searchResult=!1});a.render&&this.render();this.$element.trigger("searchCleared",c.extend(!0,{},b))};e.prototype.findNodes=function(a,b,d){b=b||"g";d=d||"text";var e=this;return c.grep(this.nodes,function(c){c=e.getNodeValue(c,d);if("string"===typeof c)return c.match(new RegExp(a,b))})};e.prototype.getNodeValue=function(a,b){var c=b.indexOf(".");if(0<c){var e=a[b.substring(0,c)],c=b.substring(c+1,b.length);return this.getNodeValue(e,c)}return a.hasOwnProperty(b)?a[b].toString():h};c.fn.treeview=function(a,b){var d;this.each(function(){var g=c.data(this,"treeview");"string"===typeof a?g?c.isFunction(g[a])&&"_"!==a.charAt(0)?(b instanceof Array||(b=[b]),d=g[a].apply(g,b)):l.console&&l.console.error("No such method : "+a):l.console&&l.console.error("Not initialized, can not call method : "+a):"boolean"===typeof a?d=g:c.data(this,"treeview",new e(this,c.extend(!0,{},a)))});return d||this}})(jQuery,window,document);