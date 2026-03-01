import{e as t}from"./iframe-Dic5b5u9.js";import{R as p}from"./arrayEqualityCheck-CfNiUq5T.js";import{C as m}from"./ComposedChart-C5Un0Pn6.js";import{A as r}from"./Area-Tr8n4lBQ.js";import{R as s}from"./RechartsHookInspector-BvAm56d5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDhFhLoK.js";import"./immer-DO_1p9A2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwcAc9rH.js";import"./index-BBLbjH9O.js";import"./hooks-Bu1stH2v.js";import"./axisSelectors-CqWe9_C7.js";import"./d3-scale-CJF7DMMB.js";import"./zIndexSlice-c2vW1fTY.js";import"./renderedTicksSlice-CXC0QcBD.js";import"./CartesianChart-ouzhSpug.js";import"./chartDataContext-hawu8zXf.js";import"./CategoricalChart-CJvtpOjk.js";import"./Curve-C8vpU7Np.js";import"./types-MaB3S0wV.js";import"./step-CGWB_5kj.js";import"./Layer--MXbGqBf.js";import"./ReactUtils-C3t93VlX.js";import"./Label-XiLbdVhV.js";import"./Text-DgjxsA1i.js";import"./DOMUtils-Dx-Do2uf.js";import"./ZIndexLayer-Du88RvFA.js";import"./ActivePoints-g3Y4t8e6.js";import"./Dot-DgXeUH3M.js";import"./RegisterGraphicalItemId-Wdyfwocl.js";import"./GraphicalItemClipPath-Uq3L6gOZ.js";import"./SetGraphicalItem-DESbPWBV.js";import"./useAnimationId-BHBeabuo.js";import"./getRadiusAndStrokeWidthFromDot-CqB2yhwJ.js";import"./graphicalItemSelectors-BaU2hrjo.js";import"./index-D-G3yyNK.js";import"./ChartSizeDimensions-BPhsCp9P.js";import"./OffsetShower-DiZAUQqT.js";import"./PlotAreaShower-BoaFsJKz.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
