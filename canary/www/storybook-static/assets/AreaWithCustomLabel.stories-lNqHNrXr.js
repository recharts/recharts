import{e as t}from"./iframe-Ck9vc756.js";import{R as c}from"./arrayEqualityCheck-vzCieRp2.js";import{C as d}from"./ComposedChart-DfP8SAqH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Mi2a2DEi.js";import{R as u}from"./RechartsHookInspector-jYNw452D.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-nQu5Go0U.js";import"./immer-DxfnJBPA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VxEE_HZc.js";import"./index-DcmFMlNy.js";import"./hooks-e18ms5aC.js";import"./axisSelectors-BUVUYV1B.js";import"./d3-scale-CWye4qHt.js";import"./zIndexSlice-y206Xv9r.js";import"./renderedTicksSlice-DZ5s87U9.js";import"./CartesianChart-DU17ec1s.js";import"./chartDataContext-w_xDJEY9.js";import"./CategoricalChart-dlD1y7dU.js";import"./Curve-DcMGJFRD.js";import"./types-BGHQe8uG.js";import"./step-BIffBEER.js";import"./Layer-C26sMZzH.js";import"./ReactUtils-QBrDvIPv.js";import"./Label-Crw3CPfI.js";import"./Text-DDesK1Nf.js";import"./DOMUtils-BCDfv7vR.js";import"./ZIndexLayer-CJ-WJ8V7.js";import"./ActivePoints-D7rmE1Zy.js";import"./Dot-BSnXD6GM.js";import"./RegisterGraphicalItemId-Ddc28GTk.js";import"./GraphicalItemClipPath-O2r-hl13.js";import"./SetGraphicalItem-Dos1M3Gw.js";import"./useAnimationId-B40SS4XH.js";import"./getRadiusAndStrokeWidthFromDot-r9WuKRbn.js";import"./graphicalItemSelectors-DCZgLbeh.js";import"./index-D1Nat1jZ.js";import"./ChartSizeDimensions-DeS7AUEB.js";import"./OffsetShower-B5SEMIpQ.js";import"./PlotAreaShower-BRBe-I_w.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
