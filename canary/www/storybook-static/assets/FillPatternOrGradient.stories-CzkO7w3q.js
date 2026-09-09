import{R as t}from"./iframe-DsxZlU5r.js";import{R as s}from"./zIndexSlice-C9X4WKOn.js";import{C as m}from"./ComposedChart-DanorgSA.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-D5P1MOki.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-UzrpYZZa.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-txR9uiFl.js";import"./isWellBehavedNumber-CTT7gzfy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwO2SplL.js";import"./axisSelectors-BqZ8E3_i.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./Layer-C9CQXPgt.js";import"./AnimatedItems-D0Io6hoN.js";import"./Label-W_BNIllg.js";import"./Text-rMrFJjxt.js";import"./DOMUtils-DeolnxnC.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./useAnimationId-BTOaFYFg.js";import"./types-DNLq32QI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Y7TKK3zv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWfz214x.js";import"./tooltipContext-CqKrYQht.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./getZIndexFromUnknown-CN6ZCCqF.js";import"./useGraphicalItemIdentity-DcyTJT25.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
