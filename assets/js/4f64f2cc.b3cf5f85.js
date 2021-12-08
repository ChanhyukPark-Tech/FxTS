"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7037],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),s=o,m=d["".concat(u,".").concat(s)]||d[s]||f[s]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5062:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={id:"nth"},u=void 0,l={unversionedId:"nth",id:"nth",isDocsHomePage:!1,title:"nth",description:"nth() function",source:"@site/docs/nth.md",sourceDirName:".",slug:"/nth",permalink:"/docs/nth",tags:[],version:"current",frontMatter:{id:"nth"},sidebar:"api",previous:{title:"not",permalink:"/docs/not"},next:{title:"omit",permalink:"/docs/omit"}},p=[{value:"nth() function",id:"nth-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],f={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nth-function"},"nth() function"),(0,a.kt)("p",null,"Returns the nth element of the given Iterable/AsyncIterable"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function nth(index: number, iterable: readonly []): undefined;\n\ndeclare function nth<T>(index: number, iterable: Iterable<T>): T | undefined;\n\ndeclare function nth<T>(index: number, iterable: AsyncIterable<T>): Promise<T | undefined>;\n\ndeclare function nth<T extends Iterable<unknown> | AsyncIterable<unknown>>(index: number): (iterable: T) => ReturnValueType<T, IterableInfer<T> | undefined>;\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"nth(2, [1,2,3,4]); // 1\nnth(5, [1,2,3,4]); // undefined\nnth(2, ['name', 'gender', 'age']); // 'age'\nnth(3, ['name', 'gender', 'age']); // undefined\nnth(2, 'abcdefg'); // 'b'\nnth(10, 'abcdefg'); // undefined\n")))}d.isMDXComponent=!0}}]);