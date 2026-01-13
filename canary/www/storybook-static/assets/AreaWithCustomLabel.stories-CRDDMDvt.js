import{e as t}from"./iframe-BqhCRw8_.js";import{R as c}from"./arrayEqualityCheck-C0e5XGku.js";import{C as d}from"./ComposedChart-XGDLsI_Y.js";import{A as l}from"./Area-Dxl8vmE3.js";import{R as h}from"./RechartsHookInspector-D3QTgPO3.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ayaicgzr.js";import"./PolarUtils-DQrS6uhh.js";import"./RechartsWrapper-CKbioI8N.js";import"./hooks-9X7mYxl9.js";import"./axisSelectors-HrCd8mj3.js";import"./zIndexSlice-DIIl2FeU.js";import"./CartesianChart-FjeQ0j5o.js";import"./chartDataContext-CS827bLR.js";import"./CategoricalChart-DGivdYUS.js";import"./Curve-ttUwhXb9.js";import"./types-DSzwAYYq.js";import"./Layer-STOxxKM-.js";import"./ReactUtils-CMMuRoIm.js";import"./Label-DtQEJ7YC.js";import"./Text-BS3Ermk4.js";import"./DOMUtils-Dw5i-fzQ.js";import"./ZIndexLayer-ZQy-DVxw.js";import"./ActivePoints-C1iInYcK.js";import"./Dot-8ifXwx0k.js";import"./RegisterGraphicalItemId-OICgoI54.js";import"./GraphicalItemClipPath-De0vPM73.js";import"./SetGraphicalItem-5CyATFN5.js";import"./useAnimationId-DEFSqTDH.js";import"./getRadiusAndStrokeWidthFromDot-Dvx47Ego.js";import"./graphicalItemSelectors-BEuupId7.js";import"./index-BUjJ7HF5.js";import"./ChartSizeDimensions-DGTJjry1.js";import"./OffsetShower-HUtE30KP.js";import"./PlotAreaShower-C7l9vpaF.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
