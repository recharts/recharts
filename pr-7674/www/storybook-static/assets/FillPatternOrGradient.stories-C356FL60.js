import{R as t}from"./iframe-Cuz0ArBZ.js";import{R as s}from"./zIndexSlice-BM2UDWO3.js";import{C as m}from"./ComposedChart-T-m9qZYj.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DGrC5G5e.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2UP89es.js";import"./index-D4JBGtbh.js";import"./index-DJ25wrw2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFRYrt1w.js";import"./isWellBehavedNumber-BNR7n96m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C1GsE6D6.js";import"./index-CnjN1eJY.js";import"./index-B7Kpo2ne.js";import"./axisSelectors-Uf2etwQJ.js";import"./d3-scale-BU8ngyGj.js";import"./renderedTicksSlice-DoN5idQ6.js";import"./CartesianChart-D4ZrgDD1.js";import"./chartDataContext-COxhzolJ.js";import"./CategoricalChart-b2JFE4qY.js";import"./Layer-BxHvVvNo.js";import"./AnimatedItems-Bq9Cx-Mo.js";import"./Label-CD264HLQ.js";import"./Text-DWRXNVQj.js";import"./DOMUtils-DmogtD9z.js";import"./useId-CG7ic0vo.js";import"./useBackwardsCompatibleTheme-CTjF-q2C.js";import"./ZIndexLayer-B2d0C2Gc.js";import"./useAnimationId-BcIXJdGX.js";import"./types-DHaro4o6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cm_5RFWU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FehVzgEA.js";import"./tooltipContext-C3b68y4I.js";import"./RegisterGraphicalItemId-B9mLA6kv.js";import"./ErrorBarContext-BXjCcKD5.js";import"./GraphicalItemClipPath-DwzWsDMq.js";import"./SetGraphicalItem-BNqnvDS1.js";import"./getZIndexFromUnknown-BzU-uW9f.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BQxh5-Wi.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}};var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const rt=["Fill"];export{e as Fill,rt as __namedExportsOrder,et as default};
