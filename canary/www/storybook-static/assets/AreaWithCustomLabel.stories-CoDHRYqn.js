import{e as t}from"./iframe-BtK7K3Kv.js";import{R as c}from"./arrayEqualityCheck-CFfqZo_0.js";import{C as d}from"./ComposedChart-B_mHOkev.js";import{A as l}from"./Area-DVj1TPZG.js";import{R as h}from"./RechartsHookInspector-D4JLTX2d.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWyLZAa9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGVCpdWj.js";import"./hooks-60Pk7U7P.js";import"./axisSelectors-DMzn6YDV.js";import"./zIndexSlice-m57chh8X.js";import"./CartesianChart-CuRdEYaC.js";import"./chartDataContext-BRTsTQpm.js";import"./CategoricalChart-peX_-ePN.js";import"./Curve-yPyY_uXZ.js";import"./types-CVJb2MOT.js";import"./Layer-DV1icpzr.js";import"./ReactUtils-BJV4SHfz.js";import"./Label-DynPPCJ6.js";import"./Text-BW-lGQnj.js";import"./DOMUtils-z6sJWHwI.js";import"./ZIndexLayer-DaJzxTrT.js";import"./ActivePoints-BKOnFX-a.js";import"./Dot-4a706hev.js";import"./RegisterGraphicalItemId-BuTwWOrx.js";import"./GraphicalItemClipPath-3JZrHeBE.js";import"./SetGraphicalItem-CC-hIiO2.js";import"./useAnimationId-FO0Tg1s_.js";import"./getRadiusAndStrokeWidthFromDot--FuVWYJV.js";import"./graphicalItemSelectors-B2Vfl7ve.js";import"./index-CPKyuAeN.js";import"./ChartSizeDimensions-C_sOGjRQ.js";import"./OffsetShower-dtmi7EOu.js";import"./PlotAreaShower-Di55GjjN.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
