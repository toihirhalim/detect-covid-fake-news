(this["webpackJsonpdetect-covid-fake-news"]=this["webpackJsonpdetect-covid-fake-news"]||[]).push([[0],[,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(9),a=n.n(r),i=(n(14),n(2)),l=n.n(i),o=n(4),u=n(3),j=(n(8),n(0));function d(e){var t=e.text;return Object(j.jsx)("div",{className:"texte-container",children:Object(j.jsx)("p",{children:t})})}function b(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:8000/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),i=a[0],O=a[1],p=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(""),c='\n            query {\n                scraping(url: "'.concat(n,'")\n              }\n        '),e.next=5,b(c);case 5:(s=e.sent)&&s.scraping&&O(s.scraping);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"scrapping-container",children:[Object(j.jsx)("h2",{children:"Scraping"}),Object(j.jsx)("form",{onSubmit:p,children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("p",{children:"enter url :"}),Object(j.jsx)("input",{id:"input-url",type:"url",value:n,placeholder:"https://url.domain",onChange:function(e){return s(e.target.value)},required:!0})]}),Object(j.jsx)("button",{id:"scrapp-btn",children:"scrap"})]})}),Object(j.jsx)(d,{text:i})]})}n(5);function x(e){var t=e.textInput,n=e.setOutput,c=e.setArray,s=e.language,r=e.includeStopWords,a=e.setDivColor,i=function(){var e=Object(o.a)(l.a.mark((function e(i){var o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o='\n            query {\n                lemmatizing(text: "'.concat(t,'", language: "').concat(s,'", stopWords: ').concat(r,")\n            }\n        "),a({lemmatizing:{backgroundColor:"rgb(183, 185, 187)"}}),n(null),e.next=5,b(o);case 5:(u=e.sent)&&u.lemmatizing&&(c(!1),n(u.lemmatizing));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"option",children:Object(j.jsx)("button",{className:"options-btn",onClick:i,children:"lemmatize"})})}function h(e){var t=e.textInput,n=e.setOutput,c=e.setArray,s=e.language,r=e.includeStopWords,a=e.setDivColor,i=function(){var e=Object(o.a)(l.a.mark((function e(i){var o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o='\n            query {\n                posTag(text: "'.concat(t,'",language: "').concat(s,'", stopWords: ').concat(r,")\n            }\n        "),a({postag:{backgroundColor:"rgb(183, 185, 187)"}}),n(null),e.next=5,b(o);case 5:(u=e.sent)&&u.posTag&&(c(!1),n(u.posTag));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"option",children:Object(j.jsx)("button",{className:"options-btn",onClick:i,children:"pos-tags"})})}function v(e){var t=e.textInput,n=e.setOutput,s=e.setArray,r=e.language,a=e.includeStopWords,i=e.setDivColor,d=Object(c.useState)(!0),O=Object(u.a)(d,2),p=O[0],x=O[1],h=function(){var e=Object(o.a)(l.a.mark((function e(c){var o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o='\n            query {\n                stemming(text: "'.concat(t,'", language: "').concat(r,'", lancaster: ').concat(p,", stopWords: ").concat(a,")\n            }\n        "),i({stemming:{backgroundColor:"rgb(183, 185, 187)"}}),n(null),e.next=5,b(o);case 5:(u=e.sent)&&u.stemming&&(s(!1),n(u.stemming));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"option",children:[Object(j.jsx)("button",{className:"options-btn",onClick:h,children:"Stem"}),Object(j.jsx)("div",{children:"arabic"!==r&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:["Lancaster",Object(j.jsx)("input",{className:"radio-btn",type:"radio",value:"true",name:"algorithm",checked:p,onChange:function(e){return x("true"===e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"radio-btn",type:"radio",value:"false",name:"algorithm",checked:!p,onChange:function(e){return x("true"===e.target.value)}}),"Porter"]})]})})]})}function m(e){var t=e.textInput,n=e.setOutput,s=e.setArray,r=e.language,a=e.includeStopWords,i=e.setDivColor,d=Object(c.useState)(!0),O=Object(u.a)(d,2),p=O[0],x=O[1],h=function(){var e=Object(o.a)(l.a.mark((function e(c){var o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o='\n            query {\n                tokenize(text: "'.concat(t,'",language: "').concat(r,'" words: ').concat(p,", stopWords: ").concat(a,")\n            }\n        "),i({tokenize:{backgroundColor:"rgb(183, 185, 187)"}}),n(null),e.next=5,b(o);case 5:(u=e.sent)&&u.tokenize&&(s(!0),n(u.tokenize));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"option",children:[Object(j.jsx)("button",{className:"options-btn",onClick:h,children:"Tokenize"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:["words",Object(j.jsx)("input",{className:"radio-btn",type:"radio",value:"true",name:"method",checked:p,onChange:function(e){return x("true"===e.target.value)}})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"radio-btn",type:"radio",value:"false",name:"method",checked:!p,onChange:function(e){return x("true"===e.target.value)}}),"sentences"]})]})]})}function f(e){var t=e.textInput,n=e.setOutput,c=e.setArray,s=e.language,r=e.includeStopWords,a=e.setDivColor,i=function(){var e=Object(o.a)(l.a.mark((function e(i){var o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o='\n            query {\n                bagOfWords(text: "'.concat(t,'",language: "').concat(s,'", stopWords: ').concat(r,")\n            }\n        "),a({BagOfWords:{backgroundColor:"rgb(183, 185, 187)"}}),n(null),e.next=5,b(o);case 5:(u=e.sent)&&u.bagOfWords&&(c(!0),n(u.bagOfWords));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"option",children:Object(j.jsx)("button",{className:"options-btn",onClick:i,children:"BagOfWords"})})}function g(e){var t=e.textInput,n=e.setOutput,s=e.setArray,r=Object(c.useState)("arabic"),a=Object(u.a)(r,2),i=a[0],l=a[1],o=Object(c.useState)(!0),d=Object(u.a)(o,2),b=d[0],O=d[1],p=Object(c.useState)({}),g=Object(u.a)(p,2),N=g[0],k=g[1];return Object(j.jsxs)("div",{className:"options-container",children:[Object(j.jsxs)("div",{className:"option",children:[Object(j.jsxs)("select",{className:"select-language",onChange:function(e){l(e.target.value)},children:[Object(j.jsx)("option",{value:"arabic",children:"Arabic"}),Object(j.jsx)("option",{value:"english",children:"English"})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"stop-wrd-chkbx",type:"checkbox",defaultChecked:b,onChange:function(e){O(!b)}}),"remove stop words"]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:N.tokenize,children:Object(j.jsx)(m,{textInput:t,setOutput:n,setArray:s,language:i,includeStopWords:b,setDivColor:k})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:N.stemming,children:Object(j.jsx)(v,{textInput:t,setOutput:n,setArray:s,language:i,includeStopWords:b,setDivColor:k})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:N.lemmatizing,children:Object(j.jsx)(x,{textInput:t,setOutput:n,setArray:s,language:i,includeStopWords:b,setDivColor:k})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:N.postag,children:Object(j.jsx)(h,{textInput:t,setOutput:n,setArray:s,language:i,includeStopWords:b,setDivColor:k})}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:N.BagOfWords,children:Object(j.jsx)(f,{textInput:t,setOutput:n,setArray:s,language:i,includeStopWords:b,setDivColor:k})}),Object(j.jsx)("hr",{})]})}function N(e){var t=e.output,n=e.array;return Object(j.jsx)("div",{className:"service-output-container",children:t&&Object(j.jsxs)("div",{children:[n&&Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"["}),t.map((function(e,t){return Object(j.jsxs)("p",{className:"result-field-item",children:["'",e,"',"]},t)})),Object(j.jsx)("p",{children:"]"})]}),!n&&Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"{"}),t.map((function(e,t){return Object(j.jsxs)("p",{className:"result-field-item",children:["'",e[0],"' : '",e[1],"'"]},t)})),Object(j.jsx)("p",{children:"}"})]})]})})}function k(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),a=Object(u.a)(r,2),i=a[0],l=a[1],o=Object(c.useState)(!1),d=Object(u.a)(o,2),b=d[0],O=d[1];return Object(j.jsxs)("div",{className:"services-container",children:[Object(j.jsx)("h2",{children:"NLP Services"}),Object(j.jsxs)("div",{className:"services",children:[Object(j.jsx)("div",{className:"service-input",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"enter text :"}),Object(j.jsx)("textarea",{value:n,cols:"40",rows:"20",onChange:function(e){return s(e.target.value)}})]})}),Object(j.jsx)("div",{className:"service-options",children:Object(j.jsx)(g,{textInput:n,setOutput:l,setArray:O})}),Object(j.jsx)("div",{className:"service-output",children:Object(j.jsx)(N,{output:i,array:b})})]})]})}n(17),n(6);function y(e){var t=e.result,n=["rgb(33, 112, 9)","red","cornsilk","blue"],s=Object(c.useState)(""),r=Object(u.a)(s,2),a=r[0],i=r[1],l=Object(c.useState)(["0 px","0 px","0 px","0 px"]),o=Object(u.a)(l,2),d=o[0],b=o[1],O=Object(c.useState)({color:n[0]}),p=Object(u.a)(O,2),x=p[0],h=p[1];return Object(c.useEffect)((function(){var e=["rgb(33, 112, 9)","red","cornsilk","blue"];t&&(t.pos>t.neg&&t.pos>t.neu?(h({color:e[0]}),i("Positif")):t.neg>t.pos&&t.neg>t.neu?(h({color:e[1]}),i("Negatif")):t.neu>t.pos&&t.neu>t.neg?(h({color:e[2]}),i("Neutral")):i(""),b([100*t.pos+"px",100*t.neg+"px",100*t.neu+"px",100*t.compound+"px"]))}),[t]),Object(j.jsxs)("div",{className:"sent-fake-result-container",children:[Object(j.jsxs)("p",{className:"sent-fake-result-p",children:["result :",Object(j.jsx)("strong",{style:x,children:a})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"details :"}),Object(j.jsxs)("div",{className:"details-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"sent-result-details",children:[Object(j.jsx)("div",{className:"circle",style:{backgroundColor:n[0]}}),Object(j.jsxs)("p",{className:"sent-result-detail-p",children:["pos : ",t&&t.pos]})]}),Object(j.jsxs)("div",{className:"sent-result-details",children:[Object(j.jsx)("div",{className:"circle",style:{backgroundColor:n[1]}}),Object(j.jsxs)("p",{className:"sent-result-detail-p",children:["neg : ",t&&t.neg]})]}),Object(j.jsxs)("div",{className:"sent-result-details",children:[Object(j.jsx)("div",{className:"circle",style:{backgroundColor:n[2]}}),Object(j.jsxs)("p",{className:"sent-result-detail-p",children:["neu : ",t&&t.neu]})]}),Object(j.jsxs)("div",{className:"sent-result-details",children:[Object(j.jsx)("div",{className:"circle",style:{backgroundColor:"blue"}}),Object(j.jsxs)("p",{className:"sent-result-detail-p",children:["compound : ",t&&t.compound]})]})]}),Object(j.jsx)("div",{className:"lines",children:t&&Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"line",style:{backgroundColor:n[0],width:d[0]}}),Object(j.jsx)("div",{className:"line",style:{backgroundColor:n[1],width:d[1]}}),Object(j.jsx)("div",{className:"line",style:{backgroundColor:n[2],width:d[2]}}),Object(j.jsx)("div",{className:"line",style:{backgroundColor:n[3],width:d[3]}})]})})]})]})]})}function C(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),a=Object(u.a)(r,2),i=a[0],d=a[1],O=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c='\n            query{\n                sentiment(text: "'.concat(n,'"){\n                neg\n                neu\n                pos\n                compound\n                }\n            }\n        '),d(null),e.next=4,b(c);case 4:(s=e.sent)&&s.sentiment&&d(s.sentiment);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"sent-container",children:[Object(j.jsx)("h3",{children:"Sentiment Analysis"}),Object(j.jsxs)("div",{className:"sent-fake-main",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"enter text here :"}),Object(j.jsx)("textarea",{value:n,cols:"30",rows:"8",onChange:function(e){return s(e.target.value)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"sent-fake-btn",onClick:O,children:"Analyse"})}),Object(j.jsx)("div",{children:Object(j.jsx)(y,{result:i})})]})]})}function w(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),i=a[0],d=a[1],O=Object(c.useState)({color:"rgb(33, 112, 9)",marginLeft:"15px"}),p=Object(u.a)(O,2),x=p[0],h=p[1],v=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(""),c='\n            query{\n                fakeNews(text: "'.concat(n,'")\n            }\n        '),e.next=5,b(c);case 5:(s=e.sent)&&s.fakeNews&&d(s.fakeNews);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=["rgb(33, 112, 9)","red"];i&&("TRUE"===i?h({color:e[0],marginLeft:"15px"}):"FAKE"===i?h({color:e[1],marginLeft:"15px"}):d(""))}),[i]),Object(j.jsxs)("div",{className:"fake-container",children:[Object(j.jsx)("h3",{children:"Fake News about COVID "}),Object(j.jsxs)("div",{className:"sent-fake-main",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"enter text here :"}),Object(j.jsx)("textarea",{value:n,cols:"30",rows:"8",onChange:function(e){return s(e.target.value)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"sent-fake-btn",onClick:v,children:"Analyse"})}),Object(j.jsx)("div",{className:"sent-fake-result-container",children:Object(j.jsxs)("p",{className:"sent-fake-result-p",children:["result :",Object(j.jsx)("strong",{style:x,children:i&&i})]})})]})]})}function S(){return Object(j.jsxs)("div",{className:"sent-fake-container",children:[Object(j.jsx)("h2",{children:"Other Services"}),Object(j.jsxs)("div",{className:"sent-fake-components",children:[Object(j.jsx)("div",{className:"sentiment-analysis",children:Object(j.jsx)(C,{})}),Object(j.jsx)("div",{className:"fake-news",children:Object(j.jsx)(w,{})})]})]})}var W=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("section",{className:"scrapping",children:Object(j.jsx)(p,{})}),Object(j.jsx)("section",{className:"nlp",children:Object(j.jsx)(k,{})}),Object(j.jsx)("section",{className:"sent-fake",children:Object(j.jsx)(S,{})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root")),A()}],[[18,1,2]]]);
//# sourceMappingURL=main.66aa3e0d.chunk.js.map