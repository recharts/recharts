import{e as t}from"./iframe-DxZX8v3W.js";import{R as c}from"./arrayEqualityCheck-CHFkqTV_.js";import{C as d}from"./ComposedChart-BGkEXwf1.js";import{A as l}from"./Area-_r78wk7L.js";import{R as h}from"./RechartsHookInspector-EozXGI-d.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhuxpMgF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMTy2N8_.js";import"./hooks-B7xKXdiJ.js";import"./axisSelectors-CsqEoZpJ.js";import"./zIndexSlice-DbH822fK.js";import"./CartesianChart-BGtowRh8.js";import"./chartDataContext-kn-jHXwi.js";import"./CategoricalChart-CLJuTuVW.js";import"./Curve-amoMOh-y.js";import"./types-DXQoRjfG.js";import"./Layer-BPZWkKY5.js";import"./ReactUtils-BR0ZodR6.js";import"./Label-DcVTU5jd.js";import"./Text-BjDK3asE.js";import"./DOMUtils-BxXkT_Dg.js";import"./ZIndexLayer-u2cA8wLh.js";import"./ActivePoints-ChW3PNAb.js";import"./Dot-6gTSKkj_.js";import"./RegisterGraphicalItemId-DtMUd9c3.js";import"./GraphicalItemClipPath-DHNbR-WC.js";import"./SetGraphicalItem-BXOgfpPM.js";import"./useAnimationId-DTZHXicx.js";import"./getRadiusAndStrokeWidthFromDot-9yl6HY0F.js";import"./graphicalItemSelectors-DQwtEIC6.js";import"./index-59kLrafc.js";import"./ChartSizeDimensions-DNmKalNs.js";import"./OffsetShower-Bf42ilrd.js";import"./PlotAreaShower-CjZ5fG5L.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
