const t=Object.prototype.toString;function e(n){return typeof n=="function"}function i(n){return n===Object(n)}function r(n){return t.call(n)==="[object Array]"}function c(n){return t.call(n)==="[object Date]"}function o(n){return t.call(n)==="[object RegExp]"}function a(n){return t.call(n)==="[object Boolean]"}function s(n){return t.call(n)==="[object String]"}function u(n){return t.call(n)==="[object Undefined]"}function l(n){return!isNaN(parseFloat(n))&&isFinite(n)}export{u as a,i as b,c,o as d,a as e,e as f,r as g,l as h,s as i};