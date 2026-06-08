import{g as Ee,r as h,R as k}from"./iframe-CT_on4dN.js";import{g as O}from"./utils-ePvtT4un.js";import{m as Ne}from"./maxBy-D8KEfhWy.js";import{r as Ce}from"./iteratee-BUWsjaYF.js";import{g as Pe}from"./get-DAlxn1Zj.js";import{i as ee,S as we}from"./isWellBehavedNumber-DcXfDBUW.js";import{L as R}from"./Layer-BDukNzPA.js";import{R as Le}from"./Rectangle-CqE8KoLV.js";import{V as Te,W as Ve,u as Me,a as je,q as w,f as he,R as Y}from"./zIndexSlice-9YwY2T6T.js";import{R as Ie,d as De,a0 as Re,$ as $e,i as Ae,P as ye,O as pe,N as fe}from"./RechartsWrapper-C-4qOiYS.js";import{R as We,S as qe}from"./RegisterGraphicalItemId-aTaFmyQg.js";import{S as Ge}from"./chartDataContext-BNQnQ5VT.js";import{r as Xe,n as Fe,s as z,q as Oe,b as ge}from"./resolveDefaultProps-Ngbi67w9.js";import{T as Ye}from"./Tooltip-negrmm2w.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MMHbxa5P.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./useAnimationId-DfgP8Qzr.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B37YLZmy.js";import"./index-BLrAz-7b.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./axisSelectors-CiriuU2L.js";import"./d3-scale-B0V457C8.js";import"./useElementOffset-BcUuC6UH.js";import"./uniqBy-DJ-FcwmE.js";import"./types-BSLS2Rfw.js";import"./Curve-D3g77UHX.js";import"./step-D6LclrFL.js";import"./path-DyVhHtw_.js";import"./Cross-D9dQdIGX.js";import"./Sector-DGh7eeHP.js";import"./ZIndexLayer-BBvvwP5n.js";var G={},te;function ze(){if(te)return G;te=1;const e=Ce();function t(s,r){if(!s||!s.length)return 0;r!=null&&(r=e.iteratee(r));let n;for(let i=0;i<s.length;i++){const a=r?r(s[i]):s[i];a!==void 0&&(n===void 0?n=a:n+=a)}return n}return G.sumBy=t,G}var X,ne;function Be(){return ne||(ne=1,X=ze().sumBy),X}var _e=Be();const Ke=Ee(_e),Ue=(e,t)=>{const s=+e,r=t-s;return n=>s+r*n},P=e=>e.y+e.dy/2,L=e=>e&&e.value||0,I=(e,t)=>t.reduce((s,r)=>s+L(e[r]),0),He=(e,t,s)=>s.reduce((r,n)=>{const i=t[n];if(i==null)return r;const a=e[i.source];return a==null?r:r+P(a)*L(t[n])},0),Je=(e,t,s)=>s.reduce((r,n)=>{const i=t[n];if(i==null)return r;const a=e[i.target];return a==null?r:r+P(a)*L(t[n])},0),Qe=(e,t)=>e.y-t.y,Ze=(e,t)=>{const s=[],r=[],n=[],i=[];for(let a=0,u=e.length;a<u;a++){const o=e[a];(o==null?void 0:o.source)===t&&(n.push(o.target),i.push(a)),(o==null?void 0:o.target)===t&&(s.push(o.source),r.push(a))}return{sourceNodes:s,sourceLinks:r,targetLinks:i,targetNodes:n}},ke=(e,t)=>{const{targetNodes:s}=t;for(let r=0,n=s.length;r<n;r++){const i=s[r];if(i==null)continue;const a=e[i];a&&(a.depth=Math.max(t.depth+1,a.depth),ke(e,a))}},et=({nodes:e,links:t},s,r,n)=>{var u;const i=e.map((o,c)=>{const l=Ze(t,c);return{...o,...l,value:Math.max(I(t,l.sourceLinks),I(t,l.targetLinks)),depth:0}});for(let o=0,c=i.length;o<c;o++){const l=i[o];l!=null&&!l.sourceNodes.length&&ke(i,l)}const a=((u=Ne(i,o=>o.depth))==null?void 0:u.depth)??0;if(a>=1){const o=(s-r)/a;for(let c=0,l=i.length;c<l;c++){const d=i[c];d!=null&&(d.targetNodes.length||n==="justify"&&(d.depth=a),d.x=d.depth*o,d.dx=r)}}return{tree:i,maxDepth:a}},tt=e=>{var s;const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];i!=null&&(t[i.depth]||(t[i.depth]=[]),(s=t[i.depth])==null||s.push(i))}return t},nt=(e,t,s,r,n)=>{let i=Math.min(...e.map(a=>{const u=Ke(a,L);return u===0?1/0:(t-(a.length-1)*s)/u}));i===1/0&&(i=0);for(let a=0,u=e.length;a<u;a++){const o=e[a];if(o!=null)if(n==="top"){let c=0;for(let l=0,d=o.length;l<d;l++){const m=o[l];m!=null&&(m.dy=m.value*i,m.y=c,c+=m.dy+s)}}else for(let c=0,l=o.length;c<l;c++){const d=o[c];d!=null&&(d.y=c,d.dy=d.value*i)}}return r.map(a=>({...a,dy:L(a)*i}))},F=(e,t,s,r=!0)=>{for(let n=0,i=e.length;n<i;n++){const a=e[n];if(a==null)continue;const u=a.length;r&&a.sort(Qe);let o=0;for(let c=0;c<u;c++){const l=a[c];if(l==null)continue;const d=o-l.y;d>0&&(l.y+=d),o=l.y+l.dy+s}o=t+s;for(let c=u-1;c>=0;c--){const l=a[c];if(l==null)continue;const d=l.y+l.dy+s-o;if(d>0)l.y-=d,o=l.y;else break}}},at=(e,t,s,r)=>{for(let n=0,i=t.length;n<i;n++){const a=t[n];if(a!=null)for(let u=0,o=a.length;u<o;u++){const c=a[u];if(c!=null&&c.sourceLinks.length){const l=I(s,c.sourceLinks),d=He(e,s,c.sourceLinks),m=l===0?P(c):d/l;c.y+=(m-P(c))*r}}}},rt=(e,t,s,r)=>{for(let n=t.length-1;n>=0;n--){const i=t[n];if(i!=null)for(let a=0,u=i.length;a<u;a++){const o=i[a];if(o!=null&&o.targetLinks.length){const c=I(s,o.targetLinks),l=Je(e,s,o.targetLinks),d=c===0?P(o):l/c;o.y+=(d-P(o))*r}}}},ot=(e,t)=>{for(let s=0,r=e.length;s<r;s++){const n=e[s];if(n==null)continue;let i=0,a=0;n.targetLinks.sort((u,o)=>{var v,f,g,b;const c=(v=t[u])==null?void 0:v.target,l=(f=t[o])==null?void 0:f.target;if(c==null||l==null)return 0;const d=(g=e[c])==null?void 0:g.y,m=(b=e[l])==null?void 0:b.y;return d==null||m==null?0:d-m}),n.sourceLinks.sort((u,o)=>{var v,f,g,b;const c=(v=t[u])==null?void 0:v.source,l=(f=t[o])==null?void 0:f.source;if(c==null||l==null)return 0;const d=(g=e[c])==null?void 0:g.y,m=(b=e[l])==null?void 0:b.y;return d==null||m==null?0:d-m});for(let u=0,o=n.targetLinks.length;u<o;u++){const c=n.targetLinks[u];if(c==null)continue;const l=t[c];l&&(l.sy=i,i+=l.dy)}for(let u=0,o=n.sourceLinks.length;u<o;u++){const c=n.sourceLinks[u];if(c==null)continue;const l=t[c];l&&(l.ty=a,a+=l.dy)}}},st=({data:e,width:t,height:s,iterations:r,nodeWidth:n,nodePadding:i,sort:a,verticalAlign:u,align:o})=>{const{links:c}=e,{tree:l}=et(e,t,n,o),d=tt(l),m=nt(d,s,i,c,u);if(F(d,s,i,a),u==="justify"){let f=1;for(let g=1;g<=r;g++)rt(l,d,m,f*=.99),F(d,s,i,a),at(l,d,m,f),F(d,s,i,a)}return ot(l,m),{nodes:l,links:m}},it=e=>({x:+e.x+ +e.width/2,y:+e.y+ +e.height/2}),lt=e=>"sourceX"in e?{x:(e.sourceX+e.targetX)/2,y:(e.sourceY+e.targetY)/2}:void 0,ct=(e,t,s)=>{const{payload:r}=e;if(t==="node")return{payload:r,name:w(r,s,""),value:w(r,"value")};if("source"in r&&r.source&&r.target){const n=w(r.source,s,""),i=w(r.target,s,"");return{payload:r,name:`${n} - ${i}`,value:w(r,"value")}}},ut=(e,t,s,r)=>{if(t==null||typeof t!="string"||s==null||typeof s!="object")return;const n=t.split("-"),[i,a]=n,u=Pe(s,`${i}s[${a}]`);if(u)return ct(u,i,r)},dt={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:ut,eventEmitter:void 0},mt=h.memo(({dataKey:e,nameKey:t,stroke:s,strokeWidth:r,fill:n,name:i,data:a,id:u})=>{const o={dataDefinedOnItem:a,getPosition:Fe,settings:{stroke:s,strokeWidth:r,fill:n,dataKey:e,name:i,nameKey:t,hide:!1,type:void 0,color:n,unit:"",graphicalItemId:u}};return h.createElement(qe,{tooltipEntrySettings:o})});function ht(e,t){if(h.isValidElement(e))return h.cloneElement(e,t);if(typeof e=="function")return e(t);const{sourceX:s,sourceY:r,sourceControlX:n,targetX:i,targetY:a,targetControlX:u,linkWidth:o,...c}=t;return h.createElement("path",{className:"recharts-sankey-link",d:`
          M${s},${r}
          C${n},${r} ${u},${a} ${i},${a}
        `,fill:"none",stroke:"#333",strokeWidth:o,strokeOpacity:"0.2",...z(c)})}const yt=({link:e,nodes:t,left:s,top:r,i:n,linkContent:i,linkCurvature:a})=>{const{sy:u,ty:o,dy:c}=e,l=t[e.source],d=t[e.target];if(l==null||d==null)return;const m=l.x+l.dx+s,v=d.x+s,f=Ue(m,v),g=f(a),b=f(1-a),T=l.y+u+c/2+r,x=d.y+o+c/2+r;return{sourceX:m,targetX:v,sourceY:T,targetY:x,sourceControlX:g,targetControlX:b,sourceRelativeY:u,targetRelativeY:o,linkWidth:c,index:n,payload:{...e,source:l,target:d},...ge(i)}};function pt({graphicalItemId:e,props:t,i:s,linkContent:r,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:u}){const o=lt(t),c=`link-${s}`,l=he(),d={onMouseEnter:m=>{l(fe({activeIndex:c,activeDataKey:u,activeCoordinate:o,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{l(pe()),i(t,m)},onClick:m=>{l(ye({activeIndex:c,activeDataKey:u,activeCoordinate:o,activeGraphicalItemId:e})),a(t,m)}};return h.createElement(R,{...d},ht(r,t))}function ft({graphicalItemId:e,modifiedLinks:t,links:s,linkContent:r,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:u}){return h.createElement(R,{className:"recharts-sankey-links",key:"recharts-sankey-links"},s.map((o,c)=>{const l=t[c];return l==null?null:h.createElement(pt,{graphicalItemId:e,key:`link-${o.source}-${o.target}-${o.value}`,props:l,linkContent:r,i:c,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:u})}))}function gt(e,t){return h.isValidElement(e)?h.cloneElement(e,t):typeof e=="function"?e(t):h.createElement(Le,{className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8",...z(t)})}const kt=({node:e,nodeContent:t,top:s,left:r,i:n})=>{const{x:i,y:a,dx:u,dy:o}=e;return{...ge(t),x:i+r,y:a+s,width:u,height:o,index:n,payload:e}};function vt({graphicalItemId:e,props:t,nodeContent:s,i:r,onMouseEnter:n,onMouseLeave:i,onClick:a,dataKey:u}){const o=he(),c=it(t),l=`node-${r}`,d={onMouseEnter:m=>{o(fe({activeIndex:l,activeDataKey:u,activeCoordinate:c,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{o(pe()),i(t,m)},onClick:m=>{o(ye({activeIndex:l,activeDataKey:u,activeCoordinate:c,activeGraphicalItemId:e})),a(t,m)}};return h.createElement(R,{...d},gt(s,t))}function St({graphicalItemId:e,modifiedNodes:t,nodeContent:s,onMouseEnter:r,onMouseLeave:n,onClick:i,dataKey:a}){return h.createElement(R,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},t.map((u,o)=>h.createElement(vt,{graphicalItemId:e,key:`node-${u.index}-${u.x}-${u.y}`,props:u,nodeContent:s,i:o,onMouseEnter:r,onMouseLeave:n,onClick:i,dataKey:a})))}const bt={align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify",...Ae};function xt(e){const{className:t,style:s,children:r,id:n,...i}=e,{link:a,dataKey:u,node:o,onMouseEnter:c,onMouseLeave:l,onClick:d,data:m,iterations:v,nodeWidth:f,nodePadding:g,sort:b,linkCurvature:T,margin:x,verticalAlign:A,align:B}=e,ve=z(i),N=Me(),C=je(),{links:Se,modifiedLinks:_,modifiedNodes:K}=h.useMemo(()=>{if(!m||!N||!C||N<=0||C<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};const y=N-(x.left??0)-(x.right??0),p=C-(x.top??0)-(x.bottom??0),S=st({data:m,width:y,height:p,iterations:v,nodeWidth:f,nodePadding:g,sort:b,verticalAlign:A,align:B}),Q=x.top||0,Z=x.left||0,be=S.links.map((W,q)=>yt({link:W,nodes:S.nodes,i:q,top:Q,left:Z,linkContent:a,linkCurvature:T})).filter(Oe),xe=S.nodes.map((W,q)=>kt({node:W,nodeContent:o,i:q,top:Q,left:Z}));return{nodes:S.nodes,links:S.links,modifiedLinks:be,modifiedNodes:xe}},[m,N,C,x,v,f,g,b,a,o,T,B,A]),U=h.useCallback((y,p,S)=>{c&&c(y,p,S)},[c]),H=h.useCallback((y,p,S)=>{l&&l(y,p,S)},[l]),J=h.useCallback((y,p,S)=>{d&&d(y,p,S)},[d]);return!ee(N)||!ee(C)||!m||!m.links||!m.nodes?null:h.createElement(h.Fragment,null,h.createElement(Ge,{computedData:{links:_,nodes:K}}),h.createElement(we,{...ve,width:N,height:C},r,h.createElement(ft,{graphicalItemId:n,links:Se,modifiedLinks:_,linkContent:a,dataKey:u,onMouseEnter:(y,p)=>U(y,"link",p),onMouseLeave:(y,p)=>H(y,"link",p),onClick:(y,p)=>J(y,"link",p)}),h.createElement(St,{graphicalItemId:n,modifiedNodes:K,nodeContent:o,dataKey:u,onMouseEnter:(y,p)=>U(y,"node",p),onMouseLeave:(y,p)=>H(y,"node",p),onClick:(y,p)=>J(y,"node",p)})))}function E(e){const t=Xe(e,bt),{width:s,height:r,style:n,className:i,id:a,throttleDelay:u,throttledEvents:o}=t,[c,l]=h.useState(null);return h.createElement(Ie,{preloadedState:{options:dt},reduxStoreName:i??"Sankey"},h.createElement(Te,{width:s,height:r}),h.createElement(Ve,{margin:t.margin}),h.createElement(De,{throttleDelay:u,throttledEvents:o}),h.createElement(Re,{className:i,style:n,width:s,height:r,responsive:!1,ref:d=>{d&&!c&&l(d)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},h.createElement($e.Provider,{value:c},h.createElement(We,{id:a,type:"sankey"},d=>h.createElement(h.Fragment,null,h.createElement(mt,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:d}),h.createElement(xt,{...t,id:d}))))))}E.displayName="Sankey";try{E.displayName="Sankey",E.__docgenInfo={description:`Flow diagram in which the width of the arrows is proportional to the flow rate.
It is typically used to visualize energy or material or cost transfers between processes.`,displayName:"Sankey",filePath:"/__w/recharts/recharts/src/chart/Sankey.tsx",methods:[],props:{nameKey:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",name:"nameKey",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{defaultValue:"name"},type:{name:"string | number | ((obj: any) => any)"}},dataKey:{defaultValue:{value:"'value'"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,name:"dataKey",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"'value'"},type:{name:"string | number | ((obj: any) => any)"}},width:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`The width of chart container.
Can be a number or a percent string like "100%".`,name:"width",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{see:"{@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}"},type:{name:"number | `${number}%`"}},height:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`The height of chart container.
Can be a number or a percent string like "100%".`,name:"height",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{see:"{@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}"},type:{name:"number | `${number}%`"}},data:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,name:"data",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!0,tags:{example:`nodes: [
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
],`},type:{name:"SankeyData"}},nodePadding:{defaultValue:{value:"10"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The padding between the nodes",name:"nodePadding",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"10"},type:{name:"number"}},nodeWidth:{defaultValue:{value:"10"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The width of node",name:"nodeWidth",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"10"},type:{name:"number"}},linkCurvature:{defaultValue:{value:"0.5"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The curvature of width",name:"linkCurvature",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"0.5"},type:{name:"number"}},iterations:{defaultValue:{value:"32"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The number of the iterations between the links",name:"iterations",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"32"},type:{name:"number"}},node:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,name:"node",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{example:`<Sankey node={MyCustomComponent} />
<Sankey node={{stroke: #77c878, strokeWidth: 2}} />`},type:{name:"SankeyNodeOptions"}},link:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,name:"link",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{example:`<Sankey link={MyCustomComponent} />
<Sankey link={{ fill: #77c878 }} />`},type:{name:"SankeyLinkOptions"}},style:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"",name:"style",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"CSSProperties"}},className:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"",name:"className",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"string"}},margin:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Empty space around the container.",name:"margin",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{defaultValue:'{"top":5,"right":5,"bottom":5,"left":5}'},type:{name:"Partial<Margin>"}},onClick:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The customized event handler of click on the area in this group",name:"onClick",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},onMouseEnter:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The customized event handler of mouseenter on the area in this group",name:"onMouseEnter",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},onMouseLeave:{defaultValue:null,declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"The customized event handler of mouseleave on the area in this group",name:"onMouseLeave",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{},type:{name:"((item: NodeProps | LinkProps, type: SankeyElementType, e: MouseEvent<SVGGraphicsElement, MouseEvent>) => void)"}},sort:{defaultValue:{value:"true"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",name:"sort",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"true"},type:{name:"boolean"}},verticalAlign:{defaultValue:{value:"'justify'"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",name:"verticalAlign",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"'justify'"},type:{name:"enum",raw:"SankeyVerticalAlign",value:[{value:'"top"'},{value:'"justify"'}]}},align:{defaultValue:{value:"'justify'"},declarations:[{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"}],description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",name:"align",parent:{fileName:"recharts/src/chart/Sankey.tsx",name:"SankeyProps"},required:!1,tags:{default:"'justify'"},type:{name:"enum",raw:'"left" | "justify"',value:[{value:'"left"'},{value:'"justify"'}]}},throttleDelay:{defaultValue:null,declarations:[{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"}],description:"Decides the time interval to throttle events.\nOnly events defined in `throttledEvents` prop are throttled.\nAll other events are executed immediately/synchronously.\n\nOptions:\n- `number`: the time interval in milliseconds\n- `'raf'`: use requestAnimationFrame to schedule updates.",name:"throttleDelay",parent:{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"},required:!1,tags:{defaultValue:"'raf'"},type:{name:'number | "raf"'}},throttledEvents:{defaultValue:null,declarations:[{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"}],description:`Defines which events should be throttled.
Events not in this list will not be throttled.

Use the special value \`'all'\` to throttle all events. Empty array means no events are throttled.

Use the prop \`throttleDelay\` to define the throttling interval.

If an event is on this list, then you lose the opportunity to access the event synchronously.
Which means that if you want to call \`e.preventDefault()\` or \`e.stopPropagation()\` inside the event handler,
then that event handler must not be in this list.`,name:"throttledEvents",parent:{fileName:"recharts/src/util/types.ts",name:"EventThrottlingProps"},required:!1,tags:{defaultValue:'["mousemove","touchmove","pointermove","scroll","wheel"]'},type:{name:'"all" | readonly (keyof GlobalEventHandlersEventMap)[]'}}},tags:{consumes:"ResponsiveContainerContext",provides:"TooltipEntrySettings"}}}catch{}const D={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:291741},{source:2,target:4,value:62429}]},ae={nodes:[{name:"Income"},{name:"Budget"},{name:"Investment"},{name:"Real Estate"},{name:"Crypto"},{name:"Stocks & Funds"},{name:"Saving"},{name:"Scpi"},{name:"BTC"},{name:"ETH"},{name:"SOL"},{name:"Housing"},{name:"Food"},{name:"Rent"},{name:"Utility"},{name:"Mortgage"},{name:"Groceries"},{name:"Delivery"},{name:"Restaurant"}],links:[{source:0,target:1,value:8500},{source:1,target:2,value:2300},{source:1,target:3,value:400},{source:1,target:4,value:1250},{source:2,target:5,value:1800},{source:2,target:6,value:500},{source:3,target:7,value:400},{source:4,target:8,value:500},{source:4,target:9,value:500},{source:4,target:10,value:250},{source:1,target:11,value:3384},{source:1,target:12,value:800},{source:11,target:13,value:1234},{source:11,target:14,value:150},{source:11,target:15,value:2e3},{source:12,target:16,value:450},{source:12,target:17,value:200},{source:12,target:18,value:150}]},$={align:{description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",table:{type:{summary:'"justify" | "left"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},data:{description:`The source data, including the array of nodes, and the relationships, represented by links.

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
Can be a number or a percent string like "100%".`,table:{type:{summary:"`${number}%` | number"},category:"General"}}},rn={argTypes:$,component:E},V={name:"Simple",render:e=>k.createElement(Y,{width:"100%",height:400},k.createElement(E,{data:D,...e},k.createElement(Ye,null))),args:{...O($),data:D}},M={render:e=>k.createElement(Y,{width:"100%",height:400},k.createElement(E,{data:D,...e})),args:{...O($),data:D,nodeWidth:10,nodePadding:60,height:500,width:960}},j={render:e=>{const t=["#3C898E","#486DF0","#6F50E5"],s=n=>k.createElement("rect",{x:n.x+4,y:n.y-2,width:n.width-8,height:n.height+4,fill:t[n.payload.depth%t.length],rx:2.5}),r=n=>k.createElement("g",null,k.createElement("path",{d:`
  M${n.sourceX},${n.sourceY}
  C${n.sourceControlX},${n.sourceY} ${n.targetControlX},${n.targetY} ${n.targetX},${n.targetY}`,fill:"none",stroke:t[n.payload.source.depth%t.length],strokeOpacity:.4,strokeWidth:n.linkWidth,strokeLinecap:"butt"}),k.createElement("foreignObject",{x:n.sourceX,y:n.targetY-n.linkWidth/2,width:Math.max(n.targetX,n.sourceX)-Math.min(n.targetX,n.sourceX),height:n.linkWidth,style:{overflow:"visible"}},k.createElement("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",height:"100%",overflow:"visible",padding:"0.5em",gap:8}},k.createElement("div",{style:{fontSize:10,fontFamily:"sans-serif",textAlign:"center",backgroundColor:"#f1f5fe80",padding:"0.25em 0.5em",borderRadius:4,position:"relative",zIndex:1}},n.payload.target.name?`${n.payload.target.name}: `:"",n.payload.value," €"))));return k.createElement(Y,{width:"100%",height:400},k.createElement(E,{data:ae,node:s,link:r,...e}))},args:{...O($),data:ae,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}};var re,oe,se;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,le,ce;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(le=M.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,me;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(de=j.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const on=["API","Customized","CustomNodeAndLink"];export{V as API,j as CustomNodeAndLink,M as Customized,on as __namedExportsOrder,rn as default};
