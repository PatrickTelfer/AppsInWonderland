(this["webpackJsonpdrawing-game"]=this["webpackJsonpdrawing-game"]||[]).push([[0],{137:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(0),s=n.n(i),o=n(119),l=n.n(o),j=(n(137),n(12)),u=n(3),b=n(22),d=n.n(b),m=n(44),O=n(7),h=n(192),f=n(193),x=n(194),p=n(42),g=n(195),v=n(207),w=n(196),S=n(127),C=n(2),y=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lobby",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});case 2:return a=e.sent,n(null),e.next=6,a.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(m.a)(d.a.mark((function e(t,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lobby/"+t);case 2:if(404!==(a=e.sent).status&&401!==a.status){e.next=8;break}return n("This room does not exist"),e.abrupt("return",null);case 8:return e.next=10,a.json();case 10:return c=e.sent,n(""),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(e){e.socket;var t=Object(i.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(null),s=Object(u.a)(r,2),o=s[0],l=s[1],b=Object(i.useState)(null),E=Object(u.a)(b,2),k=E[0],R=E[1],L=Object(O.f)();return Object(C.jsxs)(h.a,{p:"4",m:"2",minH:"lg",shadow:"lg",flexDirection:"column",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(x.a,{textAlign:"center",children:"APPS IN WONDERLAND"})}),Object(C.jsx)(f.a,{mt:4,children:Object(C.jsxs)(p.a,{isRequired:!0,w:"lg",children:[Object(C.jsx)(g.a,{children:"Name"}),Object(C.jsx)(v.a,{focusBorderColor:"purple.600",placeholder:"Enter Name",variant:"flushed",onChange:function(e){R(e.target.value)}})]})}),k&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(f.a,{mt:4,children:Object(C.jsxs)(p.a,{isRequired:!0,w:"lg",isInvalid:null!==o,children:[Object(C.jsx)(g.a,{children:"Code"}),Object(C.jsx)(v.a,{focusBorderColor:"purple.600",placeholder:"Enter Code (if joining a game)",variant:"flushed",onChange:function(e){c(e.target.value)}}),Object(C.jsx)(w.a,{children:o})]})}),Object(C.jsx)(f.a,{mt:4,children:Object(C.jsx)(S.a,{w:"lg",variant:"outline",colorScheme:"purple",onClick:Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(a,l);case 2:t=e.sent,console.log(t),null!==t&&(t.isHost=!1,L.push({pathname:"Lobby/"+t.code,state:Object(j.a)(Object(j.a)({},t),{},{name:k})}));case 5:case"end":return e.stop()}}),e)}))),children:"Join Game"})}),Object(C.jsx)(f.a,{mt:4,children:Object(C.jsx)(S.a,{w:"lg",variant:"outline",colorScheme:"purple",onClick:Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(k,l);case 2:t=e.sent,o||(t.isHost=!0,L.push({pathname:"Lobby/"+t.code,state:Object(j.a)(Object(j.a)({},t),{},{name:k})}));case 4:case"end":return e.stop()}}),e)}))),children:"Create Game"})})]})]})},k=n(197),R=function(e){var t=e.players;return Object(C.jsx)(k.a,{bgColor:"gray.200",minH:"3xs",w:"xs",mt:4,p:4,shadow:"lg",children:t&&t.map((function(e,t){return Object(C.jsx)(k.b,{children:e.name},t)}))})},L=n(59),W=n(60),T=n(79),B=(W.a.button(a||(a=Object(L.a)(["\n  display: inline-block;\n  background-color: white;\n  padding: 15px 15px;\n  border: 2px solid rgba(164, 53, 170, 0.8);\n  color: rgba(164, 53, 194, 0.8);\n  transition: all 0.15s;\n  margin: 0 0.3em 1.2em 0;\n  font-size: 1.5em;\n  font-weight: 500;\n  cursor: pointer;\n  &:hover {\n    color: rgba(164, 53, 194, 0.2);\n    border-color: rgba(164, 53, 194, 0.2);\n  }\n  &:active {\n    color: whitesmoke;\n    border-color: whitesmoke;\n  }\n  &:disabled {\n    color: rgba(164, 53, 194, 0.2);\n    border-color: rgba(164, 53, 194, 0.2);\n    cursor: default;\n  }\n  width: 30%;\n  @media (max-width: 768px) {\n    font-size: 1em;\n    padding: 5px 5px;\n    width: 80%;\n  }\n"]))),n(198)),A=Object(i.forwardRef)((function(e,t){if(!t)throw new Error("parent must provide canvas ref");var n=t,a=Object(i.useRef)(null),c=Object(i.useState)(null),r=Object(u.a)(c,2),s=r[0],o=r[1],l=Object(i.useState)(0),j=Object(u.a)(l,2),b=j[0],d=j[1],m=Object(i.useState)(0),O=Object(u.a)(m,2),f=O[0],x=O[1],p=Object(i.useState)(!1),g=Object(u.a)(p,2),v=g[0],w=g[1],S=Object(i.useState)(!0),y=Object(u.a)(S,2),D=y[0],E=y[1],k=Object(i.useState)(),R=Object(u.a)(k,2),L=R[0],W=R[1];Object(i.useEffect)((function(){var e=n.current.getContext("2d");o(e),e.canvas.width=300,e.canvas.height=420,W("#000000")}),[s]);var A=function(e,t,n){s.strokeStyle=L,s.lineWidth=3,D||(s.strokeStyle="#f2f2f2",s.lineWidth=30),s.beginPath(),s.moveTo(b,f),s.lineTo(e,t),s.closePath(),s.stroke()};return Object(C.jsxs)(h.a,{ref:a,p:"2",flexDirection:"column",alignItems:"center",children:[Object(C.jsxs)(h.a,{bg:"purple.100",p:"2",borderRadius:"lg",justifyContent:"space-around",width:"3xs",mb:4,children:[Object(C.jsx)(B.a,{colorScheme:"purple",disabled:!D,"aria-label":"Eraser",icon:Object(C.jsx)(T.a,{}),onClick:function(){E(!D)}}),Object(C.jsx)(B.a,{colorScheme:"purple","aria-label":"Draw",disabled:D,icon:Object(C.jsx)(T.b,{}),onClick:function(){E(!D)}}),Object(C.jsx)(B.a,{colorScheme:"purple","aria-label":"Trash",icon:Object(C.jsx)(T.c,{}),onClick:function(){s.clearRect(0,0,s.canvas.width,s.canvas.height)}})]}),Object(C.jsx)("canvas",{style:{backgroundColor:"#f2f2f2",touchAction:"none",boxShadow:"2px 2px 2px 1px rgb(0 0 0 / 20%)"},ref:n,onTouchStart:function(e){var t=F(e,s.canvas);d(t.x),x(t.y),w(!0)},onTouchEnd:function(e){if(v){var t=F(e,s.canvas);A(t.x,t.y),w(!1)}},onTouchMove:function(e){if(v){var t=F(e,s.canvas);A(t.x,t.y),d(t.x),x(t.y)}},onMouseDown:function(e){w(!0),d(e.nativeEvent.offsetX),x(e.nativeEvent.offsetY)},onMouseUp:function(e){v&&(A(e.nativeEvent.offsetX,e.nativeEvent.offsetY),w(!1))},onMouseMove:function(e){v&&(A(e.nativeEvent.offsetX,e.nativeEvent.offsetY),d(e.nativeEvent.offsetX),x(e.nativeEvent.offsetY))},onMouseLeave:function(e){w(!1)}})]})})),F=function(e,t){return{x:e.changedTouches[0].pageX-t.offsetLeft,y:e.changedTouches[0].pageY-t.offsetTop}},P=(W.a.div(c||(c=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    padding: 0;\n  }\n"]))),W.a.canvas(r||(r=Object(L.a)(["\n  background-color: #f2f2f2;\n  touch-action: none;\n  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);\n"]))),A),I=n(123),V=n.n(I).a.connect("https://appsinwonderland.herokuapp.com/"),H=s.a.createContext(),M=n(199),N=n(200),U=n(204),G=n(202),z=Object(O.h)((function(e){var t=Object(i.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1],b=Object(i.useState)(60),g=Object(u.a)(b,2),v=g[0],w=g[1],y=e.location.state,D=y.code,E=y.name,k=y.isHost,L=Object(i.useContext)(H),W=Object(O.f)(),T=Object(i.useRef)();Object(i.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lobby/"+D);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.players);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[D]),Object(i.useEffect)((function(){var e=!0;return L&&e&&L.on("playerJoined",(function(t){e&&c(t)})),L&&e&&!o&&(L.emit("join",{serverCode:D,name:E}),l(!0)),L&&e&&L.on("hostStartedGame",(function(){e=!1,W.replace({pathname:"/Prompt/"+D,state:Object(j.a)(Object(j.a)({},y),{},{name:E})})})),function(){e=!1,L.removeAllListeners("playerJoined"),L.removeAllListeners("hostStartedGame")}}),[L,o,E,D,W,y]);return Object(C.jsxs)(h.a,{flexWrap:"wrap",children:[Object(C.jsxs)(h.a,{flexGrow:"1",p:"4",m:"2",minH:"xl",shadow:"md",flexDirection:"column",minW:"sm",alignItems:"center",children:[Object(C.jsx)(x.a,{textAlign:"center",children:"WELCOME TO THE LOBBY"}),Object(C.jsxs)(M.a,{fontSize:"lg",children:["\ud83d\udd25 Join with code ",Object(C.jsx)(N.a,{colorScheme:"red",children:D})," \ud83d\udd25"]}),Object(C.jsx)(R,{players:a}),Object(C.jsxs)(M.a,{mt:4,fontSize:"md",children:["Player Count: ",a&&a.length]}),k&&Object(C.jsx)(h.a,{flexDirection:"column",alignItems:"center",marginTop:"auto",children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)(M.a,{children:"Set Round Duration"}),Object(C.jsxs)(U.a,{defaultValue:v,min:5,max:120,step:5,onChange:function(e){w(e)},focusThumbOnChange:!1,children:[Object(C.jsxs)(U.d,{bg:"purple.100",children:[Object(C.jsx)(G.a,{position:"relative",right:10}),Object(C.jsx)(U.b,{bg:"purple.600"})]}),Object(C.jsx)(U.c,{boxSize:6})]}),Object(C.jsx)(f.a,{children:Object(C.jsxs)(M.a,{children:[v," seconds"]})})]})}),k&&Object(C.jsx)(S.a,{variant:"outline",colorScheme:"purple",mt:12,w:"2xs",onClick:function(){if(L){var e={lobbyDuration:v};L.emit("start",e)}},children:"Start"})]}),Object(C.jsxs)(h.a,{flexGrow:"1",p:"4",m:"2",minH:"lg",shadow:"md",flexDirection:"column",minW:"sm",children:[Object(C.jsx)(f.a,{children:Object(C.jsx)(M.a,{fontSize:"lg",children:"Test the drawing pad!"})}),Object(C.jsx)(P,{ref:T})]})]})})),q=n(208),J=n(209),Y=Object(O.h)((function(e){var t=e.location.state,n=t.name,a=Object(i.useContext)(H),c=Object(i.useState)(30),r=Object(u.a)(c,2),s=r[0],o=r[1],l=Object(i.useState)(!1),b=Object(u.a)(l,2),d=b[0],m=b[1],w=Object(i.useState)(""),y=Object(u.a)(w,2),D=y[0],E=y[1],k=Object(i.useState)(60),R=Object(u.a)(k,2),L=R[0],W=R[1],T=Object(O.f)(),B=Object(i.useState)(!1),A=Object(u.a)(B,2),F=A[0],P=A[1],I=Object(O.g)().id;return Object(i.useEffect)((function(){var e=!0;return a&&(a.on("timerUpdateStart",(function(t){if(e){var n=t.second,a=t.maxSecond;o(n),W(a),F||P(!0)}})),a.on("timerDoneStart",(function(){e&&(d||""===D||a.emit("submitPrompt",D),T.replace({pathname:"/DrawingScreen/"+I,state:Object(j.a)(Object(j.a)({},t),{},{name:n})}))}))),function(){e=!1,a.removeAllListeners("timerDoneStart"),a.removeAllListeners("timerUpdateStart")}}),[T,a,d,D]),Object(C.jsxs)(h.a,{p:"4",m:"2",minH:"xl",shadow:"md",flexDirection:"column",children:[Object(C.jsx)(x.a,{textAlign:"center",children:"Enter a drawing prompt"}),Object(C.jsx)(M.a,{textAlign:"center",fontSize:"sm",mt:2,children:"Drawing prompts will then be randomly selected to be drawn by the other players"}),Object(C.jsx)(f.a,{children:Object(C.jsx)(q.a,{value:s,max:L,mt:4,children:F&&Object(C.jsx)(q.b,{children:s})})}),!d&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(f.a,{mt:8,children:Object(C.jsxs)(p.a,{isRequired:!0,w:"lg",children:[Object(C.jsx)(g.a,{children:"Prompt"}),Object(C.jsx)(v.a,{focusBorderColor:"purple.600",placeholder:"Input a suggestion!",variant:"flushed",onChange:function(e){E(e.target.value)}})]})}),Object(C.jsx)(f.a,{mt:4,children:Object(C.jsx)(S.a,{w:"lg",variant:"outline",colorScheme:"purple",onClick:function(){""!==D&&(m(!0),a.emit("submitPrompt",D))},children:"Submit"})})]}),d&&Object(C.jsx)(f.a,{mt:"auto",children:Object(C.jsxs)(J.a,{status:"success",children:[Object(C.jsx)(J.b,{}),"Thank your for your submission. Waiting for others to submit"]})})]})})),X=Object(O.h)((function(e){var t=Object(i.useContext)(H),n=Object(i.useRef)(),a=Object(O.f)(),c=Object(O.g)().id,r=Object(i.useState)(""),s=Object(u.a)(r,2),o=s[0],l=s[1],b=Object(i.useState)(60),d=Object(u.a)(b,2),m=d[0],f=d[1],p=Object(i.useState)(!1),g=Object(u.a)(p,2),v=g[0],w=g[1],y=Object(i.useState)(!1),D=Object(u.a)(y,2),E=D[0],k=D[1],R=Object(i.useState)(60),L=Object(u.a)(R,2),W=L[0],T=L[1],B=e.location.state,A=B&&B.name;return Object(i.useEffect)((function(){t&&(t.emit("requestingPrompt"),t.emit("startTimer"))}),[t]),Object(i.useEffect)((function(){var e=!0;return t&&e&&(t.on("timerUpdate",(function(t){var n=t.second,a=t.maxSecond;e&&(f(n),T(a)),E||k(!0)})),t.on("timerDone",(function(){if(e){if(!v){var r=n.current.toDataURL(),i={name:A,dataURL:r};t.emit("submittingImage",i)}a.replace({pathname:"/Voting/"+c,state:Object(j.a)(Object(j.a)({},B),{},{name:A,prompt:o})})}}))),function(){e=!1,t.removeAllListeners("timerDone"),t.removeAllListeners("timerUpdate")}}),[t,v,E]),Object(i.useEffect)((function(){var e=!0;return t&&e&&(t.on("sendingPrompt",(function(t){e&&l(t)})),t.on("gameOver",(function(){e&&a.replace("/")}))),function(){e=!1,t.removeAllListeners("sendingPrompt"),t.removeAllListeners("gameOver")}}),[a,t,v]),Object(C.jsxs)(h.a,{p:"4",m:"2",minH:"xl",shadow:"md",flexDirection:"column",alignItems:"center",children:[Object(C.jsx)(x.a,{size:"md",children:"The prompt is:"}),Object(C.jsx)(M.a,{children:Object(C.jsx)(N.a,{children:o||"a turtle wearing a top hat"})}),Object(C.jsx)(q.a,{value:m,max:W,mt:4,children:E&&Object(C.jsx)(q.b,{children:m})}),!v&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(P,{ref:n}),Object(C.jsx)(S.a,{w:"2xs",variant:"outline",colorScheme:"purple",onClick:function(){w(!0);var e=n.current.toDataURL(),a={name:A,dataURL:e};t.emit("submittingImage",a)},children:"Submit"})]}),v&&Object(C.jsxs)(J.a,{status:"success",mt:"auto",children:[Object(C.jsx)(J.b,{}),"Thank your for your submission. Waiting for others to submit"]})]})})),K=n(210),Q=n(206),Z=function(e){var t=e.bgColor;return Object(C.jsx)(G.a,{borderRadius:"md",mb:"1",p:"1",textAlign:"center",bgColor:t,children:e.children})},$=function(e){var t=e.bgColor,n=e.onClick;return Object(C.jsx)(S.a,{w:"2xs",bgColor:t,borderRadius:"md",padding:"2",onClick:n,children:e.children})},_=function(e){var t=e.src,n=e.name,a=e.showBest,c=e.setShowBest,r=e.showWeird,s=e.setShowWeird,o=e.showCreative,l=e.setShowCreative,j=e.showName,u=e.isBest,b=e.isCreative,d=e.isWeird,m=Object(i.useContext)(H);return Object(C.jsxs)(h.a,{flexDirection:"column",w:"300px",m:2,children:[Object(C.jsxs)(h.a,{flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f2f2f2",mb:2,children:[Object(C.jsx)(K.a,{alt:"user drawing",src:t}),Object(C.jsxs)(G.a,{margin:"1",children:[u&&Object(C.jsx)(Z,{bgColor:"#67e9a3",children:"\ud83e\udd47 Best Drawing \ud83e\udd47"}),b&&Object(C.jsx)(Z,{bgColor:"#7CE3F1",children:"\ud83c\udfa8 Most Creative \ud83c\udfa8"}),d&&Object(C.jsx)(Z,{bgColor:"#FD7070",children:"\ud83e\udd14 ??? \ud83e\udd14"})]}),j&&Object(C.jsxs)(G.a,{mt:"auto",bgColor:"white",p:"2",mb:"2",borderRadius:"md",children:["Drawing by ",n]})]}),Object(C.jsxs)(Q.a,{spacing:2,children:[a&&Object(C.jsx)($,{bgColor:"#67e9a3",onClick:function(){c(!1),m.emit("voteForPlayer",{name:n,category:"best"})},children:"\ud83e\udd47 Best Drawing \ud83e\udd47"}),o&&Object(C.jsx)($,{bgColor:"#7CE3F1",onClick:function(){l(!1),m.emit("voteForPlayer",{name:n,category:"creative"})},children:"\ud83c\udfa8 Most Creative \ud83c\udfa8"}),r&&Object(C.jsx)($,{bgColor:"#FD7070",onClick:function(){s(!1),m.emit("voteForPlayer",{name:n,category:"weird"})},children:"\ud83e\udd14 ??? \ud83e\udd14"})]})]})},ee=Object(O.h)((function(e){var t=Object(i.useContext)(H),n=Object(i.useState)([]),a=Object(u.a)(n,2),c=a[0],r=a[1],s=Object(O.f)(),o=Object(O.g)().id,l=Object(i.useState)(!1),b=Object(u.a)(l,2),d=b[0],m=b[1],f=Object(i.useState)(!0),p=Object(u.a)(f,2),g=p[0],v=p[1],w=Object(i.useState)(!0),S=Object(u.a)(w,2),y=S[0],D=S[1],E=Object(i.useState)(!0),k=Object(u.a)(E,2),R=k[0],L=k[1],W=e.location.state,T=W&&W.name,B=W&&W.prompt;return Object(i.useEffect)((function(){var e=!0;return t&&!d&&e&&(t.emit("requestingImages"),e&&m(!0),t.on("sendingImages",(function(t){e&&r(t)})),t.on("lastVoteDraw",(function(){e&&s.replace({pathname:"/RoundResults/"+o,state:Object(j.a)(Object(j.a)({},W),{},{name:T,isLast:!1,prompt:B})})})),t.on("lastVoteEnd",(function(){e&&s.replace({pathname:"/RoundResults/"+o,state:Object(j.a)(Object(j.a)({},W),{},{name:T,isLast:!0,prompt:B})})}))),function(){e=!1,t.removeAllListeners("sendingImages"),t.removeAllListeners("lastVoteDraw"),t.removeAllListeners("lastVoteEnd")}}),[]),Object(C.jsxs)(h.a,{p:"4",m:"2",minH:"xl",shadow:"md",flexDirection:"column",alignItems:"center",children:[Object(C.jsx)(x.a,{children:"Vote!"}),Object(C.jsxs)(M.a,{children:["For the prompt ",Object(C.jsx)(N.a,{children:B})]}),Object(C.jsx)(h.a,{justifyContent:"center",flexWrap:"wrap",margin:"1",children:c.map((function(e,t){return Object(C.jsx)(_,{src:e.dataURL,name:e.name,showBest:g,setShowBest:v,showCreative:y,setShowCreative:D,showWeird:R,setShowWeird:L,showName:!1},t)}))})]})})),te=function(e){var t=e.title,n=e.data,a=e.color;return Object(C.jsxs)(h.a,{minW:"xs",flexDirection:"column",flex:"1",alignItems:"center",mt:2,mb:2,children:[Object(C.jsx)(M.a,{bgColor:a,p:"2",borderRadius:"md",mb:2,w:"80%",children:t}),Object(C.jsx)(k.a,{children:n.map((function(e,t){return Object(C.jsxs)(k.b,{children:[0===t&&" \ud83e\udd47 ",e.name," ",Object(C.jsxs)(M.a,{display:"inline",color:"red",children:[" ","(",e.value," votes)"]})]},t)}))})]})};function ne(e,t){return e.value>t.value?-1:1}var ae=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),r=Object(u.a)(c,2),s=r[0],o=r[1],l=Object(i.useState)([]),j=Object(u.a)(l,2),b=j[0],d=j[1],m=Object(i.useState)([]),O=Object(u.a)(m,2),f=O[0],p=O[1],g=Object(i.useContext)(H);return Object(i.useEffect)((function(){var e=!0;return g&&e&&(g.emit("requestingVotes"),g.on("sendingVotes",(function(t){e&&p(t)}))),function(){e=!1}}),[g]),Object(i.useEffect)((function(){var e=f.map((function(e){return{name:e.name,value:e.votes.best}})),t=f.map((function(e){return{name:e.name,value:e.votes.creative}})),n=f.map((function(e){return{name:e.name,value:e.votes.weird}}));e.sort(ne),a(e),t.sort(ne),o(t),n.sort(ne),d(n)}),[f]),Object(C.jsxs)(h.a,{p:"4",m:"2",minH:"lg",shadow:"lg",textAlign:"center",flexDirection:"column",children:[Object(C.jsx)(x.a,{mb:2,children:"Final Results!"}),Object(C.jsxs)(h.a,{textAlign:"center",flexWrap:"wrap",children:[Object(C.jsx)(te,{title:"Best Drawing",color:"#67e9a3",data:n}),Object(C.jsx)(te,{title:"Most Creative",color:"#7CE3F1",data:s}),Object(C.jsx)(te,{title:"???? Drawing",color:"#FD7070",data:b})]})]})};function ce(e,t){return e.value>t.value?-1:1}function re(e,t){for(var n=e[0].value,a=0;a<e.length;a++)e[a].value===n?e[a][t]=!0:e[a][t]=!1}var ie=Object(O.h)((function(e){var t=Object(i.useState)([]),n=Object(u.a)(t,2),a=n[0],c=n[1],r=Object(i.useState)([]),s=Object(u.a)(r,2),o=s[0],l=s[1],b=Object(i.useState)("Next Round"),d=Object(u.a)(b,2),m=d[0],f=d[1],p=Object(O.f)(),g=Object(O.g)().id,v=Object(i.useContext)(H),w=e.location.state,y=w.isHost,D=w.name,E=w.isLast,k=w.prompt;return Object(i.useEffect)((function(){E&&f("Go To Final Results")}),[E]),Object(i.useEffect)((function(){var e=!0;return v&&e&&(v.emit("requestingVotes"),v.on("sendingVotes",(function(t){e&&l(t)})),v.on("hostStartedNextRound",(function(){p.replace({pathname:"/DrawingScreen/"+g,state:Object(j.a)(Object(j.a)({},w),{},{name:D})})})),v.on("hostEndedGame",(function(){p.replace({pathname:"/Results/"+g,state:Object(j.a)(Object(j.a)({},w),{},{name:D})})}))),function(){e=!1}}),[v]),Object(i.useEffect)((function(){if(0!==o.length){var e=o.map((function(e){return{name:e.name,value:e.roundVotes.best,img:e.currentDrawing}})),t=o.map((function(e){return{name:e.name,value:e.roundVotes.creative}})),n=o.map((function(e){return{name:e.name,value:e.roundVotes.weird}}));e.sort(ce),t.sort(ce),n.sort(ce),re(e,"isBest"),re(t,"isCreative"),re(n,"isWeird");var a=function(e,t,n){for(var a=[],c=0;c<e.length;c++){var r=e[c].name;a[c]={name:r,isBest:e[c].isBest,img:e[c].img};for(var i=0;i<t.length;i++)if(t[i].name===r){a[c].isCreative=t[i].isCreative;break}for(var s=0;s<n.length;s++)if(n[s].name===r){a[c].isWeird=n[s].isWeird;break}}return a}(e,t,n);c(a)}}),[o]),Object(C.jsxs)(h.a,{p:"4",m:"2",minH:"xl",shadow:"md",flexDirection:"column",alignItems:"center",children:[Object(C.jsx)(x.a,{children:"Round Results"}),Object(C.jsxs)(M.a,{mb:2,children:["For the prompt ",Object(C.jsx)(N.a,{children:k})]}),y&&Object(C.jsx)(S.a,{variant:"outline",colorScheme:"purple",onClick:function(){E?v.emit("hostEndingGame"):v.emit("hostStartingNextRound")},children:m}),Object(C.jsx)(h.a,{justifyContent:"center",flexWrap:"wrap",m:2,children:a.map((function(e,t){return Object(C.jsx)(_,{src:e.img,name:e.name,setShowBest:function(){},showBest:!1,setShowCreative:function(){},showCreative:!1,setShowWeird:function(){},showWeird:!1,showName:!0,isBest:e.isBest,isCreative:e.isCreative,isWeird:e.isWeird},t)}))})]})})),se=n(50),oe=n(205),le=n(203),je=Object(le.a)({config:{initialColorMode:"light",useSystemColorMode:!1}});var ue=function(){return Object(C.jsx)(oe.a,{theme:je,children:Object(C.jsx)(H.Provider,{value:V,children:Object(C.jsx)(se.a,{children:Object(C.jsxs)(O.c,{children:[Object(C.jsx)(O.a,{path:"/RoundResults/:id",children:Object(C.jsx)(ie,{})}),Object(C.jsx)(O.a,{path:"/Results/:id",children:Object(C.jsx)(ae,{})}),Object(C.jsx)(O.a,{path:"/Voting/:id",children:Object(C.jsx)(ee,{})}),Object(C.jsx)(O.a,{path:"/Prompt/:id",children:Object(C.jsx)(Y,{})}),Object(C.jsx)(O.a,{path:"/Lobby/:id",children:Object(C.jsx)(z,{})}),Object(C.jsx)(O.a,{path:"/DrawingScreen/:id",children:Object(C.jsx)(X,{})}),Object(C.jsx)(O.a,{path:"/",children:Object(C.jsx)(E,{})})]})})})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};l.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(ue,{})}),document.getElementById("root")),be()}},[[180,1,2]]]);
//# sourceMappingURL=main.bafe995f.chunk.js.map