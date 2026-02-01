import{e as t}from"./iframe-BJ3b3BfY.js";import{R as c}from"./arrayEqualityCheck-Bo2Wnkh3.js";import{C as d}from"./ComposedChart-BcbIeTEo.js";import{A as l}from"./Area-8bDtur7a.js";import{R as h}from"./RechartsHookInspector-ORt5Hm4G.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CKiG0ykq.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./zIndexSlice-CWsPu_90.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./Curve-Kded-2mW.js";import"./types-mvH4HYXR.js";import"./Layer-B4_ys6we.js";import"./ReactUtils-zwc7yRgu.js";import"./Label-DeB84C01.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./ZIndexLayer-CUGD5-lC.js";import"./ActivePoints-BlpW6YCS.js";import"./Dot-C_Q3jwW2.js";import"./RegisterGraphicalItemId-DQUBtM_I.js";import"./GraphicalItemClipPath-DbsTfdnw.js";import"./SetGraphicalItem-MDKWBLr9.js";import"./useAnimationId-PYCZu_AY.js";import"./getRadiusAndStrokeWidthFromDot-CafT4P9y.js";import"./graphicalItemSelectors-DhJxRn-O.js";import"./index-vodQRtzb.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
