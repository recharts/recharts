import{R as t}from"./iframe-9izd3D9f.js";import{R as p}from"./zIndexSlice-j8GW4H6F.js";import{C as m}from"./ComposedChart-CUUhu7OO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-9oR07zrC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dy12ptOd.js";import"./index-DfNj7uF8.js";import"./index-QeEXQkn5.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CJPuqJ9q.js";import"./isWellBehavedNumber-Dt2_Y5DC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CpTAS-BM.js";import"./index-DrKXWdQ6.js";import"./index-D25GhdX2.js";import"./renderedTicksSlice-xsvpNcHR.js";import"./axisSelectors-C_YuJB8n.js";import"./d3-scale-592QtAt9.js";import"./CartesianChart-Cdk7-_gT.js";import"./chartDataContext-D7Iq0aTs.js";import"./CategoricalChart-B8CDnPPF.js";import"./Layer-CGfY9rzU.js";import"./AnimatedItems-BaOOJr-i.js";import"./Label-DH_iQkHv.js";import"./Text-DrtU0dSh.js";import"./DOMUtils-BT3FOC_T.js";import"./ZIndexLayer-CbN30hBP.js";import"./useAnimationId-DwScawE-.js";import"./ActivePoints-DABmwt2C.js";import"./Dot-BOLG4WLO.js";import"./types-DZJVpBfQ.js";import"./RegisterGraphicalItemId-DMscoraw.js";import"./GraphicalItemClipPath-DPeQpV-c.js";import"./SetGraphicalItem-DzCkGHMg.js";import"./getRadiusAndStrokeWidthFromDot-BjpuMrzG.js";import"./ActiveShapeUtils-BG6vmKAa.js";import"./Curve-CwmLK7S7.js";import"./step-BVbRt37Q.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CV94R21c.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
