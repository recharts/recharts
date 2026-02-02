import{e as t}from"./iframe-CBadok3R.js";import{R as s}from"./arrayEqualityCheck-D8DZf4E7.js";import{L as m}from"./LineChart-CV2RrBex.js";import{L as c}from"./Line-vL2LKnJQ.js";import{X as d}from"./XAxis-CuDJTYDf.js";import{R as l}from"./RechartsHookInspector-Ccr9vg9I.js";import{t as v}from"./Tick-DyycEu3I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DOVzV-iD.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BOMW4Wfi.js";import"./hooks-CvcnYJr5.js";import"./axisSelectors-7aa3p4xy.js";import"./zIndexSlice-Cb0fYcD4.js";import"./CartesianChart-DhdNdBtI.js";import"./chartDataContext-PjfwFb0T.js";import"./CategoricalChart-DgHJ04hm.js";import"./Layer-CZpxdYtD.js";import"./ReactUtils-BQuPA_dW.js";import"./Label-B9arnFZu.js";import"./Text-CvdY0hNo.js";import"./DOMUtils-DOxIp63n.js";import"./ZIndexLayer-gNsJWqo_.js";import"./ActivePoints-C4zMx6Rr.js";import"./Dot-D8cjCII1.js";import"./types-D0Nc3U-x.js";import"./RegisterGraphicalItemId-BOD2PtEe.js";import"./ErrorBarContext-DNzUHuOB.js";import"./GraphicalItemClipPath-BGNJr3YU.js";import"./SetGraphicalItem-tnjDANmy.js";import"./useAnimationId-DFBNL1tZ.js";import"./getRadiusAndStrokeWidthFromDot-B43QJ_Z5.js";import"./ActiveShapeUtils-ZvkivxeS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyKJpDnd.js";import"./Trapezoid-BHZLmvdE.js";import"./Sector-hPIyOnR6.js";import"./Symbols-mEW1LXrD.js";import"./Curve-D-ytcwuR.js";import"./CartesianAxis-BWCbP_kU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./index-AunjJ6Z9.js";import"./ChartSizeDimensions-rprNa-Kn.js";import"./OffsetShower-Dh3F56nH.js";import"./PlotAreaShower-CfQIUSEt.js";const at={title:"Examples/cartesian/Cartesian Axis/Tick Positioning"},r={render:()=>{const n=["preserveStart","preserveEnd","preserveStartEnd","equidistantPreserveStart",0];return t.createElement(s,null,t.createElement(m,{data:v,margin:{top:20,right:30,left:20,bottom:20}},t.createElement(c,{dataKey:"coordinate"}),n.map((e,p)=>t.createElement(d,{dataKey:"value",key:e,interval:e,xAxisId:p,label:e,height:70})),t.createElement(l,null)))}};var i,o,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const intervalOptions = ['preserveStart', 'preserveEnd', 'preserveStartEnd', 'equidistantPreserveStart', 0] as const;
    return <ResponsiveContainer>
        <LineChart data={ticks}
      // Margins are necessary to show ticks that extend beyond the chart (i.e. last and first tick).
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20
      }}>
          <Line dataKey="coordinate" />
          {intervalOptions.map((intervalOption, index) => <XAxis dataKey="value" key={intervalOption} interval={intervalOption} xAxisId={index} label={intervalOption} height={70} />)}
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const nt=["TickPositioning"];export{r as TickPositioning,nt as __namedExportsOrder,at as default};
