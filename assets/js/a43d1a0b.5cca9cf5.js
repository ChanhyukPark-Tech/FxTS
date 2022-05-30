"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2199],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(a.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(a,".").concat(f)]||m[f]||s[f]||c;return t?r.createElement(d,u(u({ref:n},p),{},{components:t})):r.createElement(d,u({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,u=new Array(c);u[0]=m;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<c;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},775:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),u=["components"],i={id:"consume"},a=void 0,l={unversionedId:"consume",id:"consume",isDocsHomePage:!1,title:"consume",description:"consume() function",source:"@site/docs/consume.md",sourceDirName:".",slug:"/consume",permalink:"/docs/consume",tags:[],version:"current",frontMatter:{id:"consume"},sidebar:"api",previous:{title:"compactObject",permalink:"/docs/compactObject"},next:{title:"countBy",permalink:"/docs/countBy"}},p=[{value:"consume() function",id:"consume-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"consume-function"},"consume() function"),(0,c.kt)("p",null,"Consumes the given number of Iterable/AsyncIterable. If the number is empty, all is consumed."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function consume<A extends Iterable<unknown> | AsyncIterable<unknown>, B extends number>(iterator: A, n?: B): ReturnValueType<A, void>;\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const iterator = (function *(){\n  yield 1;\n  yield 2;\n  yield 3;\n})();\nconsume(iterator, 2);\niterator.next(); // {value:3, done:false}\niterator.next(); // {value:undefined, done:true}\n\n// with pipe\npipe(\n  range(10),\n  peek(updateApi),\n  concurrent(5),\n  consume,\n);\n")))}m.isMDXComponent=!0}}]);