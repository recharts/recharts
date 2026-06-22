import{R as t}from"./iframe-DghEAMN6.js";import{R as p}from"./zIndexSlice-DZVgvaAB.js";import{C as m}from"./ComposedChart-CHfOsQFV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B-nqXIJp.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Dzr4hzbh.js";import"./index-DwTkm5Gc.js";import"./index-BNbzKJUN.js";import"./get-OeFwIBZb.js";import"./resolveDefaultProps-DtqwpnL6.js";import"./isWellBehavedNumber-2WeEbslz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--epX0hHz.js";import"./index-CHxwPLCw.js";import"./index-FvypkAhj.js";import"./renderedTicksSlice-xCX0SP0o.js";import"./axisSelectors-Cx52Tyf1.js";import"./d3-scale-CUSv4nyH.js";import"./CartesianChart-B2gIIl6u.js";import"./chartDataContext-DmtHMzxl.js";import"./CategoricalChart-mficH34_.js";import"./Layer-4aUlzdTp.js";import"./AnimatedItems-ChrydhAM.js";import"./Label-5l5u0djs.js";import"./Text-3TARh6pc.js";import"./DOMUtils-Qs3kgbuH.js";import"./ZIndexLayer-DDP5Eu2k.js";import"./useAnimationId-bXkDgMGB.js";import"./ActivePoints-bLjk4mq2.js";import"./Dot-CKGCQ671.js";import"./types-Beb7Z0cf.js";import"./RegisterGraphicalItemId-BH9Fw2h1.js";import"./GraphicalItemClipPath-B_ue0lJA.js";import"./SetGraphicalItem-DyRJQvTd.js";import"./getRadiusAndStrokeWidthFromDot-7qCiPA0M.js";import"./ActiveShapeUtils-_OCeFGs0.js";import"./Curve-AO8nrk2K.js";import"./step-mxE-OcC-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-r2j0e_dY.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
