import{R as t}from"./iframe-C2PRwgnl.js";import{R as D,l as p}from"./zIndexSlice-weNxwEm8.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-RosDpSuy.js";import{C as M}from"./CartesianGrid-CFW3p9Hb.js";import{X as $}from"./XAxis-BncsxFZ4.js";import{Y as I}from"./YAxis-CAHeoama.js";import{L as O}from"./Legend-BvJGkDvQ.js";import{T as W}from"./Tooltip-BI5i1InD.js";import{L as f}from"./Line-D8_px741.js";import{C as X}from"./Curve-CQnefVPR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-aJLviuy-.js";import"./throttle-CVlDdGyC.js";import"./index-BtXSjXZr.js";import"./index-BqBIYX05.js";import"./RechartsWrapper-BOct7ur6.js";import"./axisSelectors-nSy-fV9M.js";import"./polarAxisSelectors-DmG4l4yE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIUnlP6Z.js";import"./index-BxVmRSNz.js";import"./index-CkiHrneS.js";import"./renderedTicksSlice-FbCZKIWz.js";import"./index-BeFazHyq.js";import"./CartesianChart-CtjN8ua0.js";import"./ZIndexPortal-CKd--WGA.js";import"./CategoricalChart-gCAaZAhY.js";import"./CartesianAxis-DaiAwxt0.js";import"./Layer-botuDyHz.js";import"./Text-D4lV4Imp.js";import"./pageBackground-B4m54nd8.js";import"./ZIndexLayer-BWmWIjtz.js";import"./Label-DdFUcTtW.js";import"./types-CHq7dG9p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CiyVK5wN.js";import"./symbol-VU_gnnhL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cm5L0n6p.js";import"./uniqBy-B3CDwPKv.js";import"./iteratee-BrcMUC4D.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Dx5Gkjhg.js";import"./Cross-BNFlSaHC.js";import"./Rectangle-BnH84tO-.js";import"./util-Dxo8gN5i.js";import"./Sector-CPqNaTT0.js";import"./LabelList-Deq7UXnp.js";import"./ActivePoints-BH2xo60h.js";import"./Dot-2eC8WQef.js";import"./activeStyles-a6dnVtfT.js";import"./dataEntryStyles-BHwXjzhI.js";import"./ErrorBarContext-C59RBxai.js";import"./SetGraphicalItem-DeBA8bqw.js";import"./getRadiusAndStrokeWidthFromDot-Dzgyitlt.js";import"./ActiveShapeUtils-BV6ZL_JX.js";import"./useEffectiveDataKey-lRQnp3q-.js";import"./step-Dw_YruiA.js";const Ht={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Jt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Jt as __namedExportsOrder,Ht as default};
