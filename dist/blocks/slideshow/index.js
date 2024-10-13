(()=>{"use strict";var e,o={658:(e,o,n)=>{n.d(o,{A:()=>p});const s=window.wp.i18n;var a=n(715);const i=window.wp.components,t=window.wp.element;var r=n(790);const l=["wpzoom/slide"];function p({attributes:e,setAttributes:o}){const{useNavigation:n,usePagination:p,autoplay:d,loop:c,speed:u,spaceBetween:w,slidesPerView:g,uniqueId:v}=e;return(0,t.useEffect)((()=>{if(!v){const e="slideshow-"+Math.random().toString(36).substr(2,9);o({uniqueId:e})}}),[v]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.InspectorControls,{children:(0,r.jsxs)(i.PanelBody,{title:"Slideshow Settings",initialOpen:!0,children:[(0,r.jsx)(i.ToggleControl,{label:"Navigation",checked:n,onChange:e=>o({useNavigation:e})}),(0,r.jsx)(i.ToggleControl,{label:"Pagination",checked:p,onChange:e=>o({usePagination:e})}),(0,r.jsx)(i.ToggleControl,{label:"Autoplay",checked:d,onChange:e=>o({autoplay:e})}),(0,r.jsx)(i.ToggleControl,{label:"Loop",checked:c,onChange:e=>o({loop:e})}),(0,r.jsx)(i.RangeControl,{label:"Speed (ms)",value:u,onChange:e=>o({speed:e}),min:100,max:5e3}),(0,r.jsx)(i.RangeControl,{label:"Space Between (px)",value:w,onChange:e=>o({spaceBetween:e}),min:0,max:200}),(0,r.jsx)(i.RangeControl,{label:"Slides Per View",value:g,onChange:e=>o({slidesPerView:e}),min:1,max:5})]})}),(0,r.jsxs)("div",{...(0,a.useBlockProps)(),children:[(0,r.jsx)("p",{children:(0,s.__)("Slideshow Block","wpzoom-slideshow-block")}),(0,r.jsx)(a.InnerBlocks,{allowedBlocks:l,templateLock:!1,renderAppender:a.InnerBlocks.ButtonBlockAppender})]})]})}},290:(e,o,n)=>{const s=window.wp.blocks;var a=n(658),i=n(627);const t=JSON.parse('{"UU":"wpzoom/slideshow"}');(0,s.registerBlockType)(t.UU,{edit:a.A,save:i.A})},627:(e,o,n)=>{n.d(o,{A:()=>i});var s=n(715),a=n(790);function i({attributes:e}){const{useNavigation:o,usePagination:n,autoplay:i,loop:t,speed:r,spaceBetween:l,slidesPerView:p,uniqueId:d}=e,c=JSON.stringify({useNavigation:o,usePagination:n,autoplay:i,loop:t,speed:r,spaceBetween:l,slidesPerView:p}),u=s.useBlockProps.save();return u.className+=" swiper-wrapper",(0,a.jsxs)("div",{id:d,className:"slideshow-container swiper","data-swiper":c,children:[(0,a.jsx)("div",{...u,children:(0,a.jsx)(s.InnerBlocks.Content,{})}),n&&(0,a.jsx)("div",{className:"swiper-pagination"}),o&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"swiper-button-prev"}),(0,a.jsx)("div",{className:"swiper-button-next"})]})]})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor}},n={};function s(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.m=o,e=[],s.O=(o,n,a,i)=>{if(!n){var t=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&i||t>=i)&&Object.keys(s.O).every((e=>s.O[e](n[l])))?n.splice(l--,1):(r=!1,i<t&&(t=i));if(r){e.splice(d--,1);var p=a();void 0!==p&&(o=p)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]},s.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return s.d(o,{a:o}),o},s.d=(e,o)=>{for(var n in o)s.o(o,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={721:0,179:0,960:0,405:0};s.O.j=o=>0===e[o];var o=(o,n)=>{var a,i,t=n[0],r=n[1],l=n[2],p=0;if(t.some((o=>0!==e[o]))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var d=l(s)}for(o&&o(n);p<t.length;p++)i=t[p],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},n=self.webpackChunkwpzoom_slideshow_block=self.webpackChunkwpzoom_slideshow_block||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var a=s.O(void 0,[405],(()=>s(290)));a=s.O(a)})();
//# sourceMappingURL=index.js.map