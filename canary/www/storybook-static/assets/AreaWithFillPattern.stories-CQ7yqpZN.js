import{R as t}from"./iframe-CgNYO6-5.js";import{R as p}from"./zIndexSlice-BB8bPu9P.js";import{C as m}from"./ComposedChart-CSBQfKzg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D5yJvKEY.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLMZeuK1.js";import"./index-CP-P0bP3.js";import"./index-CNUb9tOf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DdU6Jg07.js";import"./isWellBehavedNumber-hgWpBQUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQslZ_yd.js";import"./index-Dqgfl7Xj.js";import"./index-xSjlJOhZ.js";import"./axisSelectors-O08Nn3VB.js";import"./d3-scale-Bd_S1jK4.js";import"./renderedTicksSlice-BBv91KB4.js";import"./CartesianChart-BI9vfx5j.js";import"./chartDataContext-NHEnIpFz.js";import"./CategoricalChart-JtBUTVNJ.js";import"./Layer-TfcNVFTj.js";import"./AnimatedItems-CL4P6dH7.js";import"./Label-DE97QbhK.js";import"./Text-CjIgHDXs.js";import"./DOMUtils-Cwa2E0AM.js";import"./useId-BaSa9afh.js";import"./useBackwardsCompatibleTheme-CvkC2w7r.js";import"./ZIndexLayer-BByjeLs4.js";import"./useAnimationId-B1M8XMfI.js";import"./ActivePoints-CdA3IFED.js";import"./Dot-DR-c-Eu3.js";import"./types-Un7Q3Ppr.js";import"./RegisterGraphicalItemId-5U6GT5jV.js";import"./GraphicalItemClipPath-CdOc_skb.js";import"./SetGraphicalItem-CAAg-5Jk.js";import"./getRadiusAndStrokeWidthFromDot-B5DnJ6_A.js";import"./ActiveShapeUtils-DOY9-ZZr.js";import"./Curve-D6U3M4gK.js";import"./step-D20fkZ91.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B07WpZoW.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const rt=["FillPattern"];export{e as FillPattern,rt as __namedExportsOrder,et as default};
