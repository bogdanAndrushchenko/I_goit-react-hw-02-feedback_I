(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={Statistic__item:"Statistics_Statistic__item__1RrUl",Item__value:"Statistics_Item__value__HdF8k"}},,,function(e,t,a){e.exports={Section:"Section_Section__5NpXP",Section__title:"Section_Section__title__2g02t"}},,,,,function(e,t,a){e.exports={Button:"FeedbackOptions_Button__fEtTm"}},function(e,t,a){e.exports={Title:"Notification_Title__BepcZ"}},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(2),i=a.n(n),s=a(5),o=a.n(s),r=(a(18),a(6)),l=a(7),d=a(8),b=a(12),u=a(11),j=(a(19),a(9)),_=a.n(j),m=function(e){var t=e.feedback,a=e.onLeaveFeedback;return Object(c.jsx)("button",{type:"button","data-feedback":t,onClick:a,className:_.a.Button,children:t},t+1)},h=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(c.jsx)(m,{feedback:e,onLeaveFeedback:a})}))},v=a(10),f=a.n(v),O=function(e){var t=e.message;return Object(c.jsx)("p",{className:f.a.Title,children:t})},x=a(1),k=a.n(x),p=function(e){var t=e.good,a=e.neutral,n=e.bad,i=e.total,s=e.positiveFeedback;return Object(c.jsxs)(c.Fragment,{children:[i>0&&Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{className:k.a.Statistic__item,children:["Good: ",Object(c.jsx)("span",{className:k.a.Item__value,children:t})]}),Object(c.jsxs)("li",{className:k.a.Statistic__item,children:["Neutral: ",Object(c.jsx)("span",{className:k.a.Item__value,children:a})]}),Object(c.jsxs)("li",{className:k.a.Statistic__item,children:["Bad: ",Object(c.jsx)("span",{className:k.a.Item__value,children:n})]}),Object(c.jsxs)("li",{className:k.a.Statistic__item,children:["Total: ",Object(c.jsx)("span",{className:k.a.Item__value,children:i})]}),Object(c.jsxs)("li",{className:k.a.Statistic__item,children:[" ","Positive feedback:",Object(c.jsxs)("span",{className:k.a.Item__value,children:[" ",s," %"]})]})]}),0===i&&Object(c.jsx)(O,{message:"No feedback given"})]})},S=a(4),g=a.n(S),N=function(e){var t=e.title,a=e.children;return Object(c.jsxs)("div",{className:g.a.Section,children:[Object(c.jsx)("h2",{className:g.a.Section__title,children:t}),a]})},F=["good","neutral","bad"],I=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),i=0;i<c;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.addHandlerFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return(e.state.good/t*100).toFixed()},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,i=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(c.jsxs)("div",{className:"Feedback",children:[Object(c.jsx)(N,{title:"Please leave feedback",children:Object(c.jsx)(h,{options:F,onLeaveFeedback:this.addHandlerFeedback})}),Object(c.jsx)(N,{title:"Statistics",children:Object(c.jsx)(p,{good:t,neutral:a,bad:n,total:i,positiveFeedback:s})})]})}}]),a}(n.Component);o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d68cb2a5.chunk.js.map