"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{39058:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(67294),l=a(86010),r=a(95677),i=a(87524),o=a(39960),s=a(95999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",f="sidebarItemLinkActive_I1ZP";function p(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.default)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.default)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.default)(u,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:d},n.createElement(o.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:f},e.title)))))))}var v=a(13102);function h(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(o.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return n.createElement(v.Zo,{component:h,props:e})}function b(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?n.createElement(E,{sidebar:t}):n.createElement(p,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:i,...o}=e,s=t&&t.items.length>0;return n.createElement(r.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(b,{sidebar:t}),n.createElement("main",{className:(0,l.default)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},30390:(e,t,a)=>{a.d(t,{Z:()=>M});var n=a(67294),l=a(86010),r=a(9460),i=a(44996);function o(e){let{children:t,className:a}=e;const{frontMatter:l,assets:o,metadata:{description:s}}=(0,r.C)(),{withBaseUrl:c}=(0,i.useBaseUrlUtils)(),m=o.image??l.image,u=l.keywords??[];return n.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&n.createElement("meta",{itemProp:"description",content:s}),m&&n.createElement("link",{itemProp:"image",href:c(m,{absolute:!0})}),u.length>0&&n.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}var s=a(39960);const c="title_f1Hy";function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:o,title:m}=a,u=i?"h1":"h2";return n.createElement(u,{className:(0,l.default)(c,t),itemProp:"headline"},i?m:n.createElement(s.default,{itemProp:"url",to:o},m))}var u=a(95999),d=a(88824);const g="container_mt6G";function f(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return n.createElement(n.Fragment,null,a(t))}function p(e){let{date:t,formattedDate:a}=e;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function v(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:o,readingTime:s}=a;return n.createElement("div",{className:(0,l.default)(g,"margin-vert--md",t)},n.createElement(p,{date:i,formattedDate:o}),void 0!==s&&n.createElement(n.Fragment,null,n.createElement(v,null),n.createElement(f,{readingTime:s})))}function E(e){return e.href?n.createElement(s.default,e):n.createElement(n.Fragment,null,e.children)}function b(e){let{author:t,className:a}=e;const{name:r,title:i,url:o,imageURL:s,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,l.default)("avatar margin-bottom--sm",a)},s&&n.createElement(E,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),i&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N="authorCol_Hf19",_="imageOnlyAuthorRow_pa_O",L="imageOnlyAuthorCol_G86a";function k(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.default)("margin-top--md margin-bottom--sm",o?_:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,l.default)(!o&&"col col--6",o?L:N),key:t},n.createElement(b,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function P(){return n.createElement("header",null,n.createElement(m,null),n.createElement(h,null),n.createElement(k,null))}var C=a(18780),y=a(55203);function H(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return n.createElement("div",{id:i?C.blogPostContainerID:void 0,className:(0,l.default)("markdown",a),itemProp:"articleBody"},n.createElement(y.Z,null,t))}var x=a(84881),I=a(71526),w=a(87462);function T(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function Z(e){const{blogPostTitle:t,...a}=e;return n.createElement(s.default,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(T,null))}const A="blogPostFooterDetailsFull_mRVl";function B(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:o,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||o?n.createElement("footer",{className:(0,l.default)("row docusaurus-mt-lg",t&&A)},m&&n.createElement("div",{className:(0,l.default)("col",{"col--9":c})},n.createElement(I.Z,{tags:a})),t&&o&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(x.Z,{editUrl:o})),c&&n.createElement("div",{className:(0,l.default)("col text--right",{"col--3":m})},n.createElement(Z,{blogPostTitle:i,to:e.permalink}))):null}function M(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o,{className:(0,l.default)(i,a)},n.createElement(P,null),n.createElement(H,null,t),n.createElement(B,null))}},65203:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(67294),l=a(86010),r=a(10833),i=a(35281),o=a(9460),s=a(39058),c=a(30390),m=a(87462),u=a(95999),d=a(32244);function g(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(d.Z,(0,m.Z)({},a,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(d.Z,(0,m.Z)({},t,{subLabel:n.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,o.C)(),{title:a,description:l,date:i,tags:s,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return n.createElement(r.d,{title:a,description:l,keywords:u,image:d},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&n.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var p=a(39407);function v(e){let{sidebar:t,children:a}=e;const{metadata:l,toc:r}=(0,o.C)(),{nextItem:i,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:f,toc_max_heading_level:v}=u;return n.createElement(s.Z,{sidebar:t,toc:!d&&r.length>0?n.createElement(p.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:v}):void 0},n.createElement(c.Z,null,a),(i||m)&&n.createElement(g,{nextItem:i,prevItem:m}))}function h(e){const t=e.content;return n.createElement(o.n,{content:e.content,isBlogPostPage:!0},n.createElement(r.FG,{className:(0,l.default)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},n.createElement(f,null),n.createElement(v,{sidebar:e.sidebar},n.createElement(t,null))))}},39407:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(87462),l=a(67294),r=a(86010),i=a(38011);const o="tableOfContents_bqdL";function s(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.default)(o,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},38011:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),l=a(67294),r=a(86668),i=a(39665),o=a(96841);function s(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const c=l.memo(s);function m(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:u,maxHeadingLevel:d,...g}=e;const f=(0,r.L)(),p=u??f.tableOfContents.minHeadingLevel,v=d??f.tableOfContents.maxHeadingLevel,h=(0,i.b)({toc:t,minHeadingLevel:p,maxHeadingLevel:v}),E=(0,l.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:v}}),[s,m,p,v]);return(0,o.S)(E),l.createElement(c,(0,n.Z)({toc:h,className:a,linkClassName:s},g))}},96841:(e,t,a)=>{a.d(t,{S:()=>s});var n=a(67294),l=a(86668);function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function i(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>r(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function o(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function s(e){const t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=i(s,{anchorTopOffset:a.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,a])}},39665:(e,t,a)=>{a.d(t,{a:()=>r,b:()=>o});var n=a(67294);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function r(e){return(0,n.useMemo)((()=>l(e)),[e])}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:r}=e;return(0,n.useMemo)((()=>i({toc:l(t),minHeadingLevel:a,maxHeadingLevel:r})),[t,a,r])}}}]);