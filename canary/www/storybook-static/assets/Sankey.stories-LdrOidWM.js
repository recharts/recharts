import{q as Se,r as h,t as Ee,n as xe,p as Le,e as y}from"./iframe-DGrXlEkx.js";import{d as we,m as Ne}from"./ChartProps-Cvo8vJEE.js";import{m as Ie}from"./maxBy-CVO0k9Mq.js";import{r as Me}from"./iteratee-BfALflAJ.js";import{Z as Re,_ as Te,e as De,f as $e,i as Q,S as Pe,q as w,u as me,R as A}from"./arrayEqualityCheck-DicChNuU.js";import{L as P}from"./Layer-D3LXHH9n.js";import{R as We}from"./Rectangle-B_ChE2a8.js";import{R as je,F as Xe,T as Ve}from"./RechartsWrapper-BsZxNtsW.js";import{t as he,q as fe,p as ge}from"./hooks-BJzdHLQJ.js";import{R as Oe,S as Ye}from"./RegisterGraphicalItemId-kRuXUne3.js";import{S as qe}from"./chartDataContext-xgZ2IC4i.js";import{r as Ae,b as B,a as ye}from"./resolveDefaultProps-CbjUZWO4.js";import{T as Be}from"./Tooltip-Cyj47X2a.js";import{R as F}from"./RechartsHookInspector-Br39JKkJ.js";var O={},ee;function Fe(){return ee||(ee=1,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Me();function i(a,n){if(!a||!a.length)return 0;n!=null&&(n=t.iteratee(n));let s;for(let o=0;o<a.length;o++){const c=n?n(a[o]):a[o];c!==void 0&&(s===void 0?s=c:s+=c)}return s}e.sumBy=i}(O)),O}var Y,te;function _e(){return te||(te=1,Y=Fe().sumBy),Y}var Ke=_e();const ze=Se(Ke),Ge=(e,t)=>{const i=+e,a=t-i;return n=>i+a*n},W=e=>e.y+e.dy/2,R=e=>e&&e.value||0,D=(e,t)=>t.reduce((i,a)=>i+R(e[a]),0),He=(e,t,i)=>i.reduce((a,n)=>{const s=t[n];if(s==null)return a;const o=e[s.source];return o==null?a:a+W(o)*R(t[n])},0),Ue=(e,t,i)=>i.reduce((a,n)=>{const s=t[n];if(s==null)return a;const o=e[s.target];return o==null?a:a+W(o)*R(t[n])},0),Ze=(e,t)=>e.y-t.y,Je=(e,t)=>{const i=[],a=[],n=[],s=[];for(let o=0,c=e.length;o<c;o++){const r=e[o];(r==null?void 0:r.source)===t&&(n.push(r.target),s.push(o)),(r==null?void 0:r.target)===t&&(i.push(r.source),a.push(o))}return{sourceNodes:i,sourceLinks:a,targetLinks:s,targetNodes:n}},pe=(e,t)=>{const{targetNodes:i}=t;for(let a=0,n=i.length;a<n;a++){const s=i[a];if(s==null)continue;const o=e[s];o&&(o.depth=Math.max(t.depth+1,o.depth),pe(e,o))}},Qe=({nodes:e,links:t},i,a,n)=>{var c;const s=e.map((r,l)=>{const u=Je(t,l);return{...r,...u,value:Math.max(D(t,u.sourceLinks),D(t,u.targetLinks)),depth:0}});for(let r=0,l=s.length;r<l;r++){const u=s[r];u!=null&&!u.sourceNodes.length&&pe(s,u)}const o=((c=Ie(s,r=>r.depth))==null?void 0:c.depth)??0;if(o>=1){const r=(i-a)/o;for(let l=0,u=s.length;l<u;l++){const d=s[l];d!=null&&(d.targetNodes.length||n==="justify"&&(d.depth=o),d.x=d.depth*r,d.dx=a)}}return{tree:s,maxDepth:o}},et=e=>{var i;const t=[];for(let a=0,n=e.length;a<n;a++){const s=e[a];s!=null&&(t[s.depth]||(t[s.depth]=[]),(i=t[s.depth])==null||i.push(s))}return t},tt=(e,t,i,a,n)=>{const s=Math.min(...e.map(o=>(t-(o.length-1)*i)/ze(o,R)));for(let o=0,c=e.length;o<c;o++){const r=e[o];if(r!=null)if(n==="top"){let l=0;for(let u=0,d=r.length;u<d;u++){const m=r[u];m!=null&&(m.dy=m.value*s,m.y=l,l+=m.dy+i)}}else for(let l=0,u=r.length;l<u;l++){const d=r[l];d!=null&&(d.y=l,d.dy=d.value*s)}}return a.map(o=>({...o,dy:R(o)*s}))},q=(e,t,i,a=!0)=>{for(let n=0,s=e.length;n<s;n++){const o=e[n];if(o==null)continue;const c=o.length;a&&o.sort(Ze);let r=0;for(let l=0;l<c;l++){const u=o[l];if(u==null)continue;const d=r-u.y;d>0&&(u.y+=d),r=u.y+u.dy+i}r=t+i;for(let l=c-1;l>=0;l--){const u=o[l];if(u==null)continue;const d=u.y+u.dy+i-r;if(d>0)u.y-=d,r=u.y;else break}}},nt=(e,t,i,a)=>{for(let n=0,s=t.length;n<s;n++){const o=t[n];if(o!=null)for(let c=0,r=o.length;c<r;c++){const l=o[c];if(l!=null&&l.sourceLinks.length){const u=D(i,l.sourceLinks),m=He(e,i,l.sourceLinks)/u;l.y+=(m-W(l))*a}}}},ot=(e,t,i,a)=>{for(let n=t.length-1;n>=0;n--){const s=t[n];if(s!=null)for(let o=0,c=s.length;o<c;o++){const r=s[o];if(r!=null&&r.targetLinks.length){const l=D(i,r.targetLinks),d=Ue(e,i,r.targetLinks)/l;r.y+=(d-W(r))*a}}}},at=(e,t)=>{for(let i=0,a=e.length;i<a;i++){const n=e[i];if(n==null)continue;let s=0,o=0;n.targetLinks.sort((c,r)=>{var v,p,k,C;const l=(v=t[c])==null?void 0:v.target,u=(p=t[r])==null?void 0:p.target;if(l==null||u==null)return 0;const d=(k=e[l])==null?void 0:k.y,m=(C=e[u])==null?void 0:C.y;return d==null||m==null?0:d-m}),n.sourceLinks.sort((c,r)=>{var v,p,k,C;const l=(v=t[c])==null?void 0:v.source,u=(p=t[r])==null?void 0:p.source;if(l==null||u==null)return 0;const d=(k=e[l])==null?void 0:k.y,m=(C=e[u])==null?void 0:C.y;return d==null||m==null?0:d-m});for(let c=0,r=n.targetLinks.length;c<r;c++){const l=n.targetLinks[c];if(l==null)continue;const u=t[l];u&&(u.sy=s,s+=u.dy)}for(let c=0,r=n.sourceLinks.length;c<r;c++){const l=n.sourceLinks[c];if(l==null)continue;const u=t[l];u&&(u.ty=o,o+=u.dy)}}},rt=({data:e,width:t,height:i,iterations:a,nodeWidth:n,nodePadding:s,sort:o,verticalAlign:c,align:r})=>{const{links:l}=e,{tree:u}=Qe(e,t,n,r),d=et(u),m=tt(d,i,s,l,c);if(q(d,i,s,o),c==="justify"){let p=1;for(let k=1;k<=a;k++)ot(u,d,m,p*=.99),q(d,i,s,o),nt(u,d,m,p),q(d,i,s,o)}return at(u,m),{nodes:u,links:m}},st=e=>({x:+e.x+ +e.width/2,y:+e.y+ +e.height/2}),it=e=>"sourceX"in e?{x:(e.sourceX+e.targetX)/2,y:(e.sourceY+e.targetY)/2}:void 0,lt=(e,t,i)=>{const{payload:a}=e;if(t==="node")return{payload:a,name:w(a,i,""),value:w(a,"value")};if("source"in a&&a.source&&a.target){const n=w(a.source,i,""),s=w(a.target,i,"");return{payload:a,name:`${n} - ${s}`,value:w(a,"value")}}},ut=(e,t,i,a)=>{if(t==null||typeof t!="string"||i==null||typeof i!="object")return;const n=t.split("-"),[s,o]=n,c=Ee(i,`${s}s[${o}]`);if(c)return lt(c,s,a)},ct={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:ut,eventEmitter:void 0},dt=h.memo(({dataKey:e,nameKey:t,stroke:i,strokeWidth:a,fill:n,name:s,data:o,id:c})=>{const r={dataDefinedOnItem:o,getPosition:xe,settings:{stroke:i,strokeWidth:a,fill:n,dataKey:e,name:s,nameKey:t,hide:!1,type:void 0,color:n,unit:"",graphicalItemId:c}};return h.createElement(Ye,{tooltipEntrySettings:r})});function mt(e,t){if(h.isValidElement(e))return h.cloneElement(e,t);if(typeof e=="function")return e(t);const{sourceX:i,sourceY:a,sourceControlX:n,targetX:s,targetY:o,targetControlX:c,linkWidth:r,...l}=t;return h.createElement("path",{className:"recharts-sankey-link",d:`
          M${i},${a}
          C${n},${a} ${c},${o} ${s},${o}
        `,fill:"none",stroke:"#333",strokeWidth:r,strokeOpacity:"0.2",...B(l)})}const ht=({link:e,nodes:t,left:i,top:a,i:n,linkContent:s,linkCurvature:o})=>{const{sy:c,ty:r,dy:l}=e,u=t[e.source],d=t[e.target];if(u==null||d==null)return;const m=u.x+u.dx+i,v=d.x+i,p=Ge(m,v),k=p(o),C=p(1-o),T=u.y+c+l/2+a,S=d.y+r+l/2+a;return{sourceX:m,targetX:v,sourceY:T,targetY:S,sourceControlX:k,targetControlX:C,sourceRelativeY:c,targetRelativeY:r,linkWidth:l,index:n,payload:{...e,source:u,target:d},...ye(s)}};function ft({graphicalItemId:e,props:t,i,linkContent:a,onMouseEnter:n,onMouseLeave:s,onClick:o,dataKey:c}){const r=it(t),l=`link-${i}`,u=me(),d={onMouseEnter:m=>{u(ge({activeIndex:l,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{u(fe()),s(t,m)},onClick:m=>{u(he({activeIndex:l,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),o(t,m)}};return h.createElement(P,{...d},mt(a,t))}function gt({graphicalItemId:e,modifiedLinks:t,links:i,linkContent:a,onMouseEnter:n,onMouseLeave:s,onClick:o,dataKey:c}){return h.createElement(P,{className:"recharts-sankey-links",key:"recharts-sankey-links"},i.map((r,l)=>{const u=t[l];return u==null?null:h.createElement(ft,{graphicalItemId:e,key:`link-${r.source}-${r.target}-${r.value}`,props:u,linkContent:a,i:l,onMouseEnter:n,onMouseLeave:s,onClick:o,dataKey:c})}))}function yt(e,t){return h.isValidElement(e)?h.cloneElement(e,t):typeof e=="function"?e(t):h.createElement(We,{className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8",...B(t)})}const pt=({node:e,nodeContent:t,top:i,left:a,i:n})=>{const{x:s,y:o,dx:c,dy:r}=e;return{...ye(t),x:s+a,y:o+i,width:c,height:r,index:n,payload:e}};function kt({graphicalItemId:e,props:t,nodeContent:i,i:a,onMouseEnter:n,onMouseLeave:s,onClick:o,dataKey:c}){const r=me(),l=st(t),u=`node-${a}`,d={onMouseEnter:m=>{r(ge({activeIndex:u,activeDataKey:c,activeCoordinate:l,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{r(fe()),s(t,m)},onClick:m=>{r(he({activeIndex:u,activeDataKey:c,activeCoordinate:l,activeGraphicalItemId:e})),o(t,m)}};return h.createElement(P,{...d},yt(i,t))}function vt({graphicalItemId:e,modifiedNodes:t,nodeContent:i,onMouseEnter:a,onMouseLeave:n,onClick:s,dataKey:o}){return h.createElement(P,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},t.map((c,r)=>h.createElement(kt,{graphicalItemId:e,key:`node-${c.index}-${c.x}-${c.y}`,props:c,nodeContent:i,i:r,onMouseEnter:a,onMouseLeave:n,onClick:s,dataKey:o})))}const bt={align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify"};function Ct(e){const{className:t,style:i,children:a,id:n,...s}=e,{link:o,dataKey:c,node:r,onMouseEnter:l,onMouseLeave:u,onClick:d,data:m,iterations:v,nodeWidth:p,nodePadding:k,sort:C,linkCurvature:T,margin:S,verticalAlign:j,align:_}=e,ke=B(s),x=De(),L=$e(),{links:ve,modifiedLinks:K,modifiedNodes:z}=h.useMemo(()=>{if(!m||!x||!L||x<=0||L<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};const f=x-(S.left??0)-(S.right??0),g=L-(S.top??0)-(S.bottom??0),b=rt({data:m,width:f,height:g,iterations:v,nodeWidth:p,nodePadding:k,sort:C,verticalAlign:j,align:_}),Z=S.top||0,J=S.left||0,be=b.links.map((X,V)=>ht({link:X,nodes:b.nodes,i:V,top:Z,left:J,linkContent:o,linkCurvature:T})).filter(Le),Ce=b.nodes.map((X,V)=>pt({node:X,nodeContent:r,i:V,top:Z,left:J}));return{nodes:b.nodes,links:b.links,modifiedLinks:be,modifiedNodes:Ce}},[m,x,L,S,v,p,k,C,o,r,T,_,j]),G=h.useCallback((f,g,b)=>{l&&l(f,g,b)},[l]),H=h.useCallback((f,g,b)=>{u&&u(f,g,b)},[u]),U=h.useCallback((f,g,b)=>{d&&d(f,g,b)},[d]);return!Q(x)||!Q(L)||!m||!m.links||!m.nodes?null:h.createElement(h.Fragment,null,h.createElement(qe,{computedData:{links:K,nodes:z}}),h.createElement(Pe,{...ke,width:x,height:L},a,h.createElement(gt,{graphicalItemId:n,links:ve,modifiedLinks:K,linkContent:o,dataKey:c,onMouseEnter:(f,g)=>G(f,"link",g),onMouseLeave:(f,g)=>H(f,"link",g),onClick:(f,g)=>U(f,"link",g)}),h.createElement(vt,{graphicalItemId:n,modifiedNodes:z,nodeContent:r,dataKey:c,onMouseEnter:(f,g)=>G(f,"node",g),onMouseLeave:(f,g)=>H(f,"node",g),onClick:(f,g)=>U(f,"node",g)})))}function E(e){const t=Ae(e,bt),{width:i,height:a,style:n,className:s,id:o}=t,[c,r]=h.useState(null);return h.createElement(je,{preloadedState:{options:ct},reduxStoreName:s??"Sankey"},h.createElement(Re,{width:i,height:a}),h.createElement(Te,{margin:t.margin}),h.createElement(Xe,{className:s,style:n,width:i,height:a,responsive:!1,ref:l=>{l&&!c&&r(l)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},h.createElement(Ve.Provider,{value:c},h.createElement(Oe,{id:o,type:"sankey"},l=>h.createElement(h.Fragment,null,h.createElement(dt,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:l}),h.createElement(Ct,{...t,id:l}))))))}E.displayName="Sankey";try{E.displayName="Sankey",E.__docgenInfo={description:`Flow diagram in which the width of the arrows is proportional to the flow rate.
It is typically used to visualize energy or material or cost transfers between processes.`,displayName:"Sankey",props:{nameKey:{defaultValue:null,description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.\n@defaultValue name",name:"nameKey",required:!1,type:{name:"DataKey<any>"}},dataKey:{defaultValue:{value:"'value'"},description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,name:"dataKey",required:!1,type:{name:"DataKey<any>"}},data:{defaultValue:null,description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.
@example nodes: [
  { name: 'Visit' },
  { name: 'Direct-Favourite' },
  { name: 'Page-Click' },
  { name: 'Detail-Favourite' },
  { name: 'Lost' },
],
links: [
  { source: 0, target: 1, value: 3728.3 },
  { source: 0, target: 2, value: 354170 },
  { source: 2, target: 3, value: 62429 },
  { source: 2, target: 4, value: 291741 },
],`,name:"data",required:!0,type:{name:"SankeyData"}},nodePadding:{defaultValue:{value:"10"},description:"The padding between the nodes",name:"nodePadding",required:!1,type:{name:"number"}},nodeWidth:{defaultValue:{value:"10"},description:"The width of node",name:"nodeWidth",required:!1,type:{name:"number"}},linkCurvature:{defaultValue:{value:"0.5"},description:"The curvature of width",name:"linkCurvature",required:!1,type:{name:"number"}},iterations:{defaultValue:{value:"32"},description:"The number of the iterations between the links",name:"iterations",required:!1,type:{name:"number"}},node:{defaultValue:null,description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.
@example <Sankey node={MyCustomComponent} />
@example <Sankey node={{stroke: #77c878, strokeWidth: 2}} />`,name:"node",required:!1,type:{name:"SankeyNodeOptions"}},link:{defaultValue:null,description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.
@example <Sankey link={MyCustomComponent} />
@example <Sankey link={{ fill: #77c878 }} />`,name:"link",required:!1,type:{name:"SankeyLinkOptions"}},margin:{defaultValue:null,description:`Empty space around the container.
@defaultValue {"top":5,"right":5,"bottom":5,"left":5}`,name:"margin",required:!1,type:{name:"Partial<Margin>"}},sort:{defaultValue:{value:"true"},description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",name:"sort",required:!1,type:{name:"boolean"}},verticalAlign:{defaultValue:{value:"'justify'"},description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"justify"'}]}},align:{defaultValue:{value:"'justify'"},description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"justify"'}]}}}}}catch{}const $={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:291741},{source:2,target:4,value:62429}]},ne={nodes:[{name:"Income"},{name:"Budget"},{name:"Investment"},{name:"Real Estate"},{name:"Crypto"},{name:"Stocks & Funds"},{name:"Saving"},{name:"Scpi"},{name:"BTC"},{name:"ETH"},{name:"SOL"},{name:"Housing"},{name:"Food"},{name:"Rent"},{name:"Utility"},{name:"Mortgage"},{name:"Groceries"},{name:"Delivery"},{name:"Restaurant"}],links:[{source:0,target:1,value:8500},{source:1,target:2,value:2300},{source:1,target:3,value:400},{source:1,target:4,value:1250},{source:2,target:5,value:1800},{source:2,target:6,value:500},{source:3,target:7,value:400},{source:4,target:8,value:500},{source:4,target:9,value:500},{source:4,target:10,value:250},{source:1,target:11,value:3384},{source:1,target:12,value:800},{source:11,target:13,value:1234},{source:11,target:14,value:150},{source:11,target:15,value:2e3},{source:12,target:16,value:450},{source:12,target:17,value:200},{source:12,target:18,value:150}]},St={iterations:{table:{defaultValue:{summary:"32"}}},link:{description:"TODO"},linkCurvature:{table:{defaultValue:{summary:"0.5"}}},nameKey:{table:{defaultValue:{summary:"name"}}},node:{description:"TODO"},nodePadding:{table:{defaultValue:{summary:"10"}}},nodeWidth:{table:{defaultValue:{summary:"10"}}},dataKey:{description:`The key or getter of a group of data.
      It could be an accessor function such as (row)=>value`,table:{type:{summary:"string | number | function"},defaultValue:{summary:"value"},category:"General"}},margin:Ne,data:we,sort:{description:"Whether to sort the data or not",table:{defaultValue:{summary:!0}}},align:{table:{defaultValue:{summary:"justify"}}}},Et={argTypes:St,component:E},N={render:e=>y.createElement(A,{width:"100%",height:400},y.createElement(E,{data:$,...e},y.createElement(Be,null),y.createElement(F,null))),args:{data:$}},I={render:e=>y.createElement(A,{width:"100%",height:400},y.createElement(E,{data:$,...e},y.createElement(F,null))),args:{data:$,nodeWidth:10,nodePadding:60,height:500,width:960}},M={render:e=>{const t=["#3C898E","#486DF0","#6F50E5"],i=n=>y.createElement("rect",{x:n.x+4,y:n.y-2,width:n.width-8,height:n.height+4,fill:t[n.payload.depth%t.length],rx:2.5}),a=n=>y.createElement("g",null,y.createElement("path",{d:`
  M${n.sourceX},${n.sourceY}
  C${n.sourceControlX},${n.sourceY} ${n.targetControlX},${n.targetY} ${n.targetX},${n.targetY}`,fill:"none",stroke:t[n.payload.source.depth%t.length],strokeOpacity:.4,strokeWidth:n.linkWidth,strokeLinecap:"butt"}),y.createElement("foreignObject",{x:n.sourceX,y:n.targetY-n.linkWidth/2,width:Math.max(n.targetX,n.sourceX)-Math.min(n.targetX,n.sourceX),height:n.linkWidth,style:{overflow:"visible"}},y.createElement("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",height:"100%",overflow:"visible",padding:"0.5em",gap:8}},y.createElement("div",{style:{fontSize:10,fontFamily:"sans-serif",textAlign:"center",backgroundColor:"#f1f5fe80",padding:"0.25em 0.5em",borderRadius:4,position:"relative",zIndex:1}},n.payload.target.name?`${n.payload.target.name}: `:"",n.payload.value," €"))));return y.createElement(A,{width:"100%",height:400},y.createElement(E,{data:ne,node:i,link:a,...e},y.createElement(F,null)))},args:{data:ne,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}};var oe,ae,re;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <Tooltip />
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    data: nodeLinkData
  }
}`,...(re=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ie,le;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960
  }
}`,...(le=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ue,ce,de;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: (args: Args) => {
    const colors = ['#3C898E', '#486DF0', '#6F50E5'];
    type CustomNodePayload = {
      name: string;
      sourceNodes: number[];
      sourceLinks: number[];
      targetLinks: number[];
      targetNodes: number[];
      value: number;
      depth: number;
      x: number;
      dx: number;
      y: number;
      dy: number;
    };
    const CustomNode = (props: NodeProps): React.ReactElement => {
      return <rect x={props.x + 4} y={props.y - 2} width={props.width - 8} height={props.height + 4} fill={colors[props.payload.depth % colors.length]} rx={2.5} />;
    };
    type CustomLinkPayload = {
      source: CustomNodePayload;
      target: CustomNodePayload;
      value: number;
      dy: number;
      sy: number;
      ty: number;
    };
    const CustomLink = (props: {
      sourceX: number;
      targetX: number;
      sourceY: number;
      targetY: number;
      sourceControlX: number;
      targetControlX: number;
      sourceRelativeY: number;
      targetRelativeY: number;
      linkWidth: number;
      index: number;
      payload: CustomLinkPayload;
    }) => {
      return <g>
          <path d={\`
  M\${props.sourceX},\${props.sourceY}
  C\${props.sourceControlX},\${props.sourceY} \${props.targetControlX},\${props.targetY} \${props.targetX},\${props.targetY}\`} fill="none" stroke={colors[props.payload.source.depth % colors.length]} strokeOpacity={0.4} strokeWidth={props.linkWidth} strokeLinecap="butt" />
          <foreignObject x={props.sourceX} y={props.targetY - props.linkWidth / 2} width={Math.max(props.targetX, props.sourceX) - Math.min(props.targetX, props.sourceX)} height={props.linkWidth} style={{
          overflow: 'visible'
        }}>
            <div style={{
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%',
            overflow: 'visible',
            padding: '0.5em',
            gap: 8
          }}>
              <div style={{
              fontSize: 10,
              fontFamily: 'sans-serif',
              textAlign: 'center',
              backgroundColor: '#f1f5fe80',
              padding: '0.25em 0.5em',
              borderRadius: 4,
              position: 'relative',
              zIndex: 1
            }}>
                {props.payload.target.name ? \`\${props.payload.target.name}: \` : ''}
                {props.payload.value}
                &nbsp;€
              </div>
            </div>
          </foreignObject>
        </g>;
    };
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={complexNodeLinkData} node={CustomNode} link={CustomLink} {...args}>
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    data: complexNodeLinkData,
    nodeWidth: 16,
    nodePadding: 14,
    height: 500,
    width: 960,
    sort: false,
    margin: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20
    }
  }
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const xt=["Simple","Customized","CustomNodeAndLink"],Ot=Object.freeze(Object.defineProperty({__proto__:null,CustomNodeAndLink:M,Customized:I,Simple:N,__namedExportsOrder:xt,default:Et},Symbol.toStringTag,{value:"Module"}));export{Ot as S,N as a};
