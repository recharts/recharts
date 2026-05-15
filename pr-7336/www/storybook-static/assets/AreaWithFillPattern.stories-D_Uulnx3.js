import{e as t}from"./iframe-C_AsYugi.js";import{R as p}from"./arrayEqualityCheck-xvllERIt.js";import{C as m}from"./ComposedChart-cY0MWVeZ.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CneO-qYN.js";import{R as l}from"./RechartsHookInspector-BZMd9r0w.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./Curve-DqcNZQQ9.js";import"./types-DFzRwbJd.js";import"./step-BNGIjVY6.js";import"./Layer-Dz5BSX-y.js";import"./ReactUtils-BIcQ9LuG.js";import"./Label-Ck2nWAbG.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./ActivePoints-D_gOxfcF.js";import"./Dot-E0S9rOFh.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./useAnimationId-GLik1JQl.js";import"./getRadiusAndStrokeWidthFromDot-CMmixfMt.js";import"./graphicalItemSelectors-DddBo3nY.js";import"./index-DCPl85jO.js";import"./ChartSizeDimensions-Dh66BsMo.js";import"./OffsetShower-vaJOlCun.js";import"./PlotAreaShower-CMsAoFdB.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
