import{e as t}from"./iframe-CNonusrd.js";import{R as c}from"./arrayEqualityCheck-l5oIinxJ.js";import{C as d}from"./ComposedChart-eizZQii2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CBEM1MR7.js";import{R as u}from"./RechartsHookInspector-DREJ71WB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-9t13lHMU.js";import"./immer-x45XYXGa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYPFeGd0.js";import"./index-D5p3lGcA.js";import"./hooks-sSaS_iHU.js";import"./axisSelectors-CxAQt0eW.js";import"./d3-scale-HntMfl1M.js";import"./zIndexSlice-lq1xLJsp.js";import"./renderedTicksSlice-DilFZHiz.js";import"./CartesianChart-XRbcsYla.js";import"./chartDataContext-CPanrf0w.js";import"./CategoricalChart-2Jj_e3Uw.js";import"./Curve-B-txv0y_.js";import"./types-QSJLzDgf.js";import"./step-CTC2hHac.js";import"./Layer-B4nmAurR.js";import"./ReactUtils-C0hUy9cv.js";import"./Label-BkTOM4JT.js";import"./Text-B8aP_-NL.js";import"./DOMUtils-BSt5xjPz.js";import"./ZIndexLayer-C8APM9Um.js";import"./ActivePoints-CTe4U5p3.js";import"./Dot-Ci2_k-bT.js";import"./RegisterGraphicalItemId-BlSb_05O.js";import"./GraphicalItemClipPath-Dh2li2pF.js";import"./SetGraphicalItem-ElLCpu1i.js";import"./useAnimationId-CKkBYz8x.js";import"./getRadiusAndStrokeWidthFromDot-S2UaL7g9.js";import"./graphicalItemSelectors-uEabWJTl.js";import"./index-D8MHUpjv.js";import"./ChartSizeDimensions-CH_6AtsO.js";import"./OffsetShower-BdevU7dF.js";import"./PlotAreaShower-iAJQSHaO.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
