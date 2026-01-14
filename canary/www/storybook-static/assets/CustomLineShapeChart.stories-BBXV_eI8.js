import{e as t}from"./iframe-BDEQfIlb.js";import{R as D,n as p}from"./arrayEqualityCheck-BA5tHTkl.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-953LT7xs.js";import{C as K}from"./CartesianGrid-CCyEk27r.js";import{X as T}from"./XAxis-NhsKtlV2.js";import{Y as M}from"./YAxis-CNg2gE42.js";import{L as $}from"./Legend-BFcWxD8x.js";import{T as O}from"./Tooltip-CSIOt9u8.js";import{L as C}from"./Line-CL2F8gdZ.js";import{R as W}from"./RechartsHookInspector-BP4qljDX.js";import{C as X}from"./Curve-apm-ZytV.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0yWPBKj.js";import"./PolarUtils-KAlgtJ9T.js";import"./RechartsWrapper-CST4_BZP.js";import"./hooks-Cc5861FD.js";import"./axisSelectors-W9GqkCkL.js";import"./zIndexSlice-B88C6q2R.js";import"./CartesianChart-Cqd8BAy6.js";import"./chartDataContext-BX7wQqVg.js";import"./CategoricalChart-BAadDSZ5.js";import"./CartesianAxis-Dj71nMX3.js";import"./Layer-Con5T55J.js";import"./Text-9oQB2ulB.js";import"./DOMUtils-C_B6oJip.js";import"./Label-B9k6RWTG.js";import"./ZIndexLayer-CzQ7dqjv.js";import"./types-tr7QhDo_.js";import"./Symbols-CIf3O2Az.js";import"./useElementOffset-CngPJaXk.js";import"./iteratee-B0lHZBPg.js";import"./Cross-BQtDsQ6e.js";import"./Rectangle-DZIbf3UH.js";import"./useAnimationId-fPMh2rE3.js";import"./Sector-CDYiU8tv.js";import"./ReactUtils-B2Wxyi5A.js";import"./ActivePoints-_KCIb0BH.js";import"./Dot-CuzOurFG.js";import"./RegisterGraphicalItemId-B-_vEcYf.js";import"./ErrorBarContext-BVoK2OG_.js";import"./GraphicalItemClipPath-Cxm1A7e8.js";import"./SetGraphicalItem-mM5uupNM.js";import"./getRadiusAndStrokeWidthFromDot-CeQbAwGD.js";import"./ActiveShapeUtils-DSG0DNjO.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D-MMn83p.js";import"./index-D0u2n02A.js";import"./ChartSizeDimensions-DKCYbGH7.js";import"./OffsetShower-BiVSgjK5.js";import"./PlotAreaShower-D2oOPDsU.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
