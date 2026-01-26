import{q as xe,r as h,t as we,n as Le,p as Ne,e as g}from"./iframe-Byw-Ecda.js";import{g as G}from"./utils-ePvtT4un.js";import{m as Te}from"./maxBy-Drn2QsqQ.js";import{r as Re}from"./iteratee-CQ84vpct.js";import{Z as Ie,_ as je,e as Me,f as Ve,i as te,S as Pe,q as L,u as ye,R as q}from"./arrayEqualityCheck-DJZ_H245.js";import{L as P}from"./Layer-BCc3Ql-7.js";import{R as De}from"./Rectangle-Cx7cLZFF.js";import{R as $e,G as Ae,T as We}from"./RechartsWrapper-CyPBoUJ2.js";import{t as fe,q as ge,p as pe}from"./hooks-CRVJYPCv.js";import{R as Xe,S as Oe}from"./RegisterGraphicalItemId-Cpx6qHuO.js";import{S as Ye}from"./chartDataContext-BewYwNuI.js";import{r as Fe,b as _,a as ke}from"./resolveDefaultProps-DghbljUc.js";import{T as Ge}from"./Tooltip-BRMvzK7Q.js";import{R as K}from"./RechartsHookInspector-DU_Xges7.js";var O={},ne;function qe(){return ne||(ne=1,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const t=Re();function i(o,n){if(!o||!o.length)return 0;n!=null&&(n=t.iteratee(n));let s;for(let a=0;a<o.length;a++){const c=n?n(o[a]):o[a];c!==void 0&&(s===void 0?s=c:s+=c)}return s}e.sumBy=i}(O)),O}var Y,ae;function _e(){return ae||(ae=1,Y=qe().sumBy),Y}var Ke=_e();const Be=xe(Ke),ze=(e,t)=>{const i=+e,o=t-i;return n=>i+o*n},D=e=>e.y+e.dy/2,I=e=>e&&e.value||0,M=(e,t)=>t.reduce((i,o)=>i+I(e[o]),0),He=(e,t,i)=>i.reduce((o,n)=>{const s=t[n];if(s==null)return o;const a=e[s.source];return a==null?o:o+D(a)*I(t[n])},0),Ue=(e,t,i)=>i.reduce((o,n)=>{const s=t[n];if(s==null)return o;const a=e[s.target];return a==null?o:o+D(a)*I(t[n])},0),Ze=(e,t)=>e.y-t.y,Je=(e,t)=>{const i=[],o=[],n=[],s=[];for(let a=0,c=e.length;a<c;a++){const r=e[a];(r==null?void 0:r.source)===t&&(n.push(r.target),s.push(a)),(r==null?void 0:r.target)===t&&(i.push(r.source),o.push(a))}return{sourceNodes:i,sourceLinks:o,targetLinks:s,targetNodes:n}},ve=(e,t)=>{const{targetNodes:i}=t;for(let o=0,n=i.length;o<n;o++){const s=i[o];if(s==null)continue;const a=e[s];a&&(a.depth=Math.max(t.depth+1,a.depth),ve(e,a))}},Qe=({nodes:e,links:t},i,o,n)=>{var c;const s=e.map((r,l)=>{const u=Je(t,l);return{...r,...u,value:Math.max(M(t,u.sourceLinks),M(t,u.targetLinks)),depth:0}});for(let r=0,l=s.length;r<l;r++){const u=s[r];u!=null&&!u.sourceNodes.length&&ve(s,u)}const a=((c=Te(s,r=>r.depth))==null?void 0:c.depth)??0;if(a>=1){const r=(i-o)/a;for(let l=0,u=s.length;l<u;l++){const d=s[l];d!=null&&(d.targetNodes.length||n==="justify"&&(d.depth=a),d.x=d.depth*r,d.dx=o)}}return{tree:s,maxDepth:a}},et=e=>{var i;const t=[];for(let o=0,n=e.length;o<n;o++){const s=e[o];s!=null&&(t[s.depth]||(t[s.depth]=[]),(i=t[s.depth])==null||i.push(s))}return t},tt=(e,t,i,o,n)=>{const s=Math.min(...e.map(a=>(t-(a.length-1)*i)/Be(a,I)));for(let a=0,c=e.length;a<c;a++){const r=e[a];if(r!=null)if(n==="top"){let l=0;for(let u=0,d=r.length;u<d;u++){const m=r[u];m!=null&&(m.dy=m.value*s,m.y=l,l+=m.dy+i)}}else for(let l=0,u=r.length;l<u;l++){const d=r[l];d!=null&&(d.y=l,d.dy=d.value*s)}}return o.map(a=>({...a,dy:I(a)*s}))},F=(e,t,i,o=!0)=>{for(let n=0,s=e.length;n<s;n++){const a=e[n];if(a==null)continue;const c=a.length;o&&a.sort(Ze);let r=0;for(let l=0;l<c;l++){const u=a[l];if(u==null)continue;const d=r-u.y;d>0&&(u.y+=d),r=u.y+u.dy+i}r=t+i;for(let l=c-1;l>=0;l--){const u=a[l];if(u==null)continue;const d=u.y+u.dy+i-r;if(d>0)u.y-=d,r=u.y;else break}}},nt=(e,t,i,o)=>{for(let n=0,s=t.length;n<s;n++){const a=t[n];if(a!=null)for(let c=0,r=a.length;c<r;c++){const l=a[c];if(l!=null&&l.sourceLinks.length){const u=M(i,l.sourceLinks),m=He(e,i,l.sourceLinks)/u;l.y+=(m-D(l))*o}}}},at=(e,t,i,o)=>{for(let n=t.length-1;n>=0;n--){const s=t[n];if(s!=null)for(let a=0,c=s.length;a<c;a++){const r=s[a];if(r!=null&&r.targetLinks.length){const l=M(i,r.targetLinks),d=Ue(e,i,r.targetLinks)/l;r.y+=(d-D(r))*o}}}},ot=(e,t)=>{for(let i=0,o=e.length;i<o;i++){const n=e[i];if(n==null)continue;let s=0,a=0;n.targetLinks.sort((c,r)=>{var v,p,k,S;const l=(v=t[c])==null?void 0:v.target,u=(p=t[r])==null?void 0:p.target;if(l==null||u==null)return 0;const d=(k=e[l])==null?void 0:k.y,m=(S=e[u])==null?void 0:S.y;return d==null||m==null?0:d-m}),n.sourceLinks.sort((c,r)=>{var v,p,k,S;const l=(v=t[c])==null?void 0:v.source,u=(p=t[r])==null?void 0:p.source;if(l==null||u==null)return 0;const d=(k=e[l])==null?void 0:k.y,m=(S=e[u])==null?void 0:S.y;return d==null||m==null?0:d-m});for(let c=0,r=n.targetLinks.length;c<r;c++){const l=n.targetLinks[c];if(l==null)continue;const u=t[l];u&&(u.sy=s,s+=u.dy)}for(let c=0,r=n.sourceLinks.length;c<r;c++){const l=n.sourceLinks[c];if(l==null)continue;const u=t[l];u&&(u.ty=a,a+=u.dy)}}},rt=({data:e,width:t,height:i,iterations:o,nodeWidth:n,nodePadding:s,sort:a,verticalAlign:c,align:r})=>{const{links:l}=e,{tree:u}=Qe(e,t,n,r),d=et(u),m=tt(d,i,s,l,c);if(F(d,i,s,a),c==="justify"){let p=1;for(let k=1;k<=o;k++)at(u,d,m,p*=.99),F(d,i,s,a),nt(u,d,m,p),F(d,i,s,a)}return ot(u,m),{nodes:u,links:m}},st=e=>({x:+e.x+ +e.width/2,y:+e.y+ +e.height/2}),it=e=>"sourceX"in e?{x:(e.sourceX+e.targetX)/2,y:(e.sourceY+e.targetY)/2}:void 0,lt=(e,t,i)=>{const{payload:o}=e;if(t==="node")return{payload:o,name:L(o,i,""),value:L(o,"value")};if("source"in o&&o.source&&o.target){const n=L(o.source,i,""),s=L(o.target,i,"");return{payload:o,name:`${n} - ${s}`,value:L(o,"value")}}},ut=(e,t,i,o)=>{if(t==null||typeof t!="string"||i==null||typeof i!="object")return;const n=t.split("-"),[s,a]=n,c=we(i,`${s}s[${a}]`);if(c)return lt(c,s,o)},ct={chartName:"Sankey",defaultTooltipEventType:"item",validateTooltipEventTypes:["item"],tooltipPayloadSearcher:ut,eventEmitter:void 0},dt=h.memo(({dataKey:e,nameKey:t,stroke:i,strokeWidth:o,fill:n,name:s,data:a,id:c})=>{const r={dataDefinedOnItem:a,getPosition:Le,settings:{stroke:i,strokeWidth:o,fill:n,dataKey:e,name:s,nameKey:t,hide:!1,type:void 0,color:n,unit:"",graphicalItemId:c}};return h.createElement(Oe,{tooltipEntrySettings:r})});function mt(e,t){if(h.isValidElement(e))return h.cloneElement(e,t);if(typeof e=="function")return e(t);const{sourceX:i,sourceY:o,sourceControlX:n,targetX:s,targetY:a,targetControlX:c,linkWidth:r,...l}=t;return h.createElement("path",{className:"recharts-sankey-link",d:`
          M${i},${o}
          C${n},${o} ${c},${a} ${s},${a}
        `,fill:"none",stroke:"#333",strokeWidth:r,strokeOpacity:"0.2",..._(l)})}const ht=({link:e,nodes:t,left:i,top:o,i:n,linkContent:s,linkCurvature:a})=>{const{sy:c,ty:r,dy:l}=e,u=t[e.source],d=t[e.target];if(u==null||d==null)return;const m=u.x+u.dx+i,v=d.x+i,p=ze(m,v),k=p(a),S=p(1-a),j=u.y+c+l/2+o,C=d.y+r+l/2+o;return{sourceX:m,targetX:v,sourceY:j,targetY:C,sourceControlX:k,targetControlX:S,sourceRelativeY:c,targetRelativeY:r,linkWidth:l,index:n,payload:{...e,source:u,target:d},...ke(s)}};function yt({graphicalItemId:e,props:t,i,linkContent:o,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c}){const r=it(t),l=`link-${i}`,u=ye(),d={onMouseEnter:m=>{u(pe({activeIndex:l,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{u(ge()),s(t,m)},onClick:m=>{u(fe({activeIndex:l,activeDataKey:c,activeCoordinate:r,activeGraphicalItemId:e})),a(t,m)}};return h.createElement(P,{...d},mt(o,t))}function ft({graphicalItemId:e,modifiedLinks:t,links:i,linkContent:o,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c}){return h.createElement(P,{className:"recharts-sankey-links",key:"recharts-sankey-links"},i.map((r,l)=>{const u=t[l];return u==null?null:h.createElement(yt,{graphicalItemId:e,key:`link-${r.source}-${r.target}-${r.value}`,props:u,linkContent:o,i:l,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c})}))}function gt(e,t){return h.isValidElement(e)?h.cloneElement(e,t):typeof e=="function"?e(t):h.createElement(De,{className:"recharts-sankey-node",fill:"#0088fe",fillOpacity:"0.8",..._(t)})}const pt=({node:e,nodeContent:t,top:i,left:o,i:n})=>{const{x:s,y:a,dx:c,dy:r}=e;return{...ke(t),x:s+o,y:a+i,width:c,height:r,index:n,payload:e}};function kt({graphicalItemId:e,props:t,nodeContent:i,i:o,onMouseEnter:n,onMouseLeave:s,onClick:a,dataKey:c}){const r=ye(),l=st(t),u=`node-${o}`,d={onMouseEnter:m=>{r(pe({activeIndex:u,activeDataKey:c,activeCoordinate:l,activeGraphicalItemId:e})),n(t,m)},onMouseLeave:m=>{r(ge()),s(t,m)},onClick:m=>{r(fe({activeIndex:u,activeDataKey:c,activeCoordinate:l,activeGraphicalItemId:e})),a(t,m)}};return h.createElement(P,{...d},gt(i,t))}function vt({graphicalItemId:e,modifiedNodes:t,nodeContent:i,onMouseEnter:o,onMouseLeave:n,onClick:s,dataKey:a}){return h.createElement(P,{className:"recharts-sankey-nodes",key:"recharts-sankey-nodes"},t.map((c,r)=>h.createElement(kt,{graphicalItemId:e,key:`node-${c.index}-${c.x}-${c.y}`,props:c,nodeContent:i,i:r,onMouseEnter:o,onMouseLeave:n,onClick:s,dataKey:a})))}const bt={align:"justify",dataKey:"value",iterations:32,linkCurvature:.5,margin:{top:5,right:5,bottom:5,left:5},nameKey:"name",nodePadding:10,nodeWidth:10,sort:!0,verticalAlign:"justify"};function St(e){const{className:t,style:i,children:o,id:n,...s}=e,{link:a,dataKey:c,node:r,onMouseEnter:l,onMouseLeave:u,onClick:d,data:m,iterations:v,nodeWidth:p,nodePadding:k,sort:S,linkCurvature:j,margin:C,verticalAlign:A,align:B}=e,be=_(s),x=Me(),w=Ve(),{links:Se,modifiedLinks:z,modifiedNodes:H}=h.useMemo(()=>{if(!m||!x||!w||x<=0||w<=0)return{nodes:[],links:[],modifiedLinks:[],modifiedNodes:[]};const y=x-(C.left??0)-(C.right??0),f=w-(C.top??0)-(C.bottom??0),b=rt({data:m,width:y,height:f,iterations:v,nodeWidth:p,nodePadding:k,sort:S,verticalAlign:A,align:B}),Q=C.top||0,ee=C.left||0,Ce=b.links.map((W,X)=>ht({link:W,nodes:b.nodes,i:X,top:Q,left:ee,linkContent:a,linkCurvature:j})).filter(Ne),Ee=b.nodes.map((W,X)=>pt({node:W,nodeContent:r,i:X,top:Q,left:ee}));return{nodes:b.nodes,links:b.links,modifiedLinks:Ce,modifiedNodes:Ee}},[m,x,w,C,v,p,k,S,a,r,j,B,A]),U=h.useCallback((y,f,b)=>{l&&l(y,f,b)},[l]),Z=h.useCallback((y,f,b)=>{u&&u(y,f,b)},[u]),J=h.useCallback((y,f,b)=>{d&&d(y,f,b)},[d]);return!te(x)||!te(w)||!m||!m.links||!m.nodes?null:h.createElement(h.Fragment,null,h.createElement(Ye,{computedData:{links:z,nodes:H}}),h.createElement(Pe,{...be,width:x,height:w},o,h.createElement(ft,{graphicalItemId:n,links:Se,modifiedLinks:z,linkContent:a,dataKey:c,onMouseEnter:(y,f)=>U(y,"link",f),onMouseLeave:(y,f)=>Z(y,"link",f),onClick:(y,f)=>J(y,"link",f)}),h.createElement(vt,{graphicalItemId:n,modifiedNodes:H,nodeContent:r,dataKey:c,onMouseEnter:(y,f)=>U(y,"node",f),onMouseLeave:(y,f)=>Z(y,"node",f),onClick:(y,f)=>J(y,"node",f)})))}function E(e){const t=Fe(e,bt),{width:i,height:o,style:n,className:s,id:a}=t,[c,r]=h.useState(null);return h.createElement($e,{preloadedState:{options:ct},reduxStoreName:s??"Sankey"},h.createElement(Ie,{width:i,height:o}),h.createElement(je,{margin:t.margin}),h.createElement(Ae,{className:s,style:n,width:i,height:o,responsive:!1,ref:l=>{l&&!c&&r(l)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},h.createElement(We.Provider,{value:c},h.createElement(Xe,{id:a,type:"sankey"},l=>h.createElement(h.Fragment,null,h.createElement(dt,{dataKey:t.dataKey,nameKey:t.nameKey,stroke:t.stroke,strokeWidth:t.strokeWidth,fill:t.fill,name:t.name,data:t.data,id:l}),h.createElement(St,{...t,id:l}))))))}E.displayName="Sankey";try{E.displayName="Sankey",E.__docgenInfo={description:`Flow diagram in which the width of the arrows is proportional to the flow rate.
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
@defaultValue {"top":5,"right":5,"bottom":5,"left":5}`,name:"margin",required:!1,type:{name:"Partial<Margin>"}},sort:{defaultValue:{value:"true"},description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",name:"sort",required:!1,type:{name:"boolean"}},verticalAlign:{defaultValue:{value:"'justify'"},description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"justify"'}]}},align:{defaultValue:{value:"'justify'"},description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"justify"'}]}}}}}catch{}const V={nodes:[{name:"Visit"},{name:"Direct-Favourite"},{name:"Page-Click"},{name:"Detail-Favourite"},{name:"Lost"}],links:[{source:0,target:1,value:3728.3},{source:0,target:2,value:354170},{source:2,target:3,value:291741},{source:2,target:4,value:62429}]},oe={nodes:[{name:"Income"},{name:"Budget"},{name:"Investment"},{name:"Real Estate"},{name:"Crypto"},{name:"Stocks & Funds"},{name:"Saving"},{name:"Scpi"},{name:"BTC"},{name:"ETH"},{name:"SOL"},{name:"Housing"},{name:"Food"},{name:"Rent"},{name:"Utility"},{name:"Mortgage"},{name:"Groceries"},{name:"Delivery"},{name:"Restaurant"}],links:[{source:0,target:1,value:8500},{source:1,target:2,value:2300},{source:1,target:3,value:400},{source:1,target:4,value:1250},{source:2,target:5,value:1800},{source:2,target:6,value:500},{source:3,target:7,value:400},{source:4,target:8,value:500},{source:4,target:9,value:500},{source:4,target:10,value:250},{source:1,target:11,value:3384},{source:1,target:12,value:800},{source:11,target:13,value:1234},{source:11,target:14,value:150},{source:11,target:15,value:2e3},{source:12,target:16,value:450},{source:12,target:17,value:200},{source:12,target:18,value:150}]},$={align:{description:"If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.",table:{type:{summary:'"justify" | "left"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},children:{table:{type:{summary:"ReactNode"},category:"General"}},className:{control:{type:"text"},table:{type:{summary:"string"},category:"Style"}},data:{description:`The source data, including the array of nodes, and the relationships, represented by links.

Note that Sankey requires a specific data structure.
Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
This is different from other chart types in Recharts, which accept arbitrary data.`,table:{type:{summary:"SankeyData"},category:"General"}},dataKey:{description:`dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.

Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
the value of each link is directly taken from the 'value' property of the link objects.`,table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"value"}},defaultValue:"value"},height:{description:`The height of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"number | string"},category:"General"}},iterations:{description:"The number of the iterations between the links",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"32"}},defaultValue:32},link:{description:`If set an object, the option is the configuration of links.
If set a React element, the option is the custom react element of drawing the links.`,table:{type:{summary:"Function | React.SVGProps<SVGPathElement> | ReactNode"},category:"General"}},linkCurvature:{description:"The curvature of width",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"0.5"}},defaultValue:.5},margin:{description:"Empty space around the container.",table:{type:{summary:"Partial<Margin>"},category:"General",defaultValue:{summary:'{"top":5,"right":5,"bottom":5,"left":5}'}},defaultValue:{top:5,right:5,bottom:5,left:5}},nameKey:{description:"Name represents each sector in the tooltip.\nThis allows you to extract the name from the data:\n\n- `string`: the name of the field in the data object;\n- `number`: the index of the field in the data;\n- `function`: a function that receives the data object and returns the name.",table:{type:{summary:"Function | number | string"},category:"General",defaultValue:{summary:"name"}},defaultValue:"name"},node:{description:`If set an object, the option is the configuration of nodes.
If set a React element, the option is the custom react element of drawing the nodes.`,table:{type:{summary:"Function | Props | ReactNode"},category:"General"}},nodePadding:{description:"The padding between the nodes",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},nodeWidth:{description:"The width of node",control:{type:"number"},table:{type:{summary:"number"},category:"General",defaultValue:{summary:"10"}},defaultValue:10},onClick:{description:"The customized event handler of click on the area in this group",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseEnter:{description:"The customized event handler of mouseenter on the area in this group",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},onMouseLeave:{description:"The customized event handler of mouseleave on the area in this group",table:{type:{summary:"React.MouseEventHandler<T>"},category:"Events"}},sort:{description:"Whether to sort the nodes on the y axis, or to display them as user-defined.",control:{type:"boolean"},table:{type:{summary:"boolean"},category:"General",defaultValue:{summary:"true"}},defaultValue:!0},style:{table:{type:{summary:"React.CSSProperties"},category:"Style"}},verticalAlign:{description:"Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.",table:{type:{summary:'"justify" | "top"'},category:"General",defaultValue:{summary:"justify"}},defaultValue:"justify"},width:{description:`The width of chart container.
Can be a number or a percent string like "100%".`,table:{type:{summary:"number | string"},category:"General"}}},Ct={argTypes:$,component:E},N={name:"Simple",render:e=>g.createElement(q,{width:"100%",height:400},g.createElement(E,{data:V,...e},g.createElement(Ge,null),g.createElement(K,null))),args:{...G($),data:V}},T={render:e=>g.createElement(q,{width:"100%",height:400},g.createElement(E,{data:V,...e},g.createElement(K,null))),args:{...G($),data:V,nodeWidth:10,nodePadding:60,height:500,width:960}},R={render:e=>{const t=["#3C898E","#486DF0","#6F50E5"],i=n=>g.createElement("rect",{x:n.x+4,y:n.y-2,width:n.width-8,height:n.height+4,fill:t[n.payload.depth%t.length],rx:2.5}),o=n=>g.createElement("g",null,g.createElement("path",{d:`
  M${n.sourceX},${n.sourceY}
  C${n.sourceControlX},${n.sourceY} ${n.targetControlX},${n.targetY} ${n.targetX},${n.targetY}`,fill:"none",stroke:t[n.payload.source.depth%t.length],strokeOpacity:.4,strokeWidth:n.linkWidth,strokeLinecap:"butt"}),g.createElement("foreignObject",{x:n.sourceX,y:n.targetY-n.linkWidth/2,width:Math.max(n.targetX,n.sourceX)-Math.min(n.targetX,n.sourceX),height:n.linkWidth,style:{overflow:"visible"}},g.createElement("div",{style:{boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"flex-end",width:"100%",height:"100%",overflow:"visible",padding:"0.5em",gap:8}},g.createElement("div",{style:{fontSize:10,fontFamily:"sans-serif",textAlign:"center",backgroundColor:"#f1f5fe80",padding:"0.25em 0.5em",borderRadius:4,position:"relative",zIndex:1}},n.payload.target.name?`${n.payload.target.name}: `:"",n.payload.value," €"))));return g.createElement(q,{width:"100%",height:400},g.createElement(E,{data:oe,node:i,link:o,...e},g.createElement(K,null)))},args:{...G($),data:oe,nodeWidth:16,nodePadding:14,height:500,width:960,sort:!1,margin:{top:20,left:20,right:20,bottom:20}}};var re,se,ie;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ce=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,me,he;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(me=R.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Et=["API","Customized","CustomNodeAndLink"],Wt=Object.freeze(Object.defineProperty({__proto__:null,API:N,CustomNodeAndLink:R,Customized:T,__namedExportsOrder:Et,default:Ct},Symbol.toStringTag,{value:"Module"}));export{N as A,Wt as C};
