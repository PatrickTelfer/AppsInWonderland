(this["webpackJsonpdrawing-game"]=this["webpackJsonpdrawing-game"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,b,j,l,u,d,O,m,f,h,x,p,g,v,w,y,S,C,k,E,D,L,R,T,P,B,F,W,V,A,N,I,M,z,U=n(0),G=n.n(U),J=n(54),Y=n.n(J),H=(n(63),n(2)),X=n(6),q=n(4),K=n(10),Q=n.n(K),Z=n(17),$=n(5),_=n(3),ee=_.a.div(a||(a=Object(H.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  padding-left: 20px;\n  padding-right: 20px;\n  @media (max-width: 768px) {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n"]))),te=_.a.div(r||(r=Object(H.a)(["\n  flex: 1;\n  height: 90%;\n  @media (max-width: 768px) {\n    height: 90%;\n  }\n  background-color: white;\n  border: 4px solid rgba(164, 53, 194, 0.4);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 25px;\n  box-sizing: border-box;\n"]))),ne=_.a.button(c||(c=Object(H.a)(["\n  display: inline-block;\n  background-color: white;\n  padding: 15px 15px;\n  border: 2px solid rgba(164, 53, 170, 0.8);\n  color: rgba(164, 53, 194, 0.8);\n  transition: all 0.15s;\n  margin: 0 0.3em 1.2em 0;\n  font-size: 1.5em;\n  font-weight: 500;\n  cursor: pointer;\n  &:hover {\n    color: rgba(164, 53, 194, 0.2);\n    border-color: rgba(164, 53, 194, 0.2);\n  }\n  &:active {\n    color: whitesmoke;\n    border-color: whitesmoke;\n  }\n  &:disabled {\n    color: rgba(164, 53, 194, 0.2);\n    border-color: rgba(164, 53, 194, 0.2);\n    cursor: default;\n  }\n  width: 30%;\n  @media (max-width: 768px) {\n    font-size: 1em;\n    padding: 5px 5px;\n    width: 80%;\n  }\n"]))),ae=_.a.input(i||(i=Object(H.a)(["\n  display: inline-block;\n  background-color: white;\n  padding: 15px 15px;\n  border: none;\n  border-bottom: 2px solid rgba(164, 53, 170, 0.8);\n  color: rgba(164, 53, 170, 0.8);\n  font-size: 1.5em;\n  transition: all 0.15s;\n  margin-bottom: 1.2em;\n  text-align: center;\n  &:hover {\n    color: rgba(164, 53, 194, 0.6);\n    border-color: rgba(164, 53, 194, 0.6);\n    outline: none;\n  }\n  &:focus {\n    color: red;\n    color: rgba(164, 53, 194, 0.6);\n    border-color: rgba(164, 53, 194, 0.6);\n    outline: none;\n  }\n  &::placeholder {\n    color: rgba(164, 53, 170, 0.8);\n  }\n  width: 50%;\n  @media (max-width: 768px) {\n    font-size: 1em;\n    padding: 5px 5px;\n    width: 80%;\n  }\n"]))),re=_.a.h1(o||(o=Object(H.a)(["\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #47d1c2;\n  margin-bottom: 0;\n\n  @media (max-width: 768px) {\n    font-size: 1em;\n  }\n"]))),ce=_.a.h3(s||(s=Object(H.a)(["\n  text-align: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #47d1c2;\n  margin-bottom: 0.5em;\n  margin-top: 0;\n  @media (max-width: 768px) {\n    font-size: 0.75em;\n    margin-bottom: 0;\n  }\n"]))),ie=n(1),oe=function(){var e=Object(Z.a)(Q.a.mark((function e(t,n){var a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lobby",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})});case 2:return a=e.sent,n(null),e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),se=function(){var e=Object(Z.a)(Q.a.mark((function e(t,n){var a,r;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lobby/"+t);case 2:if(404!==(a=e.sent).status){e.next=8;break}return n("This room does not exist"),e.abrupt("return",null);case 8:return e.next=10,a.json();case 10:return r=e.sent,n(""),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be=Object(_.a)(ne)(b||(b=Object(H.a)(["\n  border: 2px solid rgb(84, 177, 184);\n  color: rgb(84, 177, 184);\n"]))),je=_.a.p(j||(j=Object(H.a)(["\n  color: red;\n"]))),le=function(e){e.socket;var t=Object(U.useState)(""),n=Object(q.a)(t,2),a=n[0],r=n[1],c=Object(U.useState)(null),i=Object(q.a)(c,2),o=i[0],s=i[1],b=Object(U.useState)(null),j=Object(q.a)(b,2),l=j[0],u=j[1],d=Object($.f)();return Object(ie.jsx)(ee,{children:Object(ie.jsxs)(te,{children:[Object(ie.jsx)(re,{children:"APPS IN WONDERLAND"}),Object(ie.jsx)(ae,{placeholder:"Enter Name",onChange:function(e){u(e.target.value)}}),l&&Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(ae,{placeholder:"Enter Code",onChange:function(e){r(e.target.value)}}),""!==o&&Object(ie.jsx)(je,{children:o}),Object(ie.jsx)(ne,{disabled:""===a,onClick:Object(Z.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(a,s);case 2:null!==(t=e.sent)&&(t.isHost=!1,d.push({pathname:"Lobby/"+t.code,state:Object(X.a)(Object(X.a)({},t),{},{name:l})}));case 4:case"end":return e.stop()}}),e)}))),children:"JOIN"}),Object(ie.jsx)(be,{onClick:Object(Z.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(l,s);case 2:t=e.sent,o||(t.isHost=!0,d.push({pathname:"Lobby/"+t.code,state:Object(X.a)(Object(X.a)({},t),{},{name:l})}));case 4:case"end":return e.stop()}}),e)}))),children:"CREATE"})]})]})})},ue=_.a.ol(l||(l=Object(H.a)(["\n  padding-inline-start: 40px;\n  max-height: 250px;\n  overflow-y: scroll;\n  width: 75%;\n  max-width: 90%;\n  background-color: #f0f0f0;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  min-height: 30%;\n"]))),de=_.a.li(u||(u=Object(H.a)(["\n  font-size: 1.5em;\n"]))),Oe=function(e){var t=e.players;return Object(ie.jsx)(ue,{children:t&&t.map((function(e,t){return Object(ie.jsx)(de,{children:e.name},t)}))})},me=n(27),fe=Object(U.forwardRef)((function(e,t){if(!t)throw new Error("parent must provide canvas ref");var n=t,a=Object(U.useRef)(null),r=Object(U.useState)(null),c=Object(q.a)(r,2),i=c[0],o=c[1],s=Object(U.useState)(0),b=Object(q.a)(s,2),j=b[0],l=b[1],u=Object(U.useState)(0),d=Object(q.a)(u,2),O=d[0],m=d[1],f=Object(U.useState)(!1),h=Object(q.a)(f,2),x=h[0],p=h[1],g=Object(U.useState)(0),v=Object(q.a)(g,2),w=(v[0],v[1],Object(U.useState)(!0)),y=Object(q.a)(w,2),S=y[0],C=y[1],k=Object(U.useState)(),E=Object(q.a)(k,2),D=E[0],L=E[1];Object(U.useEffect)((function(){var e=n.current.getContext("2d");o(e),e.canvas.width=300,e.canvas.height=420,L("#000000")}),[i]);var R=function(e,t,n){i.strokeStyle=D,i.lineWidth=1,S||(i.strokeStyle="#f2f2f2",i.lineWidth=20),i.beginPath(),i.moveTo(j,O),i.lineTo(e,t),i.closePath(),i.stroke()};return Object(ie.jsxs)(xe,{ref:a,children:[Object(ie.jsxs)(ge,{children:[Object(ie.jsx)(ye,{type:"color",onChange:function(e){L(e.target.value)}}),Object(ie.jsx)(ve,{disabled:!S,onClick:function(){C(!S)},children:Object(ie.jsx)(me.a,{})}),Object(ie.jsx)(ve,{disabled:S,onClick:function(){C(!S)},children:Object(ie.jsx)(me.b,{})}),Object(ie.jsx)(we,{onClick:function(){i.clearRect(0,0,i.canvas.width,i.canvas.height)},children:Object(ie.jsx)(me.c,{})})]}),Object(ie.jsx)(pe,{ref:n,onTouchStart:function(e){var t=he(e,i.canvas);l(t.x),m(t.y),p(!0)},onTouchEnd:function(e){if(x){var t=he(e,i.canvas);R(t.x,t.y),p(!1)}},onTouchMove:function(e){if(x){var t=he(e,i.canvas);R(t.x,t.y),l(t.x),m(t.y)}},onMouseDown:function(e){p(!0),l(e.nativeEvent.offsetX),m(e.nativeEvent.offsetY)},onMouseUp:function(e){x&&(R(e.nativeEvent.offsetX,e.nativeEvent.offsetY),p(!1))},onMouseMove:function(e){x&&(R(e.nativeEvent.offsetX,e.nativeEvent.offsetY),l(e.nativeEvent.offsetX),m(e.nativeEvent.offsetY))},onMouseLeave:function(e){p(!1)}})]})})),he=function(e,t){return{x:e.changedTouches[0].pageX-t.offsetLeft,y:e.changedTouches[0].pageY-t.offsetTop}},xe=_.a.div(d||(d=Object(H.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    padding: 0;\n  }\n"]))),pe=_.a.canvas(O||(O=Object(H.a)(["\n  background-color: #f2f2f2;\n  touch-action: none;\n  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);\n"]))),ge=_.a.div(m||(m=Object(H.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 50%;\n  border: 2px solid rgba(164, 53, 170, 0.8);\n  margin-bottom: 10px;\n  margin-top: 10px;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),ve=Object(_.a)(ne)(f||(f=Object(H.a)(["\n  width: 55px;\n  height: 55px;\n  margin: 5px;\n  cursor: pointer;\n  background-color: white;\n  padding: 0;\n  font-weight: 1em;\n"]))),we=Object(_.a)(ve)(h||(h=Object(H.a)(["\n  &:focus {\n    border: 2px solid rgba(164, 53, 170, 0.8);\n    color: rgba(164, 53, 194, 0.8);\n  }\n"]))),ye=_.a.input(x||(x=Object(H.a)(["\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n  cursor: pointer;\n  margin-right: auto;\n"]))),Se=fe,Ce=n(58),ke=n.n(Ce).a.connect("https://appsinwonderland.herokuapp.com/"),Ee=G.a.createContext(),De=Object(_.a)(ce)(p||(p=Object(H.a)(["\n  outline: red;\n  font-size: 1.25em;\n"]))),Le=Object(_.a)(te)(g||(g=Object(H.a)(["\n  max-width: 500px;\n  min-width: 300px;\n  margin: 0.5em;\n"]))),Re=Object(_.a)(te)(v||(v=Object(H.a)(["\n  margin: 0.5em;\n  max-width: 500px;\n  justify-content: center;\n  @media (max-width: 768px) {\n    padding: 0;\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]))),Te=Object($.h)((function(e){var t=Object(U.useState)([]),n=Object(q.a)(t,2),a=n[0],r=n[1],c=Object(U.useState)(!1),i=Object(q.a)(c,2),o=i[0],s=i[1],b=Object(U.useState)(60),j=Object(q.a)(b,2),l=j[0],u=j[1],d=e.location.state,O=d.code,m=d.name,f=d.isHost,h=Object(U.useContext)(Ee),x=Object($.f)(),p=Object(U.useRef)();Object(U.useEffect)((function(){(function(){var e=Object(Z.a)(Q.a.mark((function e(){var t,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/lobby/"+O);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.players);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[O]),Object(U.useEffect)((function(){var e=!0;h&&!o&&(e&&(h.emit("join",{serverCode:O,name:m}),s(!0)),h.on("playerJoined",(function(t){e&&r(t)})),h.on("hostStartedGame",(function(){e=!1,x.replace({pathname:"/Prompt/"+O,state:Object(X.a)(Object(X.a)({},d),{},{name:m})})})))}),[h,o,m,O,x,d]);return Object(ie.jsxs)(ee,{children:[Object(ie.jsxs)(Le,{children:[Object(ie.jsx)(re,{children:"WELCOME TO THE LOBBY"}),Object(ie.jsxs)(De,{children:["\ud83d\udd25 Join with Code",Object(ie.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),"\ud83d\udd25"]}),Object(ie.jsx)(Oe,{players:a}),Object(ie.jsxs)(ce,{children:["Player Count: ",a&&a.length]}),f&&Object(ie.jsxs)("div",{style:{display:"flex",marginTop:"auto",flexDirection:"column",alignItems:"center"},children:[Object(ie.jsx)("label",{htmlFor:"timer",children:"Set Round Duration"}),Object(ie.jsx)("input",{type:"range",id:"timer",min:"5",max:"120",step:"5",value:l,onChange:function(e){u(e.target.value)}}),Object(ie.jsxs)("div",{children:[l," seconds"]})]}),Object(ie.jsx)(ne,{style:{marginTop:"auto"},disabled:!f,onClick:function(){if(h){var e={lobbyDuration:l};h.emit("start",e)}},children:"Start"})]}),Object(ie.jsx)(Re,{children:Object(ie.jsx)(Se,{ref:p})})]})})),Pe=n.p+"static/media/thinking.89c0f8f4.gif",Be=_.a.progress(w||(w=Object(H.a)(["\n  height: 40px;\n"]))),Fe=Object(_.a)(ae)(y||(y=Object(H.a)(["\n  margin-top: auto;\n"]))),We=_.a.img(S||(S=Object(H.a)(["\n  max-width: 100px;\n"]))),Ve=Object($.h)((function(e){var t=e.location.state,n=t.name,a=Object(U.useContext)(Ee),r=Object(U.useState)(30),c=Object(q.a)(r,2),i=c[0],o=c[1],s=Object(U.useState)(!1),b=Object(q.a)(s,2),j=b[0],l=b[1],u=Object(U.useState)(""),d=Object(q.a)(u,2),O=d[0],m=d[1],f=Object(U.useState)(60),h=Object(q.a)(f,2),x=h[0],p=h[1],g=Object($.f)(),v=Object(U.useState)(!1),w=Object(q.a)(v,2),y=w[0],S=w[1],C=Object($.g)().id;return Object(U.useEffect)((function(){var e=!0;return a&&(a.on("timerUpdateStart",(function(t){if(e){var n=t.second,a=t.maxSecond;o(n),p(a),y||S(!0)}})),a.on("timerDoneStart",(function(){e&&(j||""===O||a.emit("submitPrompt",O),g.replace({pathname:"/DrawingScreen/"+C,state:Object(X.a)(Object(X.a)({},t),{},{name:n})}))}))),function(){e=!1,a.removeAllListeners("timerDoneStart"),a.removeAllListeners("timerUpdateStart")}}),[g,a,j,O]),Object(ie.jsx)(ee,{children:Object(ie.jsxs)(te,{children:[Object(ie.jsx)(re,{children:"Enter a drawing prompt"}),Object(ie.jsx)(We,{src:Pe,alt:"loading..."}),y&&Object(ie.jsx)(Be,{value:i,max:x}),!j&&Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Fe,{placeholder:"Input a suggestion!",onChange:function(e){m(e.target.value)}}),Object(ie.jsx)(ne,{onClick:function(){""!==O&&(l(!0),a.emit("submitPrompt",O))},children:"Submit"})]}),j&&Object(ie.jsx)(ce,{style:{marginTop:"auto"},children:"Thank your for your submission. Waiting for others to submit"})]})})})),Ae=Object(_.a)(te)(C||(C=Object(H.a)(["\n  padding: 20px;\n  @media (max-width: 768px) {\n    padding: 5px;\n  }\n"]))),Ne=Object(_.a)(ne)(k||(k=Object(H.a)(["\n  padding: 0;\n"]))),Ie=Object($.h)((function(e){var t=Object(U.useContext)(Ee),n=Object(U.useState)(""),a=Object(q.a)(n,2),r=a[0],c=a[1],i=Object($.f)(),o=Object(U.useState)(60),s=Object(q.a)(o,2),b=s[0],j=s[1],l=Object(U.useState)(!1),u=Object(q.a)(l,2),d=u[0],O=u[1],m=Object(U.useState)(60),f=Object(q.a)(m,2),h=f[0],x=f[1],p=Object(U.useRef)(),g=Object($.g)().id,v=e.location.state,w=v.name;return Object(U.useEffect)((function(){t&&(t.emit("requestingPrompt"),t.emit("startTimer"))}),[t]),Object(U.useEffect)((function(){var e=!0;return t&&e&&(t.on("timerUpdate",(function(t){var n=t.second,a=t.maxSecond;e&&(j(n),x(a))})),t.on("timerDone",(function(){if(e){if(!d){var n=p.current.toDataURL(),a={name:w,dataURL:n};t.emit("submittingImage",a)}i.replace({pathname:"/Voting/"+g,state:Object(X.a)(Object(X.a)({},v),{},{name:w})})}}))),function(){e=!1,t.removeAllListeners("timerDone"),t.removeAllListeners("timerUpdate")}}),[t,d]),Object(U.useEffect)((function(){var e=!0;return t&&e&&(t.on("sendingPrompt",(function(t){e&&c(t)})),t.on("gameOver",(function(){e&&i.replace("/")}))),function(){e=!1,t.removeAllListeners("sendingPrompt"),t.removeAllListeners("gameOver")}}),[i,t,d]),Object(ie.jsx)(ee,{children:Object(ie.jsxs)(Ae,{children:[Object(ie.jsx)(re,{style:{marginTop:0},children:r||"LOADING PROMPT..."}),Object(ie.jsx)(Be,{value:b,max:h}),!d&&Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Se,{ref:p}),Object(ie.jsx)(Ne,{onClick:function(){O(!0);var e=p.current.toDataURL(),n={name:w,dataURL:e};t.emit("submittingImage",n)},children:"Submit"})]}),d&&Object(ie.jsx)(ce,{children:"Thank you for your submission. Waiting for others."})]})})})),Me=_.a.div(E||(E=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin: 1em;\n"]))),ze=_.a.div(D||(D=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),Ue=_.a.div(L||(L=Object(H.a)(["\n  background: #67e9a3;\n  border-radius: 4px;\n  margin-bottom: 0.4em;\n  padding: 0.5em;\n  border: none;\n  text-align: center;\n"]))),Ge=_.a.button(R||(R=Object(H.a)(["\n  background: #67e9a3;\n  border-radius: 4px;\n  margin-bottom: 0.4em;\n  width: calc(100% - 40px);\n  padding: 0.5em;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n  &:hover {\n    filter: brightness(125%);\n  }\n  &:active {\n    filter: brightness(75%);\n  }\n"]))),Je=_.a.div(T||(T=Object(H.a)(["\n  background-color: #f2f2f2;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  border-radius: 4px;\n  margin-bottom: 1em;\n"]))),Ye=_.a.div(P||(P=Object(H.a)(["\n  margin-top: auto;\n  background-color: white;\n  margin-bottom: 15px;\n  width: calc(100% - 60px);\n  padding: 10px;\n  text-align: center;\n  border-radius: 4px;\n"]))),He=_.a.img(B||(B=Object(H.a)(["\n  margin-top: auto;\n"]))),Xe=function(e){var t=e.src,n=e.name,a=e.showBest,r=e.setShowBest,c=e.showWeird,i=e.setShowWeird,o=e.showCreative,s=e.setShowCreative,b=e.showName,j=e.isBest,l=e.isCreative,u=e.isWeird,d=Object(U.useContext)(Ee);return Object(ie.jsxs)(Me,{children:[Object(ie.jsxs)(Je,{children:[Object(ie.jsx)(He,{alt:"test",src:t}),Object(ie.jsxs)("div",{style:{margin:"0.5em"},children:[j&&Object(ie.jsx)(Ue,{children:"\ud83e\udd47 Best Drawing \ud83e\udd47"}),l&&Object(ie.jsx)(Ue,{style:{backgroundColor:"#7CE3F1"},children:"\ud83c\udfa8 Most Creative \ud83c\udfa8"}),u&&Object(ie.jsx)(Ue,{style:{backgroundColor:"#FD7070"},children:"\ud83e\udd14 ??? \ud83e\udd14"})]}),b&&Object(ie.jsxs)(Ye,{children:["Drawing by ",n]})]}),Object(ie.jsxs)(ze,{children:[a&&Object(ie.jsx)(Ge,{onClick:function(){r(!1),d.emit("voteForPlayer",{name:n,category:"best"})},children:"\ud83e\udd47 Best Drawing \ud83e\udd47"}),o&&Object(ie.jsx)(Ge,{style:{backgroundColor:"#7CE3F1"},onClick:function(){s(!1),d.emit("voteForPlayer",{name:n,category:"creative"})},children:"\ud83c\udfa8 Most Creative \ud83c\udfa8"}),c&&Object(ie.jsx)(Ge,{style:{backgroundColor:"#FD7070"},onClick:function(){i(!1),d.emit("voteForPlayer",{name:n,category:"weird"})},children:"\ud83e\udd14 ??? \ud83e\udd14"})]})]})},qe=_.a.div(F||(F=Object(H.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 1em;\n"]))),Ke=Object(_.a)(te)(W||(W=Object(H.a)(["\n  height: auto;\n  margin: 1em;\n"]))),Qe=Object($.h)((function(e){var t=Object(U.useContext)(Ee),n=Object(U.useState)([]),a=Object(q.a)(n,2),r=a[0],c=a[1],i=Object(U.useState)(!1),o=Object(q.a)(i,2),s=o[0],b=o[1],j=Object(U.useState)(!0),l=Object(q.a)(j,2),u=l[0],d=l[1],O=Object(U.useState)(!0),m=Object(q.a)(O,2),f=m[0],h=m[1],x=Object(U.useState)(!0),p=Object(q.a)(x,2),g=p[0],v=p[1],w=Object($.f)(),y=Object($.g)().id,S=e.location.state,C=S.name;return Object(U.useEffect)((function(){var e=!0;return t&&!s&&e&&(t.emit("requestingImages"),e&&b(!0),t.on("sendingImages",(function(t){e&&c(t)})),t.on("lastVoteDraw",(function(){e&&w.replace({pathname:"/RoundResults/"+y,state:Object(X.a)(Object(X.a)({},S),{},{name:C,isLast:!1})})})),t.on("lastVoteEnd",(function(){e&&w.replace({pathname:"/RoundResults/"+y,state:Object(X.a)(Object(X.a)({},S),{},{name:C,isLast:!0})})}))),function(){e=!1,t.removeAllListeners("sendingImages"),t.removeAllListeners("lastVoteDraw"),t.removeAllListeners("lastVoteEnd")}}),[]),Object(ie.jsx)(ee,{children:Object(ie.jsxs)(Ke,{children:[Object(ie.jsx)(re,{children:"Vote!"}),Object(ie.jsx)(qe,{children:r.map((function(e,t){return Object(ie.jsx)(Xe,{src:e.dataURL,name:e.name,showBest:u,setShowBest:d,showCreative:f,setShowCreative:h,showWeird:g,setShowWeird:v,showName:!1},t)}))})]})})})),Ze=_.a.div(V||(V=Object(H.a)(["\n  flex: 1;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  min-width: 250px;\n"]))),$e=_.a.ul(A||(A=Object(H.a)(["\n  margin: 0;\n  padding-inline-start: 0;\n"]))),_e=_.a.li(N||(N=Object(H.a)(["\n  list-style-type: none;\n"]))),et=_.a.div(I||(I=Object(H.a)(["\n  background: #67e9a3;\n  border-radius: 4px;\n  margin-bottom: 0.4em;\n  width: calc(100% - 40px);\n  padding: 0.5em;\n  border: none;\n"]))),tt=function(e){var t=e.title,n=e.data,a=e.color;return Object(ie.jsxs)(Ze,{children:[Object(ie.jsx)(et,{style:{backgroundColor:a},children:t}),Object(ie.jsx)($e,{children:n.map((function(e,t){return Object(ie.jsxs)(_e,{children:[0===t&&" \ud83e\udd47 ",e.name," ",Object(ie.jsxs)("span",{style:{color:"red"},children:[" (",e.value," votes)"]})]},t)}))})]})};function nt(e,t){return e.value>t.value?-1:1}var at,rt,ct,it,ot=Object(_.a)(te)(M||(M=Object(H.a)(["\n  flex-direction: row;\n  align-items: flex-start;\n  overflow-y: scroll;\n"]))),st=_.a.div(z||(z=Object(H.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin: 10px;\n  flex: 1;\n  font-weight: bold;\n  font-size: 1.5em;\n  text-align: center;\n"]))),bt=function(){var e=Object(U.useState)([]),t=Object(q.a)(e,2),n=t[0],a=t[1],r=Object(U.useState)([]),c=Object(q.a)(r,2),i=c[0],o=c[1],s=Object(U.useState)([]),b=Object(q.a)(s,2),j=b[0],l=b[1],u=Object(U.useState)([]),d=Object(q.a)(u,2),O=d[0],m=d[1],f=Object(U.useContext)(Ee);return Object(U.useEffect)((function(){var e=!0;return f&&e&&(f.emit("requestingVotes"),f.on("sendingVotes",(function(t){e&&m(t)}))),function(){e=!1}}),[f]),Object(U.useEffect)((function(){var e=O.map((function(e){return{name:e.name,value:e.votes.best}})),t=O.map((function(e){return{name:e.name,value:e.votes.creative}})),n=O.map((function(e){return{name:e.name,value:e.votes.weird}}));e.sort(nt),a(e),t.sort(nt),o(t),n.sort(nt),l(n)}),[O]),Object(ie.jsx)(ee,{children:Object(ie.jsx)(ot,{children:Object(ie.jsxs)(st,{children:[Object(ie.jsx)(tt,{title:"Best Drawing",color:"#67e9a3",data:n}),Object(ie.jsx)(tt,{title:"Most Creative",color:"#7CE3F1",data:i}),Object(ie.jsx)(tt,{title:"???? Drawing",color:"#FD7070",data:j})]})})})};function jt(e,t){return e.value>t.value?-1:1}function lt(e,t){for(var n=e[0].value,a=0;a<e.length;a++)e[a].value===n?e[a][t]=!0:e[a][t]=!1}var ut=_.a.div(at||(at=Object(H.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 1em;\n"]))),dt=_.a.div(rt||(rt=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  padding: 1em;\n  width: 100%;\n"]))),Ot=Object(_.a)(ne)(ct||(ct=Object(H.a)(["\n  height: 50px;\n  margin: 0;\n  padding: 0;\n  margin: 0.5em;\n"]))),mt=Object(_.a)(te)(it||(it=Object(H.a)(["\n  height: auto;\n"]))),ft=Object($.h)((function(e){var t=Object(U.useState)([]),n=Object(q.a)(t,2),a=n[0],r=n[1],c=Object(U.useState)([]),i=Object(q.a)(c,2),o=i[0],s=i[1],b=Object(U.useState)("Next Round"),j=Object(q.a)(b,2),l=j[0],u=j[1],d=Object($.f)(),O=Object($.g)().id,m=Object(U.useContext)(Ee),f=e.location.state,h=f.isHost,x=f.name,p=f.isLast;return Object(U.useEffect)((function(){p&&u("Go To Final Results")}),[p]),Object(U.useEffect)((function(){var e=!0;return m&&e&&(m.emit("requestingVotes"),m.on("sendingVotes",(function(t){e&&s(t)})),m.on("hostStartedNextRound",(function(){d.replace({pathname:"/DrawingScreen/"+O,state:Object(X.a)(Object(X.a)({},f),{},{name:x})})})),m.on("hostEndedGame",(function(){d.replace({pathname:"/Results/"+O,state:Object(X.a)(Object(X.a)({},f),{},{name:x})})}))),function(){e=!1}}),[m]),Object(U.useEffect)((function(){if(0!==o.length){var e=o.map((function(e){return{name:e.name,value:e.roundVotes.best,img:e.currentDrawing}})),t=o.map((function(e){return{name:e.name,value:e.roundVotes.creative}})),n=o.map((function(e){return{name:e.name,value:e.roundVotes.weird}}));e.sort(jt),t.sort(jt),n.sort(jt),lt(e,"isBest"),lt(t,"isCreative"),lt(n,"isWeird");var a=function(e,t,n){for(var a=[],r=0;r<e.length;r++){var c=e[r].name;a[r]={name:c,isBest:e[r].isBest,img:e[r].img};for(var i=0;i<t.length;i++)if(t[i].name===c){a[r].isCreative=t[i].isCreative;break}for(var o=0;o<n.length;o++)if(n[o].name===c){a[r].isWeird=n[o].isWeird;break}}return a}(e,t,n);r(a)}}),[o]),Object(ie.jsx)(ee,{children:Object(ie.jsxs)(mt,{children:[Object(ie.jsxs)(dt,{children:[Object(ie.jsx)(re,{style:{margin:0},children:"Round Results"}),h&&Object(ie.jsx)(Ot,{onClick:function(){p?m.emit("hostEndingGame"):m.emit("hostStartingNextRound")},children:l})]}),Object(ie.jsx)(ut,{children:a.map((function(e,t){return Object(ie.jsx)(Xe,{src:e.img,name:e.name,setShowBest:function(){},showBest:!1,setShowCreative:function(){},showCreative:!1,setShowWeird:function(){},showWeird:!1,showName:!0,isBest:e.isBest,isCreative:e.isCreative,isWeird:e.isWeird},t)}))})]})})})),ht=n(22);var xt=function(){return Object(ie.jsx)(Ee.Provider,{value:ke,children:Object(ie.jsx)(ht.a,{children:Object(ie.jsxs)($.c,{children:[Object(ie.jsx)($.a,{path:"/RoundResults/:id",children:Object(ie.jsx)(ft,{})}),Object(ie.jsx)($.a,{path:"/Results/:id",children:Object(ie.jsx)(bt,{})}),Object(ie.jsx)($.a,{path:"/Voting/:id",children:Object(ie.jsx)(Qe,{})}),Object(ie.jsx)($.a,{path:"/Prompt/:id",children:Object(ie.jsx)(Ve,{})}),Object(ie.jsx)($.a,{path:"/Lobby/:id",children:Object(ie.jsx)(Te,{})}),Object(ie.jsx)($.a,{path:"/DrawingScreen/:id",children:Object(ie.jsx)(Ie,{})}),Object(ie.jsx)($.a,{path:"/",children:Object(ie.jsx)(le,{})})]})})})},pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};Y.a.render(Object(ie.jsx)(G.a.StrictMode,{children:Object(ie.jsx)(xt,{})}),document.getElementById("root")),pt()},63:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.85d38186.chunk.js.map