import{R as t}from"./iframe-Ca9zq6-c.js";import{a as p}from"./isWellBehavedNumber-CqGPlgER.js";import{L as v}from"./LineChartArgs-_mND0tRp.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-kjNqkyy3.js";import{R as T}from"./zIndexSlice-CR-xpxM6.js";import{C as M}from"./CartesianGrid-BPgnvgxf.js";import{X as $}from"./XAxis-BXUxDWml.js";import{Y as I}from"./YAxis-Di_pPAFf.js";import{L as O}from"./Legend-D8rMlQBw.js";import{T as W}from"./Tooltip-BNk2Rvy8.js";import{L as C}from"./Line-C7QEoVzF.js";import{C as X}from"./Curve-G2tp0Yan.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CVL7Gg7t.js";import"./resolveDefaultProps-aQu_YsJN.js";import"./RechartsWrapper-CaG48vMC.js";import"./index-oZCeDex2.js";import"./index-FbuB2ssV.js";import"./index-BtFF0BK3.js";import"./index-D-6jHIBZ.js";import"./immer-BRLk8fdE.js";import"./renderedTicksSlice-g-m8sL3N.js";import"./axisSelectors-CKheeyoe.js";import"./d3-scale-BmqB7fOq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CCrg56CU.js";import"./chartDataContext-Bliq4f83.js";import"./CategoricalChart-DP-UXbjk.js";import"./CartesianAxis-Cdin4D0O.js";import"./Layer-D2dY01rr.js";import"./Text-BceZOupb.js";import"./DOMUtils-CWZfW9Q5.js";import"./Label-Dc6nn1YN.js";import"./ZIndexLayer-N_1TQ7Pc.js";import"./types-DL0DYnfp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DqIr3c5H.js";import"./symbol-CUsmHQpS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-lMCe9HxU.js";import"./uniqBy-DQNXoyeH.js";import"./iteratee-BGMi6Zy8.js";import"./useAnimationId-DX_MO7p4.js";import"./Cross-Y5-RDaB1.js";import"./Rectangle-Cd2dU1AM.js";import"./Sector-Bo6M0KYh.js";import"./ReactUtils-CQ3qeCfU.js";import"./ActivePoints-BmtaSDFt.js";import"./Dot-DVfqq-WH.js";import"./RegisterGraphicalItemId-BlhUjcl6.js";import"./ErrorBarContext-BNMjRvsS.js";import"./GraphicalItemClipPath-CL4eJ5Gf.js";import"./SetGraphicalItem-DuOLtcMc.js";import"./getRadiusAndStrokeWidthFromDot-D0JPsbB9.js";import"./ActiveShapeUtils-zHL_kIK3.js";import"./step-D387uCSJ.js";const Gt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Bt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Bt as __namedExportsOrder,Gt as default};
