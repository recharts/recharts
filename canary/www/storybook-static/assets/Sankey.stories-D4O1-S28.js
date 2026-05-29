import{g as Ce,r as h,e as v}from"./iframe-Dbih6tM_.js";import{g as O}from"./utils-ePvtT4un.js";import{m as we}from"./maxBy-DolVWkXZ.js";import{e as xe}from"./iteratee-DEDrKpvz.js";import{g as Le}from"./get-DVIR8H8G.js";import{i as ee,S as Ne}from"./isWellBehavedNumber-C76PNx6x.js";import{L as R}from"./Layer-B42S8g5T.js";import{R as Ve}from"./Rectangle-DeVdQqm5.js";import{f as Te,e as Me,af as Ie,ad as je,F as N,aa as he,g as Y}from"./zIndexSlice-F7HsGAhb.js";import{R as Pe,b as De,a as Re,T as $e,s as Ae,a2 as pe,t as ye,a3 as fe}from"./RechartsWrapper-CzkBSRjy.js";import{R as We,S as Ge}from"./RegisterGraphicalItemId-CoMv7TZ7.js";import{S as qe}from"./chartDataContext-CumcEPMe.js";import{r as Xe,n as Fe,t as z,d as Oe,u as ge}from"./resolveDefaultProps-C6XhIduD.js";import{T as Ye}from"./Tooltip-91lkN_Ou.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u9L_0Kl5.js";import"./useAnimationId-CWLhhp_H.js";import"./PolarUtils-CTnnDHZv.js";import"./index-yjWx6Bgh.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./useElementOffset-BXd0grxf.js";import"./uniqBy-ByRFrmC2.js";import"./types-Bhc7gOzP.js";import"./Curve-CbpaSJeH.js";import"./step-EAtlMAAS.js";import"./path-DyVhHtw_.js";import"./Cross-BehVYR4O.js";import"./Sector-C4ZURWaA.js";import"./ZIndexLayer-DaMCCGdS.js";var q={},te;function ze(){if(te)return q;te=1;const e=xe();function t(s,o){if(!s||!s.length)return 0;o!=null&&(o=e.iteratee(o));let n;for(let i=0;i<s.length;i++){const a=o?o(s[i]):s[i];a!==void 0&&(n===void 0?n=a:n+=a)}return n}return q.sumBy=t,q}var X,ne;function Be(){return ne||(ne=1,X=ze().sumBy),X}var Ke=Be();const _e=Ce(Ke),Ue=(e,t)=>{const s=+e,o=t-s;return n=>s+o*n},L=e=>e.y+e.dy/2,V=e=>e&&e.value||0,P=(e,t)=>t.reduce((s,o)=>s+V(e[o]),0),He=(e,t,s)=>s.reduce((o,n)=>{const i=t[n];if(i==null)return o;const a=e[i.source];return a==null?o:o+L(a)*V(t[n])},0),Je=(e,t,s)=>s.reduce((o,n)=>{const i=t[n];if(i==null)return o;const a=e[i.target];return a==null?o:o+L(a)*V(t[n])},0),Qe=(e,t)=>e.y-t.y,Ze=(e,t)=>{const s=[],o=[],n=[],i=[];for(let a=0,c=e.length;a<c;a++){const r=e[a];(r==null?void 0:r.source)===t&&(n.push(r.target),i.push(a)),(r==null?void 0:r.target)===t&&(s.push(r.source),o.push(a))}return{sourceNodes:s,sourceLinks:o,targetLinks:i,targetNodes:n}},ve=(e,t)=>{const{targetNodes:s}=t;for(let o=0,n=s.length;o<n;o++){const i=s[o];if(i==null)continue;const a=e[i];a&&(a.depth=Math.max(t.depth+1,a.depth),ve(e,a))}},et=({nodes:e,links:t},s,o,n)=>{var c;const i=e.map((r,u)=>{const l=Ze(t,u);return{...r,...l,value:Math.max(P(t,l.sourceLinks),P(t,l.targetLinks)),depth:0}});for(let r=0,u=i.length;r<u;r++){const l=i[r];l!=null&&!l.sourceNodes.length&&ve(i,l)}const a=((c=we(i,r=>r.depth))==null?void 0:c.depth)??0;if(a>=1){const r=(s-o)/a;for(let u=0,l=i.length;u<l;u++){const d=i[u];d!=null&&(d.targetNodes.length||n==="justify"&&(d.depth=a),d.x=d.depth*r,d.dx=o)}}return{tree:i,maxDepth:a}},tt=e=>{var s;const t=[];for(let o=0,n=e.length;o<n;o++){const i=e[o];i!=null&&(t[i.depth]||(t[i.depth]=[]),(s=t[i.depth])==null||s.push(i))}return t},nt=(e,t,s,o,n)=>{let i=Math.min(...e.map(a=>{const c=_e(a,V);return c===0?1/0:(t-(a.length-1)*s)/c}));i===1/0&&(i=0);for(let a=0,c=e.length;a<c;a++){const r=e[a];if(r!=null)if(n==="top"){let u=0;for(let l=0,d=r.length;l<d;l++){const m=r[l];m!=null&&(m.dy=m.value*i,m.y=u,u+=m.dy+s)}}else for(let u=0,l=r.length;u<l;u++){const d=r[u];d!=null&&(d.y=u,d.dy=d.value*i)}}return o.map(a=>({...a,dy:V(a)*i}))},F=(e,t,s,o=!0)=>{for(let n=0,i=e.length;n<i;n++){const a=e[n];if(a==null)continue;const c=a.length;o&&a.sort(Qe);let r=0;for(let u=0;u<c;u++){const l=a[u];if(l==null)continue;const d=r-l.y;d>0&&(l.y+=d),r=l.y+l.dy+s}r=t+s;for(let u=c-1;u>=0;u--){const l=a[u];if(l==null)continue;const d=l.y+l.dy+s-r;if(d>0)l.y-=d,r=l.y;else break}}},at=(e,t,s,o)=>{for(let n=0,i=t.length;n<i;n++){const a=t[n];if(a!=null)for(let c=0,r=a.length;c<r;c++){const u=a[c];if(u!=null&&u.sourceLinks.length){const l=P(s,u.sourceLinks),d=He(e,s,u.sourceLinks),m=l===0?L(u):d/l;u.y+=(m-L(u))*o}}}},ot=(e,t,s,o)=>{for(let n=t.length-1;n>=0;n--){const i=t[n];if(i!=null)for(let a=0,c=i.length;a<c;a++){const r=i[a];if(r!=null&&r.targetLinks.length){const u=P(s,r.targetLinks),l=Je(e,s,r.targetLinks),d=u===0?L(r):l/u;r.y+=(d-L(r))*o}}}},rt=(e,t)=>{for(let s=0,o=e.length;s<o;s++){const n=e[s];if(n==null)continue;let i=0,a=0;n.targetLinks.sort((c,r)=>{var k,f,g,E;const u=(k=t[c])==null?void 0:k.target,l=(f=t[r])==null?void 0:f.target;if(u==null||l==null)return 0;const d=(g=e[u])==null?void 0:g.y,m=(E=e[l])==null?void 0:E.y;return d==null||m==null?0:d-m}),n.sourceLinks.sort((c,r)=>{var k,f,g,E;const u=(k=t[c])==null?void 0:k.source,l=(f=t[r])==null?void 0:f.source;if(u==null||l==null)return 0;const d=(g=e[u])==null?void 0:g.y,m=(E=e[l])==null?void 0:E.y;return d==null||m==null?0:d-m});for(let c=0,r=n.targetLinks.length;c<r;c++){const u=n.targetLinks[c];if(u==null)continue;const l=t[u];l&&(l.sy=i,i+=l.dy)}for(let c=0,r=n.sourceLinks.length;c<r;c++){const u=n.sourceLinks[c];if(u==null)continue;const l=t[u];l&&(l.ty=a,a+=l.dy)}}},st=({data:e,width:t,height:s,iterations:o,nodeWidth:n,nodePadding:i,sort:a,verticalAlign:c,align:r})=>{const{links:u}=e,{tree:l}=et(e,t,n,r),d=tt(l),m=nt(d,s,i,u,c);if(F(d,s,i,a),c==="justify"){let f=1;for(let g=1;g<=o;g++)ot(l,d,m,f*=.99),F(d,s,i,a),at(l,d,m,f),F(d,s,i,a)}return rt(l,m),{nodes:l,links:m}},it=e=>({x:+e.x+ +e.width/2,y:+e.y+ +e.height/2}),lt=e=>"sourceX"in e?{x:(e.sourceX+e.targetX)/2,y:(e.sourceY+e.targetY)/2}:void 0,ut=(e,t,s)=>{const{payload:o}=e;if(t==="node")return{payload:o,name:N(o,s,""),value:N(o,"value")};if("source"in o&&o.source&&o.target){const n=N(o.source,s,""),i=N(o.target,s,"");return{payload:o,name:`${n} - ${i}`,value:N(o,"value")}}},ct=(e,t,s,o)=>{if(t==null||typeof t!="string"||s==null||typeof s!="object")return;const n=t.split("-"),[i,a]=n,c=Le(s,`${i}s[${a}]`);if(c)return ut(c,i,o)},dt={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:ct,eventEmitter:void 0},mt=h.memo(({dataKey:e,nameKey:t,stroke:s,strokeWidth:o,fill:n,name:i,data:a,id:c})=>{const r={dataDefinedOnItem:a,getPosition:Fe,settings:{stroke:s,strokeWidth:o,fill:n,dataKey:e,name:i,nameKey:t,hide:!1,type:void 0,color:n,unit:"",graphicalItemId:c}};return h.createElement(Ge,{tooltipEntrySettings:r})});function ht(e,t){if(h.isValidElement(e))return h.cloneElement(e,t);if(typeof e=="function")return e(t);const{sourceX:s,sourceY:o,sourceControlX:n,targetX:i,targetY:a,targetControlX:c,linkWidth:r,...u}=t;return h.createElement("path",{className:"recharts-sankey-link",d:`
          M${s},${o}
          C${n},${o} ${c},${a} ${i},${a}
        `,fill:"none",stroke:"#333",strokeWidth:r,strokeOpacity:"0.2",...z(u)})}const pt=({link:e,nodes:t,left:s,top:o,i:n,linkContent:i,linkCurvature:a})=>{const{sy:c,ty:r,dy:u}=e,l=t[e.source],d=t[e.target];if(l==null||d==null)return;const m=l.x+l.dx+s,k=d.x+s,f=Ue(m,k),g=f(a),E=f(1-a),T=l.y+c+u/2+o,S=d.y+r+u/2+o;return{sourceX:m,targetX:k,sourceY:T,targetY:S,sourceControlX:g,targetControlX:E,sourceRelativeY:c,targetRelativeY:r,linkWidth:u,index:n,payload:{...e,source:l,target:d},...ge(i)}};function yt({graphicalItemId:e,props:t,i:s,linkContent:o,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:c}){const r=lt(t),u=`link-${s}`,l=he(),d={onMouseEnter:m=>{l(fe({activeIndex:u,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{l(ye()),i(t,m)},onClick:m=>{l(pe({activeIndex:u,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),a(t,m)}};return h.createElement(R,{...d},ht(o,t))}function ft({graphicalItemId:e,modifiedLinks:t,links:s,linkContent:o,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:c}){return h.createElement(R,{className:"recharts-sankey-links",key:"recharts-sankey-links"},s.map((r,u)=>{const l=t[u];return l==null?null:h.createElement(yt,{graphicalItemId:e,key:`link-${r.source}-${r.target}-${r.value}`,props:l,linkContent:o,i:u,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:c})}))}function gt(e,t){return h.isValidElement(e)?h.cloneElement(e,t):typeof e=="function"?e(t):h.createElement(Ve,{className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8",...z(t)})}const vt=({node:e,nodeContent:t,top:s,left:o,i:n})=>{const{x:i,y:a,dx:c,dy:r}=e;return{...ge(t),x:i+o,y:a+s,width:c,height:r,index:n,payload:e}};function kt({graphicalItemId:e,props:t,nodeContent:s,i:o,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:c}){const r=he(),u=it(t),l=`node-${o}`,d={onMouseEnter:m=>{r(fe({activeIndex:l,activeDataKey:c,activeCoordinate:u,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{r(ye()),i(t,m)},onClick:m=>{r(pe({activeIndex:l,activeDataKey:c,activeCoordinate:u,activeGraphicalItemId:e})),a(t,m)}};return h.createElement(R,{...d},gt(s,t))}function bt({graphicalItemId:e,modifiedNodes:t,nodeContent:s,onMouseEnter:o,onMouseLeave:n,onClick:i,dataKey:a}){return h.createElement(R,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},t.map((c,r)=>h.createElement(kt,{graphicalItemId:e,key:`node-${c.index}-${c.x}-${c.y}`,props:c,nodeContent:s,i:r,onMouseEnter:o,onMouseLeave:n,onClick:i,dataKey:a})))}const Et={align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify",...Ae};function St(e){const{className:t,style:s,children:o,id:n,...i}=e,{link:a,dataKey:c,node:r,onMouseEnter:u,onMouseLeave:l,onClick:d,data:m,iterations:k,nodeWidth:f,nodePadding:g,sort:E,linkCurvature:T,margin:S,verticalAlign:A,align:B}=e,ke=z(i),w=Ie(),x=je(),{links:be,modifiedLinks:K,modifiedNodes:_}=h.useMemo(()=>{if(!m||!w||!x||w<=0||x<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};const p=w-(S.left??0)-(S.right??0),y=x-(S.top??0)-(S.bottom??0),b=st({data:m,width:p,height:y,iterations:k,nodeWidth:f,nodePadding:g,sort:E,verticalAlign:A,align:B}),Q=S.top||0,Z=S.left||0,Ee=b.links.map((W,G)=>pt({link:W,nodes:b.nodes,i:G,top:Q,left:Z,linkContent:a,linkCurvature:T})).filter(Oe),Se=b.nodes.map((W,G)=>vt({node:W,nodeContent:r,i:G,top:Q,left:Z}));return{nodes:b.nodes,links:b.links,modifiedLinks:Ee,modifiedNodes:Se}},[m,w,x,S,k,f,g,E,a,r,T,B,A]),U=h.useCallback((p,y,b)=>{u&&u(p,y,b)},[u]),H=h.useCallback((p,y,b)=>{l&&l(p,y,b)},[l]),J=h.useCallback((p,y,b)=>{d&&d(p,y,b)},[d]);return!ee(w)||!ee(x)||!m||!m.links||!m.nodes?null:h.createElement(h.Fragment,null,h.createElement(qe,{computedData:{links:K,nodes:_}}),h.createElement(Ne,{...ke,width:w,height:x},o,h.createElement(ft,{graphicalItemId:n,links:be,modifiedLinks:K,linkContent:a,dataKey:c,onMouseEnter:(p,y)=>U(p,"link",y),onMouseLeave:(p,y)=>H(p,"link",y),onClick:(p,y)=>J(p,"link",y)}),h.createElement(bt,{graphicalItemId:n,modifiedNodes:_,nodeContent:r,dataKey:c,onMouseEnter:(p,y)=>U(p,"node",y),onMouseLeave:(p,y)=>H(p,"node",y),onClick:(p,y)=>J(p,"node",y)})))}function C(e){const t=Xe(e,Et),{width:s,height:o,style:n,className:i,id:a,throttleDelay:c,throttledEvents:r}=t,[u,l]=h.useState(null);return h.createElement(Pe,{preloadedState:{options:dt},reduxStoreName:i??"Sankey"},h.createElement(Te,{width:s,height:o}),h.createElement(Me,{margin:t.margin}),h.createElement(De,{throttleDelay:c,throttledEvents:r}),h.createElement(Re,{className:i,style:n,width:s,height:o,responsive:!1,ref:d=>{d&&!u&&l(d)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},h.createElement($e.Provider,{value:u},h.createElement(We,{id:a,type:"sankey"},d=>h.createElement(h.Fragment,null,h.createElement(mt,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:d}),h.createElement(St,{...t,id:d}))))))}C.displayName="Sankey";try{C.displayName="Sankey",C.__docgenInfo={description:`Flow diagram in which the width of the arrows is proportional to the flow rate.
It is typically used to visualize energy or material or cost transfers between processes.`,displayName:"Sankey",props:{nameKey:{defaultValue:null,description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.\n@defaultValue name",name:"nameKey",required:!1,type:{name:"string | number | ((obj: any) => any)"}},dataKey:{defaultValue:{value:"'value'"},description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,name:"dataKey",required:!1,type:{name:"string | number | ((obj: any) => any)"}},width:{defaultValue:null,description:`The width of chart container.
Can be a number or a percent string like "100%".
@see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}`,name:"width",required:!1,type:{name:"number | `${number}%`"}},height:{defaultValue:null,description:`The height of chart container.
Can be a number or a percent string like "100%".
@see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}`,name:"height",required:!1,type:{name:"number | `${number}%`"}},data:{defaultValue:null,description:`The source data, including the array of nodes, and the relationships, represented by links.

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
@example <Sankey link={{ fill: #77c878 }} />`,name:"link",required:!1,type:{name:"SankeyLinkOptions"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:`Empty space around the container.
@defaultValue {"top":5,"right":5,"bottom":5,"left":5}`,name:"margin",required:!1,type:{name:"Partial<Margin>"}},onClick:{defaultValue:null,description:"The customized event handler of click on the area in this group",name:"onClick",required:!1,type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,description:"The customized event handler of mouseenter on the area in this group",name:"onMouseEnter",required:!1,type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,description:"The customized event handler of mouseleave on the area in this group",name:"onMouseLeave",required:!1,type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},sort:{defaultValue:{value:"true"},description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",name:"sort",required:!1,type:{name:"boolean"}},verticalAlign:{defaultValue:{value:"'justify'"},description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"justify"'}]}},align:{defaultValue:{value:"'justify'"},description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"justify"'}]}},throttleDelay:{defaultValue:null,description:`Decides the time interval to throttle events.
Only events defined in \`throttledEvents\` prop are throttled.
All other events are executed immediately/synchronously.

Options:
- \`number\`: the time interval in milliseconds
- \`'raf'\`: use requestAnimationFrame to schedule updates.
@defaultValue 'raf'`,name:"throttleDelay",required:!1,type:{name:'number | "raf"'}},throttledEvents:{defaultValue:null,description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.
@defaultValue ["mousemove","touchmove","pointermove","scroll","wheel"]`,name:"throttledEvents",required:!1,type:{name:'"all" | readonly (keyof GlobalEventHandlersEventMap)[]'}}}}}catch{}const D={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:291741},{source:2,target:4,value:62429}]},ae={nodes:[{name:"Income"},{name:"Budget"},{name:"Investment"},{name:"Real Estate"},{name:"Crypto"},{name:"Stocks & Funds"},{name:"Saving"},{name:"Scpi"},{name:"BTC"},{name:"ETH"},{name:"SOL"},{name:"Housing"},{name:"Food"},{name:"Rent"},{name:"Utility"},{name:"Mortgage"},{name:"Groceries"},{name:"Delivery"},{name:"Restaurant"}],links:[{source:0,target:1,value:8500},{source:1,target:2,value:2300},{source:1,target:3,value:400},{source:1,target:4,value:1250},{source:2,target:5,value:1800},{source:2,target:6,value:500},{source:3,target:7,value:400},{source:4,target:8,value:500},{source:4,target:9,value:500},{source:4,target:10,value:250},{source:1,target:11,value:3384},{source:1,target:12,value:800},{source:11,target:13,value:1234},{source:11,target:14,value:150},{source:11,target:15,value:2e3},{source:12,target:16,value:450},{source:12,target:17,value:200},{source:12,target:18,value:150}]},$={align:{description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",table:{type:{summary:'"justify" | "left"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},data:{description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,table:{type:{summary:"SankeyData"},category:"General"}},dataKey:{description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"value"}},defaultValue:"value"},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}},iterations:{description:"The number of the iterations between the links",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"32"}},defaultValue:32},link:{description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,table:{type:{summary:"Function | React.SVGProps<SVGPathElement> | ReactNode"},category:"General"}},linkCurvature:{description:"The curvature of width",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0.5"}},defaultValue:.5},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"name"}},defaultValue:"name"},node:{description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,table:{type:{summary:"Function | Props | ReactNode"},category:"General"}},nodePadding:{description:"The padding between the nodes",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},nodeWidth:{description:"The width of node",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},onClick:{description:"The customized event handler of click on the area in this group",table:{type:{summary:"Function"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the area in this group",table:{type:{summary:"Function"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the area in this group",table:{type:{summary:"Function"},category:"Events"}},sort:{description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},throttleDelay:{description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",table:{type:{summary:'"raf" | number'},category:"General",defaultValue:{summary:"raf"}},defaultValue:"raf"},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:'"all" | Array<keyof GlobalEventHandlersEventMap>'},category:"General",defaultValue:{summary:'["mousemove","touchmove","pointermove","scroll","wheel"]'}},defaultValue:["mousemove","touchmove","pointermove","scroll","wheel"]},verticalAlign:{description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",table:{type:{summary:'"justify" | "top"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},nn={argTypes:$,component:C},M={name:"Simple",render:e=>v.createElement(Y,{width:"100%",height:400},v.createElement(C,{data:D,...e},v.createElement(Ye,null))),args:{...O($),data:D}},I={render:e=>v.createElement(Y,{width:"100%",height:400},v.createElement(C,{data:D,...e})),args:{...O($),data:D,nodeWidth:10,nodePadding:60,height:500,width:960}},j={render:e=>{const t=["#3C898E","#486DF0","#6F50E5"],s=n=>v.createElement("rect",{x:n.x+4,y:n.y-2,width:n.width-8,height:n.height+4,fill:t[n.payload.depth%t.length],rx:2.5}),o=n=>v.createElement("g",null,v.createElement("path",{d:`
  M${n.sourceX},${n.sourceY}
  C${n.sourceControlX},${n.sourceY} ${n.targetControlX},${n.targetY} ${n.targetX},${n.targetY}`,fill:"none",stroke:t[n.payload.source.depth%t.length],strokeOpacity:.4,strokeWidth:n.linkWidth,strokeLinecap:"butt"}),v.createElement("foreignObject",{x:n.sourceX,y:n.targetY-n.linkWidth/2,width:Math.max(n.targetX,n.sourceX)-Math.min(n.targetX,n.sourceX),height:n.linkWidth,style:{overflow:"visible"}},v.createElement("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",height:"100%",overflow:"visible",padding:"0.5em",gap:8}},v.createElement("div",{style:{fontSize:10,fontFamily:"sans-serif",textAlign:"center",backgroundColor:"#f1f5fe80",padding:"0.25em 0.5em",borderRadius:4,position:"relative",zIndex:1}},n.payload.target.name?`${n.payload.target.name}: `:"",n.payload.value," €"))));return v.createElement(Y,{width:"100%",height:400},v.createElement(C,{data:ae,node:s,link:o,...e}))},args:{...O($),data:ae,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}};var oe,re,se;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData
  }
}`,...(se=(re=M.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ue;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData,
    nodeWidth: 10,
    nodePadding: 60,
    height: 500,
    width: 960
  }
}`,...(ue=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var ce,de,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        <Sankey data={complexNodeLinkData} node={CustomNode} link={CustomLink} {...args} />
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
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
}`,...(me=(de=j.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const an=["API","Customized","CustomNodeAndLink"];export{M as API,j as CustomNodeAndLink,I as Customized,an as __namedExportsOrder,nn as default};
