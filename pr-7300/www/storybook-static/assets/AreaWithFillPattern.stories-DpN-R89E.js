import{e as t}from"./iframe-BR42SwHx.js";import{R as p}from"./arrayEqualityCheck-BTlu6_X5.js";import{C as m}from"./ComposedChart-dNCERGfx.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CdALuVQX.js";import{R as l}from"./RechartsHookInspector-BoeADalq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./immer-CBsUjXpI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0DQb4gv.js";import"./index-D16v1uX6.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./d3-scale-UZASi0oQ.js";import"./zIndexSlice-DLL8OYNe.js";import"./renderedTicksSlice-C8E2aIah.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./Curve-MgYQVsjt.js";import"./types-CNxj5JXu.js";import"./step-CO8PYd_W.js";import"./Layer-DvQoXU13.js";import"./ReactUtils-CgBYlHJF.js";import"./Label-DVExpSeB.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./ZIndexLayer-8Duyh3JO.js";import"./ActivePoints-DIaFZui8.js";import"./Dot-mjncFdWi.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./useAnimationId-B6YKrKnq.js";import"./getRadiusAndStrokeWidthFromDot-zEBVevUM.js";import"./graphicalItemSelectors-BMIBIuIH.js";import"./index-2-eZpp4N.js";import"./ChartSizeDimensions-FLfKJQs_.js";import"./OffsetShower-DtintQJW.js";import"./PlotAreaShower-C0gn6wTT.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
