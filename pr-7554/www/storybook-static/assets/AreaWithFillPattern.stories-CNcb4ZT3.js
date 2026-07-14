import{R as t}from"./iframe-B5C9KTx6.js";import{R as p}from"./zIndexSlice-DWIJ7njb.js";import{C as m}from"./ComposedChart-Ioa1DS1M.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DHcNfcHF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BbpYnvP-.js";import"./index-DqoBz7Th.js";import"./index-2f6O6x8k.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CyjCxujM.js";import"./isWellBehavedNumber-D81K5xCr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LcQsrP5q.js";import"./index-Cc-xdkS4.js";import"./index-CcYL9FAW.js";import"./renderedTicksSlice-C1Unvwoa.js";import"./axisSelectors-DNhpWmqM.js";import"./d3-scale-C_LGDl3j.js";import"./CartesianChart-CdAE6abg.js";import"./chartDataContext-BUicgLG9.js";import"./CategoricalChart-CxbxfGOc.js";import"./Layer-B1gLrgGj.js";import"./AnimatedItems-CboUjumK.js";import"./Label-BqsOZO9Z.js";import"./Text-CAlHzKeZ.js";import"./DOMUtils-DWemK0zS.js";import"./ZIndexLayer-BjQPgVfD.js";import"./useAnimationId-B9XgvcqX.js";import"./ActivePoints-Bphq3wpq.js";import"./Dot-BhAsUEQD.js";import"./types-Ca2Hpkj5.js";import"./RegisterGraphicalItemId-C9s_9ELq.js";import"./GraphicalItemClipPath-DBJwGDNu.js";import"./SetGraphicalItem-DFLthVJ4.js";import"./getRadiusAndStrokeWidthFromDot-DOjcOwBz.js";import"./ActiveShapeUtils-DHp3h3tZ.js";import"./Curve-Bcxn_nu1.js";import"./step-BO5HL1Kb.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BpumiOSR.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
