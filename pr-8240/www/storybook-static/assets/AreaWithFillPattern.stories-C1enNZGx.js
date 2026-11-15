import{R as t}from"./iframe-nQqwH7QJ.js";import{R as p}from"./zIndexSlice-36iharMl.js";import{C as m}from"./ComposedChart-DjVQQbR_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CFguRvXz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-sxdLwWpt.js";import"./throttle-B0HUB5U4.js";import"./index-oe7CujVI.js";import"./index-II4F3WAY.js";import"./RechartsWrapper-CIP5uBJJ.js";import"./axisSelectors-Dnfm47Aa.js";import"./polarAxisSelectors-DDvt0jLt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CE_Y-rH6.js";import"./index-BNIQZt4j.js";import"./index-D3qCcLe1.js";import"./renderedTicksSlice-5pmkjT89.js";import"./index-Im8qdnHn.js";import"./fillDefinitions-ZO6Wo39I.js";import"./CartesianChart-CIqAWzMx.js";import"./chartDataContext-CFytY-UH.js";import"./CategoricalChart-D4LSu4XN.js";import"./Layer-Bx429Rld.js";import"./dataEntryStyles-D2Yj78tL.js";import"./Label--FIUnsrD.js";import"./Text-1TJRO8Pn.js";import"./ZIndexLayer-uBy8TOlo.js";import"./ActivePoints-BO92Iyzv.js";import"./Dot-BPCTuswq.js";import"./types-jTE1kqYu.js";import"./activeStyles-DbesfPTr.js";import"./useAnimationId-BDVyTCS1.js";import"./Symbols-BWEY_vml.js";import"./symbol-t7fE5m4B.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BquQie6d.js";import"./getRadiusAndStrokeWidthFromDot-rJ-p2Gf9.js";import"./ActiveShapeUtils-C7OOt6yj.js";import"./Curve-CGPupWIw.js";import"./step-BhHvwrte.js";import"./useEffectiveDataKey-C12iG63u.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
