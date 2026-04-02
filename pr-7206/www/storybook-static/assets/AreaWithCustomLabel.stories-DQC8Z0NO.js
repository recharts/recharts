import{e as t}from"./iframe-h6RyBADW.js";import{R as c}from"./arrayEqualityCheck-uwQbgtgj.js";import{C as d}from"./ComposedChart-TyzmibOv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Ds7h79uM.js";import{R as u}from"./RechartsHookInspector-BC4p3bxF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B6F9Tq8Y.js";import"./immer-Bfj3ZeVH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-jkN30DDj.js";import"./index-D7nUYq7y.js";import"./hooks-DTtRusoK.js";import"./axisSelectors-BdNfc6Ph.js";import"./d3-scale-B_V_eZSW.js";import"./zIndexSlice-CGsXWVT5.js";import"./renderedTicksSlice-CB3omCIm.js";import"./CartesianChart-MMvNBqn6.js";import"./chartDataContext-CxcxsnMq.js";import"./CategoricalChart-B30uA3Pl.js";import"./Curve-1roVG56o.js";import"./types-QtI883v9.js";import"./step-BtU2_rsP.js";import"./Layer-CUjlXR2J.js";import"./ReactUtils-CdvzfmpN.js";import"./Label-BhurGsu4.js";import"./Text-DawNGEOi.js";import"./DOMUtils-CZxQTbW4.js";import"./ZIndexLayer-wKcmD7IL.js";import"./ActivePoints-OkqDIVjO.js";import"./Dot-D8rKYkPw.js";import"./RegisterGraphicalItemId-IGv_NVoe.js";import"./GraphicalItemClipPath-DyVzZO4a.js";import"./SetGraphicalItem-CuEfojVc.js";import"./useAnimationId-B4b4HoxB.js";import"./getRadiusAndStrokeWidthFromDot-D2N5NH_l.js";import"./graphicalItemSelectors-a4MLUv04.js";import"./index-DLs_tRY-.js";import"./ChartSizeDimensions-BDuSdsYs.js";import"./OffsetShower-MxH05TXA.js";import"./PlotAreaShower-CRP0xEOQ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
