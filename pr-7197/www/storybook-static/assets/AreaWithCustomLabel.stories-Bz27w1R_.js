import{e as t}from"./iframe-CbsqwKCk.js";import{R as c}from"./arrayEqualityCheck-B4FTx25I.js";import{C as d}from"./ComposedChart-CyCs0zfk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dxkjpwxj.js";import{R as u}from"./RechartsHookInspector-Damt6MYH.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHVE9Qfq.js";import"./immer-D83u5OhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CaUG62oZ.js";import"./index-Bo04Zijq.js";import"./hooks-F0Z_c1HD.js";import"./axisSelectors-DXxkO63G.js";import"./d3-scale-PAY7D1_G.js";import"./zIndexSlice-CDw3ZEmc.js";import"./renderedTicksSlice-BdDgwbXy.js";import"./CartesianChart-CbTSIjqR.js";import"./chartDataContext-IGsi4pC_.js";import"./CategoricalChart-Xd7p2iPq.js";import"./Curve-d3v-cFMl.js";import"./types-QtIGWOWS.js";import"./step-uZ9iGWhX.js";import"./Layer-wLThQp-f.js";import"./ReactUtils-DODSDo-0.js";import"./Label-r3u5Hs--.js";import"./Text-DA8mBm_w.js";import"./DOMUtils-BTAw3duz.js";import"./ZIndexLayer-CIamb34_.js";import"./ActivePoints-lpfaj2C4.js";import"./Dot-CuN0ZmgD.js";import"./RegisterGraphicalItemId-DHXh_EOv.js";import"./GraphicalItemClipPath-Cc_74RAJ.js";import"./SetGraphicalItem-wEHd-RTz.js";import"./useAnimationId-ika4uZpq.js";import"./getRadiusAndStrokeWidthFromDot-DI4cxlJn.js";import"./graphicalItemSelectors-v4TiX4--.js";import"./index-BHJKnvwH.js";import"./ChartSizeDimensions-D9ExJIau.js";import"./OffsetShower-Bv4vecoR.js";import"./PlotAreaShower-XHfKy6Ay.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
