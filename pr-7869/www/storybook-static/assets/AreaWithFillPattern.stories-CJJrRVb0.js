import{R as t}from"./iframe-DjMXRMWw.js";import{R as p}from"./zIndexSlice-CtOSUbKS.js";import{C as m}from"./ComposedChart-BWguOzjW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CUZlXnUw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-inystY2z.js";import"./index-DVy8JuJj.js";import"./index-C8KOxsb8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B1XIyHIw.js";import"./isWellBehavedNumber-umHPGaL1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnIn7gPv.js";import"./axisSelectors-CNz5a2R6.js";import"./d3-scale-CRgYiiwr.js";import"./index-DYIYCqg3.js";import"./index-Bhr5x-9R.js";import"./renderedTicksSlice-DVXswGI9.js";import"./index-BD7yu4TT.js";import"./CartesianChart-CDSIXDAD.js";import"./chartDataContext-DOQrMEHc.js";import"./CategoricalChart-DvjYEnPS.js";import"./Layer-CXKDxib5.js";import"./AnimatedItems-B8zijpSk.js";import"./Label-bBUf40Mc.js";import"./Text-BAKQyfL2.js";import"./DOMUtils-C8lW23C1.js";import"./useId-_ZeDNFzq.js";import"./useBackwardsCompatibleTheme-nOUNGopJ.js";import"./ZIndexLayer-BeupKQ39.js";import"./useAnimationId-DqHnZ7Fe.js";import"./ActivePoints-D8eJWPdK.js";import"./Dot-DcNcFyGg.js";import"./types-CHoZYlJ3.js";import"./RegisterGraphicalItemId-Dt04SWfb.js";import"./GraphicalItemClipPath-BWZ1AOYB.js";import"./SetGraphicalItem-7PkPViNi.js";import"./getRadiusAndStrokeWidthFromDot-D039ugpa.js";import"./ActiveShapeUtils-B380iXXR.js";import"./Curve-OU_i7PV7.js";import"./step-Cub6k3wO.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CLXu1wVJ.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
