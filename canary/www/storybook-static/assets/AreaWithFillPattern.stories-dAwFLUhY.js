import{R as t}from"./iframe-1v9h95J8.js";import{R as p}from"./zIndexSlice-BhjZ46tE.js";import{C as m}from"./ComposedChart-CQ6NotWx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Ds4i4dDK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy0aiko3.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./axisSelectors-BWhm0UuR.js";import"./d3-scale-qCvwfRiK.js";import"./renderedTicksSlice-CbFboWTW.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./CategoricalChart-3eK3rQ5j.js";import"./Layer-BGkgrUb2.js";import"./AnimatedItems-BtjOxZbL.js";import"./Label-CLKDqP8g.js";import"./Text-t2WYL4eB.js";import"./DOMUtils-Duwm3W6u.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./ZIndexLayer-ClRRfs-A.js";import"./useAnimationId-1FoMJdgT.js";import"./ActivePoints-BMT_QtoQ.js";import"./Dot-BB2fWryZ.js";import"./types-Bc5JlxqX.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getRadiusAndStrokeWidthFromDot-BDAbQB1I.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./Curve-CZh9TamE.js";import"./step-BpAcBh1s.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJQDelow.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
