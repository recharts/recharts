import{e as t}from"./iframe-CRTFvrj9.js";import{R as c}from"./arrayEqualityCheck-C-72eKdK.js";import{C as d}from"./ComposedChart-DTMWU6Jk.js";import{A as l}from"./Area-DvXkjVA2.js";import{R as h}from"./RechartsHookInspector-D5fTK36V.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./immer-C2wqAH-O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BSniLpj2.js";import"./index-DTIfmw9b.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./d3-scale-B3vyKD8X.js";import"./zIndexSlice-CeN_cpGA.js";import"./renderedTicksSlice-Clwuxehj.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./Curve-cG-fhaEi.js";import"./types-DqJmRq78.js";import"./step-D-1eA3Al.js";import"./Layer-CS75NGqW.js";import"./ReactUtils-FOFjsaAB.js";import"./Label-B8ukM34Q.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./ZIndexLayer-T_Qg2faX.js";import"./ActivePoints-DqiWJefE.js";import"./Dot-Bs4qVlF8.js";import"./RegisterGraphicalItemId-CQsCOMci.js";import"./GraphicalItemClipPath-D3uyj9j1.js";import"./SetGraphicalItem-BKYxWNub.js";import"./useAnimationId-D4atK31V.js";import"./getRadiusAndStrokeWidthFromDot-BycfBkgL.js";import"./graphicalItemSelectors-6FphSuVd.js";import"./index-Bed0KFZ4.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./OffsetShower-BF3aeG8w.js";import"./PlotAreaShower-D8bDGspZ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
