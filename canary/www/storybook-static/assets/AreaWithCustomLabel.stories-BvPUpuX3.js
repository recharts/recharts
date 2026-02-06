import{e as t}from"./iframe-BD1KoWK2.js";import{R as c}from"./arrayEqualityCheck-Cde7DPwP.js";import{C as d}from"./ComposedChart-CpHM8O-c.js";import{A as l}from"./Area-CgQ14Jlh.js";import{R as h}from"./RechartsHookInspector-D7IHkHn9.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-jJ9mOY4z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyX5gEfk.js";import"./hooks-BYJ871TN.js";import"./axisSelectors-CEc7xIMq.js";import"./zIndexSlice-BvhylE7E.js";import"./CartesianChart-Dhtf_0dk.js";import"./chartDataContext-CnDpTFyo.js";import"./CategoricalChart-CI3_eBBD.js";import"./Curve-CTi9DAae.js";import"./types-CvLbK4WM.js";import"./Layer-CRI4mTHm.js";import"./ReactUtils-Z9JD7jXO.js";import"./Label-DKDP8eG9.js";import"./Text-NBPo0mLT.js";import"./DOMUtils-Lc23xLhb.js";import"./ZIndexLayer-CVx_Xq-U.js";import"./ActivePoints-BVAo8tZZ.js";import"./Dot-CM29upss.js";import"./RegisterGraphicalItemId-BdofLPRs.js";import"./GraphicalItemClipPath-CHbmwSgW.js";import"./SetGraphicalItem-BNcYp_R3.js";import"./useAnimationId-C52_k4XW.js";import"./getRadiusAndStrokeWidthFromDot-DUli-5VF.js";import"./graphicalItemSelectors-dyKU1Amc.js";import"./index-G9AZeeqA.js";import"./ChartSizeDimensions-asr3RhFu.js";import"./OffsetShower-CBrp3efF.js";import"./PlotAreaShower-Bn3UIJhb.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
