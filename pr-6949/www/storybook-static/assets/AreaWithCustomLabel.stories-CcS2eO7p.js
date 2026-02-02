import{e as t}from"./iframe-CehQ8xFj.js";import{R as c}from"./arrayEqualityCheck-CJf3kznu.js";import{C as d}from"./ComposedChart-Db5HmFmR.js";import{A as l}from"./Area-qunQDaVM.js";import{R as h}from"./RechartsHookInspector-C9Dv8rR_.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1y00WFc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./zIndexSlice-39s27tLx.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./Curve-D1ENGCAK.js";import"./types-CYKcJHFL.js";import"./Layer-6nj2T2Rl.js";import"./ReactUtils-tMfbrahw.js";import"./Label-Dw6m4C0Z.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./ZIndexLayer-DeWQbK55.js";import"./ActivePoints-BwDt8lt_.js";import"./Dot-BD7d-X5L.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./useAnimationId-D1z7wJlQ.js";import"./getRadiusAndStrokeWidthFromDot-BvetFLdH.js";import"./graphicalItemSelectors-B5eaprk4.js";import"./index-jUFHLVIb.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
