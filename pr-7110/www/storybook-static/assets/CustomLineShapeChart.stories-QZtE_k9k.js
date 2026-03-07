import{e as t}from"./iframe-DDWKRrqv.js";import{R as D,i as s}from"./arrayEqualityCheck-B69_8zAh.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-D58mjh2u.js";import{C as K}from"./CartesianGrid-BUxTPynp.js";import{X as T}from"./XAxis-D_2M1x8X.js";import{Y as M}from"./YAxis-BdM975Hp.js";import{L as $}from"./Legend-BXJJza_O.js";import{T as O}from"./Tooltip-CQK83aXS.js";import{L as C}from"./Line-CxdYfIxL.js";import{R as W}from"./RechartsHookInspector-DceXjH5Q.js";import{C as X}from"./Curve-DHOaOh81.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_DYv1p0.js";import"./immer-BOVNGK3k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzmWRH09.js";import"./index-Bsn1GeuN.js";import"./hooks-DMdViquZ.js";import"./axisSelectors-IRdkb48b.js";import"./d3-scale-Bur08Y-w.js";import"./zIndexSlice-BN5Gbmzf.js";import"./renderedTicksSlice-C67zSA8W.js";import"./CartesianChart-CkzL1Tm4.js";import"./chartDataContext-DtPiS87l.js";import"./CategoricalChart-g8bKJafN.js";import"./CartesianAxis-6QkrUt7M.js";import"./Layer-h3-3YPyh.js";import"./Text-BHc0cwIs.js";import"./DOMUtils-slrfpt58.js";import"./Label-NRlvBr1w.js";import"./ZIndexLayer-BwiDnk8J.js";import"./types-DOdoKNLX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BqNcdAfC.js";import"./symbol-dPepbRJM.js";import"./step-lfEQ-oxP.js";import"./useElementOffset-B8i3o1pJ.js";import"./uniqBy-BmXuc6cE.js";import"./iteratee-CEk-dA8r.js";import"./useAnimationId-BITKm10d.js";import"./Cross-DMkheZJO.js";import"./Rectangle-DQpz_Kxu.js";import"./Sector-OY9ONPbP.js";import"./ReactUtils-cVwoq5mQ.js";import"./ActivePoints-CQ605IlR.js";import"./Dot-CkKJMsGk.js";import"./RegisterGraphicalItemId-CcVRSfeO.js";import"./ErrorBarContext-Bbishcw-.js";import"./GraphicalItemClipPath-D--Twx0M.js";import"./SetGraphicalItem-Cmo6HR7d.js";import"./getRadiusAndStrokeWidthFromDot-B8EpjCyF.js";import"./ActiveShapeUtils-EGVfTGvU.js";import"./isPlainObject-u-9GKdyb.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-D8tIh_kI.js";import"./index-BsIrbSk0.js";import"./ChartSizeDimensions-FoS83u8h.js";import"./OffsetShower-CMRNvtsS.js";import"./PlotAreaShower-C4MeqViy.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
