import{e as t}from"./iframe-DpWgHt6w.js";import{R as c}from"./arrayEqualityCheck-DwmAcYIn.js";import{C as d}from"./ComposedChart-D-F8RHVS.js";import{A as l}from"./Area-C4PvNg3Y.js";import{R as h}from"./RechartsHookInspector-6ffAoSqV.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-COHSVhtV.js";import"./immer-DDDJMxmJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0YIbfluk.js";import"./index-CN4qQn03.js";import"./hooks-BAFDLItO.js";import"./axisSelectors-xFLTDAtC.js";import"./d3-scale-cdM3iwUh.js";import"./zIndexSlice-QDaeSxhx.js";import"./renderedTicksSlice-DdqXW_Ob.js";import"./CartesianChart-Cb4Oxfp_.js";import"./chartDataContext-Dv1BkF7u.js";import"./CategoricalChart-Cws7_zW3.js";import"./Curve-BqRAMsJi.js";import"./types-DZ2OBnNV.js";import"./step-InUwQjei.js";import"./Layer-CgpQp7eP.js";import"./ReactUtils-DCSGTX2b.js";import"./Label-D5phAYj6.js";import"./Text-BFrtQgrO.js";import"./DOMUtils-B14zrq1j.js";import"./ZIndexLayer-CK7DJrWn.js";import"./ActivePoints-XzMc0Z9j.js";import"./Dot-DSk185c8.js";import"./RegisterGraphicalItemId-Bt0sIJ7x.js";import"./GraphicalItemClipPath-DC27cx5Q.js";import"./SetGraphicalItem-BnrGj-ZR.js";import"./useAnimationId-DyHfJJP5.js";import"./getRadiusAndStrokeWidthFromDot-BPyIAaab.js";import"./graphicalItemSelectors-DMouLN-S.js";import"./index-DtY3ArMC.js";import"./ChartSizeDimensions-B93BH9rD.js";import"./OffsetShower-BhzT3OUi.js";import"./PlotAreaShower-BHWXXqUJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
