(()=>{"use strict";var e,r={291:(e,r,o)=>{o.d(r,{A:()=>l});const s=window.wp.i18n;var n=o(715),i=o(790);const t=["wpzoom/slide"];function l(){return(0,i.jsxs)("div",{...(0,n.useBlockProps)(),children:[(0,i.jsx)("p",{children:(0,s.__)("Slideshow Block","slideshow")}),(0,i.jsx)(n.InnerBlocks,{allowedBlocks:t,templateLock:!1,renderAppender:n.InnerBlocks.ButtonBlockAppender})]})}},290:(e,r,o)=>{const s=window.wp.blocks;var n=o(291),i=o(627);const t=JSON.parse('{"UU":"wpzoom/slideshow"}');(0,s.registerBlockType)(t.UU,{edit:n.A,save:i.A})},627:(e,r,o)=>{o.d(r,{A:()=>i});var s=o(715),n=o(790);function i(){const e=s.useBlockProps.save();return e.className=`swiper-wrapper ${e.className||""}`,(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"slideshow-container swiper",children:[(0,n.jsx)("div",{...e,children:(0,n.jsx)(s.InnerBlocks.Content,{})}),(0,n.jsx)("div",{class:"swiper-pagination"}),(0,n.jsx)("div",{class:"swiper-button-prev"}),(0,n.jsx)("div",{class:"swiper-button-next"})]})})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor}},o={};function s(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,s),i.exports}s.m=r,e=[],s.O=(r,o,n,i)=>{if(!o){var t=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&i||t>=i)&&Object.keys(s.O).every((e=>s.O[e](o[c])))?o.splice(c--,1):(l=!1,i<t&&(t=i));if(l){e.splice(d--,1);var a=n();void 0!==a&&(r=a)}}return r}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]},s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var o in r)s.o(r,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={721:0,179:0,960:0,405:0};s.O.j=r=>0===e[r];var r=(r,o)=>{var n,i,t=o[0],l=o[1],c=o[2],a=0;if(t.some((r=>0!==e[r]))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(c)var d=c(s)}for(r&&r(o);a<t.length;a++)i=t[a],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(d)},o=self.webpackChunkwpzoom_slideshow_block=self.webpackChunkwpzoom_slideshow_block||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var n=s.O(void 0,[405],(()=>s(290)));n=s.O(n)})();
//# sourceMappingURL=index.js.map