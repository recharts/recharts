import{e as t}from"./iframe-DZL_Ah-h.js";import{R as D,n as p}from"./arrayEqualityCheck-D-Ts3cDI.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DGpQNVzb.js";import{C as K}from"./CartesianGrid-zh2iKR1S.js";import{X as T}from"./XAxis-CfBz4GHV.js";import{Y as M}from"./YAxis-B4LI4Fwk.js";import{L as $}from"./Legend-DupYJZmR.js";import{T as O}from"./Tooltip-D1mnEu2m.js";import{L as C}from"./Line-CJ3rOz3J.js";import{R as W}from"./RechartsHookInspector-CKjH9lIc.js";import{C as X}from"./Curve-DKq7X7FQ.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DcfSkoMJ.js";import"./PolarUtils-DfkNCrwZ.js";import"./RechartsWrapper-Ck-Abs8b.js";import"./hooks-Dodf-ron.js";import"./axisSelectors-Df1JfYHl.js";import"./zIndexSlice-DxoPuFz2.js";import"./CartesianChart-Ci6fm2Tl.js";import"./chartDataContext-9vV2ynlS.js";import"./CategoricalChart-BD-QnqEO.js";import"./CartesianAxis-hqZlkA4G.js";import"./Layer-Cvyl7OZW.js";import"./Text-8PeDrNfr.js";import"./DOMUtils-D_0MfqW3.js";import"./Label-DNHrzZbV.js";import"./ZIndexLayer-B8J5qb9c.js";import"./types-Dy3M-0QX.js";import"./Symbols-DeYh9DPD.js";import"./useElementOffset-Bd6zDnOW.js";import"./iteratee-CSplJfXS.js";import"./Cross-B8dTDGJS.js";import"./Rectangle-DBmW1QC4.js";import"./useAnimationId-B-fQiutN.js";import"./Sector-CFzlz6F5.js";import"./ReactUtils-BhJ_85C1.js";import"./ActivePoints-DLM-C9_Y.js";import"./Dot-BoSXTYOc.js";import"./RegisterGraphicalItemId--gKDrMRm.js";import"./ErrorBarContext-DiSHSCH2.js";import"./GraphicalItemClipPath-BTtL5NTg.js";import"./SetGraphicalItem-BZkyoZO7.js";import"./getRadiusAndStrokeWidthFromDot-DyoH3QJX.js";import"./ActiveShapeUtils-Bh1zAbKh.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-IG7QOLLM.js";import"./index-DN9IEtGR.js";import"./ChartSizeDimensions-DKkQ1adP.js";import"./OffsetShower-DmaMI3on.js";import"./PlotAreaShower-BpNrAEUE.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
