import{e as t}from"./iframe-CpushxGE.js";import{R as c}from"./arrayEqualityCheck-VmHOknUh.js";import{C as d}from"./ComposedChart-BGbAqQTx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C74-gsKI.js";import{R as u}from"./RechartsHookInspector-h4ARZYih.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B56n8ket.js";import"./immer-Cv3ASI8f.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvBLK8o3.js";import"./index-CwlbuTCS.js";import"./hooks-CALuMaxS.js";import"./axisSelectors-BUlu_9c5.js";import"./d3-scale-CLRxj8Kp.js";import"./zIndexSlice-BHiqQbmT.js";import"./renderedTicksSlice-x6hn4tz0.js";import"./CartesianChart-B5J4yM2Q.js";import"./chartDataContext-BCzU7NnM.js";import"./CategoricalChart-CsJClX-e.js";import"./Curve-CXWLomdX.js";import"./types-CPRA2Aat.js";import"./step-C3JKHl5Q.js";import"./Layer-CGETD00I.js";import"./ReactUtils-DYxQvQT8.js";import"./Label-Cxa0XqXu.js";import"./Text-y4JjiomS.js";import"./DOMUtils-CJKLrICw.js";import"./ZIndexLayer-B2YDg5m4.js";import"./ActivePoints-CwpA1DJv.js";import"./Dot-BwRmgNs_.js";import"./RegisterGraphicalItemId-CT6Zr_oQ.js";import"./GraphicalItemClipPath-BjHOIpZc.js";import"./SetGraphicalItem-BLLA-ZWB.js";import"./useAnimationId-CaEP2jnF.js";import"./getRadiusAndStrokeWidthFromDot-C3UHG55r.js";import"./graphicalItemSelectors-DBuAmR_h.js";import"./index-B4LfVqDu.js";import"./ChartSizeDimensions-sbCQr6f5.js";import"./OffsetShower-BnOXM9oT.js";import"./PlotAreaShower-wypqhv64.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
