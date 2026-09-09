import{R as t}from"./iframe-DkIbxCKI.js";import{R as s}from"./zIndexSlice-CHbZzwgN.js";import{C as m}from"./ComposedChart-AmLF4jNt.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-DBwLR-Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CWb9XQe7.js";import"./index-yECzrrEn.js";import"./index-B09gEsNA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BevWDyyN.js";import"./isWellBehavedNumber-fyAAr-BE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqxFYmG2.js";import"./axisSelectors-B_cE3_9l.js";import"./d3-scale-8ot6xaxi.js";import"./index-CgyukL1G.js";import"./index-x7Df9KyH.js";import"./renderedTicksSlice-DyBDLYr8.js";import"./index-BccjzSMV.js";import"./CartesianChart-CLeTDcJ1.js";import"./chartDataContext-CWOneN2n.js";import"./CategoricalChart-De8d0Fqy.js";import"./Layer-D7vk6n2M.js";import"./AnimatedItems-CIN2lrWw.js";import"./Label-DXoCOeOg.js";import"./Text-BbOUDRzF.js";import"./DOMUtils-BUKWldcd.js";import"./useId-8qRrdFWs.js";import"./useBackwardsCompatibleTheme-BwQOOq4w.js";import"./ZIndexLayer-BJyXs-Ro.js";import"./useAnimationId-DMHPZlQv.js";import"./types-CwHWliOY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CcvMQD5l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMEDiyrE.js";import"./tooltipContext-D_1DAJCL.js";import"./RegisterGraphicalItemId-lA-3F1_K.js";import"./ErrorBarContext-C70mMVNC.js";import"./GraphicalItemClipPath-DKslCQDi.js";import"./SetGraphicalItem-CEswJxM0.js";import"./getZIndexFromUnknown-D7dPzLOV.js";import"./useGraphicalItemIdentity-BZv1ZQCF.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
