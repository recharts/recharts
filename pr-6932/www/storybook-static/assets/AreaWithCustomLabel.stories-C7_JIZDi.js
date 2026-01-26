import{e as t}from"./iframe-CWA75x6f.js";import{R as c}from"./arrayEqualityCheck-BbPHrIiT.js";import{C as d}from"./ComposedChart-CikPPUoS.js";import{A as l}from"./Area-DUf504L_.js";import{R as h}from"./RechartsHookInspector-SnjudCfW.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./zIndexSlice-BxnMOy2T.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./Curve-DzqGeZIr.js";import"./types-ieTTG77J.js";import"./Layer-Dyb8NBHJ.js";import"./ReactUtils-BsQxKoDK.js";import"./Label-QjXIZu_1.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./ZIndexLayer-C1tQmmyV.js";import"./ActivePoints-Dmg5s4MQ.js";import"./Dot-Bdf28i8O.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./useAnimationId-CiXad0CX.js";import"./getRadiusAndStrokeWidthFromDot-BEv_HS27.js";import"./graphicalItemSelectors-DNZwly0D.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
