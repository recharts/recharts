import{e as t}from"./iframe-BucFZ_rI.js";import{R as p}from"./arrayEqualityCheck-Cub9yyg8.js";import{C as m}from"./ComposedChart-Chwzw_bG.js";import{A as r}from"./Area-DSQZV7sf.js";import{R as s}from"./RechartsHookInspector-DS-kex3x.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B03Au56-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./zIndexSlice-DdWCw1KG.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./Curve-DctSWulj.js";import"./types-ClOjhPxm.js";import"./Layer-CF_MVGlz.js";import"./ReactUtils-Bzngk0QG.js";import"./Label-9_EmwvzQ.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./ZIndexLayer-L4xm7ML-.js";import"./ActivePoints-Cj-4yTg7.js";import"./Dot-DIY2dqYP.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./useAnimationId-aMKT9xva.js";import"./getRadiusAndStrokeWidthFromDot-Bz3A-CCh.js";import"./graphicalItemSelectors-B3QPcjLg.js";import"./index-B0oRtae4.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./OffsetShower-DrBH3Pp2.js";import"./PlotAreaShower-CmZTeEbv.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
