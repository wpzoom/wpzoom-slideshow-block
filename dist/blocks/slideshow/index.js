(()=>{"use strict";var e,o={391:(e,o,l)=>{l.d(o,{A:()=>n});var s=l(609),r=l(573);const n=(0,s.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(r.Path,{d:"m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z"}))},820:(e,o,l)=>{l.d(o,{A:()=>n});var s=l(609),r=l(573);const n=(0,s.createElement)(r.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,s.createElement)(r.Path,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"}))},9:(e,o,l)=>{l.d(o,{A:()=>u});const s=window.wp.i18n;var r=l(715);const n=window.wp.components,a=window.wp.element,t=window.wp.data;var i=l(820),c=l(391),d=l(790);const p=["wpzoom/slide"],w=[["wpzoom/slide",{},[["core/cover",{url:wpzoomSlideshowData.pluginUrl+"assets/media/demo.jpg",customOverlayColor:"rgba(0, 0, 0, 0.3)",lock:{move:!0,remove:!0}}]]],["wpzoom/slide",{},[["core/cover",{backgroundType:"video",url:wpzoomSlideshowData.pluginUrl+"assets/media/demo.mp4",customOverlayColor:"rgba(0, 0, 0, 0.3)",lock:{move:!0,remove:!0}}]]]];function u({clientId:e,isSelected:o,attributes:l,setAttributes:u}){const{useNavigation:v,usePagination:g,useScrollbar:C,autoplay:h,loop:m,speed:x,spaceBetween:b,slidesPerView:f,effect:j,direction:S,freeMode:k,centeredSlides:N,cssMode:y,gridRows:B,controller:P,uniqueId:O}=l,M=(0,a.useRef)(null),R=(0,a.useRef)(null),[A,L]=(0,a.useState)(!1),T=(0,t.useSelect)((o=>o(r.store).hasSelectedInnerBlock(e,!0))),{children:z,...V}=(0,r.useInnerBlocksProps)((0,r.useBlockProps)(),{allowedBlocks:p,template:w,renderAppender:!1});return(0,a.useEffect)((()=>{if(!O){const e="slideshow-"+Math.random().toString(36).substr(2,9);u({uniqueId:e})}}),[O]),(0,a.useEffect)((()=>{A?function(){const e=M.current?.querySelector(".swiper");R.current?.destroy?.(),R.current=new Swiper(e,{slidesPerView:1,observeSlideChildren:!0,preventClicks:!1,allowTouchMove:!1,...l})}():R.current?.destroy?.()}),[A]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.InspectorControls,{children:(0,d.jsxs)(n.PanelBody,{title:(0,s.__)("Slideshow Settings","wpzoom-slideshow-block"),initialOpen:!0,children:[(0,d.jsx)(n.ToggleControl,{label:"Navigation",checked:v,onChange:e=>u({useNavigation:e})}),(0,d.jsx)(n.ToggleControl,{label:"Pagination",checked:g,onChange:e=>u({usePagination:e})}),(0,d.jsx)(n.ToggleControl,{label:"Scrollbar",checked:C,onChange:e=>u({useScrollbar:e})}),(0,d.jsx)(n.ToggleControl,{label:"Autoplay",checked:h,onChange:e=>u({autoplay:e})}),(0,d.jsx)(n.ToggleControl,{label:"Loop",checked:m,onChange:e=>u({loop:e})}),(0,d.jsx)(n.ToggleControl,{label:"Free Mode",checked:k,onChange:e=>u({freeMode:e})}),(0,d.jsx)(n.ToggleControl,{label:"Centered Slides",checked:N,onChange:e=>u({centeredSlides:e})}),(0,d.jsx)(n.ToggleControl,{label:"CSS Mode",checked:y,onChange:e=>u({cssMode:e})}),(0,d.jsx)(n.ToggleControl,{label:"Controller",checked:P,onChange:e=>u({controller:e})}),(0,d.jsx)(n.RangeControl,{label:"Speed (ms)",value:x,onChange:e=>u({speed:e}),min:100,max:5e3}),(0,d.jsx)(n.RangeControl,{label:"Space Between (px)",value:b,onChange:e=>u({spaceBetween:e}),min:0,max:200}),(0,d.jsx)(n.RangeControl,{label:"Slides Per View",value:f,onChange:e=>u({slidesPerView:e}),min:1,max:5}),(0,d.jsx)(n.RangeControl,{label:"Grid Rows",value:B,onChange:e=>u({gridRows:e}),min:1,max:5}),(0,d.jsx)(n.SelectControl,{label:"Effect",value:j,options:[{label:"Slide",value:"slide"},{label:"Fade",value:"fade"},{label:"Cube",value:"cube"},{label:"Flip",value:"flip"},{label:"Coverflow",value:"coverflow"}],onChange:e=>u({effect:e})}),(0,d.jsx)(n.SelectControl,{label:"Direction",value:S,options:[{label:"Horizontal",value:"horizontal"},{label:"Vertical",value:"vertical"}],onChange:e=>u({direction:e})})]})}),(0,d.jsxs)("div",{...(0,r.useBlockProps)(),children:[(o||T)&&(0,d.jsx)("div",{className:"toggle-edit-mode",children:A?(0,d.jsx)(n.Button,{onClick:()=>L(!1),variant:"primary",icon:c.A,children:"Switch to edit mode"}):(0,d.jsx)(n.Button,{onClick:()=>L(!0),variant:"primary",icon:i.A,children:"Switch to preview mode"})}),(0,d.jsx)("div",{className:"slideshow-container",ref:M,children:A?(0,d.jsxs)("div",{id:O,className:"swiper",children:[(0,d.jsx)("div",{className:"swiper-wrapper",children:z}),g&&(0,d.jsx)("div",{className:"swiper-pagination"}),v&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"swiper-button-prev"}),(0,d.jsx)("div",{className:"swiper-button-next"})]}),C&&(0,d.jsx)("div",{className:"swiper-scrollbar"})]}):z}),(0,d.jsx)("div",{className:"append-slide-button",children:(0,d.jsx)(r.ButtonBlockAppender,{rootClientId:e})})]})]})}},290:(e,o,l)=>{const s=window.wp.blocks;var r=l(9),n=l(627);const a=JSON.parse('{"UU":"wpzoom/slideshow"}');(0,s.registerBlockType)(a.UU,{edit:r.A,save:n.A})},627:(e,o,l)=>{l.d(o,{A:()=>n});var s=l(715),r=l(790);function n({attributes:e}){const{useNavigation:o,usePagination:l,useScrollbar:n,autoplay:a,loop:t,speed:i,spaceBetween:c,slidesPerView:d,effect:p,direction:w,freeMode:u,centeredSlides:v,cssMode:g,gridRows:C,uniqueId:h}=e,m=JSON.stringify({useNavigation:o,usePagination:l,useScrollbar:n,autoplay:a,loop:t,speed:i,spaceBetween:c,slidesPerView:d,effect:p,direction:w,freeMode:u,centeredSlides:v,cssMode:g,grid:{rows:C}}),x=s.useBlockProps.save();return x.className+=" swiper-wrapper",(0,r.jsxs)("div",{id:h,className:"slideshow-container swiper","data-swiper":m,children:[(0,r.jsx)("div",{...x,children:(0,r.jsx)(s.InnerBlocks.Content,{})}),l&&(0,r.jsx)("div",{className:"swiper-pagination"}),o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"swiper-button-prev"}),(0,r.jsx)("div",{className:"swiper-button-next"})]}),n&&(0,r.jsx)("div",{className:"swiper-scrollbar"})]})}},609:e=>{e.exports=window.React},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},573:e=>{e.exports=window.wp.primitives}},l={};function s(e){var r=l[e];if(void 0!==r)return r.exports;var n=l[e]={exports:{}};return o[e](n,n.exports,s),n.exports}s.m=o,e=[],s.O=(o,l,r,n)=>{if(!l){var a=1/0;for(d=0;d<e.length;d++){l=e[d][0],r=e[d][1],n=e[d][2];for(var t=!0,i=0;i<l.length;i++)(!1&n||a>=n)&&Object.keys(s.O).every((e=>s.O[e](l[i])))?l.splice(i--,1):(t=!1,n<a&&(a=n));if(t){e.splice(d--,1);var c=r();void 0!==c&&(o=c)}}return o}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[l,r,n]},s.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return s.d(o,{a:o}),o},s.d=(e,o)=>{for(var l in o)s.o(o,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={721:0,179:0,960:0,405:0};s.O.j=o=>0===e[o];var o=(o,l)=>{var r,n,a=l[0],t=l[1],i=l[2],c=0;if(a.some((o=>0!==e[o]))){for(r in t)s.o(t,r)&&(s.m[r]=t[r]);if(i)var d=i(s)}for(o&&o(l);c<a.length;c++)n=a[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},l=self.webpackChunkwpzoom_slideshow_block=self.webpackChunkwpzoom_slideshow_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var r=s.O(void 0,[405],(()=>s(290)));r=s.O(r)})();
//# sourceMappingURL=index.js.map