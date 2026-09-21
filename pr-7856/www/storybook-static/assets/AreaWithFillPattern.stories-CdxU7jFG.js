import{R as t}from"./iframe-B-kCJkOw.js";import{R as p}from"./zIndexSlice-Clv-Wr_e.js";import{C as m}from"./ComposedChart-BAXW9VrG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-hCO2mmN3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DVuM4iFd.js";import"./index-DcAa2UuL.js";import"./index-CBKTbWE1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhhOMDdt.js";import"./isWellBehavedNumber-C4FzwffV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D3el3knR.js";import"./axisSelectors-DT9SmTCn.js";import"./d3-scale-IzH54SGl.js";import"./index-2QimBBuf.js";import"./index-BVh04Hzh.js";import"./renderedTicksSlice-C6ma__-i.js";import"./index-CmAyTwir.js";import"./CartesianChart-C3VLYHct.js";import"./chartDataContext-CikOGl8V.js";import"./CategoricalChart-CVXqoPY8.js";import"./Layer-DUmzLecA.js";import"./AnimatedItems-BgnTcQ58.js";import"./Label-CshHc_P8.js";import"./Text-DvIEDZcH.js";import"./DOMUtils-CWJWmJqm.js";import"./useId-DGNKKzIZ.js";import"./useBackwardsCompatibleTheme-D27rYUis.js";import"./ZIndexLayer-yM8iQkyd.js";import"./useAnimationId-Bkh3_vjS.js";import"./ActivePoints-DYudjPxL.js";import"./Dot-BKZoXX6K.js";import"./types-1S0vnYpD.js";import"./RegisterGraphicalItemId-DX8EYk4F.js";import"./GraphicalItemClipPath-Bf7ClEec.js";import"./SetGraphicalItem-DlY4dRC7.js";import"./getRadiusAndStrokeWidthFromDot-DPuw4jnu.js";import"./ActiveShapeUtils-C14ipRtW.js";import"./Curve-__pvox1D.js";import"./step-DoJnsDJu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-wZgDD3hk.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
