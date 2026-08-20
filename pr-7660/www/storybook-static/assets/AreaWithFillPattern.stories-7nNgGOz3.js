import{R as t}from"./iframe-zwg8Ck3J.js";import{R as p}from"./zIndexSlice-NosrfnoV.js";import{C as m}from"./ComposedChart-B4XJvNSo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D9DDuKfC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Ba88YkIO.js";import"./index-IvyDBjKP.js";import"./index-OSBoZXok.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DG88vi2D.js";import"./isWellBehavedNumber-CwtCjuBS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJ_EMk4a.js";import"./index-CbO-5G1T.js";import"./index-DgDwqqQh.js";import"./axisSelectors-B51wYZzi.js";import"./d3-scale-BoLYoZ-J.js";import"./renderedTicksSlice-Df0H0Vcu.js";import"./CartesianChart-DJ82atYN.js";import"./chartDataContext-BLU5FY0s.js";import"./CategoricalChart-COKLxFKu.js";import"./Layer-BMjk1XnO.js";import"./AnimatedItems-m2rS7Ine.js";import"./Label-Bd61VRBp.js";import"./Text-B5wvjkWp.js";import"./DOMUtils-DeVFgjhY.js";import"./useId-BhnbWZv2.js";import"./useBackwardsCompatibleTheme-CUoFrMEf.js";import"./ZIndexLayer-B0otcv7p.js";import"./useAnimationId-CNfugt_c.js";import"./ActivePoints-COOLxxHx.js";import"./Dot-Cd6zRWlN.js";import"./types-Cw6qbFf6.js";import"./RegisterGraphicalItemId-BdhGFYIv.js";import"./GraphicalItemClipPath-DzwEZpNn.js";import"./SetGraphicalItem-C-Nezax8.js";import"./getRadiusAndStrokeWidthFromDot-5Aw72VVf.js";import"./ActiveShapeUtils-CVVSTnC5.js";import"./Curve-DTQAtFrE.js";import"./step-CQ4et_T9.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C86WNwJ9.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
