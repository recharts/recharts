import{e as t}from"./iframe-BNMXyeq9.js";import{R as c}from"./arrayEqualityCheck-Beh0vaeo.js";import{C as d}from"./ComposedChart-q2ScdQ2B.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DmTLcGTM.js";import{R as u}from"./RechartsHookInspector-DoNDmCSP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DqK5jQb8.js";import"./immer-DLDegpHz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-p99nh58x.js";import"./index-CqHAUX4Y.js";import"./hooks-CxmJQzvA.js";import"./axisSelectors-Bjzn5CZG.js";import"./d3-scale-jx-p6VOM.js";import"./zIndexSlice-BXAFsMol.js";import"./renderedTicksSlice-BOGp2GeV.js";import"./CartesianChart-BotaMIv-.js";import"./chartDataContext-C7KiXxa1.js";import"./CategoricalChart-Ced0NDVQ.js";import"./Curve-CIYQTlJO.js";import"./types-C7VY0BRq.js";import"./step-BVNiQCr9.js";import"./Layer-9B5krggT.js";import"./ReactUtils-BiDFqrgq.js";import"./Label-CmY8D_Vk.js";import"./Text-DpT8fH0_.js";import"./DOMUtils-bKs0Y9ns.js";import"./ZIndexLayer-rfj-vOql.js";import"./ActivePoints-BNreOZF9.js";import"./Dot-C8tx3hOP.js";import"./RegisterGraphicalItemId-qopa_Nsy.js";import"./GraphicalItemClipPath-BN3M0qNc.js";import"./SetGraphicalItem-CpGjwelu.js";import"./useAnimationId-BIOuiTZH.js";import"./getRadiusAndStrokeWidthFromDot-lM7t1HK-.js";import"./graphicalItemSelectors-CZYO0Blr.js";import"./index-Dh6m6MB-.js";import"./ChartSizeDimensions-CH4qJAUd.js";import"./OffsetShower-CtjINnVg.js";import"./PlotAreaShower-BAtsa-GO.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
