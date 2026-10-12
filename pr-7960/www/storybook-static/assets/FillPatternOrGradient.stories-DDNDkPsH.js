import{R as t}from"./iframe-BqTe2UMP.js";import{R as s}from"./zIndexSlice-GTynhOsS.js";import{C as m}from"./ComposedChart-BWB9SKNi.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-BVNRn7JB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-PmeTbXwQ.js";import"./index-CM2oe_lg.js";import"./index-CG7aEEME.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1c7_8SpD.js";import"./isWellBehavedNumber-BqrJeuDz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWqjI8ow.js";import"./axisSelectors-lM2vG64O.js";import"./d3-scale-DWaVLjKI.js";import"./index-DCgfcJWI.js";import"./index-CwY_lGiF.js";import"./renderedTicksSlice-CNIelq8e.js";import"./index-2KC7EUkH.js";import"./CartesianChart-BNeCXpfh.js";import"./chartDataContext-Bf8mKNm_.js";import"./CategoricalChart-D6_cM4w9.js";import"./Layer-BZqCsxZY.js";import"./activeStyles-A8WZQcUr.js";import"./Label-C4tYPzVx.js";import"./Text-DWSqExsy.js";import"./pageBackground-CkUHzRfu.js";import"./useId-C8HkpFIm.js";import"./useBackwardsCompatibleTheme-B_ORpNqj.js";import"./ZIndexLayer-CvPcnuan.js";import"./useAnimationId-D1_C1lZo.js";import"./dataEntryStyles-jb_0UPIc.js";import"./types-YR4m-55g.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8NPhxuN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-gWmw8qk4.js";import"./tooltipContext-Deo6GrPh.js";import"./ErrorBarContext-D6ZWbiIN.js";import"./GraphicalItemClipPath-B2ZrWFWd.js";import"./SetGraphicalItem-BGuonubA.js";import"./getZIndexFromUnknown-CVFIVfuY.js";import"./useEffectiveDataKey-x1RSS2yk.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
