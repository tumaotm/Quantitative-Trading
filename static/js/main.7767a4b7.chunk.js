(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports={container:"style_container__Zb8RY",header:"style_header__3uDEC",navItem:"style_navItem__1wdaT",active:"style_active__1gcS-",articlesContainer:"style_articlesContainer__2mYTI",article:"style_article__2NtwU",articleTitle:"style_articleTitle__RDDaw",articleInfo:"style_articleInfo__2KrYr",articleCategory:"style_articleCategory__18gfE",articleLabel:"style_articleLabel__3y7XL"}},172:function(e,t,n){e.exports={loadingContainer:"style_loadingContainer__3Pquw"}},174:function(e,t,n){e.exports=n.p+"static/media/github.c9e82c1f.svg"},176:function(e,t,n){e.exports=n(376)},3:function(e,t,n){e.exports={container:"style_container__3FZwK",articleInfo:"style_articleInfo__1d5v-",articleCategory:"style_articleCategory__35I8s",articleLabel:"style_articleLabel__26rCk",articleBody:"style_articleBody__2JILV",issueCommentsContainer:"style_issueCommentsContainer__3eK_x",issueComment:"style_issueComment__2oN0w",commentorAvatar:"style_commentorAvatar__BkYRh",issueCommentHeader:"style_issueCommentHeader__1lxXR",issueCommentContent:"style_issueCommentContent__2bwiX",createCommentContainer:"style_createCommentContainer__mllTZ",createComment:"style_createComment__3rcPo",createCommentAvatar:"style_createCommentAvatar__1v_t3",createCommentHeader:"style_createCommentHeader__3opNa",commentSwitch:"style_commentSwitch__2d5YM",active:"style_active__6_-G8",commentorLogin:"style_commentorLogin__2fsAa",createCommentInputContainer:"style_createCommentInputContainer__2VtH6",createCommentTextarea:"style_createCommentTextarea__mjrW_",createCommentOperator:"style_createCommentOperator__2pW3w"}},372:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(168),o=n.n(s),i=n(169),c=n(22),l=n(21),u=n(2),m=n.n(u),p=n(11),d=n(41),f=n.n(d),h=n(17),b={owner:"zhirui1994",repo:"zhirui1994.github.io",token:"MSt6aGlydWkxOTk0KzBhOGZmMjAwNWM3M2NmNmM1YzEzYWQyZmRkZjhjN2E4MDU0NzdlK3poaXJ1aTE5OTQuZ2l0aHViLmlvKzg=",client_id:"635ab95d562259d5e20a",client_secret:"e795e7e409ce731cf304facd92aecd305c774731"},y=new h.b.Entity("milestones"),v=new h.b.Entity("labels"),_=new h.b.Entity("comments"),g=new h.b.Entity("issues",{milestone:y,labels:{nodes:[v]},comments:{nodes:[_]}}),E=new h.b.Entity("repositories",{issue:g,issues:{nodes:[g]},labels:{nodes:[v]},milestones:{nodes:[y]}});function w(){var e=atob(b.token),t=new RegExp("(\\+".concat(b.owner,"\\+|\\+").concat(b.repo,"\\+)"),"g");return e.replace(t,"")}function k(){return C.apply(this,arguments)}function C(){return(C=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("https://api.github.com/graphql",{query:'query { \n                repository(owner: "'.concat(b.owner,'", name: "').concat(b.repo,'") {\n                    id,\n                    labels(first: 100) {\n                        nodes {\n                            id,\n                            name,\n                            color,\n                        } \n                    },\n                    milestones(first:100) {\n                        nodes {\n                            id,\n                            number,\n                            state,\n                            title,\n                        }\n                    },\n                    issues(last:20, states:OPEN) {\n                        pageInfo {\n                            endCursor,\n                            startCursor,\n                            hasNextPage,\n                            hasPreviousPage\n                        },\n                        totalCount,\n                        nodes {\n                            id,\n                            title,\n                            number,\n                            createdAt,\n                            milestone {\n                                id\n                            },\n                            labels(first:100) {\n                                nodes {\n                                    id,\n                                }\n                            }\n                        }\n                    }\n                }\n            }')},{headers:{Authorization:"bearer ".concat(w())}}).then(function(e){return Object(h.a)(e.data.data.repository,E)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("https://api.github.com/graphql",{query:'query { \n                repository(owner: "'.concat(b.owner,'", name: "').concat(b.repo,'") {\n                    id,\n                    issue(number: ').concat(t,") {\n                        id,\n                        title,\n                        number,\n                        bodyHTML,\n                        createdAt,\n                        milestone {\n                            id,\n                            number,\n                            state,\n                            title,\n                        },\n                        labels(first:100) {\n                            nodes {\n                                id,\n                                name,\n                                color,\n                            }\n                        },\n                        comments(last: 20) {\n                            nodes {\n                                id,\n                                author {\n                                    avatarUrl,\n                                    login,\n                                    url,\n                                },\n                                bodyHTML,\n                                createdAt,\n                            }\n                        }\n                    }\n                }\n            }")},{headers:{Authorization:"bearer ".concat(w())}}).then(function(e){return Object(h.a)(e.data.data.repository,E)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function O(){var e={scope:"public_repo, user",redirect_uri:encodeURIComponent("https://zhirui1994.github.io/#/article/1"),client_id:b.client_id},t=Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&");return"https://github.com/login/oauth/authorize?".concat(t)}function j(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",e.abrupt("return",f.a.post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{code:t,client_id:b.client_id,client_secret:b.client_secret},{headers:{Accept:"application/json"}}).then(function(e){return e&&e.data}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.post("https://api.github.com/graphql",{query:"query { \n            viewer {\n                email,\n                id,\n                login,\n                name,\n                url,\n                avatarUrl, \n            }\n        }"},{headers:{Authorization:t}}).then(function(e){return e&&e.data&&e.data.data&&e.data.data.viewer}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function A(e){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(m.a.mark(function e(t){var n,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.content,r=t.token,e.abrupt("return",f.a.post("https://api.github.com/graphql",{query:'mutation {\n                addComment(input:{subjectId: "'.concat(n,'", body: "').concat(a,'"}) {\n                    commentEdge {\n                        node {\n                            id,\n                            bodyHTML,\n                            createdAt,\n                            author {\n                                avatarUrl,\n                                login,\n                                url,\n                            },\n                        }\n                    }\n                }\n            }')},{headers:{Authorization:r}}).then(function(e){var t=e&&e.data&&e.data.data&&e.data.data.addComment.commentEdge.node;if(t)return Object(h.a)(t,_)}));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var S=n(74),H={name:"repository",state:{result:"",loading:!0},reducers:{update:function(e,t){return S.merge(e,t)}},effects:function(e){return{initIndex:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.repository.loading){t.next=3;break}return t.next=3,e.repository.update({loading:!0});case 3:return t.next=5,k();case 5:if(!(r=t.sent)){t.next=11;break}return t.next=9,e.entities.update(r.entities);case 9:return t.next=11,e.repository.update({result:r.result,loading:!1});case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getSingleIssue:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.repository.loading){t.next=3;break}return t.next=3,e.repository.update({loading:!0});case 3:return t.next=5,x(n);case 5:if(!(r=t.sent)){t.next=11;break}return t.next=9,e.entities.update(r.entities);case 9:return t.next=11,e.repository.update({result:r.result,loading:!1});case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),closeCurrentIssue:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r,s,o;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.repository.result,!(s=a.entities.repositories[r])){t.next=7;break}return s.issue=void 0,o={repositories:Object(l.a)({},r,s)},t.next=7,e.entities.update(o);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}},U=n(74),Y={name:"entities",state:{repositories:{},issues:{},labels:{},milestones:{},comments:{}},reducers:{update:function(e,t){return U.merge(e,t)}}},D=n(171);function z(){var e=new URLSearchParams(window.location.search),t=e.get("code");if(t){e.delete("code");var n=e.toString(),a="".concat(window.location.pathname).concat(n?"?".concat(n):"").concat(window.location.hash);return window.history.pushState(null,null,a),t}return""}var q=n(74),R={user:{name:"user",state:{loading:!1,auth:!1,accessToken:"",scope:"",tokenType:"",viewer:{email:"",id:"",login:"",name:"",url:"",avatarUrl:""}},reducers:{update:function(e,t){return q.merge(e,t)}},effects:function(e){return{getAuthToken:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r,s,o,i,c,l,u,p,d;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.user.loading){t.next=3;break}return t.next=3,e.user.update({loading:!0});case 3:if(r=z(),!(s=localStorage.getItem("GITHUB_USER_AUTH"))){t.next=15;break}return o=JSON.parse(s),i=o.access_token,c=o.token_type,l=o.scope,t.next=9,T("".concat(c," ").concat(i));case 9:if(!(u=t.sent)){t.next=13;break}return t.next=13,e.user.update({accessToken:i,tokenType:c,scope:l,auth:!0,loading:!1,viewer:u});case 13:t.next=27;break;case 15:if(!r){t.next=27;break}return t.next=18,j(r);case 18:if(!(p=t.sent)||!p.access_token){t.next=27;break}return localStorage.setItem("GITHUB_USER_AUTH",JSON.stringify(p)),t.next=23,T("".concat(p.token_type," ").concat(p.access_token));case 23:if(!(d=t.sent)){t.next=27;break}return t.next=27,e.user.update({accessToken:p.access_token,tokenType:p.token_type,scope:p.scope,auth:!0,loading:!1,viewer:d});case 27:return t.next=29,e.user.update({loading:!1});case 29:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),addComment:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r,s,o,i,c,u,p;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.id,s=n.content,o=n.callback,a.user.accessToken){t.next=3;break}return t.abrupt("return");case 3:return i="".concat(a.user.tokenType," ").concat(a.user.accessToken),t.next=6,A({id:r,content:s,token:i});case 6:if(!(c=t.sent)){t.next=14;break}return u=a.entities.issues,(p=u[r]).comments.nodes.push(c.result),t.next=13,e.entities.update(Object(D.a)({issues:Object(l.a)({},r,p)},c.entities));case 13:"function"===typeof o&&o();case 14:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}},entities:Y,repository:H};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(377),W=n(378),P=n(369),Z=n(35),G=n(36),J=n(38),K=n(37),F=n(39),X=n(40),V=n.n(X),Q=n(52),$=n.n(Q),ee=n(69),te=n(379),ne=n(172),ae=n.n(ne),re=function(e){var t=e.children,n=e.loading;return void 0===n||n?r.a.createElement("div",{className:ae.a.loadingContainer},r.a.createElement("i",{className:"fa fa-spinner fa-pulse"})):r.a.createElement(a.Fragment,null,t)},se=n(15),oe=n.n(se),ie={title:"\u6700\u65b0",id:"default_milestone"},ce={nodes:[],pageInfo:{},totalCount:0},le=function(e){function t(){var e;Object(Z.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=Object(J.a)(this,Object(K.a)(t).call(this,a))).state={activeMilestone:ie},e}return Object(F.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch.repository.initIndex()}},{key:"render",value:function(){var e=this.state.activeMilestone,t=this.props,n=t.loading,a=t.issuesList,s=t.milestonesList,o=t.milestonesMap,i=t.labelsMap;return r.a.createElement(re,{loading:n},r.a.createElement("div",{className:oe.a.container},r.a.createElement("header",{className:oe.a.header},r.a.createElement("nav",null,s.map(function(t){return r.a.createElement("span",{key:t.id,className:V()(oe.a.navItem,Object(l.a)({},oe.a.active,t.title===e.title))},t.title)}))),r.a.createElement("main",{className:oe.a.articlesContainer},a.map(function(e){return r.a.createElement("article",{className:oe.a.article,key:e.id},r.a.createElement(te.a,{to:"/article/".concat(e.number)},r.a.createElement("h3",{className:oe.a.articleTitle},e.title)),r.a.createElement("p",{className:oe.a.articleInfo},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),$()(e.createdAt).format("YYYY-MM-DD")),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),r.a.createElement("span",{className:oe.a.articleCategory},o[e.milestone].title)),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),e.labels.nodes.map(function(e){var t=i[e];return r.a.createElement("span",{key:t.id,className:oe.a.articleLabel,style:{background:"#".concat(t.color)}},t.name)}))))}))))}}]),t}(a.Component),ue=Object(ee.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.issues},function(e){return e.entities.milestones},function(e){return e.entities.labels}],function(e,t,n,a,r,s){var o=n[e],i=Object.keys(r).map(function(e){return r[e]});i.length&&i.unshift(ie);var c=ce;return o&&o.issues&&(c=o.issues),{loading:t,labelsMap:s,milestonesMap:r,milestonesList:i,issuesList:c.nodes.map(function(e){return a[e]}),pageInfo:c.pageInfo,totalCount:c.totalCount}}),me=Object(c.b)(ue)(le),pe=n(51),de=function(e){function t(){var e,n;Object(Z.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(J.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=n.handleSubmit.bind(Object(pe.a)(Object(pe.a)(n))),n}return Object(F.a)(t,e),Object(G.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.dispatch;this.title&&this.body&&t.issues.create({title:this.title.value,body:this.body.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Editor"},r.a.createElement("header",{className:"App-header"},"\u6587\u7ae0\u7f16\u8f91\u9875\uff01"),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"title"},"\u6807\u9898\uff1a",r.a.createElement("input",{ref:function(t){return e.title=t},type:"text",id:"title"})),r.a.createElement("label",{htmlFor:"body"},"\u5185\u5bb9\uff1a",r.a.createElement("textarea",{ref:function(t){return e.body=t},cols:"60",rows:"5",id:"body"})),r.a.createElement("input",{onClick:this.handleSubmit,type:"submit",value:"\u521b\u5efa"})))}}]),t}(a.Component),fe=Object(c.b)()(de),he=n(380),be=n(3),ye=n.n(be),ve=n(174),_e=n.n(ve),ge=function(e){function t(){var e,n;Object(Z.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(J.a)(this,(e=Object(K.a)(t)).call.apply(e,[this].concat(r)))).handleInput=function(e){e.preventDefault();var t=e.currentTarget;t.style.height="auto",t.style.height=t.scrollTop+t.scrollHeight+"px"},n.handleSubmitComment=function(e){e.preventDefault();var t=n.comment.value;if(t){var a=n.props,r=a.dispatch,s=a.currentIssue;r.user.addComment({id:s.id,content:t,callback:function(){n.comment.value=""}})}},n}return Object(F.a)(t,e),Object(G.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.match.params.number;t.user.getAuthToken(),t.repository.getSingleIssue(n)}},{key:"componentWillUnmount",value:function(){this.props.dispatch.repository.closeCurrentIssue()}},{key:"render",value:function(){var e=this,t=this.props,n=t.loading,a=t.labelsMap,s=t.commentsMap,o=t.currentIssue,i=t.milestonesMap,c=t.viewer,l=t.isUserLoading;return r.a.createElement(re,{loading:n},r.a.createElement("div",{className:ye.a.container},r.a.createElement("header",null,r.a.createElement("h1",null,o.title),r.a.createElement("p",{className:ye.a.articleInfo},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),$()(o.createdAt).format("YYYY-MM-DD")),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),r.a.createElement("span",{className:ye.a.articleCategory},o.milestone&&i[o.milestone].title)),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),o.labels&&o.labels.nodes.map(function(e){var t=a[e];return r.a.createElement("span",{key:t.id,className:ye.a.articleLabel,style:{background:"#".concat(t.color)}},t.name)})))),r.a.createElement("main",null,r.a.createElement("article",{className:V()(ye.a.articleBody,"markdown-body"),dangerouslySetInnerHTML:{__html:o.bodyHTML}}),r.a.createElement("div",{className:ye.a.issueCommentsContainer},o.comments&&o.comments.nodes.map(function(e){var t=s[e];if(t){var n=t.author;return r.a.createElement("section",{key:t.id,className:ye.a.issueComment},r.a.createElement("a",{className:ye.a.commentorAvatar,href:n.url},r.a.createElement("img",{src:n.avatarUrl,alt:"This is commentor's avatar"})),r.a.createElement("p",{className:ye.a.issueCommentHeader},r.a.createElement("a",{href:n.url},r.a.createElement("em",null,n.login)),r.a.createElement("span",null,$()(t.createdAt).format("YYYY-MM-DD HH:mm:ss"))),r.a.createElement("article",{className:V()(ye.a.issueCommentContent,"markdown-body"),dangerouslySetInnerHTML:{__html:t.bodyHTML}}))}return null}),r.a.createElement("section",{className:ye.a.createCommentContainer},r.a.createElement("div",{className:ye.a.createComment},c.id?r.a.createElement("div",{className:ye.a.createCommentAvatar},r.a.createElement("img",{src:c.avatarUrl,alt:"This is commentor's avatar"})):r.a.createElement("a",{className:ye.a.createCommentAvatar,href:O()},l?r.a.createElement("i",{class:"fa fa-circle-o-notch fa-spin fa-3x fa-fw"}):r.a.createElement("img",{src:_e.a,alt:"This is commentor's avatar"})),r.a.createElement("div",{className:ye.a.createCommentHeader},r.a.createElement("span",{className:V()(ye.a.commentSwitch,ye.a.active)},"\u7f16\u8f91"),r.a.createElement("span",{className:ye.a.commentSwitch},"\u9884\u89c8"),!c.id&&!l&&r.a.createElement("span",{className:ye.a.commentorLogin},"\u901a\u8fc7GitHub",r.a.createElement("a",{href:O()},"\u767b\u9646"))),r.a.createElement("div",{className:ye.a.createCommentInputContainer},r.a.createElement("textarea",{ref:function(t){return e.comment=t},onInput:this.handleInput,className:ye.a.createCommentTextarea,placeholder:"\u8bf7\u7f16\u8f91\u60a8\u7684\u8bc4\u8bba"})),r.a.createElement("div",{className:ye.a.createCommentOperator},r.a.createElement("button",{onClick:this.handleSubmitComment},"\u8bc4\u8bba"))))))))}}]),t}(a.Component),Ee=Object(ee.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.issues},function(e){return e.entities.milestones},function(e){return e.entities.labels},function(e){return e.entities.comments},function(e){return e.user.viewer},function(e){return e.user.loading}],function(e,t,n,a,r,s,o,i,c){var l,u={},m=n[e];return m&&(l=m.issue),l&&(u=a[l]),{loading:t,currentIssue:u,milestonesMap:r,labelsMap:s,commentsMap:o,viewer:i,isUserLoading:c}}),we=[{path:"/",exact:!0,component:me},{path:"/editor",exact:!0,component:fe},{path:"/article/:number",exact:!0,component:Object(c.b)(Ee)(Object(he.a)(ge))}],ke=function(){return r.a.createElement(B.a,null,r.a.createElement(W.a,null,we.map(function(e){return r.a.createElement(P.a,{key:e.path,path:e.path,exact:e.exact,component:e.component})})))};n(372);n.d(t,"store",function(){return Ce});var Ce=Object(i.init)({models:R});o.a.render(r.a.createElement(c.a,{store:Ce},r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,2,1]]]);
//# sourceMappingURL=main.7767a4b7.chunk.js.map