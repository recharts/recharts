import{e as t}from"./iframe-BP2nTpch.js";import{R as c}from"./arrayEqualityCheck-uIVE1gVz.js";import{C as d}from"./ComposedChart-DZabq8it.js";import{A as l}from"./Area-CFJtsbhl.js";import{R as h}from"./RechartsHookInspector-DAq4QekR.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-pblYALGE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B99qXj5r.js";import"./hooks-C4-fdNyt.js";import"./axisSelectors-D2SDnJRJ.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./CartesianChart-FpzVruv-.js";import"./chartDataContext-ijRrdm1r.js";import"./CategoricalChart-Dwlif2jD.js";import"./Curve-DDVqNpBq.js";import"./types-7mx8q_Dg.js";import"./Layer-2wKCZbds.js";import"./ReactUtils-8y56L2KY.js";import"./Label-CpYvd4nZ.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./ZIndexLayer-571M2aB4.js";import"./ActivePoints-wLrf3G7J.js";import"./Dot-UJc7CKGe.js";import"./RegisterGraphicalItemId-BxTYuwSX.js";import"./GraphicalItemClipPath-CFJzNYVk.js";import"./SetGraphicalItem-Cd_T2Vk8.js";import"./useAnimationId-BKvpnK5Z.js";import"./getRadiusAndStrokeWidthFromDot-CWkvHCAb.js";import"./graphicalItemSelectors-qK5kZ5lZ.js";import"./index-B3FDMrYE.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./OffsetShower-DpRHCxQ6.js";import"./PlotAreaShower-DWs7AY7M.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
