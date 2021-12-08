"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4831],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7569:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"join"},l=void 0,s={unversionedId:"join",id:"join",isDocsHomePage:!1,title:"join",description:"join() function",source:"@site/docs/join.md",sourceDirName:".",slug:"/join",permalink:"/docs/join",tags:[],version:"current",frontMatter:{id:"join"},sidebar:"api",previous:{title:"isString",permalink:"/docs/isString"},next:{title:"last",permalink:"/docs/last"}},u=[{value:"join() function",id:"join-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"join-function"},"join() function"),(0,i.kt)("p",null,"Returns all elements in the given iterable into a string separated by separator."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'declare function join<A>(sep: string, iterable: Iterable<A>): string;\n\ndeclare function join<A extends readonly []>(sep: string, iterable: A): "";\n\ndeclare function join<A>(sep: string, iterable: AsyncIterable<A>): Promise<string>;\n\ndeclare function join<A extends Iterable<unknown> | AsyncIterable<unknown>>(sep: string): (iterable: A) => ReturnJoinType<A>;\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const joined = join('~', ['a', 'b', 'c']); // 'a~b~c'\n\n// with pipe\npipe(\n [1, 2, 3, 4],\n map(a => a + 10),\n filter(a => a % 2 === 0)\n join('-'),\n); // '12-14'\n\nawait pipe(\n Promise.resolve([1, 2, 3, 4]),\n join('-'),\n); // '1-2-3-4'\n\n// with toAsync\nawait pipe(\n [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)],\n toAsync,\n join('-'),\n); // '1-2-3-4'\n")))}f.isMDXComponent=!0}}]);