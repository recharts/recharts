import{e as t}from"./iframe-Ch6AeBvd.js";import{R as c}from"./arrayEqualityCheck-DGZ3teMN.js";import{C as d}from"./ComposedChart-CZ_B4iUN.js";import{A as l}from"./Area-CQVan6Rh.js";import{R as h}from"./RechartsHookInspector-B8QYXaP3.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DY5EHtdJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DrY4pfOn.js";import"./hooks-CgjYUNQl.js";import"./axisSelectors-Du_flrq7.js";import"./zIndexSlice-iERq52j6.js";import"./renderedTicksSlice-m0x3riPF.js";import"./CartesianChart-Ash0799N.js";import"./chartDataContext-BY2eQbCt.js";import"./CategoricalChart-DYUSwV_N.js";import"./Curve-Bln8u_qs.js";import"./types-Do_qsLRQ.js";import"./Layer-4QzHj9sV.js";import"./ReactUtils-DkszlIgF.js";import"./Label-BhgECJNB.js";import"./Text-CZ2eqhTp.js";import"./DOMUtils-LXYYMBTJ.js";import"./ZIndexLayer-CX8R-8Lg.js";import"./ActivePoints-CM9crGmK.js";import"./Dot-66bsVwqe.js";import"./RegisterGraphicalItemId-B-1y75Pt.js";import"./GraphicalItemClipPath-DE5lF0mO.js";import"./SetGraphicalItem-B8Is7A4s.js";import"./useAnimationId-YtLKjIEe.js";import"./getRadiusAndStrokeWidthFromDot-Ccoz4H_8.js";import"./graphicalItemSelectors-CqQUOiKD.js";import"./index-Bzb6Yeqp.js";import"./ChartSizeDimensions-DPpuKktz.js";import"./OffsetShower-BBFXLy0z.js";import"./PlotAreaShower-D4ARrmD5.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
