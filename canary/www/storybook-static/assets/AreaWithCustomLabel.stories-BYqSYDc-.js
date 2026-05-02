import{e as t}from"./iframe-DbVDg_ca.js";import{R as c}from"./arrayEqualityCheck-BSVOQ7T-.js";import{C as d}from"./ComposedChart-BlXi-i9v.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-GpUxoA0g.js";import{R as u}from"./RechartsHookInspector-WP52i-1p.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./immer-0ZZjS5Nj.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./hooks-8LGpZrMc.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./zIndexSlice-CDzSIoPc.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./Curve-7li-NOkq.js";import"./types-9bS4DgjT.js";import"./step-DVp28hgV.js";import"./Layer-C9NfejAk.js";import"./ReactUtils-ruqV-srf.js";import"./Label-CT2eYMKi.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./ZIndexLayer-D5PjewgR.js";import"./ActivePoints-Ck9TrlmM.js";import"./Dot-Boac-7JN.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./useAnimationId-BGASjBYn.js";import"./getRadiusAndStrokeWidthFromDot-I2XTj7OF.js";import"./graphicalItemSelectors-DRaebRWv.js";import"./index-SfPrSKbK.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./OffsetShower-DH3pRQIv.js";import"./PlotAreaShower-D9cE9N3J.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
