(()=>{"use strict";var e,s={"./src/blocks/slideshow/edit.js":(e,s,o)=>{o.r(s),o.d(s,{default:()=>c});var r=o("react");const l=window.wp.i18n;var t=o("@wordpress/block-editor");o("./src/blocks/slideshow/editor.scss");const i=["core/cover"];function c(){return(0,r.createElement)("div",{...(0,t.useBlockProps)()},(0,r.createElement)("p",null,(0,l.__)("Slideshow Block","slideshow")),(0,r.createElement)(t.InnerBlocks,{allowedBlocks:i,templateLock:!1,renderAppender:t.InnerBlocks.ButtonBlockAppender}))}},"./src/blocks/slideshow/index.js":(e,s,o)=>{const r=window.wp.blocks;o("./src/blocks/slideshow/style.scss");var l=o("./src/blocks/slideshow/edit.js"),t=o("./src/blocks/slideshow/save.js");const i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/slideshow","version":"0.1.0","title":"Slideshow","category":"wpzoom-blocks","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{},"textdomain":"slideshow","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');(0,r.registerBlockType)(i.name,{edit:l.default,save:t.default})},"./src/blocks/slideshow/save.js":(e,s,o)=>{o.r(s),o.d(s,{default:()=>t});var r=o("react"),l=o("@wordpress/block-editor");function t(){return(0,r.createElement)("div",{...l.useBlockProps.save()},(0,r.createElement)(l.InnerBlocks.Content,null))}},"./src/blocks/slideshow/editor.scss":(e,s,o)=>{o.r(s)},"./src/blocks/slideshow/style.scss":(e,s,o)=>{o.r(s)},react:e=>{e.exports=window.React},"@wordpress/block-editor":e=>{e.exports=window.wp.blockEditor}},o={};function r(e){var l=o[e];if(void 0!==l)return l.exports;var t=o[e]={exports:{}};return s[e](t,t.exports,r),t.exports}r.m=s,e=[],r.O=(s,o,l,t)=>{if(!o){var i=1/0;for(a=0;a<e.length;a++){o=e[a][0],l=e[a][1],t=e[a][2];for(var c=!0,n=0;n<o.length;n++)(!1&t||i>=t)&&Object.keys(r.O).every((e=>r.O[e](o[n])))?o.splice(n--,1):(c=!1,t<i&&(i=t));if(c){e.splice(a--,1);var d=l();void 0!==d&&(s=d)}}return s}t=t||0;for(var a=e.length;a>0&&e[a-1][2]>t;a--)e[a]=e[a-1];e[a]=[o,l,t]},r.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return r.d(s,{a:s}),s},r.d=(e,s)=>{for(var o in s)r.o(s,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})},r.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={"blocks/slideshow/index":0,"blocks/slideshow/style-index":0};r.O.j=s=>0===e[s];var s=(s,o)=>{var l,t,i=o[0],c=o[1],n=o[2],d=0;if(i.some((s=>0!==e[s]))){for(l in c)r.o(c,l)&&(r.m[l]=c[l]);if(n)var a=n(r)}for(s&&s(o);d<i.length;d++)t=i[d],r.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return r.O(a)},o=self.webpackChunkwpzoom_slideshow_block=self.webpackChunkwpzoom_slideshow_block||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))})();var l=r.O(void 0,["blocks/slideshow/style-index"],(()=>r("./src/blocks/slideshow/index.js")));l=r.O(l)})();
//# sourceMappingURL=index.js.map