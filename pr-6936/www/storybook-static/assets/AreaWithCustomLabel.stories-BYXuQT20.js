import{e as t}from"./iframe-BRGG-JoH.js";import{R as c}from"./arrayEqualityCheck-mIQ5hzOq.js";import{C as d}from"./ComposedChart-EtXkgG2p.js";import{A as l}from"./Area-BMbSiSNc.js";import{R as h}from"./RechartsHookInspector-Ctx1w3em.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBbl5cFh.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-9pcaaxwh.js";import"./hooks-DSsUFC43.js";import"./axisSelectors-Ru0x886W.js";import"./zIndexSlice-DL-y9Kvz.js";import"./CartesianChart-CwIqL3bq.js";import"./chartDataContext-CCJSSKas.js";import"./CategoricalChart-CMPAsQVa.js";import"./Curve-D65O9kIu.js";import"./types-BKK4rjEh.js";import"./Layer-Da-YNOyz.js";import"./ReactUtils-Dc8DAnTF.js";import"./Label-cR9E2h9U.js";import"./Text-By0RWd1u.js";import"./DOMUtils-dg_NvrMM.js";import"./ZIndexLayer-D0IJam7I.js";import"./ActivePoints-CjK9ehja.js";import"./Dot-BIp-1u7k.js";import"./RegisterGraphicalItemId-LuL983mQ.js";import"./GraphicalItemClipPath-BV-kiuzA.js";import"./SetGraphicalItem-B1ZRN0m0.js";import"./useAnimationId-CqPKjgNu.js";import"./getRadiusAndStrokeWidthFromDot-BFDSdXlw.js";import"./graphicalItemSelectors-Bw2zOLDM.js";import"./index-D8mL5N4x.js";import"./ChartSizeDimensions-CED_Nm_I.js";import"./OffsetShower-BMRMJ2Vb.js";import"./PlotAreaShower-DTP32oyl.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
