import{R as t}from"./iframe-sd_X8bAz.js";import{R as p}from"./zIndexSlice-DbArepHL.js";import{C as m}from"./ComposedChart-CKHYOg18.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BmNM8kYZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-2gz7Gpxn.js";import"./index-DQHeaU2g.js";import"./index-B4I4wfZA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-bueunEgf.js";import"./isWellBehavedNumber-D-FFIB2G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMlKTkdw.js";import"./index-zmb0gbyG.js";import"./index-DZ983I6W.js";import"./axisSelectors-DssFyd1_.js";import"./d3-scale-C-KqVawR.js";import"./renderedTicksSlice-BaC5qXRY.js";import"./CartesianChart-BDbsS6IT.js";import"./chartDataContext-B6Fdiy4W.js";import"./CategoricalChart-Cqi_maR-.js";import"./Layer-D66jRg_t.js";import"./AnimatedItems-B5JWoVFx.js";import"./Label-BPdPutID.js";import"./Text-BxgHUkK-.js";import"./DOMUtils-koMSW9nS.js";import"./useId-D6dXaFl8.js";import"./useBackwardsCompatibleTheme-CIVTy4Me.js";import"./ZIndexLayer-DVaVbWL-.js";import"./useAnimationId-iF8C_Nzd.js";import"./ActivePoints-Bx0X1g0d.js";import"./Dot-JozVq32O.js";import"./types-BfsDnBCz.js";import"./RegisterGraphicalItemId-1K3qw_t6.js";import"./GraphicalItemClipPath-CoP9pSKP.js";import"./SetGraphicalItem-DN7uVNhv.js";import"./getRadiusAndStrokeWidthFromDot-Bvk01GUs.js";import"./ActiveShapeUtils-CFyZWuxn.js";import"./Curve-VFw1Cyl5.js";import"./step-SkwaH9zG.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-rD-nYf5o.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
