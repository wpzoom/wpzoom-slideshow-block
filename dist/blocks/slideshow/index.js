(()=>{"use strict";var e,o={658:(e,o,l)=>{l.d(o,{A:()=>c});const n=window.wp.i18n;var s=l(715);const a=window.wp.components,r=window.wp.element;var t=l(790);const i=["wpzoom/slide"];function c({attributes:e,setAttributes:o}){const{useNavigation:l,usePagination:c,useScrollbar:d,autoplay:p,loop:u,speed:g,spaceBetween:w,slidesPerView:v,effect:h,direction:b,freeMode:f,centeredSlides:x,cssMode:C,gridRows:j,controller:m,uniqueId:k}=e;return(0,r.useEffect)((()=>{if(!k){const e="slideshow-"+Math.random().toString(36).substr(2,9);o({uniqueId:e})}}),[k]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.InspectorControls,{children:(0,t.jsxs)(a.PanelBody,{title:"Slideshow Settings",initialOpen:!0,children:[(0,t.jsx)(a.ToggleControl,{label:"Navigation",checked:l,onChange:e=>o({useNavigation:e})}),(0,t.jsx)(a.ToggleControl,{label:"Pagination",checked:c,onChange:e=>o({usePagination:e})}),(0,t.jsx)(a.ToggleControl,{label:"Scrollbar",checked:d,onChange:e=>o({useScrollbar:e})}),(0,t.jsx)(a.ToggleControl,{label:"Autoplay",checked:p,onChange:e=>o({autoplay:e})}),(0,t.jsx)(a.ToggleControl,{label:"Loop",checked:u,onChange:e=>o({loop:e})}),(0,t.jsx)(a.ToggleControl,{label:"Free Mode",checked:f,onChange:e=>o({freeMode:e})}),(0,t.jsx)(a.ToggleControl,{label:"Centered Slides",checked:x,onChange:e=>o({centeredSlides:e})}),(0,t.jsx)(a.ToggleControl,{label:"CSS Mode",checked:C,onChange:e=>o({cssMode:e})}),(0,t.jsx)(a.ToggleControl,{label:"Controller",checked:m,onChange:e=>o({controller:e})}),(0,t.jsx)(a.RangeControl,{label:"Speed (ms)",value:g,onChange:e=>o({speed:e}),min:100,max:5e3}),(0,t.jsx)(a.RangeControl,{label:"Space Between (px)",value:w,onChange:e=>o({spaceBetween:e}),min:0,max:200}),(0,t.jsx)(a.RangeControl,{label:"Slides Per View",value:v,onChange:e=>o({slidesPerView:e}),min:1,max:5}),(0,t.jsx)(a.RangeControl,{label:"Grid Rows",value:j,onChange:e=>o({gridRows:e}),min:1,max:5}),(0,t.jsx)(a.SelectControl,{label:"Effect",value:h,options:[{label:"Slide",value:"slide"},{label:"Fade",value:"fade"},{label:"Cube",value:"cube"},{label:"Flip",value:"flip"},{label:"Coverflow",value:"coverflow"}],onChange:e=>o({effect:e})}),(0,t.jsx)(a.SelectControl,{label:"Direction",value:b,options:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}],onChange:e=>o({direction:e})})]})}),(0,t.jsxs)("div",{...(0,s.useBlockProps)(),children:[(0,t.jsx)("p",{children:(0,n.__)("Slideshow Block","wpzoom-slideshow-block")}),(0,t.jsx)(s.InnerBlocks,{allowedBlocks:i,templateLock:!1,renderAppender:s.InnerBlocks.ButtonBlockAppender})]})]})}},290:(e,o,l)=>{const n=window.wp.blocks;var s=l(658),a=l(627);const r=JSON.parse('{"UU":"wpzoom/slideshow"}');(0,n.registerBlockType)(r.UU,{edit:s.A,save:a.A})},627:(e,o,l)=>{l.d(o,{A:()=>a});var n=l(715),s=l(790);function a({attributes:e}){const{useNavigation:o,usePagination:l,useScrollbar:a,autoplay:r,loop:t,speed:i,spaceBetween:c,slidesPerView:d,effect:p,direction:u,freeMode:g,centeredSlides:w,cssMode:v,gridRows:h,uniqueId:b}=e,f=JSON.stringify({useNavigation:o,usePagination:l,useScrollbar:a,autoplay:r,loop:t,speed:i,spaceBetween:c,slidesPerView:d,effect:p,direction:u,freeMode:g,centeredSlides:w,cssMode:v,grid:{rows:h}}),x=n.useBlockProps.save();return x.className+=" swiper-wrapper",(0,s.jsxs)("div",{id:b,className:"slideshow-container swiper","data-swiper":f,children:[(0,s.jsx)("div",{...x,children:(0,s.jsx)(n.InnerBlocks.Content,{})}),l&&(0,s.jsx)("div",{className:"swiper-pagination"}),o&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"swiper-button-prev"}),(0,s.jsx)("div",{className:"swiper-button-next"})]}),a&&(0,s.jsx)("div",{className:"swiper-scrollbar"})]})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor}},l={};function n(e){var s=l[e];if(void 0!==s)return s.exports;var a=l[e]={exports:{}};return o[e](a,a.exports,n),a.exports}n.m=o,e=[],n.O=(o,l,s,a)=>{if(!l){var r=1/0;for(d=0;d<e.length;d++){l=e[d][0],s=e[d][1],a=e[d][2];for(var t=!0,i=0;i<l.length;i++)(!1&a||r>=a)&&Object.keys(n.O).every((e=>n.O[e](l[i])))?l.splice(i--,1):(t=!1,a<r&&(r=a));if(t){e.splice(d--,1);var c=s();void 0!==c&&(o=c)}}return o}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[l,s,a]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var l in o)n.o(o,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={721:0,179:0,960:0,405:0};n.O.j=o=>0===e[o];var o=(o,l)=>{var s,a,r=l[0],t=l[1],i=l[2],c=0;if(r.some((o=>0!==e[o]))){for(s in t)n.o(t,s)&&(n.m[s]=t[s]);if(i)var d=i(n)}for(o&&o(l);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},l=self.webpackChunkwpzoom_slideshow_block=self.webpackChunkwpzoom_slideshow_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var s=n.O(void 0,[405],(()=>n(290)));s=n.O(s)})();
//# sourceMappingURL=index.js.map