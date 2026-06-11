import{R as t}from"./iframe-DVB9NpZr.js";import{R as p}from"./zIndexSlice-inUr0xCU.js";import{C as m}from"./ComposedChart-oQ-te1DN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BCyY6oYa.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-cUFuezMs.js";import"./index-jND3wDEX.js";import"./index-BFwMZWAZ.js";import"./get-DFBBhs2u.js";import"./resolveDefaultProps-B0kvhTPY.js";import"./isWellBehavedNumber-B9edeUWc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-dTztbV_h.js";import"./index-r4smWfCS.js";import"./index-DwUGYNg_.js";import"./renderedTicksSlice-BJczlu3R.js";import"./axisSelectors-ORdVTni-.js";import"./d3-scale-wZkz8Wtl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DFuv_KZ0.js";import"./chartDataContext-8-Op06e4.js";import"./CategoricalChart-onThNRP3.js";import"./Layer-CznYhS6e.js";import"./AnimatedItems-DN0vzfw4.js";import"./Label-C-9e4xzc.js";import"./Text-RO4N7_ds.js";import"./DOMUtils-b4dXHa1v.js";import"./ZIndexLayer-YpWmKYVa.js";import"./useAnimationId-D_d0Diy_.js";import"./ActivePoints-B3oYHQTk.js";import"./Dot-EUv2v8ot.js";import"./types-CmHpCyOi.js";import"./RegisterGraphicalItemId-Vv-Ra_xy.js";import"./GraphicalItemClipPath-BA-fwdVj.js";import"./SetGraphicalItem-CkCRo3rW.js";import"./getRadiusAndStrokeWidthFromDot-CSFUoSlb.js";import"./ActiveShapeUtils-BQiDuR0w.js";import"./Curve-Ct2rphZk.js";import"./step-CVw2yAQM.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C16TioBL.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
