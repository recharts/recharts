import{R as t}from"./iframe-XShEXmHR.js";import{R as p}from"./zIndexSlice-BbKyzabk.js";import{C as m}from"./ComposedChart-Buz-P00K.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BGVDyImK.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DGpDaXVx.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DM0s23ft.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-WU0hX8ZH.js";import"./axisSelectors-CSJ2InJO.js";import"./d3-scale-DlV_OlJQ.js";import"./index-B0AN-0kz.js";import"./index-C8Ku-gFK.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-CNWPVzDl.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./Layer-C_-u4_qv.js";import"./activeStyles-JUu5k5N9.js";import"./Label-PHQocy7u.js";import"./Text-DdUz3atv.js";import"./pageBackground-Caz1wwpV.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./ZIndexLayer-BjS9bgAg.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./ActivePoints-BWEWclRb.js";import"./Dot-CF6MExt8.js";import"./types-Du-HQFzW.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./getRadiusAndStrokeWidthFromDot-B8bE17TU.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./Curve-BLSppaDw.js";import"./step-DYrGddVY.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-Ca_DBmdg.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
