import{e,r as C}from"./iframe-Cr3T7ZdA.js";import{g as m}from"./utils-ePvtT4un.js";import{B as i}from"./BarChartProps-B4M8xBK1.js";import{B as l}from"./BarChart-Cf3FDQbX.js";import{R as y}from"./arrayEqualityCheck-DqF1T4jr.js";import{C as g}from"./CartesianGrid-BmfMprKw.js";import{X as u}from"./XAxis-DBNHDh11.js";import{Y as c}from"./YAxis-D1E5tbtq.js";import{L as b}from"./Legend-C40qRgVH.js";import{T as p}from"./Tooltip-Bv5lo6sl.js";import{B as a}from"./Bar-hcWSqP9i.js";import{R as _}from"./Rectangle-DrfuL_Gq.js";import{R as h}from"./RechartsHookInspector-ClBCFl3l.js";import{E as At}from"./ErrorBar-J4ekkEm_.js";import{C as Et}from"./tooltipContext-BC9AwLMx.js";import{R as q}from"./ReferenceLine-DxupMds8.js";import{B as Z}from"./Brush-Dr4qyJNl.js";import{L as ee}from"./ReactUtils-DZO-5FXB.js";import{p as k,r as Bt}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartProps-Cvo8vJEE.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-Cofc_HNc.js";import"./hooks-jzijfY0b.js";import"./axisSelectors-DxNzAaef.js";import"./zIndexSlice-DMIprIZ-.js";import"./resolveDefaultProps-QfAcHL3W.js";import"./PolarUtils-Bmm-pqPZ.js";import"./CartesianChart-BU0IfpuH.js";import"./chartDataContext-DYJ71PQb.js";import"./CategoricalChart-BUJ2-En9.js";import"./CartesianAxis-CSlwZ6TK.js";import"./Layer-BFmFB8To.js";import"./Text-DbGQ3XiU.js";import"./DOMUtils-zL1z85r6.js";import"./Label-DztQJaU2.js";import"./ZIndexLayer-CX1hwCrz.js";import"./types-CSmgv1ek.js";import"./Symbols-DxVRzyBt.js";import"./Curve-vdkFq02R.js";import"./useElementOffset-Cq6eEjaE.js";import"./iteratee-ZYwUAU3v.js";import"./Cross-wUbNU5eO.js";import"./Sector-CoMH23ZQ.js";import"./ActiveShapeUtils-DPbFIg-T.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BeG4Metg.js";import"./useAnimationId-2lKqmsIN.js";import"./RegisterGraphicalItemId-IPVqF7Vn.js";import"./ErrorBarContext-BW79uC4e.js";import"./GraphicalItemClipPath-ChnTD72G.js";import"./SetGraphicalItem-CtAyZH4_.js";import"./getZIndexFromUnknown-Cxj__ZvZ.js";import"./graphicalItemSelectors-CplCY1tB.js";import"./index-ClJsMHvI.js";import"./ChartSizeDimensions-BmiXy0Af.js";import"./OffsetShower-SLhoxg8F.js";import"./PlotAreaShower-CKe-EEVm.js";import"./CSSTransitionAnimate-C7oHWxyZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const Oa={argTypes:i,component:l,docs:{autodocs:!1}},B={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,null),e.createElement(p,{defaultIndex:3}),e.createElement(a,{dataKey:"pv",fill:"#8884d8",activeBar:e.createElement(_,{fill:"pink",stroke:"blue"})}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d",activeBar:e.createElement(_,{fill:"gold",stroke:"purple"})}),e.createElement(h,null))),args:{...m(i),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:k}},D={render:t=>{const[n,s]=C.useState(null),[o,r]=C.useState(!1),d=v=>{o||s(String(v.dataKey))},f=()=>{o||s(null)},E=v=>{n===String(v.dataKey)?o?(s(null),r(!1)):r(!0):(s(String(v.dataKey)),r(!0))};return e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,{onMouseEnter:d,onMouseOut:f,onClick:E}),e.createElement(a,{hide:n!=null&&n!=="pv",dataKey:"pv",stackId:"a",fill:"#8884d8",activeBar:{fill:"gold"}}),e.createElement(a,{hide:n!=null&&n!=="uv",dataKey:"uv",stackId:"a",fill:"#82ca9d",activeBar:{fill:"silver"}}),e.createElement(p,{shared:!1,defaultIndex:1}),e.createElement(h,null)))},args:{...m(i),width:500,height:300,data:k,margin:{top:20,right:30,left:20,bottom:5}}},Dt=k.map(t=>({...t,pvError:[100,200]})),x={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{type:"number"}),e.createElement(c,{dataKey:"name",type:"category"}),e.createElement(b,null),e.createElement(p,null),e.createElement(a,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),e.createElement(a,{dataKey:"uv",stackId:"a",fill:"#82ca9d"},e.createElement(At,{dataKey:"pvError",width:5,stroke:"red",direction:"x"})),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:Dt,margin:{top:20,right:30,left:20,bottom:5},layout:"vertical"}},S={render:t=>{const[n,s]=C.useState(null),[o,r]=C.useState(!1),d=v=>{o||s(String(v.dataKey))},f=()=>{o||s(null)},E=v=>{n===String(v.dataKey)?o?(s(null),r(!1)):r(!0):(s(String(v.dataKey)),r(!0))};return e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,{onMouseEnter:d,onMouseOut:f,onClick:E}),e.createElement(p,null),e.createElement(a,{dataKey:"pv",stackId:"a",fill:n==null||n==="pv"?"#8884d8":"#eee"}),e.createElement(a,{dataKey:"amt",stackId:"a",fill:n==null||n==="amt"?"#82ca9d":"#eee"}),e.createElement(a,{dataKey:"uv",fill:n==null||n==="uv"?"#ffc658":"#eee"}),e.createElement(h,null)))},args:{...m(i),width:500,height:300,data:k,margin:{top:20,right:30,left:20,bottom:5}}},w={render:t=>{const n=(r,d,f,E)=>`M${r},${d+E}C${r+f/3},${d+E} ${r+f/2},${d+E/3}
  ${r+f/2}, ${d}
  C${r+f/2},${d+E/3} ${r+2*f/3},${d+E} ${r+f}, ${d+E}
  Z`,s=r=>{const{fill:d,x:f,y:E,width:v,height:K}=r;return e.createElement("path",{d:n(f,E,v,K),stroke:"none",fill:d})},o=["#0088FE","#00C49F","#FFBB28","#FF8042","red","pink"];return e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(p,null),e.createElement(a,{dataKey:"uv",fill:"#8884d8",shape:e.createElement(s,null),label:{position:"top"}},k.map(({name:r},d)=>e.createElement(Et,{key:`cell-${r}`,fill:o[d%20]}))),e.createElement(h,null))},args:{...m(i),width:500,height:300,data:k,margin:{top:20,right:30,left:20,bottom:5}}},kt=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:-3e3,pv:1398,amt:2210},{name:"Page C",uv:-2e3,pv:-9800,amt:2290},{name:"Page D",uv:2780,pv:3908,amt:2e3},{name:"Page E",uv:-1890,pv:4800,amt:2181},{name:"Page F",uv:2390,pv:-3800,amt:2500},{name:"Page G",uv:3490,pv:4300,amt:2100}],R={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,null),e.createElement(q,{y:0,stroke:"#000"}),e.createElement(p,null),e.createElement(a,{dataKey:"pv",fill:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:kt,margin:{top:5,right:30,left:20,bottom:5}}},bt=[{name:"1",uv:300,pv:456},{name:"2",uv:-145,pv:230},{name:"3",uv:-100,pv:345},{name:"4",uv:-8,pv:450},{name:"5",uv:100,pv:321},{name:"6",uv:9,pv:235},{name:"7",uv:53,pv:267},{name:"8",uv:252,pv:-378},{name:"9",uv:79,pv:-210},{name:"10",uv:294,pv:-23},{name:"12",uv:43,pv:45},{name:"13",uv:-74,pv:90},{name:"14",uv:-71,pv:130},{name:"15",uv:-117,pv:11},{name:"16",uv:-186,pv:107},{name:"17",uv:-16,pv:926},{name:"18",uv:-125,pv:653},{name:"19",uv:222,pv:366},{name:"20",uv:372,pv:486},{name:"21",uv:182,pv:512},{name:"22",uv:164,pv:302},{name:"23",uv:316,pv:425},{name:"24",uv:131,pv:467},{name:"25",uv:291,pv:-190},{name:"26",uv:-47,pv:194},{name:"27",uv:-415,pv:371},{name:"28",uv:-182,pv:376},{name:"29",uv:-93,pv:295},{name:"30",uv:-99,pv:322},{name:"31",uv:-52,pv:246},{name:"32",uv:154,pv:33},{name:"33",uv:205,pv:354},{name:"34",uv:70,pv:258},{name:"35",uv:-25,pv:359},{name:"36",uv:-59,pv:192},{name:"37",uv:-63,pv:464},{name:"38",uv:-91,pv:-2},{name:"39",uv:-66,pv:154},{name:"40",uv:-50,pv:186}],L={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(p,null),e.createElement(q,{y:0,stroke:"#000"}),e.createElement(Z,{dataKey:"name",height:30,stroke:"#8884d8"}),e.createElement(a,{dataKey:"pv",fill:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:bt,margin:{top:5,right:30,left:20,bottom:5}}},I={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name",tickMargin:30}),e.createElement(c,null),e.createElement(b,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(p,null),e.createElement(q,{y:0,stroke:"#000"}),e.createElement(Z,{dataKey:"name",height:30,dy:30,stroke:"#8884d8"}),e.createElement(a,{dataKey:"pv",fill:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:bt,margin:{top:5,right:30,left:20,bottom:35}}},T={render:t=>{const[n,s]=C.useState(1);return e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(a,{onClick:(o,r)=>s(r),dataKey:"uv",isAnimationActive:!1},k.map(({name:o},r)=>e.createElement(Et,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),e.createElement(h,null)))},args:{...m(i),width:500,height:300,data:k,margin:{top:20,right:20,bottom:20,left:20}}},P={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),e.createElement(p,{defaultIndex:1}),e.createElement(a,{dataKey:"pv",stackId:"a",fill:"#8884d8",activeBar:{fill:"gold"}}),e.createElement(a,{dataKey:"uv",stackId:"a",fill:"#82ca9d",activeBar:{fill:"silver"}}),e.createElement(Z,{dataKey:"name",height:30,stroke:"#8884d8"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:k,margin:{top:5,right:30,left:20,bottom:5}}},F={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,null),e.createElement(p,null),e.createElement(q,{y:0,stroke:"#000"}),e.createElement(a,{dataKey:"pv",fill:"#8884d8",stackId:"stack"}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d",stackId:"stack"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:kt,margin:{top:5,right:30,left:20,bottom:5},stackOffset:"sign"}},M={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{yAxisId:"left",strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,{yAxisId:"left",orientation:"left",stroke:"#8884d8"}),e.createElement(c,{yAxisId:"right",orientation:"right",stroke:"#82ca9d"}),e.createElement(b,null),e.createElement(p,null),e.createElement(a,{yAxisId:"left",dataKey:"pv",fill:"#8884d8"}),e.createElement(a,{yAxisId:"right",dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:k,margin:{top:20,right:30,left:20,bottom:5}}},O={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,null),e.createElement(p,null),e.createElement(a,{dataKey:"pv",fill:"#8884d8",background:{fill:"#eee"}}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:k,margin:{top:5,right:30,left:20,bottom:5}}},$={render:t=>{const n=k.map(({name:s,uv:o,pv:r})=>({name:s,uv:o,pv:r,label:o>r?"UV greater":"PV greater"}));return e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t,data:n},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(b,null),e.createElement(p,null),e.createElement(a,{dataKey:"pv",fill:"#8884d8",label:{dataKey:"label",position:"top",fill:"#111"}}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null)))},args:{...m(i),width:500,height:300,data:k,margin:{top:5,right:30,left:20,bottom:5}}},xt=[{date:"2000-01",uv:4e3,pv:2400,amt:2400},{date:"2000-02",uv:3e3,pv:1398,amt:2210},{date:"2000-03",uv:2e3,pv:9800,amt:2290},{date:"2000-04",uv:2780,pv:3908,amt:2e3},{date:"2000-05",uv:1890,pv:4800,amt:2181},{date:"2000-06",uv:2390,pv:3800,amt:2500},{date:"2000-07",uv:3490,pv:4300,amt:2100},{date:"2000-08",uv:4e3,pv:2400,amt:2400},{date:"2000-09",uv:3e3,pv:1398,amt:2210},{date:"2000-10",uv:2e3,pv:9800,amt:2290},{date:"2000-11",uv:2780,pv:3908,amt:2e3},{date:"2000-12",uv:1890,pv:4800,amt:2181}],H={render:t=>{const n=o=>new Date(o).getMonth()+1,s=o=>{const{x:r,y:d,payload:f,width:E,visibleTicksCount:v}=o,{value:K,offset:Q}=f,A=new Date(K).getMonth(),Ct=Math.floor(A/3)+1;if(A%3===1)return e.createElement("text",{x:r+E/v/2-Q,y:d-4,textAnchor:"middle"},`Q${Ct}`);const J=A===11;if(A%3===0||J){const Kt=Math.floor(J?r-Q+E/v:r-Q)+.5;return e.createElement("path",{d:`M${Kt},${d-4}v-35`,stroke:"red"})}return null};return e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"date",tickFormatter:n}),e.createElement(u,{dataKey:"date",axisLine:!1,tickLine:!1,interval:0,tick:s,height:1,scale:"band",xAxisId:"quarter"}),e.createElement(c,null),e.createElement(b,null),e.createElement(p,null),e.createElement(a,{dataKey:"pv",fill:"#8884d8"}),e.createElement(a,{dataKey:"uv",fill:"#82ca9d"}),e.createElement(h,null)))},args:{...m(i),width:500,height:300,data:xt,margin:{top:5,right:30,left:20,bottom:5}}},X={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(u,{dataKey:"name",scale:"point",padding:{left:10,right:10}}),e.createElement(c,null),e.createElement(b,null),e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(a,{dataKey:"pv",fill:"#8884d8",background:{fill:"#eee"}}),e.createElement(p,null),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:k,margin:{top:5,right:30,left:20,bottom:5},barSize:20}},St=[{name:"Page D",uv:1397,pv:0},{name:"Page E",uv:0,pv:1},{name:"Page F",uv:1520,pv:1108},{name:"Page G",uv:2,pv:680}],W={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(p,null),e.createElement(a,{dataKey:"pv",fill:"purple",minPointSize:n=>n===0?0:2,stackId:"a"}),e.createElement(a,{dataKey:"uv",fill:"green",minPointSize:n=>n===0?0:2,stackId:"a"}),e.createElement(a,{dataKey:"uv",fill:"blue",minPointSize:n=>n===0?0:2}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:St,margin:{top:5,right:30,left:20,bottom:5}}},Y={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(u,{dataKey:n=>n[0],type:"number",domain:[0,10]}),e.createElement(c,null),e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(a,{dataKey:n=>n[1]}),e.createElement(p,null),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:[[4.5,10]],margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},j={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(u,{dataKey:"day"}),e.createElement(c,null),e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(p,null),e.createElement(a,{dataKey:"temperature",fill:"violet",stroke:"indigo"}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:Bt,margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},wt=t=>e.createElement(_,{...t,fill:"red",fillOpacity:.6,stroke:"#111"}),z={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{...t},e.createElement(u,{dataKey:"name"}),e.createElement(c,null),e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(a,{dataKey:"uv",fill:"violet",stroke:"indigo"}),e.createElement(p,{cursor:e.createElement(wt,null)}),e.createElement(h,null))),args:{...m(i),width:500,height:300,data:k,margin:{top:5,right:30,left:20,bottom:5},barSize:"30%"}},G={render:t=>{const n=[{x:{value:1},name:"x1"},{x:{value:2},name:"x2"},{x:{value:3},name:"x3"}],s=[{y:{value:3},name:"y1"},{y:{value:2},name:"y2"},{y:{value:1},name:"y3"}],o=K=>K.x.value,r=K=>K.y.value,[d,f]=C.useState(!1),[E,v]=C.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{f(!1),v(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{f(!0),v(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{v(!1)}},"Hide"),e.createElement(l,{...t,data:d?s:n},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(c,{dataKey:d?r:o}),e.createElement(p,null),e.createElement(b,null),e.createElement(h,null),e.createElement(a,{name:"Animated Bar",hide:!E,type:"monotone",dataKey:d?r:o,stroke:"#8884d8",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:1e3})))},args:{...m(i),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},U={render:t=>{const[n,s]=C.useState(!1),[o,r]=C.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{s(!1),r(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{s(!0),r(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{r(!1)}},"Hide"),e.createElement(l,{...t,data:k},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(u,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(c,{dataKey:"uv"}),e.createElement(p,null),e.createElement(b,null),e.createElement(h,null),e.createElement(a,{name:"Animated Bar 1",hide:!o,dataKey:n?"uv":"pv",stackId:1,stroke:"green",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:3e3}),e.createElement(a,{name:"Animated Bar 2",hide:!o,dataKey:n?"pv":"amt",stackId:1,stroke:"yellow",strokeDasharray:"5 5",label:{fill:"red"},animationDuration:1e3})))},args:{...m(i),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},V={render:t=>{const[n,s]=C.useState([{number:10}]),o=()=>{s([{number:10}])},r=()=>{s([{number:50}])},d=()=>{s([{number:90}]),setTimeout(()=>{s([{number:30}])},150)};return e.createElement("div",{style:{display:"flex",gap:"4rem",alignItems:"center"}},e.createElement(l,{...t,data:n},e.createElement(c,{hide:!0,domain:[0,100]}),e.createElement(a,{dataKey:"number",fill:"chocolate",background:{fill:"bisque"}}),e.createElement(h,null)),e.createElement("button",{type:"button",onClick:r},"Change data synchronously"),e.createElement("button",{type:"button",onClick:d},"Change data with setTimeout"),e.createElement("button",{type:"button",onClick:o},"Reset"))},args:{...m(i),width:100,height:100}},N={render:t=>e.createElement(y,{width:"100%",height:"100%"},e.createElement(l,{width:500,height:250,...t,layout:"vertical"},e.createElement(a,{dataKey:"value",fill:"#aebbae",isAnimationActive:!1},e.createElement(ee,{dataKey:"value",position:"insideLeft"}),e.createElement(ee,{dataKey:"label",position:"right"})),e.createElement(u,{dataKey:"value",type:"number"}),e.createElement(c,{dataKey:"label",hide:!0,type:"category"}))),args:{...m(i),width:500,height:300,margin:{top:5,right:30,left:20,bottom:5},data:[{label:"World Trade Organization",value:74},{label:"African Development Bank",value:8},{label:"International Bank for Reconstruction and Development",value:5}]}};var te,ae,re;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip defaultIndex={3} />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    data: pageData
  }
}`,...(re=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,se,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
    const [locked, setLocked] = useState<boolean>(false);
    const onLegendMouseEnter = (payload: LegendPayload) => {
      if (!locked) {
        setFocusedDataKey(String(payload.dataKey));
      }
    };
    const onLegendMouseOut = () => {
      if (!locked) {
        setFocusedDataKey(null);
      }
    };
    const onLegendClick = (payload: LegendPayload) => {
      if (focusedDataKey === String(payload.dataKey)) {
        if (locked) {
          setFocusedDataKey(null);
          setLocked(false);
        } else {
          setLocked(true);
        }
      } else {
        setFocusedDataKey(String(payload.dataKey));
        setLocked(true);
      }
    };
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
          <Bar hide={focusedDataKey != null && focusedDataKey !== 'pv'} dataKey="pv" stackId="a" fill="#8884d8" activeBar={{
          fill: 'gold'
        }} />
          <Bar hide={focusedDataKey != null && focusedDataKey !== 'uv'} dataKey="uv" stackId="a" fill="#82ca9d" activeBar={{
          fill: 'silver'
        }} />
          <Tooltip shared={false} defaultIndex={1} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(oe=(se=D.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,le,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d">
            <ErrorBar dataKey="pvError" width={5} stroke="red" direction="x" />
          </Bar>
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pvErrorData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    },
    layout: 'vertical'
  }
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,me,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
    const [locked, setLocked] = useState<boolean>(false);
    const onLegendMouseEnter = (payload: LegendPayload) => {
      if (!locked) {
        setFocusedDataKey(String(payload.dataKey));
      }
    };
    const onLegendMouseOut = () => {
      if (!locked) {
        setFocusedDataKey(null);
      }
    };
    const onLegendClick = (payload: LegendPayload) => {
      if (focusedDataKey === String(payload.dataKey)) {
        if (locked) {
          setFocusedDataKey(null);
          setLocked(false);
        } else {
          setLocked(true);
        }
      } else {
        setFocusedDataKey(String(payload.dataKey));
        setLocked(true);
      }
    };
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'pv' ? '#8884d8' : '#eee'} />
          <Bar dataKey="amt" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'amt' ? '#82ca9d' : '#eee'} />
          <Bar dataKey="uv" fill={focusedDataKey == null || focusedDataKey === 'uv' ? '#ffc658' : '#eee'} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(ue=(me=S.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var he,ge,pe;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: (args: Args) => {
    const getPath = (x: number, y: number, width: number, height: number) => {
      return \`M\${x},\${y + height}C\${x + width / 3},\${y + height} \${x + width / 2},\${y + height / 3}
  \${x + width / 2}, \${y}
  C\${x + width / 2},\${y + height / 3} \${x + 2 * width / 3},\${y + height} \${x + width}, \${y + height}
  Z\`;
    };
    const TriangleBar = (props: any) => {
      const {
        fill,
        x,
        y,
        width,
        height
      } = props;
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    return <BarChart {...args}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{
        position: 'top'
      }}>
          {pageData.map(({
          name
        }, index) => <Cell key={\`cell-\${name}\`} fill={colors[index % 20]} />)}
        </Bar>
        <RechartsHookInspector />
      </BarChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(pe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ye,ve,fe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: positiveAndNegativeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(fe=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ee,ke,be;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{
          lineHeight: '40px'
        }} />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataForBrush,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(be=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:be.source}}};var Ce,Ke,Ae;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickMargin={30} />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{
          lineHeight: '40px'
        }} />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} dy={30} stroke="#8884d8" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataForBrush,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 35
    }
  }
}`,...(Ae=(Ke=I.parameters)==null?void 0:Ke.docs)==null?void 0:Ae.source}}};var Be,De,xe;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [activeIndex, setActiveIndex] = useState(1);
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false}>
            {pageData.map(({
            name
          }, index: number) => <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={\`cell-\${name}\`} />)}
          </Bar>
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  }
}`,...(xe=(De=T.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var Se,we,Re;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend verticalAlign="top" wrapperStyle={{
          lineHeight: '40px'
        }} />
          <Tooltip defaultIndex={1} />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" activeBar={{
          fill: 'gold'
        }} />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" activeBar={{
          fill: 'silver'
        }} />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(Re=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Le,Ie,Te;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
          <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: positiveAndNegativeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    stackOffset: 'sign'
  }
}`,...(Te=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};var Pe,Fe,Me;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid yAxisId="left" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Legend />
          <Tooltip />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 20,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(Me=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};var Oe,$e,He;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" background={{
          fill: '#eee'
        }} />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(He=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Xe,We,Ye;$.parameters={...$.parameters,docs:{...(Xe=$.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: (args: Args) => {
    const dataWithLabel = pageData.map(({
      name,
      uv,
      pv
    }) => ({
      name,
      uv,
      pv,
      label: uv > pv ? 'UV greater' : 'PV greater'
    }));
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args} data={dataWithLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" label={{
          dataKey: 'label',
          position: 'top',
          fill: '#111'
        }} />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(Ye=(We=$.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var je,ze,Ge;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: (args: Args) => {
    const monthTickFormatter = (tick: any) => {
      const date = new Date(tick);
      return date.getMonth() + 1;
    };
    const renderQuarterTick = (tickProps: any) => {
      const {
        x,
        y,
        payload,
        width,
        visibleTicksCount
      } = tickProps;
      const {
        value,
        offset
      } = payload;
      const date = new Date(value);
      const month = date.getMonth();
      const quarterNo = Math.floor(month / 3) + 1;
      if (month % 3 === 1) {
        return <text x={x + width / visibleTicksCount / 2 - offset} y={y - 4} textAnchor="middle">{\`Q\${quarterNo}\`}</text>;
      }
      const isLast = month === 11;
      if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x - offset + width / visibleTicksCount : x - offset) + 0.5;
        return <path d={\`M\${pathX},\${y - 4}v\${-35}\`} stroke="red" />;
      }
      return null;
    };
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter as any} />
          <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataWithMultiXAxis,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(Ge=(ze=H.parameters)==null?void 0:ze.docs)==null?void 0:Ge.source}}};var Ue,Ve,Ne;X.parameters={...X.parameters,docs:{...(Ue=X.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" scale="point" padding={{
          left: 10,
          right: 10
        }} />
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{
          fill: '#eee'
        }} />
          <Tooltip />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    barSize: 20
  }
}`,...(Ne=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.source}}};var qe,Qe,_e;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="pv" fill="purple" minPointSize={value => value === 0 ? 0 : 2} stackId="a" />
          <Bar dataKey="uv" fill="green" minPointSize={value => value === 0 ? 0 : 2} stackId="a" />
          <Bar dataKey="uv" fill="blue" minPointSize={value => value === 0 ? 0 : 2} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: dataWithSmallValuesAndZero,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(_e=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var Ze,Je,et;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey={v => v[0]} type="number" domain={[0, 10]} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey={v => v[1]} />
          <Tooltip />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: [[4.5, 10]],
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%'
  }
}`,...(et=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:et.source}}};var tt,at,rt;j.parameters={...j.parameters,docs:{...(tt=j.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="temperature" fill="violet" stroke="indigo" />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: rangeData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%'
  }
}`,...(rt=(at=j.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var nt,st,ot;z.parameters={...z.parameters,docs:{...(nt=z.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart {...args}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="uv" fill="violet" stroke="indigo" />
          <Tooltip cursor={<MyCustomCursor />} />
          <RechartsHookInspector />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    /* When there's only one data point on a numerical domain, we cannot automatically calculate the bar size */
    barSize: '30%'
  }
}`,...(ot=(st=z.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var it,lt,dt;G.parameters={...G.parameters,docs:{...(it=G.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data1 = [{
      x: {
        value: 1
      },
      name: 'x1'
    }, {
      x: {
        value: 2
      },
      name: 'x2'
    }, {
      x: {
        value: 3
      },
      name: 'x3'
    }];
    const data2 = [{
      y: {
        value: 3
      },
      name: 'y1'
    }, {
      y: {
        value: 2
      },
      name: 'y2'
    }, {
      y: {
        value: 1
      },
      name: 'y3'
    }];
    const dataKey1 = (d: any) => {
      return d.x.value;
    };
    const dataKey2 = (d: any) => {
      return d.y.value;
    };
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <BarChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
          <Bar name="Animated Bar" hide={!visible} type="monotone" dataKey={useData2 ? dataKey2 : dataKey1} stroke="#8884d8" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={1000} />
        </BarChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(dt=(lt=G.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};var ct,mt,ut;U.parameters={...U.parameters,docs:{...(ct=U.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <BarChart {...args} data={pageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey="uv" />
          <Tooltip />
          <Legend />
          <RechartsHookInspector />
          <Bar name="Animated Bar 1" hide={!visible} dataKey={useData2 ? 'uv' : 'pv'} stackId={1} stroke="green" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={3000} />
          <Bar name="Animated Bar 2" hide={!visible} dataKey={useData2 ? 'pv' : 'amt'} stackId={1} stroke="yellow" strokeDasharray="5 5" label={{
          fill: 'red'
        }} animationDuration={1000} />
        </BarChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(ut=(mt=U.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var ht,gt,pt;V.parameters={...V.parameters,docs:{...(ht=V.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  render: (args: Args) => {
    type MyDataShape = Array<{
      number: number;
    }>;
    const [data, setData] = useState<MyDataShape>([{
      number: 10
    }]);
    const reset = () => {
      setData([{
        number: 10
      }]);
    };
    const changeSynchronously = () => {
      setData([{
        number: 50
      }]);
    };
    const changeAsynchronously = () => {
      setData([{
        number: 90
      }]);
      setTimeout(() => {
        setData([{
          number: 30
        }]);
      }, 150);
    };
    return <div style={{
      display: 'flex',
      gap: '4rem',
      alignItems: 'center'
    }}>
        <BarChart {...args} data={data}>
          <YAxis hide domain={[0, 100]} />
          <Bar dataKey="number" fill="chocolate" background={{
          fill: 'bisque'
        }} />
          <RechartsHookInspector />
        </BarChart>

        <button type="button" onClick={changeSynchronously}>
          Change data synchronously
        </button>

        <button type="button" onClick={changeAsynchronously}>
          Change data with setTimeout
        </button>

        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 100,
    height: 100
  }
}`,...(pt=(gt=V.parameters)==null?void 0:gt.docs)==null?void 0:pt.source}}};var yt,vt,ft;N.parameters={...N.parameters,docs:{...(yt=N.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={250} {...args} layout="vertical">
          <Bar dataKey="value" fill="#aebbae" isAnimationActive={false}>
            <LabelList dataKey="value" position="insideLeft" />
            <LabelList dataKey="label" position="right" />
          </Bar>

          <XAxis dataKey="value" type="number" />
          <YAxis dataKey="label" hide type="category" />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(BarChartProps),
    width: 500,
    height: 300,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    data: [{
      label: 'World Trade Organization',
      value: 74
    }, {
      label: 'African Development Bank',
      value: 8
    }, {
      label: 'International Bank for Reconstruction and Development',
      value: 5
    }]
  }
}`,...(ft=(vt=N.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};const $a=["Simple","StackedAndDynamic","StackedWithErrorBar","Mix","CustomShape","PositiveAndNegative","WithBrush","XAxisTickMarginWithBrushDy","WithCustomizedEvent","StackedWithBrush","StackedBySign","Biaxial","HasBackground","HasLabelBasedOnSeparateDataKey","WithMultiXAxis","NoPadding","WithMinPointSize","OneDataPointPercentSize","RangedBarChart","CustomCursorBarChart","ChangingDataKey","ChangingDataKeyAndStacked","ChangingData","VerticalWithLabelLists"];export{M as Biaxial,V as ChangingData,G as ChangingDataKey,U as ChangingDataKeyAndStacked,z as CustomCursorBarChart,w as CustomShape,O as HasBackground,$ as HasLabelBasedOnSeparateDataKey,S as Mix,X as NoPadding,Y as OneDataPointPercentSize,R as PositiveAndNegative,j as RangedBarChart,B as Simple,D as StackedAndDynamic,F as StackedBySign,P as StackedWithBrush,x as StackedWithErrorBar,N as VerticalWithLabelLists,L as WithBrush,T as WithCustomizedEvent,W as WithMinPointSize,H as WithMultiXAxis,I as XAxisTickMarginWithBrushDy,$a as __namedExportsOrder,Oa as default};
