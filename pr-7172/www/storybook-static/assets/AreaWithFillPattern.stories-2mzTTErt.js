import{e as t}from"./iframe-E-WC41kJ.js";import{R as p}from"./arrayEqualityCheck-BqUzcRut.js";import{C as m}from"./ComposedChart-Cj1Yh8a_.js";import{A as r}from"./Area-CbGW7NLp.js";import{R as s}from"./RechartsHookInspector-DKk-8ET5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZw5DbVo.js";import"./immer-B2AHHn8G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIczAnOb.js";import"./index-DZtbJ9Ut.js";import"./hooks-DQ5ZrLCC.js";import"./axisSelectors-BVUql3J4.js";import"./d3-scale-CSKw2yvo.js";import"./zIndexSlice-DkBOVcrD.js";import"./renderedTicksSlice-BqXsAF6I.js";import"./CartesianChart-B56zTdxs.js";import"./chartDataContext-CK93mzcE.js";import"./CategoricalChart-aHZNXhsF.js";import"./Curve-DYFm9WRY.js";import"./types-CSLfd7k_.js";import"./step-DU5CJrCT.js";import"./Layer-DOBdv7Ak.js";import"./ReactUtils-BHUem0rc.js";import"./Label-C5w0zLuo.js";import"./Text-DTbX-dn1.js";import"./DOMUtils-CpAJnaA6.js";import"./ZIndexLayer-DVYJjRDY.js";import"./ActivePoints-CdBmP24a.js";import"./Dot-hyCNPvjn.js";import"./RegisterGraphicalItemId-D0Yd-4hn.js";import"./GraphicalItemClipPath-CjeMVbHl.js";import"./SetGraphicalItem-FieAjGNP.js";import"./useAnimationId-Kk3oGpCX.js";import"./getRadiusAndStrokeWidthFromDot-CyXXFMBh.js";import"./graphicalItemSelectors-nDm2w2MC.js";import"./index-DcwfkASu.js";import"./ChartSizeDimensions-myNJ6iDJ.js";import"./OffsetShower-h4QuBQIC.js";import"./PlotAreaShower-ByNkN2fY.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
