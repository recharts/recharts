import{e as t}from"./iframe-CGVhrCsk.js";import{R as D,i as s}from"./arrayEqualityCheck-hWfBO-dZ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DTuXPKhR.js";import{C as K}from"./CartesianGrid-CPVW_xM8.js";import{X as T}from"./XAxis-CU7mfsQ-.js";import{Y as M}from"./YAxis-pDp602YX.js";import{L as $}from"./Legend-CpunIFOu.js";import{T as O}from"./Tooltip-BZRXTx-W.js";import{L as C}from"./Line-BDkuDWC1.js";import{R as W}from"./RechartsHookInspector-W4SpTwNb.js";import{C as X}from"./Curve-DdraDXui.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwNF5fMy.js";import"./immer-ByckOGb7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DgM4xUF4.js";import"./index-CEIii_b2.js";import"./hooks-mLbHXbPh.js";import"./axisSelectors-CrTWvSV9.js";import"./d3-scale-D5vl0Nsi.js";import"./zIndexSlice-DutzqnKh.js";import"./renderedTicksSlice-DmMczr5P.js";import"./CartesianChart-B1c-3hUF.js";import"./chartDataContext-DQaWG2U3.js";import"./CategoricalChart-X3-XrJiY.js";import"./CartesianAxis-DzeHRsGq.js";import"./Layer-DI3r5k9z.js";import"./Text-DbvmJCeH.js";import"./DOMUtils-5Zd9MXZO.js";import"./Label-Ca0FMlUU.js";import"./ZIndexLayer-BlFiVhV6.js";import"./types-CutyoUQf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DsXXK2gD.js";import"./symbol-Dw_xitWX.js";import"./step-p7MifGWd.js";import"./useElementOffset--pKlwBer.js";import"./uniqBy-BhkSAKgM.js";import"./iteratee-DIIFvXI9.js";import"./useAnimationId-bFrgCHGo.js";import"./Cross-DPS2xDL2.js";import"./Rectangle-CL9KViSo.js";import"./Sector-8CmLtbdM.js";import"./ReactUtils-CZtHcLE8.js";import"./ActivePoints-DCd-acaj.js";import"./Dot-Dwb1H9wZ.js";import"./RegisterGraphicalItemId-D2-m4nk3.js";import"./ErrorBarContext-BGDc3EIW.js";import"./GraphicalItemClipPath-D7PtxHvG.js";import"./SetGraphicalItem-BqAzYXKd.js";import"./getRadiusAndStrokeWidthFromDot-EoCljdHa.js";import"./ActiveShapeUtils-DEu4pVNL.js";import"./isPlainObject-BSA6Caji.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C1cOue80.js";import"./index-CQT87Gjl.js";import"./ChartSizeDimensions-CJ3vtll8.js";import"./OffsetShower-56TqmRW6.js";import"./PlotAreaShower-CzLMiHXt.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
