import{e as t}from"./iframe-CkFXM4wB.js";import{R as c}from"./arrayEqualityCheck-YTUxoqUB.js";import{C as d}from"./ComposedChart-DibFHF-M.js";import{A as l}from"./Area-Da1ND1zM.js";import{R as h}from"./RechartsHookInspector-B3xLxxYl.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CgSC7b_8.js";import"./immer-VfMLklKA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BszZHVIX.js";import"./index-BdUYKJku.js";import"./hooks-DcZa8pcT.js";import"./axisSelectors-CJKN5-Iu.js";import"./d3-scale-DufYgqIf.js";import"./zIndexSlice-B5-XLxo_.js";import"./renderedTicksSlice-DBeHnZTe.js";import"./CartesianChart-bKq-XmFS.js";import"./chartDataContext-BpQAywsQ.js";import"./CategoricalChart-Mr91sBr1.js";import"./Curve-KgtuRfAG.js";import"./types-CUTS6MB0.js";import"./step-CbyAEdw5.js";import"./Layer-dIWMs8k-.js";import"./ReactUtils-YGQ827Cl.js";import"./Label-BRTUkEBL.js";import"./Text-B-XsujPt.js";import"./DOMUtils-BTVGwpKA.js";import"./ZIndexLayer-4pe948L1.js";import"./ActivePoints-BuiTIuA5.js";import"./Dot-tTXkn-xi.js";import"./RegisterGraphicalItemId-ChGWl6rQ.js";import"./GraphicalItemClipPath-DuUyvYTP.js";import"./SetGraphicalItem-DJLRAQ5n.js";import"./useAnimationId-C9BYbESN.js";import"./getRadiusAndStrokeWidthFromDot-DSs9rVtO.js";import"./graphicalItemSelectors-D8LF-DWT.js";import"./index-D5JWzaIV.js";import"./ChartSizeDimensions-DcpLG0d2.js";import"./OffsetShower-BfJno29D.js";import"./PlotAreaShower-DrDSYf2L.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
