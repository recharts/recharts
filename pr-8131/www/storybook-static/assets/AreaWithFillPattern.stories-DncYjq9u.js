import{R as t}from"./iframe-SkF1Z4RX.js";import{R as p}from"./zIndexSlice-Di849QVt.js";import{C as m}from"./ComposedChart-CQq3s6LL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-W5_Fg9_N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Doom015c.js";import"./throttle-DtLWJI8N.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./RechartsWrapper-D7eCqZJw.js";import"./axisSelectors-BsfIJIuR.js";import"./polarAxisSelectors-BotG4f4O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkXd-iRe.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./Layer-CVy-0b4t.js";import"./LabelList-iUgi9C9_.js";import"./Label-Cq-EymG9.js";import"./Text-BJaHuQQc.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./ActivePoints-NIeWtT_V.js";import"./Dot-CRvYYT1z.js";import"./types-j8xWAYxX.js";import"./activeStyles-f736jV_-.js";import"./useAnimationId-_Q1GlxqN.js";import"./dataEntryStyles-BsghJbw2.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getRadiusAndStrokeWidthFromDot-C10IayrY.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./Curve-6N2VVfLG.js";import"./step-CspGBwNT.js";import"./useEffectiveDataKey-DnqAh09W.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
