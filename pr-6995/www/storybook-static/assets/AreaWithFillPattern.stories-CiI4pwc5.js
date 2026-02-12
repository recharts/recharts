import{e as t}from"./iframe-D8RsH_ZD.js";import{R as p}from"./arrayEqualityCheck-DfUQQqNG.js";import{C as m}from"./ComposedChart-D5T5b3BK.js";import{A as r}from"./Area-Cv1ZMvL_.js";import{R as s}from"./RechartsHookInspector-DuFREeNP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DzNWwwyR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CikDBT3M.js";import"./hooks-DGT9tgIE.js";import"./axisSelectors-ChLst7_e.js";import"./zIndexSlice-CPBYLdgp.js";import"./CartesianChart-BGLWUdnj.js";import"./chartDataContext-CstLMBvp.js";import"./CategoricalChart-oK3glHJg.js";import"./Curve-CIshv-2z.js";import"./types-Dyd5Crad.js";import"./Layer-BDdUxbHF.js";import"./ReactUtils-6PKXXThp.js";import"./Label-DsxuCRwy.js";import"./Text-Bgd2WUX9.js";import"./DOMUtils-BqZCiNgw.js";import"./ZIndexLayer-DiTXvVi3.js";import"./ActivePoints-Dzb4Pd6Y.js";import"./Dot-k8-aBSGQ.js";import"./RegisterGraphicalItemId-_gizEZQr.js";import"./GraphicalItemClipPath-BpK8_oIG.js";import"./SetGraphicalItem-DsenAHry.js";import"./useAnimationId-DRWFjGg3.js";import"./getRadiusAndStrokeWidthFromDot-DDuUn9Iv.js";import"./graphicalItemSelectors-Bhv9Ot21.js";import"./index-CnFLVdtg.js";import"./ChartSizeDimensions-QjwVXzW8.js";import"./OffsetShower-CN6ZOhg2.js";import"./PlotAreaShower-BPwRhRjP.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
