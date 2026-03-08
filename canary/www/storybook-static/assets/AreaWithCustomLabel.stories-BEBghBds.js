import{e as t}from"./iframe-BRfjO5eG.js";import{R as c}from"./arrayEqualityCheck-D8wbB52K.js";import{C as d}from"./ComposedChart-AJ-ju0lV.js";import{A as l}from"./Area-D2kHZ1nG.js";import{R as h}from"./RechartsHookInspector-DqZpsbqV.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DJkK52Dr.js";import"./immer-6Mf_l_pR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-t74pKe.js";import"./index-Ds6oaLH2.js";import"./hooks-BpX4ZWOU.js";import"./axisSelectors-CiymgkMX.js";import"./d3-scale-QcLEkwbV.js";import"./zIndexSlice-DJoH0JSW.js";import"./renderedTicksSlice-BaIKxrOg.js";import"./CartesianChart-BILJUYgv.js";import"./chartDataContext-ffjZymjs.js";import"./CategoricalChart-D80geuJg.js";import"./Curve-c7RsuyU-.js";import"./types-CJwNH7dd.js";import"./step-ylhKLd0a.js";import"./Layer-Djm95T9f.js";import"./ReactUtils-Dg4XVGmm.js";import"./Label-C3-kCUB1.js";import"./Text-CAzsJ-UY.js";import"./DOMUtils-e5Yde7hA.js";import"./ZIndexLayer-x9RJx9gY.js";import"./ActivePoints-CLnDBSxm.js";import"./Dot-y-sJeOCR.js";import"./RegisterGraphicalItemId-CTGxX7GS.js";import"./GraphicalItemClipPath-BNX-hUwf.js";import"./SetGraphicalItem-bUxjzC-C.js";import"./useAnimationId-fkzgSDca.js";import"./getRadiusAndStrokeWidthFromDot-CwUTXUzg.js";import"./graphicalItemSelectors-DYhjC6IF.js";import"./index-CKyyuDQs.js";import"./ChartSizeDimensions-BOoNMCuu.js";import"./OffsetShower-ChoSpo1k.js";import"./PlotAreaShower-BU5aAxms.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
