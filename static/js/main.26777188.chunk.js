(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports={container:"style_container__Zb8RY",header:"style_header__3uDEC",navItem:"style_navItem__1wdaT",active:"style_active__1gcS-",articlesContainer:"style_articlesContainer__2mYTI",article:"style_article__2NtwU",articleTitle:"style_articleTitle__RDDaw",articleInfo:"style_articleInfo__2KrYr",articleCategory:"style_articleCategory__18gfE",articleLabel:"style_articleLabel__3y7XL"}},171:function(e,t,n){e.exports={loadingContainer:"style_loadingContainer__3Pquw"}},173:function(e,t,n){e.exports=n.p+"static/media/github.c9e82c1f.svg"},175:function(e,t,n){e.exports=n(375)},2:function(e,t,n){e.exports={container:"style_container__3FZwK",articleInfo:"style_articleInfo__1d5v-",articleCategory:"style_articleCategory__35I8s",articleLabel:"style_articleLabel__26rCk",articleBody:"style_articleBody__2JILV",issueCommentsContainer:"style_issueCommentsContainer__3eK_x",issueComment:"style_issueComment__2oN0w",commentorAvatar:"style_commentorAvatar__BkYRh",issueCommentHeader:"style_issueCommentHeader__1lxXR",issueCommentContent:"style_issueCommentContent__2bwiX",createCommentContainer:"style_createCommentContainer__mllTZ",createComment:"style_createComment__3rcPo",createCommentAvatar:"style_createCommentAvatar__1v_t3",createCommentHeader:"style_createCommentHeader__3opNa",commentSwitch:"style_commentSwitch__2d5YM",active:"style_active__6_-G8",commentorLogin:"style_commentorLogin__2fsAa",createCommentInputContainer:"style_createCommentInputContainer__2VtH6",createCommentTextarea:"style_createCommentTextarea__mjrW_",createCommentOperator:"style_createCommentOperator__2pW3w"}},371:function(e,t,n){},375:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(168),i=n.n(s),o=n(169),c=n(21),l=n(68),u=n(4),m=n.n(u),p=n(14),d=n(51),h=n.n(d),f=n(19),y={owner:"zhirui1994",repo:"zhirui1994.github.io",token:"MSt6aGlydWkxOTk0KzBhOGZmMjAwNWM3M2NmNmM1YzEzYWQyZmRkZjhjN2E4MDU0NzdlK3poaXJ1aTE5OTQuZ2l0aHViLmlvKzg=",client_id:"635ab95d562259d5e20a",client_secret:"e795e7e409ce731cf304facd92aecd305c774731"},b=new f.b.Entity("milestones"),_=new f.b.Entity("labels"),v=new f.b.Entity("comments"),g=new f.b.Entity("issues",{milestone:b,labels:{nodes:[_]},comments:{nodes:[v]}}),E=new f.b.Entity("repositories",{issue:g,issues:{nodes:[g]},labels:{nodes:[_]},milestones:{nodes:[b]}});function w(){var e=atob(y.token),t=new RegExp("(\\+".concat(y.owner,"\\+|\\+").concat(y.repo,"\\+)"),"g");return e.replace(t,"")}function C(){return k.apply(this,arguments)}function k(){return(k=Object(p.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.post("https://api.github.com/graphql",{query:'query { \n                repository(owner: "'.concat(y.owner,'", name: "').concat(y.repo,'") {\n                    id,\n                    labels(first: 100) {\n                        nodes {\n                            id,\n                            name,\n                            color,\n                        } \n                    },\n                    milestones(first:100) {\n                        nodes {\n                            id,\n                            number,\n                            state,\n                            title,\n                        }\n                    },\n                    issues(last:20, states:OPEN) {\n                        pageInfo {\n                            endCursor,\n                            startCursor,\n                            hasNextPage,\n                            hasPreviousPage\n                        },\n                        totalCount,\n                        nodes {\n                            id,\n                            title,\n                            number,\n                            createdAt,\n                            milestone {\n                                id\n                            },\n                            labels(first:100) {\n                                nodes {\n                                    id,\n                                }\n                            }\n                        }\n                    }\n                }\n            }')},{headers:{Authorization:"bearer ".concat(w())}}).then(function(e){return Object(f.a)(e.data.data.repository,E)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(e){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.a.post("https://api.github.com/graphql",{query:'query { \n                repository(owner: "'.concat(y.owner,'", name: "').concat(y.repo,'") {\n                    id,\n                    issue(number: ').concat(t,") {\n                        id,\n                        title,\n                        number,\n                        bodyHTML,\n                        createdAt,\n                        milestone {\n                            id,\n                            number,\n                            state,\n                            title,\n                        },\n                        labels(first:100) {\n                            nodes {\n                                id,\n                                name,\n                                color,\n                            }\n                        },\n                        comments(last: 20) {\n                            nodes {\n                                id,\n                                author {\n                                    avatarUrl,\n                                    login,\n                                    url,\n                                },\n                                bodyHTML,\n                                createdAt,\n                            }\n                        }\n                    }\n                }\n            }")},{headers:{Authorization:"bearer ".concat(w())}}).then(function(e){return Object(f.a)(e.data.data.repository,E)}));case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function O(){var e={scope:"public_repo",redirect_uri:encodeURIComponent("https://zhirui1994.github.io/#/article/1"),client_id:y.client_id},t=Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&");return"https://github.com/login/oauth/authorize?".concat(t)}function j(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",h.a.post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{code:t,client_id:y.client_id,client_secret:y.client_secret},{headers:{Accept:"application/json"}}).then(function(e){return e&&e.data});case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function T(e){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h.a.post("https://api.github.com/graphql",{query:"query { \n            viewer {\n                email,\n                id,\n                login,\n                name,\n                url\n            }\n        }"},{headers:{Authorization:t}}).then(function(e){return e&&e.data});case 1:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var A=n(74),L={name:"repository",state:{result:"",loading:!0},reducers:{update:function(e,t){return A.merge(e,t)}},effects:function(e){return{initIndex:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.repository.loading){t.next=3;break}return t.next=3,e.repository.update({loading:!0});case 3:return t.next=5,C();case 5:if(!(r=t.sent)){t.next=11;break}return t.next=9,e.entities.update(r.entities);case 9:return t.next=11,e.repository.update({result:r.result,loading:!1});case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getSingleIssue:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.repository.loading){t.next=3;break}return t.next=3,e.repository.update({loading:!0});case 3:return t.next=5,x(n);case 5:if(!(r=t.sent)){t.next=11;break}return t.next=9,e.entities.update(r.entities);case 9:return t.next=11,e.repository.update({result:r.result,loading:!1});case 11:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),closeCurrentIssue:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r,s,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a.repository.result,!(s=a.entities.repositories[r])){t.next=7;break}return s.issue=void 0,i={repositories:Object(l.a)({},r,s)},t.next=7,e.entities.update(i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}},S=n(74),H={name:"entities",state:{repositories:{},issues:{},labels:{},milestones:{},comments:{}},reducers:{update:function(e,t){return S.merge(e,t)}}};function Y(){var e=new URLSearchParams(window.location.search),t=e.get("code");if(t){e.delete("code");var n=e.toString(),a="".concat(window.location.pathname).concat(n?"?".concat(n):"").concat(window.location.hash);return window.history.pushState(null,null,a),t}return""}var U=n(74),D={user:{name:"user",state:{loading:!1,auth:!1,accessToken:"",scope:"",tokenType:"",viewer:{email:"",id:"",login:"",name:"",url:"",avatarUrl:""}},reducers:{update:function(e,t){return U.merge(e,t)}},effects:function(e){return{getAuthToken:function(){var t=Object(p.a)(m.a.mark(function t(n,a){var r,s,i,o,c,l,u,p,d;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.user.loading){t.next=3;break}return t.next=3,e.user.update({loading:!0});case 3:if(r=Y(),!(s=localStorage.getItem("GITHUB_USER_AUTH"))){t.next=15;break}return i=JSON.parse(s),o=i.access_token,c=i.token_type,l=i.scope,t.next=9,T("".concat(c," ").concat(o));case 9:if(!(u=t.sent)){t.next=13;break}return t.next=13,e.user.update({accessToken:o,tokenType:c,scope:l,auth:!0,loading:!1,viewer:u});case 13:t.next=29;break;case 15:if(!r){t.next=29;break}return t.next=18,j(r);case 18:if(!(p=t.sent)||!p.access_token){t.next=29;break}return localStorage.setItem("GITHUB_USER_AUTH",JSON.stringify(p)),t.next=24,T("".concat(p.token_type," ").concat(p.access_token));case 24:if(!(d=t.sent)){t.next=29;break}return t.next=29,e.user.update({accessToken:p.access_token,tokenType:p.token_type,scope:p.scope,auth:!0,loading:!1,viewer:d});case 29:return t.next=31,e.user.update({loading:!1});case 31:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}}},entities:H,repository:L};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=n(376),q=n(377),R=n(368),B=n(34),W=n(35),P=n(37),Z=n(36),G=n(38),J=n(39),K=n.n(J),F=n(50),X=n.n(F),V=n(69),Q=n(378),$=n(171),ee=n.n($),te=function(e){var t=e.children,n=e.loading;return void 0===n||n?r.a.createElement("div",{className:ee.a.loadingContainer},r.a.createElement("i",{className:"fa fa-spinner fa-pulse"})):r.a.createElement(a.Fragment,null,t)},ne=n(15),ae=n.n(ne),re={title:"\u6700\u65b0",id:"default_milestone"},se={nodes:[],pageInfo:{},totalCount:0},ie=function(e){function t(){var e;Object(B.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=Object(P.a)(this,Object(Z.a)(t).call(this,a))).state={activeMilestone:re},e}return Object(G.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch.repository.initIndex()}},{key:"render",value:function(){var e=this.state.activeMilestone,t=this.props,n=t.loading,a=t.issuesList,s=t.milestonesList,i=t.milestonesMap,o=t.labelsMap;return r.a.createElement(te,{loading:n},r.a.createElement("div",{className:ae.a.container},r.a.createElement("header",{className:ae.a.header},r.a.createElement("nav",null,s.map(function(t){return r.a.createElement("span",{key:t.id,className:K()(ae.a.navItem,Object(l.a)({},ae.a.active,t.title===e.title))},t.title)}))),r.a.createElement("main",{className:ae.a.articlesContainer},a.map(function(e){return r.a.createElement("article",{className:ae.a.article,key:e.id},r.a.createElement(Q.a,{to:"/article/".concat(e.number)},r.a.createElement("h3",{className:ae.a.articleTitle},e.title)),r.a.createElement("p",{className:ae.a.articleInfo},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),X()(e.createdAt).format("YYYY-MM-DD")),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),r.a.createElement("span",{className:ae.a.articleCategory},i[e.milestone].title)),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),e.labels.nodes.map(function(e){var t=o[e];return r.a.createElement("span",{key:t.id,className:ae.a.articleLabel,style:{background:"#".concat(t.color)}},t.name)}))))}))))}}]),t}(a.Component),oe=Object(V.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.issues},function(e){return e.entities.milestones},function(e){return e.entities.labels}],function(e,t,n,a,r,s){var i=n[e],o=Object.keys(r).map(function(e){return r[e]});o.length&&o.unshift(re);var c=se;return i&&i.issues&&(c=i.issues),{loading:t,labelsMap:s,milestonesMap:r,milestonesList:o,issuesList:c.nodes.map(function(e){return a[e]}),pageInfo:c.pageInfo,totalCount:c.totalCount}}),ce=Object(c.b)(oe)(ie),le=n(49),ue=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(P.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=n.handleSubmit.bind(Object(le.a)(Object(le.a)(n))),n}return Object(G.a)(t,e),Object(W.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.dispatch;this.title&&this.body&&t.issues.create({title:this.title.value,body:this.body.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Editor"},r.a.createElement("header",{className:"App-header"},"\u6587\u7ae0\u7f16\u8f91\u9875\uff01"),r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"title"},"\u6807\u9898\uff1a",r.a.createElement("input",{ref:function(t){return e.title=t},type:"text",id:"title"})),r.a.createElement("label",{htmlFor:"body"},"\u5185\u5bb9\uff1a",r.a.createElement("textarea",{ref:function(t){return e.body=t},cols:"60",rows:"5",id:"body"})),r.a.createElement("input",{onClick:this.handleSubmit,type:"submit",value:"\u521b\u5efa"})))}}]),t}(a.Component),me=Object(c.b)()(ue),pe=n(379),de=n(2),he=n.n(de),fe=n(173),ye=n.n(fe),be=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(P.a)(this,(e=Object(Z.a)(t)).call.apply(e,[this].concat(r)))).handleInput=function(e){e.preventDefault();var t=e.currentTarget;t.style.height="auto",t.style.height=t.scrollTop+t.scrollHeight+"px"},n}return Object(G.a)(t,e),Object(W.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.match.params.number;t.user.getAuthToken(),t.repository.getSingleIssue(n)}},{key:"componentWillUnmount",value:function(){this.props.dispatch.repository.closeCurrentIssue()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.labelsMap,a=e.commentsMap,s=e.currentIssue,i=e.milestonesMap,o=e.viewer,c=e.isUserLoading;return r.a.createElement(te,{loading:t},r.a.createElement("div",{className:he.a.container},r.a.createElement("header",null,r.a.createElement("h1",null,s.title),r.a.createElement("p",{className:he.a.articleInfo},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"}),X()(s.createdAt).format("YYYY-MM-DD")),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-th-list","aria-hidden":"true"}),r.a.createElement("span",{className:he.a.articleCategory},s.milestone&&i[s.milestone].title)),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-tags","aria-hidden":"true"}),s.labels&&s.labels.nodes.map(function(e){var t=n[e];return r.a.createElement("span",{key:t.id,className:he.a.articleLabel,style:{background:"#".concat(t.color)}},t.name)})))),r.a.createElement("main",null,r.a.createElement("article",{className:K()(he.a.articleBody,"markdown-body"),dangerouslySetInnerHTML:{__html:s.bodyHTML}}),r.a.createElement("div",{className:he.a.issueCommentsContainer},s.comments&&s.comments.nodes.map(function(e){var t=a[e];if(t){var n=t.author;return r.a.createElement("section",{key:t.id,className:he.a.issueComment},r.a.createElement("a",{className:he.a.commentorAvatar,href:n.url},r.a.createElement("img",{src:n.avatarUrl,alt:"This is commentor's avatar"})),r.a.createElement("p",{className:he.a.issueCommentHeader},r.a.createElement("a",{href:n.url},r.a.createElement("em",null,n.login)),r.a.createElement("span",null,X()(t.createdAt).format("YYYY-MM-DD HH:mm:ss"))),r.a.createElement("article",{className:K()(he.a.issueCommentContent,"markdown-body"),dangerouslySetInnerHTML:{__html:t.bodyHTML}}))}return null}),r.a.createElement("section",{className:he.a.createCommentContainer},r.a.createElement("div",{className:he.a.createComment},o.id?r.a.createElement("div",{className:he.a.createCommentAvatar},r.a.createElement("img",{src:o.avatarUrl,alt:"This is commentor's avatar"})):r.a.createElement("a",{className:he.a.createCommentAvatar,href:O()},c?r.a.createElement("i",{class:"fa fa-circle-o-notch fa-spin fa-3x fa-fw"}):r.a.createElement("img",{src:ye.a,alt:"This is commentor's avatar"})),r.a.createElement("div",{className:he.a.createCommentHeader},r.a.createElement("span",{className:K()(he.a.commentSwitch,he.a.active)},"\u7f16\u8f91"),r.a.createElement("span",{className:he.a.commentSwitch},"\u9884\u89c8"),!o.id&&!c&&r.a.createElement("span",{className:he.a.commentorLogin},"\u901a\u8fc7GitHub",r.a.createElement("a",{href:O()},"\u767b\u9646"))),r.a.createElement("div",{className:he.a.createCommentInputContainer},r.a.createElement("textarea",{onInput:this.handleInput,className:he.a.createCommentTextarea,placeholder:"\u8bf7\u7f16\u8f91\u60a8\u7684\u8bc4\u8bba"})),r.a.createElement("div",{className:he.a.createCommentOperator},r.a.createElement("button",null,"\u8bc4\u8bba"))))))))}}]),t}(a.Component),_e=Object(V.a)([function(e){return e.repository.result},function(e){return e.repository.loading},function(e){return e.entities.repositories},function(e){return e.entities.issues},function(e){return e.entities.milestones},function(e){return e.entities.labels},function(e){return e.entities.comments},function(e){return e.user.viewer},function(e){return e.user.loading}],function(e,t,n,a,r,s,i,o,c){var l,u={},m=n[e];return m&&(l=m.issue),l&&(u=a[l]),{loading:t,currentIssue:u,milestonesMap:r,labelsMap:s,commentsMap:i,viewer:o,isUserLoading:c}}),ve=[{path:"/",exact:!0,component:ce},{path:"/editor",exact:!0,component:me},{path:"/article/:number",exact:!0,component:Object(c.b)(_e)(Object(pe.a)(be))}],ge=function(){return r.a.createElement(z.a,null,r.a.createElement(q.a,null,ve.map(function(e){return r.a.createElement(R.a,{key:e.path,path:e.path,exact:e.exact,component:e.component})})))};n(371);n.d(t,"store",function(){return Ee});var Ee=Object(o.init)({models:D});i.a.render(r.a.createElement(c.a,{store:Ee},r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[175,2,1]]]);
//# sourceMappingURL=main.26777188.chunk.js.map