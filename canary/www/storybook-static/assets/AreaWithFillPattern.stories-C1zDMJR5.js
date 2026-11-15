import{R as t}from"./iframe-aStk4u5G.js";import{R as p}from"./zIndexSlice-fM76ZZLK.js";import{C as m}from"./ComposedChart-DHDQZPyt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CDoAbUvu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DDGoEIzP.js";import"./throttle-DVcVwqMz.js";import"./index-D3-ZjHvX.js";import"./index-CudRwpbI.js";import"./RechartsWrapper-Ds4ZmDze.js";import"./axisSelectors-DBp9gfhA.js";import"./polarAxisSelectors-DXerv3y1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B6YLYpaJ.js";import"./index-D44dfxkc.js";import"./index-C0ZJcZh_.js";import"./renderedTicksSlice-Bb9pf7FB.js";import"./index-CA0MPyj7.js";import"./fillDefinitions-Daf3k0lp.js";import"./CartesianChart-D7_rHSjg.js";import"./chartDataContext-Dl30_h0X.js";import"./CategoricalChart-C74L4aLC.js";import"./Layer-BjWQQh7I.js";import"./dataEntryStyles-BcmbbFXW.js";import"./Label-CSHZSiX2.js";import"./Text-ByyFOVFg.js";import"./ZIndexLayer-CcTOehup.js";import"./ActivePoints-B2wgHnUT.js";import"./Dot-CNnV5EQe.js";import"./types-DjvBJzo1.js";import"./activeStyles-CZ0hnhrg.js";import"./useAnimationId-BKAZWpn4.js";import"./Symbols-CNyA1mlx.js";import"./symbol-C-8FiWil.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Yj9tvd7_.js";import"./getRadiusAndStrokeWidthFromDot-D8PfYcSQ.js";import"./ActiveShapeUtils-BP2ijoKU.js";import"./Curve-DVkDevWh.js";import"./step-CGueoSlz.js";import"./useEffectiveDataKey-mYWLQ9Vk.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
