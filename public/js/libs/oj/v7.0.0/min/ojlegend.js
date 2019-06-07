/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtLegend","ojs/ojmap","ojs/ojkeyset"],function(e,t,n,i,o,s,r){"use strict";var a={properties:{as:{type:"string",value:""},data:{type:"object"},drilling:{type:"string",enumValues:["off","on"],value:"off"},expanded:{type:"KeySet",writeback:!0},halign:{type:"string",enumValues:["center","end","start"],value:"start"},hiddenCategories:{type:"Array<string>",writeback:!0,value:[]},hideAndShowBehavior:{type:"string",enumValues:["off","on"],value:"off"},highlightedCategories:{type:"Array<string>",writeback:!0,value:[]},hoverBehavior:{type:"string",enumValues:["dim","none"],value:"none"},hoverBehaviorDelay:{type:"number",value:200},orientation:{type:"string",enumValues:["horizontal","vertical"],value:"vertical"},scrolling:{type:"string",enumValues:["asNeeded","off"],value:"asNeeded"},sections:{type:"Array<Object>"},symbolHeight:{type:"number",value:0},symbolWidth:{type:"number",value:0},textStyle:{type:"object",value:{}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{componentName:{type:"string"},labelAndValue:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelInvalidData:{type:"string"},labelNoData:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"},tooltipCollapse:{type:"string"},tooltipExpand:{type:"string"}}},valign:{type:"string",enumValues:["bottom","middle","top"],value:"top"}},methods:{getSection:{},getItem:{},getPreferredSize:{},getContextByNode:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojDrill:{}},extension:{}},l={properties:{borderColor:{type:"string",value:""},categories:{type:"Array<string>",value:[]},categoryVisibility:{type:"string",enumValues:["hidden","visible"],value:"visible"},color:{type:"string"},drilling:{type:"string",enumValues:["inherit","off","on"],value:"inherit"},lineStyle:{type:"string",enumValues:["dashed","dotted","solid"],value:"solid"},lineWidth:{type:"number"},markerColor:{type:"string"},markerShape:{type:"string",value:"square"},markerSvgClassName:{type:"string",value:""},markerSvgStyle:{type:"object"},pattern:{type:"string",enumValues:["largeChecker","largeCrosshatch","largeDiagonalLeft","largeDiagonalRight","largeDiamond","largeTriangle","none","smallChecker","smallCrosshatch","smallDiagonalLeft","smallDiagonalRight","smallDiamond","smallTriangle"],value:"none"},shortDesc:{type:"string",value:""},source:{type:"string",value:""},svgClassName:{type:"string",value:""},svgStyle:{type:"object"},symbolType:{type:"string",enumValues:["image","line","lineWithMarker","marker"],value:"marker"},text:{type:"string",value:""}},extension:{}},u={properties:{collapsible:{type:"string",enumValues:["off","on"],value:"off"},text:{type:"string",value:""},textHalign:{type:"string",enumValues:["center","end","start"],value:"start"},textStyle:{type:"object",value:{}}},extension:{}};e.__registerWidget("oj.ojLegend",t.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{as:"",data:null,drilling:"off",halign:"start",hiddenCategories:[],hideAndShowBehavior:"off",highlightedCategories:[],hoverBehavior:"none",hoverBehaviorDelay:200,orientation:"vertical",scrolling:"asNeeded",sections:null,symbolHeight:0,symbolWidth:0,textStyle:{},valign:"top",drill:null},_CreateDvtComponent:function(e,t,n){return o.Legend.newInstance(e,t,n)},_InitOptions:function(e,t){this._super(e,t);var n=this.options.expanded;this.options.expanded=n},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-legend-item"===t?(t="section"+this._GetStringFromIndexPath(e.sectionIndexPath),t+=":item["+e.itemIndex+"]"):"oj-legend-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t={};if(e.indexOf(":item")>0){var n=e.indexOf(":item"),i=e.substring(0,n),o=e.substring(n);t.subId="oj-legend-item",t.sectionIndexPath=this._GetIndexPath(i),t.itemIndex=this._GetFirstIndex(o)}else"tooltip"===e&&(t.subId="oj-legend-tooltip");return t},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-legend"),e},_GetChildStyleClasses:function(){var e=this._super();return e["oj-legend"]={path:"textStyle",property:"TEXT"},e["oj-legend-title"]={path:"titleStyle",property:"TEXT"},e["oj-legend-section-title"]={path:"_sectionTitleStyle",property:"TEXT"},e},_GetEventTypes:function(){return["drill","expand","collapse"]},_HandleEvent:function(e){var t=e.type;"drill"===t?this._trigger("drill",null,{id:e.id}):"expand"===t||"collapse"===t?this._UserOptionChange("expanded",e.expanded):this._super(e)},_LoadResources:function(){null==this.options._resources&&(this.options._resources={});var e=this.options._resources;e.closedEnabled="oj-legend-section-close-icon",e.closedOver="oj-legend-section-close-icon oj-hover",e.closedDown="oj-legend-section-close-icon oj-active",e.openEnabled="oj-legend-section-open-icon",e.openOver="oj-legend-section-open-icon oj-hover",e.openDown="oj-legend-section-open-icon oj-active"},_GetSimpleDataProviderConfigs:function(){return{data:{templateName:function(e){return e&&e.children?"sectionTemplate":"itemTemplate"},templateElementName:function(e){return e&&e.children?"oj-legend-section":"oj-legend-item"},resultPath:"sections",getAliasedPropertyNames:function(e){return"oj-legend-section"===e?{text:"title",textHalign:"titleHalign",textStyle:"titleStyle"}:{}},processChildrenData:function(e,t,n){e.sections=[],e.items=[];for(var i=0;i<n.length;i++){var o=n[i];t.children[i].children?e.sections.push(o):e.items.push(o)}},expandedKeySet:new e.AllKeySetImpl,processOptionData:function(e){for(var t={sections:[],items:[]},n=0;n<e.length;n++)e[n].items||e[n].sections?t.sections.push(e[n]):t.items.push(e[n]);return t.items.length>0?[t]:e}}}},_Render:function(){this._super()},getTitle:function(){return this._component.getAutomation().getTitle()},getSection:function(e){var t=this._component.getAutomation().getSection(e);return t&&(t.getSection=function(e){return t.sections?t.sections[e]:null},t.getItem=function(e){return t.items?t.items[e]:null}),t},getItem:function(e){return this._component.getAutomation().getItem(e)},getPreferredSize:function(e,t){var n=!1;if(this.options.data&&this._DataProviderHandler.isDataProvider(this.options.data))n=!0;else for(var i=this.options.sections?this.options.sections:[],o=0;o<i.length;o++){var s=i[o].items;s&&s.then&&(n=!0)}var r=n?null:this.options,a=this._component.getPreferredSize(r,e,t);return{width:a.w,height:a.h}},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-legend-tooltip"!==t.subId?t:null},_GetComponentDeferredDataPaths:function(){return{sections:["items"],root:["data"]}},_GetComponentNoClonePaths:function(){var e=this._super();return e.sections={items:!0},e}}),n.setDefaultOptions({ojLegend:{expanded:n.createDynamicPropertyGetter(function(t){return t.isCustomElement&&t.element.getAttribute("data")?new e.AllKeySetImpl:null})}}),a.extension._WIDGET_NAME="ojLegend",e.CustomElementBridge.register("oj-legend",{metadata:a}),function(){l.extension._CONSTRUCTOR=function(){};e.CustomElementBridge.register("oj-legend-item",{metadata:l,parseFunction:i.shapeParseFunction({"marker-shape":!0},{circle:!0,ellipse:!0,diamond:!0,triangleUp:!0,triangleDown:!0,plus:!0,human:!0,rectangle:!0,star:!0,square:!0})})}(),u.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-legend-section",{metadata:u})});