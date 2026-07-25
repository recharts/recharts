import{R as t}from"./iframe-DNItCT7m.js";import{R as p}from"./zIndexSlice-BIc7DaAW.js";import{C as m}from"./ComposedChart-C5LgD4az.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CTFjU93O.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6rBLGvR.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl2ououO.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./index-C_m6BLaT.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./axisSelectors-BBK9nbq3.js";import"./d3-scale-CToN17b5.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./Layer-Db2cjn9q.js";import"./AnimatedItems-CA_PH1lw.js";import"./Label-Dd-8-k84.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./useAnimationId-0YgIZ0Y8.js";import"./ActivePoints-DrmmrcJw.js";import"./Dot-CBZvltEJ.js";import"./types-BUhan55B.js";import"./RegisterGraphicalItemId-DzuoUeII.js";import"./GraphicalItemClipPath-DTm1hIPW.js";import"./SetGraphicalItem-B0-RRBJT.js";import"./getRadiusAndStrokeWidthFromDot-DPqVYI7W.js";import"./ActiveShapeUtils-DbSW9g1N.js";import"./Curve-DUQP-DVq.js";import"./step-CV_HIcdR.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DTMH4QI8.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
