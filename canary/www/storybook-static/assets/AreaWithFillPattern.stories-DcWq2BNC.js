import{R as t}from"./iframe-y6pZoBOe.js";import{R as p}from"./zIndexSlice-BAPHOf-A.js";import{C as m}from"./ComposedChart-BoLdC1zL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CKw-ZQMC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sUHqZCtQ.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK41N9kV.js";import"./isWellBehavedNumber-Cb3oTnMu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bd4_Y8lY.js";import"./axisSelectors-BmcHsTRr.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./Layer-34ncCtUV.js";import"./AnimatedItems-DIgNuRUa.js";import"./Label-9NqXhRk3.js";import"./Text-DdGQmpzq.js";import"./DOMUtils-Co8gRLU9.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./ZIndexLayer-C7BuriGU.js";import"./useAnimationId-9X7pomqp.js";import"./ActivePoints-CLmTgrQX.js";import"./Dot-ClwGjlu0.js";import"./types-DtUXsqBa.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./getRadiusAndStrokeWidthFromDot-BsnIiv2v.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./Curve-fod9LGdb.js";import"./step-CafFQeb3.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
