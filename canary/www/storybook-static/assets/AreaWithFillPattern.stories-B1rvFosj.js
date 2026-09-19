import{R as t}from"./iframe-DgKiVndY.js";import{R as p}from"./zIndexSlice-dNuJcHRn.js";import{C as m}from"./ComposedChart-ZptqdVYs.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DA0vKAY5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4KEmVOQ.js";import"./index-ClqqO2lb.js";import"./index-DJwO8k8A.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D4xdWGM2.js";import"./isWellBehavedNumber-D3WetmgY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CVLdrR-G.js";import"./axisSelectors-IaZq8uO9.js";import"./d3-scale-DcAUA4PB.js";import"./index-DtVHhaCV.js";import"./index-DmBw5bKk.js";import"./renderedTicksSlice-RB0exVxa.js";import"./index-CkxJWCtX.js";import"./CartesianChart-BjKzNNSZ.js";import"./chartDataContext-Dv6GfWKh.js";import"./CategoricalChart-tj-0AtFI.js";import"./Layer-CitR-d8V.js";import"./AnimatedItems-t-O5cYrN.js";import"./Label-Dw6GSad7.js";import"./Text-CbY3j4Ck.js";import"./DOMUtils-DDi-aYdE.js";import"./useId-DRmEtgtu.js";import"./useBackwardsCompatibleTheme-CVo9PiuG.js";import"./ZIndexLayer-CiPL_m_c.js";import"./useAnimationId-Df1EENv3.js";import"./ActivePoints-CK7oXB-L.js";import"./Dot-0PmoZJ73.js";import"./types-BGF6RwMG.js";import"./RegisterGraphicalItemId-D1zFL55b.js";import"./GraphicalItemClipPath-CbvSbhMn.js";import"./SetGraphicalItem-BLJqw_fJ.js";import"./getRadiusAndStrokeWidthFromDot-CJC1hcgF.js";import"./ActiveShapeUtils-A4Sw_vLw.js";import"./Curve-Pc89hUhq.js";import"./step-1uXQ1327.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Mjj8dgtd.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
