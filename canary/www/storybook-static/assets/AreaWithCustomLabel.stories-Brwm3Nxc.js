import{e as t}from"./iframe-B0S7Bw5r.js";import{R as c}from"./arrayEqualityCheck-B6UHuCSW.js";import{C as d}from"./ComposedChart-DcRLOIWA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B3TI61nE.js";import{R as u}from"./RechartsHookInspector-CMq6C7Gt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./immer-evaWtkoc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./zIndexSlice-9UjK9UdZ.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./Curve-DEKI4hEN.js";import"./types-DOzdXJDs.js";import"./step-BpWwZl0O.js";import"./Layer-Dc2WQE0F.js";import"./ReactUtils-X5Zc33o_.js";import"./Label-Sf__cS6l.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./ZIndexLayer-D8Z-QIey.js";import"./ActivePoints-zTeK-7RL.js";import"./Dot-DXEnHZYi.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./useAnimationId-NZHn6B37.js";import"./getRadiusAndStrokeWidthFromDot-iWtNb3XX.js";import"./graphicalItemSelectors-DiYrGPFG.js";import"./index-j_275XjD.js";import"./ChartSizeDimensions-C7fjLK0m.js";import"./OffsetShower-xAOZ3hBm.js";import"./PlotAreaShower-VWh9CzYD.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
