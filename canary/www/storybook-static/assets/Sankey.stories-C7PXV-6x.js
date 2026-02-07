import{s as we,r as m,k as xe,n as Le,q as Ne,e as p}from"./iframe-DhLWPZ06.js";import{g as F}from"./utils-ePvtT4un.js";import{m as Te}from"./maxBy-zVI0KwZy.js";import{r as Ie}from"./iteratee-B1pJwrfy.js";import{Z as Re,_ as Ve,e as je,f as De,i as te,S as Me,q as L,u as ye,R as Y}from"./arrayEqualityCheck-CC1O7uMi.js";import{L as M}from"./Layer-DYv-jvxI.js";import{R as Pe}from"./Rectangle-DZfrdEyG.js";import{R as Ae,b as $e,K as We,T as Xe,i as Oe}from"./RechartsWrapper-DUMd0Jc6.js";import{t as fe,q as pe,p as ge}from"./hooks-BVelaaLp.js";import{R as qe,S as Ge}from"./RegisterGraphicalItemId-DKys76eX.js";import{S as Fe}from"./chartDataContext-D-yHh9FI.js";import{r as Ye,b as K,a as ve}from"./resolveDefaultProps-Xflu8RP3.js";import{T as Ke}from"./Tooltip-BYrJLHQh.js";import{R as _}from"./RechartsHookInspector-BYy17HVN.js";var O={},ne;function _e(){return ne||(ne=1,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Ie();function i(o,n){if(!o||!o.length)return 0;n!=null&&(n=t.iteratee(n));let s;for(let a=0;a<o.length;a++){const c=n?n(o[a]):o[a];c!==void 0&&(s===void 0?s=c:s+=c)}return s}e.sumBy=i}(O)),O}var q,ae;function Be(){return ae||(ae=1,q=_e().sumBy),q}var ze=Be();const He=we(ze),Ue=(e,t)=>{const i=+e,o=t-i;return n=>i+o*n},P=e=>e.y+e.dy/2,R=e=>e&&e.value||0,j=(e,t)=>t.reduce((i,o)=>i+R(e[o]),0),Ze=(e,t,i)=>i.reduce((o,n)=>{const s=t[n];if(s==null)return o;const a=e[s.source];return a==null?o:o+P(a)*R(t[n])},0),Je=(e,t,i)=>i.reduce((o,n)=>{const s=t[n];if(s==null)return o;const a=e[s.target];return a==null?o:o+P(a)*R(t[n])},0),Qe=(e,t)=>e.y-t.y,et=(e,t)=>{const i=[],o=[],n=[],s=[];for(let a=0,c=e.length;a<c;a++){const r=e[a];(r==null?void 0:r.source)===t&&(n.push(r.target),s.push(a)),(r==null?void 0:r.target)===t&&(i.push(r.source),o.push(a))}return{sourceNodes:i,sourceLinks:o,targetLinks:s,targetNodes:n}},ke=(e,t)=>{const{targetNodes:i}=t;for(let o=0,n=i.length;o<n;o++){const s=i[o];if(s==null)continue;const a=e[s];a&&(a.depth=Math.max(t.depth+1,a.depth),ke(e,a))}},tt=({nodes:e,links:t},i,o,n)=>{var c;const s=e.map((r,u)=>{const l=et(t,u);return{...r,...l,value:Math.max(j(t,l.sourceLinks),j(t,l.targetLinks)),depth:0}});for(let r=0,u=s.length;r<u;r++){const l=s[r];l!=null&&!l.sourceNodes.length&&ke(s,l)}const a=((c=Te(s,r=>r.depth))==null?void 0:c.depth)??0;if(a>=1){const r=(i-o)/a;for(let u=0,l=s.length;u<l;u++){const d=s[u];d!=null&&(d.targetNodes.length||n==="justify"&&(d.depth=a),d.x=d.depth*r,d.dx=o)}}return{tree:s,maxDepth:a}},nt=e=>{var i;const t=[];for(let o=0,n=e.length;o<n;o++){const s=e[o];s!=null&&(t[s.depth]||(t[s.depth]=[]),(i=t[s.depth])==null||i.push(s))}return t},at=(e,t,i,o,n)=>{const s=Math.min(...e.map(a=>(t-(a.length-1)*i)/He(a,R)));for(let a=0,c=e.length;a<c;a++){const r=e[a];if(r!=null)if(n==="top"){let u=0;for(let l=0,d=r.length;l<d;l++){const h=r[l];h!=null&&(h.dy=h.value*s,h.y=u,u+=h.dy+i)}}else for(let u=0,l=r.length;u<l;u++){const d=r[u];d!=null&&(d.y=u,d.dy=d.value*s)}}return o.map(a=>({...a,dy:R(a)*s}))},G=(e,t,i,o=!0)=>{for(let n=0,s=e.length;n<s;n++){const a=e[n];if(a==null)continue;const c=a.length;o&&a.sort(Qe);let r=0;for(let u=0;u<c;u++){const l=a[u];if(l==null)continue;const d=r-l.y;d>0&&(l.y+=d),r=l.y+l.dy+i}r=t+i;for(let u=c-1;u>=0;u--){const l=a[u];if(l==null)continue;const d=l.y+l.dy+i-r;if(d>0)l.y-=d,r=l.y;else break}}},ot=(e,t,i,o)=>{for(let n=0,s=t.length;n<s;n++){const a=t[n];if(a!=null)for(let c=0,r=a.length;c<r;c++){const u=a[c];if(u!=null&&u.sourceLinks.length){const l=j(i,u.sourceLinks),h=Ze(e,i,u.sourceLinks)/l;u.y+=(h-P(u))*o}}}},rt=(e,t,i,o)=>{for(let n=t.length-1;n>=0;n--){const s=t[n];if(s!=null)for(let a=0,c=s.length;a<c;a++){const r=s[a];if(r!=null&&r.targetLinks.length){const u=j(i,r.targetLinks),d=Je(e,i,r.targetLinks)/u;r.y+=(d-P(r))*o}}}},st=(e,t)=>{for(let i=0,o=e.length;i<o;i++){const n=e[i];if(n==null)continue;let s=0,a=0;n.targetLinks.sort((c,r)=>{var k,g,v,E;const u=(k=t[c])==null?void 0:k.target,l=(g=t[r])==null?void 0:g.target;if(u==null||l==null)return 0;const d=(v=e[u])==null?void 0:v.y,h=(E=e[l])==null?void 0:E.y;return d==null||h==null?0:d-h}),n.sourceLinks.sort((c,r)=>{var k,g,v,E;const u=(k=t[c])==null?void 0:k.source,l=(g=t[r])==null?void 0:g.source;if(u==null||l==null)return 0;const d=(v=e[u])==null?void 0:v.y,h=(E=e[l])==null?void 0:E.y;return d==null||h==null?0:d-h});for(let c=0,r=n.targetLinks.length;c<r;c++){const u=n.targetLinks[c];if(u==null)continue;const l=t[u];l&&(l.sy=s,s+=l.dy)}for(let c=0,r=n.sourceLinks.length;c<r;c++){const u=n.sourceLinks[c];if(u==null)continue;const l=t[u];l&&(l.ty=a,a+=l.dy)}}},it=({data:e,width:t,height:i,iterations:o,nodeWidth:n,nodePadding:s,sort:a,verticalAlign:c,align:r})=>{const{links:u}=e,{tree:l}=tt(e,t,n,r),d=nt(l),h=at(d,i,s,u,c);if(G(d,i,s,a),c==="justify"){let g=1;for(let v=1;v<=o;v++)rt(l,d,h,g*=.99),G(d,i,s,a),ot(l,d,h,g),G(d,i,s,a)}return st(l,h),{nodes:l,links:h}},lt=e=>({x:+e.x+ +e.width/2,y:+e.y+ +e.height/2}),ut=e=>"sourceX"in e?{x:(e.sourceX+e.targetX)/2,y:(e.sourceY+e.targetY)/2}:void 0,ct=(e,t,i)=>{const{payload:o}=e;if(t==="node")return{payload:o,name:L(o,i,""),value:L(o,"value")};if("source"in o&&o.source&&o.target){const n=L(o.source,i,""),s=L(o.target,i,"");return{payload:o,name:`${n} - ${s}`,value:L(o,"value")}}},dt=(e,t,i,o)=>{if(t==null||typeof t!="string"||i==null||typeof i!="object")return;const n=t.split("-"),[s,a]=n,c=xe(i,`${s}s[${a}]`);if(c)return ct(c,s,o)},ht={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:dt,eventEmitter:void 0},mt=m.memo(({dataKey:e,nameKey:t,stroke:i,strokeWidth:o,fill:n,name:s,data:a,id:c})=>{const r={dataDefinedOnItem:a,getPosition:Le,settings:{stroke:i,strokeWidth:o,fill:n,dataKey:e,name:s,nameKey:t,hide:!1,type:void 0,color:n,unit:"",graphicalItemId:c}};return m.createElement(Ge,{tooltipEntrySettings:r})});function yt(e,t){if(m.isValidElement(e))return m.cloneElement(e,t);if(typeof e=="function")return e(t);const{sourceX:i,sourceY:o,sourceControlX:n,targetX:s,targetY:a,targetControlX:c,linkWidth:r,...u}=t;return m.createElement("path",{className:"recharts-sankey-link",d:`
          M${i},${o}
          C${n},${o} ${c},${a} ${s},${a}
        `,fill:"none",stroke:"#333",strokeWidth:r,strokeOpacity:"0.2",...K(u)})}const ft=({link:e,nodes:t,left:i,top:o,i:n,linkContent:s,linkCurvature:a})=>{const{sy:c,ty:r,dy:u}=e,l=t[e.source],d=t[e.target];if(l==null||d==null)return;const h=l.x+l.dx+i,k=d.x+i,g=Ue(h,k),v=g(a),E=g(1-a),V=l.y+c+u/2+o,S=d.y+r+u/2+o;return{sourceX:h,targetX:k,sourceY:V,targetY:S,sourceControlX:v,targetControlX:E,sourceRelativeY:c,targetRelativeY:r,linkWidth:u,index:n,payload:{...e,source:l,target:d},...ve(s)}};function pt({graphicalItemId:e,props:t,i,linkContent:o,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c}){const r=ut(t),u=`link-${i}`,l=ye(),d={onMouseEnter:h=>{l(ge({activeIndex:u,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),n(t,h)},onMouseLeave:h=>{l(pe()),s(t,h)},onClick:h=>{l(fe({activeIndex:u,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),a(t,h)}};return m.createElement(M,{...d},yt(o,t))}function gt({graphicalItemId:e,modifiedLinks:t,links:i,linkContent:o,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c}){return m.createElement(M,{className:"recharts-sankey-links",key:"recharts-sankey-links"},i.map((r,u)=>{const l=t[u];return l==null?null:m.createElement(pt,{graphicalItemId:e,key:`link-${r.source}-${r.target}-${r.value}`,props:l,linkContent:o,i:u,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c})}))}function vt(e,t){return m.isValidElement(e)?m.cloneElement(e,t):typeof e=="function"?e(t):m.createElement(Pe,{className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8",...K(t)})}const kt=({node:e,nodeContent:t,top:i,left:o,i:n})=>{const{x:s,y:a,dx:c,dy:r}=e;return{...ve(t),x:s+o,y:a+i,width:c,height:r,index:n,payload:e}};function bt({graphicalItemId:e,props:t,nodeContent:i,i:o,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c}){const r=ye(),u=lt(t),l=`node-${o}`,d={onMouseEnter:h=>{r(ge({activeIndex:l,activeDataKey:c,activeCoordinate:u,activeGraphicalItemId:e})),n(t,h)},onMouseLeave:h=>{r(pe()),s(t,h)},onClick:h=>{r(fe({activeIndex:l,activeDataKey:c,activeCoordinate:u,activeGraphicalItemId:e})),a(t,h)}};return m.createElement(M,{...d},vt(i,t))}function Et({graphicalItemId:e,modifiedNodes:t,nodeContent:i,onMouseEnter:o,onMouseLeave:n,onClick:s,dataKey:a}){return m.createElement(M,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},t.map((c,r)=>m.createElement(bt,{graphicalItemId:e,key:`node-${c.index}-${c.x}-${c.y}`,props:c,nodeContent:i,i:r,onMouseEnter:o,onMouseLeave:n,onClick:s,dataKey:a})))}const St={align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify",...Oe};function Ct(e){const{className:t,style:i,children:o,id:n,...s}=e,{link:a,dataKey:c,node:r,onMouseEnter:u,onMouseLeave:l,onClick:d,data:h,iterations:k,nodeWidth:g,nodePadding:v,sort:E,linkCurvature:V,margin:S,verticalAlign:$,align:B}=e,be=K(s),w=je(),x=De(),{links:Ee,modifiedLinks:z,modifiedNodes:H}=m.useMemo(()=>{if(!h||!w||!x||w<=0||x<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};const y=w-(S.left??0)-(S.right??0),f=x-(S.top??0)-(S.bottom??0),b=it({data:h,width:y,height:f,iterations:k,nodeWidth:g,nodePadding:v,sort:E,verticalAlign:$,align:B}),Q=S.top||0,ee=S.left||0,Se=b.links.map((W,X)=>ft({link:W,nodes:b.nodes,i:X,top:Q,left:ee,linkContent:a,linkCurvature:V})).filter(Ne),Ce=b.nodes.map((W,X)=>kt({node:W,nodeContent:r,i:X,top:Q,left:ee}));return{nodes:b.nodes,links:b.links,modifiedLinks:Se,modifiedNodes:Ce}},[h,w,x,S,k,g,v,E,a,r,V,B,$]),U=m.useCallback((y,f,b)=>{u&&u(y,f,b)},[u]),Z=m.useCallback((y,f,b)=>{l&&l(y,f,b)},[l]),J=m.useCallback((y,f,b)=>{d&&d(y,f,b)},[d]);return!te(w)||!te(x)||!h||!h.links||!h.nodes?null:m.createElement(m.Fragment,null,m.createElement(Fe,{computedData:{links:z,nodes:H}}),m.createElement(Me,{...be,width:w,height:x},o,m.createElement(gt,{graphicalItemId:n,links:Ee,modifiedLinks:z,linkContent:a,dataKey:c,onMouseEnter:(y,f)=>U(y,"link",f),onMouseLeave:(y,f)=>Z(y,"link",f),onClick:(y,f)=>J(y,"link",f)}),m.createElement(Et,{graphicalItemId:n,modifiedNodes:H,nodeContent:r,dataKey:c,onMouseEnter:(y,f)=>U(y,"node",f),onMouseLeave:(y,f)=>Z(y,"node",f),onClick:(y,f)=>J(y,"node",f)})))}function C(e){const t=Ye(e,St),{width:i,height:o,style:n,className:s,id:a,throttleDelay:c,throttledEvents:r}=t,[u,l]=m.useState(null);return m.createElement(Ae,{preloadedState:{options:ht},reduxStoreName:s??"Sankey"},m.createElement(Re,{width:i,height:o}),m.createElement(Ve,{margin:t.margin}),m.createElement($e,{throttleDelay:c,throttledEvents:r}),m.createElement(We,{className:s,style:n,width:i,height:o,responsive:!1,ref:d=>{d&&!u&&l(d)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},m.createElement(Xe.Provider,{value:u},m.createElement(qe,{id:a,type:"sankey"},d=>m.createElement(m.Fragment,null,m.createElement(mt,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:d}),m.createElement(Ct,{...t,id:d}))))))}C.displayName="Sankey";try{C.displayName="Sankey",C.__docgenInfo={description:`Flow diagram in which the width of the arrows is proportional to the flow rate.
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
@defaultValue {"top":5,"right":5,"bottom":5,"left":5}`,name:"margin",required:!1,type:{name:"Partial<Margin>"}},sort:{defaultValue:{value:"true"},description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",name:"sort",required:!1,type:{name:"boolean"}},verticalAlign:{defaultValue:{value:"'justify'"},description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"justify"'}]}},align:{defaultValue:{value:"'justify'"},description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"justify"'}]}},throttleDelay:{defaultValue:null,description:`Decides the time interval to throttle events.
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
@defaultValue ["mousemove","touchmove","pointermove","scroll","wheel"]`,name:"throttledEvents",required:!1,type:{name:'"all" | readonly (keyof GlobalEventHandlersEventMap)[]'}}}}}catch{}const D={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:291741},{source:2,target:4,value:62429}]},oe={nodes:[{name:"Income"},{name:"Budget"},{name:"Investment"},{name:"Real Estate"},{name:"Crypto"},{name:"Stocks & Funds"},{name:"Saving"},{name:"Scpi"},{name:"BTC"},{name:"ETH"},{name:"SOL"},{name:"Housing"},{name:"Food"},{name:"Rent"},{name:"Utility"},{name:"Mortgage"},{name:"Groceries"},{name:"Delivery"},{name:"Restaurant"}],links:[{source:0,target:1,value:8500},{source:1,target:2,value:2300},{source:1,target:3,value:400},{source:1,target:4,value:1250},{source:2,target:5,value:1800},{source:2,target:6,value:500},{source:3,target:7,value:400},{source:4,target:8,value:500},{source:4,target:9,value:500},{source:4,target:10,value:250},{source:1,target:11,value:3384},{source:1,target:12,value:800},{source:11,target:13,value:1234},{source:11,target:14,value:150},{source:11,target:15,value:2e3},{source:12,target:16,value:450},{source:12,target:17,value:200},{source:12,target:18,value:150}]},A={align:{description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",table:{type:{summary:'"justify" | "left"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},data:{description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,table:{type:{summary:"SankeyData"},category:"General"}},dataKey:{description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"value"}},defaultValue:"value"},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"number | string"},category:"General"}},iterations:{description:"The number of the iterations between the links",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"32"}},defaultValue:32},link:{description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,table:{type:{summary:"Function | React.SVGProps<SVGPathElement> | ReactNode"},category:"General"}},linkCurvature:{description:"The curvature of width",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0.5"}},defaultValue:.5},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"name"}},defaultValue:"name"},node:{description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,table:{type:{summary:"Function | Props | ReactNode"},category:"General"}},nodePadding:{description:"The padding between the nodes",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},nodeWidth:{description:"The width of node",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},onClick:{description:"The customized event handler of click on the area in this group",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the area in this group",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the area in this group",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},sort:{description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},throttleDelay:{description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",table:{type:{summary:'"raf" | number'},category:"General",defaultValue:{summary:"raf"}},defaultValue:"raf"},throttledEvents:{description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,table:{type:{summary:'"all" | Array<keyof GlobalEventHandlersEventMap>'},category:"General",defaultValue:{summary:'["mousemove","touchmove","pointermove","scroll","wheel"]'}},defaultValue:["mousemove","touchmove","pointermove","scroll","wheel"]},verticalAlign:{description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",table:{type:{summary:'"justify" | "top"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"number | string"},category:"General"}}},wt={argTypes:A,component:C},N={name:"Simple",render:e=>p.createElement(Y,{width:"100%",height:400},p.createElement(C,{data:D,...e},p.createElement(Ke,null),p.createElement(_,null))),args:{...F(A),data:D}},T={render:e=>p.createElement(Y,{width:"100%",height:400},p.createElement(C,{data:D,...e},p.createElement(_,null))),args:{...F(A),data:D,nodeWidth:10,nodePadding:60,height:500,width:960}},I={render:e=>{const t=["#3C898E","#486DF0","#6F50E5"],i=n=>p.createElement("rect",{x:n.x+4,y:n.y-2,width:n.width-8,height:n.height+4,fill:t[n.payload.depth%t.length],rx:2.5}),o=n=>p.createElement("g",null,p.createElement("path",{d:`
  M${n.sourceX},${n.sourceY}
  C${n.sourceControlX},${n.sourceY} ${n.targetControlX},${n.targetY} ${n.targetX},${n.targetY}`,fill:"none",stroke:t[n.payload.source.depth%t.length],strokeOpacity:.4,strokeWidth:n.linkWidth,strokeLinecap:"butt"}),p.createElement("foreignObject",{x:n.sourceX,y:n.targetY-n.linkWidth/2,width:Math.max(n.targetX,n.sourceX)-Math.min(n.targetX,n.sourceX),height:n.linkWidth,style:{overflow:"visible"}},p.createElement("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",height:"100%",overflow:"visible",padding:"0.5em",gap:8}},p.createElement("div",{style:{fontSize:10,fontFamily:"sans-serif",textAlign:"center",backgroundColor:"#f1f5fe80",padding:"0.25em 0.5em",borderRadius:4,position:"relative",zIndex:1}},n.payload.target.name?`${n.payload.target.name}: `:"",n.payload.value," €"))));return p.createElement(Y,{width:"100%",height:400},p.createElement(C,{data:oe,node:i,link:o,...e},p.createElement(_,null)))},args:{...F(A),data:oe,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}};var re,se,ie;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <Tooltip />
          <RechartsHookInspector />
        </Sankey>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(SankeyArgs),
    data: nodeLinkData
  }
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ue,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <Sankey data={nodeLinkData} {...args}>
          <RechartsHookInspector />
        </Sankey>
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
}`,...(ce=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,he,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(he=I.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const xt=["API","Customized","CustomNodeAndLink"],Ot=Object.freeze(Object.defineProperty({__proto__:null,API:N,CustomNodeAndLink:I,Customized:T,__namedExportsOrder:xt,default:wt},Symbol.toStringTag,{value:"Module"}));export{N as A,Ot as C};
