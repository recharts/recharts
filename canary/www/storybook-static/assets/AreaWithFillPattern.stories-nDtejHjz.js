import{R as t}from"./iframe-DtUqFz4i.js";import{R as p}from"./zIndexSlice-D7wiyJvz.js";import{C as m}from"./ComposedChart-CzQBCEWP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Dr4MJugw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Xq_SZc3C.js";import"./index-G8DVyxPR.js";import"./index-6pOrVVYJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhbLPpq6.js";import"./isWellBehavedNumber-BD9jivhZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-okeo-S0V.js";import"./axisSelectors-DKiSvbvB.js";import"./d3-scale-qNEzaThY.js";import"./index-BUmCPeXH.js";import"./index-Dz7I98PR.js";import"./renderedTicksSlice-bHtuYqVk.js";import"./index-CBc8BsFv.js";import"./CartesianChart-BFiV2di3.js";import"./chartDataContext-D9qEIths.js";import"./CategoricalChart-P4h5BQO5.js";import"./Layer-DaGE4xdO.js";import"./AnimatedItems-Bqh_lJsV.js";import"./Label-DSBhBvVo.js";import"./Text-Ci0TXZMh.js";import"./DOMUtils-CAVjRHi7.js";import"./useId-B1tEHKrt.js";import"./useBackwardsCompatibleTheme-Dq0ydbtQ.js";import"./ZIndexLayer-Dl9c6NgM.js";import"./useAnimationId-yAmPQwMn.js";import"./ActivePoints-ConO_hsx.js";import"./Dot-CtYAIqQI.js";import"./types-DIyWN1O2.js";import"./RegisterGraphicalItemId-DHE_UdIi.js";import"./GraphicalItemClipPath-SRfs0G_i.js";import"./SetGraphicalItem-Cs09Djqk.js";import"./getRadiusAndStrokeWidthFromDot-qVB91pCe.js";import"./ActiveShapeUtils-Dur4qT68.js";import"./Curve-dyv5wxAX.js";import"./step-6HhaZYhK.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6MoKrmF.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
