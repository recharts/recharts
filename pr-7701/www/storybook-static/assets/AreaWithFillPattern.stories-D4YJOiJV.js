import{R as t}from"./iframe-JTvlYrAE.js";import{R as p}from"./zIndexSlice-D7ZMgfig.js";import{C as m}from"./ComposedChart-dEDwCA-a.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-dUMk_PyK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CXxUHuO5.js";import"./index-oSnD0z-O.js";import"./index-DIk0NYXt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BQ8E1HnC.js";import"./isWellBehavedNumber-DZJ-wKuN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxDGjzAu.js";import"./axisSelectors-5nOHG62L.js";import"./d3-scale-CyiZcwJt.js";import"./index-6AYKMmGX.js";import"./index-C7e_DiH0.js";import"./renderedTicksSlice-DqB8pESJ.js";import"./index-C2cjqz89.js";import"./CartesianChart-Car3Atj3.js";import"./chartDataContext-r6ewa5Wc.js";import"./CategoricalChart-Dv8UcXMC.js";import"./Layer-OemeYySJ.js";import"./AnimatedItems-CtaNoYLp.js";import"./Label-DVdjMuKO.js";import"./Text-Dg334Fxc.js";import"./DOMUtils-9u-qTQJC.js";import"./useId-Ddv-MCTo.js";import"./useBackwardsCompatibleTheme-DrI3o7cI.js";import"./ZIndexLayer-DRiAaxZ2.js";import"./useAnimationId-B-nvf5O7.js";import"./ActivePoints-ox6ksdpi.js";import"./Dot-CrFaSuhf.js";import"./types-BAT4N-Js.js";import"./RegisterGraphicalItemId-5DR47K5z.js";import"./GraphicalItemClipPath-BqO5vOXC.js";import"./SetGraphicalItem-3AS-SEti.js";import"./getRadiusAndStrokeWidthFromDot-BDnKC9y1.js";import"./ActiveShapeUtils-BXOO9Xzj.js";import"./Curve-D4vRDLjT.js";import"./step-8zevn7on.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BaBnkWw8.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
