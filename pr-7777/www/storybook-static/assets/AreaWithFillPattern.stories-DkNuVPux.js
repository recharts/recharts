import{R as t}from"./iframe-DsVopAcH.js";import{R as p}from"./zIndexSlice-CGOHGuEy.js";import{C as m}from"./ComposedChart-BQuW28P0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cz5kzbo4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BobbsZsr.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRE0A59j.js";import"./axisSelectors-Dgut4uty.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./Layer-BiKMlTZw.js";import"./AnimatedItems-Brc7OfV1.js";import"./Label-yfckENu2.js";import"./Text-nN9fGOPh.js";import"./DOMUtils-DoArDhDK.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./ZIndexLayer-D4yIu8AC.js";import"./useAnimationId-C2i6ANfU.js";import"./ActivePoints-D3ORl2JH.js";import"./Dot-kLE6mRv4.js";import"./types-BimouhM4.js";import"./RegisterGraphicalItemId-BpLRWLUo.js";import"./GraphicalItemClipPath-5LNoh5eI.js";import"./SetGraphicalItem-DoTInfhC.js";import"./getRadiusAndStrokeWidthFromDot-BIVN16ui.js";import"./ActiveShapeUtils-BltEi4et.js";import"./Curve-wbgCoDzv.js";import"./step-B5nwCRak.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity---g9lV2H.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
